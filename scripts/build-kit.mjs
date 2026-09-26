// Zips kit/ai-foundation-kit into kit-build/, which the Worker bundles and serves only
// after the kit form's checks pass. It must never land in public/, which is served to anyone.
// The zip holds one top-level folder with SKILL.md, which is the shape Claude expects for a skill upload.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync } from 'node:fs';

const out = 'kit-build/ai-foundation-kit.zip';
if (!existsSync('kit/ai-foundation-kit/SKILL.md')) {
  console.warn('kit: kit/ai-foundation-kit/SKILL.md not found, skipping zip');
  process.exit(0);
}
mkdirSync('kit-build', { recursive: true });
rmSync(out, { force: true });
execFileSync('zip', ['-rqX', `../${out}`, 'ai-foundation-kit', '-x', '*.DS_Store'], { cwd: 'kit', stdio: 'inherit' });
console.log(`kit: wrote ${out}`);
