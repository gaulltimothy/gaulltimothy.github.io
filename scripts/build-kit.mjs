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

// The same kit as one message, for ChatGPT, Gemini or any AI chat that can't install a skill: the skill's
// instructions (frontmatter removed), then each reference file under a heading the instructions can point to.
const skill = readFileSync(join(folder, 'SKILL.md'), 'utf8').replace(/^---[\s\S]*?---\s*/, '');
const refs = readdirSync(join(folder, 'references'))
  .filter((n) => n.endsWith('.md'))
  .sort()
  .map((n) => `\n\n===== references/${n} =====\n\n${readFileSync(join(folder, 'references', n), 'utf8').trim()}`);
const prompt = [
  'You are running the AI Foundation Kit with me, a business owner. Follow the instructions below exactly.',
  'Wherever they say to load a file from references/, use the matching section further down; read only the one the current step needs.',
  'Ask one question at a time. Start now with the first question.',
  '',
  '===== SKILL.md =====',
  '',
  skill.trim(),
  ...refs,
].join('\n');
writeFileSync('kit-build/ai-foundation-kit-prompt.txt', prompt);
console.log(`kit: wrote kit-build/ai-foundation-kit-prompt.txt (${prompt.length} characters)`);
