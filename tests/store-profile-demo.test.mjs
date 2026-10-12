import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('store profile source preserves local persistence and exposes every planned channel', async () => {
  const source = await readFile(new URL('../app/store-profile-demo.tsx', import.meta.url), 'utf8');
  const css = await readFile(new URL('../app/store-profile-demo.module.css', import.meta.url), 'utf8');
  const runtime = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');

  assert.match(source, /antbuildz-dashboard:store-profile:v1/);
  for (const channel of ['whatsapp', 'telegram', 'wechat', 'messenger', 'line', 'zalo']) {
    assert.match(source, new RegExp(`\\b${channel}\\b`));
  }
  assert.match(source, /Equipment page contact channels/);
  assert.match(source, /Primary colour/);
  assert.doesNotMatch(source, /Secondary colour/);
  assert.match(source, /antbuildz-logo\.png/);
  assert.match(source, /Store profile saved in this browser\./);
  assert.match(source, /Copy store URL/);
  assert.match(source, /enabledContacts/);
  assert.match(source, /days passed/);
  assert.doesNotMatch(source, /Manage subscription/);
  assert.doesNotMatch(source, /View invoices/);
  assert.doesNotMatch(source, /Payment methods/);
  assert.match(source, /input\[aria-label="Store subdomain"\]/);
  assert.match(runtime, /syncStoreProfileDemo\(root\)/);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(css, /\.contacts/);
});
