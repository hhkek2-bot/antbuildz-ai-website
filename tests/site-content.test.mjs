import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';
import { runInNewContext } from 'node:vm';

const requestedRoutes = [
  'ai-webstore-suite',
  'ai-agent',
  'ai-agent-console',
  'pricing',
  'book-a-demo',
  'agreements',
  'resources',
  'ai-agent-roles',
  'faqs',
  'about',
  'rental-businesses',
  'manufacturers-brands',
  'dealers-distributors',
  'industrial-mro',
  'hardware-trade-supplies',
  'building-engineering',
  'parts-aftermarket',
  'buggies-commercial-vehicles',
];

test('source public pages reuse the established header dropdowns instead of separate designs', async () => {
  const shell = await readFile(new URL('../app/agreements/legal-shell.tsx', import.meta.url), 'utf8');
  const behaviour = await readFile(new URL('../app/public-header-behaviour.tsx', import.meta.url), 'utf8');
  const runtime = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const css = await readFile(new URL('../app/agreements/legal-pages.module.css', import.meta.url), 'utf8');
  assert.match(shell, /antbuildz-public-header/);
  assert.match(shell, /bright-nav-product-links/);
  assert.match(shell, /href="\/resources" aria-label="Resources"/);
  assert.match(behaviour, /syncPublicHeaderDropdowns\(header\)/);
  assert.match(runtime, /export function syncPublicHeaderDropdowns[\s\S]*?correctIndustriesMenu\(header\);[\s\S]*?correctAiRolesMenu\(header\);[\s\S]*?correctResourcesMenu\(header\);/);
  assert.doesNotMatch(css, /\.headerMenu|\.rolesMenu|\.roleMenuLinks/);
  assert.match(css, /\.desktopNav > a\[hidden\] \{ display: none; \}/);
  assert.match(runtime, /description: role.summary/);
});

test('conversation features is a canonical, illustrative page with editable rendered assets', async () => {
  const page = await readFile(new URL('../app/conversational-experience/page.tsx', import.meta.url), 'utf8');
  const legacyPage = await readFile(new URL('../app/features/conversational-experience/page.tsx', import.meta.url), 'utf8');
  const media = await readFile(new URL('../app/features/conversational-experience/experience-media.tsx', import.meta.url), 'utf8');
  const sourceFooter = await readFile(new URL('../app/agreements/legal-shell.tsx', import.meta.url), 'utf8');
  const transferredFooter = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const sitemap = await readFile(new URL('../app/sitemap.ts', import.meta.url), 'utf8');
  const llms = await readFile(new URL('../public/llms.txt', import.meta.url), 'utf8');
  const pages = await readFile(new URL('../PAGES.md', import.meta.url), 'utf8');
  const remotionRoot = await readFile(new URL('../remotion-conversations/src/root.tsx', import.meta.url), 'utf8');
  const remotionPoster = await readFile(new URL('../remotion-conversations/src/conversation-experience.tsx', import.meta.url), 'utf8');

  assert.equal((page.match(/<h1/g) ?? []).length, 1);
  assert.match(page, /Beyond Just a/);
  assert.match(page, /Text Answer/);
  assert.match(page, /conversation-features-sales-customer\.jpg/);
  assert.match(page, /heroShade/);
  assert.doesNotMatch(page, /heroEyebrow/);
  assert.doesNotMatch(page, /HeroMedia/);
  assert.match(page, /canonical: url/);
  assert.match(page, /openGraph:/);
  assert.match(page, /BreadcrumbList/);
  assert.match(page, /href="\/pricing">Start Trial/);
  assert.doesNotMatch(page, /Start with your conversations/);
  assert.match(page, /closingTitle/);
  assert.match(page, /aria-label="Breadcrumb"/);
  assert.match(page, /className={styles\.heroLead}/);
  assert.match(page, /The Antbuildz AI Agent helps complex product teams/);
  assert.match(page, /Not just an answer/);
  assert.match(page, /An easier way to understand, compare and act/);
  assert.match(page, /technical diagrams, product guidance and configured next steps/);
  assert.match(page, /The Antbuildz AI Agent can return approved comparisons/);
  assert.match(page, /start-trial-emma-industrial-consultation\.jpg/);
  assert.doesNotMatch(media, /Illustrative conversation demonstrations built from approved product knowledge/);
  assert.doesNotMatch(page, /View Actual Conversation/i);
  assert.match(media, /function ConversationPhone/);
  assert.match(media, /function PhoneHeader/);
  assert.match(media, /visual-references/);
  assert.match(media, /e450-reach-diagram\.png/);
  assert.match(media, /Illustrative product catalogue link/);
  assert.doesNotMatch(media, /-example\.png/);
  assert.match(media, /galleryNumber/);
  assert.doesNotMatch(media, /galleryNote/);
  assert.match(media, /demonstrations\.map\(\(item, index\) => <article/);
  assert.doesNotMatch(media, /<video|ResponsiveVideo|role="tablist"|role="tab"/);
  assert.match(sourceFooter, /Conversation Features', '\/conversational-experience/);
  assert.doesNotMatch(sourceFooter.slice(sourceFooter.indexOf('function LegalHeader'), sourceFooter.indexOf('function LegalFooter')), /Conversation Features/);
  assert.match(transferredFooter, /data-antbuildz-conversational-experience/);
  assert.match(legacyPage, /permanentRedirect\('\/conversational-experience'\)/);
  assert.match(sitemap, /conversational-experience/);
  assert.match(llms, /Conversation Features/);
  assert.match(pages, /\| `\/conversational-experience`/);
  assert.match(remotionRoot, /Technical-Poster/);
  assert.match(remotionRoot, /Interactive-Actions-Poster-Mobile/);
  assert.match(remotionPoster, /function Poster/);
  assert.match(remotionPoster, /Human review remains essential/);

  const assets = ['technical-comparison', 'product-recommendations', 'structured-explanations', 'interactive-actions'];
  for (const asset of assets) {
    await access(new URL(`../public/images/conversational-experience/${asset}.jpg`, import.meta.url));
    await access(new URL(`../public/images/conversational-experience/${asset}-mobile.jpg`, import.meta.url));
  }
  await access(new URL('../public/images/conversational-experience/e450-reach-diagram.png', import.meta.url));
});

test('public headers group products and place pricing after discovery links', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('header.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const grouping = parsed.statements.find(node => ts.isFunctionDeclaration(node) && node.name?.text === 'correctProductsMenu').getText(parsed);
  for (const path of ['/ai-agent', '/ai-webstore-suite', '/ai-agent-console']) assert.ok(grouping.includes(`href: '${path}'`));
  assert.match(grouping, /label: 'AI Agent Console'[\s\S]*?href: '\/ai-agent-console'/);
  assert.match(grouping, /createIndustryLink\(product, 'antbuildz-industries-menu__link', true\)[\s\S]*?bindHeaderNavigation\(link\)/);
  assert.doesNotMatch(grouping, /data-antbuildz-unavailable|aria-disabled/);
  assert.match(grouping, /createHeaderMenuIntro/);
  assert.match(grouping, /bindHeaderDropdown\(menu, trigger\)/);
  assert.match(grouping, /child.hidden = true/);
  assert.doesNotMatch(grouping, /\.remove\(/);
  assert.match(grouping, /const ordered = \[menu, desktop.querySelector\('\.antbuildz-roles-menu'\), desktop.querySelector\('\.antbuildz-industries-menu'\), desktop.querySelector\('\.antbuildz-resources-menu'\),/);
  assert.match(grouping, /previous.nextElementSibling !== item/);
  assert.match(source, /correctProductsMenu\(header\)/);
  assert.match(source, /correctProductsMenu\(root\)/);
  assert.match(source, /link.parentElement\?\.matches\('\.bright-nav-product-links'\)/);
});

test('AI Roles use a distinct film-style overview hero without changing public navigation', async () => {
  const view = await readFile(new URL('../app/ai-roles/role-view.tsx', import.meta.url), 'utf8');
  const css = await readFile(new URL('../app/ai-roles/roles.module.css', import.meta.url), 'utf8');
  assert.match(view, /function RoleHeroStage/);
  assert.match(view, /<RoleHeroStage role=\{role\}/);
  assert.match(view, /<RoleHeroStage role=\{AI_ROLES\[0\]\} overview/);
  assert.match(view, /AI_ROLE_IMAGES\[role.slug\]/);
  assert.doesNotMatch(view, /styles.chat|styles.messages|EmmaAvatar|role.example.messages.map/);
  assert.match(css, /font-size: clamp\(36px, 4vw, 65.6px\)/);
  assert.match(css, /width: min\(1320px, calc\(100vw - 24px\)\)/);
  assert.match(css, /prefers-reduced-motion/);
  for (const surface of ['page', 'section', 'ctaPanel']) {
    assert.match(css, new RegExp(`\\.${surface} \\{[^}]*background: var\\(--clean\\);`));
  }
  assert.doesNotMatch(css, /radial-gradient/);
  assert.doesNotMatch(css, /antbuildz-public-header|desktopNav|industries-menu/);
  const imageSource = await readFile(new URL('../lib/ai-role-images.ts', import.meta.url), 'utf8');
  const exports = {};
  runInNewContext(ts.transpileModule(imageSource, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, { exports });
  assert.match(exports.AI_ROLES_OVERVIEW_IMAGE.src, /ai-roles-overview-film-v\d+\.png$/);
  assert.notEqual(exports.AI_ROLES_OVERVIEW_IMAGE.src, '/images/solution-dealers.jpg');
  assert.ok(exports.AI_ROLES_OVERVIEW_IMAGE.alt.length > 30);
  await access(new URL(`../public${exports.AI_ROLES_OVERVIEW_IMAGE.src}`, import.meta.url));
  const photos = Object.values(exports.AI_ROLE_IMAGES);
  assert.equal(photos.length, 5);
  assert.equal(new Set(photos.map(photo => photo.src)).size, 5);
  for (const photo of photos) {
    assert.ok(photo.alt.length > 30);
    assert.doesNotMatch(photo.alt, /café|furniture|dishwasher|appliance|coffee|shopper/i);
    await access(new URL(`../public${photo.src}`, import.meta.url));
  }
});

test('AI Roles use one template, five distinct examples and direct permanent redirect targets', async () => {
  const source = await readFile(new URL('../lib/ai-roles.ts', import.meta.url), 'utf8');
  const exports = {};
  runInNewContext(ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS } }).outputText, { exports });
  const { AI_ROLES, AI_ROLE_LINKS, AI_ROLE_REDIRECTS, getAiRole } = exports;
  assert.equal(AI_ROLES.length, 5);
  assert.equal(new Set(AI_ROLES.map(role => role.slug)).size, 5);
  assert.equal(new Set(AI_ROLES.map(role => role.example.title)).size, 5);
  assert.deepEqual(Array.from(AI_ROLES, role => role.name), Array.from(AI_ROLE_LINKS, link => link.label));
  for (const role of AI_ROLES) {
    assert.equal(getAiRole(role.slug), role);
    assert.ok(role.capabilities.length >= 3 && role.capabilities.length <= 5);
    assert.ok(role.example.messages.length >= 3);
    assert.ok(role.sources.length >= 3);
    assert.equal(role.businesses.length, 3);
  }
  assert.equal(getAiRole('not-a-role'), undefined);
  assert.equal(Object.keys(AI_ROLE_REDIRECTS).length, 8);
  for (const target of Object.values(AI_ROLE_REDIRECTS)) {
    assert.ok(target === '/ai-roles' || AI_ROLE_LINKS.some(link => link.href === target));
    assert.equal(AI_ROLE_REDIRECTS[target], undefined, 'redirects must not chain');
  }
  const route = await readFile(new URL('../app/ai-roles/[slug]/page.tsx', import.meta.url), 'utf8');
  assert.match(route, /if \(!role\) notFound\(\)/);
  assert.match(route, /<RoleDetail role=\{role\}/);
  const legacyRoute = await readFile(new URL('../app/resources/[slug]/page.tsx', import.meta.url), 'utf8');
  assert.match(legacyRoute, /permanentRedirect\(AI_ROLE_REDIRECTS/);
  const template = await readFile(new URL('../app/ai-roles/role-view.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(template, /example conversation|styles.exampleNote/);
  assert.match(template, /not five separate products or subscriptions/);
  assert.match(template, /PublicPageShell/);
  assert.match(template, /href="\/signup">Build Your AI Agent/);
  const navigation = await readFile(new URL('../lib/ai-role-navigation.ts', import.meta.url), 'utf8');
  assert.match(navigation, /data-ai-mobile-roles/);
  assert.match(navigation, /event\.metaKey \|\| event\.ctrlKey/);
  assert.match(navigation, /window\.location\.assign\(link\.href\)/);
});

test('AI Roles metadata and sitemap use only canonical pages', async () => {
  const rolesExports = {};
  const rolesSource = await readFile(new URL('../lib/ai-roles.ts', import.meta.url), 'utf8');
  runInNewContext(ts.transpileModule(rolesSource, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, { exports: rolesExports });
  const source = await readFile(new URL('../app/sitemap.ts', import.meta.url), 'utf8');
  const exports = {};
  runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, {
    exports, require: path => path.endsWith('ai-roles') ? rolesExports : path.endsWith('resource-seo')
      ? { resourceSeoEntries: [{ slug: 'ai-sales-agent-for-industrial-businesses' }, { slug: 'educational-guide' }] }
      : { productRoutes: ['pricing', 'agreements', 'ai-agent-roles'], solutions: [] },
  });
  const urls = Array.from(exports.default(), entry => entry.url);
  assert.equal(urls.filter(url => url.includes('/ai-roles')).length, 6);
  assert.ok(urls.includes('https://antbuildz.ai/resources/educational-guide'));
  assert.ok(!urls.some(url => url.includes('for-industrial-businesses')));
  const metadata = await readFile(new URL('../app/ai-roles/metadata.ts', import.meta.url), 'utf8');
  assert.match(metadata, /alternates: \{ canonical: url \}/);
  assert.match(metadata, /openGraph:/);
  assert.match(metadata, /'@type': 'BreadcrumbList'/);
  assert.match(metadata, /'@type': 'WebPage'/);
});

test('AI role copy targets distinct software use cases without changing role navigation', async () => {
  const exports = {};
  const source = await readFile(new URL('../lib/ai-role-copy.ts', import.meta.url), 'utf8');
  runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, { exports });
  const copies = Object.values(exports.AI_ROLE_COPY);
  assert.deepEqual(Object.keys(exports.AI_ROLE_COPY), ['sales-specialist', 'product-specialist', 'customer-support', 'technical-support', 'after-sales-service']);
  assert.deepEqual(copies.map(copy => copy.title), [
    'AI Sales Agent for Complex Product Sales',
    'AI Agent for Product Specialist',
    "AI Agent for Customer Service",
    'AI Agent for Technical Support',
    "AI Agent for After-Sales Support",
  ]);
  assert.deepEqual(copies.map(copy => copy.seoTitle), [
    'AI Sales Agent for Complex Product Sales',
    'AI Product Recommendation Agent',
    "AI Customer Service Agent for Product Teams",
    'AI Technical Support Agent for Equipment',
    "AI After-Sales Support Agent",
  ]);
  assert.equal(new Set(copies.map(copy => copy.title)).size, 5);
  assert.equal(new Set(copies.map(copy => copy.seoTitle)).size, 5);
  assert.equal(new Set(copies.map(copy => copy.metaDescription)).size, 5);
  assert.equal(new Set(copies.map(copy => JSON.stringify(copy.workflow))).size, 5);
  for (const copy of copies) {
    assert.match(copy.title, /^AI (?:Sales )?Agent for /);
    assert.ok(`${copy.title} | Antbuildz AI`.length <= 65);
    assert.ok(`${copy.seoTitle} | Antbuildz AI`.length <= 65);
    assert.ok(copy.metaDescription.length >= 120 && copy.metaDescription.length <= 170);
    assert.equal(copy.headline.length, 2);
    assert.doesNotMatch(copy.intro, /world.s best|guaranteed|24\/7|100%|No credit card/i);
  }
  assert.match(exports.AI_ROLES_OVERVIEW_COPY.title, /^AI /);
  assert.equal(exports.AI_ROLES_OVERVIEW_COPY.seoTitle, 'AI Agent Roles for Complex Product Businesses');
  assert.ok(`${exports.AI_ROLES_OVERVIEW_COPY.seoTitle} | Antbuildz AI`.length <= 65);
  assert.ok(exports.AI_ROLES_OVERVIEW_COPY.metaDescription.length >= 120 && exports.AI_ROLES_OVERVIEW_COPY.metaDescription.length <= 170);
  assert.equal(exports.AI_ROLES_OVERVIEW_COPY.headline.length, 2);
  for (const copy of copies) {
    assert.deepEqual(Array.from(copy.workflow, step => step[0]), ['Add your knowledge', 'Set the rules', 'Test real enquiries', 'Publish and review']);
    assert.match(copy.capabilityHeading, /^What (?:an AI Agent for |your AI Sales Agent)/);
    assert.match(copy.useCaseIntro, /^Deploy this role when /);
    assert.match(copy.deploymentHeading, /^How to deploy (?:an AI Agent for |the Sales Specialist role)/);
    assert.match(copy.deploymentIntro, /AI Agent Console/);
    assert.match(copy.workflow[2][1], /Playground/);
    assert.match(copy.workflow[3][1], /Embed.*website.*link/);
    assert.match(copy.description, /AI/i);
  }
  const template = await readFile(new URL('../app/ai-roles/role-view.tsx', import.meta.url), 'utf8');
  assert.match(template, /<Workflow copy=\{copy\}/);
  assert.ok(template.indexOf('aria-labelledby="capabilities-heading"') < template.indexOf('aria-labelledby="use-cases-heading"'), 'What must precede When');
  assert.ok(template.indexOf('aria-labelledby="use-cases-heading"') < template.indexOf('<Workflow copy={copy}'), 'When must precede How');
  assert.match(template, /<p className=\{styles\.eyebrow\}>What<\/p>/);
  assert.match(template, /<p className=\{styles\.eyebrow\}>When<\/p>/);
  assert.match(template, /<p className=\{styles\.eyebrow\}>How<\/p>/);
  assert.match(template, /Defining a role does not automatically connect these systems/);
  assert.match(template, /<\/span>\{' '\}<span>/, 'heading spans must have a word separator in text content');
  assert.match(template, /href="\/help\/ai"/);
});

test('AI role metadata and schema agree without inventing locale versions or offers', async () => {
  const source = await readFile(new URL('../app/ai-roles/metadata.ts', import.meta.url), 'utf8');
  const exports = {};
  runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, {
    exports, require: () => ({ SOCIAL_SHARE_IMAGE: { url: 'https://antbuildz.ai/images/antbuildz-ai-social-share-v2.jpg' } }),
  });
  const path = '/ai-roles/customer-support';
  const meta = exports.roleMetadata('AI Customer Support Agent', 'Answer product questions.', path);
  assert.equal(meta.alternates.canonical, `https://antbuildz.ai${path}`);
  assert.equal(meta.openGraph.url, meta.alternates.canonical);
  assert.equal(meta.twitter.title, meta.title.absolute);
  assert.equal(meta.alternates.languages, undefined);
  const schema = JSON.parse(exports.RoleSchema({ name: 'AI Customer Support Agent', description: 'Answer product questions.', breadcrumbName: 'Customer Support', path }));
  const page = schema['@graph'][0];
  assert.equal(page.url, meta.alternates.canonical);
  assert.equal(page.description, meta.description);
  assert.equal(page.inLanguage, 'en');
  assert.equal(page.about['@id'], 'https://antbuildz.ai/#software');
  assert.equal(schema['@graph'][1].itemListElement[2].name, 'Customer Support');
  assert.doesNotMatch(JSON.stringify(schema), /AggregateRating|Offer|FAQPage/);
  assert.ok(!exports.RoleSchema({ name: '<script>', description: '<test>', path }).includes('<'));
});

test('homepage metadata stays canonical, truthful, idempotent and route-scoped', async () => {
  const source = await readFile(new URL('../lib/homepage-seo.ts', import.meta.url), 'utf8');
  const exports = {};
  runInNewContext(ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  }).outputText, { exports });
  let writes = 0;
  const element = value => ({
    value,
    getAttribute() { return this.value; },
    setAttribute(_name, next) { this.value = next; writes++; },
  });
  const canonical = element('http://localhost:8081/');
  const description = element('Old description');
  const image = element('https://antbuildzai.com/cta-construction.jpeg');
  const schema = { textContent: 'old schema' };
  const nodes = {
    'link[rel="canonical"]': [canonical],
    'meta[name="description"]': [description],
    'meta[property="og:image"]': [image],
  };
  const doc = {
    title: 'Old title',
    querySelectorAll: selector => nodes[selector] || [],
    getElementById: id => id === 'route-jsonld' ? schema : null,
  };
  exports.syncHomepageMetadata(doc, '/ai-webstore-suite');
  assert.equal(writes, 0);
  assert.equal(schema.textContent, 'old schema');
  exports.syncHomepageMetadata(doc, '/');
  assert.equal(canonical.value, 'https://antbuildz.ai');
  assert.equal(description.value, exports.HOMEPAGE_SEO.description);
  assert.equal(
    exports.HOMEPAGE_SEO.description,
    'AI Agent for complex products, built from industrial expertise. Guide sales, rental and support with approved product knowledge, specifications and inventory.',
  );
  assert.equal(image.value, exports.HOMEPAGE_SEO.image);
  assert.equal(doc.title, exports.HOMEPAGE_SEO.title);
  assert.equal(JSON.parse(schema.textContent)['@type'], 'WebPage');
  assert.equal(JSON.parse(schema.textContent).inLanguage, 'en-SG');
  assert.doesNotMatch(schema.textContent, /localhost|antbuildzai\.com|rating|offers/);
  const firstWrites = writes;
  exports.syncHomepageMetadata(doc, '/');
  assert.equal(writes, firstWrites, 'the head observer must not cause a mutation loop');
  canonical.value = 'http://localhost:8081/';
  exports.syncHomepageMetadata(doc, '/');
  assert.equal(canonical.value, 'https://antbuildz.ai', 'late transferred-router metadata is corrected');
  const page = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8');
  assert.match(page, /absolute: HOMEPAGE_SEO.title/);
  assert.match(page, /canonical: HOMEPAGE_SEO.url/);
  assert.match(page, /rel="preload" as="image" href="\/videos\/home-hero-ai-agent-product-match-v2-poster.jpg" fetchPriority="high"/);
});

test('shared metadata uses the exact extracted Antbuildz wordmark glyphs', async () => {
  const layout = await readFile(new URL('../app/layout.tsx', import.meta.url), 'utf8');
  assert.match(layout, /\{ url: '\/favicon\.ico\?v=3', type: 'image\/x-icon', sizes: 'any' \}/);
  assert.match(layout, /\{ url: '\/images\/antbuildz-ai-favicon-transparent\.png\?v=3', type: 'image\/png', sizes: '512x512' \}/);
  assert.match(layout, /shortcut: '\/favicon\.ico\?v=3'/);
  const favicon = await readFile(new URL('../public/images/antbuildz-ai-favicon-transparent.png', import.meta.url));
  assert.equal(favicon.subarray(1, 4).toString('ascii'), 'PNG');
  assert.equal(favicon.readUInt32BE(16), 512);
  assert.equal(favicon.readUInt32BE(20), 512);
  assert.equal(favicon[25], 6, 'favicon uses true-colour RGBA so the tab background remains transparent');
  const chromeFavicon = await readFile(new URL('../public/favicon.ico', import.meta.url));
  assert.deepEqual(Array.from(chromeFavicon.subarray(0, 4)), [0, 0, 1, 0]);
  assert.equal(chromeFavicon.readUInt16LE(4), 7, 'Chrome fallback contains seven exact resized icon variants');
  assert.doesNotMatch(layout, /antbuildz-ai-favicon\.svg/, 'the temporary redrawn mark is no longer referenced');
  assert.doesNotMatch(layout, /antbuildz-ai-favicon-extracted\.png/, 'the dark-background source is no longer exposed as the tab icon');
  assert.doesNotMatch(layout, /lovable/i);
  await access(new URL('../public/develop-admin-assets/logo-a.png', import.meta.url));
});

test('social sharing uses one lightweight 1200 by 630 branded preview image', async () => {
  const social = await readFile(new URL('../lib/social-share.ts', import.meta.url), 'utf8');
  const layout = await readFile(new URL('../app/layout.tsx', import.meta.url), 'utf8');
  const page = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8');
  const routes = await readFile(new URL('../app/[slug]/page.tsx', import.meta.url), 'utf8');
  const help = await readFile(new URL('../app/help/[slug]/page.tsx', import.meta.url), 'utf8');
  const image = await readFile(new URL('../public/images/antbuildz-ai-social-share-v2.jpg', import.meta.url));

  assert.match(social, /https:\/\/antbuildz\.ai\/images\/antbuildz-ai-social-share-v2\.jpg/);
  assert.match(social, /width: 1200/);
  assert.match(social, /height: 630/);
  assert.match(social, /type: 'image\/jpeg'/);
  assert.match(social, /syncDefaultSocialShareImage/);
  assert.match(social, /https:\/\/antbuildzai\.com\/cta-construction\.jpeg/);
  assert.equal(image[0], 0xff);
  assert.equal(image[1], 0xd8);
  assert.ok(image.byteLength < 1_000_000, 'social preview should stay quick for crawler downloads');
  for (const source of [layout, page, routes, help]) {
    assert.match(source, /SOCIAL_SHARE_IMAGE/);
  }
  assert.match(await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'), /syncDefaultSocialShareImage/);
  assert.match(routes, /card: 'summary_large_image'/);
  assert.match(help, /card: 'summary_large_image'/);
});

test('public pages declare a device-width viewport for responsive layouts', async () => {
  const layout = await readFile(new URL('../app/layout.tsx', import.meta.url), 'utf8');
  assert.match(layout, /export const viewport: Viewport/);
  assert.match(layout, /width: 'device-width'/);
  assert.match(layout, /initialScale: 1/);
});

test('homepage mobile refinements preserve typography and keep the hero title concise', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(source, /AI Agent for Sales & Rental Businesses/);
  assert.match(source, /querySelector\('\.antbuildz-ai-home-intro'\)\?\.remove\(\)/);
  assert.match(source, /textContent !== HOME_HERO_TITLE_PRIMARY/, 'unchanged titles must not continually trigger the root observer');
  assert.match(source, /description.textContent !== HOME_HERO_DESCRIPTION/, 'the approved description must update without repeating DOM mutations');
  assert.match(source, /headObserver.disconnect\(\)/);
  assert.match(source, /titleLines\[0\]\.after\(document\.createTextNode\(' '\)\)/);
  assert.match(css, /@media \(max-width: 1179px\) \{\s*\.antbuildz-ai-home \.abz-public-footer a \{[^}]*min-height: 44px/s);
  assert.match(css, /height: max\(100svh, 844px\)/);
  assert.match(css, /\.antbuildz-ai-home \.antbuildz-home-hero-conversation\.is-centre \{\s*top: max\(clamp\(312px, 38svh, 328px\), var\(--antbuildz-home-chat-top, 0px\)\);\s*bottom: auto;/);
  assert.match(css, /@media \(max-width: 767px\) \{\s*\.antbuildz-ai-home \.antbuildz-home-hero-conversation\.is-left,[\s\S]*?\.is-right,[\s\S]*?display: none/);
  assert.doesNotMatch(css, /\.antbuildz-ai-home-intro \{/);
});

test('all requested routes are included in the static route catalogue', async () => {
  const source = await readFile(new URL('../lib/site-content.ts', import.meta.url), 'utf8');
  for (const route of requestedRoutes) {
    assert.match(source, new RegExp(`['\"]${route}['\"]`), `missing route: ${route}`);
  }
});

test('all Who We Serve process descriptions stay concise and update idempotently', async () => {
  const source = await readFile(new URL('../lib/who-we-serve-process-copy.ts', import.meta.url), 'utf8');
  const code = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  }).outputText;
  const exports = {};
  runInNewContext(code, { exports });

  const whoWeServePaths = requestedRoutes.slice(10).map(route => `/${route}`);
  assert.deepEqual(Object.keys(exports.WHO_WE_SERVE_PROCESS_COPY).sort(), whoWeServePaths.sort());
  for (const [path, descriptions] of Object.entries(exports.WHO_WE_SERVE_PROCESS_COPY)) {
    assert.equal(descriptions.length, 4, `${path} retains exactly four process descriptions`);
    descriptions.forEach((description, index) => {
      assert.ok(description.length <= 125, `${path} step ${index + 1} is concise enough for the shared four-line desktop measure`);
      assert.ok(description.length >= 80, `${path} step ${index + 1} retains useful industrial context`);
      assert.doesNotMatch(description, /guaranteed|always accurate|live availability/i);
    });
  }

  let writes = 0;
  const paragraphs = Array.from({ length: 4 }, () => {
    let value = 'Long transferred description';
    return {
      get textContent() { return value; },
      set textContent(next) { value = next; writes++; },
    };
  });
  const cards = paragraphs.map(paragraph => ({
    querySelector(selector) {
      assert.equal(selector, ':scope > p');
      return paragraph;
    },
  }));
  const root = {
    querySelectorAll(selector) {
      assert.equal(selector, '.si-sierra-vignette');
      return cards;
    },
  };
  exports.applyWhoWeServeProcessCopy(root, '/parts-aftermarket');
  assert.deepEqual(paragraphs.map(paragraph => paragraph.textContent), [...exports.WHO_WE_SERVE_PROCESS_COPY['/parts-aftermarket']]);
  assert.equal(writes, 4);
  exports.applyWhoWeServeProcessCopy(root, '/parts-aftermarket');
  assert.equal(writes, 4, 'the root observer does not rewrite unchanged copy');
  exports.applyWhoWeServeProcessCopy(root, '/pricing');
  assert.equal(writes, 4, 'non-industry routes remain untouched');

  const appSource = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  assert.match(appSource, /import \{ applyWhoWeServeProcessCopy \} from '\.\.\/lib\/who-we-serve-process-copy'/);
  assert.match(appSource, /applyWhoWeServeProcessCopy\(root, window\.location\.pathname\)/);
});

test('AI-only FAQ page is clearly identified', async () => {
  const source = await readFile(new URL('../app/site.tsx', import.meta.url), 'utf8');
  assert.match(source, /ANTBUILDZ AI FAQS/);
  assert.match(source, /AI-only guidance/);
});

async function loadSalesAgentCopy() {
  const source = await readFile(new URL('../lib/ai-sales-agent-copy.ts', import.meta.url), 'utf8');
  const code = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  }).outputText;
  const exports = {};
  const coreSource = await readFile(new URL('../lib/core-agent-faqs.ts', import.meta.url), 'utf8');
  const core = {};
  runInNewContext(ts.transpileModule(coreSource, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, { exports: core });
  runInNewContext(code, { exports, require: (name) => { assert.equal(name, './core-agent-faqs'); return core; } });
  return exports;
}

function copyTextNode(value) {
  return { nodeType: 3, nodeName: '#text', childNodes: [], textContent: value };
}

function copyElement(...children) {
  return {
    nodeType: 1, nodeName: 'SPAN', childNodes: children.map(child => typeof child === 'string' ? copyTextNode(child) : child),
    attributes: {},
    get textContent() { return this.childNodes.map(child => child.textContent).join(''); },
    getAttribute(name) { return this.attributes[name] ?? null; },
    setAttribute(name, value) { this.attributes[name] = value; },
    removeAttribute(name) { delete this.attributes[name]; },
  };
}

test('selected marketing pages remove heading full stops while preserving questions and ellipses', async () => {
  const source = await readFile(new URL('../lib/title-punctuation.ts', import.meta.url), 'utf8');
  const code = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  }).outputText;
  const exports = {};
  const headingNodes = [
    { textContent: 'Your AI Sales Agent. ' },
    { textContent: 'Your business at its core.' },
    { textContent: 'AI Webstore Suite or AI Sales Agent?' },
    { textContent: 'Cimar A00F-M04-00...' },
    { textContent: 'One Agent. Available ' },
    { textContent: '24/7.' },
  ];
  const document = {
    createTreeWalker(heading) {
      let index = 0;
      return { nextNode: () => heading.nodes[index++] ?? null };
    },
  };
  runInNewContext(code, { exports, document, NodeFilter: { SHOW_TEXT: 4 } });
  const root = {
    querySelectorAll: () => [
      { nodes: headingNodes.slice(0, 2), closest: () => null },
      { nodes: headingNodes.slice(2, 4), closest: () => null },
      {
        nodes: headingNodes.slice(4),
        closest: selector => selector === '[data-antbuildz-preserve-heading-punctuation="true"]' ? {} : null,
      },
    ],
  };
  exports.removeHeadingFullStops(root, '/');
  assert.equal(headingNodes[0].textContent, 'Your AI Sales Agent ');
  assert.equal(headingNodes[1].textContent, 'Your business at its core');
  assert.equal(headingNodes[2].textContent, 'AI Webstore Suite or AI Sales Agent?');
  assert.equal(headingNodes[3].textContent, 'Cimar A00F-M04-00...');
  assert.equal(headingNodes[4].textContent, 'One Agent. Available ');
  assert.equal(headingNodes[5].textContent, '24/7.');

  let inspected = false;
  exports.removeHeadingFullStops({ querySelectorAll() { inspected = true; return []; } }, '/pricing');
  assert.equal(inspected, false, 'unrequested routes remain unchanged');
});

test('Sales Agent wording updates preserve rich heading spans, icons and text-node identity', async () => {
  const { setSalesAgentText } = await loadSalesAgentCopy();
  const gradient = copyElement('Revenue');
  const icon = { ...copyElement('icon title'), nodeName: 'svg' };
  const heading = copyElement('Into ', gradient, icon);
  const originalChildren = [...heading.childNodes];
  const originalGradientText = gradient.childNodes[0];
  setSalesAgentText(heading, ['', 'Built for Industrial Sales.']);
  assert.deepEqual(heading.childNodes, originalChildren);
  assert.equal(gradient.childNodes[0], originalGradientText);
  assert.equal(gradient.textContent, 'Built for Industrial Sales.');
  assert.equal(heading.childNodes[0].textContent, '');
  assert.equal(icon.textContent, 'icon title');
  Object.defineProperty(originalGradientText, 'textContent', {
    get: () => 'Built for Industrial Sales.',
    set: () => assert.fail('an unchanged node should not be written again'),
  });
  setSalesAgentText(heading, ['', 'Built for Industrial Sales.']);
});

test('Sales Agent copy covers animated clones and all Console states while using canonical CTA wording and destinations', async () => {
  const { correctSalesAgentCopy, SALES_AGENT_COPY } = await loadSalesAgentCopy();
  for (const pathname of ['/', '/pricing', '/ai-webstore-suite', '/ai-agent-console']) {
    correctSalesAgentCopy({ querySelector() { assert.fail('another route must not be inspected or edited'); } }, pathname);
  }
  const targets = new Map();
  const target = (selector, ...parts) => {
    const node = copyElement(...(parts.length ? parts : ['Original copy']));
    targets.set(selector, [node]); return node;
  };
  const featureCards = new Map();
  for (const [visual] of SALES_AGENT_COPY.features) {
    const clones = [0, 1].map(() => {
      const title = copyElement('Original title');
      const description = copyElement('Original description');
      const card = { querySelector: selector => selector === '.si-card-title' ? title : description };
      return { title, description, closest: () => card };
    });
    featureCards.set(visual, clones);
    targets.set(`.si-visual-${visual}`, clones);
  }
  const tabs = Array.from({ length: 6 }, (_, index) => Object.assign(copyElement(), { attributes: { 'aria-selected': String(index === 5) } }));
  targets.set('.af-pill', tabs);
  const consoleTitle = target('.af-headline h2');
  const consoleCopy = target('.af-headline p');
  const heroFirst = target('.bright-hero h1 .bright-hero-title-line:nth-child(1)', 'Turn Every Business');
  const heroMiddle = target('.bright-hero h1 .bright-hero-title-line:nth-child(2)', 'Conversation');
  const heroLast = target('.bright-hero h1 .bright-hero-title-line:nth-child(3)', 'Into ', copyElement('Revenue'));
  const featureIntro = target('.si-sub');
  const heading = target('.si-headline-line:first-child', 'Sales ', copyElement('Intelligence'), ' ');
  const closing = target('.ws-cta-title', copyElement('Build'), copyElement(' Your AI Sales Agent'));
  const closingDemo = target('.ws-cta-btn-primary', 'Original primary');
  closingDemo.attributes.href = '/pricing';
  const closingPricing = target('.ws-cta-btn-outline', 'Get Demo');
  closingPricing.attributes.href = '/contact';
  const heroPrimary = target('.bright-hero-actions-block .bright-btn-primary', 'Original primary');
  const heroSecondary = target('.bright-hero-actions-block .bright-btn-secondary', 'Original secondary');
  heroPrimary.attributes.href = '/pricing';
  heroSecondary.attributes.href = '/book-a-demo';
  const removedNextStepSection = target('.aisl-section');
  const salesPageParent = {};
  let logoStripMoves = 0;
  const logoOriginals = Array.from({ length: 12 }, (_, index) => Object.assign(copyElement(`Logo ${index + 1}`), {
    cloneNode() { return copyElement(`Logo ${index + 1}`); },
  }));
  const logoGrid = {
    children: logoOriginals,
    querySelector(selector) {
      return selector === '[data-antbuildz-logo-duplicate="true"]'
        ? this.children.find(item => item.getAttribute?.('data-antbuildz-logo-duplicate') === 'true') ?? null
        : null;
    },
    append(item) { this.children.push(item); },
  };
  const logoStrip = Object.assign(copyElement(), {
    classList: { contains: value => value === 'bright-logo-strip' },
    parentElement: salesPageParent,
    querySelector: selector => selector === '.bright-logo-grid-static' ? logoGrid : null,
  });
  const closingCtaSection = Object.assign(copyElement(), {
    classList: { contains: value => value === 'ws-cta-section' },
    parentElement: salesPageParent,
    nextElementSibling: null,
    insertAdjacentElement(position, element) {
      assert.equal(position, 'afterend');
      assert.equal(element, logoStrip);
      this.nextElementSibling = element;
      logoStripMoves++;
    },
  });
  const metrics = copyElement();
  const queried = [];
  const page = {
    ...copyElement(),
    querySelectorAll(selector) { queried.push(selector); return targets.get(selector) ?? []; },
    querySelector(selector) {
      queried.push(selector);
      if (selector === '.aisl-section') return removedNextStepSection;
      if (selector === '.bright-logo-strip') return logoStrip;
      if (selector === '.ws-cta-section') return closingCtaSection;
      return metrics;
    },
  };
  // The transferred header precedes the page and shares .bright-landing.
  // Selecting that class directly previously made every update a silent no-op.
  const header = { querySelectorAll: () => [], querySelector: () => null };
  const hero = { closest(selector) { assert.equal(selector, '.bright-landing'); return page; } };
  const root = { querySelector(selector) {
    if (selector === '.bright-landing') return header;
    assert.equal(selector, '.bright-hero');
    return hero;
  } };
  const unchangedFAQ = copyElement('Existing FAQ question', 'Existing FAQ answer');
  targets.set('#faq-summary', [unchangedFAQ]);
  correctSalesAgentCopy(root, '/ai-agent');
  assert.equal(page.getAttribute('data-antbuildz-sales-agent'), 'true');
  assert.equal(heroFirst.textContent, "AI Agent for ");
  assert.equal(heroMiddle.textContent, '');
  assert.equal(heroLast.textContent, "Complex Product Businesses");
  assert.equal(SALES_AGENT_COPY.hero, "Use approved product knowledge, inventory and workflows to guide complex product questions across sales, rental and support.");
  assert.equal(heroPrimary.textContent, 'Book a Demo');
  assert.equal(heroSecondary.textContent, 'View Pricing');
  assert.equal(heroPrimary.attributes.href, '/book-a-demo');
  assert.equal(heroSecondary.attributes.href, '/pricing');
  assert.equal(heading.textContent, 'Built Around');
  assert.equal(closing.textContent, "Build Your AI Agent");
  assert.equal(removedNextStepSection.hidden, true);
  assert.equal(removedNextStepSection.getAttribute('aria-hidden'), 'true');
  assert.equal(removedNextStepSection.getAttribute('data-antbuildz-sales-agent-removed'), 'true');
  assert.equal(logoStrip.hidden, true);
  assert.equal(logoStrip.getAttribute('aria-hidden'), 'true');
  assert.equal(logoStrip.getAttribute('inert'), '');
  assert.equal(logoStrip.getAttribute('data-antbuildz-sales-agent-removed'), 'true');
  assert.equal(logoStripMoves, 0);
  assert.equal(logoGrid.children.length, 12);
  assert.equal(featureIntro.textContent, "Give your AI Agent the knowledge, controls and connections to recommend products and support sales, rental and customer conversations.");
  for (const [visual, title, description] of SALES_AGENT_COPY.features) {
    for (const card of featureCards.get(visual)) {
      assert.equal(card.title.textContent, title);
      assert.equal(card.description.textContent, description);
    }
  }
  assert.equal(closingDemo.textContent, 'Book a Demo');
  assert.equal(closingDemo.attributes.href, '/book-a-demo');
  assert.equal(closingPricing.textContent, 'View Pricing');
  assert.equal(closingPricing.attributes.href, '/pricing');
  // Simulate both the shared CTA normaliser and the Console's timed updates.
  for (let active = 0; active < tabs.length; active++) {
    tabs.forEach((tab, i) => tab.setAttribute('aria-selected', String(i === active)));
    closingDemo.attributes.href = '/book-a-demo';
    correctSalesAgentCopy(root, '/ai-agent');
    assert.equal(consoleTitle.textContent, SALES_AGENT_COPY.consoleTabs[active][0]);
    assert.equal(consoleCopy.textContent, SALES_AGENT_COPY.consoleTabs[active][1]);
    assert.equal(closingDemo.attributes.href, '/book-a-demo', 'the demo action remains on its canonical destination');
  }
  assert.equal(logoStripMoves, 0, 'reapplying the correction keeps the logo strip removed');
  assert.equal(logoGrid.children.length, 12, 'reapplying the correction does not duplicate logo items');
  assert.equal(unchangedFAQ.textContent, 'Existing FAQ questionExisting FAQ answer');
  assert.ok(queried.every(selector => !/header a|footer/.test(selector)));
  assert.ok(queried.filter(selector => /faq/.test(selector)).every(
    selector => selector === '.bright-faq-accordion > .bright-container' || /^\.bright-faq-item:nth-child\([1-8]\) \.bright-faq-item-(?:content p|trigger > span:first-child)$/.test(selector),
  ), 'FAQ corrections stay within the eight existing rows and their eyebrow');
});

test('Sales Agent added eyebrows retain the approved product styling', async () => {
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.doesNotMatch(css, /\.aisl-metrics\[data-antbuildz-capabilities\]/);
  assert.match(css, /\[data-antbuildz-sales-agent\] \.si-header > \.antbuildz-si-eyebrow \{[^}]*color: var\(--red, #e3180a\);[^}]*letter-spacing: \.24em;/);
  assert.match(css, /\[data-antbuildz-sales-agent\] \.antbuildz-sales-agent-eyebrow \{[^}]*color: var\(--red, #e3180a\);[^}]*font-size: 12\.16px;[^}]*letter-spacing: \.24em;/);
  assert.match(css, /\.bento-section-header > \.antbuildz-sales-agent-eyebrow,[\s\S]*?\.bright-faq-accordion > \.bright-container > \.antbuildz-sales-agent-eyebrow \{\s*text-align: center;/);
});

test('Sales Agent retains the phone track while inheriting reference description typography', async () => {
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  const hero = css.match(/#root \[data-antbuildz-sales-agent\] \.bright-hero-split\s*\{([^}]+)\}/);
  assert.match(hero[1], /grid-template-columns: minmax\(0, 1fr\) 380px/);
  assert.match(hero[1], /width: var\(--public-frame-width\)/);
  assert.match(hero[1], /max-width: var\(--public-frame-max\)/);
  assert.match(hero[1], /margin-inline: auto/);
  assert.match(css, /\[data-antbuildz-sales-agent\] \.bright-hero > \.antbuildz-public-hero-spacer\s*\{\s*display: none;/);
  assert.match(css, /\[data-antbuildz-sales-agent\] \.bright-hero-title-line \{ white-space: normal; \}/);
  assert.match(css, /--type-lead: clamp\(1rem, 1\.35vw, 1\.18rem\)/);
  assert.doesNotMatch(css, /#root\.antbuildz-public-typography \[data-antbuildz-sales-agent\]/, 'reference component styles own the description sizes');
});

test('AI Agent mobile hero gives the conversation room below its actions', async () => {
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(css, /#root \[data-antbuildz-sales-agent\] \.bright-hero\.antbuildz-public-hero-surface \{[^}]*height: auto;[^}]*overflow: clip;/);
  assert.match(css, /#root \[data-antbuildz-sales-agent\] \.bright-hero-mockup-right \{[^}]*order: 3 !important;[^}]*min-height: 400px;/);
  assert.match(css, /#root \[data-antbuildz-sales-agent\] \.bright-hero-actions-block \{[^}]*order: 2 !important;/);
});

test('Sales Agent hero cycles through five restrained themes every two seconds', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(source, /const SALES_AGENT_HERO_THEMES = \['slate', 'violet', 'blue', 'gold', 'red'\] as const;/);
  assert.match(source, /const SALES_AGENT_HERO_THEME_INTERVAL_MS = 2_000;/);
  assert.match(source, /chat\.dataset\.antbuildzHeroTheme = SALES_AGENT_HERO_THEMES\[themeIndex\]/);
  assert.match(source, /matchMedia\('\(prefers-reduced-motion: reduce\)'\)\.matches/);
  for (const theme of ['slate', 'violet', 'blue', 'gold', 'red']) {
    assert.match(css, new RegExp(`data-antbuildz-hero-theme="${theme}"`));
  }
  const themeRules = css.slice(css.indexOf('/* Replace the transferred neon four-corner theme'), css.indexOf('/* Fill the six missing Sales Agent'));
  assert.doesNotMatch(themeRules, /oklch|\.bright-glass-blob/);
});

test('product hero frames follow the shared header rail', async () => {
  const [styles, webstoreStyles] = await Promise.all([
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
    readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.module.css', import.meta.url), 'utf8'),
  ]);

  assert.match(styles, /@media \(max-width: 767px\)[\s\S]*?\[data-antbuildz-sales-agent\] \.bright-hero-split\s*\{[^}]*width: var\(--public-frame-width\);/);
  assert.match(webstoreStyles, /\.ws2-hero-shell\)[^{]*\{[\s\S]*?max-width: var\(--public-frame-max, 1250px\);/);
  assert.match(webstoreStyles, /\.ws2-hero-title\)[^{]*\{[^}]*max-width: var\(--public-frame-max, 1250px\);/);
  assert.match(webstoreStyles, /@media \(max-width: 767px\)[\s\S]*?\.webstore2-page > section:first-of-type\)[^{]*\{\s*padding-inline: var\(--public-frame-gutter, 5vw\);/);
});

test('Sales Agent Console title preserves room for the gradient line descenders', async () => {
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  const rule = css.match(/#root \[data-antbuildz-sales-agent\] \.af-section-header \.af-section-title-line:last-child\s*\{([^}]+)\}/);
  assert.ok(rule, 'scope the Console title correction to the Sales Agent page');
  assert.match(rule[1], /padding-bottom:\s*\.12em/);
  assert.match(
    css,
    /#root \[data-antbuildz-sales-agent\] \.af-section-header h2 \+ p \{\s*margin-top: 18px;\s*\}/,
    'the Console description follows the established section title-to-copy rhythm',
  );
});

test('Sales Agent touchpoint description uses its two-line desktop frame', async () => {
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(
    css,
    /#root\.antbuildz-original-root\.antbuildz-typography-trial[\s\S]*?\[data-antbuildz-sales-agent\][\s\S]*?\.dt-header[\s\S]*?\.dt-desc \{\s*width: min\(100%, 1000px\);\s*max-width: 1000px !important;\s*\}/,
    'only the touchpoint introduction overrides the shared 800px centred-description cap',
  );
});

test('Sales Agent touchpoint cards align their icons and use compact descriptions', async () => {
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(
    css,
    /#root \[data-antbuildz-sales-agent\] \.dt-card-content \{\s*justify-content: flex-start;\s*\}/,
    'different description lengths do not vertically offset the touchpoint icons',
  );
  assert.match(
    css,
    /#root \[data-antbuildz-sales-agent\] \.dt-card-desc \{\s*font-size: 14px;\s*line-height: 1\.55;\s*\}/,
    'touchpoint descriptions retain a compact readable scale',
  );
});

test('Sales Agent closing CTA uses the contained industrial split-card treatment', async () => {
  const [source, css] = await Promise.all([
    readFile(new URL('../lib/ai-sales-agent-copy.ts', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  assert.match(source, /className = 'antbuildz-sales-agent-cta-media'/);
  assert.match(source, /image\.src = '\/images\/emma-industrial-sales-consultation-v2\.jpg'/);
  assert.match(source, /Industrial sales specialist using product inventory on a tablet to guide a buyer/);
  assert.doesNotMatch(source, /APPROVED PRODUCT KNOWLEDGE|Catalogue → Qualification → Handover/);
  assert.match(source, /Configure your AI Agent around your products, sales, rental, support and human handover rules\./);
  assert.match(css, /\[data-antbuildz-sales-agent\] \.ws-cta-section \{[\s\S]*?grid-template-columns: minmax\(0, 1\.15fr\) minmax\(380px, \.85fr\);/);
  assert.match(css, /\[data-antbuildz-sales-agent\] \.ws-cta-grid,[\s\S]*?\.ws-cta-float \{\s*display: none !important;/);
  assert.match(css, /\.antbuildz-sales-agent-cta-media::after \{[\s\S]*?linear-gradient\(90deg,[\s\S]*?var\(--soft\) 100%\)/);
  assert.match(css, /@media \(min-width: 1180px\)[\s\S]*?\.ws-cta-title\[data-antbuildz-type-role="section-title"\] \{[^}]*max-width: none;[^}]*font-size: clamp\(38px, 3vw, 46px\) !important;[^}]*white-space: nowrap !important;/);
  assert.doesNotMatch(css, /\.antbuildz-sales-agent-cta-media figcaption/);
  assert.match(css, /@media \(max-width: 980px\)[\s\S]*?\.antbuildz-sales-agent-cta-media::after \{[\s\S]*?linear-gradient\(180deg,[\s\S]*?var\(--soft\) 100%\)/);
  assert.match(css, /@media \(max-width: 980px\)[\s\S]*?\[data-antbuildz-sales-agent\] \.ws-cta-section \{\s*grid-template-columns: minmax\(0, 1fr\);/);
});

test('Sales Agent removes the transferred logo strip before the shared footer', async () => {
  const [source, css] = await Promise.all([
    readFile(new URL('../lib/ai-sales-agent-copy.ts', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  assert.match(source, /logoStrip\.hidden = true/);
  assert.match(source, /logoStrip\.setAttribute\('aria-hidden', 'true'\)/);
  assert.match(source, /logoStrip\.setAttribute\('inert', ''\)/);
  assert.match(source, /logoStrip\.setAttribute\('data-antbuildz-sales-agent-removed', 'true'\)/);
  assert.doesNotMatch(source, /closingCta\.insertAdjacentElement\('afterend', logoStrip\)/);
  assert.match(css, /\[data-antbuildz-sales-agent\] \.bright-logo-strip \{\s*display: none !important;/);
});

test('Webstore closing CTA uses a catalogue-specific photographic card', async () => {
  const css = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.module.css', import.meta.url), 'utf8');
  assert.match(css, /section:has\(> \.ws2-final-cta-grid\)/);
  assert.match(css, /url\('\/images\/emma-webstore-catalogue-scan-v1\.jpg'\)/);
  assert.match(css, /linear-gradient\(90deg, rgba\(255, 250, 241, \.99\)/);
  assert.match(css, /section:has\(> \.ws2-final-cta-grid\) > :not\(\.max-w-6xl\)/);
  assert.match(css, /section:has\(> \.ws2-final-cta-grid\) \.ws2-hero-cta-button\) \{\s*min-height: 54px;\s*border-radius: 999px;/);
  assert.match(css, /@media \(max-width: 767px\)[\s\S]*?padding-inline: 24px !important;/);
  assert.match(css, /section:has\(> \.ws2-final-cta-grid\) > \.max-w-6xl\) \{[\s\S]*?margin-top: 190px !important;/);
  assert.match(css, /linear-gradient\(180deg, rgba\(255, 250, 241, 0\)/);
  await access(new URL('../public/images/emma-webstore-catalogue-scan-v1.jpg', import.meta.url));
});

test('Sales Agent copy retains the approved plan qualification and avoids the superseded claims', async () => {
  const { SALES_AGENT_COPY: copy } = await loadSalesAgentCopy();
  const source = await readFile(new URL('../lib/ai-sales-agent-copy.ts', import.meta.url), 'utf8');
  assert.equal(copy.capabilities.length, 6);
  assert.equal(copy.features.length, 8);
  assert.equal(copy.channels.length, 6);
  assert.equal(copy.consoleTabs.length, 6);
  assert.equal(copy.problems.length, 6);
  assert.equal(copy.closingLabels.length, 6);
  assert.equal(
    copy.problemsIntro,
    'Buyers need timely answers about product fit, specifications, pricing and availability. Slow replies, scattered information and missed requirements cause valuable enquiries to lose momentum.',
  );
  assert.deepEqual(Array.from(copy.problems, entry => Array.from(entry)), [
    ['a1', 'Slow First Response', 'Buyers expect quick answers, but your team cannot always respond immediately.'],
    ['a2', 'Unanswered Product Questions', 'Visitors may leave when they cannot confirm specifications, suitability or sales and rental terms.'],
    ['b', 'Enquiries Across Channels', 'Questions arrive through websites, messages, calls, campaigns and referrals, making them difficult to track.'],
    ['d', 'Scattered Product Knowledge', 'Specifications, pricing and policies are spread across files, systems and people, making consistent answers harder.'],
    ['c1', 'Incomplete Buyer Requirements', 'Product, quantity, location and timing can be missed, leaving too little information to recommend or quote.'],
    ['c2', 'Follow-Up Without Context', 'Without the buyer’s requirements and conversation history, your team has to ask the same questions again.'],
  ]);
  assert.deepEqual(Array.from(copy.capabilitiesIntro), [
    "Built from industrial equipment, B2B sales and rental expertise, your AI Agent helps customers understand complex products, compare options and take the next step.",
    '',
  ]);
  assert.deepEqual(Array.from(copy.capabilities, entry => Array.from(entry)), [
    ['knowledge', "Complex Product Knowledge", "Explain specifications, applications and compatibility using approved product information, sales guidance and rental terms."],
    ['training', "Product & Support Knowledge", "Answer product, customer service and technical questions using approved catalogues, manuals, policies and company knowledge."],
    ['matching', 'Product Recommendations', 'Systematically compare confirmed buyer requirements with approved product data to recommend the closest supported options.'],
    ['signals', 'Buyer Intent Signals', 'Recognise urgency, budget, application and sales or rental intent as the conversation develops.'],
    ['security', 'Knowledge & Response Control', 'Define which knowledge the Agent uses and how it handles pricing, recommendations and questions requiring human review.'],
    ['workflow', "Human Handover", "Pass requirements, product context and conversation history to your team for sales, rental or after-sales support."],
  ]);
  assert.deepEqual(Array.from(copy.capabilityEyebrows, entry => Array.from(entry)), [
    ['knowledge', 'Grounded'],
    ['training', 'Connected'],
    ['matching', 'Reasoning'],
    ['signals', 'Insightful'],
    ['security', 'Controlled'],
    ['workflow', 'Qualified'],
  ]);
  assert.deepEqual(Array.from(copy.recommendationLabels), ['Closest match', 'Strong alternative', 'Alternative']);
  assert.deepEqual(Array.from(copy.intentLabels), ['Requirements shared', 'Timeline confirmed', 'Budget discussed']);
  assert.deepEqual(Array.from(copy.controlLabels), ['Business Knowledge', 'Agent Instructions', 'Response Rules']);
  assert.deepEqual(Array.from(copy.quotationLabels), ['Requirements Confirmed', 'Products Recommended', 'Buyer Intent Captured', 'Qualified Enquiry']);
  assert.deepEqual(Array.from(copy.consoleIntro), [
    "Configure one AI Agent around your products, knowledge, inventory and workflows. Choose roles such as Sales Specialist, Product Specialist, Customer Service, Technical Support and After-Sales Support.",
    '',
  ]);
  assert.match(source, /set\('\.bento-title-line:first-child', 'More Than Answers'\)/);
  assert.match(source, /antbuildz-capabilities-gradient/);
  assert.match(source, /setSalesAgentText\(highlight, 'Moves Enquiries Forward'\)/);
  assert.match(source, /\.bv-train-pill', 'Grounded'/);
  assert.match(source, /\.bv-best', '✓ Closest match'/);
  assert.match(source, /\.bv-intent-label', 'High intent'/);
  assert.match(source, /\.bv-intent-score', ''/);
  assert.match(source, /setSalesAgentText\(eyebrow, 'AI AGENT FEATURES'\)/);
  assert.match(source, /set\('\.si-headline-line:first-child', \['Built Around', '', ''\]\)/);
  assert.match(source, /setSalesAgentText\(highlight, 'Your Product Business'\)/);
  assert.match(source, /set\('\.af-section-eyebrow', 'AI AGENT CONSOLE'\)/);
  assert.match(source, /set\('\.af-section-title-line:first-child', 'Build an Agent'\)/);
  assert.match(source, /leadingText\.textContent = 'That '/);
  assert.match(source, /setSalesAgentText\(highlight, 'Knows Your Business'\)/);
  assert.equal(
    copy.connection,
    "Connect your Agent to AI Webstore Suite inventory, Google Sheets, Excel or supported third-party systems. Recommend products using current stock and rental availability.",
  );
  assert.match(source, /set\('\.flexible-ai-platform__eyebrow', 'CONNECTED INVENTORY DATA'\)/);
  assert.match(source, /leadingText\.textContent = 'Every Recommendation'/);
  assert.match(source, /supportingText\.textContent = 'Backed by '/);
  assert.match(source, /setSalesAgentText\(highlight, 'Current Inventory'\)/);
  assert.equal((source.match(/\beyebrow\('/g) || []).length, 5);
  for (const label of [
    'ANTBUILDZ AI AGENT',
    'AI AGENT CAPABILITIES',
    'ENQUIRY CHALLENGES',
    'ONE AI AGENT',
    'AI AGENT FAQS',
  ]) assert.ok(source.includes(`'${label}'`));
  assert.match(source, /nextStepSection\.hidden = true/);
  assert.doesNotMatch(source, /Help Your Team|Take the Next Step|QUALIFIED ENQUIRIES/);
  assert.equal(
    copy.channelsIntro,
    "Connect your website, webstore, ads, emails, social posts and QR codes to the same AI Agent. Buyers can ask questions immediately—without calling, completing a form or waiting for a reply.",
  );
  assert.deepEqual(Array.from(copy.channels, entry => Array.from(entry)), [
    ['Website & Webstore', 'Embed your Agent as live chat so buyers can ask product questions, clarify requirements and receive recommendations.'],
    ['Campaigns & QR Codes', 'Let buyers move directly from advertisements, social posts, brochures or QR codes into a product conversation.'],
    ['Messaging Channels', 'Share your Agent link through messaging channels so buyers can start a conversation immediately.'],
    ['Email & Sales Outreach', 'Add your Agent link to campaigns, proposals and email signatures.'],
    ['International Enquiries', 'Support multilingual product conversations and capture requirements from buyers in other markets.'],
    ['Shared Business Knowledge', 'Use one approved knowledge base to keep product information and business guidance consistent across every touchpoint.'],
  ]);
  assert.match(source, /set\('\.dt-title', \['Turn Every Marketing Touchpoint', 'Into a Conversation'\]\)/);
  assert.match(source, /antbuildz-touchpoint-title-break/);
  assert.match(source, /set\('\.dt-subtitle', ''\)/);
  assert.match(source, /set\('\.dt-chat-name', 'AI Agent'\)/);
  assert.match(source, /set\('\.dt-chat-status', 'Online'\)/);
  assert.match(source, /Hi—what product or equipment are you looking for\?/);
  assert.match(source, /I need a 3-ton forklift for indoor use\./);
  assert.match(source, /I found several electric options that may fit\. What lifting height and rental period do you need\?/);
  assert.doesNotMatch(JSON.stringify(copy), /AES-256|SOC 2|Invoice generated|Reservation ✓|3×|<10s|50%|65%/);
});

async function loadWebstoreCopy() {
  const source = await readFile(new URL('../lib/ai-webstore-copy.ts', import.meta.url), 'utf8');
  const salesCopy = await loadSalesAgentCopy();
  const code = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  }).outputText;
  const exports = {};
  runInNewContext(code, { exports, require(id) {
    assert.equal(id, './ai-sales-agent-copy');
    return salesCopy;
  } });
  return exports;
}

test('Preview Webstore copy preserves nodes, rich headings, links, comparison content and FAQ questions', async () => {
  const { correctWebstoreCopy, WEBSTORE_REPLACEMENTS, WEBSTORE_FAQS, WEBSTORE_CONNECTED_AGENT, WEBSTORE_BENEFITS, WEBSTORE_HOW_IT_WORKS, WEBSTORE_FEATURES, WEBSTORE_COMPARISON } = await loadWebstoreCopy();
  const replacementNodes = WEBSTORE_REPLACEMENTS.map(([before]) => copyElement(before));
  const hero = copyElement('Not Just an AI Sales Agent', { ...copyElement(), nodeName: 'BR' }, 'It’s Your Entire ', copyElement('AI Sales Ecosystem'));
  const heroEyebrow = copyElement('AI WEBSTORE SUITE');
  const heroDescription = copyElement('Deploy the AI Sales Agent with a complete AI Webstore, unique product pages and built-in inventory management—or add the standalone Agent to your existing website.');
  const connectedEyebrow = copyElement('Connected AI Sales Agent');
  const connectedHeading = copyElement('From Questions to ', copyElement('Quotes'));
  const connectedDescription = copyElement('Your AI Sales Agent uses connected product and business information to answer questions, recommend suitable options and capture quotation requirements.');
  const connectedCopy = { querySelector: selector => ({
    '.mkt-section-eyebrow': connectedEyebrow,
    'h2': connectedHeading,
    '.mkt-section-desc': connectedDescription,
  })[selector] ?? null };
  const benefitsEyebrow = copyElement('Webstore Benefits');
  const benefitsHeading = copyElement('Make Every Product ', copyElement('Searchable, Discoverable, and Quote-Ready.'));
  const benefitsDescription = copyElement(
    copyElement('Turn product listings into structured, search-ready, and AI-readable pages.'),
    copyElement('Help buyers discover, compare, ask questions, assess suitability, and submit stronger quotation requests.'),
  );
  const benefitsCards = WEBSTORE_BENEFITS.cards.map((_, index) => {
    const title = copyElement(`Old benefit ${index + 1}`);
    const description = copyElement(`Old description ${index + 1}`);
    return { title, description, querySelector: selector => ({
      'h3': title,
      '[class~="mt-2.5"]': description,
    })[selector] ?? null };
  });
  const benefitsSection = { querySelector: selector => ({
    '.mkt-section-eyebrow': benefitsEyebrow,
    'h2': benefitsHeading,
    '.ws2-benefits-desc': benefitsDescription,
  })[selector] ?? null, querySelectorAll: selector => selector === '.ws2-bento-card' ? benefitsCards : [] };
  const howEyebrow = copyElement('How It Works');
  const howHeading = copyElement('From Search to ', copyElement('Sales-Ready Enquiry'));
  const howDescription = copyElement(
    copyElement('Guide buyers from product discovery to informed comparison and suitable recommendations.'),
    copyElement('Capture specifications, quantities, timelines, locations, delivery needs, and buying intent across languages.'),
  );
  const howSteps = WEBSTORE_HOW_IT_WORKS.steps.map((step, index) => {
    const title = copyElement(`Old step ${index + 1}`);
    const actors = step[1].map(label => copyElement(copyElement('icon'), `Old ${label}`));
    const actorRow = { nextElementSibling: copyElement(`Old step description ${index + 1}`), querySelectorAll: selector => selector === 'span' ? actors : [] };
    const titleRow = { nextElementSibling: actorRow };
    title.parentElement = titleRow;
    return { title, actors, description: actorRow.nextElementSibling };
  });
  const howActionStyles = {};
  const howActionGroup = Object.assign(copyElement(), {
    hidden: false,
    inert: false,
    style: { setProperty(name, value, priority) { howActionStyles[name] = `${value} ${priority}`.trim(); } },
  });
  const howActions = [copyElement('See it in action'), copyElement('Talk to sales')];
  howActions.forEach(action => { action.parentElement = howActionGroup; });
  const howSection = {
    querySelector: selector => ({
      '.mkt-section-eyebrow': howEyebrow,
      'h2': howHeading,
      '.ws2-how-desc': howDescription,
    })[selector] ?? null,
    querySelectorAll: selector => selector === 'h3' ? howSteps.map(step => step.title) : selector === 'button' ? howActions : [],
  };
  const featureEyebrow = copyElement('AI WEBSTORE SUITE FEATURES');
  const featureHeading = copyElement('Scale Your Business with ', copyElement('AI Webstore Suite'));
  const featureIntro = copyElement(copyElement('Old feature introduction'), copyElement('Old supporting introduction'));
  const featureNote = copyElement('Old feature note');
  const featureRows = WEBSTORE_FEATURES.cards.map((_, index) => {
    const title = copyElement(`Old feature ${index + 1}`);
    const miniTitle = Object.assign(copyElement(`Old mini-title ${index + 1}`), { hidden: false });
    const description = copyElement(`Old feature description ${index + 1}`);
    const image = copyElement();
    image.attributes = { src: `/feature-${index + 1}.svg`, alt: `Old feature ${index + 1}` };
    const copyColumn = {
      querySelector: selector => selector === 'h3' ? title : null,
      querySelectorAll: selector => selector === 'p' ? [miniTitle, description] : [],
    };
    const row = { firstElementChild: copyColumn, querySelector: selector => selector === 'img' ? image : null };
    return { row, title, miniTitle, description, image };
  });
  const featureList = { children: featureRows.map(feature => feature.row), insertAdjacentElement: () => assert.fail('the existing note must be reused') };
  const featureSection = { querySelector: selector => ({
    '.mkt-section-eyebrow': featureEyebrow,
    '.ws2-webstore-features-note': featureNote,
  })[selector] ?? null };
  featureIntro.previousElementSibling = featureHeading;
  featureIntro.nextElementSibling = featureList;
  featureIntro.closest = selector => selector === 'section' ? featureSection : null;
  const compareEyebrow = copyElement('The Differences');
  const compareHeading = copyElement(copyElement('AI Webstore Suite'), ' or Antbuildz AI Sales Agent?');
  const compareDescription = copyElement('The AI Webstore Suite is the complete platform and our primary product.');
  const compareSummary = copyElement(copyElement('The Antbuildz AI Sales Agent adds AI engagement to your existing website.'), copyElement('The AI Webstore Suite connects your product library, Webstore, workflows, and built-in AI Sales Agent.'));
  const inventorySection = Object.assign(copyElement(), { hidden: false });
  const globalAgentSection = Object.assign(copyElement('24/7 Sales Agent'), { hidden: false, inert: false });
  const deploymentSection = Object.assign(copyElement('AI Agent Deployment'), { hidden: false, inert: false });
  const controlCentreSection = Object.assign(copyElement('Your AI Sales Control Centre'), { hidden: false, inert: false });
  const sectionParent = {};
  let closingCtaMoves = 0;
  const closingCtaHeading = copyElement(copyElement('Give Your AI Sales Agent'), ' ', copyElement('a Connected Catalogue'));
  const closingCtaDescription = copyElement('Connect your product catalogue and buyer journeys to your AI Sales Agent, so customers can explore suitable products and your team receives clearer quotation requirements.');
  const closingCtaSection = Object.assign(copyElement(closingCtaHeading, closingCtaDescription), {
    parentElement: sectionParent,
    querySelector: selector => ({
      'h2': closingCtaHeading,
      '.mkt-section-desc': closingCtaDescription,
    })[selector] ?? null,
  });
  const closingCtaGrid = { closest: selector => selector === 'section' ? closingCtaSection : null };
  const faqSection = Object.assign(copyElement('Frequently Asked Questions'), {
    parentElement: sectionParent,
    nextElementSibling: null,
    insertAdjacentElement(position, element) {
      assert.equal(position, 'afterend');
      assert.equal(element, closingCtaSection);
      this.nextElementSibling = element;
      closingCtaMoves++;
    },
  });
  const partnerSection = copyElement();
  const partnerHeading = Object.assign(copyElement('Trusted Partners'), {
    hidden: false,
    parentElement: partnerSection,
  });
  const faqQuestion = copyElement('Is the AI Sales Agent included in the AI Webstore Suite?');
  const figures = copyElement('3x', '30%', '90%', '3x');
  const icon = { ...copyElement('arrow'), nodeName: 'svg' };
  const link = copyElement(copyElement('Prefer a lighter way to start?'), copyElement('Quickly deploy the AI Sales Agent.'), icon);
  link.attributes = { href: '/ai-agent', target: '_blank', rel: 'noopener' };
  const comparison = {
    attributes: {},
    setAttribute(name, value) { this.attributes[name] = value; },
    getAttribute(name) { return this.attributes[name] ?? null; },
    querySelector: selector => ({
      '.mkt-section-eyebrow': compareEyebrow,
      'h2': compareHeading,
      '.mkt-section-desc': compareDescription,
      '.ws2-compare-summary': compareSummary,
    })[selector] ?? null,
    querySelectorAll: () => [],
  };
  compareSummary.closest = selector => selector === 'section' ? comparison : null;
  const selectors = new Map([
    ['.ws2-hero-shell > .mkt-section-eyebrow', heroEyebrow],
    ['.ws2-hero-title', hero],
    ['.ws2-hero-desc', heroDescription],
    ['.ws2-sales-cycle-copy', connectedCopy],
    ['.ws2-benefits-section', benefitsSection],
    ['.ws2-how-section', howSection],
    ['.ws2-webstore-features-desc', featureIntro],
    ['.ws2-compare-summary', compareSummary],
    ['.flexible-ai-platform', inventorySection],
    ['.ws2-global-agent-section', globalAgentSection],
    ['.dt-section', deploymentSection],
    ['.af-section', controlCentreSection],
    ['.ws2-final-cta-grid', closingCtaGrid],
    ['section:has(details)', faqSection],
    ['section > .ws2-eyebrow-muted', partnerHeading],
  ]);
  const exampleScore = Object.assign(copyElement('96', '%'), { tagName: 'SPAN' });
  const exampleBar = { hidden: false };
  const exampleRow = { lastElementChild: exampleScore, querySelector: () => exampleBar };
  const exampleLabel = Object.assign(copyElement('Bosch GBH 2-26 DRE'), { tagName: 'P', parentElement: { parentElement: exampleRow } });
  const page = { ...copyElement(...replacementNodes, heroEyebrow, hero, heroDescription, connectedEyebrow, connectedHeading, connectedDescription, benefitsEyebrow, benefitsHeading, benefitsDescription, ...benefitsCards.flatMap(card => [card.title, card.description]), featureEyebrow, featureHeading, featureIntro, ...featureRows.flatMap(feature => [feature.title, feature.miniTitle, feature.description, feature.image]), featureNote, compareEyebrow, compareHeading, compareDescription, compareSummary, inventorySection, globalAgentSection, deploymentSection, controlCentreSection, faqQuestion, figures, link, exampleLabel, exampleScore), querySelector: selector => selectors.get(selector) ?? null, querySelectorAll: () => [exampleLabel] };
  const root = { querySelector(selector) { assert.equal(selector, '.webstore2-page'); return page; } };
  const originalChildren = [...page.childNodes];
  const originalHeroChildren = [...hero.childNodes];
  const originalLinkChildren = [...link.childNodes];

  correctWebstoreCopy(root, '/ai-webstore-suite');
  WEBSTORE_REPLACEMENTS.forEach(([, after], index) => assert.equal(replacementNodes[index].textContent, after));
  assert.equal(heroEyebrow.textContent, 'AI WEBSTORE SUITE');
  assert.equal(hero.textContent, 'Make Your Products DiscoverablePower Better Recommendations');
  assert.equal(hero.childNodes.at(-1).textContent, '', 'the former gradient span is emptied so no headline words are highlighted');
  assert.equal(heroDescription.textContent, 'Make your products discoverable through search and AI recommendations, while powering your AI Agent with product and inventory knowledge to recommend the right solution.');
  assert.equal(connectedEyebrow.textContent, WEBSTORE_CONNECTED_AGENT.eyebrow);
  assert.equal(connectedHeading.textContent, WEBSTORE_CONNECTED_AGENT.headline.join(''));
  assert.equal(connectedDescription.textContent, WEBSTORE_CONNECTED_AGENT.description);
  assert.equal(benefitsEyebrow.textContent, WEBSTORE_BENEFITS.eyebrow);
  assert.equal(benefitsHeading.textContent, WEBSTORE_BENEFITS.headline.join(''));
  assert.equal(benefitsDescription.textContent, WEBSTORE_BENEFITS.description);
  benefitsCards.forEach((card, index) => {
    assert.equal(card.title.textContent, WEBSTORE_BENEFITS.cards[index][0]);
    assert.equal(card.description.textContent, WEBSTORE_BENEFITS.cards[index][1]);
  });
  assert.equal(howEyebrow.textContent, WEBSTORE_HOW_IT_WORKS.eyebrow);
  assert.equal(howHeading.textContent, WEBSTORE_HOW_IT_WORKS.headline.join(''));
  assert.equal(howDescription.textContent, WEBSTORE_HOW_IT_WORKS.description);
  howSteps.forEach((step, index) => {
    const copy = WEBSTORE_HOW_IT_WORKS.steps[index];
    assert.equal(step.title.textContent, copy[0]);
    assert.deepEqual(Array.from(step.actors, actor => actor.textContent), Array.from(copy[1]));
    assert.equal(step.description.textContent, copy[2]);
  });
  assert.equal(howActionGroup.hidden, true);
  assert.equal(howActionGroup.inert, true);
  assert.equal(howActionStyles.display, 'none important');
  assert.equal(howActionGroup.getAttribute('aria-hidden'), 'true');
  assert.equal(howActionGroup.getAttribute('data-antbuildz-webstore-how-actions-removed'), 'true');
  assert.equal(featureEyebrow.textContent, WEBSTORE_FEATURES.eyebrow);
  assert.equal(featureHeading.textContent, WEBSTORE_FEATURES.headline);
  assert.equal(featureIntro.textContent, WEBSTORE_FEATURES.description);
  featureRows.forEach((feature, index) => {
    const copy = WEBSTORE_FEATURES.cards[index];
    assert.equal(feature.title.textContent, copy[0]);
    assert.equal(feature.miniTitle.hidden, true);
    assert.equal(feature.miniTitle.getAttribute('aria-hidden'), 'true');
    assert.equal(feature.miniTitle.getAttribute('data-antbuildz-webstore-feature-mini-title-removed'), 'true');
    assert.equal(feature.description.textContent, copy[1]);
    assert.equal(feature.image.getAttribute('src'), `/feature-${index + 1}.svg`);
    assert.equal(feature.image.getAttribute('alt'), copy[0]);
  });
  assert.equal(featureNote.textContent, WEBSTORE_FEATURES.note);
  assert.equal(compareEyebrow.textContent, WEBSTORE_COMPARISON.eyebrow);
  assert.equal(compareHeading.textContent, WEBSTORE_COMPARISON.headline.join(''));
  assert.equal(compareDescription.textContent, WEBSTORE_COMPARISON.description);
  assert.equal(compareSummary.textContent, WEBSTORE_COMPARISON.note);
  assert.equal(comparison.getAttribute('data-antbuildz-preserve-heading-punctuation'), 'true');
  assert.equal(link.textContent, "Explore the AI Agentarrow");
  assert.deepEqual(link.attributes, { href: '/ai-agent', target: '_blank', rel: 'noopener' });
  assert.deepEqual(page.childNodes, originalChildren);
  assert.deepEqual(hero.childNodes, originalHeroChildren);
  assert.deepEqual(link.childNodes, originalLinkChildren);
  assert.equal(figures.textContent, '3x30%90%3x');
  assert.equal(exampleScore.textContent, 'Specs', 'real products never inherit fabricated suitability percentages');
  assert.equal(exampleBar.hidden, true);
  assert.equal(faqQuestion.textContent, "Is the AI Agent included in the AI Webstore Suite?");
  assert.equal(inventorySection.hidden, true);
  assert.equal(inventorySection.getAttribute('aria-hidden'), 'true');
  assert.equal(inventorySection.getAttribute('data-antbuildz-webstore-inventory-removed'), 'true');
  assert.equal(globalAgentSection.hidden, true);
  assert.equal(globalAgentSection.inert, true);
  assert.equal(globalAgentSection.getAttribute('aria-hidden'), 'true');
  assert.equal(globalAgentSection.getAttribute('data-antbuildz-relocated-to-sales-agent'), 'true');
  assert.equal(deploymentSection.hidden, true);
  assert.equal(deploymentSection.inert, true);
  assert.equal(deploymentSection.getAttribute('aria-hidden'), 'true');
  assert.equal(deploymentSection.getAttribute('data-antbuildz-webstore-section-removed'), 'ai-agent-deployment');
  assert.equal(controlCentreSection.hidden, true);
  assert.equal(controlCentreSection.inert, true);
  assert.equal(controlCentreSection.getAttribute('aria-hidden'), 'true');
  assert.equal(controlCentreSection.getAttribute('data-antbuildz-webstore-section-removed'), 'ai-sales-control-centre');
  assert.equal(closingCtaMoves, 1, 'the existing closing CTA moves exactly once');
  assert.equal(faqSection.nextElementSibling, closingCtaSection, 'the FAQ is immediately followed by the closing CTA');
  assert.equal(closingCtaSection.getAttribute('data-antbuildz-webstore-after-faq'), 'true');
  assert.equal(closingCtaHeading.textContent, 'Want to See How the AI Webstore Suite Works?');
  assert.equal(closingCtaDescription.textContent, "Book a demo to see how your catalogue, inventory and AI Agent work together to help buyers discover products and prepare clearer enquiries.");
  assert.equal(partnerHeading.hidden, true);
  assert.equal(partnerHeading.getAttribute('aria-hidden'), 'true');
  assert.equal(partnerHeading.getAttribute('data-antbuildz-partner-heading-removed'), 'true');
  assert.equal(partnerSection.getAttribute('data-antbuildz-logo-strip'), 'true');

  // Existing text must not be rewritten on the observer's next pass.
  const lockText = node => {
    if (node.nodeType === 3) {
      const value = node.textContent;
      Object.defineProperty(node, 'textContent', { get: () => value, set: () => assert.fail('unchanged text was rewritten') });
    } else node.childNodes.forEach(lockText);
  };
  lockText(page);
  correctWebstoreCopy(root, '/ai-webstore-suite');
  assert.equal(closingCtaMoves, 1, 'reapplying the correction keeps the new order without another DOM move');
  const remountedFAQ = copyElement(WEBSTORE_FAQS[2][0]);
  page.childNodes.push(remountedFAQ);
  correctWebstoreCopy(root, '/ai-webstore-suite');
  assert.equal(remountedFAQ.textContent, WEBSTORE_FAQS[2][1]);
});

test('Webstore replacements match transferred source and preserve core agent, plan and claim boundaries', async () => {
  const { correctWebstoreCopy, WEBSTORE_REPLACEMENTS, WEBSTORE_COMPARISON, WEBSTORE_FAQS, WEBSTORE_MARKET_SHIFT, WEBSTORE_BENEFITS, WEBSTORE_HOW_IT_WORKS, WEBSTORE_JOURNEY_ACCENTS, WEBSTORE_FEATURES } = await loadWebstoreCopy();
  for (const path of ['/', '/pricing', '/ai-agent', '/ai-agent-console', '/webstore-2-ai-webstore-preview', '/webstore-2']) {
    correctWebstoreCopy({ querySelector() { assert.fail('copy must not touch another route'); } }, path);
  }
  const literals = new Set();
  for (const name of ['Webstore2-C2bkcW77.js', 'FlexibleAiPlatformSection-Bvdwv3n4.js', 'forklift-2-WOgxtpjy.js']) {
    const source = await readFile(new URL(`../public/assets/${name}`, import.meta.url), 'utf8');
    const parsed = ts.createSourceFile(name, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
    const visit = node => {
      if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) literals.add(node.text.trim());
      ts.forEachChild(node, visit);
    };
    visit(parsed);
  }
  const unmatched = WEBSTORE_REPLACEMENTS.map(([before]) => before).filter(before => !literals.has(before));
  assert.deepEqual(Array.from(unmatched), [], 'replacement keys must match actual transferred copy');
  assert.equal(WEBSTORE_COMPARISON.rows.length, 8, 'the supplied comparison contains eight rows');
  assert.deepEqual(Array.from(WEBSTORE_COMPARISON.columns), ["AI Agent", '+ AI Webstore Suite']);
  const copy = WEBSTORE_REPLACEMENTS.map(([, after]) => after).join('\n');
  assert.doesNotMatch(copy, /our primary product|focused alternative|21 languages|every visit into|\bCustomize\b|\bOrganize\b|\bCenter\b/);
  assert.match(copy, /Inventory connections and update frequency depend on your plan and setup/);
  assert.match(copy, /Sharing a link does not require a native messaging integration/);
  assert.doesNotMatch(WEBSTORE_COMPARISON.rows.flat().join('\n'), /optional|flexible setup/i);
  assert.deepEqual(Array.from(WEBSTORE_COMPARISON.rows, row => Array.from(row)), [
    ['Best For', 'Product guidance, recommendations and enquiry capture.', 'Adds product browsing, inventory context and structured sales workflows.'],
    ['Knowledge Source', 'Approved catalogues, PDFs, FAQs, websites and business documents.', 'Adds structured listings, specifications, pricing and supported inventory data.'],
    ['Buyer Experience', 'Buyers ask questions, receive guidance and share their requirements.', 'Adds product browsing, dedicated pages, comparisons and clear enquiry actions.'],
    ['Product Recommendations', 'Recommends suitable options from the product knowledge you provide.', 'Uses structured product and inventory data for more accurate matching.'],
    ['Online Discovery', 'Engages buyers through your website and shared Agent links.', 'Adds structured product pages that support SEO and GEO discovery.'],
    ['Marketplace Exposure', 'Uses your existing website, campaigns and marketing channels.', 'Syncs listings to Antbuildz Marketplace for visibility across both channels.'],
    ['Sales Workflows', 'Captures product needs, quantities, timing, location and contact details.', 'Adds sales, rental, quotation and structured enquiry workflows.'],
    ['Long-Term Value', 'Builds consistent product conversations and richer enquiry context.', 'Builds an organic product presence buyers can discover and revisit.'],
  ]);
  assert.match(copy, /THE PRODUCT DISCOVERY GAP/);
  assert.match(copy, /Every Product Needs a/);
  assert.match(copy, /Discoverable Identity/);
  for (const title of ['Weak Product Identity', 'Product Information Stays Hidden', 'Fragmented Product Information', 'Discovery Without a Next Step', 'Discovery Still Depends on Sales', 'A Slow Path to Enquiry']) assert.match(copy, new RegExp(title));
  assert.equal(WEBSTORE_MARKET_SHIFT.eyebrow, 'THE AI-ERA BUYER');
  assert.equal(WEBSTORE_MARKET_SHIFT.headline, 'AI Has Changed What Buyers Expect');
  assert.equal(WEBSTORE_MARKET_SHIFT.description, 'Modern buyers expect searchable products, instant answers and AI-assisted comparison.');
  for (const [title, description] of WEBSTORE_MARKET_SHIFT.cards) {
    assert.equal(title.split(/\s+/).length, 3, `${title} must contain exactly three words`);
    assert.ok(description.split(/\s+/).length < 12, `${description} must remain below 12 words`);
  }
  assert.equal(WEBSTORE_BENEFITS.eyebrow, 'DISCOVERY TO ENQUIRY');
  assert.deepEqual(Array.from(WEBSTORE_BENEFITS.headline), ['Make Every Product ', 'Discoverable and Sales-Ready']);
  assert.equal(WEBSTORE_BENEFITS.description, 'Help buyers discover, compare and enquire through structured product pages.');
  assert.deepEqual(Array.from(WEBSTORE_BENEFITS.cards, entry => Array.from(entry)), [
    ['Greater Product Visibility', 'Structure product pages to support SEO and GEO discovery.'],
    ['Higher Enquiry Conversion', 'Guide buyers towards clear enquiry and quotation actions.'],
    ['Wider Multilingual Reach', 'Present product information clearly across supported languages.'],
    ['More Accurate Recommendations', 'Give your Agent structured data for better product matching.'],
    ['Less Manual Work', 'Let your Agent handle early questions before your sales team steps in.'],
    ['Lasting Organic Presence', 'Keep each product discoverable beyond individual paid advertising campaigns.'],
  ]);
  assert.equal(WEBSTORE_HOW_IT_WORKS.eyebrow, 'HOW IT WORKS');
  assert.deepEqual(Array.from(WEBSTORE_HOW_IT_WORKS.headline), ['From Product Discovery to ', 'Enquiry']);
  assert.equal(WEBSTORE_HOW_IT_WORKS.description, 'Structured product data helps buyers discover, compare, receive recommendations and enquire.');
  assert.deepEqual(Array.from(WEBSTORE_HOW_IT_WORKS.steps, step => [step[0], Array.from(step[1]), step[2]]), [
    ['Discover Products', ['Webstore'], 'Buyers find your product pages through search, AI or shared links.'],
    ['Ask Questions', ["AI Agent"], 'Buyers ask questions about products, applications and requirements.'],
    ['Understand Needs', ["AI Agent"], 'The Agent identifies specifications, quantity, budget, location and timing.'],
    ['Match Products', ["AI Agent"], 'The Agent compares buyer needs with specifications and available inventory.'],
    ['Recommend Products', ["AI Agent", 'Webstore'], 'The Agent recommends products and shares Webstore pages for review.'],
    ['Submit Enquiry', ['Webstore', 'Sales Team'], 'Buyers submit product choices and requirements for your sales team.'],
  ]);
  assert.deepEqual(Array.from(WEBSTORE_JOURNEY_ACCENTS), ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    'journey accents move smoothly from cool discovery colours to the warm enquiry handoff');
  assert.equal(WEBSTORE_FEATURES.eyebrow, 'AI WEBSTORE SUITE FEATURES');
  assert.equal(WEBSTORE_FEATURES.headline, 'What the Webstore Includes');
  assert.equal(WEBSTORE_FEATURES.description, 'Manage products, workflows, enquiries, visitor insights and multilingual pages in one place.');
  assert.deepEqual(Array.from(WEBSTORE_FEATURES.cards, entry => Array.from(entry)), [
    ['Branded Webstore Builder', 'Customise your branding, banners, product categories and page content.'],
    ['Catalogue & Inventory Management', 'Manage specifications, pricing, availability, images and documents in one place.'],
    ['Sales & Rental Workflows', 'Configure purchase, rental and enquiry journeys around how your business sells.'],
    ['Quote & Enquiry Builder', 'Collect product selections, quantities, timelines, locations and buyer contact details.'],
    ['Webstore Visitor Insights', 'Track visitor activity, page performance and product interest across your Webstore.'],
    ['Multilingual Webstore Pages', 'Present product pages clearly across the supported languages you configure.'],
  ]);
  assert.equal(WEBSTORE_FEATURES.note, 'Feature availability depends on your selected plan and setup.');
  assert.match(WEBSTORE_FAQS[1][1], /without a webstore or choose a combined plan from the beginning/);
  assert.match(WEBSTORE_FAQS[2][1], /Sales and Rental\+ plans combine the AI Agent with AI Webstore Suite capabilities/);
  assert.match(WEBSTORE_FAQS[2][1], /without launching a Webstore/);
  assert.match(WEBSTORE_FAQS[3][1], /Sales adds sales Webstore capabilities; Rental\+ includes sales plus rental capabilities/);
});

test('selected Webstore experience is wired to the canonical product route', async () => {
  const { WEBSTORE_DESCRIPTION } = await loadWebstoreCopy();
  const { AI_WEBSTORE_PAGE } = await loadListingModule('preview-metadata');
  assert.equal(AI_WEBSTORE_PAGE.description, WEBSTORE_DESCRIPTION);
  const route = await readFile(new URL('../app/[slug]/page.tsx', import.meta.url), 'utf8');
  const wrapper = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const concept = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.tsx', import.meta.url), 'utf8');
  const oldRoute = await readFile(new URL('../app/webstore-2-ai-webstore-preview/page.tsx', import.meta.url), 'utf8');
  assert.match(route, /slug === 'ai-webstore-suite'[\s\S]*?<WebstoreConceptPage \/>/);
  assert.match(route, /WEBSTORE_DESCRIPTION/);
  assert.match(oldRoute, /permanentRedirect\('\/ai-webstore-suite'\)/);
  assert.match(concept, /correctWebstoreCopy\(root, window.location.pathname\)/);
  const correction = concept.indexOf('correctWebstoreCopy(root, window.location.pathname)');
  assert.ok(concept.indexOf('if (window.location.pathname !== AI_WEBSTORE_PATH) return;') < correction);
  assert.ok(correction < concept.indexOf('if (container?.isConnected) return;'), 'copy reapplies when tabs remount after portal attachment');
  assert.match(concept, /observer.observe\(root, \{ childList: true, subtree: true, characterData: true \}\)/);
  assert.match(wrapper, /correctSalesAgentCopy\(root, window.location.pathname\)/);
});

test('global reach section is relocated from Webstore to immediately before Sales Agent FAQs without duplicate CTAs', async () => {
  const route = await readFile(new URL('../app/[slug]/page.tsx', import.meta.url), 'utf8');
  const component = await readFile(new URL('../app/ai-sales-agent-global-reach.tsx', import.meta.url), 'utf8');
  const css = await readFile(new URL('../app/ai-sales-agent-global-reach.module.css', import.meta.url), 'utf8');
  const correction = await readFile(new URL('../lib/ai-webstore-copy.ts', import.meta.url), 'utf8');
  const globe = await readFile(new URL('../public/images/ai-sales-agent-global-globe.svg', import.meta.url), 'utf8');

  assert.match(route, /slug === 'ai-agent'[\s\S]*?<AiSalesAgentPage \/>/);
  assert.match(component, /MULTIPLE LANGUAGES, CHANNELS &amp; MARKETS/);
  assert.match(component, /One Agent\. Available <span[^>]*>24\/7\.<\/span>/);
  assert.match(component, /Support buyers across your channels, supported languages and markets—even outside office hours\./);
  assert.doesNotMatch(component, /href="\/book-a-demo"|href="\/pricing"|Book a Demo|View Pricing/);
  assert.match(component, /src="\/images\/ai-sales-agent-global-globe\.svg"/);
  assert.match(component, /\.bright-faq-accordion/);
  assert.match(component, /faq\.insertAdjacentElement\('beforebegin', container\)/);
  assert.match(component, /data-antbuildz-preserve-heading-punctuation="true"/);
  assert.match(correction, /globalAgentSection\.hidden = true/);
  assert.match(correction, /globalAgentSection\.inert = true/);
  assert.match(correction, /data-antbuildz-relocated-to-sales-agent/);
  assert.match(css, /padding: 96px/);
  assert.match(css, /@media \(max-width: 1179px\)[\s\S]*?padding-block: 80px/);
  assert.match(css, /@media \(max-width: 767px\)[\s\S]*?padding: 64px 24px/);
  assert.doesNotMatch(css, /\.actions|\.mobileActions|\.primary|\.secondary|\.arrow/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(globe, /viewBox="0 0 480 480"/);
  assert.ok(globe.length > 70_000, 'the existing globe artwork must be preserved rather than replaced with a placeholder');
  assert.match(globe, /stop-color="hsl\(220 48% 24%\)"/, 'the globe uses the approved lighter mid-ocean blue');
  assert.match(globe, /stop-color="hsl\(222 50% 13%\)"/, 'the globe retains depth with a softened lower-ocean blue');
  assert.doesNotMatch(globe, /hsl\(222 47% (?:12|5)%\)/, 'the former near-black ocean stops must not return');
  assert.match(css, /drop-shadow\(0 24px 38px rgb\(15 23 42 \/ 14%\)\)/, 'the lighter globe uses a softer shadow');
});

test('principal marketing pages derive CTA labels and treatments from one destination contract', async () => {
  const [system, wrapper, styles] = await Promise.all([
    readFile(new URL('../lib/public-cta-system.ts', import.meta.url), 'utf8'),
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);

  for (const pathname of ['/', '/ai-agent', '/ai-webstore-suite']) {
    assert.ok(system.includes(`'${pathname}'`));
  }
  for (const [destination, label, variant] of [
    ['/book-a-demo', 'Book a Demo', 'primary'],
    ['/pricing', 'View Pricing', 'secondary'],
    ['/ai-agent', 'Explore AI Agent', 'secondary'],
    ['/ai-webstore-suite', 'Explore AI Webstore Suite', 'secondary'],
  ]) {
    assert.ok(system.includes(`'${destination}': { label: '${label}', variant: '${variant}' }`));
  }
  assert.match(system, /Get an AI Webstore Suite Demo/);
  assert.match(system, /link\.setAttribute\('href', '\/book-a-demo'\)/);
  assert.match(system, /function placeDemoBeforePricing\(root: HTMLElement\)/);
  assert.match(system, /group\.insertBefore\(demo, pricing\)/);
  assert.match(system, /\.webstore2-page \.ws2-hero-actions a\[href\]/);
  assert.doesNotMatch(system, /Email Sales|direct-enquiry|ensureDirectEmailEnquiry/);
  assert.match(wrapper, /applyPublicCtaSystem\(root, window\.location\.pathname\)/);
  assert.match(styles, /a\[data-antbuildz-cta="true"\][\s\S]*?min-height: 54px !important;[\s\S]*?border-radius: 999px !important;[\s\S]*?font-size: 16px !important;/);
  assert.match(styles, /data-antbuildz-cta-variant="primary"[\s\S]*?background: var\(--yellow\) !important;/);
  assert.match(styles, /data-antbuildz-cta-variant="secondary"[\s\S]*?background: var\(--clean\) !important;/);
  assert.match(styles, /\.antbuildz-public-header \.antbuildz-header-demo \{[\s\S]*?height: 44px;[\s\S]*?min-height: 44px;[\s\S]*?background: color-mix\(in srgb, var\(--yellow\) 34%, var\(--clean\)\);/);
  assert.match(styles, /a\.antbuildz-header-demo\[data-antbuildz-cta="true"\][^{]*\{[^}]*height: 44px !important;[^}]*min-height: 44px !important;[^}]*padding-inline: 18px !important;[^}]*background: color-mix\(in srgb, var\(--yellow\) 34%, var\(--clean\)\) !important;[^}]*font-size: 14px !important;/);
  assert.match(styles, /@media \(max-width: 767px\)[\s\S]*?a\.antbuildz-header-demo\[data-antbuildz-cta="true"\][^{]*\{[^}]*height: 44px !important;[^}]*min-height: 44px !important;[^}]*padding-inline: 18px !important;[^}]*font-size: 14px !important;/);
  assert.match(styles, /@media \(max-width: 359px\)[\s\S]*?a\.antbuildz-header-demo\[data-antbuildz-cta="true"\][^{]*\{[^}]*height: 44px !important;[^}]*min-height: 44px !important;[^}]*padding-inline: 14px !important;[^}]*font-size: 13px !important;/);
  assert.doesNotMatch(styles, /antbuildz-direct-enquiry/);
});

test('shared footer keeps Company navigation focused on Antbuildz AI', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('footer.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const functions = parsed.statements.filter(statement => ts.isFunctionDeclaration(statement)
    && ['bindFooterAiHelpNavigation', 'correctFooter', 'setPricingText'].includes(statement.name?.text));
  const code = ts.transpileModule(functions.map(fn => fn.getText(parsed)).join('\n'), {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  let navigationBindings = 0;
  let helpNavigationBindings = 0;
  let copyWrites = 0;
  const element = (label = '') => ({
    attributes: {}, dataset: {}, text: label,
    setAttribute(name, value) { this.attributes[name] = value; },
    get textContent() { return this.text; },
    set textContent(value) { copyWrites++; this.text = value; },
  });
  const createElement = (tagName = '') => ({
    ...element(), tagName: tagName.toUpperCase(), children: [],
    appendChild(child) { this.children.push(child); child.parentElement = this; },
    append(...children) { children.forEach(child => this.appendChild(child)); },
    set href(value) { this.attributes.href = value; },
    get href() { return this.attributes.href; },
  });
  const companyLink = element('Blogs');
  companyLink.attributes.href = '/blogs';
  const policyLink = element('Agreement & Policy');
  policyLink.attributes.href = '/agreements';
  const helpLink = element('Help Centre');
  helpLink.attributes.href = '/help';
  const duplicateRow = element();
  const brand = element('Original brand copy');
  const footerEmails = [];
  const footerBrand = createElement('div');
  footerBrand.querySelector = selector => {
    assert.equal(selector, '[data-antbuildz-footer-email="true"]');
    return footerEmails[0] ?? null;
  };
  footerBrand.appendChild = child => {
    child.parentElement = footerBrand;
    footerEmails.push(child);
  };
  const marketplace = element();
  let languageMoves = 0;
  const languageClasses = new Set();
  const headerUtilities = {};
  const languageUtilities = {
    parentElement: headerUtilities,
    classList: { add(value) { languageClasses.add(value); } },
  };
  const footerBottom = {
    appendChild(child) { child.parentElement = this; languageMoves++; },
  };
  const marketplaceLinks = [];
  const companyList = {
    querySelector(selector) {
      assert.equal(selector, '[data-antbuildz-marketplace-link="true"]');
      return marketplaceLinks[0] ?? null;
    },
    appendChild(item) {
      item.parentElement = this;
      marketplaceLinks.push(item.children[0]);
    },
  };
  const companyNav = {
    querySelector(selector) {
      assert.equal(selector, 'ul');
      return companyList;
    },
  };
  const aiProductOrder = [];
  const aiProductsList = {
    insertBefore(item, before) {
      const current = aiProductOrder.indexOf(item);
      if (current >= 0) aiProductOrder.splice(current, 1);
      aiProductOrder.splice(aiProductOrder.indexOf(before), 0, item);
    },
  };
  const webstoreItem = { parentElement: aiProductsList, get previousElementSibling() { return aiProductOrder[aiProductOrder.indexOf(this) - 1] ?? null; } };
  const salesAgentItem = { parentElement: aiProductsList, get previousElementSibling() { return aiProductOrder[aiProductOrder.indexOf(this) - 1] ?? null; } };
  aiProductOrder.push(webstoreItem, salesAgentItem);
  const aiProducts = {
    querySelector(selector) {
      if (selector === 'a[href="/ai-agent"]') return { closest: () => salesAgentItem };
      if (selector === 'a[href="/ai-webstore-suite"]') return { closest: () => webstoreItem };
      throw new Error(`Unexpected AI Products selector: ${selector}`);
    },
  };
  const footer = element();
  footer.addEventListener = (type, handler, capture) => {
    assert.equal(type, 'click');
    assert.equal(typeof handler, 'function');
    assert.equal(capture, true);
    helpNavigationBindings++;
  };
  footer.contains = () => true;
  footer.ownerDocument = { createElement };
  footer.querySelector = selector => {
    if (selector === 'nav[aria-label="Marketplace"]') return marketplace;
    if (selector === '.abz-public-footer__bottom-inner') return footerBottom;
    if (selector === 'nav[aria-label="AI Products"]') return aiProducts;
    if (selector === '.abz-public-footer__brand p') return brand;
    if (selector === '.abz-public-footer__brand') return footerBrand;
    if (selector === 'nav[aria-label="Company"] a[href="/agreements"]') return policyLink;
    if (selector.includes('nav[aria-label="Company"] a[href="/help"]')) return helpLink;
    if (selector === 'nav[aria-label="Company"] ul') return companyNav.querySelector('ul');
    if (selector.startsWith('nav[aria-label="Company"]')) return companyLink;
    if (selector === 'nav[aria-label="AI Products"] a[href="/resources"]') return { closest: () => duplicateRow };
    throw new Error(`Unexpected footer selector: ${selector}`);
  };
  const correctFooter = runInNewContext(`${code}\ncorrectFooter`, {
    window: { location: { pathname: '/about' } },
    bindResourceNavigation(link) { assert.equal(link, companyLink); navigationBindings++; },
  });
  const root = { querySelector: selector => selector === '.abz-public-footer' ? footer : languageUtilities };
  correctFooter(root);
  const writesAfterFirstPass = copyWrites;
  correctFooter(root);
  assert.equal(companyLink.textContent, 'Resources');
  assert.equal(companyLink.attributes.href, '/resources');
  assert.equal(policyLink.textContent, 'Terms & Policy');
  assert.equal(policyLink.attributes.href, '/agreements');
  assert.equal(helpLink.textContent, 'AI Help Centre');
  assert.equal(helpLink.attributes.href, '/help/ai');
  assert.equal(marketplaceLinks.length, 1, 'repeated observer passes must not duplicate Marketplace');
  assert.equal(marketplaceLinks[0].textContent, 'Marketplace');
  assert.equal(marketplaceLinks[0].attributes.href, 'https://antbuildz.com');
  assert.equal(brand.textContent, "We build better conversations for complex products.");
  assert.equal(footerEmails.length, 0, 'footer correction must not add an Email Us button');
  assert.deepEqual(aiProductOrder, [salesAgentItem, webstoreItem]);
  assert.equal(duplicateRow.attributes.hidden, '');
  assert.equal(languageMoves, 1, 'the React-owned language control moves into the footer only once');
  assert.equal(languageUtilities.parentElement, footerBottom);
  assert.ok(languageClasses.has('antbuildz-footer-language'));
  assert.equal(navigationBindings, 1, 'repeated observer passes must not add duplicate click handlers');
  assert.equal(helpNavigationBindings, 1, 'the direct AI FAQ footer navigation binds only once');
  assert.equal(footer.dataset.antbuildzAiHelpNavigation, 'true');
  assert.equal(copyWrites, writesAfterFirstPass, 'footer text should not trigger a mutation loop');
  assert.doesNotThrow(() => correctFooter({ querySelector: () => null }));
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(css, /\.abz-public-footer__link-column li\[hidden\],[\s\S]*?display: none !important/);
  assert.doesNotMatch(source, /data-antbuildz-footer-email/);
  assert.match(css, /\.abz-public-footer__grid \{\s*grid-template-columns: minmax\(220px, 1\.3fr\) repeat\(4, minmax\(105px, \.82fr\)\) !important;/);
  assert.doesNotMatch(source, /data-antbuildz-footer-legal|antbuildz-footer-legal/);
});

test('agreement hub shows only AI privacy and product policy areas while preserving source documents', async () => {
  const source = await readFile(new URL('../lib/agreement-hub.ts', import.meta.url), 'utf8');
  assert.match(source, /url: 'https:\/\/antbuildz\.ai\/agreements'/);
  const wrapper = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  assert.match(wrapper, /syncAgreementMetadata\(document, window\.location\.pathname\)/);
  const code = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  }).outputText;
  const exports = {};
  runInNewContext(code, { exports });
  const { simplifyAgreementHub } = exports;
  let writes = 0;
  const element = (text = '') => ({
    attributes: {}, hidden: false, text,
    get textContent() { return this.text; },
    set textContent(value) { this.text = value; writes++; },
    setAttribute(name, value) { this.attributes[name] = value; },
    removeAttribute(name) { delete this.attributes[name]; },
  });
  const bundle = await readFile(new URL('../public/assets/LegalPolicies-CcINPjKp.js', import.meta.url), 'utf8');
  const urls = [...new Set(bundle.match(/https:\/\/antbuildz\.com\/pages\/[^"\s]+/g))];
  assert.equal(urls.length, 17, 'the existing inventory contains 17 unique document destinations');
  const links = urls.map(href => Object.assign(element(), { attributes: { href } }));
  const dates = urls.map(() => element('Last updated: 6 Apr 2024'));
  const rows = links.map((link, index) => ({
    querySelector(selector) { return selector === 'a' ? link : selector === 'h3' ? element(`Document ${index}`) : dates[index]; },
    closest() { return { querySelector: () => element('Singapore') }; },
  }));
  const labels = ['General Terms & Policies', 'Antbuildz AI Products', 'Marketplace'].map(element);
  const buttons = labels.map(label => Object.assign(element(), { querySelector: () => label }));
  const textTargets = new Map();
  const duplicates = [element(), element(), element()];
  const library = element();
  const classes = new Set();
  let hiddenSelectors = '';
  const hub = {
    classList: { add: name => classes.add(name) },
    querySelector(selector) {
      if (selector === '.legal-policies-home__library') return library;
      if (!textTargets.has(selector)) textTargets.set(selector, element('Original copy'));
      return textTargets.get(selector);
    },
    querySelectorAll(selector) {
      if (selector === '.legal-policies-home__topic-list button') return buttons;
      if (selector === '.legal-agreement-row') return rows;
      hiddenSelectors = selector;
      return duplicates;
    },
  };
  const root = { querySelector: () => hub };
  simplifyAgreementHub(root);
  const firstWrites = writes;
  simplifyAgreementHub(root);
  assert.equal(writes, firstWrites, 'repeat observer passes do not rewrite text');
  assert.equal(classes.size, 1);
  assert.deepEqual(labels.map(label => label.textContent), ['Privacy & data', 'AI product policies', 'Marketplace']);
  assert.equal(buttons[2].hidden, true);
  assert.equal(buttons[2].attributes['aria-hidden'], 'true');
  assert.equal(buttons[2].attributes.tabindex, '-1');
  assert.ok(duplicates.every(node => node.hidden));
  assert.equal(library.attributes['aria-label'], 'Browse Antbuildz AI policy documents');
  assert.ok(buttons.every(button => button.attributes['aria-controls'] === 'legal-policy-content'));
  assert.deepEqual(links.map(link => link.attributes.href), urls);
  assert.ok(dates.every(date => date.textContent === 'Last updated: 6 Apr 2024'));
  assert.equal(links[0].attributes['aria-label'], 'View Document 0 — Singapore');
  assert.doesNotMatch(hiddenSelectors, /\.legal-agreement-row(?:\s*,|\s*>\s*a)/, 'document rows and their links must stay visible');
  assert.doesNotMatch(source, /separate AI Sales Agent agreement is not currently available/i);
  assert.match(source, /'\.legal-policies-home__legal-note'/);
  assert.doesNotThrow(() => simplifyAgreementHub({ querySelector: () => null }), 'detail pages and unrelated routes are untouched');
});

test('legal navigation resolves AI policies locally without changing unrelated destinations', async () => {
  const source = await readFile(new URL('../lib/legal-navigation.ts', import.meta.url), 'utf8');
  const exports = {};
  runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, { exports, URL });
  const origin = 'http://localhost:8081';
  const { legalDestination, LEGAL_LINKS } = exports;
  assert.equal(LEGAL_LINKS.length, 4);
  assert.equal(legalDestination('https://antbuildz.com/legal/terms', origin), '/agreements/terms');
  assert.equal(legalDestination('https://antbuildz.com/pages/int-privacypolicy', origin), '/agreements/privacy');
  assert.equal(legalDestination('/legal/cookies', origin), '/agreements/privacy#cookies');
  assert.equal(legalDestination('/agreements/dpa#requests', origin), '/agreements/dpa#requests');
  assert.equal(legalDestination('/acceptable-use', origin), '/agreements/acceptable-use');
  assert.equal(legalDestination('https://example.com/privacy', origin), null);
  assert.equal(legalDestination('https://antbuildz.com', origin), null);
  assert.equal(legalDestination('/equipment/terms', origin), null);
  assert.equal(legalDestination('/agreements', origin), '/agreements');
  assert.equal(legalDestination('https://antbuildz.ai/agreements/', origin), '/agreements');
  assert.match(source, /antbuildzLegalBound/);
  assert.match(source, /event\.metaKey/);
  assert.match(source, /By subscribing, you agree to the/);
  assert.match(source, /By creating an account, you agree to the/);
});

test('Antbuildz AI publishes four dedicated legal documents for the Singapore entity', async () => {
  const [documents, index, route, legacy, shell, legalStyles, wrapper, sitemap, llms] = await Promise.all([
    readFile(new URL('../app/agreements/legal-documents.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/agreements/page.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/agreements/[document]/page.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/legal/[document]/page.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/agreements/legal-shell.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/agreements/legal-pages.module.css', import.meta.url), 'utf8'),
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/sitemap.ts', import.meta.url), 'utf8'),
    readFile(new URL('../public/llms.txt', import.meta.url), 'utf8'),
  ]);
  for (const slug of ['terms', 'privacy', 'dpa', 'acceptable-use']) {
    assert.match(documents, new RegExp(`slug: '${slug}'`));
    assert.match(index, new RegExp(`/agreements/${slug}`));
    assert.ok(legacy.includes(`/agreements/${slug}`));
    assert.match(sitemap, new RegExp(`'${slug}'`));
    assert.match(llms, new RegExp(`https://antbuildz\\.ai/agreements/${slug}`));
  }
  assert.match(route, /generateStaticParams/);
  assert.match(route, /if \(!document\) notFound\(\)/);
  assert.match(documents, /Antbuildz Pte\. Ltd\./);
  assert.match(documents, /202007699D/);
  assert.match(documents, /help@antbuildz\.ai/);
  assert.doesNotMatch(documents, /hello@|info@|support@|privacy@/);
  assert.doesNotMatch(documents, /slug: 'cookies'/);
  assert.match(route, /permanentRedirect\('\/agreements\/privacy#cookies'\)/);
  assert.match(documents, /Purchased Credits currently do not expire/);
  assert.match(documents, /greater of[\s\S]*USD 100/);
  assert.match(documents, /express authorisation/);
  assert.match(documents, /five Total Available Conversations/);
  assert.match(documents, /more than 14 days after its due date/);
  assert.match(documents, /does not automatically terminate/);
  assert.match(documents, /Safety-Critical Use/);
  assert.match(documents, /Google Analytics where enabled/);
  assert.match(documents, /does not sell Customer Personal Data/);
  assert.match(documents, /must not load before consent/);
  assert.doesNotMatch(documents, /Antbuildz Sdn Bhd|\[REGISTERED ADDRESS|\bTODO\b/i);
  assert.match(documents, /AI Sales Agent/);
  assert.match(documents, /AI Webstore Suite/);
  assert.match(documents, /Transactions conducted through the Antbuildz\.com marketplace may be subject to separate marketplace agreements/);
  assert.match(documents, /do not independently create a legally binding contract on your behalf/);
  assert.match(documents, /fees paid or payable[\s\S]*?12 months/);
  assert.match(documents, /laws of Singapore/);
  assert.match(documents, /courts of Singapore have exclusive jurisdiction/);
  assert.match(documents, /data intermediary or processor/);
  assert.match(documents, /without undue delay/);
  assert.match(documents, /standard of protection comparable/);
  assert.doesNotMatch(documents, /SOC 2|ISO 27001|AES-256|99\.9%|data residency/i);
  assert.match(wrapper, /correctLegalAcceptance/);
  assert.match(wrapper, /terms\.href = '\/agreements\/terms'/);
  assert.match(wrapper, /privacy\.href = '\/agreements\/privacy'/);
  assert.match(shell, /\['Terms & Policy', '\/agreements'\]/);
  assert.match(shell, /\['Company', \[/);
  assert.doesNotMatch(shell, /aria-label="Legal"|const legalLinks/);
  assert.doesNotMatch(shell, /Sales enquiries|mailto:hello@antbuildz\.com/);
  assert.match(legalStyles, /\.wordmark \{[\s\S]*?height: 1\.05em;[\s\S]*?align-items: center;[\s\S]*?white-space: nowrap;/,
    'legal header and footer wordmarks retain the shared centred logo geometry');
  assert.match(legalStyles, /\.wordmarkAi \{[\s\S]*?flex: 0 0 auto;[\s\S]*?font: inherit;[\s\S]*?letter-spacing: inherit;/,
    'the .ai suffix cannot shrink or drift away from the Antbuildz wordmark');
  assert.match(legalStyles, /@media \(max-width: 640px\) \{[\s\S]*?\.wordmark \{ font-size: 20px; \}/);
  assert.match(legalStyles, /@media \(max-width: 360px\) \{\s*\.wordmark \{ font-size: 18px; \}/);
});

test('legal documents use article sections and the main public footer structure', async () => {
  const [view, shell, css, language, social] = await Promise.all([
    readFile(new URL('../app/agreements/legal-document-view.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/agreements/legal-shell.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/public-footer.css', import.meta.url), 'utf8'),
    readFile(new URL('../app/public-footer-language.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/public-footer-social.tsx', import.meta.url), 'utf8'),
  ]);
  assert.match(view, /<section key=\{section.id\} id=\{section.id\}>/);
  assert.doesNotMatch(view, /styles.schedule/);
  for (const name of ['main', 'container', 'grid', 'brand', 'link-column', 'bottom', 'bottom-inner']) {
    assert.ok(shell.includes(`abz-public-footer__${name}`));
    assert.ok(css.includes(`.abz-public-footer__${name}`));
  }
  assert.match(shell, /<PublicFooterSocial \/>/);
  assert.match(shell, /<PublicFooterLanguage \/>/);
  assert.doesNotMatch(shell, /antbuildz-footer-legal/);
  assert.doesNotMatch(shell, /styles.footer|<span>Singapore<\/span>/);
  for (const label of ['Facebook', 'LinkedIn', 'WhatsApp', 'Email']) assert.ok(social.includes(label));
  assert.match(language, /antbuildz-language-preference/);
  assert.match(language, /antbuildz-language-change/);
  assert.match(language, /showModal\(\)/);
  assert.match(language, /trigger.current\?\.focus\(\)/);
});

test('AI help scope hides Marketplace choices and legacy routes leave the AI website', async () => {
  const scope = await readFile(new URL('../lib/ai-help-scope.ts', import.meta.url), 'utf8');
  const rootRoute = await readFile(new URL('../app/[slug]/page.tsx', import.meta.url), 'utf8');
  const helpRoute = await readFile(new URL('../app/help/[slug]/page.tsx', import.meta.url), 'utf8');
  const faqDetailRoute = await readFile(new URL('../app/faqs/[slug]/page.tsx', import.meta.url), 'utf8');
  const wrapper = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');

  assert.match(scope, /pathname === '\/faqs' \|\| pathname === '\/help'/);
  assert.match(scope, /\.help-directory__card\[href="\/help\/marketplace"\]/);
  assert.match(scope, /marketplaceCard\.hidden = true/);
  assert.match(scope, /pathname !== '\/help\/ai'/);
  assert.match(scope, /if \(!\/marketplace\/i\.test\(question\)\) return/);
  assert.match(scope, /url: 'https:\/\/antbuildz\.ai\/help\/ai'/);
  assert.match(scope, /syncAiHelpMetadata\(document, pathname\)/);
  assert.match(wrapper, /scopeAiHelpExperience\(root, window\.location\.pathname\)/);
  assert.match(wrapper, /function bindFooterAiHelpNavigation\(footer: HTMLElement\)/);
  assert.match(wrapper, /closest<HTMLAnchorElement>\('a\[href="\/help\/ai"\]'\)/);
  assert.match(wrapper, /window\.location\.assign\(new URL\('\/help\/ai', window\.location\.origin\)\.href\)/);
  assert.match(rootRoute, /help: '\/help\/ai'[\s\S]*?faqs: '\/help\/ai'[\s\S]*?permanentRedirect\(redirectTargets\[slug\]\)/);
  assert.match(helpRoute, /slug === 'marketplace'[\s\S]*?permanentRedirect\('https:\/\/antbuildz\.com\/help\/marketplace'\)/);
  assert.match(helpRoute, /alternates: \{ canonical: '\/help\/ai' \}/);
  assert.match(faqDetailRoute, /permanentRedirect\(`https:\/\/antbuildz\.com\/faqs\/\$\{encodeURIComponent\(slug\)\}`\)/);
});

test('demo handoff validates details and encodes them only for the approved Calendly event', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('demo.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const statements = parsed.statements.filter((statement) =>
    ts.isFunctionDeclaration(statement) && statement.name?.text === 'buildDemoSchedulingUrl'
    || ts.isVariableStatement(statement) && statement.declarationList.declarations.some((d) => d.name.getText(parsed) === 'DEMO_SCHEDULING_URL'));
  const code = ts.transpileModule(statements.map(s => s.getText(parsed)).join('\n'), {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const build = runInNewContext(`${code}\nbuildDemoSchedulingUrl`, { URL });
  for (const [name, email] of [['', 'qa@example.com'], ['   ', 'qa@example.com'], ['QA', ''], ['QA', 'bad-email'], ['QA', 'qa@example.com\nother@example.com']]) {
    assert.equal(build(name, email), null);
  }
  const url = new URL(build('  Zoë & 李  ', '  qa+demo@example.com  '));
  assert.equal(url.origin + url.pathname, 'https://calendly.com/webstore-antbuildz/30min');
  assert.equal(url.searchParams.get('name'), 'Zoë & 李');
  assert.equal(url.searchParams.get('email'), 'qa+demo@example.com');
  assert.equal(url.searchParams.get('utm_source'), 'antbuildz.ai');
  assert.equal(new URL(build('QA &redirect=https://example.com', 'qa@example.com')).searchParams.get('redirect'), null);
  assert.doesNotMatch(source, /'\/book-a-demo': '\/trial'/);
});

test('demo navigation follows the request page without hijacking alternate clicks or unrelated links', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('demo-navigation.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const handler = parsed.statements.find(s => ts.isFunctionDeclaration(s) && s.name?.text === 'navigateDemoFromLink');
  const code = ts.transpileModule(handler.getText(parsed), { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
  let destination;
  class FakeElement { closest() { return this.link; } }
  const context = { Element: FakeElement, URL, DEMO_REQUEST_PATH: '/book-a-demo',
    window: { location: { href: 'http://localhost:8081/', origin: 'http://localhost:8081', assign(href) { destination = href; } } } };
  const handle = runInNewContext(`${code}\nnavigateDemoFromLink`, context);
  const event = (overrides = {}, href = '/book-a-demo', linkOverrides = {}) => {
    const target = new FakeElement();
    target.link = { href, target: '', hasAttribute: () => false, ...linkOverrides };
    return { target, button: 0, preventDefault() { this.prevented = true; }, stopImmediatePropagation() { this.stopped = true; }, ...overrides };
  };
  for (const interaction of [event(), event({ key: 'Enter' })]) {
    handle(interaction);
    assert.equal(destination, 'http://localhost:8081/book-a-demo');
    assert.equal(interaction.prevented && interaction.stopped, true);
  }
  for (const interaction of [event({ ctrlKey: true }), event({ metaKey: true }), event({ shiftKey: true }), event({ altKey: true }), event({ button: 1 }), event({ key: 'Enter', repeat: true }), event({ key: ' ' }), event({ defaultPrevented: true }), event({}, '/pricing'), event({}, 'https://example.com/book-a-demo'), event({}, '/book-a-demo', { target: '_blank' }), event({}, '/book-a-demo', { hasAttribute: () => true })]) {
    destination = undefined;
    handle(interaction);
    assert.equal(destination, undefined);
  }
});

test('homepage uses the approved Antbuildz AI industrial hero', async () => {
  const source = await readFile(new URL('../app/site.tsx', import.meta.url), 'utf8');
  assert.match(source, /Make Industrial Buying Better/);
  assert.match(source, /With Antbuildz AI/);
  assert.match(source, /Industrial AI Sales Agent for product-led B2B/);
  assert.doesNotMatch(source, /className="hero-lead">Antbuildz AI is the Industrial AI Sales Agent/);
  assert.match(source, /\/images\/industrial-ai\.png/);
});

test('homepage uses the approved AI Agent product-match video with an immediate conversation', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  assert.match(source, /function setupHomeHeroMedia/);
  assert.match(source, /home-hero-ai-agent-product-match-v2-trial\.mp4/);
  assert.match(source, /home-hero-ai-agent-product-match-v2-poster\.jpg/);
  assert.match(source, /Asian business professional using a smartphone to find industrial product options with an AI Agent/);
  assert.match(source, /heroImage\.fetchPriority = 'high'/);
  assert.match(source, /video\.autoplay = true/);
  assert.match(source, /video\.muted = true/);
  assert.match(source, /video\.playsInline = true/);
  assert.match(source, /AI Agent for Sales & Rental Businesses/);
  assert.match(source, /Make every product easier to discover across search and AI, while your AI Agent understands complex needs, recommends the right product, and turns conversations into revenue\./);
  assert.match(source, /prefers-reduced-motion: reduce/);
  assert.match(styles, /\.antbuildz-ai-home \.ai-marketplace-hero-stage \{\s*height: max\(100svh, 720px\)/);
  assert.match(styles, /filter: saturate\(\.88\) contrast\(1\.06\) brightness\(\.82\)/);
  assert.match(styles, /\.antbuildz-ai-home \.ai-marketplace-hero-overlay \{[\s\S]*?linear-gradient\(180deg, rgb\(4 16 34 \/ \.5\)/);
  assert.match(styles, /top: clamp\(132px, 19svh, 184px\)/);
  assert.match(styles, /left: var\(--public-frame-gutter\) !important/);
  assert.match(styles, /@media \(max-width: 767px\)[\s\S]*?\.antbuildz-ai-home \.ai-marketplace-hero-copy \{[\s\S]*?left: var\(--public-frame-gutter\) !important;[\s\S]*?width: var\(--public-frame-width\) !important;/);
  assert.match(styles, /right: var\(--public-frame-gutter\)/);
  assert.match(styles, /bottom: clamp\(56px, 7svh, 78px\)/);
  assert.match(styles, /@media \(min-width: 1180px\) \{[\s\S]*?\.antbuildz-ai-home \.antbuildz-home-hero-conversation\.is-centre \{[\s\S]*?top: clamp\(300px, 35svh, 380px\);[\s\S]*?right: calc\(var\(--public-frame-gutter\) \+ clamp\(24px, 2\.5vw, 40px\)\);[\s\S]*?bottom: auto;/);
  assert.match(styles, /@media \(min-width: 768px\) and \(max-width: 1179px\) \{[\s\S]*?\.antbuildz-ai-home \.antbuildz-home-hero-conversation\.is-centre \{[\s\S]*?top: max\(clamp\(350px, 40svh, 400px\), var\(--antbuildz-home-chat-top, 0px\)\);[\s\S]*?right: calc\(var\(--public-frame-gutter\) \+ clamp\(12px, 2vw, 20px\)\);[\s\S]*?bottom: auto;/);
  assert.match(styles, /\.antbuildz-home-hero-conversation \{\s*right: var\(--public-frame-gutter\);\s*bottom: 32px;\s*width: var\(--public-frame-width\);/);
  assert.match(styles, /@media \(max-width: 640px\) \{[\s\S]*?\.antbuildz-ai-home \.antbuildz-home-hero-conversation\.is-centre \{\s*top: max\(clamp\(312px, 38svh, 328px\), var\(--antbuildz-home-chat-top, 0px\)\);\s*bottom: auto;/);
  assert.match(source, /Math\.min\(430, Math\.max\(360, heroBounds\.height \* \.48\)\)/);
  assert.match(styles, /\.antbuildz-ai-home \.ai-marketplace-hero-copy \.antbuildz-ai-home-description \{\s*max-width: none;/);
  assert.match(styles, /opacity: var\(--antbuildz-home-chat-opacity, 1\)/);
  assert.match(styles, /\.antbuildz-ai-home \.antbuildz-home-hero-video \{/);
  assert.match(styles, /\.antbuildz-ai-home \.antbuildz-home-hero-video \{ display: none; \}/);
  await access(new URL('../public/videos/home-hero-ai-agent-product-match-v2-trial.mp4', import.meta.url));
  await access(new URL('../public/videos/home-hero-ai-agent-product-match-v2-poster.jpg', import.meta.url));
});

test('homepage conversation contains buyer messages and renders Agent answers without message boxes', async () => {
  const [styles, source] = await Promise.all([
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
  ]);
  const glass = styles.slice(styles.indexOf('.antbuildz-home-hero-conversation {'), styles.indexOf('.antbuildz-home-industries {'));
  assert.match(glass, /--home-chat-agent-accent: var\(--blue\)/);
  assert.match(glass, /--home-chat-buyer-accent: var\(--yellow\)/);
  assert.match(glass, /--home-chat-glass-fill: color-mix\(in srgb, var\(--home-chat-agent-accent\) 34%, transparent\)/);
  assert.match(glass, /--home-chat-glass-buyer-fill: color-mix\(in srgb, var\(--home-chat-buyer-accent\) 24%, transparent\)/);
  assert.match(glass, /--home-chat-glass-radius: 20px/);
  assert.match(glass, /-webkit-backdrop-filter: blur\(var\(--home-chat-glass-blur\)\)/);
  assert.match(glass, /prefers-reduced-transparency: reduce/);
  assert.doesNotMatch(glass, /will-change: opacity/);
  const buyer = glass.match(/\.antbuildz-home-hero-conversation__bubble\.is-buyer > \.antbuildz-home-hero-conversation__surface \{([^}]+)\}/)?.[1];
  assert.match(buyer, /var\(--home-chat-glass-buyer-fill\)/);
  assert.doesNotMatch(buyer, /linear-gradient|255 197 1/);
  const agent = glass.match(/\.antbuildz-home-hero-conversation__bubble\.is-agent > \.antbuildz-home-hero-conversation__surface \{([^}]+)\}/)?.[1];
  assert.match(agent, /background: transparent/);
  assert.match(agent, /box-shadow: none/);
  assert.match(agent, /backdrop-filter: none/);
  const summary = glass.match(/\.antbuildz-home-hero-conversation__bubble\.is-summary > \.antbuildz-home-hero-conversation__surface \{([^}]+)\}/)?.[1];
  assert.match(summary, /background: transparent/);
  assert.match(summary, /box-shadow: none/);
  assert.match(summary, /backdrop-filter: none/);
  assert.match(glass, /background: color-mix\(in srgb, var\(--ink\) 58%, transparent\)/);
  assert.match(glass, /-webkit-backdrop-filter: blur\(24px\) saturate\(120%\)/);
  assert.match(glass, /box-shadow: 0 22px 46px -30px rgb\(2 6 23 \/ 78%\)/);
  assert.doesNotMatch(source, /antbuildz-home-hero-conversation__status/);
  assert.doesNotMatch(glass, /mask-image/);
  assert.match(glass, /--home-chat-bubble-width: 340px/);
  assert.match(glass, /width: var\(--home-chat-bubble-width\)/);
  assert.match(glass, /width: min\(470px, 42vw\)/);
  assert.match(glass, /right: var\(--public-frame-gutter\)/);
  const surface = glass.match(/\.antbuildz-home-hero-conversation__surface \{([^}]+)\}/)?.[1];
  assert.match(surface, /border: 0/);
  assert.match(surface, /background: var\(--home-chat-glass-fill\)/);
  assert.doesNotMatch(surface, /linear-gradient|saturate\(140%\)/);
  assert.doesNotMatch(glass, /inset 0 0 1px \.75px var\(--home-chat-reply-edge\)/);
  assert.match(glass, /0 0 14px -4px var\(--home-chat-reply-halo\)/);
  assert.doesNotMatch(buyer, /reply-edge|reply-halo/);
  assert.doesNotMatch(glass, /glass-rim|glass-glow/);
  assert.match(source, /const chatHeight = heroBounds\.width <= 767/);
  assert.match(source, /Math\.min\(370, Math\.max\(300, heroBounds\.height \* \.46\)\)/);
  assert.match(source, /transcript\?\.addEventListener\('scroll', updateTranscriptFade/);
  assert.match(source, /transcript\?\.removeEventListener\('scroll', updateTranscriptFade/);
  assert.match(source, /prefers-reduced-motion: reduce/);
});

test('every homepage conversation uses round Emma and buyer portraits with stable speaker identity', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const identity = await readFile(new URL('../lib/agent-identity.ts', import.meta.url), 'utf8');
  const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('hero.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const renderer = parsed.statements.find(s => ts.isFunctionDeclaration(s) && s.name?.text === 'createHomeHeroConversation');
  const code = ts.transpileModule(renderer.getText(parsed), { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
  const emmaSrc = identity.match(/EMMA_PORTRAIT_SRC = '([^']+)'/)[1];
  const emmaAlt = identity.match(/EMMA_PORTRAIT_ALT = '([^']+)'/)[1];
  class Element {
    constructor(tag) { this.tag = tag; this.children = []; this.dataset = {}; this.attributes = {}; }
    appendChild(child) { this.children.push(child); }
    setAttribute(name, value) { this.attributes[name] = value; }
  }
  const create = runInNewContext(`${code}\ncreateHomeHeroConversation`, {
    document: { createElement: tag => new Element(tag) },
    EMMA_PORTRAIT_SRC: emmaSrc, EMMA_PORTRAIT_ALT: emmaAlt,
  });
  const messages = ['buyer', 'agent', 'requirement'].map(kind => ({ kind, text: `${kind} example` }));
  for (const layer of ['centre', 'left', 'right', 'outer-left', 'outer-right']) {
    const chat = create(messages, layer, 'Example conversation', 'Gather requirements for team review.');
    assert.equal(chat.dataset.layer, layer);
    assert.match(chat.children[0].textContent, /buyer and Emma, AI Sales Agent/);
    const transcript = chat.children[1];
    assert.equal(transcript.attributes['aria-hidden'], 'true', 'avoid announcing every animation frame');
    for (const [index, message] of messages.entries()) {
      const messageElement = transcript.children[index];
      const [avatar, surface] = messageElement.children;
      assert.equal(messageElement.dataset.kind, message.kind);
      assert.equal(avatar.tag, 'img');
      assert.equal(avatar.width, 24);
      assert.equal(avatar.height, 24);
      assert.equal(avatar.draggable, false);
      assert.equal(avatar.src, message.kind === 'buyer' ? '/images/industrial-buyer-avatar-asian-v2.jpg' : emmaSrc);
      assert.equal(avatar.alt, message.kind === 'buyer' ? 'Example Asian industrial buyer' : emmaAlt);
      await access(new URL(`../public${avatar.src}`, import.meta.url));
      if (message.kind !== 'requirement') assert.equal(surface.textContent, message.text);
      else assert.equal(surface.children[1].textContent, message.text);
    }
  }
  const avatarStyle = styles.match(/\.antbuildz-home-hero-conversation__avatar \{([^}]+)\}/)[1];
  assert.match(avatarStyle, /border-radius: 50%/);
  assert.match(avatarStyle, /border: 0/);
  assert.match(avatarStyle, /box-shadow: none/);
  assert.match(avatarStyle, /object-fit: cover/);
  assert.match(styles, /\.antbuildz-home-hero-conversation__bubble\.is-buyer \{[^}]*flex-direction: row-reverse/);
  assert.doesNotMatch(renderer.getText(parsed), /__speaker|speaker.textContent/);
});

test('homepage conversations place AI replies and typing on the left and buyers on the right', async () => {
  const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  const buyer = styles.match(/\.antbuildz-home-hero-conversation__bubble\.is-buyer \{([^}]+)\}/)?.[1];
  const replies = styles.match(/\.antbuildz-home-hero-conversation__bubble\.is-agent,\s*\.antbuildz-home-hero-conversation__bubble\.is-requirement,\s*\.antbuildz-home-hero-conversation__bubble\.is-summary \{([^}]+)\}/)?.[1];
  const typing = styles.match(/\.antbuildz-home-hero-conversation__typing \{([^}]+)\}/)?.[1];
  assert.match(buyer, /align-self: flex-end/);
  assert.match(replies, /align-self: flex-start/);
  assert.match(typing, /align-self: flex-start/);

  // All five layers, mobile layouts and static reduced-motion rows use these
  // same role selectors; responsive rules must not reverse the speaker sides.
  const roleAlignments = [...styles.matchAll(/([^{}]+)\{([^{}]*align-self:[^{}]*)\}/g)]
    .filter(([, selector]) => /antbuildz-home-hero-conversation__(bubble|typing)/.test(selector));
  assert.equal(roleAlignments.length, 3);
});

test('homepage depth layers reuse four unique Who We Serve transcripts and share the animation renderer', async () => {
  const [source, styles, reference] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
    readFile(new URL('../public/assets/SolutionDetail-DpEDThBg.js', import.meta.url), 'utf8'),
  ]);
  const parsed = ts.createSourceFile('hero.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  assert.deepEqual(parsed.parseDiagnostics, []);
  const declarations = parsed.statements.filter((statement) => ts.isVariableStatement(statement)
    && statement.declarationList.declarations.some((declaration) => ['HOME_HERO_CONVERSATION', 'HOME_BACKGROUND_CONVERSATIONS'].includes(declaration.name.getText(parsed))));
  const code = ts.transpileModule(`${declarations.map((declaration) => declaration.getText(parsed)).join('\n')}\nJSON.stringify({centre: HOME_HERO_CONVERSATION, background: HOME_BACKGROUND_CONVERSATIONS});`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const { centre, background } = JSON.parse(runInNewContext(code));
  const summaries = centre.filter((message) => message.kind === 'summary');
  assert.deepEqual(centre.map((message) => message.kind), [
    'buyer', 'agent', 'buyer', 'summary',
    'buyer', 'agent', 'buyer', 'summary',
  ], 'each product example is a buyer-Agent exchange ending in a structured answer');
  assert.match(centre[1].text, /tracked spider lift/);
  assert.match(centre[5].text, /robotic total station/);
  assert.match(centre[2].text, /monthly hire price/);
  assert.match(centre[6].text, /key measuring ranges/);
  assert.equal(summaries.length, 2, 'each conversation contains one structured product summary');
  assert.ok(summaries.every((summary) => !('eyebrow' in summary)), 'summary cards omit editorial sequence labels');
  assert.deepEqual(summaries.map((summary) => summary.title), ['TEUPEN LEO23GT', 'Topcon GT-1501']);
  assert.deepEqual(summaries[0].rows.map(({ label, value }) => [label, value]), [
    ['Working height', '23.0 m'],
    ['Retracted width', '0.98 m'],
    ['Max. platform load', '200 kg'],
    ['Monthly hire price', 'Supplier quote'],
  ]);
  assert.deepEqual(summaries[1].rows.map(({ label, value }) => [label, value]), [
    ['Angle accuracy', '1″'],
    ['Prism measuring range', '5,000 m'],
    ['Reflectorless range', '1,000 m'],
    ['Instrument package price', 'Supplier quote'],
  ]);
  assert.ok(summaries.every((summary) => /confirm/i.test(summary.note)), 'price and configuration details retain a supplier-confirmation boundary');
  assert.match(summaries[0].recommendation, /outrigger footprint and ground conditions/);
  assert.match(summaries[0].note, /final hire price, availability, hire period, delivery and project-specific charges/);
  assert.match(summaries[1].note, /target and conditions/);
  assert.match(summaries[1].note, /controller, prism kit, software, support and final supplier quote/);
  assert.doesNotMatch(JSON.stringify(centre), /Singapore|S\$|US package|US\$|local kit/i, 'foreground conversations remain location-neutral');
  assert.match(source, /antbuildz-home-hero-conversation__summary-table/);
  assert.doesNotMatch(source, /PRICING & SPECIFICATION ANSWER|SPECIFICATION & PRICING ANSWER/);
  assert.match(styles, /\.antbuildz-home-hero-conversation__summary-table \{/);
  assert.doesNotMatch(styles, /\.antbuildz-home-hero-conversation__summary-heading > span/);
  assert.match(styles, /\.antbuildz-home-hero-conversation__recommendation \{/);
  assert.deepEqual(background.map((chat) => chat.source), ['/manufacturers-brands', '/parts-aftermarket', '/hardware-trade-supplies', '/buggies-commercial-vehicles']);
  assert.deepEqual(background.map((chat) => chat.layer), ['left', 'right', 'outer-left', 'outer-right']);
  const messages = [...centre.map((message) => message.text)];
  for (const chat of background) {
    assert.equal(chat.messages.length, 6);
    assert.ok(chat.summary.length > 0);
    for (const message of chat.messages) {
      assert.ok(reference.includes(message.text), `approved Who We Serve copy: ${message.text}`);
      assert.ok(!messages.includes(message.text), `not a duplicate: ${message.text}`);
      messages.push(message.text);
    }
  }
  assert.match(source, /createHomeHeroConversation\(messages, layer, label, summary\)/);
  assert.match(source, /setupHomeHeroConversationRuntime\(hero, chat, layerIndex\)/);
  assert.doesNotMatch(source, /const updateScrollProgress/);
  assert.match(source, /\[2600, 2500, 3100, 2800, 3400\]\[layerIndex\]/);
  assert.match(source, /cleanups\.forEach\(\(cleanup\) => cleanup\(\)\)/);
  assert.match(source, /window\.clearInterval\(advanceConversation\)/);
  assert.match(source, /!conversationActive \|\| reducedMotion\.matches \|\| document\.hidden/);
  assert.match(source, /transcript\.setAttribute\('aria-hidden', 'true'\)/);
  assert.match(source, /messageNodes\[currentStep\]\?\.dataset\.kind !== 'summary'/);
  const left = styles.match(/\.antbuildz-home-hero-conversation\.is-left \{([^}]+)\}/)?.[1];
  const right = styles.match(/\.antbuildz-home-hero-conversation\.is-right \{([^}]+)\}/)?.[1];
  assert.match(left, /z-index: 3/);
  assert.match(right, /z-index: 2/);
  assert.match(left, /--home-chat-scale: \.88/);
  assert.match(right, /--home-chat-scale: \.78/);
  assert.match(left, /--home-chat-offset-y: 52px/);
  assert.match(right, /--home-chat-offset-y: 116px/);
  assert.match(left, /--home-chat-agent-accent: var\(--purple\)/);
  assert.match(left, /--home-chat-buyer-accent: #fb7185/);
  assert.match(left, /--home-chat-bubble-width: 300px/);
  assert.match(left, /--home-chat-font-size: \.772rem/);
  assert.match(right, /--home-chat-agent-accent: #14b8a6/);
  assert.match(right, /--home-chat-bubble-width: 270px/);
  assert.match(right, /--home-chat-font-size: \.695rem/);
  assert.match(styles, /\.is-outer-left \{[\s\S]*?--home-chat-offset-x: clamp\(-640px, -42vw, -440px\)/);
  assert.match(styles, /\.is-outer-right \{[\s\S]*?--home-chat-offset-x: clamp\(440px, 42vw, 640px\)/);
  assert.match(styles, /\.is-outer-left,[\s\S]*?\.is-outer-right \{[\s\S]*?--home-chat-bubble-width: 240px;[\s\S]*?--home-chat-font-size: \.618rem/);
  assert.match(styles, /\.is-outer-left \{[\s\S]*?--home-chat-agent-accent: #6366f1/);
  assert.match(styles, /\.is-outer-right \{[\s\S]*?--home-chat-agent-accent: #0891b2/);
  assert.match(styles, /@media \(max-width: 1179px\) \{\s*\.antbuildz-home-hero-conversation\.is-outer-left,\s*\.antbuildz-home-hero-conversation\.is-outer-right \{ display: none; \}/);
  assert.match(source, /const layerVisible = layer === 'centre'/);
  assert.match(styles, /\.antbuildz-ai-home \.antbuildz-home-hero-conversation:not\(\.is-centre\) \{\s*display: none/);
});

test('hero conversations are visible immediately, animate independently and clean up on route changes', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('hero.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const helpers = parsed.statements.filter((statement) => ts.isFunctionDeclaration(statement)
    && ['setupHomeHeroRuntime', 'setupHomeHeroConversationRuntime', 'resetHomeHeroRuntime'].includes(statement.name?.text));
  const code = ts.transpileModule(`let homeHeroRuntimeElement = null; let homeHeroRuntimeCleanup = null;\n${helpers.map((helper) => helper.getText(parsed)).join('\n')}`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const intervals = new Map();
  const listeners = new Map();
  const properties = new Map();
  let timerId = 0;
  const motion = { matches: false, addEventListener() {}, removeEventListener() {} };
  const chats = ['centre', 'left', 'right', 'outer-left', 'outer-right'].map((layer) => {
    const messages = Array.from({ length: 6 }, () => {
      const message = { visible: false };
      message.classList = {
        toggle: (name, visible) => {
          if (name === 'is-visible') message.visible = visible;
        },
      };
      return message;
    });
    return {
      dataset: { layer }, messages,
      classList: { toggle() {} },
      querySelectorAll: () => messages,
      querySelector: () => null,
    };
  });
  const hero = {
    querySelectorAll: () => chats,
    querySelector: () => ({ getBoundingClientRect: () => ({ bottom: 280 }) }),
    getBoundingClientRect: () => ({ top: 0, height: 1000 }),
    style: { setProperty: (key, value) => properties.set(key, value), removeProperty: (key) => properties.delete(key) },
  };
  const root = {
    querySelector: (selector) => selector.includes('is-centre') ? chats[0] : hero,
  };
  const context = {
    root,
    document: { hidden: false },
    window: {
      innerHeight: 1000,
      innerWidth: 1440,
      matchMedia: () => motion,
      setInterval: (callback, delay) => { const id = ++timerId; intervals.set(id, { callback, delay }); return id; },
      clearInterval: (id) => intervals.delete(id),
      addEventListener: (name, callback) => { if (!listeners.has(name)) listeners.set(name, new Set()); listeners.get(name).add(callback); },
      removeEventListener: (name, callback) => listeners.get(name)?.delete(callback),
      requestAnimationFrame: () => ++timerId,
      cancelAnimationFrame() {},
      setTimeout: () => ++timerId,
      clearTimeout() {},
    },
  };
  // Transcript scrolling is separately browser-checked; this isolates the five clocks.
  runInNewContext(`${code}\nsetupHomeHeroRuntime(root); setupHomeHeroRuntime(root);`, context);
  assert.equal(intervals.size, 5, 'repeated setup must not install duplicate timers');
  const timers = [...intervals.values()];
  assert.deepEqual(timers.map(({ delay }) => delay), [2600, 2500, 3100, 2800, 3400]);
  const visibleCounts = () => chats.map((chat) => chat.messages.filter((message) => message.visible).length);
  assert.deepEqual(visibleCounts(), [1, 1, 1, 1, 1]);
  timers[0].callback();
  assert.deepEqual(visibleCounts(), [2, 1, 1, 1, 1]);
  timers[1].callback();
  timers[1].callback();
  timers[2].callback();
  timers[3].callback();
  timers[4].callback();
  assert.deepEqual(visibleCounts(), [2, 1, 1, 1, 1]);
  context.document.hidden = true;
  timers.forEach(({ callback }) => callback());
  assert.deepEqual(visibleCounts(), [2, 1, 1, 1, 1], 'hidden tabs pause all layers');
  context.document.hidden = false;
  motion.matches = true;
  timers.forEach(({ callback }) => callback());
  assert.deepEqual(visibleCounts(), [2, 1, 1, 1, 1], 'reduced motion stops automatic messages');
  runInNewContext('resetHomeHeroRuntime();', context);
  assert.equal(intervals.size, 0);
  assert.equal(properties.size, 0);
  assert.ok([...listeners.values()].every((callbacks) => callbacks.size === 0));
  assert.equal(listeners.has('scroll'), false, 'page scrolling must not control the hero conversation');
  motion.matches = false;
  runInNewContext('setupHomeHeroRuntime(root);', context);
  [...intervals.values()].forEach(({ callback }) => callback());
  assert.deepEqual(visibleCounts(), [2, 1, 1, 1, 1], 'the lower-right foreground conversation starts on first load');
  runInNewContext('resetHomeHeroRuntime();', context);
  context.window.innerWidth = 1024;
  runInNewContext('setupHomeHeroRuntime(root);', context);
  [...intervals.values()].forEach(({ callback }) => callback());
  assert.deepEqual(visibleCounts(), [2, 1, 1, 1, 1], 'background conversations remain paused on compact screens');
  runInNewContext('resetHomeHeroRuntime();', context);
  motion.matches = true;
  runInNewContext('setupHomeHeroRuntime(root);', context);
  assert.deepEqual(visibleCounts(), [6, 6, 6, 6, 6], 'reduced-motion visitors receive static complete conversations');
  runInNewContext('resetHomeHeroRuntime();', context);
});

test('public marketing typography uses the original Plus Jakarta Sans and Inter system', async () => {
  const [layout, home, source, styles] = await Promise.all([
    readFile(new URL('../app/layout.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/page.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);

  assert.match(layout, /import \{ Inter, Plus_Jakarta_Sans \} from 'next\/font\/google'/);
  assert.match(layout, /variable: '--font-plus-jakarta-sans'/);
  assert.match(layout, /variable: '--font-inter'/);
  assert.match(layout, /className=\{`\$\{plusJakartaSans\.variable\} \$\{inter\.variable\}`\}/);
  assert.doesNotMatch(layout, /Geist|font-geist-sans/);
  assert.doesNotMatch(home, /Inter_Tight|font-inter-tight|interTight/);
  assert.doesNotMatch(source, /antbuildz-ai-marketing-type/);
  assert.match(styles, /--font-heading: var\(--font-plus-jakarta-sans\), "Plus Jakarta Sans"/);
  assert.match(styles, /--font-body: var\(--font-inter\), Inter/);
  assert.match(styles, /--mkt-heading-font: var\(--font-heading\)/);
  assert.match(styles, /--mkt-body-font: var\(--font-body\)/);
  assert.doesNotMatch(styles, /font-geist-sans|marketing-weight-hero|marketing-tracking-hero/);
});

test('the reversible marketing typography trial uses semantic roles and excludes Console and demos', async () => {
  const [trial, source, styles, previewStyles] = await Promise.all([
    readFile(new URL('../lib/public-marketing-typography.ts', import.meta.url), 'utf8'),
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
    readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.module.css', import.meta.url), 'utf8'),
  ]);

  const expectedPaths = [
    '/', '/ai-agent', '/ai-webstore-suite', '/pricing', '/resources', '/help/ai',
    '/about', '/book-a-demo', '/agreements', '/rental-businesses', '/manufacturers-brands',
    '/dealers-distributors', '/industrial-mro', '/hardware-trade-supplies',
    '/building-engineering', '/parts-aftermarket', '/buggies-commercial-vehicles',
  ];
  expectedPaths.forEach(pathname => assert.match(trial, new RegExp(`'${pathname.replaceAll('/', '\\/')}'`)));
  assert.doesNotMatch(trial, /'\/ai-agent-console'/);
  assert.match(source, /applyPublicMarketingTypographyTrial\(root, window\.location\.pathname\)/);
  assert.match(styles, /--antbuildz-trial-hero-title-size: clamp\(44px, 4\.5vw, 64px\)/);
  assert.match(styles, /--antbuildz-trial-section-title-size: clamp\(40px, 3\.334vw, 48px\)/);
  assert.match(styles, /--antbuildz-trial-major-intro-size: clamp\(17px, 1\.25vw, 18px\)/);
  assert.match(styles, /--antbuildz-trial-hero-title-size: clamp\(36px, 9\.5vw, 38px\)/);
  assert.match(styles, /--antbuildz-trial-section-title-size: clamp\(30px, 8vw, 32px\)/);
  assert.match(styles, /--antbuildz-trial-major-intro-size: 16px/);
  assert.match(styles, /@media \(max-width: 767px\)[\s\S]*?\[data-antbuildz-type-role="major-intro"\] \{\s*width: 100% !important;\s*max-width: none !important;\s*text-align: justify !important;\s*text-align-last: left;\s*text-justify: inter-word;/);
  assert.match(styles, /\[data-antbuildz-type-role="hero-title"\][\s\S]*?font-weight: 800 !important;[\s\S]*?line-height: var\(--antbuildz-trial-hero-title-line\) !important/);
  assert.match(styles, /\[data-antbuildz-type-role="section-title"\][\s\S]*?font-weight: var\(--antbuildz-trial-section-title-weight\) !important;[\s\S]*?white-space: normal !important/);
  assert.match(styles, /\[data-antbuildz-type-role="major-intro"\][\s\S]*?font-weight: 400 !important;[\s\S]*?white-space: normal !important/);
  assert.doesNotMatch(trial, /\.af-headline|\.af-window|\.pricing-card|table|details|summary/);
  assert.doesNotMatch(styles, /antbuildz-typography-trial\s+:is\(h1|antbuildz-typography-trial\s+h1/);
  assert.match(previewStyles, /\.ws2-hero-shell \.ws2-hero-title\)[^{]*\{[^}]*font-size: clamp\(34px, 4vw, 56px\) !important;[^}]*line-height: 1\.04 !important;/,
    'the user-requested Webstore hero title is one restrained step below the shared 64px maximum');
  assert.match(previewStyles, /@media \(min-width: 768px\)[\s\S]*?\.ws2-hero-shell \.ws2-hero-desc\)[^{]*\{[^}]*max-width: 1100px !important;/,
    'the shortened Webstore hero description uses a wider desktop reading frame');
});

test('public marketing sections use approved responsive spacing and semantic surfaces', async () => {
  const [system, source, styles, agents, design] = await Promise.all([
    readFile(new URL('../lib/public-marketing-sections.ts', import.meta.url), 'utf8'),
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
    readFile(new URL('../AGENTS.md', import.meta.url), 'utf8'),
    readFile(new URL('../DESIGN.md', import.meta.url), 'utf8'),
  ]);

  assert.match(source, /applyPublicMarketingSectionSystem\(root, window\.location\.pathname\)/);
  assert.match(system, /TITLE_ROLE_SELECTOR = '\[data-antbuildz-type-role="section-title"\]'/);
  assert.match(system, /resolveSectionOwner\(title\)/);
  assert.match(system, /section\?\.matches\('\.next-step-panel'\)/);
  assert.match(system, /section\.closest<HTMLElement>\('\.si-sierra-stage--cta'\)/);
  assert.match(system, /\.ws2-how-section/);
  assert.match(system, /pricing-section:has\(\.pricing-card\[data-antbuildz-plan\]\)/);
  assert.match(system, /CLEAN_TITLE_SELECTORS = \[[\s\S]*?'#home-product-relationship'[\s\S]*?\]\.join/);
  assert.match(system, /CANVAS_TITLE_SELECTORS = \[[\s\S]*?'#home-data-trust-heading'[\s\S]*?\]\.join/);
  assert.doesNotMatch(system, /CANVAS_TITLE_SELECTORS = \[[\s\S]*?'#home-product-relationship'[\s\S]*?\]\.join/);
  assert.match(system, /matches\(title, CANVAS_TITLE_SELECTORS\)\) return 'canvas'/);
  assert.doesNotMatch(system, /SOFT_TITLE_SELECTORS = \[[\s\S]*?'#home-product-relationship'[\s\S]*?\]\.join/);
  assert.doesNotMatch(system, /SOFT_TITLE_SELECTORS = \[[\s\S]*?'#home-data-trust-heading'[\s\S]*?\]\.join/);
  assert.doesNotMatch(system, /ai-agent-console|exact-ai-console/);
  assert.match(styles, /--section-space-major: 96px/);
  assert.match(styles, /--section-space-compact: 64px/);
  assert.match(styles, /@media \(max-width: 1179px\)[\s\S]*?--section-space-major: 80px/);
  assert.match(styles, /@media \(max-width: 1179px\)[\s\S]*?--section-space-compact: 56px/);
  assert.match(styles, /@media \(max-width: 767px\)[\s\S]*?--section-space-major: 64px/);
  assert.match(styles, /--section-space-compact: 48px/);
  assert.match(styles, /\.si-sierra-stage--cta \.next-step-panel \{[\s\S]*?margin-top: 0/);
  for (const role of ['canvas', 'clean', 'soft', 'dark']) {
    assert.match(styles, new RegExp(`data-antbuildz-section-surface="${role}"`));
  }
  assert.match(agents, /96px top and bottom at 1180px and above, 80px from 768–1179px, and 64px at 767px and below/);
  assert.match(design, /Major public marketing sections use 96px vertical padding at 1180px and above/);
  assert.match(design, /four canonical surface roles: canvas, clean, soft and dark/);
});

test('reference typography is inherited by public components and mapped onto new homepage sections', async () => {
  const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  const home = await readFile(new URL('../app/home-education.module.css', import.meta.url), 'utf8');
  assert.match(styles, /--type-section-heading: clamp\(2\.25rem, 4vw, 4\.1rem\)/);
  assert.match(styles, /--type-heading-weight: 800/);
  assert.match(styles, /--type-heading-tracking: -\.04em/);
  assert.match(styles, /--type-section-heading: clamp\(2rem, 9vw, 2\.75rem\)/);
  assert.doesNotMatch(styles, /#root\.antbuildz-public-typography :is\(/, 'do not flatten reference component styles');
  assert.match(styles, /#root\.antbuildz-original-root:not\(\.antbuildz-public-typography\) :where\(/, 'retain the existing operational font scope');
  assert.match(home, /font: 500 1\.05rem\/1\.375 var\(--font-heading\)/);
  assert.match(home, /font: 400 \.95rem\/1\.7 var\(--font-heading\)/);
  assert.match(home, /font-size: clamp\(1\.9rem, 7\.5vw, 2\.35rem\)/);
});

test('homepage education sections follow the header and hero title rail', async () => {
  const home = await readFile(new URL('../app/home-education.module.css', import.meta.url), 'utf8');
  assert.match(
    home,
    /\.frame \{ width: min\(1250px, 90vw\); margin-inline: auto; \}/,
    'homepage sections follow the same 1250px / 90vw rail as the header and hero title',
  );
  assert.match(
    home,
    /@media \(max-width: 767px\)[\s\S]*?\.frame \{ width: min\(1250px, 90vw\); \}/,
    'mobile homepage sections preserve the live-site five-percent rail',
  );
  assert.doesNotMatch(home, /\.frame \{ width: min\(1280px, calc\(100% - 48px\)\)/);
});

test('Who We Serve audience introductions align with the shared section frame', async () => {
  const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(
    styles,
    /\.solutions-insurance-page \.si-sierra-stage--rental-audience \.si-sierra-copy\s*\{\s*padding-inline: 0;/,
  );
});

test('Who We Serve inventory heading uses the surrounding heading colour', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  assert.match(
    source,
    /classList\.toggle\('antbuildz-who-we-serve-page', WHO_WE_SERVE_PATHS\.has\(window\.location\.pathname\)\)/,
  );
  assert.match(
    styles,
    /#root\.antbuildz-original-root\.antbuildz-who-we-serve-page[\s\S]*?#flexible-ai-platform-heading[\s\S]*?\.mkt-gradient-text\s*\{[\s\S]*?background: none !important;[\s\S]*?-webkit-text-fill-color: currentColor !important;/,
  );
});

test('public typography is removed for Console and marks long-form articles without changing their content', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('original-antbuildz-app.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const declaration = parsed.statements.find((node) => ts.isFunctionDeclaration(node) && node.name?.text === 'correctPublicTypography');
  assert.ok(declaration);
  const code = ts.transpileModule(declaration.getText(parsed), { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
  let publicHeader = true;
  const classes = new Map();
  const articleClasses = new Set();
  const article = { classList: { add: (name) => articleClasses.add(name) } };
  const root = {
    classList: { toggle: (name, enabled) => classes.set(name, enabled) },
    querySelector: (selector) => selector === '.antbuildz-public-header'
      ? (publicHeader ? {} : null)
      : { closest: () => article },
  };
  const context = { root };
  runInNewContext(`${code}\ncorrectPublicTypography(root);`, context);
  assert.equal(classes.get('antbuildz-public-typography'), true);
  assert.ok(articleClasses.has('antbuildz-article-typography'));
  publicHeader = false;
  runInNewContext(`${code}\ncorrectPublicTypography(root);`, context);
  assert.equal(classes.get('antbuildz-public-typography'), false, 'Console must not inherit marketing sizes');
});

test('transferred public shell is corrected for the Antbuildz AI brand', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  assert.match(source, /HOME_HERO_TITLE_PRIMARY = 'Built for Complex'/);
  assert.match(source, /HOME_HERO_TITLE_BRAND = 'Product Conversations'/);
  assert.match(source, /antbuildz-ai-wordmark/);
  assert.match(source, /brandImage\.src = '\/images\/antbuildz-wordmark\.png'/);
  assert.match(source, /brandImage\.width = 1471/);
  assert.match(source, /brandImage\.height = 225/);
  assert.match(styles, /\.antbuildz-ai-wordmark__brand \{[\s\S]*?overflow: hidden/);
  assert.match(styles, /#root\.antbuildz-original-root \.antbuildz-ai-wordmark__brand-image \{[\s\S]*?height: 1\.28em !important/);
  assert.match(styles, /\.antbuildz-ai-wordmark__ai \{[\s\S]*?color: var\(--yellow\)/);
  assert.match(source, /AI Agent Console/);
  assert.match(source, /AI Webstore Suite/);
  assert.match(source, /function createHomeHeroConversation/);
  assert.match(source, /const HOME_HERO_CONVERSATION/);
  assert.match(source, /message\.classList\.toggle\('is-visible', index <= currentStep\)/);
  assert.match(source, /const fadeZone = Math\.min\(96, Math\.max\(68, transcriptBounds\.height \* \.24\)\)/);
  assert.match(source, /const fadeAnchor = bounds\.top \+ Math\.min\(104, bounds\.height \* \.4\)/);
  assert.match(source, /const distanceFromTop = fadeAnchor - fadeTop/);
  assert.match(source, /message\.style\.setProperty\('--home-chat-position-opacity', String\(opacity\)\)/);
  assert.match(source, /let followGrowthFrames = resetToTop \|\| reducedMotion\.matches \? 1 : 28/);
  assert.match(source, /transcript\.scrollTop = maxScroll/);
  assert.doesNotMatch(source, /is-fade-(?:top|near-top|near-bottom|bottom)/);
  assert.doesNotMatch(source, /transcript\.scrollTo\(/);
  assert.match(styles, /--home-chat-base-opacity: \.84/);
  assert.match(styles, /--home-chat-position-opacity/);
  assert.doesNotMatch(styles, /--home-chat-edge-opacity/);
  assert.doesNotMatch(source, /antbuildz-home-hero-conversation__status/);
  assert.match(source, /'\/develop-admin': '\/ai-agent-console'/);
  assert.match(source, /bindHeaderNavigation/);
  assert.doesNotMatch(source, /function createHomeActions/);
});

test('homepage inventory Agent card leads with product knowledge and the Emma tablet scene', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  assert.match(source, /function correctHomeInventoryAgentCard/);
  assert.match(source, /title: 'An AI Agent That Understands Your Inventory'/);
  assert.match(source, /With connected inventory data, it helps customers compare products, check availability and enquire to buy or rent/);
  assert.match(source, /eyebrow: null/);
  assert.match(source, /eyebrow\.hidden = !copy\.eyebrow/);
  assert.match(source, /button: 'Explore AI Agent'/);
  assert.match(source, /buttonHref: '\/ai-agent'/);
  assert.match(source, /badge: 'AI Agent'/);
  const inventoryDescription = source.match(/description: 'With connected inventory data, ([^']+)'/)?.[0] ?? '';
  assert.ok(inventoryDescription.replace(/^description: '/, '').replace(/'$/, '').trim().split(/\s+/).length <= 20);
  assert.match(source, /\/images\/emma-inventory-tablet-v1\.png/);
  assert.match(source, /Emma checking approved industrial product inventory on a tablet/);
  assert.match(source, /correctHomeInventoryAgentCard\(root, isHomepage\)/);
  assert.match(styles, /#root\.antbuildz-ai-home #meet-aria\.antbuildz-inventory-agent-card/);
  assert.match(styles, /#root\.antbuildz-ai-home #meet-aria\.antbuildz-inventory-agent-card \.aria-sales-agent-cta__panel \{\s*max-width: var\(--public-frame-max\);/);
  assert.match(styles, /#root\.antbuildz-ai-home #meet-aria\.antbuildz-inventory-agent-card h2 \{[\s\S]*?font-size: var\(--antbuildz-trial-section-title-size\) !important;[\s\S]*?font-weight: var\(--antbuildz-trial-section-title-weight\) !important;[\s\S]*?line-height: var\(--antbuildz-trial-section-title-line\) !important;/);
  assert.match(styles, /#root\.antbuildz-ai-home #meet-aria\.antbuildz-inventory-agent-card \.aria-sales-agent-cta__description \{[\s\S]*?font-size: clamp\(15px, 1\.05vw, 16px\) !important;[\s\S]*?line-height: 1\.55 !important;/);
  assert.doesNotMatch(styles, /@media \(max-width: 760px\) \{[\s\S]*?#root\.antbuildz-ai-home #meet-aria\.antbuildz-inventory-agent-card h2 \{\s*font-size: 24px !important;/);
  await access(new URL('../public/images/emma-inventory-tablet-v1.png', import.meta.url));
});

test('About presents the approved three pillars and two destination choices', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  assert.match(source, /function correctAboutEcosystem/);
  assert.match(source, /\['Agentic AI', 'Webstore Suite', 'Marketplace'\]/);
  assert.match(source, /Antbuildz brings Agentic AI, Webstore Suite, and Marketplace together/);
  assert.match(source, /setPricingText\(link\.querySelector\('span'\), 'Antbuildz AI Agent'\)/);
  assert.match(source, /ABOUT_AI_DESTINATION = 'https:\/\/antbuildz\.ai'/);
  assert.match(source, /ABOUT_MARKETPLACE_DESTINATION = 'https:\/\/antbuildz\.com'/);
  assert.match(source, /label === 'AI-Powered Webstore'[\s\S]*?link\.hidden = true;[\s\S]*?link\.setAttribute\('inert', ''\)/);
  assert.match(source, /correctFooter\(root\);\s*correctAboutEcosystem\(root\);/);
  assert.match(styles, /#root \.about-final-section \.about-final-action\[hidden\] \{ display: none !important; \}/);
});

test('AI Roles navigation exposes all five canonical role destinations', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  const parsed = ts.createSourceFile('navigation.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  assert.deepEqual(parsed.parseDiagnostics, []);
  const roleSource = await readFile(new URL('../lib/ai-roles.ts', import.meta.url), 'utf8');
  const roleParsed = ts.createSourceFile('roles.ts', roleSource, ts.ScriptTarget.Latest, true);
  const roles = roleParsed.statements.find((statement) => ts.isVariableStatement(statement)
    && statement.declarationList.declarations.some((declaration) => declaration.name.getText(roleParsed) === 'AI_ROLE_LINKS'));
  const code = ts.transpileModule(`${roles.getText(roleParsed).replace('export ', '')}\nJSON.stringify(AI_ROLE_LINKS);`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const links = JSON.parse(runInNewContext(code));
  assert.deepEqual(links.map((link) => link.label), [
    'Sales Specialist', 'Product Specialist', "Customer Service", 'Technical Support', "After-Sales Support",
  ]);
  assert.equal(new Set(links.map((link) => link.href)).size, 5);
  for (const link of links) {
    assert.ok(link.href.startsWith('/ai-roles/'));
    assert.ok(roleSource.includes(`slug: '${link.href.split('/').at(-1)}'`));
  }
  assert.match(source, /link\.setAttribute\('href', '\/resources'\)/);
  assert.match(source, /window\.location\.assign\(link\.href\)/);
  assert.match(source, /correctResourceRoles\(root\)/);
  assert.match(source, /correctAiRolesMenu\(root\)/);
  assert.match(source, /trigger\.setAttribute\('aria-controls', 'antbuildz-roles-dropdown'\)/);
  assert.match(source, /event\.key === 'Escape'/);
  assert.match(styles, /\.antbuildz-resource-role-links\[hidden\] \{ display: none; \}/);
});

test('homepage navigation bypasses the copied loader while preserving native alternate clicks', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('navigation.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  assert.deepEqual(parsed.parseDiagnostics, []);
  const helpers = parsed.statements.filter((statement) => ts.isFunctionDeclaration(statement)
    && ['navigateHomeFromLink', 'navigateHomeFromHistory'].includes(statement.name?.text));
  const code = ts.transpileModule(helpers.map((helper) => helper.getText(parsed)).join('\n'), {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  let destination;
  let reloads = 0;
  class FakeElement {
    closest() { return this.link; }
  }
  const context = {
    Element: FakeElement,
    URL,
    window: { location: {
      href: 'http://localhost:8081/pricing', origin: 'http://localhost:8081', pathname: '/pricing',
      assign: (href) => { destination = href; }, reload: () => { reloads += 1; },
    } },
  };
  runInNewContext(`${code}\nthis.homeClick = navigateHomeFromLink; this.homeBack = navigateHomeFromHistory;`, context);
  const makeEvent = (href = '/', overrides = {}, linkOverrides = {}) => {
    const target = new FakeElement();
    target.link = { href, target: '', hasAttribute: () => false, ...linkOverrides };
    return { button: 0, target, defaultPrevented: false,
      preventDefault() { this.defaultPrevented = true; }, stopImmediatePropagation() { this.stopped = true; },
      ...overrides };
  };
  const home = makeEvent();
  context.homeClick(home);
  assert.equal(destination, 'http://localhost:8081/');
  assert.equal(home.defaultPrevented, true);
  assert.equal(home.stopped, true);
  for (const event of [
    makeEvent('/', { ctrlKey: true }), makeEvent('/', { metaKey: true }), makeEvent('/', { shiftKey: true }),
    makeEvent('/', { altKey: true }), makeEvent('/', { button: 1 }), makeEvent('/', { defaultPrevented: true }),
    makeEvent('/', {}, { target: '_blank' }), makeEvent('/', {}, { hasAttribute: () => true }),
    makeEvent('/pricing'), makeEvent('/#section'), makeEvent('/?preview=1'), makeEvent('https://example.com/'),
  ]) {
    destination = undefined;
    context.homeClick(event);
    assert.equal(destination, undefined);
  }
  context.homeBack();
  assert.equal(reloads, 0);
  context.window.location.pathname = '/';
  context.homeBack();
  assert.equal(reloads, 1);
  assert.match(source, /document\.addEventListener\('click', navigateHomeFromLink, true\)/);
  assert.match(source, /document\.removeEventListener\('click', navigateHomeFromLink, true\)/);
});

test('public route loading uses the progressive Antbuildz AI wordmark', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  assert.match(source, /function correctRouteLoader\(root: HTMLElement\)/);
  assert.match(source, /loader\.textContent\?\.trim\(\) === 'Loading workspace…'/);
  assert.match(source, /loader\.setAttribute\('aria-label', 'Loading Antbuildz AI'\)/);
  assert.match(source, /baseWordmark\.classList\.add\('antbuildz-route-loader__wordmark', 'is-base'\)/);
  assert.match(source, /progressWordmark\.classList\.add\('antbuildz-route-loader__wordmark', 'is-progress'\)/);
  assert.match(source, /const observer = new MutationObserver\(\(\) => \{\s*\/\/[^]*correctRouteLoader\(root\);\s*scheduleCorrections\(\);/);
  assert.match(styles, /@keyframes antbuildz-route-logo-reveal/);
  assert.match(styles, /\.antbuildz-route-loader__progress\s*\{[^}]*animation: antbuildz-route-logo-reveal 1\.8s/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\) \{[^]*\.antbuildz-route-loader__progress\s*\{[^}]*width: 100%;[^}]*animation: none;/);
});

test('AI Agent and legacy links open the canonical page before the copied router handles the click', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('navigation.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  assert.deepEqual(parsed.parseDiagnostics, []);
  const handler = parsed.statements.find((statement) => ts.isFunctionDeclaration(statement)
    && statement.name?.text === 'navigateSalesAgentFromLink');
  const code = ts.transpileModule(handler.getText(parsed), {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  let destination;
  class FakeElement {
    closest(selector) { assert.equal(selector, '#root a[href]'); return this.link; }
  }
  const context = {
    Element: FakeElement, URL,
    window: { location: { href: 'http://localhost:8081/', origin: 'http://localhost:8081',
      assign: (href) => { destination = href; } } },
  };
  runInNewContext(`${code}\nthis.click = navigateSalesAgentFromLink;`, context);
  const makeEvent = (href, overrides = {}, linkOverrides = {}) => {
    const target = new FakeElement();
    target.link = { href, target: '', hasAttribute: () => false, ...linkOverrides };
    return { button: 0, target, defaultPrevented: false,
      preventDefault() { this.defaultPrevented = true; }, stopImmediatePropagation() { this.stopped = true; },
      ...overrides };
  };
  for (const href of ['/ai-agent', '/ai-sales-agent', '/aiagent']) {
    const event = makeEvent(href);
    context.click(event);
    assert.equal(destination, 'http://localhost:8081/ai-agent');
    assert.equal(event.defaultPrevented, true);
    assert.equal(event.stopped, true);
  }
  context.click(makeEvent('/aiagent?source=menu#features'));
  assert.equal(destination, 'http://localhost:8081/ai-agent?source=menu#features');
  destination = undefined;
  const keyboardEvent = makeEvent('/ai-agent', { key: 'Enter', button: undefined });
  context.click(keyboardEvent);
  assert.equal(destination, 'http://localhost:8081/ai-agent');
  assert.equal(keyboardEvent.defaultPrevented, true);
  assert.equal(keyboardEvent.stopped, true);
  for (const event of [
    makeEvent('/ai-sales-agent', { key: ' ', button: undefined }),
    makeEvent('/ai-sales-agent', { key: 'Enter', repeat: true, button: undefined }),
    makeEvent('/ai-sales-agent', { key: 'Enter', ctrlKey: true, button: undefined }),
    makeEvent('/ai-sales-agent', { ctrlKey: true }), makeEvent('/ai-sales-agent', { metaKey: true }),
    makeEvent('/ai-sales-agent', { shiftKey: true }), makeEvent('/ai-sales-agent', { altKey: true }),
    makeEvent('/ai-sales-agent', { button: 1 }), makeEvent('/ai-sales-agent', { defaultPrevented: true }),
    makeEvent('/ai-sales-agent', {}, { target: '_blank' }), makeEvent('/ai-sales-agent', {}, { hasAttribute: () => true }),
    makeEvent('/pricing'), makeEvent('/resources/ai-sales-agent-for-industrial-businesses'),
    makeEvent('http://localhost:8080/ai-sales-agent'), makeEvent('https://example.com/ai-sales-agent'),
    makeEvent('/ai-sales-agent', { target: null }),
  ]) {
    destination = undefined;
    context.click(event);
    assert.equal(destination, undefined);
  }
  assert.match(source, /document\.addEventListener\('click', navigateSalesAgentFromLink, true\)/);
  assert.match(source, /document\.removeEventListener\('click', navigateSalesAgentFromLink, true\)/);
  assert.match(source, /document\.addEventListener\('keydown', navigateSalesAgentFromLink, true\)/);
  assert.match(source, /document\.removeEventListener\('keydown', navigateSalesAgentFromLink, true\)/);
});

test('AI Webstore Suite links open the selected canonical page on the first click', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('navigation.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  assert.deepEqual(parsed.parseDiagnostics, []);
  const handler = parsed.statements.find((statement) => ts.isFunctionDeclaration(statement)
    && statement.name?.text === 'navigateWebstoreFromLink');
  const code = ts.transpileModule(handler.getText(parsed), {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  let destination;
  class FakeElement {
    closest(selector) { assert.equal(selector, '#root a[href]'); return this.link; }
  }
  const context = {
    Element: FakeElement, URL,
    window: { location: { href: 'http://localhost:8081/', origin: 'http://localhost:8081',
      assign: (href) => { destination = href; } } },
  };
  runInNewContext(`${code}\nthis.click = navigateWebstoreFromLink;`, context);
  const makeEvent = (href, overrides = {}, linkOverrides = {}) => {
    const target = new FakeElement();
    target.link = { href, target: '', hasAttribute: () => false, ...linkOverrides };
    return { button: 0, target, defaultPrevented: false,
      preventDefault() { this.defaultPrevented = true; }, stopImmediatePropagation() { this.stopped = true; },
      ...overrides };
  };
  for (const href of ['/ai-webstore-suite', '/webstore', '/webstore-2']) {
    const event = makeEvent(href);
    context.click(event);
    assert.equal(destination, 'http://localhost:8081/ai-webstore-suite');
    assert.equal(event.defaultPrevented, true);
    assert.equal(event.stopped, true);
  }
  context.click(makeEvent('/webstore?source=header#workflow'));
  assert.equal(destination, 'http://localhost:8081/ai-webstore-suite?source=header#workflow');
  destination = undefined;
  const keyboardEvent = makeEvent('/ai-webstore-suite', { key: 'Enter', button: undefined });
  context.click(keyboardEvent);
  assert.equal(destination, 'http://localhost:8081/ai-webstore-suite');
  assert.equal(keyboardEvent.defaultPrevented, true);
  assert.equal(keyboardEvent.stopped, true);
  for (const event of [
    makeEvent('/ai-webstore-suite', { key: ' ', button: undefined }),
    makeEvent('/ai-webstore-suite', { key: 'Enter', repeat: true, button: undefined }),
    makeEvent('/ai-webstore-suite', { key: 'Enter', ctrlKey: true, button: undefined }),
    makeEvent('/ai-webstore-suite', { ctrlKey: true }), makeEvent('/ai-webstore-suite', { metaKey: true }),
    makeEvent('/ai-webstore-suite', { shiftKey: true }), makeEvent('/ai-webstore-suite', { altKey: true }),
    makeEvent('/ai-webstore-suite', { button: 1 }), makeEvent('/ai-webstore-suite', { defaultPrevented: true }),
    makeEvent('/ai-webstore-suite', {}, { target: '_blank' }), makeEvent('/ai-webstore-suite', {}, { hasAttribute: () => true }),
    makeEvent('/pricing'), makeEvent('/resources'), makeEvent('http://localhost:8080/ai-webstore-suite'),
    makeEvent('https://example.com/ai-webstore-suite'), makeEvent('/ai-webstore-suite', { target: null }),
  ]) {
    destination = undefined;
    context.click(event);
    assert.equal(destination, undefined);
  }
  assert.match(source, /document\.addEventListener\('click', navigateWebstoreFromLink, true\)/);
  assert.match(source, /document\.removeEventListener\('click', navigateWebstoreFromLink, true\)/);
  assert.match(source, /document\.addEventListener\('keydown', navigateWebstoreFromLink, true\)/);
  assert.match(source, /document\.removeEventListener\('keydown', navigateWebstoreFromLink, true\)/);
});

test('public hamburger includes the Console link and retains the account shell', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('drawer.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const statements = parsed.statements.filter(statement =>
    ts.isFunctionDeclaration(statement) && statement.name?.text === 'correctPublicDrawer'
    || ts.isVariableStatement(statement) && statement.declarationList.declarations.some(item => item.name.getText(parsed) === 'DRAWER_LINKS'));
  const code = ts.transpileModule(statements.map(statement => statement.getText(parsed)).join('\n'), {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const createdTags = [];
  const node = tag => {
    const classes = new Set();
    return {
      tag, children: [], attributes: {},
      classList: { add: value => classes.add(value), toggle(value, on) { if (on) classes.add(value); else classes.delete(value); } },
      set href(value) { this.attributes.href = value; },
      get href() { return this.attributes.href; },
      setAttribute(name, value) { this.attributes[name] = value; },
      getAttribute(name) { return this.attributes[name] ?? null; },
      removeAttribute(name) { delete this.attributes[name]; },
      appendChild(child) { this.children.push(child); },
      querySelector() { return this.children.find(child => child.className === 'antbuildz-simple-menu-links') ?? null; },
      querySelectorAll() { return this.children.filter(child => child.tag === 'a'); },
    };
  };
  let navigation = node('nav');
  const originalGroups = [node('section'), node('section'), node('section')];
  originalGroups.forEach(group => navigation.appendChild(group));
  const window = { location: { pathname: '/pricing' } };
  const document = {
    querySelectorAll(selector) { assert.equal(selector, 'nav[aria-label="Public Antbuildz navigation"]'); return [navigation]; },
    createElement(tag) { createdTags.push(tag); return node(tag); },
  };
  const correct = runInNewContext(`${code}\ncorrectPublicDrawer`, { document, window });
  correct(); correct();
  assert.equal(navigation.children.length, 4, 'original React groups stay mounted and only one flat list is appended');
  assert.ok(originalGroups.every(group => group.attributes.hidden === ''));
  const list = navigation.children[3];
  assert.deepEqual(list.children.map(link => [link.textContent, link.href]), [
    ["AI Agent", '/ai-agent'], ['AI Webstore Suite', '/ai-webstore-suite'],
    ['Conversation Features', '/conversational-experience'],
    ['AI Agent Console', '/ai-agent-console'],
    ['Pricing', '/pricing'],
    ['Industries', '/who-we-serve'],
    ['Resources', '/resources'], ['About Us', '/about'],
  ]);
  assert.equal(list.children[4].attributes['aria-current'], 'page');
  window.location.pathname = '/resources/ai-sales-agent-for-industrial-businesses';
  correct();
  assert.equal(list.children[4].attributes['aria-current'], undefined);
  assert.equal(list.children[6].attributes['aria-current'], 'location');
  assert.deepEqual([...new Set(createdTags)], ['div', 'a'], 'no collapse controls or extra account controls are introduced');
  navigation = node('nav');
  correct();
  assert.equal(navigation.children[0].children.length, 8, 'reopening a remounted drawer rebuilds the same list');
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(css, /\.antbuildz-flat-navigation > \[hidden\]\s*\{ display: none !important;/);
});

test('Resources dropdown keeps educational collections and moves Roles to the primary navigation', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('navigation.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  assert.deepEqual(parsed.parseDiagnostics, []);
  const declaration = parsed.statements.find((statement) => ts.isVariableStatement(statement)
    && statement.declarationList.declarations.some((item) => item.name.getText(parsed) === 'RESOURCE_TOPICS'));
  const groupsDeclaration = parsed.statements.find((statement) => ts.isVariableStatement(statement)
    && statement.declarationList.declarations.some((item) => item.name.getText(parsed) === 'RESOURCE_MENU_GROUPS'));
  const code = ts.transpileModule(`${declaration.getText(parsed)}\n${groupsDeclaration.getText(parsed)}\nJSON.stringify({ topics: RESOURCE_TOPICS, groups: RESOURCE_MENU_GROUPS });`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const categories = {};
  runInNewContext(ts.transpileModule(await readFile(new URL('../lib/resource-tutorial-categories.ts', import.meta.url), 'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,{exports:categories});
  const { topics, groups } = JSON.parse(runInNewContext(code,{...categories}));
  assert.equal(topics.length, 6);
  assert.equal(new Set(topics.map((topic) => topic.id)).size, 6);
  const bundle = await readFile(new URL('../public/assets/index-i9-KQg8N.js', import.meta.url), 'utf8');
  for (const topic of topics) assert.ok(bundle.includes(topic.label));
  assert.deepEqual(groups.flatMap(group=>group.topics).filter(topic=>!topic.href).map(topic=>topic.id), topics.slice(1).map(topic=>topic.id));
  assert.deepEqual(groups.flatMap(group=>group.topics).filter(topic=>topic.href).map(topic=>topic.href), JSON.parse(JSON.stringify(categories.RESOURCE_TUTORIAL_CATEGORIES.map(category=>category.href))));
  assert.deepEqual(groups.map(group=>group.label), ['Understand the products','Get started','Use & improve']);
  assert.deepEqual(groups.map(group=>group.topics.length), [3,3,3]);
  assert.deepEqual(groups.map(group=>group.topics.map(topic=>topic.id)), [
    ['understand-ai-agent','ai-agent-webstore','why-antbuildz-ai'],
    ['getting-ready','subscription','agent-setup'],
    ['products-webstore','ai-console-features','usage-troubleshooting'],
  ]);
  assert.match(source, /correctResourcesMenu\(root\)/);
  assert.match(source, /correctPublicDrawer\(\)/);
  assert.match(source, /document\.removeEventListener\('pointerdown', dismissHeaderDropdowns\)/);
  assert.match(source, /panel.className = 'antbuildz-industries-menu__panel antbuildz-resources-menu__panel'/);
  assert.doesNotMatch(styles, /\.antbuildz-resources-menu__panel\s*\{/,
    'Resources inherits the Industries panel geometry instead of a compact variant');
  assert.match(styles, /\.antbuildz-industries-menu__panel \{[\s\S]*?background: color-mix\(in srgb, var\(--canvas\) 96%, transparent\);/,
    'both desktop dropdowns use the quieter, less transparent shared canvas surface');
  assert.match(styles, /\.antbuildz-resources-menu__link\[aria-current\]/);
});

test('shared header disclosures support keyboard toggling, exclusivity and Escape focus return', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('navigation.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const declaration = parsed.statements.find((statement) => ts.isFunctionDeclaration(statement)
    && statement.name?.text === 'bindHeaderDropdown');
  const code = ts.transpileModule(`${declaration.getText(parsed)}\nbindHeaderDropdown;`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const bind = runInNewContext(code);
  const menus = [];
  const createMenu = () => {
    const handlers = {};
    const attributes = {};
    const trigger = { focused: false, setAttribute: (name, value) => { attributes[name] = value; }, focus() { this.focused = true; } };
    const menu = { open: false, parentElement: { querySelectorAll: () => menus.filter((item) => item.open) }, addEventListener: (type, handler) => { handlers[type] = handler; } };
    menus.push(menu);
    bind(menu, trigger);
    const key = (value, repeat = false, target = trigger) => {
      let prevented = false;
      handlers.keydown({ key: value, repeat, target, preventDefault() { prevented = true; } });
      handlers.toggle();
      return prevented;
    };
    return { menu, trigger, attributes, key };
  };
  const industries = createMenu();
  const resources = createMenu();
  assert.equal(industries.key('Enter'), true);
  assert.equal(industries.menu.open, true);
  assert.equal(industries.attributes['aria-expanded'], 'true');
  industries.key('Enter', true);
  assert.equal(industries.menu.open, true);
  resources.key(' ');
  assert.equal(resources.menu.open, true);
  assert.equal(industries.menu.open, false);
  assert.equal(resources.key('Enter', false, {}), false);
  assert.equal(resources.menu.open, true);
  resources.key('Escape', false, {});
  assert.equal(resources.menu.open, false);
  assert.equal(resources.attributes['aria-expanded'], 'false');
  assert.equal(resources.trigger.focused, true);
});

test('pricing presents Agent, Sales and Rental+ as one clear upgrade path', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);

  assert.match(source, /function correctPricing/);
  for (const plan of ['Agent', 'Sales', 'Rental\\+', 'Custom']) {
    assert.match(source, new RegExp(`name: '${plan}'`));
  }
  assert.match(source, /monthlyUsd: 49/);
  assert.match(source, /monthlyUsd: 149/);
  assert.match(source, /monthlyUsd: 299/);
  assert.match(source, /monthlyUsd: null/);
  for (const inclusion of [
    '50 / month',
    '75 / month',
    '100 / month',
    '100 \\(Sales\\)',
    '300 \\(Sales \\+ Rental\\)',
    'Everything in Agent, plus:',
    'Free Custom Domain Setup',
    'SEO \\+ AI Search Pages',
    'Multilingual Store',
    'Third-Party Sync',
    'ERP, CRM and third-party integrations',
    'specialised deployments',
    'Most Popular',
    'Best Value',
  ]) {
    assert.match(source, new RegExp(inclusion));
  }
  assert.match(source, /ANNUAL_PRICING_DISCOUNT = 0\.2/);
  assert.match(source, /formatUsdAmount/);
  assert.match(source, /function getAnnualMonthlyUsd\(monthlyUsd: number\) \{[\s\S]*?return Math\.floor\(monthlyUsd \* \(1 - ANNUAL_PRICING_DISCOUNT\)\);\s*\}/);
  assert.match(source, /const annualTotal = monthlyEquivalent \* 12/);
  assert.match(source, /billed annually · Save 20%/);
  assert.match(source, /pricingBillingBindings/);
  assert.match(source, /featureLabel: 'Includes:'/);
  assert.match(source, /pricingControls\.hidden = false/);
  assert.match(source, /pricingControls\.dataset\.antbuildzBilling/);
  assert.match(source, /Deploy Your /);
  assert.match(source, /AI Agent/);
  assert.match(source, /Across Your Customer Channels\./);
  assert.match(source, /One business conversation may turn into thousands in revenue\./);
  assert.match(source, /duplicateSectionHeader\.hidden = true/);
  assert.match(source, /duplicateSectionHeader\.setAttribute\('aria-hidden', 'true'\)/);
  assert.match(source, /Conversation credits/);
  assert.match(source, /One AI conversation covers one buyer enquiry with up to five message exchanges/);
  assert.match(source, /Test prompts and unrelated interactions do not count/);
  assert.match(source, /AI Conversation Credits/);
  assert.match(source, /Add credits when you need more conversations/);
  assert.match(source, /Choose a credit pack or use Auto Top-Up/);
  assert.match(source, /Purchased credits do not expire/);
  assert.match(source, /setPricingText\(headings\[1\], 'Price'\)/);
  assert.match(source, /\$\{pack\.sessions\} credits/);
  assert.match(source, /US\$\$\{formatUsdAmount\(pack\.usd\)\}/);
  assert.doesNotMatch(source, /Price per credit|¢\/credit/);
  assert.doesNotMatch(source, /Buyer Enquiry Credits/);
  assert.doesNotMatch(source, /Buy more AI Enquiry Sessions upfront and save on each session/);
  assert.match(source, /listings: '100 \(Sales\)'/);
  assert.match(source, /listings: '300 \(Sales \+ Rental\)'/);
  assert.doesNotMatch(source, /Pay-As-You-Go|PAYG enabled|Extra conversations|extraConversations/);
  assert.match(source, /dataset\.antbuildzPricingPositioning/);
  assert.match(source, /no-feature-intro/);
  assert.match(source, /querySelector\('\.antbuildz-pricing-feature-intro'\)\?\.remove\(\)/);
  assert.match(source, /Best for:/);
  assert.match(source, /setPricingText\(bottomDemoCta, 'Book a Demo'\)/);
  assert.match(source, /setPricingText\(bottomEmailCta, 'Email Sales'\)/);
  assert.match(source, /root\.querySelector\('\.pricing-trust-grid'\)\?\.remove\(\)/);
  assert.match(source, /root\.querySelector\('\.pricing-enterprise-note'\)\?\.remove\(\)/);
  assert.match(source, /legacyBlock\.hidden = true/);
  assert.match(source, /PRICING_COMPARISON_ROWS\.forEach/);
  assert.match(source, /rowIndex === 8 \|\| rowIndex === 20/);
  assert.match(source, /setPricingText\(comparisonLabel, 'Plan Comparison'\)/);
  assert.match(source, /highlightedWord\.textContent = 'Features'/);
  assert.match(source, /document\.createTextNode\(' Side by Side'\)/);
  assert.match(source, /One AI Agent across every plan; Sales adds an AI Sales Webstore, while Rental\+ adds rental, booking and combined inventory capabilities\./);
  assert.match(source, /scroll\.setAttribute\('aria-labelledby', 'antbuildz-plan-comparison-title'\)/);
  assert.doesNotMatch(source, /title\.textContent = 'Agent, Sales and Rental\+'/);
  assert.doesNotMatch(source, /subtitle\.textContent = 'One AI Agent across every plan/);
  assert.match(source, /block\.dataset\.antbuildzUnifiedComparison = 'true'/);
  assert.match(styles, /\.antbuildz-ai-pricing #ai-webstore-suite,/);
  assert.match(styles, /\.antbuildz-ai-pricing \.pricing-hero \{\s*max-width: min\(1180px, 90vw\)/);
  assert.match(styles, /#ai-webstore-suite \+ \.pricing-section-divider/);
  assert.match(styles, /\.antbuildz-ai-pricing \.pricing-feature-row\[hidden\]/);
  assert.match(styles, /\.antbuildz-ai-pricing \.pricing-controls-row \{[\s\S]*?width: min\(100%, 1152px\);[\s\S]*?margin: -10px auto 34px 0;/,
    'the billing toggle follows the pricing-title centre instead of the wider plan-grid centre');
  assert.match(styles, /\.antbuildz-ai-pricing \.pricing-billing-btn\.is-active \{[\s\S]*?background: color-mix\(in srgb, var\(--blue\) 76%, var\(--ink\)\);[\s\S]*?color: var\(--clean\);/,
    'the selected billing period uses the Antbuildz blue treatment instead of black');
  assert.match(styles, /\.antbuildz-ai-pricing \.pricing-billing-save,[\s\S]*?border-radius: 0;[\s\S]*?background: transparent;/,
    'the annual saving is supporting text rather than a yellow badge');
  assert.match(styles, /\.pricing-billing-btn\.is-active \.pricing-billing-save \{[\s\S]*?background: transparent;[\s\S]*?color: rgb\(255 255 255 \/ 78%\);/,
    'the saving remains subordinate and readable in the selected annual state');
  assert.match(styles, /\.pricing-currency-select-wrap/);
  assert.match(styles, /\.antbuildz-ai-pricing \.antbuildz-pricing-badge/);
  assert.match(styles, /\.antbuildz-ai-pricing \.antbuildz-pricing-details/);
  assert.match(styles, /\.pricing-section:has\(\.pricing-addons-grid\) \{[\s\S]*?width: var\(--public-frame-width\);[\s\S]*?margin-left: 50%;[\s\S]*?transform: translateX\(-50%\);/);
  assert.match(styles, /\.antbuildz-ai-pricing \.pricing-bottom-cta \{[\s\S]*?border-radius: 24px;[\s\S]*?linear-gradient\(135deg, var\(--clean\), var\(--soft\)\);[\s\S]*?color: var\(--ink\)/);
  assert.match(styles, /#root\.antbuildz-original-root\.antbuildz-ai-pricing \.pricing-section:has\(\.pricing-bottom-cta\) \{\s*margin-bottom: 0;\s*padding-bottom: 0 !important;/);
  assert.match(styles, /\.pricing-bottom-cta :is\(\.pricing-cta-white, \.pricing-cta-outline-white\) \{[\s\S]*?min-height: 54px;[\s\S]*?border-radius: 999px/);
  assert.match(styles, /body:has\(#root\.antbuildz-original-root\.antbuildz-ai-pricing\)/);
  assert.match(styles, /#root\.antbuildz-original-root\.antbuildz-ai-pricing \.pricing-section \{\s*background-color: var\(--clean\) !important;\s*background-image: none !important;/);
});

test('pricing cards use a wider standard-plan row and responsive Custom panel', async () => {
  const [styles, source] = await Promise.all([
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
  ]);
  const layout = styles.slice(styles.indexOf('/* Roomier subscription comparison:'), styles.indexOf('/* Antbuildz.AI compatibility layer'));
  assert.match(layout, /width: var\(--public-frame-width\)/);
  assert.match(layout, /grid-template-columns: repeat\(3, minmax\(0, 1fr\)\)/);
  assert.match(layout, /@media \(min-width: 768px\)/);
  assert.match(layout, /\[data-antbuildz-plan="custom"\][^{]*\{\s*grid-column: 1 \/ -1/);
  assert.match(layout, /\[data-antbuildz-plan="custom"\]\.antbuildz-pricing-custom-compact \{[\s\S]*?text-align: left;/,
    'Custom label, title and supporting copy share a left reading edge');
  assert.match(layout, /@media \(min-width: 768px\) and \(max-width: 1099px\)/);
  assert.match(layout, /grid-template-columns: repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(layout, /@media \(max-width: 767px\)/);
  assert.match(layout, /grid-template-columns: minmax\(0, 1fr\)/);
  assert.match(layout, /\.pricing-feature-row \{\s*margin: 0/);
  assert.match(layout, /\.pricing-target \{\s*display: grid;\s*min-height: 92px/);
  assert.match(layout, /:not\(\[data-antbuildz-plan="custom"\]\) \.pricing-target \{\s*min-height: 92px/);
  assert.match(layout, /\.pricing-plan-name \{\s*font-size: 1\.5rem;[\s\S]*?font-weight: 750;/,
    'plan titles use the stronger Square-inspired hierarchy');
  assert.match(layout, /:not\(\[data-antbuildz-plan="custom"\]\) \{[\s\S]*?text-align: left;/,
    'standard pricing cards use a left-led reading hierarchy');
  assert.match(layout, /:not\(\[data-antbuildz-plan="custom"\]\) \.pricing-plan-name \{[\s\S]*?text-align: left;/,
    'standard plan names align left');
  assert.match(layout, /:not\(\[data-antbuildz-plan="custom"\]\) \.antbuildz-pricing-badge \{[\s\S]*?position: absolute;[\s\S]*?top: 24px;[\s\S]*?right: 24px;/,
    'standard-plan badges sit beside the plan title');
  assert.match(layout, /:not\(\[data-antbuildz-plan="custom"\]\) \.pricing-target \{[\s\S]*?padding-bottom: 20px;[\s\S]*?border-bottom: 1px solid var\(--line\);/,
    'the suitability statement is separated from the price by a quiet rule');
  assert.match(layout, /:not\(\[data-antbuildz-plan="custom"\]\) \.pricing-target \{[\s\S]*?text-align: left;/,
    'standard plan descriptions align left');
  assert.match(layout, /\.pricing-addon-card \{\s*text-align: left;/,
    'credit and additional-agent cards align their content left');
  assert.match(layout, /\.antbuildz-pricing-best-for \{[\s\S]*?width: 100%;[\s\S]*?max-width: none;[\s\S]*?text-wrap: wrap/);
  assert.doesNotMatch(layout, /\.pricing-card\[data-antbuildz-plan\]:not\(\[data-antbuildz-plan="custom"\]\) \.pricing-target \{\s*text-wrap: balance/);
  assert.doesNotMatch(layout, /\.antbuildz-pricing-feature-intro \{/);
  assert.match(layout, /@media \(min-width: 768px\) and \(max-width: 899px\) \{[\s\S]*?\.pricing-target \{ min-height: 108px; \}[\s\S]*?\.antbuildz-pricing-details \{ min-height: 140px; \}/,
    'compact tablet cards reserve the measured target and allowance rows');
  assert.match(layout, /@media \(min-width: 900px\) and \(max-width: 1099px\) \{[\s\S]*?\.pricing-target \{ min-height: 92px; \}/,
    'wide tablet cards align both two-card rows without truncating copy');
  assert.match(layout, /@media \(min-width: 1100px\) and \(max-width: 1239px\) \{[\s\S]*?\.pricing-target \{ min-height: 108px; \}[\s\S]*?\.antbuildz-pricing-details \{ min-height: 140px; \}/,
    'narrow three-card layouts share the same price and allowance rails');
  assert.match(layout, /@media \(max-width: 767px\) \{[\s\S]*?:not\(\[data-antbuildz-plan="custom"\]\) \.pricing-target,[\s\S]*?\.antbuildz-pricing-details \{ min-height: 0; \}/,
    'single-column mobile cards remain content-driven');
  assert.match(layout, /\.pricing-compare-td-feature \{[\s\S]*?text-align: left/);
  assert.match(layout, /\.pricing-compare-row\.is-tier-start > \*/);
  assert.match(layout, /#compare-features-ai-agent\[data-antbuildz-unified-comparison="true"\] \{\s*width: var\(--public-frame-width\);\s*max-width: 100%;\s*margin-inline: auto;/,
    'plan comparison table follows the shared pricing content rail');
  assert.match(layout, /\.pricing-faq-trigger > span:first-child,\s*\.antbuildz-ai-pricing \.pricing-faq-answer p \{\s*text-align: left;/,
    'pricing FAQ questions and answers align left');
  assert.match(layout, /\.pricing-price-row \{\s*min-height: 52px;\s*margin-top: 12px/);
  assert.match(layout, /\.antbuildz-pricing-details \{\s*grid-template-columns: minmax\(0, 1fr\);\s*min-height: 140px/);
  assert.match(layout, /\.antbuildz-pricing-details-heading \{[\s\S]*?font-size: \.9375rem;[\s\S]*?font-weight: 700/);
  assert.match(layout, /\.antbuildz-pricing-details-heading \{[\s\S]*?text-align: left/);
  assert.match(layout, /\.antbuildz-pricing-details > \[data-antbuildz-pricing-detail\] \{[\s\S]*?grid-template-columns: minmax\(0, 1fr\) auto;[\s\S]*?border-top: 1px solid var\(--line\)/);
  assert.match(layout, /\[data-antbuildz-pricing-detail\] > span \{\s*text-align: left;/);
  assert.match(layout, /:not\(\[data-antbuildz-plan="custom"\]\) \.antbuildz-pricing-details strong \{\s*font-size: 1rem;\s*font-weight: 400;/,
    'standard-plan allowance values are larger than their labels without bold emphasis or enlarged Custom text');
  assert.match(layout, /\.pricing-feature-group-label \{[\s\S]*?font-size: \.9375rem;[\s\S]*?font-weight: 750;/,
    'feature-group labels use a readable supporting scale');
  assert.match(layout, /\.pricing-features \{\s*gap: 10px;\s*margin-block: 10px 0/);
  assert.match(layout, /\.pricing-feature-row \{\s*margin: 0;\s*font-size: 1rem;\s*line-height: 1\.45;/,
    'summary features use the larger 16px decision-copy scale');
  assert.match(layout, /min-height: 54px/);
  assert.match(source, /setPricingText\(detailsHeading, 'Plan allowances'\)/);
});

test('pricing has one compact gap before add-ons and hides only the Agent comparison shortcut', async () => {
  const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  const section = styles.match(/\.antbuildz-ai-pricing \.pricing-section:has\(\.pricing-card\[data-antbuildz-plan\]\) \{([^}]+)\}/)[1];
  assert.match(section, /padding-bottom: 0/);
  assert.match(section, /margin-bottom: 64px/);
  assert.match(styles, /@media \(max-width: 767px\) \{[\s\S]*?\.antbuildz-ai-pricing \.pricing-section:has\(\.pricing-card\[data-antbuildz-plan\]\) \{\s*margin-bottom: 48px/);
  assert.match(styles, /\.antbuildz-ai-pricing \.pricing-compare-link-row:has\(> a\[href="#compare-features-ai-agent"\]\) \{\s*display: none/);
  assert.doesNotMatch(styles, /\.antbuildz-ai-pricing #compare-features-ai-agent\s*\{\s*display: none/);
});

test('approved pricing content applies the September plan prices, allowances and capabilities', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('pricing.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  assert.deepEqual(parsed.parseDiagnostics, [], 'the pricing compatibility layer must remain valid TSX');

  // Execute only the local, pure content declarations, never the app or DOM code.
  const names = ['AGENT_PRICING_PLANS', 'ANNUAL_PRICING_DISCOUNT', 'PURCHASED_CREDIT_PACKS', 'PRICING_USAGE_COPY', 'PRICING_FAQS', 'PRICING_COMPARISON_ROWS'];
  const statements = parsed.statements.filter((statement) => ts.isVariableStatement(statement)
    && statement.declarationList.declarations.some((declaration) => names.includes(declaration.name.getText(parsed))));
  assert.equal(statements.length, names.length);
  const code = statements.map((statement) => statement.getText(parsed)).join('\n');
  const compiled = ts.transpileModule(`${code}\nJSON.stringify({${names.join(',')}});`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const data = JSON.parse(runInNewContext(compiled));
  const plans = data.AGENT_PRICING_PLANS;
  assert.deepEqual(plans.map((plan) => plan.name), ['Agent', 'Sales', 'Rental+', 'Custom']);
  assert.deepEqual(plans.map((plan) => plan.subtitle), [null, null, null, null]);
  assert.deepEqual(plans.slice(0, 3).map((plan) => plan.bestFor), [
    'Teams that want AI to answer enquiries, recommend products and support customers.',
    'Teams that want an AI-powered store for product discovery, enquiries and sales.',
    'Teams that need sales, rental, availability and bookings in one AI-powered store.',
  ]);
  assert.ok(plans.every((plan) => !Object.hasOwn(plan, 'description')));
  assert.deepEqual(plans.map((plan) => plan.monthlyUsd), [49, 149, 299, null]);
  assert.deepEqual(plans.map((plan) => plan.usage), [
    '50 / month', '75 / month', '100 / month', '',
  ]);
  assert.deepEqual(plans.map((plan) => plan.listings), [
    '—', '100 (Sales)', '300 (Sales + Rental)', '',
  ]);
  assert.deepEqual(plans.map((plan) => plan.cta), [
    'Start 14-Day Free Trial', 'Start 14-Day Free Trial', 'Start 14-Day Free Trial', 'Talk to Sales',
  ]);
  assert.deepEqual(plans.map((plan) => plan.trialPlan ?? null), ['agent', 'sales', 'rental-plus', null]);
  assert.match(source, /setPricingText\(trialNote, 'Credit card required'\)/);
  assert.match(source, /new URL\('\/signup', window.location.origin\)/);
  assert.match(source, /destination.searchParams.set\('plan', trialPlan\)/);
  assert.match(source, /destination.searchParams.set\('trial', '14-day'\)/);
  assert.deepEqual(plans.map((plan) => plan.features.length), [8, 7, 8, 0]);
  assert.deepEqual(plans.slice(0, 3).map((plan) => plan.features), [
    ['Dedicated AI Terminal', 'Website Chat Embed', 'Knowledge Base', 'Product Recommendations', 'Lead Capture & Monitoring', 'Multilingual AI', 'Agent Setup & Rules', 'Google Sheets + Excel'],
    ['Sales Webstore', '100 Sales Listings', 'Store Builder + Custom Domain', 'SEO + AI Search Pages', 'Multilingual Store', 'AI Product Links', 'Inventory Management + Sync'],
    ['Sales + Rental Webstore', '300 Sales + Rental Listings', 'Store Builder + Custom Domain', 'SEO + AI Search Pages', 'Multilingual Store', 'AI Product Links', 'Sales + Rental Inventory', 'Rental Booking System'],
  ]);
  assert.equal(data.ANNUAL_PRICING_DISCOUNT, 0.2);
  const annualMonthlyPrices = plans.slice(0, 3).map((plan) => Math.floor(plan.monthlyUsd * 0.8));
  assert.deepEqual(annualMonthlyPrices, [39, 119, 239]);
  assert.deepEqual(annualMonthlyPrices.map((price) => price * 12), [468, 1428, 2868]);
  assert.deepEqual(data.PURCHASED_CREDIT_PACKS, [
    { sessions: 25, usd: 25 }, { sessions: 50, usd: 42 },
    { sessions: 100, usd: 79 }, { sessions: 500, usd: 349 },
  ]);
  assert.ok(data.PURCHASED_CREDIT_PACKS.every((pack) => Number.isInteger(pack.usd)));
  assert.ok(plans[0].features.includes('Google Sheets + Excel'));
  assert.doesNotMatch(plans[0].features.join(' '), /Webstore|Dedicated Product Pages|Inventory/);
  assert.ok(plans[1].features.includes('Sales Webstore'));
  assert.ok(plans[1].features.includes('Multilingual Store'));
  assert.ok(plans[2].features.includes('Sales + Rental Webstore'));
  assert.equal(plans[3].customSummary, 'For higher conversation or listing volumes, specialised deployments, multiple Webstores, or ERP, CRM and third-party integrations, ask us about a custom plan.');
  assert.match(source, /simplifyCustomPricingCard\(card, plan\.customSummary\)/);
  assert.deepEqual(data.PRICING_COMPARISON_ROWS.map((row) => row.feature), [
    "AI Agent", 'Knowledge Base', 'Product Recommendations', 'Agent Instructions',
    'Lead Capture', 'Conversation Monitoring', 'Website Embed', 'Multilingual AI Conversations',
    'Sales Webstore', 'Store Builder', 'Sales Listings', 'Free Custom Domain Setup',
    'Dedicated Product Pages', 'Google & AI Search-Ready', 'Multilingual Webstore',
    'Direct Product Links', 'Sales Inventory', 'Inventory Sync', 'Catalogue Import',
    'Lead Intelligence', 'Sales + Rental Webstore', 'Sales + Rental Listings', 'Rental Bookings',
    'Availability & Pricing', 'Sales + Rental Inventory', 'Multiple Rental Units',
    'Advanced Inventory Sync', 'Third-Party Sync', 'Rental Catalogue Import', 'Workflow Automation',
  ]);
  assert.deepEqual(data.PRICING_COMPARISON_ROWS[8].included, [false, true, true]);
  assert.deepEqual(data.PRICING_COMPARISON_ROWS[20].included, [false, false, true]);
  assert.match(data.PRICING_USAGE_COPY.session, /up to five message exchanges/);
  assert.match(data.PRICING_USAGE_COPY.session, /Test prompts and unrelated interactions do not count/);
  assert.match(data.PRICING_USAGE_COPY.monthly, /never roll over—even on annual plans/);
  assert.match(data.PRICING_USAGE_COPY.purchased, /do not expire/);
  assert.doesNotMatch(data.PRICING_USAGE_COPY.purchased, /12 months from purchase/);
  assert.match(data.PRICING_USAGE_COPY.purchased, /AI Conversation Credits/);
  assert.match(data.PRICING_USAGE_COPY.purchased, /Auto Top-Up/);
  assert.match(data.PRICING_USAGE_COPY.purchased, /Choose a credit pack/);
  assert.match(data.PRICING_USAGE_COPY.purchased, /default threshold is five/);
  assert.doesNotMatch(data.PRICING_USAGE_COPY.purchased, /bulk/i);
  assert.match(data.PRICING_USAGE_COPY.order, /included monthly AI conversations first, then purchased AI Conversation Credits/);
  assert.doesNotMatch(JSON.stringify(data.PRICING_USAGE_COPY), /Pay-As-You-Go|PAYG/);
  assert.match(data.PRICING_USAGE_COPY.cancellation, /do not expire/);
  assert.equal(data.PRICING_FAQS.length, 6, 'reuse the six existing FAQ accordions');
  assert.match(source, /featureRows.length < plan.features.length/, 'render every approved feature');
  assert.match(source, /if \(plan\.subtitle\)/, 'render a product subtitle only when a plan defines one');
  assert.match(source, /block\.dataset\.antbuildzUnifiedComparison === 'true'/, 'comparison corrections must be idempotent');
});

test('legacy marketplace admin route redirects to the AI Agent Console', async () => {
  const source = await readFile(new URL('../app/[slug]/page.tsx', import.meta.url), 'utf8');
  assert.match(source, /app: '\/ai-agent-console'/);
  assert.match(source, /'develop-admin': '\/ai-agent-console'/);
  assert.match(source, /permanentRedirect\(redirectTargets\[slug\]\)/);
});

test('legacy AI Agent routes redirect directly to the canonical product URL', async () => {
  const source = await readFile(new URL('../app/[slug]/page.tsx', import.meta.url), 'utf8');
  assert.match(source, /'ai-sales-agent': '\/ai-agent'/);
  assert.match(source, /aiagent: '\/ai-agent'/);
  assert.match(source, /assistant: '\/ai-agent'/);
  assert.match(source, /'ai-agent': \['AI Agent for Complex Product Businesses'/);
  assert.doesNotMatch(source, /'ai-agent': '\/ai-sales-agent'/);
});

test('header Industries menu includes every Who We Serve destination', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const industries = [
    ['Rental & Leasing', 'rental-businesses'],
    ['Manufacturers & OEMs', 'manufacturers-brands'],
    ['Dealers & Distributors', 'dealers-distributors'],
    ['Industrial & MRO', 'industrial-mro'],
    ['Hardware & Trade', 'hardware-trade-supplies'],
    ['Building & Engineering', 'building-engineering'],
    ['Parts & Aftermarket', 'parts-aftermarket'],
    ['Buggies & Vehicles', 'buggies-commercial-vehicles'],
  ];

  assert.match(source, /createDesktopIndustriesMenu/);
  assert.doesNotMatch(source, /createMobileIndustriesMenu/);
  assert.doesNotMatch(source, /View AI products/);
  for (const [label, route] of industries) {
    assert.match(source, new RegExp(label.replace('&', '\\&')));
    assert.match(source, new RegExp(`/${route}`));
  }
});

test('header places Pricing before Industries and shares navigation typography', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  assert.match(source, /pricingLink\.nextElementSibling !== industriesMenu/);
  assert.match(source, /insertBefore\(industriesMenu, pricingLink\.nextSibling\)/);
  assert.doesNotMatch(source, /Webstore 2|WEBSTORE_TWO_PREVIEW_PATH|webstore-2-ai-webstore-preview/);
  assert.match(source, /querySelectorAll\('\.antbuildz-header-webstore-two'\)\.forEach\(link => link\.remove\(\)\)/);
  assert.match(styles, /--header-nav-font-size: 14px/);
  assert.match(styles, /--header-nav-font-size: 13px/);
  assert.match(styles, /--header-nav-font-weight: 600/);
  assert.match(styles, /\.bright-nav-product-link,\s*\.antbuildz-industries-menu__trigger,\s*\.bright-nav-sign-in/);
  assert.match(styles, /\.antbuildz-footer-language \.antbuildz-language-trigger\s*\{[^}]*font-size: 13px;[^}]*line-height: 1;/);
  assert.doesNotMatch(source, /languageUtilities\.nextElementSibling !== signIn/);
  assert.match(styles, /font-size: var\(--header-nav-font-size\)/);
  assert.match(styles, /\.antbuildz-industries-menu__trigger \{\s*display: flex;\s*height: 44px;/);
  assert.match(styles, /\.antbuildz-public-header :is\(\.bright-nav-product-link, \.antbuildz-industries-menu__trigger\)::before \{[^}]*height: 3px;[^}]*background: var\(--yellow\)/);
  assert.match(source, /\['AI Sales Agent', 'AI Webstore Suite', 'Pricing'\]\.includes\(label \?\? ''\)/);
  assert.match(source, /link\.getAttribute\('href'\) === window\.location\.pathname\) link\.setAttribute\('aria-current', 'page'\)/);
  assert.match(styles, /\.antbuildz-industries-menu:has\(a\[aria-current\]\) > \.antbuildz-industries-menu__trigger::before/);
  assert.match(styles, /\.bright-nav-product-link\[aria-current\]\[hidden\] \+ \.antbuildz-resources-menu > \.antbuildz-industries-menu__trigger::before/);
  assert.match(styles, /\.antbuildz-resources-menu\[open\] > \.antbuildz-industries-menu__trigger::before/);
  assert.match(styles, /#root\.antbuildz-original-root \.antbuildz-public-header :is\([^}]*\.bright-nav-product-link,[^}]*\.antbuildz-industries-menu__trigger[^}]*\):focus-visible \{\s*outline: none;/);
  assert.doesNotMatch(styles, /\.bright-nav-product-link\[aria-current\] \{\s*text-decoration: underline/);
});

test('wide public header aligns to homepage section two', async () => {
  const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(styles, /--public-frame-max: 1250px;/);
  assert.match(styles, /--public-frame-width: min\(var\(--public-frame-max\), 90vw\);/);
  assert.match(
    styles,
    /@media \(min-width: 1400px\)[\s\S]*?\.antbuildz-public-header \.bright-nav\s*\{[^}]*padding-inline:\s*var\(--public-frame-gutter\);/,
  );
});

test('public marketing heroes extend behind the header with approved route exceptions', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  assert.match(source, /function correctPublicHeroHeader\(root: HTMLElement\)/);
  assert.match(source, /const usesExistingOverlay = path === '\/' \|\| path === '\/ai-webstore-suite'/);
  assert.doesNotMatch(source, /preservesHeaderGap|path === '\/ai-agent'/,
    'AI Sales Agent follows the shared transparent-top header behaviour');
  assert.match(source, /if \(!header \|\| usesExistingOverlay\)/);
  assert.match(source, /':scope > \.bright-hero, :scope > section\[class~="bg-hero"\]'/);
  assert.match(source, /spacer\.className = 'antbuildz-public-hero-spacer'/);
  assert.match(source, /root\.style\.setProperty\('--public-header-height'/);
  assert.match(source, /header\.classList\.toggle\('is-scrolled', window\.scrollY > 24\)/);
  assert.match(source, /correctHeaderLayout\(root\);\s*correctAiRolesMenu\(root\);\s*correctPublicHeroHeader\(root\);/);
  assert.match(styles, /\.antbuildz-public-header\.is-public-hero-overlay:not\(\.is-scrolled\) \.bright-nav \{[^}]*background: transparent !important;/);
  assert.match(styles, /\.antbuildz-public-header\.is-public-hero-overlay\.is-scrolled \.bright-nav \{[^}]*backdrop-filter: blur\(18px\) saturate\(1\.5\) !important;/);
  assert.match(styles, /\.antbuildz-public-header\.is-public-hero-overlay \{[^}]*position: fixed !important;[^}]*width: 100%;[^}]*background: transparent !important;/);
  assert.match(styles, /\.antbuildz-public-hero-spacer \{[^}]*height: var\(--public-header-height, 81px\)/);
  assert.match(styles, /--public-hero-title-gap: 96px/);
  assert.match(styles, /@media \(max-width: 1179px\) \{\s*:root \{ --public-hero-title-gap: 80px; \}/);
  assert.match(styles, /@media \(max-width: 767px\) \{\s*:root \{ --public-hero-title-gap: 64px; \}/);
  assert.match(styles, /\.antbuildz-ai-pricing \.pricing-container,[\s\S]*?\.bright-resource-hero,[\s\S]*?\.legal-policies-home__hero,[\s\S]*?\.si-hero--detail \{\s*padding-top: var\(--public-hero-title-gap\)/);
  assert.match(styles, /\.help-centre-hero \{\s*padding-top: calc\(var\(--public-hero-title-gap\) - 24px\)/);
  assert.match(styles, /\.about-hero \{\s*padding-top: calc\(var\(--public-hero-title-gap\) - 18px\)/);
});

test('public hamburger is reserved for compact and mobile navigation', async () => {
  const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(
    styles,
    /@media \(min-width: 981px\)\s*\{\s*#root\.antbuildz-original-root \.antbuildz-public-header \.antbuildz-menu-trigger\s*\{\s*display: none !important;/,
  );
  assert.match(
    styles,
    /@media \(max-width: 767px\)[\s\S]*?#root\.antbuildz-original-root \.antbuildz-menu-trigger\s*\{\s*width: 44px;\s*height: 44px;\s*flex-basis: 44px;/,
  );
});

test('floating AI Agent launcher is removed from every transferred route', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  assert.match(
    source,
    /function removeLiveChatLauncher\(root: HTMLElement\) \{[\s\S]*?querySelectorAll<HTMLElement>\('\.live-chat-launcher'\)[\s\S]*?launcher\.remove\(\)/,
  );
  assert.match(
    source,
    /function applyAntbuildzAiCorrections\(root: HTMLElement\) \{\s*removeLiveChatLauncher\(root\);/,
  );
  assert.match(
    styles,
    /#root \.live-chat-launcher \{\s*display: none !important;/,
  );
});

test('public dropdowns share global menu tokens without targeting operational controls', async () => {
  const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  for (const token of ['menu-surface', 'menu-border', 'menu-shadow', 'menu-radius', 'menu-item-radius',
    'menu-title-size', 'menu-label-size', 'menu-copy-size', 'menu-label-weight', 'menu-item-height', 'menu-focus']) {
    assert.ok(styles.includes(`--${token}:`), `missing shared ${token}`);
    assert.ok(styles.includes(`var(--${token})`), `unused shared ${token}`);
  }
  assert.match(styles, /body:has\(\.antbuildz-public-header\)/);
  assert.match(styles, /\.antbuildz-industries-menu__intro-copy > strong,\s*\.antbuildz-language-header h2,\s*\.antbuildz-drawer-header strong/);
  assert.match(styles, /font-family: var\(--font-heading\);\s*font-size: var\(--menu-title-size\)/);
  assert.match(styles, /font-family: var\(--font-body\);\s*font-size: var\(--menu-label-size\)/);
  assert.match(styles, /--menu-label-weight: 600/);
  assert.match(styles, /background: color-mix\(in srgb, var\(--canvas\) 96%, transparent\)/);
  assert.match(styles, /backdrop-filter: blur\(18px\) saturate\(1\.08\)/);
  assert.match(styles, /\.antbuildz-industries-menu__intro-copy > span \{[^}]*font-family: var\(--font-heading\);[^}]*font-size: 12px;[^}]*font-weight: 800/s);
  assert.match(styles, /outline: var\(--menu-focus\)/);
  assert.match(styles, /z-index: var\(--menu-dialog-layer\)/);
  assert.match(styles, /z-index: var\(--menu-overlay-layer\)/);
  assert.match(styles, /\.antbuildz-resource-role-links\[hidden\] \{ display: none; \}/);
});

test('header menu chevrons indicate expanded state without changing direct links', async () => {
  const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.ok(styles.includes('.antbuildz-public-header .antbuildz-industries-menu__trigger::after'));
  assert.ok(styles.includes('.antbuildz-footer-language .antbuildz-language-trigger::after'));
  assert.ok(styles.includes('[aria-expanded="true"]::after'));
  assert.match(styles, /border-right: 1.5px solid currentColor/);
  assert.match(styles, /rotate\(45deg\)/);
  assert.match(styles, /rotate\(225deg\)/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)[\s\S]*?\.antbuildz-public-header :is\(\.bright-nav-product-link, \.antbuildz-industries-menu__trigger\)::before,\s*\.antbuildz-public-header \.antbuildz-industries-menu__trigger::after,\s*\.antbuildz-footer-language \.antbuildz-language-trigger::after\s*\{\s*transition: none;/);
});

test('homepage Who We Serve journey links every industry summary', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  assert.match(source, /AI sales workflows shaped around industrial work/);
  assert.match(source, /createHomeIndustriesSection/);
  assert.match(styles, /--home-chapter-warm:/);
  assert.match(styles, /--home-chapter-lilac:/);
  assert.match(styles, /linear-gradient\(108deg, var\(--home-chapter-warm\)/);
  assert.match(styles, /\.antbuildz-home-industry-chapter\.is-reversed/);
  assert.match(styles, /font-size: clamp\(2rem, 2\.55vw, 2\.65rem\)/);
  for (const route of requestedRoutes.slice(8)) {
    assert.match(source, new RegExp(`/${route}`));
  }
});

test('customer-facing AI Sales Agent is named Emma', async () => {
  const source = await readFile(new URL('../app/site.tsx', import.meta.url), 'utf8');
  assert.match(source, /Emma · Antbuildz AI/);
  assert.doesNotMatch(source, /\b(?:Aria|Aira)\b/);
});

test('agent portraits reuse Emma without changing customer or uploaded identities and remain idempotent', async () => {
  const source = await readFile(new URL('../lib/agent-identity.ts', import.meta.url), 'utf8');
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const identitySandbox = { exports: {} };
  runInNewContext(code, identitySandbox);
  const { standardiseAgentPortraits, EMMA_PORTRAIT_SRC, EMMA_PORTRAIT_ALT } = identitySandbox.exports;
  let writes = 0;
  const element = (src, text = '') => {
    const classes = new Set();
    const node = copyElement(text);
    node.attributes = { src, alt: 'Sales assistant' };
    node.setAttribute = (key, value) => { writes++; node.attributes[key] = value; };
    node.classList = { contains: name => classes.has(name), add: name => { writes++; classes.add(name); } };
    node.style = { setProperty: () => { writes++; } };
    return node;
  };
  const current = element('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=320&q=80');
  const legacyAgent = element('/assets/office-lady-portrait-CGdQrlR_.png');
  const custom = element('/uploads/my-own-agent.jpg');
  const initials = element('', 'AI');
  const customInitials = element('', 'My agent');
  const originalChild = initials.childNodes[0];
  const images = [current, legacyAgent, custom];
  const root = { querySelectorAll(selector) {
    assert.doesNotMatch(selector, /avatar-user|logo/, 'do not target buyers or company logos');
    return selector.includes('img') ? images : [initials, customInitials];
  } };
  standardiseAgentPortraits(root);
  for (const image of [current, legacyAgent]) {
    assert.equal(image.getAttribute('src'), EMMA_PORTRAIT_SRC);
    assert.equal(image.getAttribute('alt'), EMMA_PORTRAIT_ALT);
  }
  assert.equal(custom.getAttribute('src'), '/uploads/my-own-agent.jpg');
  assert.equal(custom.getAttribute('alt'), 'Sales assistant');
  assert.equal(initials.childNodes[0], originalChild, 'retain the copied component child and its handlers');
  assert.equal(initials.getAttribute('role'), 'img');
  assert.equal(initials.getAttribute('aria-label'), EMMA_PORTRAIT_ALT);
  assert.equal(customInitials.getAttribute('role'), null);
  const firstWrites = writes;
  standardiseAgentPortraits(root);
  assert.equal(writes, firstWrites, 'observer passes must not cause a mutation loop');
  const remounted = element('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160');
  images.push(remounted);
  standardiseAgentPortraits(root);
  assert.equal(remounted.getAttribute('src'), EMMA_PORTRAIT_SRC, 'newly mounted animated scenes also use Emma');
  await access(new URL(`../public${EMMA_PORTRAIT_SRC}`, import.meta.url));
});

test('Resources keeps AI Agent Roles on its dedicated page', async () => {
  const source = await readFile(new URL('../lib/site-content.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /title: 'AI Agent Roles'/);
  assert.doesNotMatch(source, /href: '\/ai-roles'/);
});

test('Resources removes the closing conversion panel', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(source, /next-step-panel--resources/);
  assert.match(source, /panel\.hidden = true;[\s\S]*?panel\.inert = true;[\s\S]*?aria-hidden/);
  assert.match(styles, /#root \.next-step-panel--resources\[hidden\],[\s\S]*?display: none !important/);
});

test('resource articles expose unique server metadata, canonicals, schema and real 404 handling', async () => {
  const catalogue = await readFile(new URL('../lib/resource-seo.ts', import.meta.url), 'utf8');
  const route = await readFile(new URL('../app/resources/[slug]/page.tsx', import.meta.url), 'utf8');
  const entries = catalogue
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('{"slug":'))
    .map((line) => JSON.parse(line.replace(/,$/, '')));
  assert.equal(entries.length, 49);
  assert.equal(new Set(entries.map(({ slug }) => slug)).size, entries.length);
  assert.ok(entries.every(({ title, description }) => title.length > 20 && description.length > 80));
  assert.match(route, /export async function generateMetadata/);
  assert.match(route, /alternates: \{ canonical: url \}/);
  assert.match(route, /type: 'article'/);
  assert.match(route, /'@type': 'Article'/);
  assert.match(route, /'@type': 'BreadcrumbList'/);
  assert.match(route, /if \(!article\) notFound\(\)/);
});

test('resource articles use readable canonical URLs and direct legacy redirects', async () => {
  const catalogue = await readFile(new URL('../lib/resource-seo.ts', import.meta.url), 'utf8');
  const route = await readFile(new URL('../app/resources/[slug]/page.tsx', import.meta.url), 'utf8');
  const navigation = await readFile(new URL('../lib/resource-navigation.ts', import.meta.url), 'utf8');
  const copiedApp = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const exports = {};
  const code = ts.transpileModule(catalogue, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  }).outputText;
  runInNewContext(code, {
    exports,
    require: path => path.endsWith('resource-copy') ? { RESOURCE_POSITIONING_OVERRIDES: {} } : { customerTutorials: [], tutorialReviewDate: '2026-09-07' },
  });

  const redirects = exports.RESOURCE_URL_REDIRECTS;
  const canonicalSlugs = exports.resourceSeoEntries.map(({ slug }) => slug);
  assert.equal(Object.keys(redirects).length, 44);
  assert.equal(new Set(canonicalSlugs).size, canonicalSlugs.length);
  assert.ok(canonicalSlugs.every((slug) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)));
  assert.ok(Object.entries(redirects).every(([legacySlug, canonicalSlug]) => (
    legacySlug !== canonicalSlug && !redirects[canonicalSlug]
  )));
  assert.equal(
    exports.getResourceRedirect('whatisanaisalesagentforindustrialb2bproductsequipmentrentalsales'),
    '/resources/what-is-an-ai-sales-agent',
  );
  assert.equal(
    exports.getResourceSeo('what-is-an-ai-sales-agent')?.title,
    'What Is an AI Sales Agent for Industrial B2B Products, Equipment Rental & Sales | Antbuildz AI Agent Resources',
  );
  assert.match(route, /const redirect = getResourceRedirect\(slug\);[\s\S]*?permanentRedirect\(redirect\)/);
  assert.match(navigation, /window\.location\.assign\(link\.href\)/);
  assert.match(navigation, /export function getTransferredResourcePath/);
  assert.match(copiedApp, /getTransferredResourcePath\(protectedPathname\)/);
  assert.match(copiedApp, /nativeReplaceState\(window\.history\.state/);
  assert.match(copiedApp, /root\.querySelector\('article h1'\)/);
  assert.match(copiedApp, /syncResourceNavigation\(root\)/);
});

test('resource copy explains the current Agent-first product model', async () => {
  const copy = await readFile(new URL('../lib/resource-copy.ts', import.meta.url), 'utf8');
  const route = await readFile(new URL('../app/[slug]/page.tsx', import.meta.url), 'utf8');
  const llms = await readFile(new URL('../public/llms.txt', import.meta.url), 'utf8');
  assert.match(copy, /The AI Agent is the core product/);
  assert.match(copy, /Webstore is an optional supporting system/);
  assert.match(copy, /dedicated product URLs for search discovery/);
  assert.match(copy, /How Webstore Data Supports the AI Agent/);
  assert.match(route, /RESOURCE_LIBRARY_SEO/);
  assert.ok(llms.indexOf('[AI Sales Agent]') < llms.indexOf('[AI Webstore Suite]'));
});

test('resource articles use local long-form blog content with answer-engine structure', async () => {
  const copy = await readFile(new URL('../lib/resource-copy.ts', import.meta.url), 'utf8');
  const route = await readFile(new URL('../app/resources/[slug]/page.tsx', import.meta.url), 'utf8');
  const articleDirectory = new URL('../public/resource-articles/content/', import.meta.url);
  const files = (await readdir(articleDirectory)).filter((name) => name.endsWith('.html'));
  const agentArticle = await readFile(new URL('what-is-an-ai-sales-agent.html', articleDirectory), 'utf8');
  const webstoreArticle = await readFile(new URL('why-ai-agents-work-with-an-integrated-webstore.html', articleDirectory), 'utf8');
  const benefitsArticle = await readFile(new URL('ai-agent-benefits-for-industrial-b2b.html', articleDirectory), 'utf8');
  const improvementArticle = await readFile(new URL('how-ai-agents-improve-over-time.html', articleDirectory), 'utf8');

  assert.equal(files.length, 44);
  assert.ok(agentArticle.split(/\s+/).length > 1_500);
  assert.ok(webstoreArticle.split(/\s+/).length > 1_500);
  assert.ok((webstoreArticle.match(/<h[234]>/g) ?? []).length > 10);
  assert.ok((webstoreArticle.match(/<(?:ul|ol)>/g) ?? []).length <= 2);
  assert.doesNotMatch(agentArticle, /According to Harvard Business Review/);
  assert.doesNotMatch(`${agentArticle} ${benefitsArticle}`, /up to 80%|100x|380%|35-40%|40-60%|can handle 50/i);
  assert.doesNotMatch(improvementArticle, /Every enquiry teaches|learns automatically|matches or exceeds a junior/i);
  assert.match(improvementArticle, /conversations make gaps visible; authorised updates make the Agent better/i);
  assert.match(copy, /RESOURCE_BLOG_CONTENT_PATH/);
  assert.match(copy, /antbuildz-resource-answer/);
  assert.match(copy, /articleBody\.innerHTML = html/);
  assert.match(route, /articleSection/);
  assert.match(route, /getResourceBlogSchema/);
  assert.match(route, /articleBody: blogContent\.articleBody/);
  assert.match(route, /wordCount: blogContent\.wordCount/);
  assert.match(route, /keywords:/);
  assert.match(route, /about: \{ '@type': 'SoftwareApplication'/);
});

test('sitemap contains canonical public and resource URLs with stable modification dates', async () => {
  const sitemap = await readFile(new URL('../app/sitemap.ts', import.meta.url), 'utf8');
  assert.match(sitemap, /resourceSeoEntries\.filter\(article => !AI_ROLE_REDIRECTS/);
  assert.match(sitemap, /AI_ROLE_LINKS\.map/);
  assert.match(sitemap, /slug !== 'ai-agent-roles' && slug !== 'faqs'/);
  assert.match(sitemap, /const lastVerified = '2026-09-02'/);
  assert.match(sitemap, /legalDocuments\.map/);
  assert.doesNotMatch(sitemap, /new Date\(/);
  assert.doesNotMatch(sitemap, /changeFrequency|priority:/);
});

test('unknown public routes return not-found while operational client routes stay noindex', async () => {
  const route = await readFile(new URL('../app/[slug]/page.tsx', import.meta.url), 'utf8');
  const notFoundPage = await readFile(new URL('../app/not-found.tsx', import.meta.url), 'utf8');
  const nonIndexableBlock = route.match(/const nonIndexableClientPages[\s\S]*?\n};/)?.[0] ?? '';
  assert.match(route, /const nonIndexableClientPages/);
  assert.match(route, /robots: \{ index: false, follow: true \}/);
  assert.match(route, /if \(!routeSeo\) notFound\(\)/);
  assert.match(notFoundPage, /robots: \{ index: false, follow: true \}/);
  assert.match(notFoundPage, /This page is no longer available/);
  assert.match(notFoundPage, /href="\/"/);
  assert.match(notFoundPage, /href="\/resources"/);

  for (const retiredRoute of [
    'aiagent-homepage-preview',
    'antbuildz-main-clone',
    'main-dashboard-navigation-preview',
    'aiagent-sales-agent-preview',
    'chat-theme-studio',
    'product',
    'use-cases',
    'integrations',
    'security',
    'insurance',
  ]) {
    const escapedRoute = retiredRoute.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    assert.doesNotMatch(
      nonIndexableBlock,
      new RegExp(`^\\s{2}(?:'${escapedRoute}'|${escapedRoute}):`, 'm'),
      `${retiredRoute} must resolve through the real 404 path`,
    );
  }

  assert.match(route, /marketplace: 'https:\/\/antbuildz\.com'/);
  assert.match(route, /blogs: '\/resources'/);
});

test('canonical SEO references the Antbuildz AI domain', async () => {
  const files = await Promise.all([
    readFile(new URL('../app/layout.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/sitemap.ts', import.meta.url), 'utf8'),
    readFile(new URL('../app/robots.ts', import.meta.url), 'utf8'),
  ]);
  for (const source of files) assert.match(source, /https:\/\/antbuildz\.ai/);
  await access(new URL('../public/llms.txt', import.meta.url));
});

test('Sites hosting configuration has no persistence bindings', async () => {
  const hosting = JSON.parse(await readFile(new URL('../.openai/hosting.json', import.meta.url), 'utf8'));
  assert.deepEqual(hosting, { d1: null, r2: null });
});

test('all reused industrial image assets are present', async () => {
  const content = await readFile(new URL('../lib/site-content.ts', import.meta.url), 'utf8');
  const imagePaths = [...content.matchAll(/(?:image|image:)\s*:\s*['\"](\/(?:images|resources)\/[^'\"]+)['\"]/g)]
    .map((match) => match[1]);
  assert.ok(imagePaths.length >= 13, 'expected the complete industrial image set');
  for (const imagePath of imagePaths) {
    await access(new URL(`../public${imagePath}`, import.meta.url));
  }
});

async function loadListingModule(file) {
  const source = await readFile(new URL(`../app/webstore-2-ai-webstore-preview/${file}.ts`, import.meta.url), 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const webstoreCopy = await loadWebstoreCopy();
  const sandbox = { exports: {}, require(id) {
    assert.equal(id, '../../lib/ai-webstore-copy');
    return webstoreCopy;
  } };
  runInNewContext(compiled, sandbox);
  return sandbox.exports;
}

test('Webstore concept follows import, enrichment, photo upload, product pages and continuous recommendation handoff', async () => {
  const { getStoryFrame, STORY_DURATION, STORY_STAGES, INVENTORY_FIELDS } = await loadListingModule('storyboard');
  const beats = [[0, 'source', 0], [1400, 'drop', 0], [3200, 'model', 0], [4600, 'enrich', 0], [7400, 'enriched', 0],
    [10500, 'photos', 1], [12800, 'pages', 1], [17800, 'sync', 2], [21000, 'recommend', 2]];
  for (const [time, phase, stage] of beats) {
    assert.equal(getStoryFrame(time).phase, phase);
    assert.equal(getStoryFrame(time).stage, stage);
  }
  assert.equal(getStoryFrame(STORY_DURATION - 1).phase, 'recommend');
  assert.equal(getStoryFrame(STORY_DURATION).phase, 'source', 'raw frame lookup wraps at its duration');
  assert.equal(getStoryFrame(-1).phase, 'source');
  assert.equal(getStoryFrame(4599).enrichedFields, 0, 'models arrive before any generated data');
  for (let field = 0; field <= INVENTORY_FIELDS.length; field++) {
    assert.equal(getStoryFrame(4600 + field * 350).enrichedFields, field, 'AI fills each additional column in order');
  }
  assert.equal(getStoryFrame(7400).enrichedFields, INVENTORY_FIELDS.length);
  assert.equal(getStoryFrame(STORY_DURATION).enrichedFields, 0, 'replay clears all generated fields');
  for (let index = 0; index < STORY_STAGES.length; index++) {
    assert.equal(getStoryFrame(STORY_STAGES[index].preview).stage, index, 'step controls select their own settled scene');
  }
  for (const time of [0, 10500, 17800, STORY_DURATION]) {
    assert.equal(getStoryFrame(time, true).phase, 'recommend', 'reduced motion presents the complete result');
    assert.equal(getStoryFrame(time, true).time, STORY_STAGES[2].preview);
    assert.equal(getStoryFrame(time, true).enrichedFields, INVENTORY_FIELDS.length);
  }
});

test('Webstore concept preserves mixed-category product identity, specifications and source across scenes', async () => {
  const { DEMO_PRODUCTS, INVENTORY_PRODUCTS, INVENTORY_FIELDS, PRODUCT_FACTS_CHECKED_ON, PRODUCT_PRICING_CHECKED_ON, productDemoPath } = await loadListingModule('storyboard');
  assert.equal(DEMO_PRODUCTS.length, 3);
  assert.equal(new Set(DEMO_PRODUCTS.map(product => product.id)).size, 3);
  assert.equal(new Set(DEMO_PRODUCTS.map(product => product.model)).size, 3);
  assert.equal(new Set(DEMO_PRODUCTS.map(product => productDemoPath(product.slug))).size, 3);
  for (const product of DEMO_PRODUCTS) {
    assert.match(productDemoPath(product.slug), /^\/products\/[a-z0-9]+(?:-[a-z0-9]+)*$/);
    for (const key of ['name', 'model', ...INVENTORY_FIELDS.map(field => field.key)]) assert.ok(product[key]);
    await access(new URL(`../public${product.image}`, import.meta.url));
    const manufacturerHost = { Jungheinrich: 'www.jungheinrich.com.sg', Bosch: 'www.bosch-professional.com', NSK: 'www.nsk.com' }[product.brand];
    assert.ok(manufacturerHost, 'every displayed brand has a manufacturer source');
    assert.equal(new URL(product.source).hostname, manufacturerHost);
    assert.equal(new URL(product.source).protocol, 'https:');
    assert.ok(product.sourceTitle && product.factNote, 'the model has a readable audit trail');
    assert.ok(product.imageAlt && product.summary);
    assert.equal(product.specs.length, 3);
    for (const spec of product.specs) assert.ok(spec.label && spec.value);
    assert.equal(new Set(product.specs.map(spec => spec.label)).size, 3);
  }
  assert.match(PRODUCT_FACTS_CHECKED_ON, /^\d{4}-\d{2}-\d{2}$/);
  assert.match(PRODUCT_PRICING_CHECKED_ON, /^\d{4}-\d{2}-\d{2}$/);
  assert.equal(INVENTORY_FIELDS.some(field => field.key === 'model'), false, 'the model is supplied, not AI-generated');
  const component = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.tsx', import.meta.url), 'utf8');
  assert.match(component, /Can you help me confirm whether this reach truck fits my warehouse\?/);
  assert.match(component, /What load, lift height, aisle width and hire period do you need\?/);
  assert.doesNotMatch(component, /I need rental equipment and products to buy|What do you need for the job\?/,
    'the superseded generic conversation must not return');
  assert.match(component, /data-product-url=\{productDemoPath\(product.slug\)\}/);
  assert.match(component, /createPortal\(<ListingStory \/>, mount\)/);
  assert.doesNotMatch(component, /history\.replaceState|innerHTML\s*=|fetch\(/);
  assert.doesNotMatch(component, /DemoLift|🇸🇬|1\.8 tonnes/, 'remove fictional supplier, unverified stock location and unsuitable load promise');
  assert.doesNotMatch(component, /styles\.demoNote|<ProductSources|Read Product facts and sources/, 'the removed footer wording must not return or leave an inaccessible reference');
  const sourceNotes = await readFile(new URL('../app/webstore-2-ai-webstore-preview/PRODUCT-SOURCES.md', import.meta.url), 'utf8');
  for (const product of DEMO_PRODUCTS) {
    assert.ok(sourceNotes.includes(product.source), 'manufacturer references stay documented after removing the visible footer');
    assert.ok(sourceNotes.includes(product.pricingSource), 'commercial references stay documented alongside the displayed prices');
  }
  assert.match(component, /product\.pricing\.map/);
  assert.doesNotMatch(component, /Price on enquiry|two rental listings|Get Quote is a placeholder/);
  assert.doesNotMatch(component, /FROM BROWSING TO ENQUIRY|Turn product questions into useful recommendations\./,
    'the removed conversation-stage wording must not return');
  assert.doesNotMatch(component, /styles\.(?:rating|verified)|★|⭐/i, 'rating and verification UI must remain absent from the cards');
  assert.doesNotMatch(component, /styles\.(?:storeHeader|storeBrand|storeSearch|storeQuote)|Search by product or model/, 'the removed store header row must not return');
  assert.match(component, /Equipment\. Tools\.<br \/>Parts &amp; supplies\.|Equipment\. Tools\.<br \/>Parts & supplies\./);
  assert.doesNotMatch(component, /Find the right products<br|for your next job\.|Explore products/, 'the company banner must not return to instructional copy');
  assert.match(component, /data-discovery-hint/);
  for (const label of ['Product identity', 'Unique product URL', 'Search & AI discovery', 'Supports SEO & GEO']) assert.ok(component.includes(label));
  assert.match(component, /not guaranteed indexing, rankings or AI citations/);
  assert.equal(INVENTORY_PRODUCTS.length, 5);
  assert.equal(new Set(INVENTORY_PRODUCTS.map(product => product.id)).size, 5);
  for (const product of INVENTORY_PRODUCTS) {
    for (const field of INVENTORY_FIELDS) assert.ok(product[field.key]);
    assert.ok(sourceNotes.includes(product.source));
  }
  assert.equal(DEMO_PRODUCTS.filter(p => p.listingType === 'rental').length, 1);
  assert.equal(DEMO_PRODUCTS.filter(p => p.listingType === 'sale').length, 2);
  assert.match(component, /35 details to review/);
  assert.match(component, /INVENTORY_PRODUCTS\.map/);
  assert.match(component, /alt=\{product.imageAlt\}/);
  assert.equal(new Set(DEMO_PRODUCTS.map(product => product.category)).size, 3, 'the demo must span three industrial categories');
  const reach = DEMO_PRODUCTS.find(product => product.model === 'ETV 216i');
  assert.equal(reach.pricing.map(price => `${price.label}:${price.value}`).join('|'), 'Daily:SGD 350|Weekly:SGD 350|Monthly:SGD 750');
  assert.match(reach.pricingContext, /Example/);
  assert.equal(reach.specification, '10.7 m max. lift', 'maximum mast qualification stays in inventory');
  assert.ok(reach.specs.some(spec => spec.label === 'Max. lift' && spec.value === '10.7 m'));
  assert.match(reach.factNote, /mast configuration/);
  const drill = DEMO_PRODUCTS.find(product => product.brand === 'Bosch');
  assert.equal(drill.listingType, 'sale');
  assert.equal(drill.pricing.map(price => `${price.label}:${price.value}`).join('|'), 'Sale price:SGD 210.00');
  assert.equal(drill.specs.map(spec => spec.value).join('|'), '800 W|2.7 J|SDS plus');
  const bearing = DEMO_PRODUCTS.find(product => product.brand === 'NSK');
  assert.equal(bearing.pricing.map(price => `${price.label}:${price.value}`).join('|'), 'Sale price:SGD 7.99');
  assert.equal(bearing.specs.map(spec => spec.value).join('|'), '25 mm|52 mm|15 mm');
  assert.match(bearing.imageAlt, /cutaway illustration/);
  for (const product of [drill, bearing]) assert.ok(product.specs.every(spec => !/lift|rated load/i.test(spec.label)), 'non-truck products show their own specifications');
  assert.doesNotMatch(component, /electric equipment for our warehouse|What load and lift height do you need/, 'mixed products are catalogue examples, not interchangeable recommendations');
});

test('Webstore cards hand off directly, followed by rental and sales enquiries that keep looping', async () => {
  const { advanceStoryTime, getStoryFrame, STORY_STAGES, STORY_DURATION, CHAT_LOOP_START, CHAT_TURNS } = await loadListingModule('storyboard');
  const start = STORY_STAGES[2].start;
  const beats = [[0, 'sync', -1, 0], [1400, 'recommendations', -1, 0],
    [2100, 'initial-buyer-typing', -1, 0], [2550, 'initial-question', -1, 0],
    [2800, 'initial-agent-typing', -1, 0], [3450, 'initial-reply', -1, 0],
    [4700, 'rental-buyer-typing', -1, 80], [5150, 'rental-question', 0, 80],
    [5400, 'rental-agent-typing', 0, 96], [6050, 'rental-reply', 0, 120],
    [7450, 'sales-buyer-typing', 0, 140], [7900, 'sales-question', 1, 160],
    [8150, 'sales-agent-typing', 1, 184], [8800, 'sales-reply', 1, 224]];
  for (const [offset, beat, turn, scroll] of beats) {
    const frame = getStoryFrame(advanceStoryTime(start, offset));
    assert.equal(frame.stage, 2);
    assert.equal(frame.chatBeat, beat);
    assert.equal(frame.chatTurn, turn);
    assert.equal(frame.chatScroll, scroll);
  }
  for (let loop = 0; loop < 3; loop++) {
    for (const [offset, beat] of beats.slice(2)) {
      const time = advanceStoryTime(STORY_DURATION, loop * (STORY_DURATION - CHAT_LOOP_START) + offset - 2100);
      assert.equal(getStoryFrame(time).stage, 2, 'chat never drops back to inventory or re-syncs');
      assert.equal(getStoryFrame(time).chatBeat, beat);
    }
  }
  assert.equal(advanceStoryTime(STORY_DURATION - 10, 20), CHAT_LOOP_START + 10);
  assert.equal(advanceStoryTime(start + 1500, 0), start + 1500, 'pause preserves the beat');
  assert.equal(advanceStoryTime(start + 1500, -100), start + 1500);
  assert.equal(getStoryFrame(start + 2300).chatBeat, 'initial-buyer-typing', 'the buyer starts typing shortly after the cards land');
  for (const [typingTime, questionTime, agentTypingTime, replyTime] of [[2100, 2550, 2800, 3450], [4700, 5150, 5400, 6050], [7450, 7900, 8150, 8800]]) {
    assert.match(getStoryFrame(start + typingTime + 150).chatBeat, /-buyer-typing$/, 'show buyer typing before each question');
    assert.match(getStoryFrame(start + questionTime).chatBeat, /-question$/, 'the typed buyer message arrives next');
    assert.match(getStoryFrame(start + agentTypingTime + 200).chatBeat, /-agent-typing$/, 'Emma starts typing after each question');
    assert.match(getStoryFrame(start + replyTime).chatBeat, /-reply$/, 'Emma replies after a short, visible typing state');
    assert.match(getStoryFrame(start + replyTime + 900).chatBeat, /-reply$/, 'leave completed replies on screen long enough to read');
  }
  assert.equal(getStoryFrame(0).chatBeat, 'idle', 'Replay starts before the chat');
  assert.equal(getStoryFrame(0, true).chatBeat, 'recommendations', 'reduced motion shows stable recommendations');
  assert.match(CHAT_TURNS[0].question, /handle 1,500 kg.*lift to 8 m.*3 m aisle.*two weeks/);
  assert.match(CHAT_TURNS[0].reply, /may suit.*mast configuration.*availability.*delivered/);
  assert.match(CHAT_TURNS[1].question, /Jurong in two weeks.*one rotary hammer.*20 bearings/);
  assert.match(CHAT_TURNS[1].reply, /two-week reach-truck rental.*one rotary hammer.*20 bearings.*team.*bearing variant.*pricing/);
  assert.ok(getStoryFrame(start + 8800).chatScroll < 250,
    'the completed chat remains lower in the phone instead of scrolling into an empty final state');
  const component = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.tsx', import.meta.url), 'utf8');
  assert.match(component, /Buyer is typing/);
  assert.match(component, /data-agent-typing=\{frame\.chatTurn === index/);
  assert.match(component, /data-visible=\{initialQuestionVisible\}/);
  const css = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.module.css', import.meta.url), 'utf8');
  assert.match(css, /\[data-stage="2"\] \.productPage \{[^}]*opacity: 1;/, 'cards must not disappear during their move into chat');
  assert.match(css, /\.chatTranscript[^}]*--chat-scroll/);
});

test('Webstore preview keeps the mobile hero graphic compact without a lower control strip', async () => {
  const css = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.module.css', import.meta.url), 'utf8');
  const mobile = css.slice(css.indexOf('@media (max-width: 767px)'), css.indexOf('@keyframes listingDropMobile'));
  assert.match(mobile, /\.mount \{ margin-top: 18px; \}/);
  assert.match(mobile, /\.stageNav button \{[^}]*min-height: 78px/);
  assert.match(mobile, /\.canvasViewport \{ --mobile-scene-scale: \.46;[^}]*height: 570px/);
  assert.match(mobile, /\[data-stage="1"\] \.canvasViewport \{ --mobile-scene-scale: \.62; height: 496px; \}/);
  assert.match(mobile, /\[data-stage="2"\] \.canvasViewport \{ --mobile-scene-scale: \.8; height: 554px; \}/);
  const component = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(component, /storyFooter|playback|Pause animation|Replay animation|STORY_STAGES\[frame\.stage\]\.caption/,
    'the removed explanatory caption and playback-control strip must not return');
  assert.doesNotMatch(css, /\.storyFooter|\.playback/,
    'unused lower-strip styling must not reserve space beneath the visual');
  assert.match(css, /\.chatBody \{[\s\S]*?-webkit-mask-image: linear-gradient\(to bottom, rgb\(0 0 0 \/ 24%\), #000 22px, #000 calc\(100% - 28px\), rgb\(0 0 0 \/ 24%\)\)/);
  assert.match(css, /\[data-stage="2"\] \.canvas \{[^}]*--phone-width: min\(420px, 94cqw\);[^}]*--phone-height: 800px;[^}]*--phone-top: 28px;/,
    'the final conversation stage uses the enlarged phone composition');
  assert.match(css, /\.canvasViewport \{[^}]*radial-gradient\(circle at 12% 18%, color-mix\(in srgb, var\(--purple\) 22%, transparent\)[^}]*-webkit-mask-image: linear-gradient\(to bottom, #000 0%, #000 58%,[^}]*transparent 100%\);/,
    'all three workflow stages use restrained colour lighting and a long lower fade');
  assert.match(css, /@media \(prefers-reduced-transparency: reduce\), \(prefers-contrast: more\) \{[\s\S]*?\.canvasViewport \{ background: var\(--canvas\); -webkit-mask-image: none; mask-image: none; \}/,
    'the decorative lighting and fade yield to increased-contrast preferences');
});

test('Webstore mobile hero and every storyboard stage stay inside one phone viewport', async () => {
  const css = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.module.css', import.meta.url), 'utf8');
  const viewportFitMarker = css.indexOf('/* Keep the complete mobile hero inside the small viewport.');
  const viewportFit = css.slice(viewportFitMarker, css.indexOf('@media (prefers-reduced-transparency'));
  assert.match(viewportFit, /\.webstore2-page > section:first-of-type\)[^{]*\{[^}]*--mobile-hero-bottom-gap: 24px;[^}]*height: 100svh;[^}]*padding-bottom: var\(--mobile-hero-bottom-gap\);[^}]*overflow: hidden;/);
  assert.match(viewportFit, /\.webstore2-page \.ws2-hero-shell\)[^{]*\{[^}]*height: calc\(100svh - 48px - var\(--preview-header-height, 0px\) - var\(--mobile-hero-bottom-gap\)\);[^}]*min-height: 0;/);
  assert.match(viewportFit, /\.mount \{[^}]*flex: 1 1 0;[^}]*min-height: 0;[^}]*overflow: hidden;/);
  assert.match(viewportFit, /\[data-stage="1"\] \.canvasViewport,[\s\S]*?\[data-stage="2"\] \.canvasViewport \{[^}]*height: auto !important;[^}]*flex: 1 1 0;/);
});

test('Webstore desktop hero fits the first viewport with a smaller storyboard and no duplicate hero CTAs', async () => {
  const css = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.module.css', import.meta.url), 'utf8');
  assert.match(css, /\.ws2-hero-cta-wrap\) \{\s*display: none !important;\s*\}/,
    'the duplicate Book a Demo and View Pricing hero buttons stay removed');
  assert.match(css, /\.ws2-hero-title \.mkt-gradient-text\)[^{]*\{[^}]*color: white;[^}]*background: none;[^}]*-webkit-text-fill-color: white;/,
    'the complete hero title uses one white treatment without a highlighted gradient phrase');
  assert.match(css, /@media \(min-width: 980px\)[\s\S]*?\.webstore2-page > section:first-of-type\)[^{]*\{[^}]*height: 100svh;[^}]*overflow: hidden;/,
    'the desktop hero is capped to the first viewport');
  assert.match(css, /padding:\s*calc\(var\(--preview-header-height, 0px\) \+ var\(--public-hero-title-gap, 96px\) - 18px\)/,
    'the desktop Webstore H1 follows the shared public-page title gap after its eyebrow');
  assert.match(css, /@media \(min-width: 980px\)[\s\S]*?\.mount \{[^}]*flex: 1 1 0;[^}]*width: min\(80%, 998px\);/,
    'the desktop storyboard begins around twenty percent smaller');
  assert.match(css, /\.story \{[^}]*width: auto;[^}]*max-width: 100%;[^}]*height: min\(100%, 608px\);[^}]*aspect-ratio: 1248 \/ 760;/,
    'the storyboard keeps its authored proportion while fitting short laptop screens');
  assert.match(css, /transform: translateY\(clamp\(-34px, calc\(\(100svh - 960px\) \* -\.18\), 0px\)\);/,
    'tall desktop screens pull the storyboard closer to the description without changing short laptop layouts');
  assert.doesNotMatch(css, /height: min\(100%, calc\(\(100% \+ 68px\) \* \.81\)\)/,
    'the viewport-height compression that flattened the graphic does not return');
});

test('Webstore conversation stage centres its summary without a catalogue-status eyebrow', async () => {
  const component = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.tsx', import.meta.url), 'utf8');
  const css = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.module.css', import.meta.url), 'utf8');
  assert.doesNotMatch(component, /Catalogue connected|syncPill/,
    'the redundant catalogue-connected eyebrow stays removed');
  assert.match(css, /\.syncSummary \{[^}]*top: 0;[^}]*bottom: 0;[^}]*display: flex;[^}]*flex-direction: column;[^}]*justify-content: center;/,
    'the remaining conversation summary is vertically centred as one group');
  assert.match(css, /@media \(max-width: 767px\)[\s\S]*?\.syncSummary \{ display: none; \}/,
    'the desktop summary does not consume the compact mobile conversation frame');
});

test('Webstore section titles use one solid treatment without gradient highlights', async () => {
  const css = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.module.css', import.meta.url), 'utf8');
  assert.match(css, /\.webstore2-page :is\(h2, h3\) \.mkt-gradient-text\)[\s\S]*?\.webstore2-page :is\(h2, h3\)\[style\*="background: linear-gradient"\]\)[^{]*\{[^}]*color: inherit !important;[^}]*background: none !important;[^}]*-webkit-text-fill-color: currentColor !important;/,
    'major headings and animated card titles remove their text-only gradient treatment');
});

test('Webstore logo marquee blends into the clean page without its proof label', async () => {
  const css = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.module.css', import.meta.url), 'utf8');
  const copy = await readFile(new URL('../lib/ai-webstore-copy.ts', import.meta.url), 'utf8');
  assert.match(copy, /partnerHeading\.hidden = true;[\s\S]*?data-antbuildz-partner-heading-removed[\s\S]*?data-antbuildz-logo-strip/,
    'the inherited Trusted Partners label is removed while its logo strip is marked');
  assert.match(css, /section\[data-antbuildz-logo-strip="true"\]\)[^{]*\{\s*background: var\(--clean\) !important;\s*border-color: transparent !important;/,
    'the marked logo strip uses the clean white surface without divider lines');
});

test('Webstore benefits introduction uses a wide two-line desktop description frame', async () => {
  const css = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.module.css', import.meta.url), 'utf8');
  assert.match(
    css,
    /@media \(min-width: 768px\)[\s\S]*?\.ws2-benefits-section \.ws2-benefits-desc\)[^{]*\{\s*width: min\(100%, 1000px\);\s*max-width: 1000px !important;\s*\}/,
    'the benefits description receives enough desktop width to remain within two lines',
  );
  assert.match(css, /\.ws2-benefits-section \.ws2-bento-card\) \{\s*height: 462px !important;/,
    'the benefits cards use the approved twenty-percent shorter desktop frame');
  assert.match(css, /\.ws2-bento-card > div:last-child > div:nth-child\(2\)\) \{\s*height: 172px !important;\s*margin-block: 12px !important;/,
    'the shorter cards reduce graphic whitespace without reducing the copy');
  assert.match(css, /\.ws2-benefits-section \.ws2-bento-card\)[^{]*\{[\s\S]*?border: 0 !important;[\s\S]*?linear-gradient\([\s\S]*?var\(--benefit-accent\) 10%, var\(--clean\)[\s\S]*?var\(--benefit-accent-alt\) 5%, var\(--clean\)[\s\S]*?var\(--clean\) 100%/,
    'each card uses its accent pair for a light surface that fades to clean white without an outline');
  assert.match(css, /\.ws2-benefits-section \.ws2-bento-card::after\)[^{]*\{\s*content: none;\s*\}/,
    'the former coloured top hairline remains removed');
  assert.match(css, /\.ws2-bento-card > div:nth-child\(2\)\)[^{]*\{\s*background: none !important;\s*opacity: 0 !important;/,
    'the card background grid remains hidden');
  assert.match(css, /\.ws2-bento-card > div:last-child > div:first-child > div:first-child\)[^{]*\{[\s\S]*?linear-gradient\([\s\S]*?var\(--benefit-accent\)[\s\S]*?var\(--benefit-accent-alt\)/,
    'the existing icon tiles keep their structure while receiving two-tone glass colour');
});

test('Webstore preview presents the global Sales Agent section on a restrained light surface', async () => {
  const css = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.module.css', import.meta.url), 'utf8');
  assert.match(css, /\.ws2-global-agent-section\[data-antbuildz-section-surface="dark"\][^{]*\{[\s\S]*?background-color: #f1eff8 !important;/);
  assert.match(css, /\.ws2-global-agent-section \.ws2-global-agent-word\) \{ color: var\(--ink\) !important; \}/);
  assert.match(css, /\.ws2-global-agent-section \.ws2-global-agent-desc\) \{ color: var\(--body\) !important; \}/);
  assert.match(css, /\.ws2-global-agent-section \.ws2-btn-dark-outline\)[^{]*\{[\s\S]*?background: rgb\(255 255 255 \/ 76%\) !important;/);
});

test('canonical Webstore page corrects inherited metadata idempotently', async () => {
  const { AI_WEBSTORE_PAGE, syncWebstoreMetadata } = await loadListingModule('preview-metadata');
  const canonicalRoute = await readFile(new URL('../app/[slug]/page.tsx', import.meta.url), 'utf8');
  assert.match(canonicalRoute, /'ai-webstore-suite': \[WEBSTORE_TITLE, WEBSTORE_DESCRIPTION\]/);
  assert.equal(AI_WEBSTORE_PAGE.title, (await loadWebstoreCopy()).WEBSTORE_TITLE);
  let writes = 0;
  const node = attributes => ({
    attributes: { ...attributes },
    getAttribute(name) { return this.attributes[name] ?? null; },
    setAttribute(name, value) { this.attributes[name] = value; writes++; },
  });
  const canonical = [node({ href: 'https://antbuildzai.com/webstore-2' }), node({ href: 'http://localhost:8081/webstore-2' })];
  const ogUrl = node({ content: 'https://antbuildzai.com/webstore-2' });
  const image = node({ content: 'https://antbuildzai.com/cta-construction.jpeg' });
  const robots = node({ content: 'index, follow' });
  const description = node({ content: 'Inherited description' });
  const elements = {
    'link[rel="canonical"]': canonical,
    'meta[property="og:url"]': [ogUrl],
    'meta[property="og:image"]': [image],
    'meta[name="robots"]': [robots],
    'meta[name="description"]': [description],
  };
  const doc = { title: 'Original product page', querySelectorAll: selector => elements[selector] ?? [] };
  syncWebstoreMetadata(doc, '/webstore-2-ai-webstore-preview');
  assert.equal(writes, 0);
  assert.equal(doc.title, 'Original product page');
  syncWebstoreMetadata(doc, AI_WEBSTORE_PAGE.path);
  assert.equal(doc.title, `${AI_WEBSTORE_PAGE.title} | Antbuildz AI`);
  for (const link of canonical) assert.equal(link.getAttribute('href'), AI_WEBSTORE_PAGE.url);
  assert.equal(ogUrl.getAttribute('content'), AI_WEBSTORE_PAGE.url);
  assert.equal(image.getAttribute('content'), AI_WEBSTORE_PAGE.image);
  assert.equal(description.getAttribute('content'), AI_WEBSTORE_PAGE.description);
  assert.equal(robots.getAttribute('content'), 'index, follow');
  const initialWrites = writes;
  syncWebstoreMetadata(doc, AI_WEBSTORE_PAGE.path);
  assert.equal(writes, initialWrites, 'the head observer must not trigger itself indefinitely');
  ogUrl.setAttribute('content', 'https://antbuildzai.com/webstore-2');
  syncWebstoreMetadata(doc, AI_WEBSTORE_PAGE.path);
  assert.equal(ogUrl.getAttribute('content'), AI_WEBSTORE_PAGE.url, 'a later copied-router update is corrected');
});

test('homepage education has the approved concise flow, eight destinations and five native FAQs', async () => {
  const source = await readFile(new URL('../app/home-education.tsx', import.meta.url), 'utf8');
  const runtime = await import('react/jsx-runtime');
  const react = await import('react');
  const dom = await import('react-dom');
  const { renderToStaticMarkup } = await import('react-dom/server');
  const exports = {};
  const graphics = {};
  const gap = {};
  const market = {};
  const foundations = {};
  const avatar = {};
  const identity = {};
  const marketSource = await readFile(new URL('../app/home-market-shift.tsx', import.meta.url), 'utf8');
  runInNewContext(ts.transpileModule(marketSource, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText, { exports: market, require: name => {
    if (name === 'react/jsx-runtime') return runtime;
    if (name === 'react') return react;
    if (name.endsWith('.css')) return { default: new Proxy({}, { get: (_, key) => String(key) }) };
    throw new Error(`Unexpected Market Shift dependency: ${name}`);
  } });
  const gapSource = await readFile(new URL('../app/home-enquiry-gap.tsx', import.meta.url), 'utf8');
  runInNewContext(ts.transpileModule(gapSource, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText, { exports: gap, require: name => {
    if (name === 'react/jsx-runtime') return runtime;
    if (name === 'react') return react;
    if (name.endsWith('.css')) return { default: new Proxy({}, { get: (_, key) => String(key) }) };
    throw new Error(`Unexpected enquiry gap dependency: ${name}`);
  } });
  const graphicsSource = await readFile(new URL('../app/home-graphics.tsx', import.meta.url), 'utf8');
  const graphicsCode = ts.transpileModule(graphicsSource, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  runInNewContext(graphicsCode, { exports: graphics, require: name => {
    if (name === 'react/jsx-runtime') return runtime;
    if (name.endsWith('.css')) return { default: new Proxy({}, { get: (_, key) => String(key) }) };
    throw new Error(`Unexpected homepage graphics dependency: ${name}`);
  } });
  for (const [path, target] of [['../lib/agent-identity.ts', identity], ['../app/emma-avatar.tsx', avatar], ['../app/home-agent-foundations.tsx', foundations]]) {
    const moduleSource = await readFile(new URL(path, import.meta.url), 'utf8');
    runInNewContext(ts.transpileModule(moduleSource, {
      compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
    }).outputText, { exports: target, require: name => {
      if (name === 'react/jsx-runtime') return runtime;
      if (name.endsWith('.css')) return { default: new Proxy({}, { get: (_, key) => String(key) }) };
      if (name.endsWith('agent-identity')) return identity;
      if (name.endsWith('emma-avatar')) return avatar;
      if (name.endsWith('home-graphics')) return graphics;
      throw new Error(`Unexpected homepage foundations dependency: ${name}`);
    } });
  }
  const code = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  runInNewContext(code, { exports, require: (name) => {
    if (name === 'react/jsx-runtime') return runtime;
    if (name === 'react') return react;
    if (name === 'react-dom') return dom;
    if (name.endsWith('.css')) return { default: new Proxy({}, { get: (_, key) => String(key) }) };
    if (name.endsWith('home-education-mount')) return {};
    if (name.endsWith('home-graphics')) return graphics;
    if (name.endsWith('home-enquiry-gap')) return gap;
    if (name.endsWith('home-agent-foundations')) return foundations;
    throw new Error(`Unexpected homepage dependency: ${name}`);
  } });
  const body = renderToStaticMarkup(react.createElement(exports.HomeEducationBody));
  const trust = renderToStaticMarkup(react.createElement(exports.HomeTrustPanel));
  const faq = renderToStaticMarkup(react.createElement(exports.HomeEducationFaq));
  const html = body + trust + faq;
  assert.equal(exports.HOME_INDUSTRIES.length, 8);
  assert.match(body, /<p class="eyebrow">Who we serve<\/p><h2 id="home-industries-heading">Built From Industrial Complexity<\/h2>/);
  assert.doesNotMatch(body, /Built around the way industrial businesses sell/);
  assert.match(body, /aria-label="Who We Serve carousel controls"/);
  assert.match(body, /aria-label="Show previous industries"/);
  assert.match(body, /aria-label="Show next industries"/);
  assert.match(body, /aria-label="Who We Serve industries"/);
  for (const [, href, , image] of exports.HOME_INDUSTRIES) {
    assert.ok(body.includes(`href="${href}"`));
    assert.ok(body.includes(`src="${image}"`));
  }
  assert.equal(exports.HOME_QUESTIONS.length, 5);
  assert.match(trust, /<section[^>]*aria-labelledby="home-data-trust-heading"/);
  assert.match(trust, /Data protection &amp; control/);
  assert.match(trust, /Control What Your Agent Knows and Uses/);
  assert.match(trust, /Antbuildz AI uses the product data, company knowledge and business information your team approves/);
  assert.match(trust, /Protected Business Information/);
  assert.match(trust, /Your approved product and business information remains protected/);
  assert.match(trust, /Authorised Access/);
  assert.match(trust, /Only authorised users can manage the Agent’s knowledge and settings/);
  assert.match(trust, /Human Oversight/);
  assert.match(trust, /Define what the Agent can handle and when your team should take over/);
  assert.doesNotMatch(trust, /href="\/legal\/privacy"|Read our privacy policy|<svg/);
  assert.match(trust, /aria-label="Data protection and control principles"/);
  assert.equal((trust.match(/<li>/g) || []).length, 3);
  const typographyRoles = await readFile(new URL('../lib/public-marketing-typography.ts', import.meta.url), 'utf8');
  assert.match(typographyRoles, /'#home-data-trust-heading'/);
  assert.match(typographyRoles, /'#home-data-trust-heading \+ p'/);
  assert.ok(source.indexOf('<HomeTrustPanel />') < source.indexOf('<HomeEducationFaq />'), 'homepage trust belongs immediately before the FAQ');
  const originalAppSource = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  for (const route of requestedRoutes.slice(10)) assert.ok(originalAppSource.includes(`'/${route}'`), `${route} is covered by the trust-panel relocation`);
  assert.match(originalAppSource, /querySelectorAll<HTMLElement>\('\.si-sierra-stage--trust'\)/);
  assert.match(originalAppSource, /section\.hidden = true;[\s\S]*section\.setAttribute\('inert', ''\)/);
  assert.match(originalAppSource, /correctIndustryTrustPlacement\(root\)/);
  assert.match(originalAppSource, /querySelectorAll<HTMLElement>\('\.solutions-insurance-page \.si-location-trail'\)/);
  assert.match(originalAppSource, /\.forEach\(\(trail\) => trail\.remove\(\)\)/);
  assert.match(originalAppSource, /removeWhoWeServeBreadcrumb\(root\)/);
  assert.equal(exports.HOME_SELECTION_STEPS.length, 4);
  assert.equal((body.match(/<div class="stageVisual">/g) || []).length, 4);
  assert.equal((body.match(/<article class="stageCopy">/g) || []).length, 4);
  assert.match(body, /<h2 id="home-selection-approach"><span>From Data<\/span><span>To Recommendation<\/span><\/h2>/);
  assert.match(body, /The Agent structures approved product data, clarifies buyer needs, identifies the closest supported match and turns interest into a qualified enquiry/);
  assert.match(body, /<ol class="stages" aria-label="Ingest, Reason, Retrieve, Recommend: from data to recommendation">/);
  assert.doesNotMatch(body, /From your catalogue to|a suitable shortlist/);
  assert.equal((body.match(/class="selectionOverview"/g) || []).length, 4);
  assert.match(body, /Structure product data/);
  assert.match(body, /Clarify buyer needs/);
  assert.match(body, /Identify closest match/);
  assert.match(body, /Capture buyer intent/);
  assert.match(body, /Turn approved catalogues, specifications and diagrams into structured data the Agent can use/);
  assert.match(body, /Identify confirmed requirements, missing details and the next question to ask before matching/);
  assert.match(body, /Systematically compare confirmed requirements with approved catalogue and connected inventory data/);
  assert.match(body, /capture the buyer’s interest as a qualified enquiry for your team/);
  assert.match(body, /Approved catalogue/);
  assert.match(body, /What platform height do you need\?/);
  assert.match(body, /Telescopic or articulating\?/);
  assert.match(body, /94% · highest score selected/);
  assert.match(body, /Your team should confirm the 230 kg platform load, availability and hire terms before quotation/);
  assert.doesNotMatch(body, /reach coordinates|Reasoning \+ decision layer|7 mixed equipment records|recommendPhone/);
  const educationCss = await readFile(new URL('../app/home-education.module.css', import.meta.url), 'utf8');
  assert.doesNotMatch(educationCss, /\.stages::before/, 'the alternating layout does not restore the previous timeline rule');
  assert.match(educationCss, /\.stages \{ --reason-stage: #0f8f87;/);
  assert.match(educationCss, /\.stages li:nth-child\(2\) \{ --stage-color: var\(--reason-stage\); \}/);
  assert.match(educationCss, /\.stages li:nth-child\(4\) \{ --stage-color: var\(--red\); \}/);
  assert.match(educationCss, /\.stages \{[^}]*max-width: 1120px;[^}]*gap: 84px;[^}]*margin: 72px auto 0/);
  assert.match(educationCss, /\.approach \.intro \{[^}]*max-width: 1120px;[^}]*margin-inline: auto;[^}]*text-align: center/,
    'the locked process layout retains the centred section introduction');
  assert.match(educationCss, /\.approach \.intro h2 > span \{ display: block; \}/,
    'the process heading keeps the requested two-line structure');
  assert.doesNotMatch(educationCss, /\.selectionEmphasis|background-clip: text/,
    'the process heading no longer uses a gradient treatment');
  assert.match(educationCss, /\.stages li \{[^}]*display: grid;[^}]*grid-template-columns: minmax\(0, 1\.25fr\) minmax\(0, 1fr\);[^}]*gap: 72px/);
  assert.match(educationCss, /\.stages li:nth-child\(even\) \.stageVisual \{ grid-column: 2; grid-row: 1; \}/);
  assert.match(educationCss, /\.stages li:nth-child\(even\) \.stageCopy \{ grid-column: 1; grid-row: 1; \}/);
  assert.match(educationCss, /\.stageVisual \{[^}]*height: 410px;[^}]*border-radius: 24px;[^}]*box-shadow: none/);
  assert.match(educationCss, /\.stageVisual \{[^}]*border: 0;[^}]*background: linear-gradient\(180deg,[^}]*var\(--stage-color\) 26%, var\(--canvas\)[^}]*transparent 100%/,
    'the four process graphics use borderless stage-colour washes that fade away toward the bottom');
  assert.doesNotMatch(educationCss, /\.stageVisual \{[^}]*border: 1px solid/,
    'the outer process graphic panels do not retain an outline');
  assert.match(educationCss, /\.stages h3 \{[^}]*font-size: clamp\(30px, 3vw, 42px\)/, 'step titles retain the established alternating-layout hierarchy');
  assert.match(educationCss, /@media \(max-width: 1100px\)[\s\S]*?\.stageVisual \{ height: 360px; \}/, 'compact desktop retains large process graphics');
  assert.match(educationCss, /@media \(max-width: 767px\)[\s\S]*?\.stages li \.stageVisual, \.stages li:nth-child\(even\) \.stageVisual \{ grid-column: 1; grid-row: 2; \}/,
    'mobile keeps each explanation before its matching graphic');
  assert.match(educationCss, /@media \(max-width: 767px\)[\s\S]*?\.stageVisual \{ height: 310px; border-radius: 20px; \}/);
  for (const path of requestedRoutes.slice(10)) assert.ok(body.includes(`href="/${path}"`), path);
  for (const path of ['ai-agent', 'ai-webstore-suite']) assert.ok(body.includes(`href="/${path}"`));
  assert.doesNotMatch(body, /href="\/ai-agent-console"/, 'the removed Console note must not leave a hidden destination');
  assert.doesNotMatch(faq, /href="\/book-a-demo"|Book a Demo/, 'the homepage FAQ no longer renders a demo action');
  assert.equal((body.match(/<h2\b/g) || []).length, 4);
  const gapHtml = renderToStaticMarkup(react.createElement(gap.HomeEnquiryGap));
  const marketHtml = renderToStaticMarkup(react.createElement(market.HomeMarketShift));
  const foundationsHtml = renderToStaticMarkup(react.createElement(foundations.HomeAgentFoundations));
  // React may hoist an image preload before the first section.
  const bodySections = body.replace(/<link\b[^>]*>/g, '');
  assert.match(bodySections, /^<section class="section" aria-labelledby="home-agent-foundations">/, 'the four foundations are the first body section immediately after the hero');
  assert.doesNotMatch(body, /data-home-emma-placement=""/, 'the Emma inventory card no longer interrupts the educational body');
  assert.ok(
    faq.indexOf('aria-labelledby="home-faq-heading"') < faq.indexOf('data-home-emma-placement=""'),
    'the existing Emma inventory card follows the complete homepage FAQ',
  );
  assert.doesNotMatch(body, /home-industrial-context|Built for the complexity of industrial products|Industrial product knowledge/);
  assert.match(source, /placement\.appendChild\(emma\)/);
  assert.match(source, /originalParent\.insertBefore\(emma, originalNextSibling\)/);
  assert.match(educationCss, /\.emmaPlacement \{ display: contents; \}/);
  assert.doesNotMatch(body, /home-market-shift|AI Is Changing|Industrial Enquiries Start Online/, 'the removed Market Shift section must not render on the homepage');
  assert.equal(foundations.AGENT_FOUNDATIONS.length, 4);
  assert.equal((foundationsHtml.match(/<article\b/g) || []).length, 4);
  assert.match(foundationsHtml, /Built around your business/);
  assert.match(foundationsHtml, /One AI Agent. <span>Built Around Your Products.<\/span>/);
  assert.match(foundationsHtml, /Antbuildz AI uses your products, inventory, company knowledge and workflows to understand customer requirements and guide each conversation/);
  for (const title of ['Your brand and voice', 'Products and connected inventory', 'Product and technical knowledge', 'Sales, rental and support workflows']) assert.ok(foundationsHtml.includes(title));
  for (const supersededTitle of ['Company Brand', 'Product Catalogue', 'Technical Specifications', 'SOPs and Process Knowledge']) assert.ok(!foundationsHtml.includes(`>${supersededTitle}<`));
  assert.match(foundationsHtml, /Keep sales, rental and support conversations aligned with your company voice and approved guidance/);
  assert.match(foundationsHtml, /Connect AI Webstore Suite, your inventory or supported sources/);
  assert.match(foundationsHtml, /Ask for missing requirements before suggesting a fit/);
  assert.match(foundationsHtml, /approved sales and rental rules, qualification steps and support procedures, with clear handover when your team needs to step in/);
  assert.match(foundationsHtml, /Following your SOP/);
  assert.match(foundationsHtml, /hand over for team approval/);
  assert.doesNotMatch(foundationsHtml, /Suitable recommendations|Option to review|Based on supplied data/);
  assert.doesNotMatch(foundationsHtml, /Illustrative shortlist|Illustrative workflows/);
  assert.doesNotMatch(foundationsHtml, /guaranteed|100%|real-time|trained on|<button\b|<input\b|<form\b/i);
  assert.match(foundationsHtml, /src="\/images\/emma-sales-agent.jpg"/);
  const foundationsCss = await readFile(new URL('../app/home-agent-foundations.module.css', import.meta.url), 'utf8');
  assert.match(foundationsHtml, /<div class="introFrame"><div class="intro">/, 'the second-section introduction owns a separate header-aligned rail');
  assert.match(foundationsCss, /\.introFrame \{ width: min\(1250px, 90vw\); margin-inline: auto; \}/,
    'the second-section introduction follows the shared wide and compact header rail');
  assert.match(foundationsCss, /@media \(max-width: 767px\)[\s\S]*?\.introFrame \{ width: min\(1250px, 90vw\); \}/,
    'the second-section introduction follows the live-site five-percent rail');
  assert.match(foundationsCss, /\.intro \{ max-width: 1120px;/, 'the second-section introduction has room for the supplied copy');
  assert.match(foundationsCss, /\.intro > p:last-child \{ max-width: none;/, 'the second-section description uses the full introduction width');
  assert.doesNotMatch(foundationsCss, /\.inventory\s*\{[^}]*transform:\s*scale\(\.8\)/, 'the product-catalogue card retains its full grid size');
  assert.match(foundationsCss, /grid-column: span 2/);
  assert.match(foundationsCss, /max-width: 767px/);
  assert.match(foundationsCss, /grid-template-columns: minmax\(0, 1fr\)/);
  assert.match(foundationsCss, /\.grid \{ display: grid; grid-template-columns: repeat\(3, minmax\(0, 1fr\)\); gap: 24px; \}/);
  assert.match(foundationsCss, /\.scene \{ min-width: 0; min-height: 296px; flex: 1; padding: 32px;[^}]*transform: scale\(\.9\); transform-origin: center;/);
  assert.match(foundationsCss, /@media \(min-width: 980px\) \{[\s\S]*?\.frame \{ width: 76\.5%; max-width: 1470px; zoom: \.85; \}/,
    'the scaled desktop composition is capped to the 1250px content rail on ultrawide screens');
  assert.match(foundationsCss, /\.buyerMessage \{ align-self: flex-end/);
  assert.match(foundationsCss, /\.agentMessage \{ align-self: flex-start/);
  assert.doesNotMatch(body, /home-enquiry-gap|Why Industrial Product Enquiries/, 'the removed Gap section must not render on the homepage');
  assert.equal((marketHtml.match(/<article\b/g) || []).length, 4);
  for (const title of ['Industrial Enquiries Start Online', 'Fast Product Answers Are Expected', 'Product Discovery Is Self-Directed', 'AI Helps Shape Supplier Shortlists']) assert.ok(marketHtml.includes(title));
  assert.match(marketHtml, /AI Is Changing<\/span> How Industrial Buyers Choose/);
  assert.match(marketHtml, /aria-labelledby="home-market-shift"/);
  assert.doesNotMatch(marketHtml, /Pause Market Shift illustrations|Pause illustrations/);
  assert.doesNotMatch(marketHtml, /Illustrative buyer journey, not live search results/);
  assert.doesNotMatch(marketHtml, /&lt; 30s|>92<|>78<|>64</);
  assert.equal((marketHtml.match(/lg:mt-20/g) || []).length, 2, 'alternate desktop cards retain their stagger');
  const marketCss = await readFile(new URL('../app/home-market-shift.module.css', import.meta.url), 'utf8');
  assert.match(marketCss, /max-width: 1179px/);
  assert.match(marketCss, /grid-template-columns: repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(marketCss, /prefers-reduced-motion: reduce/);
  // Retain coverage for the preserved, unmounted Gap component without rendering it on the homepage.
  assert.equal((gapHtml.match(/<article\b/g) || []).length, 6);
  assert.match(gapHtml, /Why Industrial Product Enquiries/);
  for (const title of ['Weak Product Page Conversion', 'Poor Product Search Visibility', 'Unstructured Product Information', 'No Clear Enquiry or Quote Path', 'Too Much Manual Sales Dependence', 'Slow Buyer Experience']) assert.ok(gapHtml.includes(title));
  assert.match(gapHtml, /aria-labelledby="home-enquiry-gap"/);
  assert.match(gapHtml, /aria-pressed="false"/);
  assert.match(gapHtml, /Pause illustrations/);
  const gapCss = await readFile(new URL('../app/home-enquiry-gap.module.css', import.meta.url), 'utf8');
  assert.match(gapCss, /prefers-reduced-motion: reduce/);
  assert.match(gapCss, /animation-play-state: paused/);
  assert.equal((body.match(/<table\b/g) || []).length, 0, 'the user-removed selection comparison must stay absent');
  assert.equal((faq.match(/<details\b/g) || []).length, 5);
  assert.equal((faq.match(/<summary\b/g) || []).length, 5);
  assert.match(faq, /si-sierra-stage--faqs/);
  assert.match(faq, /si-sierra-heading--centered/);
  assert.equal((faq.match(/class="si-sierra-faq-item"/g) || []).length, 5);
  assert.equal((faq.match(/class="si-sierra-faq-answer"/g) || []).length, 5);
  assert.doesNotMatch(faq, /ai-faq-copy|ai-faq-pill|ai-faq-item|ai-faq-layout/);
  assert.match(educationCss, /\.faq :global\(\.si-sierra-faq-list\)/, 'homepage FAQ styling must not depend on visiting an industry route first');
  assert.match(educationCss, /prefers-reduced-motion: reduce/);
  assert.doesNotMatch(educationCss, /\.faqActions|\.faq \.demo/, 'removed FAQ action styles do not leave dead CSS');
  for (const [question, answer] of exports.HOME_QUESTIONS) {
    assert.ok(faq.includes(question));
    assert.ok(faq.includes(answer));
  }
  assert.doesNotMatch(html, /<h1\b|<iframe\b|<form\b|<video\b|aria-sales-agent-cta|ai-marketplace-hero|guaranteed/i);
  assert.doesNotMatch(html, /Marketplace/i, 'the educational copy keeps its Antbuildz AI scope');
  assert.equal((body.match(/<img\b/g) || []).length, 18, 'all reused local product, Emma and industry images remain present');
  for (const src of [...body.matchAll(/<img[^>]+src="([^"]+)"/g)].map(match => match[1])) {
    assert.ok(src.startsWith('/images/verified-equipment/') || src.startsWith('/images/solution-') || src === '/images/emma-sales-agent.jpg');
    assert.ok((await readFile(new URL(`../public${src}`, import.meta.url))).length > 0);
  }
  assert.equal((body.match(/role="img"/g) || []).length, 2, 'the remaining source-owned product graphics have accessible descriptions');
  assert.doesNotMatch(body, /Illustrative AI-guided enquiry/);
  assert.match(graphicsSource, /Emma using connected Webstore catalogue information to identify that no listed electric forklift is confirmed for a buyer's five-tonne requirement/);
  assert.match(body, /What lift height, aisle width and hire period do you need\?/);
  assert.match(body, /Webstore catalogue checked/);
  assert.match(body, /No confirmed 5 t match/);
  assert.match(body, /Your listed electric forklifts do not meet the 5 t requirement/);
  assert.match(body, /confirm a suitable model and availability/);
  assert.match(body, /Ready for review/);
  assert.doesNotMatch(body, /Illustrative storefront/);
  assert.match(body, /Turn your catalogue into a sales channel<\/h3>/);
  assert.match(body, /Structure products, specifications and inventory so customers can discover them and your AI Agent can recommend supported options\./);
  assert.doesNotMatch(body, /Your team confirms technical suitability, availability and commercial terms before quotation\./);
  assert.doesNotMatch(graphicsSource, /setInterval|setTimeout|requestAnimationFrame|@remotion|<button\b|<a\b/, 'illustrations are static and do not impersonate controls');
  assert.match(body, /The Agent structures approved product data, clarifies buyer needs, identifies the closest supported match and turns interest into a qualified enquiry\./);
  assert.doesNotMatch(body, /The Agent structures that information/);
  assert.doesNotMatch(body, /Similarity-only retrieval/);
  assert.doesNotMatch(body, /Illustrative selection example|Generic options; outcomes depend|The shortlist and enquiry details support your sales team/);
  assert.deepEqual(Array.from(exports.HOME_SELECTION_STEPS, ([title]) => title), ['Ingest', 'Reason', 'Retrieve', 'Recommend']);
  assert.match(body, /aria-label="Ingest, Reason, Retrieve, Recommend: from data to recommendation"/);
  for (const [title, label, description] of exports.HOME_SELECTION_STEPS) {
    assert.ok(body.includes(`>${title}</span>`));
    assert.ok(body.includes(`<h3>${label}</h3>`));
    assert.ok(body.includes(description));
    assert.ok(description.split(/\s+/).length <= 22, 'each step stays concise');
  }
  assert.match(body, /Turn approved catalogues, specifications and diagrams into structured data the Agent can use/);
  assert.match(body, /Identify confirmed requirements, missing details and the next question to ask before matching/);
  assert.match(body, /Systematically compare confirmed requirements with approved catalogue and connected inventory data to identify the closest supported match/);
  assert.match(body, /Recommend the closest supported product, explain why it matches and capture the buyer’s interest as a qualified enquiry for your team/);
  assert.match(body, /Teupen LEO 23GT/);
  assert.match(body, /Technical specification &amp; working envelope/);
  assert.match(body, /Working height/);
  assert.match(body, /Horizontal outreach/);
  assert.match(body, /Minimum width/);
  assert.match(body, /AI-readable Markdown/);
  assert.match(body, /teupen-leo-23gt\.md/);
  assert.match(body, /<em>#<\/em> Teupen LEO 23GT/);
  assert.match(body, /<em>##<\/em> Measurements/);
  assert.match(body, /\| Working height \| 23\.00 m \|/);
  assert.match(body, /\| Outreach \| 11\.20 m \|/);
  assert.match(body, /\| Min\. width \| 0\.98 m \|/);
  assert.match(body, /Ready for Agent retrieval/);
  assert.doesNotMatch(body, /Ready for approved use|Product details<\/b><i>Mapped|Technical fields<\/b><i>Mapped/);
  assert.match(body, /“I need a boom lift\.”/);
  assert.match(body, /Required height is not yet known/);
  assert.match(body, /Boom type depends on the task/);
  assert.match(body, /Clarify before matching/);
  assert.match(body, /No product recommended yet/);
  assert.doesNotMatch(body, /5 t electric forklift for warehouse use|Rated load · power|Lift · aisle · load|Ask for site constraints/);
  assert.match(body, /Scanning approved listings/);
  assert.match(body, /Articulating boom · required height confirmed/);
  assert.match(body, /Boom type/);
  assert.match(body, /Platform height/);
  assert.match(body, /Approved records/);
  for (const listing of ['Toyota 8FBMT50', 'JCB 540-180', 'Genie GS-4047', 'JLG E450AJ', 'LGMG AR20JE-2']) assert.match(body, new RegExp(listing.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  assert.match(body, />Confidence</);
  for (const score of ['8', '14', '21', '78', '94']) assert.match(body, new RegExp(`aria-label="${score}% confidence">${score}%`));
  assert.match(body, /class="overviewOptionActive"><b>LGMG AR20JE-2<\/b><small>Articulating boom<\/small><i aria-label="94% confidence">94%<\/i>/);
  assert.match(body, /Highest confidence/);
  assert.match(body, /94% · highest score selected/);
  assert.doesNotMatch(body, /Category gap|Height review|Closest record|Closest supported record · ready to explain/);
  assert.match(body, /Which lift suits indoor ceiling maintenance\?/);
  assert.match(body, /closest supported option is a compact electric scissor lift/);
  assert.match(body, /Recommendation explained/);
  assert.match(body, /Working height · electric · access/);
  assert.match(body, /Your team should confirm the 230 kg platform load, availability and hire terms before quotation/);
  assert.match(body, /Suitability · availability · commercial terms/);
  assert.match(body, /Prepared/);
  assert.doesNotMatch(body, /intent_extraction|technical_query_deepening|function_router|general_classifier|TOTAL_TOKENS|COST_USD|openai\/|google\/|chain-of-thought/i);
  assert.doesNotMatch(body, /Hyster J3\.5XN|Linde H50D|Bobcat E50z|recommendPhone/);
  const graphicsCss = await readFile(new URL('../app/home-graphics.module.css', import.meta.url), 'utf8');
  assert.match(graphicsCss, /\.selectionOverview \{[^}]*height: 100%;[^}]*place-items: center/);
  assert.match(graphicsCss, /\.overviewReasonQuestions b \{[^}]*font-family: var\(--font-heading\);[^}]*font-size: clamp\(9px, \.94vw, 12\.5px\)/);
  assert.match(graphicsCss, /\.overviewFlow \{[^}]*grid-template-columns: minmax\(0, \.9fr\) 42px minmax\(0, 1\.1fr\)/);
  assert.match(graphicsCss, /\.overviewMarkdown code \{[^}]*font-family: ui-monospace/);
  assert.match(graphicsCss, /\.overviewIngestArrow > small \{[^}]*text-transform: uppercase/);
  assert.match(graphicsCss, /\.overviewStack \{[^}]*display: grid;[^}]*gap: clamp\(9px, 1\.2vw, 14px\)/);
  assert.match(graphicsCss, /\.overviewOptions \.overviewOptionActive \{[^}]*background: color-mix/);
  assert.match(graphicsCss, /\.overviewOptions i \{[^}]*font-variant-numeric: tabular-nums;[^}]*font-weight: 750/);
  assert.match(graphicsCss, /\.overviewOptions > span:nth-of-type\(5\) \{ --scan-delay: 2\.48s; \}/);
  assert.match(graphicsCss, /@keyframes overviewListingScan/);
  assert.match(graphicsCss, /@keyframes overviewListingScanClosest/);
  assert.match(body, /class="agentPanel overviewPhone"/);
  assert.match(graphicsCss, /\.overviewPhoneCrop \{[^}]*overflow: hidden;[^}]*mask-image: linear-gradient/);
  assert.match(graphicsCss, /\.overviewPhone \{[^}]*width: min\(72%, 340px\);[^}]*height: 470px;[^}]*border-radius: 34px/);
  assert.match(graphicsCss, /@keyframes overviewTransfer/);
  assert.match(graphicsCss, /prefers-reduced-motion: reduce[\s\S]*?\.overviewArrow i, \.overviewOptions > span \{ animation: none; \}/);
  assert.match(body, /branded industrial storefront/);
  assert.match(body, /AI Agent \+ AI Webstore Suite/);
  assert.match(body, /AI That Understands/);
  assert.match(body, /What You Sell/);
  assert.match(body, /Built around equipment rental and industrial sales, Antbuildz AI handles products where specifications, applications, compatibility and availability shape the decision/);
  const productSection = body.split('aria-labelledby="home-product-relationship"')[1].split('</section>')[0];
  assert.match(productSection, /class="intro productIntro"/);
  assert.match(educationCss, /\.productIntro \{ max-width: none; \}/);
  assert.match(educationCss, /\.productIntro > p:last-child:not\(\.eyebrow\) \{ width: 100%; max-width: none; \}/);
  assert.match(productSection, /<article class="agentProduct">/);
  assert.match(productSection, /<div class="productConnector" aria-hidden="true"><span class="connectorTrack"><span class="connectorPulse"><\/span><\/span><\/div>/);
  assert.doesNotMatch(productSection, /Webstore plugs into Agent/);
  assert.match(productSection, /<article class="webstoreProduct">/);
  assert.doesNotMatch(productSection, /Manage your agent’s knowledge, instructions and conversations through|AI Agent Console/);
  assert.ok(productSection.indexOf('agentProduct') < productSection.indexOf('webstoreProduct'));
  assert.ok(productSection.indexOf('Built around equipment rental') < productSection.indexOf('class="products"'), 'the relationship description belongs directly below its title');
  const productCards = [...productSection.matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/g)];
  assert.equal(productCards.length, 2);
  for (const [index, path] of ['ai-agent', 'ai-webstore-suite'].entries()) {
    assert.equal((productCards[index][1].match(/<a\b/g) || []).length, 1, 'each card has one native focusable destination');
    assert.ok(productCards[index][1].includes(`href="/${path}"`));
  }
  const productDescriptions = productCards.map(([, card]) => card.match(/<h3>[^<]+<\/h3><p>([^<]+)<\/p>/)?.[1] ?? '');
  assert.deepEqual(productDescriptions, [
    'Guide product choices, sales, rental and support using approved knowledge, with a clear handover to your team.',
    'Structure products, specifications and inventory so customers can discover them and your AI Agent can recommend supported options.',
  ]);
  assert.ok(productDescriptions.every(copy => copy.trim().split(/\s+/).length <= 20), 'both product descriptions stay concise');
  assert.match(productSection, /The core/);
  assert.match(productSection, /Available as an add-on/);
  assert.match(productSection, /href="\/ai-agent" aria-label="Explore AI Agent"><svg/);
  assert.match(productSection, /href="\/ai-webstore-suite" aria-label="Explore AI Webstore Suite"><svg/);
  assert.doesNotMatch(productSection, />AI (?:Sales Agent|Webstore Suite) <svg/,
    'the card destinations use icon-only controls rather than repeated visible labels');
  assert.doesNotMatch(productSection, />Explore AI (?:Sales Agent|Webstore Suite)/);
  assert.match(productSection, /Guide product conversations/);
  assert.match(productSection, /Turn your catalogue into a sales channel/);
  assert.match(productSection, /customers compare complex products and find a supported match/);
  assert.doesNotMatch(productSection, /Your team confirms technical suitability, availability and commercial terms before quotation/);
  assert.doesNotMatch(productSection, /guaranteed|100%|real-time|always accurate/i);
  assert.match(educationCss, /grid-template-columns: minmax\(0, 1\.2fr\) clamp\(76px, 7vw, 104px\) minmax\(0, 1fr\)/);
  assert.match(educationCss, /\.products article \{[^}]*border: 0/);
  assert.match(educationCss, /\.products \.textLink \{[^}]*width: 52px;[^}]*height: 52px;[^}]*margin-left: auto;[^}]*border-radius: 50%/);
  assert.match(educationCss, /\.products \.textLink svg \{[^}]*transform: rotate\(-45deg\)/);
  assert.match(educationCss, /\.productConnector \{[^}]*padding-inline: 0;[^}]*overflow: visible/);
  assert.match(educationCss, /\.connectorTrack \{[^}]*border-top: 1px dotted/);
  assert.match(educationCss, /\.connectorTrack::before, \.connectorTrack::after \{[^}]*width: 4px;[^}]*height: 4px/);
  assert.match(educationCss, /@media \(min-width: 768px\)[\s\S]*?\.products \.webstoreProduct \{[^}]*transform: scale\(\.8\);[^}]*transform-origin: left center/,
    'the smaller Webstore card stays anchored to the connector-facing edge');
  assert.match(educationCss, /@keyframes webstoreIntoAgent \{[^}]*left: calc\(100% - 6px\)/);
  assert.match(educationCss, /@media \(max-width: 767px\)[\s\S]*?\.connectorTrack \{[^}]*height: 100%;[^}]*border-left: 1px dotted/);
  assert.match(educationCss, /@media \(max-width: 767px\)[\s\S]*?\.connectorTrack::before \{ top: -2px; \}[\s\S]*?\.connectorTrack::after \{[^}]*bottom: -2px/);
  assert.match(educationCss, /@keyframes webstoreIntoAgentMobile/);
  assert.match(educationCss, /prefers-reduced-motion: reduce[\s\S]*?\.connectorPulse \{[^}]*animation: none/);
  assert.match(educationCss, /\.products \.agentProduct \{[\s\S]*?background: linear-gradient\(145deg, #fffdf4 0%, #fff 54%, #fff7f4 100%\)/, 'the primary Agent card uses the restrained warm tint');
  assert.match(educationCss, /\.products \.webstoreProduct \{[\s\S]*?background: linear-gradient\(145deg, #f8f5ff 0%, #fff 56%, #f3f8ff 100%\)/, 'the secondary Webstore card uses the restrained violet-blue tint');
  assert.match(graphicsCss, /\.productScene \{[^}]*height: 252px;[^}]*margin: 0 0 28px/s);
  assert.match(graphicsCss, /\.productScene \{ height: 232px; margin: 0 0 24px; \}/);
  assert.match(graphicsCss, /\.agentScene \{[^}]*height: 332px/);
  assert.match(graphicsCss, /\.agentScene \{[^}]*background: transparent/);
  assert.match(graphicsCss, /@media \(max-width: 1100px\)[\s\S]*?\.agentScene \{ height: 320px/);
  assert.match(graphicsCss, /@media \(max-width: 767px\)[\s\S]*?\.agentScene \{ height: 280px/);
  assert.match(graphicsCss, /\.agentInventoryCheck \{[^}]*width: 88%/);
  assert.match(graphicsCss, /\.agentPhoneCrop \{[^}]*mask-image: linear-gradient\(to bottom/);
  assert.match(graphicsCss, /\.agentPanel \{[^}]*width: min\(60%, 360px\); height: 560px/);
  assert.match(graphicsCss, /\.agentPanel::before \{[^}]*border-radius: 999px/);
  assert.match(productSection, /class="agentPhoneCrop"/);
  assert.match(graphicsCss, /\.storeWindow \{ width: 100%; border-radius: 12px/);
  assert.match(graphicsCss, /\.storeProductMedia \{[^}]*height: 76px;[^}]*overflow: hidden/);
  assert.match(graphicsCss, /\.storeProducts > div:nth-child\(1\) \{ --store-product-scale: \.78; \}/);
  assert.match(graphicsCss, /\.storeProducts > div:nth-child\(2\) \{ --store-product-scale: 1\.15; \}/);
  assert.match(graphicsCss, /\.storeProducts > div:nth-child\(3\) \{ --store-product-scale: 1\.65; \}/);
  assert.match(educationCss, /\.products \.textLink::after \{[^}]*position: absolute; inset: 0/);
  assert.match(educationCss, /\.products \.textLink:focus-visible::after \{ outline: var\(--menu-focus\)/);
  assert.match(educationCss, /@media \(min-width: 768px\) \{\s*\.products \.webstoreProduct \{[^}]*transform: scale\(\.8\); transform-origin: left center/);
  assert.match(educationCss, /\.industryGrid \{[^}]*overflow-x: auto;[^}]*scroll-snap-type: x mandatory/);
  assert.match(educationCss, /\.industryCarousel \{[^}]*position: relative;[^}]*width: min\(95vw, calc\(50vw \+ 660px\)\)/);
  assert.match(educationCss, /@media \(max-width: 767px\)[\s\S]*\.industryCarousel \{[^}]*width: 100%/);
  assert.match(educationCss, /\.industryControls \{[^}]*position: absolute;[^}]*inset: 0/);
  assert.match(educationCss, /\.industryControls button \{[^}]*top: 50%;[^}]*transform: translateY\(-50%\)/);
  assert.match(educationCss, /\.industryCard \{[^}]*flex: 0 0 calc\(70% - 8px\);[^}]*scroll-snap-align: start/);
  assert.match(educationCss, /\.industryCard \{[^}]*box-shadow: none/);
  assert.match(educationCss, /\.industryCard img \{[^}]*object-fit: cover;[^}]*filter: saturate\(\.24\) brightness\(1\.28\) contrast\(\.78\)/);
  assert.match(educationCss, /\.industryCard\[data-active='true'\] img \{ filter: none/);
  assert.match(source, /data-active=/, 'industry cards expose the active visual state');
  assert.match(source, /onFocus=/, 'keyboard focus promotes an industry card into the active position');
  assert.match(educationCss, /\.trustPanel \{[^}]*grid-template-columns: minmax\(0, 1fr\);[^}]*border-radius: 28px/);
  assert.doesNotMatch(educationCss, /\.trustMark|\.trustReview|\.trustAssurances svg/);
  assert.match(educationCss, /@media \(max-width: 767px\)[\s\S]*\.trustPanel \{[^}]*grid-template-columns: 1fr/);
  assert.doesNotMatch(body, /Illustrative records|Illustrative answer/);
  // The original brief's copy budget excludes later explicitly requested section transfers; the upper allowance also includes the expanded, fact-checked UI labels and three-option recommendation table inside the four process illustrations.
  const words = html.replace(trust, '').replace(marketHtml, '').replace(foundationsHtml.replace(/<link\b[^>]*>/g, ''), '').replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').trim().split(/\s+/).length;
  assert.ok(words >= 500 && words <= 1100, `Expected 500–1,100 words including illustration labels, received ${words}`);
  const page = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8');
  const productPage = await readFile(new URL('../app/[slug]/page.tsx', import.meta.url), 'utf8');
  assert.match(page, /<OriginalAntbuildzApp\s*\/>[\s\S]*?<HomeEducation\s*\/>/);
  assert.doesNotMatch(productPage, /HomeEducation/);
});

test('homepage mounts beside protected sections, restores legacy nodes and remains route-isolated', async () => {
  class Element {
    constructor(key) {
      this.key = key; this.children = []; this.parentElement = null; this.dataset = {};
      this.attributes = new Map(); this.classes = new Set();
      this.classList = { add: value => this.classes.add(value), remove: value => this.classes.delete(value) };
    }
    getAttribute(name) { return this.attributes.get(name) ?? null; }
    setAttribute(name, value) { this.attributes.set(name, value); }
    removeAttribute(name) { this.attributes.delete(name); }
    querySelector(selector) { return this.children.find(e => selector === `:scope > ${e.key}`) ?? null; }
    insertAdjacentElement(position, element) {
      assert.ok(position === 'afterend' || position === 'beforebegin');
      element.parentElement = this.parentElement;
      const offset = position === 'afterend' ? 1 : 0;
      this.parentElement.children.splice(this.parentElement.children.indexOf(this) + offset, 0, element);
    }
    remove() {
      if (this.parentElement) this.parentElement.children.splice(this.parentElement.children.indexOf(this), 1);
      this.parentElement = null;
    }
  }
  const main = new Element('main');
  const [hero, industries, emma, faq] = ['.ai-hero-section', '.antbuildz-home-industries', '#meet-aria', '.ai-faq-section'].map(key => new Element(key));
  main.children = [hero, industries, emma, faq];
  main.children.forEach(e => { e.parentElement = main; });
  faq.setAttribute('hidden', 'until-found');
  const root = { querySelector: selector => selector === '.ai-platform-page > main' ? main : null };
  const window = { location: { pathname: '/ai-webstore-suite' }, addEventListener() {}, removeEventListener() {} };
  let notify; let disconnected = false;
  const MutationObserver = class {
    constructor(callback) { notify = callback; }
    observe(element, options) { assert.equal(element, root); assert.deepEqual(JSON.parse(JSON.stringify(options)), { childList: true, subtree: true }); }
    disconnect() { disconnected = true; }
  };
  const exports = {};
  const source = await readFile(new URL('../lib/home-education-mount.ts', import.meta.url), 'utf8');
  const code = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS } }).outputText;
  runInNewContext(code, { exports, window, MutationObserver, document: { createElement: () => new Element('slot') } });
  const changes = [];
  const dispose = exports.mountHomeEducation(root, 'retired', value => changes.push(value));
  assert.equal(changes.length, 0, 'other routes must not mount content');
  window.location.pathname = '/'; notify();
  const targets = changes[0];
  assert.deepEqual(main.children, [hero, targets.body, industries, targets.faq, emma, faq]);
  assert.equal(industries.getAttribute('hidden'), '');
  assert.equal(faq.getAttribute('inert'), '');
  assert.equal(hero.attributes.size, 0);
  assert.equal(emma.attributes.size, 0);
  notify(); notify();
  assert.equal(changes.length, 1, 'animation mutations must not recreate portal targets');
  window.location.pathname = '/pricing'; notify();
  assert.equal(changes.at(-1), null);
  assert.deepEqual(main.children, [hero, industries, emma, faq]);
  assert.equal(industries.getAttribute('hidden'), null);
  assert.equal(faq.getAttribute('hidden'), 'until-found');
  assert.equal(faq.getAttribute('inert'), null);
  window.location.pathname = '/'; notify();
  assert.equal(main.children.length, 6, 'returning home mounts exactly two slots');
  dispose();
  assert.equal(disconnected, true);
  assert.deepEqual(main.children, [hero, industries, emma, faq]);
});

test('demo and account-entry forms share the lean form system without decorative eyebrows', async () => {
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(css, /\.marketing-auth__eyebrow,[\s\S]*?\.book-demo-story__eyebrow,[\s\S]*?\.book-demo-card__eyebrow[\s\S]*?display: none !important;/);
  assert.match(css, /\.marketing-auth--reset-password[\s\S]*?\.marketing-auth__logo \{[\s\S]*?display: none !important;/);
  assert.match(css, /\.marketing-auth__intro :is\(h1, h2\) \{[\s\S]*?font-size: clamp\(28px, 3vw, 34px\) !important;[\s\S]*?text-align: center;/);
  assert.match(css, /\.marketing-auth__field-label-row label \{[\s\S]*?font-size: 13px;[\s\S]*?line-height: 1\.4;/);
  assert.match(css, /:is\(input:not\(\[type="checkbox"\]\), \.marketing-auth__select-trigger\) \{[\s\S]*?min-height: 54px;[\s\S]*?border-color: rgb\(15 23 42 \/ 18%\);[\s\S]*?font-size: 15px;/);
  assert.match(css, /\.marketing-auth__primary-button \{[\s\S]*?min-height: 54px;[\s\S]*?background: var\(--yellow\);[\s\S]*?background-image: none;[\s\S]*?font-size: 16px;/);
  assert.match(css, /\.marketing-auth--book-demo \.book-demo-story h1 \{[\s\S]*?font-size: clamp\(40px, 4vw, 56px\) !important;/);
  assert.match(css, /\.marketing-auth--book-demo \.book-demo-story__lead \{[\s\S]*?font-size: 16px;[\s\S]*?text-align: left !important;/);
});

async function loadFaqSource(name) {
  const source = await readFile(new URL(`../lib/${name}.ts`, import.meta.url), 'utf8');
  const exports = {};
  runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, { exports });
  return exports;
}

test('AI Help owns one searchable source for the core Agent, roles, broader products and plans', async () => {
  const { HELP_FAQS, HELP_FAQ_GROUPS, searchHelpFaqs } = await loadFaqSource('help-faq-content');
  assert.equal(HELP_FAQS.length, 96);
  assert.equal(new Set(HELP_FAQS.map(faq => faq.id)).size, 96);
  for (const faq of HELP_FAQS) {
    assert.ok(HELP_FAQ_GROUPS.some(group => group.id === faq.group));
    assert.ok(faq.href.startsWith('/') && !faq.href.startsWith('//'));
    assert.doesNotMatch(`${faq.question} ${faq.answer}`, /AI Agent Only|\bAI Console\b|Antbuildz AI Sales Agent|AI Webstore Suite Suite/);
  }
  for (const query of ['instruments', 'electronics', '3D printers', 'Sales Specialist', 'Rental+', 'AI Agent Console']) {
    assert.ok(searchHelpFaqs(query).length > 0, `current terminology must be searchable: ${query}`);
  }
  assert.equal(searchHelpFaqs('unrelatedsearchwithnomatch').length, 0);
  assert.equal(searchHelpFaqs('   ').length, HELP_FAQS.length);
  assert.equal(HELP_FAQS.find(faq => faq.question === 'What is an AI Sales Agent?').href, '/ai-roles/sales-specialist');
  assert.ok(HELP_FAQS.some(faq => faq.href === '/resources/what-is-an-ai-sales-agent'));
  const route = await readFile(new URL('../app/help/ai/page.tsx', import.meta.url), 'utf8');
  const client = await readFile(new URL('../app/help/ai/help-centre.tsx', import.meta.url), 'utf8');
  assert.match(route, /mainEntity: HELP_FAQS\.map/);
  assert.match(client, /searchHelpFaqs\(query\)/);
  assert.match(client, /aria-expanded=\{open\}/);
  assert.match(client, /hidden=\{!open\}/);
});

test('industry FAQ corrections preserve controls, scope and repeated application', async () => {
  const { INDUSTRY_FAQ_CONTENT, correctIndustryFaqs } = await loadFaqSource('industry-faq-content');
  assert.equal(INDUSTRY_FAQ_CONTENT.length, 34);
  const faq = INDUSTRY_FAQ_CONTENT.find(faq => faq.originalQuestion.startsWith('Do we need'));
  let changes = 0;
  const text = { nodeType: 3, value: faq.originalQuestion, get textContent() { return this.value; }, set textContent(value) { changes++; this.value = value; } };
  const answer = { value: faq.originalAnswer, get textContent() { return this.value; }, set textContent(value) { changes++; this.value = value; } };
  const item = { querySelector: selector => selector === 'summary' ? { childNodes: [text, { nodeType: 1, textContent: '+' }] } : answer };
  const root = { querySelector: () => ({}), querySelectorAll: () => [item], ownerDocument: { querySelectorAll: () => [] } };
  correctIndustryFaqs(root, '/rental-businesses');
  assert.equal(text.textContent, faq.question);
  assert.equal(answer.textContent, faq.answer);
  assert.equal(changes, 2);
  correctIndustryFaqs(root, '/rental-businesses');
  assert.equal(changes, 2, 'unchanged answers must not trigger another mutation');
  correctIndustryFaqs({ querySelector() { assert.fail('homepage FAQs are separately owned'); } }, '/');
});

test('resource FAQs retain their 229 questions and current product naming', async () => {
  const folder = new URL('../public/resource-articles/content/', import.meta.url);
  let articles = 0, questions = 0;
  for (const name of await readdir(folder)) {
    if (!name.endsWith('.html')) continue;
    const html = await readFile(new URL(name, folder), 'utf8');
    const faq = html.match(/<h([234])[^>]*>\s*(?:FAQs?|Frequently Asked Questions)\s*<\/h\1>([\s\S]*?)(?=<h2|<h[34][^>]*>Conclusion|$)/i)?.[2];
    if (!faq) continue;
    articles++;
    questions += [...faq.matchAll(/(?:<h[34][^>]*>|<p><strong>)\d+\./g)].length;
    assert.doesNotMatch(faq, /\bAI Console\b|Antbuildz AI Webstore(?! Suite)|AI Webstore Suite Suite|80%|four main components/);
  }
  assert.equal(articles, 29);
  assert.equal(questions, 229);
  const handover = await readFile(new URL('when-ai-agents-should-hand-over-to-humans.html', folder), 'utf8');
  assert.match(handover, /when the customer requests a person/);
});

test('resource metadata shares current headings and article links avoid unpublished source files', async () => {
  const options = { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS } };
  const copy = {};
  runInNewContext(ts.transpileModule(await readFile(new URL('../lib/resource-copy.ts', import.meta.url), 'utf8'), options).outputText, { exports: copy, require:()=>({RESOURCE_TUTORIAL_CATEGORIES:[]}) });
  const seo = {};
  const tutorials = {};
  runInNewContext(ts.transpileModule(await readFile(new URL('../lib/customer-tutorials.ts', import.meta.url), 'utf8'), options).outputText, { exports: tutorials });
  runInNewContext(ts.transpileModule(await readFile(new URL('../lib/resource-seo.ts', import.meta.url), 'utf8'), options).outputText, { exports: seo, require: name => name.endsWith('customer-tutorials') ? tutorials : copy });
  const articleDirectory = new URL('../public/resource-articles/content/', import.meta.url);
  const files = (await readdir(articleDirectory)).filter(name => name.endsWith('.html'));
  const titles = new Set();
  for (const file of files) {
    const slug = file.replace(/\.html$/, '');
    const entry = seo.getResourceSeo(slug);
    assert.ok(entry, `${slug} has canonical metadata`);
    assert.equal(entry.title, `${tutorials.getCustomerTutorial(slug)?.title ?? copy.RESOURCE_POSITIONING_OVERRIDES[slug].title} | Antbuildz AI`);
    assert.ok(!titles.has(entry.title), `${slug} has a unique title`);
    titles.add(entry.title);
    assert.doesNotMatch(`${entry.title} ${entry.description}`, /\bAI Console\b|AI Agent Resources/);
    const html = await readFile(new URL(file, articleDirectory), 'utf8');
    assert.doesNotMatch(html, /href=["']\/content\/[^"']+\.md/, `${slug} links to published pages`);
  }
});
