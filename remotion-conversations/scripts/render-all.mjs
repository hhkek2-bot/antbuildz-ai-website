import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const workspace = process.cwd();
const entry = resolve(workspace, 'src/index.ts');
const config = resolve(workspace, 'remotion.config.ts');
const outputRoot = resolve(workspace, '../public');
const videos = resolve(outputRoot, 'videos/conversational-experience');
const posters = resolve(outputRoot, 'images/conversational-experience');
const localChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browserArgs = existsSync(localChrome) ? [`--browser-executable=${localChrome}`] : [];

mkdirSync(videos, { recursive: true });
mkdirSync(posters, { recursive: true });

const demos = [
  ['Hero', 'hero'],
  ['Technical-Comparison', 'technical-comparison'],
  ['Product-Recommendations', 'product-recommendations'],
  ['Structured-Explanations', 'structured-explanations'],
  ['Interactive-Actions', 'interactive-actions'],
];

const run = (args) => {
  const result = spawnSync('npx', ['remotion', ...args, ...browserArgs], { cwd: workspace, stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
};

for (const [composition, file] of demos) {
  const target = resolve(videos, `${file}.mp4`);
  const poster = resolve(posters, `${file}.jpg`);
  run(['render', entry, composition, target, '--config', config, '--codec=h264', '--crf=23', '--concurrency=50%', '--overwrite']);
  run(['still', entry, composition, poster, '--config', config, '--frame=220', '--image-format=jpeg', '--jpeg-quality=88', '--overwrite']);
}

for (const [composition, file] of demos) {
  const target = resolve(videos, `${file}-mobile.mp4`);
  const poster = resolve(posters, `${file}-mobile.jpg`);
  run(['render', entry, `${composition}-Mobile`, target, '--config', config, '--codec=h264', '--crf=23', '--concurrency=50%', '--overwrite']);
  run(['still', entry, `${composition}-Mobile`, poster, '--config', config, '--frame=220', '--image-format=jpeg', '--jpeg-quality=88', '--overwrite']);
}

console.log(`Rendered 10 MP4 files to ${videos} and 10 posters to ${posters}.`);
