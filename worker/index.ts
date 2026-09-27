// timgaull.com Worker. It runs before every request so it can send every other
// domain Tim owns (timothygaull.com, www, misspellings) to timgaull.com, then serves
// the static pages from ./dist. It also gates the free kit behind a human check and an email.
//
//   POST /api/kit/request   honeypot → email → rate limit → Turnstile siteverify
//                           → save signup → return a short-lived download link
//   GET  /api/kit/download  verify the link's signature and expiry → the zip
import kitZip from '../kit-build/ai-foundation-kit.zip';

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  TURNSTILE_SECRET: string;
  DOWNLOAD_SIGNING_KEY: string;
  TURNSTILE_HOSTNAMES: string;
  TIP_URL: string;
  // Local development only (.dev.vars). Lets Cloudflare's always-pass test keys through,
  // which report no action and a placeholder hostname. Never set in production.
  TURNSTILE_TEST_MODE?: string;
}

const CANONICAL_HOST = 'timgaull.com';
const ACTION = 'kit_download';
const LINK_TTL_SECONDS = 15 * 60;
const MAX_ATTEMPTS_PER_HOUR = 10;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (shouldRedirect(url.hostname)) {
      return Response.redirect(`https://${CANONICAL_HOST}${url.pathname}${url.search}`, 301);
    }
    if (url.pathname.startsWith('/api/') && (!env.DOWNLOAD_SIGNING_KEY || !env.TURNSTILE_SECRET)) {
      return json({ error: 'not_configured' }, 503);
    }
    if (url.pathname === '/api/kit/request' && request.method === 'POST') return requestKit(request, env);
    if (url.pathname === '/api/kit/download' && request.method === 'GET') return downloadKit(url, env);
    if (url.pathname.startsWith('/api/')) return json({ error: 'not_found' }, 404);
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

// Everything except the canonical host redirects. Local dev and the temporary workers.dev
// address are left alone so the site can be tested before the domains move.
function shouldRedirect(host: string): boolean {
  if (host === CANONICAL_HOST || host === 'localhost' || host === '127.0.0.1') return false;
  if (host.endsWith('.workers.dev')) return false;
  return true;
}

async function requestKit(request: Request, env: Env): Promise<Response> {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'bad_request' }, 400);
  }

  // Honeypot: a field people never see. Bots that fill every input get a quiet refusal.
  if (typeof body.website === 'string' && body.website.trim() !== '') return json({ error: 'bad_request' }, 400);

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (email.length > 254 || !EMAIL_RE.test(email)) return json({ error: 'invalid_email' }, 400);
  const name = typeof body.name === 'string' ? body.name.trim().slice(0, 120) : '';
  const wantsUpdates = body.updates === true ? 1 : 0;
  const token = body.token;
  if (typeof token !== 'string' || token.length === 0 || token.length > 2048) return json({ error: 'verification_failed' }, 403);

  // Rate limit by a keyed hash of the IP, so raw addresses are never stored.
  const ip = request.headers.get('CF-Connecting-IP') ?? '';
  const ipHash = await hmacHex(env.DOWNLOAD_SIGNING_KEY, `ip:${ip}`);
  const now = Math.floor(Date.now() / 1000);
  await env.DB.prepare('DELETE FROM attempts WHERE at < ?').bind(now - 3600).run();
  const recent = await env.DB.prepare('SELECT COUNT(*) AS n FROM attempts WHERE ip_hash = ?').bind(ipHash).first<{ n: number }>();
  if ((recent?.n ?? 0) >= MAX_ATTEMPTS_PER_HOUR) return json({ error: 'rate_limited' }, 429);
  await env.DB.prepare('INSERT INTO attempts (ip_hash, at) VALUES (?, ?)').bind(ipHash, now).run();

  if (!(await verifyTurnstile(token, ip, env))) return json({ error: 'verification_failed' }, 403);

  const stamp = new Date().toISOString();
  await env.DB.prepare(
    `INSERT INTO signups (email, name, wants_updates, created_at, last_download_at, download_count)
     VALUES (?1, ?2, ?3, ?4, ?4, 1)
     ON CONFLICT(email) DO UPDATE SET
       name = COALESCE(NULLIF(excluded.name, ''), signups.name),
       wants_updates = MAX(signups.wants_updates, excluded.wants_updates),
       last_download_at = excluded.last_download_at,
       download_count = signups.download_count + 1`,
  )
    .bind(email, name, wantsUpdates, stamp)
    .run();

  const exp = now + LINK_TTL_SECONDS;
  const sig = await hmacHex(env.DOWNLOAD_SIGNING_KEY, `download:${exp}`);
  return json({ download: `/api/kit/download?exp=${exp}&sig=${sig}`, tip: env.TIP_URL || null });
}

async function verifyTurnstile(token: string, ip: string, env: Env): Promise<boolean> {
  const hostnames = new Set(
    (env.TURNSTILE_HOSTNAMES ?? '')
      .split(',')
      .map((h) => h.trim())
      .filter(Boolean),
  );
  if (!env.TURNSTILE_SECRET || hostnames.size === 0) return false;

  let result: { success?: boolean; action?: string; hostname?: string; metadata?: { result_with_testing_key?: boolean } };
  try {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      signal: AbortSignal.timeout(10_000),
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: token, remoteip: ip }),
    });
    if (!r.ok) return false;
    result = await r.json();
  } catch {
    return false; // fail closed
  }
  if (result.success !== true) return false;
  if (env.TURNSTILE_TEST_MODE === '1' && result.metadata?.result_with_testing_key === true) return true;
  return result.action === ACTION && typeof result.hostname === 'string' && hostnames.has(result.hostname);
}

async function downloadKit(url: URL, env: Env): Promise<Response> {
  const exp = Number(url.searchParams.get('exp'));
  const sig = url.searchParams.get('sig') ?? '';
  const now = Math.floor(Date.now() / 1000);
  if (!Number.isInteger(exp) || exp < now || exp > now + LINK_TTL_SECONDS) return expired();
  const expected = await hmacHex(env.DOWNLOAD_SIGNING_KEY, `download:${exp}`);
  if (!timingSafeEqual(sig, expected)) return expired();
  return new Response(kitZip, {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename="ai-foundation-kit.zip"',
      'Cache-Control': 'private, no-store',
    },
  });
}

function expired(): Response {
  return new Response('This download link has expired. Request a new one at https://timgaull.com/kit/', {
    status: 403,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

async function hmacHex(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return [...new Uint8Array(mac)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}
