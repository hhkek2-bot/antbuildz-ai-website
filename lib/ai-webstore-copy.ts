// Canonical AI Webstore Suite copy for the promoted listing workflow.
import { setSalesAgentText as setText } from './ai-sales-agent-copy';

// Select only the canonical Webstore route. Exact text replacements preserve the
// transferred React nodes, layouts, animations, FAQ behaviour and link targets.
export const WEBSTORE_DESCRIPTION = "Extend your AI Agent with a browsable product catalogue, dedicated product pages and supported inventory workflows through the AI Webstore Suite.";

// The transferred hero has one non-wrapping desktop description slot. Keep the
// opening concise; the sections below explain recommendations and discovery.
export const WEBSTORE_HERO = 'Give your Agent structured product and inventory data for more accurate recommendations.';

export const WEBSTORE_INVENTORY = "Connect your AI Agent to the AI Webstore Suite catalogue and supported inventory sources. Use product specifications and recorded availability to narrow suitable options. Inventory connections and update frequency depend on your plan and setup.";

export const WEBSTORE_MARKET_SHIFT = {
  eyebrow: 'THE AI-ERA BUYER',
  headline: 'AI Has Changed What Buyers Expect',
  description: 'Modern buyers expect searchable products, instant answers and AI-assisted comparison.',
  cards: [
    ['Research Starts Online', 'Buyers research products, specifications and suppliers before contacting sales.'],
    ['Fast Answers Expected', 'Buyers expect immediate product answers without waiting for sales.'],
    ['Buyers Compare Independently', 'Buyers explore products and compare suitable options at their own pace.'],
    ['AI Shapes Shortlists', 'AI-assisted research helps buyers compare products and shortlist suppliers.'],
  ],
} as const;

export const WEBSTORE_CONNECTED_AGENT = {
  eyebrow: "WEBSTORE + AI AGENT",
  headline: ['Turn Discovery Into ', 'Recommendations'],
  description: 'Connect structured product data to recommend suitable options and capture buyer intent.',
} as const;

export const WEBSTORE_BENEFITS = {
  eyebrow: 'DISCOVERY TO ENQUIRY',
  headline: ['Make Every Product ', 'Discoverable and Sales-Ready'],
  description: 'Help buyers discover, compare and enquire through structured product pages.',
  cards: [
    ['Greater Product Visibility', 'Structure product pages to support SEO and GEO discovery.'],
    ['Higher Enquiry Conversion', 'Guide buyers towards clear enquiry and quotation actions.'],
    ['Wider Multilingual Reach', 'Present product information clearly across supported languages.'],
    ['More Accurate Recommendations', 'Give your Agent structured data for better product matching.'],
    ['Less Manual Work', 'Let your Agent handle early questions before your sales team steps in.'],
    ['Lasting Organic Presence', 'Keep each product discoverable beyond individual paid advertising campaigns.'],
  ],
} as const;

export const WEBSTORE_HOW_IT_WORKS = {
  eyebrow: 'HOW IT WORKS',
  headline: ['From Product Discovery to ', 'Enquiry'],
  description: 'Structured product data helps buyers discover, compare, receive recommendations and enquire.',
  steps: [
    ['Discover Products', ['Webstore'], 'Buyers find your product pages through search, AI or shared links.'],
    ['Ask Questions', ["AI Agent"], 'Buyers ask questions about products, applications and requirements.'],
    ['Understand Needs', ["AI Agent"], 'The Agent identifies specifications, quantity, budget, location and timing.'],
    ['Match Products', ["AI Agent"], 'The Agent compares buyer needs with specifications and available inventory.'],
    ['Recommend Products', ["AI Agent", 'Webstore'], 'The Agent recommends products and shares Webstore pages for review.'],
    ['Submit Enquiry', ['Webstore', 'Sales Team'], 'Buyers submit product choices and requirements for your sales team.'],
  ],
} as const;

const WEBSTORE_JOURNEY_SOURCE_ACCENTS = ['purple', 'blue', 'orange', 'yellow', 'green', 'red'] as const;
export const WEBSTORE_JOURNEY_ACCENTS = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'] as const;

function alignJourneyAccent(row: HTMLElement, sourceAccent: string, targetAccent: string) {
  if (sourceAccent === targetAccent) return;
  const sourceToken = `--accent-${sourceAccent}`;
  const targetToken = `--accent-${targetAccent}`;
  row.querySelectorAll<HTMLElement>('[style]').forEach(element => {
    const current = element.getAttribute('style') ?? '';
    const next = current.replaceAll(sourceToken, targetToken);
    if (next !== current) element.setAttribute('style', next);
  });
}

export const WEBSTORE_FEATURES = {
  eyebrow: 'AI WEBSTORE SUITE FEATURES',
  headline: 'What the Webstore Includes',
  description: 'Manage products, workflows, enquiries, visitor insights and multilingual pages in one place.',
  cards: [
    ['Branded Webstore Builder', 'Customise your branding, banners, product categories and page content.'],
    ['Catalogue & Inventory Management', 'Manage specifications, pricing, availability, images and documents in one place.'],
    ['Sales & Rental Workflows', 'Configure purchase, rental and enquiry journeys around how your business sells.'],
    ['Quote & Enquiry Builder', 'Collect product selections, quantities, timelines, locations and buyer contact details.'],
    ['Webstore Visitor Insights', 'Track visitor activity, page performance and product interest across your Webstore.'],
    ['Multilingual Webstore Pages', 'Present product pages clearly across the supported languages you configure.'],
  ],
  note: 'Feature availability depends on your selected plan and setup.',
} as const;

export const WEBSTORE_COMPARISON = {
  eyebrow: 'SEE THE DIFFERENCE',
  headline: ['Start With the Agent. ', 'Expand With the Webstore.'],
  description: "Use the AI Agent with your existing business knowledge. Connect the Webstore for structured product pages, inventory context and sales workflows.",
  columns: ["AI Agent", '+ AI Webstore Suite'],
  rows: [
    ['Best For', 'Product guidance, recommendations and enquiry capture.', 'Adds product browsing, inventory context and structured sales workflows.'],
    ['Knowledge Source', 'Approved catalogues, PDFs, FAQs, websites and business documents.', 'Adds structured listings, specifications, pricing and supported inventory data.'],
    ['Buyer Experience', 'Buyers ask questions, receive guidance and share their requirements.', 'Adds product browsing, dedicated pages, comparisons and clear enquiry actions.'],
    ['Product Recommendations', 'Recommends suitable options from the product knowledge you provide.', 'Uses structured product and inventory data for more accurate matching.'],
    ['Online Discovery', 'Engages buyers through your website and shared Agent links.', 'Adds structured product pages that support SEO and GEO discovery.'],
    ['Marketplace Exposure', 'Uses your existing website, campaigns and marketing channels.', 'Syncs listings to Antbuildz Marketplace for visibility across both channels.'],
    ['Sales Workflows', 'Captures product needs, quantities, timing, location and contact details.', 'Adds sales, rental, quotation and structured enquiry workflows.'],
    ['Long-Term Value', 'Builds consistent product conversations and richer enquiry context.', 'Builds an organic product presence buyers can discover and revisit.'],
  ],
  note: 'Connect the Webstore to expand product discovery, marketplace exposure and sales workflows.',
} as const;

export const WEBSTORE_CLOSING_CTA = {
  headline: ['Want to See How the', ' ', 'AI Webstore Suite Works?'],
  description: "Book a demo to see how your catalogue, inventory and AI Agent work together to help buyers discover products and prepare clearer enquiries.",
} as const;

export const WEBSTORE_FAQS = [
  ['The Antbuildz AI Webstore Suite is an AI Webstore for industrial products. It combines a structured product library, branded Webstore, sales, rental and enquiry workflows, quotation tools, analytics, multilingual capabilities, and a built-in AI Sales Agent. It supports businesses selling machinery, equipment, tools, components, spare parts, hardware, materials, and supplies.',
    "AI Webstore Suite is the connected product, inventory and store layer for your AI Agent. It adds a browsable catalogue and dedicated pages for complex products, including equipment, instruments, electronics and parts. Sales and rental capabilities depend on your plan and setup."],
  ['The AI Webstore Suite combines a structured product library, branded Webstore, rental and sales workflows, quotation tools, analytics, and the built-in AI Sales Agent. The Antbuildz AI Sales Agent is for companies that already have a website or digital catalogue and want to add AI-guided product engagement without launching a new Webstore.',
    "The AI Agent answers questions, recommends products and qualifies enquiries using your approved knowledge. The AI Webstore Suite adds structured listings, product pages and supported inventory context. You can use the agent without a webstore or choose a combined plan from the beginning."],
  ['Yes. The AI Sales Agent is included in the AI Webstore Suite. It uses approved product information to answer enquiries, recommend suitable options, and capture buyer requirements before quotation or human sales handover.',
    "Yes. The Sales and Rental+ plans combine the AI Agent with AI Webstore Suite capabilities. The Agent uses approved knowledge to guide product questions, recommendations and enquiries. You can also start with the Agent plan without launching a Webstore."],
  ['The Suite includes a Webstore Builder, Product Catalogue and Inventory Management, sales, rental and enquiry workflows, quotation tools, buyer analytics, multilingual content, and a built-in AI Sales Agent.',
    'Available capabilities include the Webstore Builder, product catalogue, inventory management, enquiry tools, buyer analytics and multilingual content. Sales adds sales Webstore capabilities; Rental+ includes sales plus rental capabilities. Features, integrations and workflows depend on your plan and setup.'],
  ['Yes — Antbuildz Webstore is available globally with AI-powered translation supporting 21 languages, enabling businesses to reach both local and international customers.',
    'Please confirm availability for your market and the supported languages during your demo. Product-page translation and multilingual agent conversations are separate capabilities; the options available depend on your plan and setup.'],
] as const;

export const WEBSTORE_REPLACEMENTS = [
  // Broaden the preview's supporting examples without changing shared bundles.
  ['Boom Lift 20m', 'Bosch GBH 2-26 DRE'],
  ['Scissor Lift 12m', 'NSK 6205 bearing'],
  ['Telehandler 4T', 'Jungheinrich ETV 216i'],
  ['excavator rental', 'tools and replacement parts'],
  ['Hydraulic Excavator 20T', 'Rotary Hammer Specifications'],
  ['Mini Excavator Daily Rental', 'Bearing Dimensions & Fit'],
  ['Need a 20T excavator…', 'Need tools and bearings…'],
  ['20T', 'Model'],
  ['Forklift 3T price?', 'NSK 6205 dimensions?'],
  ['3T Diesel Forklift — $24,800. Stock: 4. Lead time 5 days.', 'NSK 6205: 25 mm bore, 52 mm outside diameter, 15 mm width.'],
  ['Asked: forklift availability · quoted', 'Asked: bearing dimensions · follow-up'],
  ['Hi! Looking for a specific machine today?', 'Hi! Which product are you looking for?'],
  ['Need a 3-ton forklift, indoor use', 'I need a rotary hammer for concrete drilling.'],
  ['Got it. I have 4 electric units matching that. Want pricing?', 'What hole diameter and power supply do you need?'],
  ['Hi, can I get the price for a 40m boom lift rental?', 'Hi, can I enquire about tools and replacement parts?'],

  ['Deploy the AI Sales Agent with a complete AI Webstore, unique product pages and built-in inventory management—or add the standalone Agent to your existing website.', WEBSTORE_HERO],
  // Retain the existing link, its two text nodes and arrow icon.
  ['Prefer a lighter way to start?', 'Explore the '],
  ['Quickly deploy the AI Sales Agent.', "AI Agent"],
  ['The Gap', 'THE PRODUCT DISCOVERY GAP'],
  ['Why Industrial Product Enquiries', 'Every Product Needs a'],
  ['Get Lost', 'Discoverable Identity'],
  ['Traffic alone does not create qualified enquiries. When product pages lack clear specifications, commercial information, guidance, and quotation paths, interested buyers leave before contacting sales.', 'A structured product page helps search engines and AI platforms understand, surface and connect each product with relevant buyers.'],
  ['Weak Product Page Conversion', 'Weak Product Identity'],
  ['Traffic reaches product pages that do not explain specifications, suitability, pricing, availability, or the next enquiry step clearly enough.', 'Traffic reaches pages that do not clearly explain the product, its applications or the next step.'],
  ['Poor Product Search Visibility', 'Product Information Stays Hidden'],
  ['Product information hidden in PDFs, catalogues, images, or weak pages is harder for search engines and AI tools to understand, cite, and recommend.', 'Specifications buried in PDFs, images and catalogues are harder for search engines and AI platforms to discover.'],
  ['Unstructured Product Information', 'Fragmented Product Information'],
  ['Incomplete specifications, inconsistent categories, and missing pricing or availability make it difficult for buyers to compare options and decide.', 'Specifications, categories, pricing and availability spread across different files are difficult to interpret and compare.'],
  ['No Clear Enquiry or Quote Path', 'Discovery Without a Next Step'],
  ['Many websites lack clear enquiry flows, quotation actions, product comparison, or interactive guidance that moves an interested buyer forward.', 'Even when buyers find a product, unclear enquiry and quotation paths prevent them from moving forward.'],
  ['Too Much Manual Sales Dependence', 'Discovery Still Depends on Sales'],
  ['Buyers still need to call, email, or WhatsApp sales teams just to get basic answers before they can move forward.', 'Buyers must call or message your team for basic product information before they can make a decision.'],
  ['Slow Buyer Experience', 'A Slow Path to Enquiry'],
  ['When pricing, availability, specs, and quotations require repeated back-and-forth communication, buyers lose momentum and choose faster suppliers.', 'When buyers must repeatedly search, ask and wait, they lose momentum and move to another supplier.'],
  ['Market Shift', WEBSTORE_MARKET_SHIFT.eyebrow],
  ['AI Is Changing', ''],
  ['How B2B Buyers Buy', WEBSTORE_MARKET_SHIFT.headline],
  ['B2B buyers now use AI, search, websites, and marketplaces to research products before contacting a supplier.', WEBSTORE_MARKET_SHIFT.description],
  ['They compare specifications, pricing, availability, rental or purchase options, and supplier credibility before sending an enquiry.', ''],
  ['Buyer Enquiries Start Online', WEBSTORE_MARKET_SHIFT.cards[0][0]],
  ['Buyers research products, suppliers, specifications, pricing, availability, and rental or purchase options before they contact sales.', WEBSTORE_MARKET_SHIFT.cards[0][1]],
  ['Instant Answers Are Expected', WEBSTORE_MARKET_SHIFT.cards[1][0]],
  ['Buyers expect fast answers about products, pricing, availability, delivery, and commercial terms. Slow replies reduce confidence and send them elsewhere.', WEBSTORE_MARKET_SHIFT.cards[1][1]],
  ['Product Discovery Is Self-Directed', WEBSTORE_MARKET_SHIFT.cards[2][0]],
  ['Buyers want to explore catalogues, compare options, review specifications, and understand product suitability before speaking with sales.', WEBSTORE_MARKET_SHIFT.cards[2][1]],
  ['AI Shapes Supplier Shortlists', WEBSTORE_MARKET_SHIFT.cards[3][0]],
  ['Buyers use AI-assisted research to compare product fit, pricing clarity, supplier credibility, and decision readiness before deciding who to contact.', WEBSTORE_MARKET_SHIFT.cards[3][1]],
  ['Built-In AI Sales Agent', "Connected AI Agent"],
  ['Your built-in AI Sales Agent understands your product and business information, guides buyers to suitable options, and captures quote-ready requirements.', "Your AI Agent uses connected product and business information to answer questions, recommend suitable options and capture quotation requirements."],
  ['Industrial Product SEO & AI Discovery', WEBSTORE_BENEFITS.cards[0][0]],
  ['Turn product pages into structured, searchable content that search engines and AI tools can understand, cite, and recommend.', WEBSTORE_BENEFITS.cards[0][1]],
  ['Enquiry & Quotation Conversion', WEBSTORE_BENEFITS.cards[1][0]],
  ['Guide visitors from product discovery to clear enquiry actions, quotation requests, and more complete buying requirements.', WEBSTORE_BENEFITS.cards[1][1]],
  ['Multilingual Product Selling', WEBSTORE_BENEFITS.cards[2][0]],
  ['Let buyers browse translated product pages and ask questions in their preferred language across different markets.', WEBSTORE_BENEFITS.cards[2][1]],
  ['Auto-translate', 'Language examples'],
  ['20+', 'AI'],
  ['AI Product Recommendations', WEBSTORE_BENEFITS.cards[3][0]],
  ['Help buyers find suitable machinery, tools, parts, or supplies using their application, specifications, quantity, and commercial needs.', WEBSTORE_BENEFITS.cards[3][1]],
  ['AI Sales Agent Included', WEBSTORE_BENEFITS.cards[4][0]],
  ['Answer detailed product questions, recommend suitable options, and capture quotation-ready requirements using your approved business information.', WEBSTORE_BENEFITS.cards[4][1]],
  ['Build a Lasting Digital Asset', WEBSTORE_BENEFITS.cards[5][0]],
  ['Build structured Webstore pages that keep creating visibility, search value, and enquiry opportunities beyond paid traffic.', WEBSTORE_BENEFITS.cards[5][1]],
  ['Compounding visibility', 'Product discovery'],
  ['Live inventory intelligence', 'Connected product information'],
  ['The Antbuildz AI Sales Agent connects to the Antbuildz Webstore Suite, its inventory management system, and supported third-party tools. It retrieves accurate product details and availability, then recommends the right options for each customer.', WEBSTORE_INVENTORY],
  ['Live product & inventory data', 'Catalogue & inventory context'],
  ['Antbuildz Webstore', 'AI Webstore Suite'],
  ['Native integration', 'Connected catalogue'],
  ['Google Sheets & Excel', 'Spreadsheet imports'],
  ['Synced data', 'Uploaded product data'],
  ['ERP & Inventory Systems', 'Supported inventory'],
  ['API integration', 'Connection by setup'],
  ['The buyer submits selected products, quantities, location, timeline, delivery details, budget, contact details, and purchase or rental intent for sales follow-up.', 'The buyer submits product choices, quantities, timing, delivery needs and contact details for your sales team to review and quote.'],
  ['Manage your product library, sales, rental and enquiry journeys, quotations, analytics, and multilingual content in one connected platform.', "Manage your catalogue, inventory and enquiry workflows, connected to your AI Agent."],
  ['Give buyers a structured Webstore experience through the AI Webstore Suite while your built-in AI Sales Agent guides product discovery and enquiry capture.', 'Support product guidance and quotation handover. Features, rental workflows and integrations depend on your plan.'],
  ['Customize your branding, banners, product categories, and content to create a professional buying experience for your market.', 'Customise your branding, banners, product categories and content for your customers.'],
  ['Organize products, specifications, categories, pricing, availability, images, and documents so every listing is easy for buyers, search engines, and AI to understand.', 'Organise specifications, categories, pricing, recorded availability, images and documents into clear product listings.'],
  ['Capture complete requirements without delay.', 'Capture the details needed for follow-up.'],
  ['Present product pages and buyer conversations in multiple languages to support local and international markets.', 'Present product pages in supported languages. Translation options depend on your plan and setup.'],
  ['Your AI Sales Agent works across time zones, channels, and languages. It captures and qualifies enquiries 24/7, so your team can focus on higher-value closing.', "Your AI Agent can capture and qualify enquiries beyond office hours, with or without a webstore. Supported channels and languages depend on your setup."],
  ['Deploy your AI Sales Agent everywhere.', 'Connect conversations across supported channels.'],
  ['Capture and route qualified enquiries.', 'Capture requirements for sales follow-up.'],
  ['The future of every website and online store is interactive. Let visitors ask questions, discover the right products, and turn every visit into a qualified enquiry — 24/7.', 'Let visitors ask questions, explore suitable products and share the requirements your sales team needs.'],
  ['Share your AI Agent link through WhatsApp, Facebook Messenger, WeChat, Telegram, or broadcast messages to guide customers into structured product and sales conversations.', "Share your AI Agent link in messaging channels to start product conversations. Sharing a link does not require a native messaging integration."],
  ['Scale across borders with one AI Agent that engages new markets, supports different languages, and responds across time zones.', 'Support enquiries across time zones using the languages available for your agent setup.'],
  ['Turn product specifications, pricing, availability rules, policies, and sales terms into a searchable brain your team can use across every conversation.', "Give your AI Agent approved specifications, pricing guidance, availability rules and sales terms to use in buyer conversations."],
  ['AI Agent Control', 'AI Agent Console'],
  ['Control Center', 'Control Centre'],
  ['Spot high-intent enquiries faster and keep every follow-up moving.', 'Review buyer signals and prepare your team for follow-up.'],
  ['Capture and Profile Every Potential Buyer', 'Capture Buyer Details and Requirements'],
  ['Capture buyer details, company information, product interest, quantity, location, rental duration, budget, urgency, and purchase timeline to help your team understand lead quality.', 'Capture the contact details and requirements buyers share, including product interest, quantity, location, timing and budget, for your team to follow up.'],
  ['The AI Webstore Suite is the complete platform and our primary product. The Antbuildz AI Sales Agent is a focused alternative for companies that already have a website.', "Start with the AI Agent for product guidance and enquiry qualification. Connect the AI Webstore Suite when you need structured product listings, dedicated product pages and supported inventory workflows."],
  ['Antbuildz AI Webstore Suite', "AI Agent + AI Webstore Suite"],
  ['Antbuildz AI Sales Agent', "AI Agent"],
  ['The Antbuildz AI Sales Agent adds AI engagement to your existing website.', "Use the AI Agent with your approved product and business knowledge."],
  ['The AI Webstore Suite connects your product library, Webstore, workflows, and built-in AI Sales Agent.', 'Connect the AI Webstore Suite for structured listings, product pages and supported workflows.'],
  ['Traditional websites display information. An AI Webstore helps buyers discover, compare, ask, and enquire through a more interactive buying experience.', "Combine AI Agent conversations with connected product pages to help buyers explore, compare and share requirements for your team to review."],
  ['Build an AI Webstore', "Give Your AI Agent"],
  ['Around Your Business', 'a Connected Catalogue'],
  ['Bring your product catalogue, business knowledge, buyer journeys, quotations, and built-in AI Sales Agent into one connected platform.', "Connect your product catalogue and buyer journeys to your AI Agent, so customers can explore suitable products and your team receives clearer quotation requirements."],
  ['Multilingual Catalog', 'Translated Pages'],
  ['Reach global buyers', 'Support buyer languages'],
  ...WEBSTORE_FAQS,
] as const;

const replacements = new Map<string, string>(WEBSTORE_REPLACEMENTS);

export function correctWebstoreCopy(root: HTMLElement, pathname: string) {
  if (pathname !== '/ai-webstore-suite') return;
  const page = root.querySelector('.webstore2-page');
  if (!page) return;

  const visit = (node: Node) => {
    if (node.nodeType === 3) {
      const current = node.textContent ?? '';
      const replacement = replacements.get(current.trim()) ?? current.trim().replaceAll('AI Sales Agent', 'AI Agent');
      if (replacement !== undefined) {
        const value = current.replace(current.trim(), replacement);
        if (value !== current) node.textContent = value;
      }
    } else if (!['svg', 'script', 'style', 'textarea', 'input'].includes(node.nodeName.toLowerCase())) {
      node.childNodes.forEach(visit);
    }
  };
  visit(page);

  // Keep the inherited logo marquee, but let it read as part of the clean
  // page surface instead of a separately labelled proof band.
  const partnerHeading = page.querySelector<HTMLElement>('section > .ws2-eyebrow-muted');
  if (partnerHeading?.textContent?.trim().toLowerCase() === 'trusted partners') {
    partnerHeading.hidden = true;
    partnerHeading.setAttribute('aria-hidden', 'true');
    partnerHeading.setAttribute('data-antbuildz-partner-heading-removed', 'true');
    partnerHeading.parentElement?.setAttribute('data-antbuildz-logo-strip', 'true');
  }

  // The inherited widgets attach invented match percentages to examples.
  // Real catalogue models should link to specifications, not imply a fit score.
  const exampleNames = new Set(['Bosch GBH 2-26 DRE', 'NSK 6205 bearing', 'Jungheinrich ETV 216i']);
  page.querySelectorAll<HTMLElement>('p.truncate, span.truncate').forEach(label => {
    if (!exampleNames.has(label.textContent?.trim() ?? '')) return;
    const row = label.tagName === 'P' ? label.parentElement?.parentElement : label.parentElement;
    const score = row?.lastElementChild;
    if (!score || score === label || score.tagName !== 'SPAN') return;
    setText(score, 'Specs');
    const bar = row?.querySelector<HTMLElement>('div.overflow-hidden');
    if (bar) bar.hidden = true;
  });

  // Preserve the existing line break and React-owned spans. The former
  // highlighted span stays empty so both headline lines share one treatment.
  setText(page.querySelector('.ws2-hero-shell > .mkt-section-eyebrow'), 'AI WEBSTORE SUITE');
  setText(page.querySelector('.ws2-hero-title'), ['Better Recommendations', 'Start With Your Inventory', '']);
  setText(page.querySelector('.ws2-hero-desc'), WEBSTORE_HERO);
  const connectedAgent = page.querySelector('.ws2-sales-cycle-copy');
  setText(connectedAgent?.querySelector('.mkt-section-eyebrow') ?? null, WEBSTORE_CONNECTED_AGENT.eyebrow);
  setText(connectedAgent?.querySelector('h2') ?? null, WEBSTORE_CONNECTED_AGENT.headline);
  setText(connectedAgent?.querySelector('.mkt-section-desc') ?? null, WEBSTORE_CONNECTED_AGENT.description);
  const benefits = page.querySelector('.ws2-benefits-section');
  setText(benefits?.querySelector('.mkt-section-eyebrow') ?? null, WEBSTORE_BENEFITS.eyebrow);
  setText(benefits?.querySelector('h2') ?? null, WEBSTORE_BENEFITS.headline);
  setText(benefits?.querySelector('.ws2-benefits-desc') ?? null, [WEBSTORE_BENEFITS.description, '']);
  benefits?.querySelectorAll('.ws2-bento-card').forEach((card, index) => {
    const copy = WEBSTORE_BENEFITS.cards[index];
    if (!copy) return;
    setText(card.querySelector('h3'), copy[0]);
    setText(card.querySelector('[class~="mt-2.5"]'), copy[1]);
  });
  const howItWorks = page.querySelector('.ws2-how-section');
  setText(howItWorks?.querySelector('.mkt-section-eyebrow') ?? null, WEBSTORE_HOW_IT_WORKS.eyebrow);
  setText(howItWorks?.querySelector('h2') ?? null, WEBSTORE_HOW_IT_WORKS.headline);
  setText(howItWorks?.querySelector('.ws2-how-desc') ?? null, [WEBSTORE_HOW_IT_WORKS.description, '']);
  const journeySpine = howItWorks?.querySelector<HTMLElement>('div[class*="bg-gradient-to-b"]');
  journeySpine?.setAttribute('data-antbuildz-journey-spine', 'true');
  howItWorks?.querySelectorAll('h3').forEach((title, index) => {
    const copy = WEBSTORE_HOW_IT_WORKS.steps[index];
    if (!copy) return;
    const titleRow = title.parentElement;
    const actorRow = titleRow?.nextElementSibling;
    const description = actorRow?.nextElementSibling;
    setText(title, copy[0]);
    actorRow?.querySelectorAll('span').forEach((actor, actorIndex) => {
      const label = copy[1][actorIndex];
      if (label) setText(actor, label);
    });
    setText(description, copy[2]);
    const card = typeof title.closest === 'function'
      ? title.closest<HTMLElement>('div.relative.rounded-2xl')
      : null;
    const row = card?.parentElement?.parentElement;
    const sourceAccent = WEBSTORE_JOURNEY_SOURCE_ACCENTS[index];
    const targetAccent = WEBSTORE_JOURNEY_ACCENTS[index];
    if (row && sourceAccent && targetAccent) {
      row.setAttribute('data-antbuildz-journey-step', String(index + 1));
      alignJourneyAccent(row, sourceAccent, targetAccent);
    }
  });
  // The six-step journey is explanatory and does not need a second CTA pair.
  // Hide the transferred action row while preserving its React-owned nodes.
  const howActions = Array.from(howItWorks?.querySelectorAll<HTMLButtonElement>('button') ?? []);
  const seeAction = howActions.find(button => button.textContent?.trim().toLowerCase() === 'see it in action');
  const salesAction = howActions.find(button => button.textContent?.trim().toLowerCase() === 'talk to sales');
  const actionRow = seeAction?.parentElement === salesAction?.parentElement
    ? seeAction?.parentElement
    : null;
  if (actionRow) {
    actionRow.hidden = true;
    actionRow.inert = true;
    actionRow.style.setProperty('display', 'none', 'important');
    actionRow.setAttribute('aria-hidden', 'true');
    actionRow.setAttribute('data-antbuildz-webstore-how-actions-removed', 'true');
  }
  const featureIntro = page.querySelector('.ws2-webstore-features-desc');
  const featureSection = featureIntro?.closest('section');
  const featureList = featureIntro?.nextElementSibling;
  setText(featureSection?.querySelector('.mkt-section-eyebrow') ?? null, WEBSTORE_FEATURES.eyebrow);
  setText(featureIntro?.previousElementSibling ?? null, [WEBSTORE_FEATURES.headline, '']);
  setText(featureIntro, [WEBSTORE_FEATURES.description, '']);
  Array.from(featureList?.children ?? []).forEach((row, index) => {
    const copy = WEBSTORE_FEATURES.cards[index];
    if (!copy) return;
    const copyColumn = row.firstElementChild;
    const paragraphs = Array.from(copyColumn?.querySelectorAll('p') ?? []);
    const miniTitle = paragraphs[0] as HTMLElement | undefined;
    const description = paragraphs[1] ?? null;
    setText(copyColumn?.querySelector('h3') ?? null, copy[0]);
    if (miniTitle) {
      miniTitle.hidden = true;
      miniTitle.setAttribute('aria-hidden', 'true');
      miniTitle.setAttribute('data-antbuildz-webstore-feature-mini-title-removed', 'true');
    }
    setText(description, copy[1]);
    const image = row.querySelector('img');
    if (image?.getAttribute('alt') !== copy[0]) image?.setAttribute('alt', copy[0]);
  });
  let featureNote = featureSection?.querySelector<HTMLElement>('.ws2-webstore-features-note') ?? null;
  if (!featureNote && featureList && featureSection?.ownerDocument) {
    featureNote = featureSection.ownerDocument.createElement('p');
    featureNote.className = 'ws2-webstore-features-note mt-8 text-center text-sm leading-relaxed text-muted-foreground';
    featureList.insertAdjacentElement('afterend', featureNote);
  }
  if (featureNote && featureNote.childNodes.length === 0 && featureNote.ownerDocument) {
    featureNote.append(featureNote.ownerDocument.createTextNode(WEBSTORE_FEATURES.note));
  } else {
    setText(featureNote, WEBSTORE_FEATURES.note);
  }
  const comparison = page.querySelector('.ws2-compare-summary')?.closest('section');
  const comparisonSummary = comparison?.querySelector('.ws2-compare-summary') ?? null;
  comparison?.setAttribute('data-antbuildz-preserve-heading-punctuation', 'true');
  setText(comparison?.querySelector('.mkt-section-eyebrow') ?? null, WEBSTORE_COMPARISON.eyebrow);
  setText(comparison?.querySelector('h2') ?? null, WEBSTORE_COMPARISON.headline);
  setText(comparison?.querySelector('.mkt-section-desc') ?? null, WEBSTORE_COMPARISON.description);
  setText(comparisonSummary, [WEBSTORE_COMPARISON.note, '']);

  // Keep the existing closing CTA intact, but let the FAQ answer objections
  // before presenting the final action. The observer reapplies this function
  // after FAQ state updates, so only move the section when the order is stale.
  const closingCtaSection = page.querySelector<HTMLElement>('.ws2-final-cta-grid')?.closest('section') ?? null;
  setText(closingCtaSection?.querySelector('h2') ?? null, WEBSTORE_CLOSING_CTA.headline);
  setText(closingCtaSection?.querySelector('.mkt-section-desc') ?? null, WEBSTORE_CLOSING_CTA.description);
  const faqSection = page.querySelector<HTMLElement>('section:has(details)');
  if (closingCtaSection && faqSection
    && closingCtaSection.parentElement === faqSection.parentElement
    && faqSection.nextElementSibling !== closingCtaSection) {
    faqSection.insertAdjacentElement('afterend', closingCtaSection);
    closingCtaSection.setAttribute('data-antbuildz-webstore-after-faq', 'true');
  }

  // The transferred comparison is a responsive grid rather than a semantic
  // table. Keep its exact cells and styles, but order the two product columns
  // as Agent first and Agent + Webstore second. The supplied comparison adds
  // one content row, so clone the existing final row instead of introducing a
  // second component or a new visual treatment.
  const desktopTable = comparison?.querySelector<HTMLElement>('[class~="min-w-[720px]"]') ?? null;
  if (desktopTable) {
    const desktopRows = Array.from(desktopTable.children) as HTMLElement[];
    const desktopHeader = desktopRows.shift();
    if (desktopHeader?.children.length === 3) {
      const featureCell = desktopHeader.children[0];
      const productCells = Array.from(desktopHeader.children).slice(1) as HTMLElement[];
      const suiteCell = productCells.find(cell => cell.classList.contains('relative')) ?? productCells[0];
      const agentCell = productCells.find(cell => cell !== suiteCell) ?? productCells[1];
      if (desktopHeader.getAttribute('data-antbuildz-comparison-order') !== 'agent-first') {
        desktopHeader.insertBefore(agentCell, suiteCell);
        desktopHeader.setAttribute('data-antbuildz-comparison-order', 'agent-first');
      }
      setText(featureCell.querySelector('p'), 'Feature');
      setText(agentCell.querySelector('h3'), WEBSTORE_COMPARISON.columns[0]);
      setText(suiteCell.querySelector('h3'), WEBSTORE_COMPARISON.columns[1]);
    }
    if (desktopRows.length < WEBSTORE_COMPARISON.rows.length) {
      const template = desktopRows.at(-1);
      const addedRow = template?.cloneNode(true) as HTMLElement | undefined;
      if (addedRow) {
        addedRow.setAttribute('data-antbuildz-comparison-added', 'true');
        desktopTable.append(addedRow);
        desktopRows.push(addedRow);
      }
    }
    desktopRows.forEach((row, index) => {
      const copy = WEBSTORE_COMPARISON.rows[index];
      if (!copy || row.children.length !== 3) return;
      const featureCell = row.children[0];
      const productCells = Array.from(row.children).slice(1) as HTMLElement[];
      const suiteCell = productCells.find(cell => cell.classList.contains('relative')) ?? productCells[0];
      const agentCell = productCells.find(cell => cell !== suiteCell) ?? productCells[1];
      if (row.getAttribute('data-antbuildz-comparison-order') !== 'agent-first') {
        row.insertBefore(agentCell, suiteCell);
        row.setAttribute('data-antbuildz-comparison-order', 'agent-first');
      }
      setText(featureCell.querySelector('p'), copy[0]);
      setText(agentCell.querySelector('p'), copy[1]);
      setText(suiteCell.querySelector('p'), copy[2]);
    });
  }

  const mobileComparison = comparison?.querySelector<HTMLElement>('.ws2-mobile-comparison') ?? null;
  if (mobileComparison) {
    const key = mobileComparison.querySelector<HTMLElement>('.ws2-mobile-comparison-key');
    if (key?.children.length === 2) {
      const keys = Array.from(key.children) as HTMLElement[];
      const suiteKey = keys.find(item => item.querySelector('i.is-suite')) ?? keys[0];
      const agentKey = keys.find(item => item !== suiteKey) ?? keys[1];
      if (key.getAttribute('data-antbuildz-comparison-order') !== 'agent-first') {
        key.insertBefore(agentKey, suiteKey);
        key.setAttribute('data-antbuildz-comparison-order', 'agent-first');
      }
      setText(agentKey, ` ${WEBSTORE_COMPARISON.columns[0]}`);
      setText(suiteKey, ` ${WEBSTORE_COMPARISON.columns[1]}`);
    }
    const mobileCards = Array.from(mobileComparison.querySelectorAll<HTMLElement>('.ws2-mobile-comparison-card'));
    if (mobileCards.length < WEBSTORE_COMPARISON.rows.length) {
      const template = mobileCards.at(-1);
      const addedCard = template?.cloneNode(true) as HTMLElement | undefined;
      if (addedCard) {
        addedCard.setAttribute('data-antbuildz-comparison-added', 'true');
        mobileComparison.append(addedCard);
        mobileCards.push(addedCard);
      }
    }
    mobileCards.forEach((card, index) => {
      const copy = WEBSTORE_COMPARISON.rows[index];
      if (!copy) return;
      const suiteOption = card.querySelector<HTMLElement>('.ws2-mobile-comparison-option.is-suite');
      const agentOption = Array.from(card.querySelectorAll<HTMLElement>('.ws2-mobile-comparison-option'))
        .find(option => !option.classList.contains('is-suite')) ?? null;
      if (suiteOption && agentOption && card.getAttribute('data-antbuildz-comparison-order') !== 'agent-first') {
        card.insertBefore(agentOption, suiteOption);
        card.setAttribute('data-antbuildz-comparison-order', 'agent-first');
      }
      setText(card.querySelector('h3'), copy[0]);
      setText(agentOption?.querySelector('span') ?? null, WEBSTORE_COMPARISON.columns[0]);
      setText(agentOption?.querySelector('p') ?? null, copy[1]);
      setText(suiteOption?.querySelector('span') ?? null, WEBSTORE_COMPARISON.columns[1]);
      setText(suiteOption?.querySelector('p') ?? null, copy[2]);
    });
  }

  const inventorySection = page.querySelector<HTMLElement>('.flexible-ai-platform');
  if (inventorySection) {
    inventorySection.hidden = true;
    inventorySection.setAttribute('aria-hidden', 'true');
    inventorySection.setAttribute('data-antbuildz-webstore-inventory-removed', 'true');
  }
  const globalAgentSection = page.querySelector<HTMLElement>('.ws2-global-agent-section');
  if (globalAgentSection) {
    globalAgentSection.hidden = true;
    globalAgentSection.inert = true;
    globalAgentSection.setAttribute('aria-hidden', 'true');
    globalAgentSection.setAttribute('data-antbuildz-relocated-to-sales-agent', 'true');
  }
  const removedSections = [
    ['.dt-section', 'ai-agent-deployment'],
    ['.af-section', 'ai-sales-control-centre'],
  ] as const;
  removedSections.forEach(([selector, identifier]) => {
    const section = page.querySelector<HTMLElement>(selector);
    if (!section) return;
    section.hidden = true;
    section.inert = true;
    section.setAttribute('aria-hidden', 'true');
    section.setAttribute('data-antbuildz-webstore-section-removed', identifier);
  });
}
