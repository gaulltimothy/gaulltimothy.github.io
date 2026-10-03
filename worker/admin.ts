// Private dashboard at /admin/: kit signups and intro-call requests, for Tim only.
//
// Two locks. Cloudflare Access sits in front of /admin/ and handles the login (a one-time code
// sent to an approved email). This module then checks Access's signed token on every request:
// the signature against Access's published keys, the audience, the issuer, the expiry, and that the
// email is on ADMIN_EMAILS. If Access isn't configured, or anything fails, the page answers 404,
// so a misconfiguration never exposes signups.

export interface AdminEnv {
  DB: D1Database;
  ACCESS_TEAM_DOMAIN?: string; // e.g. "timothygaull.cloudflareaccess.com"
  ACCESS_AUD?: string; // the Access application's audience tag
  ADMIN_EMAILS?: string; // comma-separated
}

const notFound = () =>
  new Response('Not found', { status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' } });

const privateHeaders = {
  'Cache-Control': 'no-store',
  'X-Robots-Tag': 'noindex, nofollow',
  'Referrer-Policy': 'no-referrer',
  'X-Frame-Options': 'DENY',
};

export async function handleAdmin(request: Request, env: AdminEnv, url: URL): Promise<Response> {
  if (request.method !== 'GET') return notFound();
  const email = await verifyAccess(request, env);
  if (!email) return notFound();

  if (url.pathname === '/admin/signups.csv') {
    const { results } = await env.DB.prepare('SELECT created_at, name, email, wants_updates, download_count, last_download_at FROM signups ORDER BY created_at DESC').all();
    return csv(results, 'signups.csv');
  }
  if (url.pathname === '/admin/intro-requests.csv') {
    const { results } = await env.DB.prepare('SELECT * FROM intro_requests ORDER BY created_at DESC').all();
    return csv(results, 'intro-requests.csv');
  }
  if (url.pathname === '/admin/feedback.csv') {
    const { results } = await env.DB.prepare('SELECT * FROM feedback ORDER BY created_at DESC').all();
    return csv(results, 'feedback.csv');
  }
  if (url.pathname === '/admin/' || url.pathname === '/admin') return dashboard(env, email);
  return notFound();
}

// ---- Access token check -------------------------------------------------------------------------

interface Jwk { kid: string; kty: string; n: string; e: string; alg?: string }
let keyCache: { at: number; keys: Jwk[] } | null = null;

async function accessKeys(team: string): Promise<Jwk[]> {
  if (keyCache && Date.now() - keyCache.at < 60 * 60 * 1000) return keyCache.keys;
  const res = await fetch(`https://${team}/cdn-cgi/access/certs`);
  if (!res.ok) throw new Error('certs unavailable');
  const body = (await res.json()) as { keys: Jwk[] };
  keyCache = { at: Date.now(), keys: body.keys };
  return body.keys;
}

const b64url = (s: string) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(s.length / 4) * 4, '=')), (c) => c.charCodeAt(0));

async function verifyAccess(request: Request, env: AdminEnv): Promise<string | null> {
  const team = env.ACCESS_TEAM_DOMAIN;
  const aud = env.ACCESS_AUD;
  const allowed = (env.ADMIN_EMAILS ?? '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);
  if (!team || !aud || !allowed.length) return null;
  const token = request.headers.get('Cf-Access-Jwt-Assertion');
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  try {
    const header = JSON.parse(new TextDecoder().decode(b64url(parts[0]))) as { kid?: string; alg?: string };
    const payload = JSON.parse(new TextDecoder().decode(b64url(parts[1]))) as { aud?: string | string[]; iss?: string; exp?: number; nbf?: number; email?: string };
    if (header.alg !== 'RS256') return null;
    const jwk = (await accessKeys(team)).find((k) => k.kid === header.kid);
    if (!jwk) return null;
    const key = await crypto.subtle.importKey('jwk', { ...jwk, alg: 'RS256', ext: true }, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
    const ok = await crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, b64url(parts[2]), new TextEncoder().encode(`${parts[0]}.${parts[1]}`));
    if (!ok) return null;
    const now = Math.floor(Date.now() / 1000);
    const auds = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
    if (!auds.includes(aud)) return null;
    if (payload.iss !== `https://${team}`) return null;
    if (!payload.exp || payload.exp < now) return null;
    if (payload.nbf && payload.nbf > now + 60) return null;
    const email = (payload.email ?? '').toLowerCase();
    return allowed.includes(email) ? email : null;
  } catch {
    return null;
  }
}

// ---- Pages ----------------------------------------------------------------------------------------

const esc = (v: unknown) =>
  String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const when = (iso: unknown) => {
  if (!iso) return '';
  const d = new Date(String(iso));
  return isNaN(d.getTime()) ? esc(iso) : d.toLocaleString('en-US', { timeZone: 'America/Chicago', dateStyle: 'medium', timeStyle: 'short' });
};

function csv(rows: Record<string, unknown>[], name: string): Response {
  const cols = rows.length ? Object.keys(rows[0]) : [];
  const cell = (v: unknown) => {
    const s = String(v ?? '');
    const safe = /^[=+\-@]/.test(s) ? `'${s}` : s; // keep spreadsheets from running cell text as formulas
    return /[",\n]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe;
  };
  const body = [cols.join(','), ...rows.map((r) => cols.map((c) => cell(r[c])).join(','))].join('\n');
  return new Response(body, {
    headers: { ...privateHeaders, 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': `attachment; filename="${name}"` },
  });
}

async function dashboard(env: AdminEnv, email: string): Promise<Response> {
  const [totals, signups, intros, feedback] = await Promise.all([
    env.DB.prepare(
      `SELECT (SELECT COUNT(*) FROM signups) AS total,
              (SELECT COUNT(*) FROM signups WHERE wants_updates = 1) AS opted_in,
              (SELECT COUNT(*) FROM signups WHERE created_at >= datetime('now', '-7 days')) AS week,
              (SELECT COUNT(*) FROM intro_requests WHERE status = 'new') AS intro_new`,
    ).first<{ total: number; opted_in: number; week: number; intro_new: number }>(),
    env.DB.prepare('SELECT created_at, name, email, wants_updates, download_count FROM signups ORDER BY created_at DESC LIMIT 200').all(),
    env.DB.prepare('SELECT created_at, name, email, company, business, pain, timeline, budget, status FROM intro_requests ORDER BY created_at DESC LIMIT 100').all(),
    env.DB.prepare('SELECT * FROM feedback ORDER BY created_at DESC LIMIT 100').all(),
  ]);
  const t = totals ?? { total: 0, opted_in: 0, week: 0, intro_new: 0 };

  const signupRows = signups.results.length
    ? signups.results
        .map((r) => `<tr><td>${when(r.created_at)}</td><td>${esc(r.name) || '<span class="m">none given</span>'}</td><td><a href="mailto:${esc(r.email)}">${esc(r.email)}</a></td><td>${r.wants_updates ? 'Yes' : 'No'}</td><td>${esc(r.download_count)}</td></tr>`)
        .join('')
    : '<tr><td colspan="5" class="m">No signups yet.</td></tr>';

  const introRows = intros.results.length
    ? intros.results
        .map(
          (r) => `<article class="req"><header><strong>${esc(r.name)}</strong>${r.company ? ` · ${esc(r.company)}` : ''} <span class="tag">${esc(r.status)}</span><span class="m"> ${when(r.created_at)}</span></header>
<p><a href="mailto:${esc(r.email)}">${esc(r.email)}</a></p>
<dl><dt>Business</dt><dd>${esc(r.business)}</dd><dt>What's in the way</dt><dd>${esc(r.pain)}</dd>${r.timeline ? `<dt>Timeline</dt><dd>${esc(r.timeline)}</dd>` : ''}${r.budget ? `<dt>Budget</dt><dd>${esc(r.budget)}</dd>` : ''}</dl></article>`,
        )
        .join('')
    : '<p class="m">No intro-call requests yet.</p>';

  const feedbackQuestions: [string, string][] = [
    ['before_state', 'Before'],
    ['tried', 'What they tried'],
    ['why_hire', 'Why they hired you'],
    ['first_meeting', 'First conversation'],
    ['first_look', 'First look'],
    ['now_can', 'What they can do now'],
    ['timing', 'Time and cost'],
    ['advice', 'To other owners'],
    ['anything_else', 'Anything else'],
  ];
  const feedbackRows = feedback.results.length
    ? feedback.results
        .map(
          (r) => `<article class="req"><header><strong>${esc(r.name)}</strong>${r.company ? ` · ${esc(r.company)}` : ''}${r.role ? ` · ${esc(r.role)}` : ''}<span class="m"> ${when(r.created_at)}</span></header>
<p><a href="mailto:${esc(r.email)}">${esc(r.email)}</a> · Name OK: ${r.ok_name ? 'Yes' : 'No'} · Photo OK: ${r.ok_photo ? 'Yes' : 'No'}</p>
<dl>${feedbackQuestions.filter(([k]) => r[k]).map(([k, label]) => `<dt>${label}</dt><dd>${esc(r[k])}</dd>`).join('')}</dl></article>`,
        )
        .join('')
    : '<p class="m">No client feedback yet. Send clients https://timothygaull.com/feedback/?company=Their%20Company</p>';

  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow"><title>Signups · timothygaull.com</title>
<style>
:root{--paper:#fdf8f7;--ink:#141414;--muted:#5c5856;--rule:#e8dfdc;--surface:#fff}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}
main{width:min(1100px,100% - 32px);margin:32px auto 64px}h1{font-size:1.8rem;margin:0 0 4px}h2{font-size:1.2rem;margin:40px 0 12px}
.m{color:var(--muted)}.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:24px 0}
.stat{background:var(--surface);border:1.5px solid var(--ink);border-radius:12px;padding:14px 16px}.stat b{display:block;font-size:2rem;line-height:1.1}
.wrap{overflow-x:auto;background:var(--surface);border:1px solid var(--rule);border-radius:12px}
table{border-collapse:collapse;width:100%;font-size:.92rem}th,td{text-align:left;padding:10px 12px;border-bottom:1px solid var(--rule);vertical-align:top}
th{font-size:.75rem;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}a{color:var(--ink)}
.req{background:var(--surface);border:1px solid var(--rule);border-radius:12px;padding:14px 16px;margin-bottom:12px}
.tag{font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;border:1px solid var(--ink);border-radius:999px;padding:1px 8px;margin-left:6px}
dl{display:grid;grid-template-columns:max-content 1fr;gap:4px 14px;margin:8px 0 0}dt{color:var(--muted)}dd{margin:0}
.dl a{margin-right:16px}@media(max-width:640px){.stats{grid-template-columns:repeat(2,minmax(0,1fr))}}
</style></head><body><main>
<h1>Signups</h1><p class="m">Private to ${esc(email)}. Times are Central.</p>
<section class="stats" aria-label="Totals">
<div class="stat"><b>${t.total}</b>kit signups</div>
<div class="stat"><b>${t.week}</b>in the last 7 days</div>
<div class="stat"><b>${t.opted_in}</b>opted in to the follow-up</div>
<div class="stat"><b>${t.intro_new}</b>new intro requests</div>
</section>
<p class="dl"><a href="/admin/signups.csv">Download signups (CSV)</a><a href="/admin/intro-requests.csv">Download intro requests (CSV)</a><a href="/admin/feedback.csv">Download client feedback (CSV)</a></p>
<h2>Kit signups</h2>
<div class="wrap"><table><thead><tr><th scope="col">When</th><th scope="col">Name</th><th scope="col">Email</th><th scope="col">Follow-up</th><th scope="col">Downloads</th></tr></thead><tbody>${signupRows}</tbody></table></div>
<h2>Intro-call requests</h2>${introRows}
<h2>Client feedback</h2>${feedbackRows}
<p class="m">Quote clients only after they approve the exact wording, and use names only where Name OK says Yes.</p>
<p class="m" style="margin-top:32px">Only email people who opted in to the follow-up, and only once site email with an unsubscribe link is set up.</p>
</main></body></html>`;
  return new Response(html, { headers: { ...privateHeaders, 'Content-Type': 'text/html; charset=utf-8' } });
}
