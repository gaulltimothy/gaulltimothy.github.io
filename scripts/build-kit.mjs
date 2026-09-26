// Zips kit/ai-foundation-kit into public/downloads so the download always matches the source.
// The zip holds one top-level folder with SKILL.md, which is the shape Claude expects for a skill upload.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync } from 'node:fs';

const out = 'public/downloads/ai-foundation-kit.zip';
if (!existsSync('kit/ai-foundation-kit/SKILL.md')) {
  console.warn('kit: kit/ai-foundation-kit/SKILL.md not found, skipping zip');
  process.exit(0);
}
mkdirSync('public/downloads', { recursive: true });
rmSync(out, { force: true });
execFileSync('zip', ['-rqX', `../${out}`, 'ai-foundation-kit', '-x', '*.DS_Store'], { cwd: 'kit', stdio: 'inherit' });
console.log(`kit: wrote ${out}`);
