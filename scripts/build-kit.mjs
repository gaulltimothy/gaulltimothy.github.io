// Zips kit/ai-foundation-kit into kit-build/, which the Worker bundles and serves only
// after the kit form's checks pass. It must never land in public/, which is served to anyone.
// Pure JavaScript (fflate), so it works on build machines without a zip binary.
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { zipSync } from 'fflate';

const root = 'kit';
const folder = join(root, 'ai-foundation-kit');
const out = 'kit-build/ai-foundation-kit.zip';

if (!existsSync(join(folder, 'SKILL.md'))) {
  console.warn(`kit: ${folder}/SKILL.md not found, skipping zip`);
  process.exit(0);
}

// One top-level folder holding SKILL.md: the shape Claude expects for a skill upload.
const files = {};
(function walk(dir) {
  for (const name of readdirSync(dir).sort()) {
    if (name === '.DS_Store') continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else files[relative(root, path)] = [readFileSync(path), { mtime: new Date('2026-01-01') }];
  }
})(folder);

mkdirSync('kit-build', { recursive: true });
writeFileSync(out, zipSync(files, { level: 9 }));
console.log(`kit: wrote ${out} (${Object.keys(files).length} files)`);
