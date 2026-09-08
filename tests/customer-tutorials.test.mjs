import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

test('tutorials preserve source limitations, unique routes and original screenshot dimensions', async () => {
  const exports = {};
  runInNewContext(ts.transpileModule(await readFile(new URL('../lib/customer-tutorials.ts', import.meta.url), 'utf8'), {compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS}}).outputText, {exports});
  assert.equal(exports.customerTutorials.length,14);
  assert.equal(new Set(exports.customerTutorials.map(g=>g.slug)).size,14);
  for (const guide of exports.customerTutorials) {
    assert.ok(guide.limitation.length > 60);
    assert.ok(guide.steps.length >= 4);
    assert.ok(guide.checks.length >= 2);
    assert.ok(guide.faq.length >= 1);
    for (const step of guide.steps) if (step.guideSlug) assert.ok(exports.getCustomerTutorial(step.guideSlug));
    for (const step of guide.steps) if (step.screenshot) {
      const shot = exports.tutorialScreenshots[step.screenshot];
      assert.ok(shot?.alt);
      const bytes = await readFile(new URL(`../public/tutorials/screenshots/${step.screenshot}.jpg`, import.meta.url));
      assert.equal(bytes.readUInt16BE(0),0xffd8);
      let offset = 2;
      while (offset < bytes.length && bytes.readUInt16BE(offset) !== 0xffc0) offset += 2 + bytes.readUInt16BE(offset + 2);
      assert.ok(offset < bytes.length, 'JPEG has a baseline frame');
      assert.equal(bytes.readUInt16BE(offset + 7),shot.width);
      assert.equal(bytes.readUInt16BE(offset + 5),shot.height);
      assert.ok(shot.marks.every(m=>m.x>=0&&m.x<=100&&m.y>=0&&m.y<=100));
    }
  }
  assert.equal(exports.getCustomerTutorial('choose-plan-and-sign-up').status,'partial');
  assert.equal(exports.getCustomerTutorial('webstore-onboarding-checklist').status,'partial');
  assert.match(exports.getCustomerTutorial('choose-plan-and-sign-up').steps.map(s=>s.paragraphs.join(' ')).join(' '),/Do not enter real card details/);
});

test('Help tutorial search matches common customer wording', async () => {
  const options = {compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS}};
  const tutorials = {}, search = {};
  runInNewContext(ts.transpileModule(await readFile(new URL('../lib/customer-tutorials.ts',import.meta.url),'utf8'),options).outputText,{exports:tutorials});
  runInNewContext(ts.transpileModule(await readFile(new URL('../lib/tutorial-search.ts',import.meta.url),'utf8'),options).outputText,{exports:search,require:()=>tutorials});
  for (const [query,slug] of [['upload products','webstore-onboarding-checklist'],['credits','understand-usage-and-billing'],['wrong recommendation','onboarding-troubleshooting'],['sign up','choose-plan-and-sign-up']]) assert.ok(search.searchTutorials(query).some(g=>g.slug===slug));
});
