import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const workspace = process.cwd();
const entry = resolve(workspace, 'src/index.ts');
const config = resolve(workspace, 'remotion.config.ts');
const posters = resolve(workspace, '../public/images/conversational-experience');
const localChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browserArgs = existsSync(localChrome) ? [`--browser-executable=${localChrome}`] : [];

mkdirSync(posters, { recursive: true });

const posterCompositions = [
  ['Technical-Poster', 'technical-comparison.jpg'],
  ['Product-Recommendations-Poster', 'product-recommendations.jpg'],
  ['Structured-Explanations-Poster', 'structured-explanations.jpg'],
  ['Interactive-Actions-Poster', 'interactive-actions.jpg'],
  ['Technical-Poster-Mobile', 'technical-comparison-mobile.jpg'],
  ['Product-Recommendations-Poster-Mobile', 'product-recommendations-mobile.jpg'],
  ['Structured-Explanations-Poster-Mobile', 'structured-explanations-mobile.jpg'],
  ['Interactive-Actions-Poster-Mobile', 'interactive-actions-mobile.jpg'],
];

for (const [composition, filename] of posterCompositions) {
  const result = spawnSync('npx', ['remotion', 'still', entry, composition, resolve(posters, filename), '--config', config, '--frame=250', '--image-format=jpeg', '--jpeg-quality=90', '--overwrite', ...browserArgs], { cwd: workspace, stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

console.log(`Rendered ${posterCompositions.length} standardised conversation posters to ${posters}.`);
