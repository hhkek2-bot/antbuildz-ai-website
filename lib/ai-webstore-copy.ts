// The user clarified that the wording brief applies ONLY to the local preview.
// The approved /ai-webstore-suite route retains its original wording.
import { setSalesAgentText as setText } from './ai-sales-agent-copy';

// Select only the Webstore preview. Exact text replacements preserve the
// transferred React nodes, layouts, animations, FAQ behaviour and link targets.
export const WEBSTORE_DESCRIPTION = 'Extend your AI Sales Agent with a browsable product catalogue, dedicated product pages and supported inventory workflows through the AI Webstore Suite.';

// The transferred hero has one non-wrapping desktop description slot. Keep the
// opening concise; the sections below explain recommendations and discovery.
export const WEBSTORE_HERO = 'Connect machinery, tools, parts and supplies to your AI Sales Agent with searchable product pages.';

export const WEBSTORE_INVENTORY = 'Connect your AI Sales Agent to the AI Webstore Suite catalogue and supported inventory sources. Use product specifications and recorded availability to narrow suitable options. Inventory connections and update frequency depend on your plan and setup.';

// Existing comparison order is retained: combined setup, then agent alone.
// Both columns retain the core agent; the seven existing rows are not rebuilt.
export const WEBSTORE_COMPARISON = [
  ['Companies that already have a website and want to add AI-guided product and sales engagement.', 'Product guidance and enquiry qualification using your approved business knowledge.'],
  ['Industrial product businesses that want an AI Agent supported by a complete Webstore, unique product pages and inventory management.', 'The same AI Sales Agent, with a browsable catalogue, product pages and supported inventory workflows.'],
  ['Handles product questions, recommendations and early enquiries through AI conversations.', 'Answers product questions, recommends suitable options and captures buyer requirements.'],
  ['Guides product discovery, comparison, inventory-aware recommendations, enquiries and quotations.', 'Adds catalogue browsing, product links and supported sales or rental enquiry workflows.'],
  ['Uses uploaded PDFs, catalogues, FAQs, website content and business documents.', 'Uses approved PDFs, catalogues, FAQs, website content and business documents.'],
  ['Uses structured Webstore product pages, business knowledge, pricing and inventory data.', 'Adds structured product listings, specifications and supported inventory context.'],
  ['Recommends products through chat and directs buyers to your existing website or sales team.', 'Recommends products in conversation and gathers details for your sales team.'],
  ['Recommends suitable available products and shares unique Webstore pages with specifications, pricing, availability and enquiry actions.', 'Shares dedicated product pages with specifications, recorded availability and enquiry actions.'],
  ['Works with the visibility and traffic of your existing website and channels.', 'Engages buyers through your website and shared agent link.'],
  ['Builds unique SEO- and AI-search-ready product pages for discovery and trust.', 'Adds structured product pages to support SEO and AI-search discovery.'],
  ['Depends on your existing website and sales channels.', 'Works through your existing website and sales channels.'],
  ['Syncs products to the Antbuildz Marketplace.', 'Optional Antbuildz Marketplace connection, subject to confirmed support and setup.'],
  ['Creates ongoing value through AI conversations across your existing channels.', 'Builds useful enquiry context through ongoing product conversations.'],
  ['Unique product pages continue building visibility, product knowledge and enquiries.', 'Adds a maintained product catalogue and pages customers can browse and revisit.'],
] as const;

export const WEBSTORE_FAQS = [
  ['The Antbuildz AI Webstore Suite is an AI Webstore for industrial products. It combines a structured product library, branded Webstore, sales, rental and enquiry workflows, quotation tools, analytics, multilingual capabilities, and a built-in AI Sales Agent. It supports businesses selling machinery, equipment, tools, components, spare parts, hardware, materials, and supplies.',
    'The AI Webstore Suite is an optional extension to your AI Sales Agent. It adds a browsable catalogue, structured listings and dedicated product pages for industrial products. Supported inventory, sales and rental workflows depend on your plan and setup.'],
  ['The AI Webstore Suite combines a structured product library, branded Webstore, rental and sales workflows, quotation tools, analytics, and the built-in AI Sales Agent. The Antbuildz AI Sales Agent is for companies that already have a website or digital catalogue and want to add AI-guided product engagement without launching a new Webstore.',
    'The AI Sales Agent answers questions, recommends products and qualifies enquiries using your approved knowledge. The AI Webstore Suite adds structured listings, product pages and supported inventory context. You can use the agent without a webstore or choose a combined plan from the beginning.'],
  ['Yes. The AI Sales Agent is included in the AI Webstore Suite. It uses approved product information to answer enquiries, recommend suitable options, and capture buyer requirements before quotation or human sales handover.',
    'Yes. The AI Sales Agent is included in the AI Webstore Suite. It answers product questions, recommends suitable options and captures requirements for quotation review or sales handover. You can also use the AI Sales Agent without launching a webstore.'],
  ['The Suite includes a Webstore Builder, Product Catalogue and Inventory Management, sales, rental and enquiry workflows, quotation tools, buyer analytics, multilingual content, and a built-in AI Sales Agent.',
    'Available capabilities include the Webstore Builder, product catalogue, inventory management, enquiry tools, buyer analytics and multilingual content. Growth adds the Sales Webstore; Enterprise adds Rental capabilities. Features, integrations and workflows depend on your plan and setup.'],
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
  ['Quickly deploy the AI Sales Agent.', 'AI Sales Agent'],
  ['AI Sales Agent Included', 'Connected AI Sales Agent'],
  ['Built-In AI Sales Agent', 'Connected AI Sales Agent'],
  ['Your built-in AI Sales Agent understands your product and business information, guides buyers to suitable options, and captures quote-ready requirements.', 'Your AI Sales Agent uses connected product and business information to answer questions, recommend suitable options and capture quotation requirements.'],
  ['Turn product pages into structured, searchable content that search engines and AI tools can understand, cite, and recommend.', 'Structure product pages so search engines and AI tools can interpret specifications and applications, supporting product discovery.'],
  ['Let buyers browse translated product pages and ask questions in their preferred language across different markets.', 'Help buyers browse translated product pages and ask questions in supported languages, according to your plan and setup.'],
  ['Auto-translate', 'Language examples'],
  ['20+', 'AI'],
  ['Help buyers find suitable machinery, tools, parts, or supplies using their application, specifications, quantity, and commercial needs.', 'Help your AI Sales Agent match buyer requirements to catalogue listings, then share relevant product pages.'],
  ['Answer detailed product questions, recommend suitable options, and capture quotation-ready requirements using your approved business information.', 'Connect structured listings and product pages to the agent’s existing product guidance and enquiry qualification.'],
  ['Build structured Webstore pages that keep creating visibility, search value, and enquiry opportunities beyond paid traffic.', 'Maintain product pages customers can find, compare and revisit beyond individual advertising campaigns.'],
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
  ['Manage your product library, sales, rental and enquiry journeys, quotations, analytics, and multilingual content in one connected platform.', 'Manage your catalogue, inventory and enquiry workflows, connected to your AI Sales Agent.'],
  ['Give buyers a structured Webstore experience through the AI Webstore Suite while your built-in AI Sales Agent guides product discovery and enquiry capture.', 'Support product guidance and quotation handover. Features, rental workflows and integrations depend on your plan.'],
  ['Customize your branding, banners, product categories, and content to create a professional buying experience for your market.', 'Customise your branding, banners, product categories and content for your customers.'],
  ['Organize products, specifications, categories, pricing, availability, images, and documents so every listing is easy for buyers, search engines, and AI to understand.', 'Organise specifications, categories, pricing, recorded availability, images and documents into clear product listings.'],
  ['Capture complete requirements without delay.', 'Capture the details needed for follow-up.'],
  ['Present product pages and buyer conversations in multiple languages to support local and international markets.', 'Present product pages in supported languages. Translation options depend on your plan and setup.'],
  ['Your AI Sales Agent works across time zones, channels, and languages. It captures and qualifies enquiries 24/7, so your team can focus on higher-value closing.', 'Your AI Sales Agent can capture and qualify enquiries beyond office hours, with or without a webstore. Supported channels and languages depend on your setup.'],
  ['Deploy your AI Sales Agent everywhere.', 'Connect conversations across supported channels.'],
  ['Capture and route qualified enquiries.', 'Capture requirements for sales follow-up.'],
  ['The future of every website and online store is interactive. Let visitors ask questions, discover the right products, and turn every visit into a qualified enquiry — 24/7.', 'Let visitors ask questions, explore suitable products and share the requirements your sales team needs.'],
  ['Share your AI Agent link through WhatsApp, Facebook Messenger, WeChat, Telegram, or broadcast messages to guide customers into structured product and sales conversations.', 'Share your AI Sales Agent link in messaging channels to start product conversations. Sharing a link does not require a native messaging integration.'],
  ['Scale across borders with one AI Agent that engages new markets, supports different languages, and responds across time zones.', 'Support enquiries across time zones using the languages available for your agent setup.'],
  ['Turn product specifications, pricing, availability rules, policies, and sales terms into a searchable brain your team can use across every conversation.', 'Give your AI Sales Agent approved specifications, pricing guidance, availability rules and sales terms to use in buyer conversations.'],
  ['AI Agent Control', 'AI Agent Console'],
  ['Control Center', 'Control Centre'],
  ['Spot high-intent enquiries faster and keep every follow-up moving.', 'Review buyer signals and prepare your team for follow-up.'],
  ['Capture and Profile Every Potential Buyer', 'Capture Buyer Details and Requirements'],
  ['Capture buyer details, company information, product interest, quantity, location, rental duration, budget, urgency, and purchase timeline to help your team understand lead quality.', 'Capture the contact details and requirements buyers share, including product interest, quantity, location, timing and budget, for your team to follow up.'],
  ['The AI Webstore Suite is the complete platform and our primary product. The Antbuildz AI Sales Agent is a focused alternative for companies that already have a website.', 'Start with the AI Sales Agent for product guidance and enquiry qualification. Connect the AI Webstore Suite when you need structured product listings, dedicated product pages and supported inventory workflows.'],
  ['Antbuildz AI Webstore Suite', 'AI Sales Agent + AI Webstore Suite'],
  ['Antbuildz AI Sales Agent', 'AI Sales Agent'],
  ['The Antbuildz AI Sales Agent adds AI engagement to your existing website.', 'Use the AI Sales Agent with your approved product and business knowledge.'],
  ['The AI Webstore Suite connects your product library, Webstore, workflows, and built-in AI Sales Agent.', 'Connect the AI Webstore Suite for structured listings, product pages and supported workflows.'],
  ['Traditional websites display information. An AI Webstore helps buyers discover, compare, ask, and enquire through a more interactive buying experience.', 'Combine AI Sales Agent conversations with connected product pages to help buyers explore, compare and share requirements for your team to review.'],
  ['Build an AI Webstore', 'Give Your AI Sales Agent'],
  ['Around Your Business', 'a Connected Catalogue'],
  ['Bring your product catalogue, business knowledge, buyer journeys, quotations, and built-in AI Sales Agent into one connected platform.', 'Connect your product catalogue and buyer journeys to your AI Sales Agent, so customers can explore suitable products and your team receives clearer quotation requirements.'],
  ['Multilingual Catalog', 'Translated Pages'],
  ['Reach global buyers', 'Support buyer languages'],
  ...WEBSTORE_COMPARISON,
  ...WEBSTORE_FAQS,
] as const;

const replacements = new Map<string, string>(WEBSTORE_REPLACEMENTS);

export function correctWebstoreCopy(root: HTMLElement, pathname: string) {
  if (pathname !== '/webstore-2-ai-webstore-preview') return;
  const page = root.querySelector('.webstore2-page');
  if (!page) return;

  const visit = (node: Node) => {
    if (node.nodeType === 3) {
      const current = node.textContent ?? '';
      const replacement = replacements.get(current.trim());
      if (replacement !== undefined) {
        const value = current.replace(current.trim(), replacement);
        if (value !== current) node.textContent = value;
      }
    } else if (!['svg', 'script', 'style', 'textarea', 'input'].includes(node.nodeName.toLowerCase())) {
      node.childNodes.forEach(visit);
    }
  };
  visit(page);

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

  // Preserve the existing line break and gradient spans in these rich titles.
  setText(page.querySelector('.ws2-hero-title'), ['Extend Your AI Sales Agent', 'with a ', 'Connected Webstore']);
  const featureIntro = page.querySelector('.ws2-webstore-features-desc');
  setText(featureIntro?.previousElementSibling ?? null, ['What the Webstore Adds to ', 'Your AI Sales Agent']);
  const comparison = page.querySelector('.ws2-compare-summary')?.closest('section');
  setText(comparison?.querySelector('h2') ?? null, ['AI Sales Agent', ', With or Without a Webstore']);
  // The mobile key has a colour marker before a bare text node, unlike the
  // desktop labels. Preserve that marker while naming the same combined setup.
  setText(comparison?.querySelector('.ws2-mobile-comparison-key > span:first-child') ?? null, ' AI Sales Agent + AI Webstore Suite');
  comparison?.querySelectorAll('.ws2-mobile-comparison-option.is-suite > span').forEach(label =>
    setText(label, 'AI Sales Agent + AI Webstore Suite'));

  const inventory = page.querySelector('.flexible-ai-platform__visual');
  const description = 'Illustrative connection of the AI Sales Agent to a structured catalogue, uploaded product data and supported inventory sources. Connections and update frequency depend on plan and setup; the percentage shows animation progress, not accuracy.';
  if (inventory && inventory.getAttribute('aria-label') !== description) inventory.setAttribute('aria-label', description);
}
