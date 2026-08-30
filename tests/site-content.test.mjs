import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';
import { runInNewContext } from 'node:vm';

const requestedRoutes = [
  'ai-webstore-suite',
  'ai-sales-agent',
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
  assert.match(page, /rel="preload" as="image" href="\/marketplace\/how-it-works\/assets\/hero-option-2-mountain-logistics.png" fetchPriority="high"/);
});

test('shared metadata uses the approved Antbuildz browser-tab mark', async () => {
  const layout = await readFile(new URL('../app/layout.tsx', import.meta.url), 'utf8');
  assert.match(layout, /icons:\s*\{\s*icon: \[\{ url: '\/develop-admin-assets\/logo-a\.png', type: 'image\/png' \}\],\s*shortcut: '\/develop-admin-assets\/logo-a\.png'/);
  assert.doesNotMatch(layout, /favicon\.ico|lovable/i);
  await access(new URL('../public/develop-admin-assets/logo-a.png', import.meta.url));
});

test('homepage mobile refinements preserve typography and keep the hero title concise', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(source, /AI Sales Agent for industrial businesses/);
  assert.match(source, /querySelector\('\.antbuildz-ai-home-intro'\)\?\.remove\(\)/);
  assert.match(source, /textContent !== 'We Make Industrial Possible'/, 'unchanged titles must not continually trigger the root observer');
  assert.match(source, /headObserver.disconnect\(\)/);
  assert.match(source, /titleLines\[0\]\.after\(document\.createTextNode\(' '\)\)/);
  assert.match(css, /@media \(max-width: 1179px\) \{\s*\.antbuildz-ai-home \.abz-public-footer a \{[^}]*min-height: 44px/s);
  assert.match(css, /height: max\(100svh, 844px\)/);
  assert.match(css, /@media \(max-width: 767px\) \{\s*\.antbuildz-ai-home \.antbuildz-home-hero-conversation\.is-left,[\s\S]*?\.is-right,[\s\S]*?display: none/);
  assert.doesNotMatch(css, /\.antbuildz-ai-home-intro \{/);
});

test('all requested routes are included in the static route catalogue', async () => {
  const source = await readFile(new URL('../lib/site-content.ts', import.meta.url), 'utf8');
  for (const route of requestedRoutes) {
    assert.match(source, new RegExp(`['\"]${route}['\"]`), `missing route: ${route}`);
  }
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
  runInNewContext(code, { exports });
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
      { nodes: headingNodes.slice(0, 2) },
      { nodes: headingNodes.slice(2) },
    ],
  };
  exports.removeHeadingFullStops(root, '/');
  assert.equal(headingNodes[0].textContent, 'Your AI Sales Agent ');
  assert.equal(headingNodes[1].textContent, 'Your business at its core');
  assert.equal(headingNodes[2].textContent, 'AI Webstore Suite or AI Sales Agent?');
  assert.equal(headingNodes[3].textContent, 'Cimar A00F-M04-00...');

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
  setSalesAgentText(heading, ['', 'Built for Industrial Business.']);
  assert.deepEqual(heading.childNodes, originalChildren);
  assert.equal(gradient.childNodes[0], originalGradientText);
  assert.equal(gradient.textContent, 'Built for Industrial Business.');
  assert.equal(heading.childNodes[0].textContent, '');
  assert.equal(icon.textContent, 'icon title');
  Object.defineProperty(originalGradientText, 'textContent', {
    get: () => 'Built for Industrial Business.',
    set: () => assert.fail('an unchanged node should not be written again'),
  });
  setSalesAgentText(heading, ['', 'Built for Industrial Business.']);
});

test('Sales Agent copy covers animated clones and all Console states without changing other routes or CTA destinations', async () => {
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
  const demo = target('.ws-cta-btn-outline', 'Get Demo');
  demo.attributes.href = '/contact';
  const statCells = SALES_AGENT_COPY.nextSteps.map(() => {
    const prefix = copyElement('<'); const suffix = copyElement('%'); const value = copyElement('65'); const label = copyElement('Old claim');
    return { prefix, suffix, value, label,
      querySelectorAll: () => [prefix, suffix],
      querySelector: selector => selector === '.aisl-stat-label' ? label : value };
  });
  targets.set('.aisl-stat-cell', statCells);
  const metrics = copyElement();
  const queried = [];
  const page = {
    ...copyElement(),
    querySelectorAll(selector) { queried.push(selector); return targets.get(selector) ?? []; },
    querySelector: () => metrics,
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
  correctSalesAgentCopy(root, '/ai-sales-agent');
  assert.equal(page.getAttribute('data-antbuildz-sales-agent'), 'true');
  assert.equal(heroFirst.textContent, 'The AI Sales Agent');
  assert.equal(heroMiddle.textContent, '');
  assert.equal(heroLast.textContent, 'Built for Industrial Business');
  assert.equal(heading.textContent, 'AI Agent Features');
  assert.equal(closing.textContent, 'Build Your AI Sales Agent');
  assert.equal(metrics.getAttribute('data-antbuildz-capabilities'), 'true');
  assert.equal(metrics.getAttribute('aria-label'), 'AI Sales Agent capabilities');
  assert.match(featureIntro.textContent, /Available features and connections depend on your plan\./);
  for (const [visual, title, description] of SALES_AGENT_COPY.features) {
    for (const card of featureCards.get(visual)) {
      assert.equal(card.title.textContent, title);
      assert.equal(card.description.textContent, description);
    }
  }
  for (const [i, cell] of statCells.entries()) {
    assert.equal(cell.value.textContent, SALES_AGENT_COPY.nextSteps[i][0]);
    assert.equal(cell.label.textContent, SALES_AGENT_COPY.nextSteps[i][1]);
    assert.equal(cell.prefix.textContent + cell.suffix.textContent, '');
  }
  assert.equal(demo.textContent, 'Book a Demo');
  assert.equal(demo.attributes.href, '/contact');
  // Simulate both the shared label normaliser and the Console's timed updates.
  for (let active = 0; active < tabs.length; active++) {
    tabs.forEach((tab, i) => tab.setAttribute('aria-selected', String(i === active)));
    demo.attributes.href = '/book-a-demo';
    correctSalesAgentCopy(root, '/ai-sales-agent');
    assert.equal(consoleTitle.textContent, SALES_AGENT_COPY.consoleTabs[active][0]);
    assert.equal(consoleCopy.textContent, SALES_AGENT_COPY.consoleTabs[active][1]);
    assert.equal(demo.attributes.href, '/contact', 'wording changes preserve the existing action');
  }
  assert.equal(unchangedFAQ.textContent, 'Existing FAQ questionExisting FAQ answer');
  assert.ok(queried.every(selector => !/faq|header a|footer/.test(selector)));
});

test('Sales Agent capability word sizing uses the responsive heading token only inside the corrected summary', async () => {
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  const rule = css.match(/#root\.antbuildz-public-typography \.aisl-metrics\[data-antbuildz-capabilities\] \.aisl-stat-value\s*\{([^}]+)\}/);
  assert.ok(rule, 'scope the word-size correction to the Sales Agent capability summary');
  assert.equal(rule[1].trim(), 'font-size: var(--type-section-heading) !important;');
});

test('Sales Agent retains the phone track while inheriting reference description typography', async () => {
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  const hero = css.match(/#root \[data-antbuildz-sales-agent\] \.bright-hero-split\s*\{([^}]+)\}/);
  assert.match(hero[1], /grid-template-columns: minmax\(0, 1fr\) 380px/);
  assert.match(hero[1], /max-width: 1320px/);
  assert.match(css, /\[data-antbuildz-sales-agent\] \.bright-hero-title-line \{ white-space: normal; \}/);
  assert.match(css, /--type-lead: clamp\(1rem, 1\.35vw, 1\.18rem\)/);
  assert.doesNotMatch(css, /#root\.antbuildz-public-typography \[data-antbuildz-sales-agent\]/, 'reference component styles own the description sizes');
});

test('Sales Agent Console title preserves room for the gradient line descenders', async () => {
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  const rule = css.match(/#root \[data-antbuildz-sales-agent\] \.af-section-header \.af-section-title-line:last-child\s*\{([^}]+)\}/);
  assert.ok(rule, 'scope the Console title correction to the Sales Agent page');
  assert.match(rule[1], /padding-bottom:\s*\.12em/);
});

test('Sales Agent copy retains the approved plan qualification and avoids the superseded claims', async () => {
  const { SALES_AGENT_COPY: copy } = await loadSalesAgentCopy();
  assert.equal(copy.capabilities.length, 6);
  assert.equal(copy.features.length, 8);
  assert.equal(copy.channels.length, 6);
  assert.equal(copy.consoleTabs.length, 6);
  assert.equal(copy.problems.length, 6);
  assert.equal(copy.closingLabels.length, 6);
  assert.deepEqual(Array.from(copy.controlLabels), ['Business Knowledge', 'Agent Instructions', 'Response Rules']);
  assert.deepEqual(Array.from(copy.quotationLabels), ['Requirements Captured', 'Products Shortlisted', 'Quote Requested', 'Ready for Review']);
  assert.match(copy.connection, /^Start with the AI Sales Agent\. Add the AI Webstore Suite/);
  assert.match(copy.connection, /depend on your plan and setup/);
  assert.match(copy.channels[2][1], /^Share your agent link through messaging channels/);
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

test('Preview Webstore copy preserves nodes, rich headings, links, seven comparison rows and FAQ questions', async () => {
  const { correctWebstoreCopy, WEBSTORE_REPLACEMENTS, WEBSTORE_FAQS } = await loadWebstoreCopy();
  const replacementNodes = WEBSTORE_REPLACEMENTS.map(([before]) => copyElement(before));
  const hero = copyElement('Not Just an AI Sales Agent', { ...copyElement(), nodeName: 'BR' }, 'It’s Your Entire ', copyElement('AI Sales Ecosystem'));
  const featureHeading = copyElement('Scale Your Business with ', copyElement('AI Webstore Suite'));
  const compareHeading = copyElement(copyElement('AI Webstore Suite'), ' or Antbuildz AI Sales Agent?');
  const marker = { ...copyElement(), nodeName: 'I' };
  const mobileKey = copyElement(marker, ' AI Webstore Suite');
  const mobileLabels = Array.from({ length: 7 }, () => copyElement('AI Webstore Suite'));
  const inventory = copyElement();
  const faqQuestion = copyElement('Is the AI Sales Agent included in the AI Webstore Suite?');
  const figures = copyElement('3x', '30%', '90%', '3x');
  const icon = { ...copyElement('arrow'), nodeName: 'svg' };
  const link = copyElement(copyElement('Prefer a lighter way to start?'), copyElement('Quickly deploy the AI Sales Agent.'), icon);
  link.attributes = { href: '/ai-sales-agent', target: '_blank', rel: 'noopener' };
  const comparison = {
    querySelector: selector => selector === 'h2' ? compareHeading : mobileKey,
    querySelectorAll: () => mobileLabels,
  };
  const selectors = new Map([
    ['.ws2-hero-title', hero],
    ['.ws2-webstore-features-desc', { previousElementSibling: featureHeading }],
    ['.ws2-compare-summary', { closest: () => comparison }],
    ['.flexible-ai-platform__visual', inventory],
  ]);
  const exampleScore = Object.assign(copyElement('96', '%'), { tagName: 'SPAN' });
  const exampleBar = { hidden: false };
  const exampleRow = { lastElementChild: exampleScore, querySelector: () => exampleBar };
  const exampleLabel = Object.assign(copyElement('Bosch GBH 2-26 DRE'), { tagName: 'P', parentElement: { parentElement: exampleRow } });
  const page = { ...copyElement(...replacementNodes, hero, featureHeading, compareHeading, mobileKey, ...mobileLabels, inventory, faqQuestion, figures, link, exampleLabel, exampleScore), querySelector: selector => selectors.get(selector) ?? null, querySelectorAll: () => [exampleLabel] };
  const root = { querySelector(selector) { assert.equal(selector, '.webstore2-page'); return page; } };
  const originalChildren = [...page.childNodes];
  const originalHeroChildren = [...hero.childNodes];
  const originalLinkChildren = [...link.childNodes];

  correctWebstoreCopy(root, '/ai-webstore-suite');
  WEBSTORE_REPLACEMENTS.forEach(([, after], index) => assert.equal(replacementNodes[index].textContent, after));
  assert.equal(hero.textContent, 'Extend Your AI Sales Agentwith a Connected Webstore');
  assert.equal(featureHeading.textContent, 'What the Webstore Adds to Your AI Sales Agent');
  assert.equal(compareHeading.textContent, 'AI Sales Agent, With or Without a Webstore');
  assert.equal(mobileKey.textContent.trim(), 'AI Sales Agent + AI Webstore Suite');
  assert.equal(mobileKey.childNodes[0], marker);
  assert.ok(mobileLabels.every(label => label.textContent === 'AI Sales Agent + AI Webstore Suite'));
  assert.equal(link.textContent, 'Explore the AI Sales Agentarrow');
  assert.deepEqual(link.attributes, { href: '/ai-sales-agent', target: '_blank', rel: 'noopener' });
  assert.deepEqual(page.childNodes, originalChildren);
  assert.deepEqual(hero.childNodes, originalHeroChildren);
  assert.deepEqual(link.childNodes, originalLinkChildren);
  assert.equal(figures.textContent, '3x30%90%3x');
  assert.equal(exampleScore.textContent, 'Specs', 'real products never inherit fabricated suitability percentages');
  assert.equal(exampleBar.hidden, true);
  assert.equal(faqQuestion.textContent, 'Is the AI Sales Agent included in the AI Webstore Suite?');
  assert.match(inventory.getAttribute('aria-label'), /animation progress, not accuracy/);

  // Existing text must not be rewritten on the observer's next pass.
  const lockText = node => {
    if (node.nodeType === 3) {
      const value = node.textContent;
      Object.defineProperty(node, 'textContent', { get: () => value, set: () => assert.fail('unchanged text was rewritten') });
    } else node.childNodes.forEach(lockText);
  };
  lockText(page);
  correctWebstoreCopy(root, '/ai-webstore-suite');
  const remountedFAQ = copyElement(WEBSTORE_FAQS[2][0]);
  page.childNodes.push(remountedFAQ);
  correctWebstoreCopy(root, '/ai-webstore-suite');
  assert.equal(remountedFAQ.textContent, WEBSTORE_FAQS[2][1]);
});

test('Webstore replacements match transferred source and preserve core agent, plan and claim boundaries', async () => {
  const { correctWebstoreCopy, WEBSTORE_REPLACEMENTS, WEBSTORE_COMPARISON, WEBSTORE_FAQS } = await loadWebstoreCopy();
  for (const path of ['/', '/pricing', '/ai-sales-agent', '/ai-agent-console', '/webstore-2-ai-webstore-preview', '/webstore-2']) {
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
  assert.equal(WEBSTORE_COMPARISON.length, 14, 'two cells for each of seven existing rows');
  const copy = WEBSTORE_REPLACEMENTS.map(([, after]) => after).join('\n');
  assert.doesNotMatch(copy, /our primary product|focused alternative|21 languages|every visit into|\bCustomize\b|\bOrganize\b|\bCenter\b/);
  assert.match(copy, /Inventory connections and update frequency depend on your plan and setup/);
  assert.match(copy, /Sharing a link does not require a native messaging integration/);
  assert.match(copy, /Optional Antbuildz Marketplace connection, subject to confirmed support and setup/);
  assert.match(WEBSTORE_FAQS[1][1], /without a webstore or choose a combined plan from the beginning/);
  assert.match(WEBSTORE_FAQS[2][1], /included in the AI Webstore Suite/);
  assert.match(WEBSTORE_FAQS[2][1], /without launching a webstore/);
  assert.match(WEBSTORE_FAQS[3][1], /Growth adds the Sales Webstore; Enterprise adds Rental capabilities/);
});

test('selected Webstore experience is wired to the canonical product route', async () => {
  const { WEBSTORE_DESCRIPTION } = await loadWebstoreCopy();
  const { AI_WEBSTORE_PAGE } = await loadListingModule('preview-metadata');
  assert.equal(AI_WEBSTORE_PAGE.description, WEBSTORE_DESCRIPTION);
  const route = await readFile(new URL('../app/[slug]/page.tsx', import.meta.url), 'utf8');
  const wrapper = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const concept = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.tsx', import.meta.url), 'utf8');
  const oldRoute = await readFile(new URL('../app/webstore-2-ai-webstore-preview/page.tsx', import.meta.url), 'utf8');
  assert.match(route, /return <WebstoreConceptPage \/>/);
  assert.match(route, new RegExp(WEBSTORE_DESCRIPTION.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  assert.match(oldRoute, /redirect\('\/ai-webstore-suite'\)/);
  assert.match(concept, /correctWebstoreCopy\(root, window.location.pathname\)/);
  const correction = concept.indexOf('correctWebstoreCopy(root, window.location.pathname)');
  assert.ok(concept.indexOf('if (window.location.pathname !== AI_WEBSTORE_PATH) return;') < correction);
  assert.ok(correction < concept.indexOf('if (container?.isConnected) return;'), 'copy reapplies when tabs remount after portal attachment');
  assert.match(concept, /observer.observe\(root, \{ childList: true, subtree: true, characterData: true \}\)/);
  assert.match(wrapper, /correctSalesAgentCopy\(root, window.location.pathname\)/);
});

test('shared footer keeps Company navigation focused on Antbuildz AI', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('footer.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const functions = parsed.statements.filter(statement => ts.isFunctionDeclaration(statement)
    && ['correctFooter', 'setPricingText'].includes(statement.name?.text));
  const code = ts.transpileModule(functions.map(fn => fn.getText(parsed)).join('\n'), {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  let navigationBindings = 0;
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
      if (selector === 'a[href="/ai-sales-agent"]') return { closest: () => salesAgentItem };
      if (selector === 'a[href="/ai-webstore-suite"]') return { closest: () => webstoreItem };
      throw new Error(`Unexpected AI Products selector: ${selector}`);
    },
  };
  const footer = element();
  footer.ownerDocument = { createElement };
  footer.querySelector = selector => {
    if (selector === 'nav[aria-label="Marketplace"]') return marketplace;
    if (selector === '.abz-public-footer__bottom-inner') return footerBottom;
    if (selector === 'nav[aria-label="AI Products"]') return aiProducts;
    if (selector === '.abz-public-footer__brand p') return brand;
    if (selector === 'nav[aria-label="Company"] a[href="/agreements"]') return policyLink;
    if (selector.includes('nav[aria-label="Company"] a[href="/help"]')) return helpLink;
    if (selector === 'nav[aria-label="Company"] ul') return companyNav.querySelector('ul');
    if (selector.startsWith('nav[aria-label="Company"]')) return companyLink;
    if (selector === 'nav[aria-label="AI Products"] a[href="/resources"]') return { closest: () => duplicateRow };
    throw new Error(`Unexpected footer selector: ${selector}`);
  };
  const correctFooter = runInNewContext(`${code}\ncorrectFooter`, {
    bindResourceNavigation(link) { assert.equal(link, companyLink); navigationBindings++; },
  });
  const root = { querySelector: selector => selector === '.abz-public-footer' ? footer : languageUtilities };
  correctFooter(root);
  const writesAfterFirstPass = copyWrites;
  correctFooter(root);
  assert.equal(companyLink.textContent, 'Resources');
  assert.equal(companyLink.attributes.href, '/resources');
  assert.equal(policyLink.textContent, 'AI Agreements & Policies');
  assert.equal(policyLink.attributes.href, '/agreements');
  assert.equal(helpLink.textContent, 'AI Help Centre');
  assert.equal(helpLink.attributes.href, '/help/ai');
  assert.equal(marketplaceLinks.length, 1, 'repeated observer passes must not duplicate Marketplace');
  assert.equal(marketplaceLinks[0].textContent, 'Marketplace');
  assert.equal(marketplaceLinks[0].attributes.href, 'https://antbuildz.com');
  assert.equal(brand.textContent, 'We are Building the Intelligence Layer for Industrial Businesses.');
  assert.deepEqual(aiProductOrder, [salesAgentItem, webstoreItem]);
  assert.equal(duplicateRow.attributes.hidden, '');
  assert.equal(languageMoves, 1, 'the React-owned language control moves into the footer only once');
  assert.equal(languageUtilities.parentElement, footerBottom);
  assert.ok(languageClasses.has('antbuildz-footer-language'));
  assert.equal(navigationBindings, 1, 'repeated observer passes must not add duplicate click handlers');
  assert.equal(copyWrites, writesAfterFirstPass, 'footer text should not trigger a mutation loop');
  assert.doesNotThrow(() => correctFooter({ querySelector: () => null }));
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(css, /\.abz-public-footer__link-column li\[hidden\],[\s\S]*?display: none !important/);
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
  assert.match(textTargets.get('.legal-policies-home__legal-note').textContent, /not currently available/);
  // React mounts fresh category content. Subsequent observer passes must
  // simplify that new content, not stop at a once-only marker on the hub.
  textTargets.get('.legal-policies-home__legal-note').textContent = 'Original copy';
  simplifyAgreementHub(root);
  assert.match(textTargets.get('.legal-policies-home__legal-note').textContent, /not currently available/);
  assert.doesNotThrow(() => simplifyAgreementHub({ querySelector: () => null }), 'detail pages and unrelated routes are untouched');
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
  assert.match(rootRoute, /slug === 'help' \|\| slug === 'faqs'[\s\S]*?redirect\('\/help\/ai'\)/);
  assert.match(helpRoute, /slug === 'marketplace'[\s\S]*?redirect\('https:\/\/antbuildz\.com\/help\/marketplace'\)/);
  assert.match(helpRoute, /alternates: \{ canonical: '\/help\/ai' \}/);
  assert.match(faqDetailRoute, /redirect\(`https:\/\/antbuildz\.com\/faqs\/\$\{encodeURIComponent\(slug\)\}`\)/);
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
  assert.match(source, /We Make Industrial Possible/);
  assert.match(source, /With Antbuildz AI\./);
  assert.match(source, /\/images\/industrial-ai\.png/);
});

test('homepage uses the approved static mountain-logistics hero with an immediate conversation', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  assert.match(source, /function setupHomeHeroMedia/);
  assert.match(source, /hero-option-2-mountain-logistics\.png/);
  assert.match(source, /Heavy-haul truck transporting an excavator along a mountain road above an industrial valley at blue hour/);
  assert.match(source, /heroImage\.fetchPriority = 'high'/);
  assert.match(source, /Turn complex product knowledge into useful buyer conversations with an AI Sales Agent/);
  assert.doesNotMatch(source, /home-hero-industrial-story\.mp4/);
  assert.doesNotMatch(source, /function setupHomeHeroVideo/);
  assert.match(source, /prefers-reduced-motion: reduce/);
  assert.match(styles, /\.antbuildz-ai-home \.ai-marketplace-hero-stage \{\s*height: max\(100svh, 720px\)/);
  assert.match(styles, /filter: saturate\(\.88\) contrast\(1\.06\) brightness\(\.82\)/);
  assert.match(styles, /\.antbuildz-ai-home \.ai-marketplace-hero-overlay \{[\s\S]*?linear-gradient\(180deg, rgb\(4 16 34 \/ \.5\)/);
  assert.match(styles, /top: clamp\(132px, 19svh, 184px\)/);
  assert.match(styles, /left: max\(5%, calc\(\(100% - 1320px\) \/ 2\)\)/);
  assert.match(styles, /right: clamp\(36px, 6vw, 96px\)/);
  assert.match(styles, /bottom: clamp\(28px, 5\.5svh, 54px\)/);
  assert.match(styles, /opacity: var\(--antbuildz-home-chat-opacity, 1\)/);
  assert.doesNotMatch(styles, /\.antbuildz-ai-home \.antbuildz-home-hero-video/);
  await access(new URL('../public/marketplace/how-it-works/assets/hero-option-2-mountain-logistics.png', import.meta.url));
});

test('homepage conversation uses role-tinted glass without restoring the profile box', async () => {
  const [styles, source] = await Promise.all([
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
  ]);
  const glass = styles.slice(styles.indexOf('.antbuildz-home-hero-conversation {'), styles.indexOf('.antbuildz-home-industries {'));
  assert.match(glass, /--home-chat-agent-accent: var\(--blue\)/);
  assert.match(glass, /--home-chat-buyer-accent: var\(--yellow\)/);
  assert.match(glass, /--home-chat-glass-fill: color-mix\(in srgb, var\(--home-chat-agent-accent\) 34%, transparent\)/);
  assert.match(glass, /--home-chat-glass-buyer-fill: color-mix\(in srgb, var\(--home-chat-buyer-accent\) 24%, transparent\)/);
  assert.match(glass, /--home-chat-glass-radius: 22px/);
  assert.match(glass, /-webkit-backdrop-filter: blur\(var\(--home-chat-glass-blur\)\)/);
  assert.match(glass, /prefers-reduced-transparency: reduce/);
  assert.doesNotMatch(glass, /will-change: opacity/);
  const buyer = glass.match(/\.antbuildz-home-hero-conversation__bubble\.is-buyer > \.antbuildz-home-hero-conversation__surface \{([^}]+)\}/)?.[1];
  assert.match(buyer, /var\(--home-chat-glass-buyer-fill\)/);
  assert.doesNotMatch(buyer, /linear-gradient|255 197 1/);
  assert.doesNotMatch(source, /antbuildz-home-hero-conversation__status/);
  assert.doesNotMatch(glass, /mask-image/);
  assert.match(glass, /--home-chat-bubble-width: 340px/);
  assert.match(glass, /width: var\(--home-chat-bubble-width\)/);
  assert.match(glass, /width: min\(470px, 42vw\)/);
  const surface = glass.match(/\.antbuildz-home-hero-conversation__surface \{([^}]+)\}/)?.[1];
  assert.match(surface, /border: 0/);
  assert.match(surface, /background: var\(--home-chat-glass-fill\)/);
  assert.doesNotMatch(surface, /linear-gradient|saturate\(140%\)/);
  assert.match(glass, /inset 0 0 1px \.75px var\(--home-chat-reply-edge\)/);
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
      const [avatar, surface] = transcript.children[index].children;
      assert.equal(avatar.tag, 'img');
      assert.equal(avatar.width, 24);
      assert.equal(avatar.height, 24);
      assert.equal(avatar.draggable, false);
      assert.equal(avatar.src, message.kind === 'buyer' ? '/images/industrial-buyer-avatar.jpg' : emmaSrc);
      assert.equal(avatar.alt, message.kind === 'buyer' ? 'Example industrial buyer' : emmaAlt);
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
  const replies = styles.match(/\.antbuildz-home-hero-conversation__bubble\.is-agent,\s*\.antbuildz-home-hero-conversation__bubble\.is-requirement \{([^}]+)\}/)?.[1];
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
  assert.match(source, /\[1900, 2500, 3100, 2800, 3400\]\[layerIndex\]/);
  assert.match(source, /cleanups\.forEach\(\(cleanup\) => cleanup\(\)\)/);
  assert.match(source, /window\.clearInterval\(advanceConversation\)/);
  assert.match(source, /!conversationActive \|\| reducedMotion\.matches \|\| document\.hidden/);
  assert.match(source, /transcript\.setAttribute\('aria-hidden', 'true'\)/);
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
  assert.deepEqual(timers.map(({ delay }) => delay), [1900, 2500, 3100, 2800, 3400]);
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
    '/', '/ai-sales-agent', '/ai-webstore-suite', '/pricing', '/resources', '/help/ai',
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
  assert.match(styles, /\[data-antbuildz-type-role="hero-title"\][\s\S]*?font-weight: 800 !important;[\s\S]*?line-height: var\(--antbuildz-trial-hero-title-line\) !important/);
  assert.match(styles, /\[data-antbuildz-type-role="section-title"\][\s\S]*?font-weight: var\(--antbuildz-trial-section-title-weight\) !important;[\s\S]*?white-space: normal !important/);
  assert.match(styles, /\[data-antbuildz-type-role="major-intro"\][\s\S]*?font-weight: 400 !important;[\s\S]*?white-space: normal !important/);
  assert.doesNotMatch(trial, /\.af-headline|\.af-window|\.pricing-card|table|details|summary/);
  assert.doesNotMatch(styles, /antbuildz-typography-trial\s+:is\(h1|antbuildz-typography-trial\s+h1/);
  assert.doesNotMatch(previewStyles, /\.ws2-hero-shell \.ws2-hero-title\)[^{]*\{[^}]*\b(?:font-size|line-height)\s*:/, 'the Webstore preview inherits the semantic hero-title scale');
  assert.doesNotMatch(previewStyles, /\.ws2-hero-shell \.ws2-hero-desc\)[^{]*\{[^}]*\b(?:font-size|max-width)\s*:/, 'the Webstore preview inherits the semantic introduction scale and frame');
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

test('Who We Serve audience introductions align with the shared section frame', async () => {
  const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(
    styles,
    /\.solutions-insurance-page \.si-sierra-stage--rental-audience \.si-sierra-copy\s*\{\s*padding-inline: 0;/,
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
  assert.match(source, /We Make Industrial Possible/);
  assert.match(source, /With Antbuildz AI/);
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
  assert.match(source, /visibleMessages\[0\]\?\.classList\.toggle\('is-fade-top', true\)/);
  assert.match(source, /visibleMessages\.at\(-1\)\?\.classList\.toggle\('is-fade-bottom', true\)/);
  assert.match(source, /transcript\.scrollTo/);
  assert.match(styles, /--home-chat-message-opacity/);
  assert.match(styles, /--home-chat-edge-opacity/);
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
  assert.match(source, /title: 'Built to Understand Your Inventory'/);
  assert.match(source, /catalogue, technical specifications, pricing guidance and availability rules you approve/);
  assert.match(source, /suitable recommendations for your team to review/);
  assert.match(source, /eyebrow: null/);
  assert.match(source, /eyebrow\.hidden = !copy\.eyebrow/);
  assert.match(source, /button: 'Explore AI Sales Agent'/);
  assert.match(source, /buttonHref: '\/ai-sales-agent'/);
  assert.match(source, /badge: 'AI Sales Agent'/);
  assert.doesNotMatch(source, /An AI Agent that truly knows your inventory/);
  assert.match(source, /\/images\/emma-inventory-tablet-v1\.png/);
  assert.match(source, /Emma checking approved industrial product inventory on a tablet/);
  assert.match(source, /correctHomeInventoryAgentCard\(root, isHomepage\)/);
  assert.match(styles, /#root\.antbuildz-ai-home #meet-aria\.antbuildz-inventory-agent-card/);
  assert.match(styles, /#root\.antbuildz-ai-home #meet-aria\.antbuildz-inventory-agent-card \.aria-sales-agent-cta__panel \{\s*max-width: 1320px;/);
  assert.match(styles, /#root\.antbuildz-ai-home #meet-aria\.antbuildz-inventory-agent-card h2 \{[\s\S]*?font-size: var\(--type-section-heading\) !important;[\s\S]*?font-weight: var\(--type-heading-weight\) !important;[\s\S]*?line-height: var\(--type-heading-line\) !important;/);
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

test('Resources header navigation and role disclosure preserve all five guide destinations', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  const parsed = ts.createSourceFile('navigation.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  assert.deepEqual(parsed.parseDiagnostics, []);
  const roles = parsed.statements.find((statement) => ts.isVariableStatement(statement)
    && statement.declarationList.declarations.some((declaration) => declaration.name.getText(parsed) === 'RESOURCE_ROLE_LINKS'));
  const code = ts.transpileModule(`${roles.getText(parsed)}\nJSON.stringify(RESOURCE_ROLE_LINKS);`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const links = JSON.parse(runInNewContext(code));
  assert.deepEqual(links.map((link) => link.label), [
    'Sales Specialist', 'Customer Service', 'Technical Support', 'Product Specialist', 'After-Sales Support',
  ]);
  assert.equal(new Set(links.map((link) => link.href)).size, 5);
  const routeContent = await readFile(new URL('../public/assets/index-i9-KQg8N.js', import.meta.url), 'utf8');
  for (const link of links) {
    assert.ok(link.href.startsWith('/resources/'));
    assert.ok(routeContent.includes(link.href.split('/').at(-1)), `existing guide: ${link.href}`);
  }
  assert.match(source, /link\.setAttribute\('href', '\/resources'\)/);
  assert.match(source, /window\.location\.assign\(link\.href\)/);
  assert.match(source, /correctResourceRoles\(root\)/);
  assert.match(source, /trigger\.setAttribute\('aria-controls', panel\.id\)/);
  assert.match(source, /event\.key !== 'Escape'/);
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

test('AI Sales Agent links open the canonical page before the copied router handles the click', async () => {
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
  for (const href of ['/ai-sales-agent', '/aiagent']) {
    const event = makeEvent(href);
    context.click(event);
    assert.equal(destination, 'http://localhost:8081/ai-sales-agent');
    assert.equal(event.defaultPrevented, true);
    assert.equal(event.stopped, true);
  }
  context.click(makeEvent('/aiagent?source=menu#features'));
  assert.equal(destination, 'http://localhost:8081/ai-sales-agent?source=menu#features');
  destination = undefined;
  const keyboardEvent = makeEvent('/ai-sales-agent', { key: 'Enter', button: undefined });
  context.click(keyboardEvent);
  assert.equal(destination, 'http://localhost:8081/ai-sales-agent');
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

test('public hamburger has six flat native links and retains the account shell', async () => {
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
    ['AI Sales Agent', '/ai-sales-agent'], ['AI Webstore Suite', '/ai-webstore-suite'],
    ['AI Agent Console', '/ai-agent-console'], ['Pricing', '/pricing'],
    ['Resources', '/resources'], ['About Us', '/about'],
  ]);
  assert.equal(list.children[3].attributes['aria-current'], 'page');
  window.location.pathname = '/resources/ai-sales-agent-for-industrial-businesses';
  correct();
  assert.equal(list.children[3].attributes['aria-current'], undefined);
  assert.equal(list.children[4].attributes['aria-current'], 'location');
  assert.deepEqual([...new Set(createdTags)], ['div', 'a'], 'no collapse controls or extra account controls are introduced');
  navigation = node('nav');
  correct();
  assert.equal(navigation.children[0].children.length, 6, 'reopening a remounted drawer rebuilds the same list');
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(css, /\.antbuildz-flat-navigation > \[hidden\]\s*\{ display: none !important;/);
});

test('Resources dropdown groups all six existing collections in the shared Industries panel', async () => {
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
  const { topics, groups } = JSON.parse(runInNewContext(code));
  assert.equal(topics.length, 6);
  assert.equal(new Set(topics.map((topic) => topic.id)).size, 6);
  const bundle = await readFile(new URL('../public/assets/index-i9-KQg8N.js', import.meta.url), 'utf8');
  for (const topic of topics) assert.ok(bundle.includes(topic.label));
  assert.deepEqual(groups.flatMap((group) => group.topics), topics);
  assert.ok(groups.every((group) => group.topics.length === 2));
  assert.match(source, /correctResourcesMenu\(root\)/);
  assert.match(source, /correctPublicDrawer\(\)/);
  assert.match(source, /document\.removeEventListener\('pointerdown', dismissHeaderDropdowns\)/);
  assert.match(source, /panel.className = 'antbuildz-industries-menu__panel antbuildz-resources-menu__panel'/);
  assert.doesNotMatch(styles, /\.antbuildz-resources-menu__panel\s*\{/);
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

test('pricing preserves the transferred cards while consolidating Agent plans', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);

  assert.match(source, /function correctPricing/);
  for (const plan of ['Launch', 'Growth', 'Enterprise', 'Custom']) {
    assert.match(source, new RegExp(`name: '${plan}'`));
  }
  assert.match(source, /monthlyUsd: 49/);
  assert.match(source, /monthlyUsd: 199/);
  assert.match(source, /monthlyUsd: 399/);
  assert.match(source, /monthlyUsd: null/);
  for (const inclusion of [
    '50 AI conversations',
    '150 AI conversations',
    '300 AI conversations',
    'Sales Webstore',
    '100 active Sales listings',
    '500 combined Sales \\+ Rental listings',
    'AI Rental & Sales Suite',
    'Advanced Inventory Sync',
    'ERP / CRM / API connections',
    'Most Popular',
    'Best Value',
    '\\$0\\.99 each',
  ]) {
    assert.match(source, new RegExp(inclusion));
  }
  assert.match(source, /ANNUAL_PRICING_DISCOUNT = 0\.2/);
  assert.match(source, /formatUsdAmount/);
  assert.match(source, /billed annually · Save 20%/);
  assert.match(source, /pricingBillingBindings/);
  assert.match(source, /Included in this plan/);
  assert.match(source, /pricingControls\.hidden = false/);
  assert.match(source, /pricingControls\.dataset\.antbuildzBilling/);
  assert.match(source, /Deploy Your /);
  assert.match(source, /AI Sales Agent/);
  assert.match(source, /Across Your Customer Channels\./);
  assert.match(source, /One business conversation may turn into thousands in revenue\./);
  assert.match(source, /duplicateSectionHeader\.hidden = true/);
  assert.match(source, /duplicateSectionHeader\.setAttribute\('aria-hidden', 'true'\)/);
  assert.match(styles, /\.antbuildz-ai-pricing #ai-webstore-suite,/);
  assert.match(styles, /\.antbuildz-ai-pricing \.pricing-hero \{\s*max-width: min\(1180px, 90vw\)/);
  assert.match(styles, /#ai-webstore-suite \+ \.pricing-section-divider/);
  assert.match(styles, /\.antbuildz-ai-pricing \.pricing-feature-row\[hidden\]/);
  assert.match(styles, /\.antbuildz-ai-pricing \.pricing-controls-row/);
  assert.match(styles, /\.pricing-currency-select-wrap/);
  assert.match(styles, /\.antbuildz-ai-pricing \.antbuildz-pricing-badge/);
  assert.match(styles, /\.antbuildz-ai-pricing \.antbuildz-pricing-details/);
  assert.match(styles, /body:has\(#root\.antbuildz-original-root\.antbuildz-ai-pricing\)/);
  assert.match(styles, /#root\.antbuildz-original-root\.antbuildz-ai-pricing \.pricing-section \{\s*background-color: var\(--clean\) !important;\s*background-image: none !important;/);
});

test('pricing cards use a wider standard-plan row and responsive Custom panel', async () => {
  const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  const layout = styles.slice(styles.indexOf('/* Roomier subscription comparison:'), styles.indexOf('/* Antbuildz.AI compatibility layer'));
  assert.match(layout, /width: min\(1320px, 90vw\)/);
  assert.match(layout, /grid-template-columns: repeat\(3, minmax\(0, 1fr\)\)/);
  assert.match(layout, /@media \(min-width: 1100px\)/);
  assert.match(layout, /\[data-antbuildz-plan="custom"\][^{]*\{\s*grid-column: 1 \/ -1/);
  assert.match(layout, /@media \(min-width: 768px\) and \(max-width: 1099px\)/);
  assert.match(layout, /grid-template-columns: repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(layout, /@media \(max-width: 767px\)/);
  assert.match(layout, /grid-template-columns: minmax\(0, 1fr\)/);
  assert.match(layout, /\.pricing-feature-row \{\s*margin: 0/);
  assert.match(layout, /min-height: 54px/);
});

test('pricing has one compact gap before add-ons and hides only the Agent comparison shortcut', async () => {
  const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  const section = styles.match(/\.antbuildz-ai-pricing \.pricing-section:has\(\.pricing-card\[data-antbuildz-plan\]\) \{([^}]+)\}/)[1];
  assert.match(section, /padding-bottom: 0/);
  assert.match(section, /margin-bottom: 64px/);
  assert.match(styles, /@media \(max-width: 767px\) \{\s*\.antbuildz-ai-pricing \.pricing-section:has\(\.pricing-card\[data-antbuildz-plan\]\) \{\s*margin-bottom: 48px/);
  assert.match(styles, /\.antbuildz-ai-pricing \.pricing-compare-link-row:has\(> a\[href="#compare-features-ai-agent"\]\) \{\s*display: none/);
  assert.doesNotMatch(styles, /\.antbuildz-ai-pricing #compare-features-ai-agent\s*\{\s*display: none/);
});

test('approved pricing content parses and has the exact prices, packs and usage rules', async () => {
  const source = await readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('pricing.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  assert.deepEqual(parsed.parseDiagnostics, [], 'the pricing compatibility layer must remain valid TSX');

  // Execute only the local, pure content declarations, never the app or DOM code.
  const names = ['AGENT_PRICING_PLANS', 'ANNUAL_PRICING_DISCOUNT', 'PURCHASED_CREDIT_PACKS', 'PRICING_USAGE_COPY', 'PRICING_FAQS'];
  const statements = parsed.statements.filter((statement) => ts.isVariableStatement(statement)
    && statement.declarationList.declarations.some((declaration) => names.includes(declaration.name.getText(parsed))));
  assert.equal(statements.length, names.length);
  const code = statements.map((statement) => statement.getText(parsed)).join('\n');
  const compiled = ts.transpileModule(`${code}\nJSON.stringify({${names.join(',')}});`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const data = JSON.parse(runInNewContext(compiled));
  const plans = data.AGENT_PRICING_PLANS;
  assert.deepEqual(plans.map((plan) => plan.monthlyUsd), [49, 199, 399, null]);
  assert.deepEqual(plans.map((plan) => plan.usage), ['50 AI conversations', '150 AI conversations', '300 AI conversations', 'Custom']);
  assert.deepEqual(plans.map((plan) => plan.features.length), [8, 10, 8, 7]);
  assert.equal(data.ANNUAL_PRICING_DISCOUNT, 0.2);
  assert.deepEqual(plans.slice(0, 3).map((plan) => (plan.monthlyUsd * 0.8).toFixed(2)), ['39.20', '159.20', '319.20']);
  assert.deepEqual(plans.slice(0, 3).map((plan) => (plan.monthlyUsd * 12 * 0.8).toFixed(2)), ['470.40', '1910.40', '3830.40']);
  assert.deepEqual(data.PURCHASED_CREDIT_PACKS, [
    { conversations: 25, usd: 22 }, { conversations: 50, usd: 42 },
    { conversations: 100, usd: 79 }, { conversations: 500, usd: 349 },
  ]);
  assert.doesNotMatch(plans[0].features.join(' '), /Dedicated Product URLs|Direct Product Links|Webstore/);
  assert.ok(plans[1].features.includes('AI Recommendations with Direct Product Links'));
  assert.ok(plans[2].features.includes('Advanced Workflow Automation'));
  assert.match(data.PRICING_USAGE_COPY.monthly, /do not roll over/);
  assert.match(data.PRICING_USAGE_COPY.purchased, /12 months from purchase/);
  assert.match(data.PRICING_USAGE_COPY.order, /Monthly Conversations first, then Purchased Credits \(earliest expiry first\), then Pay-As-You-Go if enabled/);
  assert.match(data.PRICING_USAGE_COPY.payg, /automatic payment method or approved billing setup/);
  assert.match(data.PRICING_USAGE_COPY.cancellation, /require an active Antbuildz subscription/);
  assert.equal(data.PRICING_FAQS.length, 6, 'reuse the six existing FAQ accordions');
  assert.match(source, /featureRows.length < plan.features.length/, 'render every approved feature');
  assert.match(source, /row.dataset.antbuildzOriginalFeature/, 'comparison corrections must be idempotent');
});

test('legacy marketplace admin route redirects to the AI Agent Console', async () => {
  const source = await readFile(new URL('../app/[slug]/page.tsx', import.meta.url), 'utf8');
  assert.match(source, /slug === 'develop-admin'/);
  assert.match(source, /redirect\('\/ai-agent-console'\)/);
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
  assert.match(styles, /--header-nav-font-weight: 750/);
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
  assert.match(
    styles,
    /@media \(min-width: 1400px\)[\s\S]*?\.antbuildz-public-header \.bright-nav\s*\{[^}]*padding-inline:\s*max\(5%, calc\(\(100% - 1280px\) \/ 2\)\);/,
  );
});

test('public marketing heroes extend behind the header with approved route exceptions', async () => {
  const [source, styles] = await Promise.all([
    readFile(new URL('../app/original-antbuildz-app.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
  ]);
  assert.match(source, /function correctPublicHeroHeader\(root: HTMLElement\)/);
  assert.match(source, /const usesExistingOverlay = path === '\/' \|\| path === '\/ai-webstore-suite'/);
  assert.doesNotMatch(source, /preservesHeaderGap|path === '\/ai-sales-agent'/,
    'AI Sales Agent follows the shared transparent-top header behaviour');
  assert.match(source, /if \(!header \|\| usesExistingOverlay\)/);
  assert.match(source, /':scope > \.bright-hero, :scope > section\[class~="bg-hero"\]'/);
  assert.match(source, /spacer\.className = 'antbuildz-public-hero-spacer'/);
  assert.match(source, /root\.style\.setProperty\('--public-header-height'/);
  assert.match(source, /header\.classList\.toggle\('is-scrolled', window\.scrollY > 24\)/);
  assert.match(source, /correctHeaderLayout\(root\);\s*correctPublicHeroHeader\(root\);/);
  assert.match(styles, /\.antbuildz-public-header\.is-public-hero-overlay:not\(\.is-scrolled\) \.bright-nav \{[^}]*background: transparent !important;/);
  assert.match(styles, /\.antbuildz-public-header\.is-public-hero-overlay\.is-scrolled \.bright-nav \{[^}]*backdrop-filter: blur\(18px\) saturate\(1\.5\) !important;/);
  assert.match(styles, /\.antbuildz-public-header\.is-public-hero-overlay \{[^}]*position: fixed !important;[^}]*width: 100%;[^}]*background: transparent !important;/);
  assert.match(styles, /\.antbuildz-public-hero-spacer \{[^}]*height: var\(--public-header-height, 81px\)/);
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
  assert.match(styles, /background: color-mix\(in srgb, var\(--canvas\) 90%, transparent\)/);
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

test('AI Agent Roles is part of the Resources library', async () => {
  const source = await readFile(new URL('../lib/site-content.ts', import.meta.url), 'utf8');
  assert.match(source, /title: 'AI Agent Roles'/);
  assert.match(source, /href: '\/ai-agent-roles'/);
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
  const sandbox = { exports: {} };
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
  const { DEMO_PRODUCTS, INVENTORY_PRODUCTS, INVENTORY_FIELDS, PRODUCT_FACTS_CHECKED_ON, productDemoPath } = await loadListingModule('storyboard');
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
  assert.equal(INVENTORY_FIELDS.some(field => field.key === 'model'), false, 'the model is supplied, not AI-generated');
  const component = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.tsx', import.meta.url), 'utf8');
  assert.match(component, /data-product-url=\{productDemoPath\(product.slug\)\}/);
  assert.match(component, /createPortal\(<ListingStory \/>, mount\)/);
  assert.doesNotMatch(component, /history\.replaceState|innerHTML\s*=|fetch\(/);
  assert.doesNotMatch(component, /DemoLift|🇸🇬|1\.8 tonnes/, 'remove fictional supplier, unverified stock location and unsuitable load promise');
  assert.doesNotMatch(component, /styles\.demoNote|<ProductSources|Read Product facts and sources/, 'the removed footer wording must not return or leave an inaccessible reference');
  const sourceNotes = await readFile(new URL('../app/webstore-2-ai-webstore-preview/PRODUCT-SOURCES.md', import.meta.url), 'utf8');
  for (const product of DEMO_PRODUCTS) assert.ok(sourceNotes.includes(product.source), 'manufacturer references stay documented after removing the visible footer');
  assert.match(component, /product\.pricing\.map/);
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
  assert.equal(DEMO_PRODUCTS.filter(p => p.listingType === 'rental').length, 2);
  assert.equal(DEMO_PRODUCTS.filter(p => p.listingType === 'sale').length, 1);
  for (const product of DEMO_PRODUCTS) {
    assert.equal(product.pricing.map(p => p.label).join('|'), 'Rental / day|Rental / month|Sale price');
    assert.equal(product.pricing.map(p => p.value).join('|'), product.listingType === 'rental' ? 'Get Quote|Get Quote|—' : '—|—|Get Quote', 'no unapproved rates or irrelevant prices');
  }
  assert.match(component, /35 details to review/);
  assert.match(component, /INVENTORY_PRODUCTS\.map/);
  assert.match(component, /alt=\{product.imageAlt\}/);
  assert.equal(new Set(DEMO_PRODUCTS.map(product => product.category)).size, 3, 'the demo must span three industrial categories');
  const reach = DEMO_PRODUCTS.find(product => product.model === 'ETV 216i');
  assert.equal(reach.specification, '10.7 m max. lift', 'maximum mast qualification stays in inventory');
  assert.ok(reach.specs.some(spec => spec.label === 'Max. lift' && spec.value === '10.7 m'));
  assert.match(reach.factNote, /mast configuration/);
  const drill = DEMO_PRODUCTS.find(product => product.brand === 'Bosch');
  assert.equal(drill.specs.map(spec => spec.value).join('|'), '800 W|2.7 J|SDS plus');
  const bearing = DEMO_PRODUCTS.find(product => product.brand === 'NSK');
  assert.equal(bearing.specs.map(spec => spec.value).join('|'), '25 mm|52 mm|15 mm');
  assert.match(bearing.imageAlt, /cutaway illustration/);
  for (const product of [drill, bearing]) assert.ok(product.specs.every(spec => !/lift|rated load/i.test(spec.label)), 'non-truck products show their own specifications');
  assert.doesNotMatch(component, /electric equipment for our warehouse|What load and lift height do you need/, 'mixed products are catalogue examples, not interchangeable recommendations');
});

test('Webstore cards hand off directly, followed by rental and sales enquiries that keep looping', async () => {
  const { advanceStoryTime, getStoryFrame, STORY_STAGES, STORY_DURATION, CHAT_LOOP_START, CHAT_TURNS } = await loadListingModule('storyboard');
  const start = STORY_STAGES[2].start;
  const beats = [[0, 'sync', -1, 0], [1600, 'recommendations', -1, 0],
    [2400, 'rental-question', 0, 190], [2650, 'rental-typing', 0, 190], [3350, 'rental-reply', 0, 190],
    [6350, 'sales-question', 1, 360], [6600, 'sales-typing', 1, 360], [7300, 'sales-reply', 1, 360]];
  for (const [offset, beat, turn, scroll] of beats) {
    const frame = getStoryFrame(advanceStoryTime(start, offset));
    assert.equal(frame.stage, 2);
    assert.equal(frame.chatBeat, beat);
    assert.equal(frame.chatTurn, turn);
    assert.equal(frame.chatScroll, scroll);
  }
  for (let loop = 0; loop < 3; loop++) {
    for (const [offset, beat] of beats.slice(2)) {
      const time = advanceStoryTime(STORY_DURATION, loop * (STORY_DURATION - CHAT_LOOP_START) + offset - 2400);
      assert.equal(getStoryFrame(time).stage, 2, 'chat never drops back to inventory or re-syncs');
      assert.equal(getStoryFrame(time).chatBeat, beat);
    }
  }
  assert.equal(advanceStoryTime(STORY_DURATION - 10, 20), CHAT_LOOP_START + 10);
  assert.equal(advanceStoryTime(start + 1500, 0), start + 1500, 'pause preserves the beat');
  assert.equal(advanceStoryTime(start + 1500, -100), start + 1500);
  assert.equal(getStoryFrame(start + 2600).chatBeat, 'rental-question', 'the conversation continues within one second of the cards landing');
  for (const questionTime of [2400, 6350]) {
    assert.match(getStoryFrame(start + questionTime + 300).chatBeat, /-typing$/, 'show feedback promptly after each question');
    assert.match(getStoryFrame(start + questionTime + 1000).chatBeat, /-reply$/, 'each reply arrives within one second, not a long typing hold');
    assert.match(getStoryFrame(start + questionTime + 3000).chatBeat, /-reply$/, 'leave completed replies on screen long enough to read');
  }
  assert.equal(getStoryFrame(0).chatBeat, 'idle', 'Replay starts before the chat');
  assert.equal(getStoryFrame(0, true).chatBeat, 'recommendations', 'reduced motion shows stable recommendations');
  assert.match(CHAT_TURNS[0].reply, /dates and delivery location/);
  assert.match(CHAT_TURNS[1].reply, /20 units.*bearing variant/);
  const css = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.module.css', import.meta.url), 'utf8');
  assert.match(css, /\[data-stage="2"\] \.productPage \{[^}]*opacity: 1;/, 'cards must not disappear during their move into chat');
  assert.match(css, /\.chatTranscript[^}]*--chat-scroll/);
});

test('Webstore preview keeps the mobile hero graphic compact while preserving native controls', async () => {
  const css = await readFile(new URL('../app/webstore-2-ai-webstore-preview/webstore-concept.module.css', import.meta.url), 'utf8');
  const mobile = css.slice(css.indexOf('@media (max-width: 767px)'), css.indexOf('@keyframes listingDropMobile'));
  assert.match(mobile, /\.mount \{ margin-top: 18px; \}/);
  assert.match(mobile, /\.stageNav button \{[^}]*min-height: 78px/);
  assert.match(mobile, /\.canvasViewport \{ --mobile-scene-scale: \.46;[^}]*height: 570px/);
  assert.match(mobile, /\[data-stage="1"\] \.canvasViewport \{ --mobile-scene-scale: \.62; height: 496px; \}/);
  assert.match(mobile, /\[data-stage="2"\] \.canvasViewport \{ --mobile-scene-scale: \.8; height: 554px; \}/);
  assert.match(mobile, /\.storyFooter \{[^}]*grid-template-columns: minmax\(0, 1fr\) auto;[^}]*min-height: 72px/);
  assert.match(mobile, /\.playback button \{ width: 44px; height: 44px; \}/);
  assert.match(css, /\.chatBody \{[\s\S]*?-webkit-mask-image: linear-gradient\(to bottom, rgb\(0 0 0 \/ 24%\), #000 22px, #000 calc\(100% - 28px\), rgb\(0 0 0 \/ 24%\)\)/);
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
  assert.match(trust, /We care about your business data/);
  assert.match(trust, /href="\/legal\/privacy"/);
  assert.match(trust, /aria-label="Data protection and trust principles"/);
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
  assert.match(body, /From your inventory to <span class="selectionEmphasis">recommendation<\/span>/);
  assert.match(body, /<ol class="stages" aria-label="Ingest, Reason, Retrieve, Recommend: from inventory to recommendation">/);
  assert.doesNotMatch(body, /From your catalogue to|a suitable shortlist/);
  assert.equal((body.match(/class="selectionOverview"/g) || []).length, 4);
  assert.match(body, /Structure product knowledge/);
  assert.match(body, /Clarify the buyer’s needs/);
  assert.match(body, /Find supported options/);
  assert.match(body, /Explain the recommendation/);
  assert.match(body, /Approved knowledge/);
  assert.match(body, /Known/);
  assert.match(body, /Still needed/);
  assert.match(body, /Closest supported option/);
  assert.match(body, /Team confirms suitability, availability and terms/);
  assert.doesNotMatch(body, /AR20JE-2|reach coordinates|Reasoning \+ decision layer|7 mixed equipment records|Toyota 8FBMT50|recommendPhone/);
  const educationCss = await readFile(new URL('../app/home-education.module.css', import.meta.url), 'utf8');
  assert.doesNotMatch(educationCss, /\.stages::before/, 'the alternating layout does not restore the previous timeline rule');
  assert.match(educationCss, /\.stages li:nth-child\(2\) \{ --stage-color: var\(--blue\); \}/);
  assert.match(educationCss, /\.stages li:nth-child\(4\) \{ --stage-color: var\(--red\); \}/);
  assert.match(educationCss, /\.stages \{[^}]*max-width: 1120px;[^}]*gap: 84px;[^}]*margin: 72px auto 0/);
  assert.match(educationCss, /\.approach \.intro \{[^}]*max-width: 1120px;[^}]*margin-inline: auto;[^}]*text-align: center/,
    'the locked process layout retains the centred section introduction');
  assert.match(educationCss, /\.stages li \{[^}]*display: grid;[^}]*grid-template-columns: minmax\(0, 1\.25fr\) minmax\(0, 1fr\);[^}]*gap: 72px/);
  assert.match(educationCss, /\.stages li:nth-child\(even\) \.stageVisual \{ grid-column: 2; grid-row: 1; \}/);
  assert.match(educationCss, /\.stages li:nth-child\(even\) \.stageCopy \{ grid-column: 1; grid-row: 1; \}/);
  assert.match(educationCss, /\.stageVisual \{[^}]*height: 410px;[^}]*border-radius: 24px;[^}]*box-shadow: none/);
  assert.match(educationCss, /\.stages h3 \{[^}]*font-size: clamp\(30px, 3vw, 42px\)/, 'step titles retain the established alternating-layout hierarchy');
  assert.match(educationCss, /@media \(max-width: 1100px\)[\s\S]*?\.stageVisual \{ height: 360px; \}/, 'compact desktop retains large process graphics');
  assert.match(educationCss, /@media \(max-width: 767px\)[\s\S]*?\.stages li \.stageVisual, \.stages li:nth-child\(even\) \.stageVisual \{ grid-column: 1; grid-row: 2; \}/,
    'mobile keeps each explanation before its matching graphic');
  assert.match(educationCss, /@media \(max-width: 767px\)[\s\S]*?\.stageVisual \{ height: 310px; border-radius: 20px; \}/);
  for (const path of requestedRoutes.slice(10)) assert.ok(body.includes(`href="/${path}"`), path);
  for (const path of ['ai-sales-agent', 'ai-webstore-suite']) assert.ok(body.includes(`href="/${path}"`));
  assert.doesNotMatch(body, /href="\/ai-agent-console"/, 'the removed Console note must not leave a hidden destination');
  assert.ok(faq.includes('href="/book-a-demo"'));
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
  for (const title of ['Company Brand', 'Product Catalogue', 'Technical Specifications', 'SOPs and Process Knowledge']) assert.ok(foundationsHtml.includes(title));
  for (const supersededTitle of ['Your company brand', 'Your product catalogue', 'Your technical specifications', 'Your SOPs and process knowledge']) assert.ok(!foundationsHtml.includes(supersededTitle));
  assert.match(foundationsHtml, /supported plans/);
  assert.match(foundationsHtml, /approved qualification steps, escalation rules and handover procedures/);
  assert.match(foundationsHtml, /Following your SOP/);
  assert.match(foundationsHtml, /hand over for team approval/);
  assert.doesNotMatch(foundationsHtml, /Suitable recommendations|Option to review|Based on supplied data/);
  assert.doesNotMatch(foundationsHtml, /Illustrative shortlist|Illustrative workflows/);
  assert.doesNotMatch(foundationsHtml, /guaranteed|100%|real-time|trained on|<button\b|<input\b|<form\b/i);
  assert.match(foundationsHtml, /src="\/images\/emma-sales-agent.jpg"/);
  const foundationsCss = await readFile(new URL('../app/home-agent-foundations.module.css', import.meta.url), 'utf8');
  assert.doesNotMatch(foundationsCss, /\.inventory\s*\{[^}]*transform:\s*scale\(\.8\)/, 'the product-catalogue card retains its full grid size');
  assert.match(foundationsCss, /grid-column: span 2/);
  assert.match(foundationsCss, /max-width: 767px/);
  assert.match(foundationsCss, /grid-template-columns: minmax\(0, 1fr\)/);
  assert.match(foundationsCss, /\.grid \{ display: grid; grid-template-columns: repeat\(3, minmax\(0, 1fr\)\); gap: 24px; \}/);
  assert.match(foundationsCss, /\.scene \{ min-width: 0; min-height: 296px; flex: 1; padding: 32px;[^}]*transform: scale\(\.9\); transform-origin: center;/);
  assert.match(foundationsCss, /@media \(min-width: 980px\) \{\s*\.frame \{ width: 76\.5%; zoom: \.85; \}/, 'the complete desktop composition is proportionally scaled to 85%');
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
  assert.ok(faq.indexOf('href="/book-a-demo"') > faq.lastIndexOf('</details>'), 'the preserved demo action follows the full-width FAQ list');
  for (const [question, answer] of exports.HOME_QUESTIONS) {
    assert.ok(faq.includes(question));
    assert.ok(faq.includes(answer));
  }
  assert.doesNotMatch(html, /<h1\b|<iframe\b|<form\b|<video\b|aria-sales-agent-cta|ai-marketplace-hero|guaranteed/i);
  assert.doesNotMatch(html, /Marketplace|confidence/i, 'the existing educational copy keeps its original Antbuildz AI scope');
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
  assert.match(body, /A searchable product library for buyers and your Agent<\/h3>/);
  assert.match(body, /Structured specifications and supported inventory help your Agent answer product questions and recommend suitable options with clearer context\./);
  assert.match(body, /Inventory freshness and visibility depend on your data, plan, connections and indexing\./);
  assert.doesNotMatch(graphicsSource, /setInterval|setTimeout|requestAnimationFrame|@remotion|<button\b|<a\b/, 'illustrations are static and do not impersonate controls');
  assert.match(body, /Start with approved product knowledge\. The Agent clarifies the buyer’s needs, finds relevant options and explains what your team should review\./);
  assert.doesNotMatch(body, /The Agent structures that information/);
  assert.doesNotMatch(body, /Similarity-only retrieval/);
  assert.doesNotMatch(body, /Illustrative selection example|Generic options; outcomes depend|The shortlist and enquiry details support your sales team/);
  assert.deepEqual(Array.from(exports.HOME_SELECTION_STEPS, ([title]) => title), ['Ingest', 'Reason', 'Retrieve', 'Recommend']);
  assert.match(body, /aria-label="Ingest, Reason, Retrieve, Recommend: from inventory to recommendation"/);
  for (const [title, label, description] of exports.HOME_SELECTION_STEPS) {
    assert.ok(body.includes(`>${title}</span>`));
    assert.ok(body.includes(`<h3>${label}</h3>`));
    assert.ok(body.includes(description));
    assert.ok(description.split(/\s+/).length <= 16, 'each step stays concise');
  }
  assert.match(body, /Turn approved catalogues, specification tables and diagrams into structured product knowledge/);
  assert.match(body, /Identify known requirements, missing constraints and the right next action before matching/);
  assert.match(body, /Search approved catalogue and supported inventory records for relevant options/);
  assert.match(body, /Explain the strongest option and flag suitability, availability and commercial checks for review/);
  assert.match(body, /Product catalogue/);
  assert.match(body, /Specifications · diagrams · rules/);
  assert.match(body, /Technical fields/);
  assert.match(body, /Availability rules/);
  assert.match(body, /5 t electric forklift/);
  assert.match(body, /Rated load · power/);
  assert.match(body, /Lift · aisle · load/);
  assert.match(body, /Clarify before matching/);
  assert.match(body, /Approved catalogue \+ supported inventory/);
  assert.match(body, /Relevant category/);
  assert.match(body, /Closest supported option/);
  assert.match(body, /Ready to compare/);
  assert.match(body, /Outside the need/);
  assert.match(body, /Which option best fits\?/);
  assert.match(body, /Explained against the buyer’s stated requirements/);
  assert.match(body, /Team confirms suitability, availability and terms/);
  assert.doesNotMatch(body, /intent_extraction|technical_query_deepening|function_router|general_classifier|TOTAL_TOKENS|COST_USD|openai\/|google\/|chain-of-thought/i);
  assert.doesNotMatch(body, /AR20JE-2|Toyota 8FBMT50|Hyster J3\.5XN|Linde H50D|JCB 540-180|JLG E450AJ|Genie GS-4047|Bobcat E50z|recommendPhone/);
  const graphicsCss = await readFile(new URL('../app/home-graphics.module.css', import.meta.url), 'utf8');
  assert.match(graphicsCss, /\.selectionOverview \{[^}]*height: 100%;[^}]*place-items: center/);
  assert.match(graphicsCss, /\.overviewFlow \{[^}]*grid-template-columns: minmax\(0, 1fr\) 42px minmax\(0, 1fr\)/);
  assert.match(graphicsCss, /\.overviewStack \{[^}]*display: grid;[^}]*gap: clamp\(9px, 1\.2vw, 14px\)/);
  assert.match(graphicsCss, /\.overviewOptions \.overviewOptionActive \{[^}]*background: color-mix/);
  assert.match(graphicsCss, /\.overviewAgent img \{[^}]*border-radius: 50%/);
  assert.match(graphicsCss, /@keyframes overviewTransfer/);
  assert.match(graphicsCss, /prefers-reduced-motion: reduce[\s\S]*?\.overviewArrow i \{ animation: none; \}/);
  assert.match(body, /branded industrial storefront/);
  assert.match(body, /dedicated page for each product/);
  assert.match(body, /support SEO and GEO discovery/);
  assert.match(body, /Start with the AI Sales Agent/);
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
  assert.ok(productSection.indexOf('Start with the AI Sales Agent') < productSection.indexOf('class="products"'), 'the relationship description belongs directly below its title');
  const productCards = [...productSection.matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/g)];
  assert.equal(productCards.length, 2);
  for (const [index, path] of ['ai-sales-agent', 'ai-webstore-suite'].entries()) {
    assert.equal((productCards[index][1].match(/<a\b/g) || []).length, 1, 'each card has one native focusable destination');
    assert.ok(productCards[index][1].includes(`href="/${path}"`));
  }
  const productDescriptions = productCards.map(([, card]) => card.match(/<h3>[^<]+<\/h3><p>([^<]+)<\/p>/)?.[1] ?? '');
  assert.deepEqual(productDescriptions.map(copy => copy.trim().split(/\s+/).length), [30, 30], 'the Agent and Webstore descriptions retain a balanced 30-word rhythm');
  assert.match(productSection, /Optional addition/);
  assert.match(productSection, /href="\/ai-sales-agent" aria-label="Explore AI Sales Agent"><svg/);
  assert.match(productSection, /href="\/ai-webstore-suite" aria-label="Explore AI Webstore Suite"><svg/);
  assert.doesNotMatch(productSection, />AI (?:Sales Agent|Webstore Suite) <svg/,
    'the card destinations use icon-only controls rather than repeated visible labels');
  assert.doesNotMatch(productSection, />Explore AI (?:Sales Agent|Webstore Suite)/);
  assert.match(productSection, /checks approved product information and supported inventory/);
  assert.match(productSection, /Structured specifications and supported inventory help your Agent/);
  assert.match(productSection, /Inventory freshness and visibility depend on your data, plan, connections and indexing/);
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
  assert.match(educationCss, /\.trustPanel \{[^}]*grid-template-columns: auto minmax\(0, 1fr\);[^}]*border-radius: 28px/);
  assert.match(educationCss, /@media \(max-width: 767px\)[\s\S]*\.trustPanel \{[^}]*grid-template-columns: 1fr/);
  assert.doesNotMatch(body, /Illustrative records|Illustrative answer/);
  // The original brief's copy budget excludes later explicitly requested section transfers; the upper allowance also includes the expanded, fact-checked UI labels and three-option recommendation table inside the four process illustrations.
  const words = html.replace(trust, '').replace(marketHtml, '').replace(foundationsHtml.replace(/<link\b[^>]*>/g, ''), '').replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').trim().split(/\s+/).length;
  assert.ok(words >= 500 && words <= 1100, `Expected 500–1,100 words including illustration labels, received ${words}`);
  const page = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8');
  const productPage = await readFile(new URL('../app/[slug]/page.tsx', import.meta.url), 'utf8');
  assert.match(page, /<OriginalAntbuildzApp\s*\/><HomeEducation\s*\/>/);
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
