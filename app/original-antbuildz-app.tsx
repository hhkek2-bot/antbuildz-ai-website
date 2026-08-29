'use client';

import { useEffect } from 'react';
import { scopeAiHelpExperience, syncAiHelpMetadata } from '../lib/ai-help-scope';
import { simplifyAgreementHub, syncAgreementMetadata } from '../lib/agreement-hub';
import { EMMA_PORTRAIT_ALT, EMMA_PORTRAIT_SRC, standardiseAgentPortraits } from '../lib/agent-identity';
import { correctSalesAgentCopy } from '../lib/ai-sales-agent-copy';
import { HOMEPAGE_SEO, syncHomepageMetadata } from '../lib/homepage-seo';

const ORIGINAL_STYLESHEET_ID = 'antbuildz-original-styles';
const ORIGINAL_SCRIPT_ID = 'antbuildz-original-app';

const ROUTE_ALIASES: Record<string, string> = {
  '/aiagent': '/ai-sales-agent',
  '/webstore': '/ai-webstore-suite',
  '/webstore-2': '/ai-webstore-suite',
  '/app': '/ai-agent-console',
  '/develop-admin': '/ai-agent-console',
};

const PAGE_TITLES: Record<string, string> = {
  '/': HOMEPAGE_SEO.title,
  '/ai-webstore-suite': 'AI Webstore Suite | Antbuildz AI',
  '/ai-sales-agent': 'Industrial AI Sales Agent | Antbuildz AI',
  '/ai-agent-console': 'AI Agent Console | Antbuildz AI',
  '/pricing': 'Pricing | Antbuildz AI',
  '/resources': 'Industrial AI Resources | Antbuildz AI',
  '/faqs': 'AI FAQs | Antbuildz AI',
  '/help/ai': 'AI Help Centre | Antbuildz AI',
  '/about': 'About Antbuildz AI | Antbuildz AI',
  '/book-a-demo': 'Book a Demo | Antbuildz AI',
  '/agreements': 'Antbuildz AI Agreements & Policies | Antbuildz AI',
};

const DEMO_REQUEST_PATH = '/book-a-demo';
const DEMO_SCHEDULING_URL = 'https://calendly.com/webstore-antbuildz/30min';

function buildDemoSchedulingUrl(name: string, email: string) {
  const fullName = name.trim();
  const workEmail = email.trim();
  if (!fullName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail)) return null;
  const destination = new URL(DEMO_SCHEDULING_URL);
  destination.searchParams.set('name', fullName);
  destination.searchParams.set('email', workEmail);
  destination.searchParams.set('utm_source', 'antbuildz.ai');
  destination.searchParams.set('utm_medium', 'website');
  destination.searchParams.set('utm_campaign', 'book_a_demo');
  return destination.toString();
}

function correctDemoRequest(root: HTMLElement) {
  const page = root.querySelector<HTMLElement>('.marketing-auth--book-demo');
  if (!page) return;
  // The transferred page also owns head tags. Keep both metadata owners on
  // the canonical public URL rather than inheriting localhost/noindex values.
  const metadata: Record<string, string> = {
    'meta[name="description"]': 'Share your name and work email, then schedule an Antbuildz AI demo for your industrial sales workflows.',
    'meta[name="robots"]': 'index, follow',
    'meta[property="og:url"]': 'https://antbuildz.ai/book-a-demo',
    'meta[property="og:title"]': 'Book a Demo | Antbuildz AI',
    'meta[property="og:description"]': 'Share your name and work email, then schedule an Antbuildz AI demo for your industrial sales workflows.',
    'meta[name="twitter:title"]': 'Book a Demo | Antbuildz AI',
    'meta[name="twitter:description"]': 'Share your name and work email, then schedule an Antbuildz AI demo for your industrial sales workflows.',
  };
  Object.entries(metadata).forEach(([selector, value]) => {
    document.querySelectorAll(selector).forEach((element) => element.setAttribute('content', value));
  });
  document.querySelectorAll('link[rel="canonical"]').forEach((link) => link.setAttribute('href', 'https://antbuildz.ai/book-a-demo'));
  setPricingText(page.querySelector('h1'), 'See Antbuildz AI in action.');
  setPricingText(page.querySelector('.book-demo-card__eyebrow'), 'Step 1 of 2 · Your details');
  setPricingText(page.querySelector('.marketing-auth__primary-button > span'), 'Continue to Calendly');
  setPricingText(page.querySelector('.marketing-auth__preview-note'), 'Your name and work email are shared with Calendly to prefill your booking. Choose a time and confirm your demo there.');
  const form = page.querySelector('form');
  if (!form || form.dataset.antbuildzDemoForm === 'true') return;
  form.dataset.antbuildzDemoForm = 'true';
  form.addEventListener('submit', (event) => {
    const fields = new FormData(form);
    const destination = buildDemoSchedulingUrl(String(fields.get('name') ?? ''), String(fields.get('email') ?? ''));
    // Keep the existing accessible field errors and focus handling on invalid
    // submissions. Valid details go directly to the existing Calendly event;
    // no lead record or booking is claimed before Calendly confirmation.
    if (!destination) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.assign(destination);
  }, true);
}

const RESOURCE_ROLE_LINKS = [
  { label: 'Sales Specialist', href: '/resources/ai-sales-agent-for-industrial-businesses' },
  { label: 'Customer Service', href: '/resources/ai-customer-service-agent-for-industrial-businesses' },
  { label: 'Technical Support', href: '/resources/ai-technical-support-agent-for-industrial-businesses' },
  { label: 'Product Specialist', href: '/resources/ai-product-specialist-for-industrial-businesses' },
  { label: 'After-Sales Support', href: '/resources/ai-after-sales-agent-for-industrial-businesses' },
] as const;

const RESOURCE_TOPICS = [
  { label: 'AI Agent Roles', id: 'ai-agent-roles', description: 'Explore specialist roles across the customer journey.' },
  { label: 'Understand Antbuildz AI Agent', id: 'understand-ai-agent', description: 'Learn the essentials of industrial AI sales.' },
  { label: 'Antbuildz AI Agent + Webstore', id: 'ai-agent-webstore', description: 'See how your Agent and product catalogue work together.' },
  { label: 'Why Antbuildz AI Agent Is Different', id: 'why-antbuildz-ai', description: 'Explore the approach to industrial buying workflows.' },
  { label: 'Getting Ready for Antbuildz AI Agent', id: 'getting-ready', description: 'Prepare your product information and business knowledge.' },
  { label: 'AI Console Features — Your Command Centre', id: 'ai-console-features', description: 'Get to know the tools for managing your Agent.' },
] as const;

const RESOURCE_MENU_GROUPS = [
  { label: 'Explore AI', topics: [RESOURCE_TOPICS[0], RESOURCE_TOPICS[1]] },
  { label: 'Choose your approach', topics: [RESOURCE_TOPICS[2], RESOURCE_TOPICS[3]] },
  { label: 'Get started', topics: [RESOURCE_TOPICS[4], RESOURCE_TOPICS[5]] },
] as const;

const DRAWER_LINKS = [
  { label: 'AI Sales Agent', href: '/ai-sales-agent' },
  { label: 'AI Webstore Suite', href: '/ai-webstore-suite' },
  { label: 'AI Agent Console', href: '/ai-agent-console' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'About Us', href: '/about' },
] as const;

function correctPublicDrawer() {
  document.querySelectorAll<HTMLElement>('nav[aria-label="Public Antbuildz navigation"]')
    .forEach(navigation => {
      let links = navigation.querySelector<HTMLElement>('.antbuildz-simple-menu-links');
      if (!links) {
        links = document.createElement('div');
        links.className = 'antbuildz-simple-menu-links';
        DRAWER_LINKS.forEach(({ label, href }) => {
          const link = document.createElement('a');
          link.className = 'antbuildz-menu-link';
          link.href = href;
          link.textContent = label;
          // Plain links intentionally use native navigation, which also closes
          // the drawer and avoids the transferred router's loading overlay.
          links!.appendChild(link);
        });
        navigation.appendChild(links);
      }
      navigation.classList.add('antbuildz-flat-navigation');
      // Keep the transferred React tree mounted; only its long public link
      // groups are replaced. Account actions, close and focus handling remain.
      Array.from(navigation.children).forEach(child => {
        if (child !== links) child.setAttribute('hidden', '');
      });
      links.querySelectorAll<HTMLAnchorElement>('a').forEach(link => {
        const href = link.getAttribute('href');
        const exact = href === window.location.pathname;
        const resourceArticle = href === '/resources' && window.location.pathname.startsWith('/resources/');
        link.classList.toggle('is-active', exact || resourceArticle);
        if (exact || resourceArticle) link.setAttribute('aria-current', exact ? 'page' : 'location');
        else link.removeAttribute('aria-current');
      });
    });
}

function createHeaderMenuIntro(eyebrow: string, title: string, description: string, action: string, href: string) {
  const intro = document.createElement('div');
  intro.className = 'antbuildz-industries-menu__intro';
  const copy = document.createElement('div');
  copy.className = 'antbuildz-industries-menu__intro-copy';
  const kicker = document.createElement('span');
  kicker.textContent = eyebrow;
  const heading = document.createElement('strong');
  heading.textContent = title;
  const text = document.createElement('p');
  text.textContent = description;
  copy.append(kicker, heading, text);
  const link = document.createElement('a');
  link.className = 'antbuildz-industries-menu__overview-action';
  link.href = href;
  link.textContent = action;
  intro.append(copy, link);
  return { intro, link };
}

function bindHeaderDropdown(menu: HTMLDetailsElement, trigger: HTMLElement) {
  menu.addEventListener('toggle', () => {
    trigger.setAttribute('aria-expanded', String(menu.open));
    if (menu.open) menu.parentElement?.querySelectorAll<HTMLDetailsElement>('details[open]')
      .forEach((other) => { if (other !== menu) other.open = false; });
  });
  menu.addEventListener('keydown', (event) => {
    if (event.target === trigger && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      if (!event.repeat) menu.open = !menu.open;
    }
    if (event.key === 'Escape' && menu.open) {
      event.preventDefault();
      menu.open = false;
      trigger.focus();
    }
  });
}

function bindResourceNavigation(link: HTMLAnchorElement) {
  link.addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    // The copied shell starts a route loader for these links. A full navigation
    // resets that loader, the mobile drawer and any previous collection filter.
    if (window.location.pathname === '/resources') {
      window.location.hash = link.hash;
      window.location.reload();
    } else window.location.assign(link.href);
  });
}

function correctResourcesMenu(root: HTMLElement) {
  const desktopLinks = root.querySelector<HTMLElement>('.bright-nav-product-links');
  const originalLink = desktopLinks?.querySelector<HTMLAnchorElement>('a[aria-label="Resources"]');
  if (desktopLinks && originalLink && !desktopLinks.querySelector('.antbuildz-resources-menu')) {
    // Retain the copied React-owned link, but replace its visible UI with a disclosure.
    originalLink.hidden = true;
    const menu = document.createElement('details');
    menu.className = 'antbuildz-resources-menu';
    const trigger = document.createElement('summary');
    trigger.className = 'antbuildz-industries-menu__trigger';
    trigger.textContent = 'Resources';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', 'antbuildz-resources-dropdown');
    const panel = document.createElement('nav');
    panel.id = 'antbuildz-resources-dropdown';
    panel.className = 'antbuildz-industries-menu__panel antbuildz-resources-menu__panel';
    panel.setAttribute('aria-label', 'Resources');
    const { intro, link: overview } = createHeaderMenuIntro(
      'RESOURCES', 'Practical guides for industrial AI',
      'Understand your Agent, explore the platform and prepare your team.',
      'All resources', '/resources',
    );
    overview.classList.add('antbuildz-resources-menu__link');
    bindResourceNavigation(overview);
    const links = document.createElement('div');
    links.className = 'antbuildz-industries-menu__links antbuildz-resources-menu__links';
    RESOURCE_MENU_GROUPS.forEach((topicGroup, index) => {
      const group = document.createElement('section');
      group.className = 'antbuildz-industries-menu__group';
      const title = document.createElement('p');
      title.id = `antbuildz-resource-group-${index + 1}`;
      title.textContent = topicGroup.label;
      group.setAttribute('aria-labelledby', title.id);
      const groupLinks = document.createElement('div');
      groupLinks.className = 'antbuildz-industries-menu__group-links';
      topicGroup.topics.forEach((topic) => {
        const link = createIndustryLink(
          { ...topic, href: `/resources#${topic.id}` },
          'antbuildz-industries-menu__link antbuildz-resources-menu__link', true,
        );
        bindResourceNavigation(link);
        groupLinks.appendChild(link);
      });
      group.append(title, groupLinks);
      links.appendChild(group);
    });
    panel.append(intro, links);
    menu.append(trigger, panel);
    bindHeaderDropdown(menu, trigger);
    originalLink.insertAdjacentElement('afterend', menu);
  }

  root.querySelectorAll<HTMLAnchorElement>('.antbuildz-resources-menu__link').forEach((link) => {
    const active = window.location.pathname === '/resources' && link.hash === window.location.hash;
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  // Deep-link to an existing collection without creating duplicate resource pages.
  if (window.location.pathname !== '/resources') {
    delete root.dataset.antbuildzResourceTopic;
    return;
  }
  const topic = RESOURCE_TOPICS.find(({ id }) => window.location.hash === `#${id}`);
  if (!topic) {
    if (root.dataset.antbuildzResourceTopic) {
      delete root.dataset.antbuildzResourceTopic;
      root.querySelector<HTMLButtonElement>('.bright-resource-topic-list button')?.click();
    }
    return;
  }
  if (root.dataset.antbuildzResourceTopic === topic.id) return;
  const button = Array.from(root.querySelectorAll<HTMLButtonElement>('.bright-resource-topic-list button'))
    .find((item) => item.querySelector('span:nth-child(2)')?.textContent?.trim() === topic.label);
  if (button) {
    root.dataset.antbuildzResourceTopic = topic.id;
    button.click();
  }
}

function dismissHeaderDropdowns(event: Event) {
  const target = event.target;
  if (!(target instanceof Node)) return;
  document.querySelectorAll<HTMLDetailsElement>('.antbuildz-industries-menu[open], .antbuildz-resources-menu[open]')
    .forEach((menu) => { if (!menu.contains(target)) menu.open = false; });
}

type AgentPricingPlan = {
  name: string;
  badge: string | null;
  target: string;
  description: string;
  monthlyUsd: number | null;
  usage: string;
  listings: string;
  extraConversations: string;
  featureLabel: string;
  cta: string;
  emailSubject: string;
  features: readonly string[];
};

const AGENT_PRICING_PLANS: readonly AgentPricingPlan[] = [
  {
    name: 'Launch',
    badge: 'Start Here',
    target: 'AI Sales Agent',
    description: 'Answer enquiries using your approved product and business knowledge.',
    monthlyUsd: 49,
    usage: '50 AI conversations',
    listings: '—',
    extraConversations: '$0.99 each, if PAYG enabled',
    featureLabel: 'Included in this plan',
    cta: 'Build Your AI Agent',
    emailSubject: 'Antbuildz AI Launch plan enquiry',
    features: [
      '1 AI Sales Agent',
      'Knowledge Base',
      'AI Product Recommendations',
      'Agent Setup & Instructions',
      'Lead Capture',
      'Conversation Monitoring',
      'Website Embedding',
      'Multilingual Conversations',
    ],
  },
  {
    name: 'Growth',
    badge: 'Most Popular',
    target: 'AI Sales Webstore',
    description: 'Turn your catalogue into an online sales channel with built-in AI.',
    monthlyUsd: 199,
    usage: '150 AI conversations',
    listings: '100 active Sales listings',
    extraConversations: '$0.99 each, if PAYG enabled',
    featureLabel: 'Everything in Launch, plus:',
    cta: 'Book a Demo',
    emailSubject: 'Antbuildz AI Growth plan demo',
    features: [
      'Complete Sales Webstore',
      'Store Builder',
      'Custom Domain',
      'Dedicated Product URLs',
      'AI Recommendations with Direct Product Links',
      'SEO & AI Search-Ready Product Pages',
      'Sales Inventory Management',
      'Inventory Sync',
      'Sales Product Ingestion',
      'Lead Intelligence',
    ],
  },
  {
    name: 'Enterprise',
    badge: 'Best Value',
    target: 'AI Rental & Sales Suite',
    description: 'Manage sales, rentals and inventory in one AI-powered platform.',
    monthlyUsd: 399,
    usage: '300 AI conversations',
    listings: '500 combined Sales + Rental listings',
    extraConversations: '$0.99 each, if PAYG enabled',
    featureLabel: 'Everything in Growth, plus:',
    cta: 'Book a Demo',
    emailSubject: 'Antbuildz AI Enterprise plan demo',
    features: [
      'Complete Sales + Rental Webstore',
      'Rental Booking System',
      'Rental Availability & Pricing',
      'Sales + Rental Inventory Management',
      'Advanced Inventory Sync',
      'Third-Party Inventory Sync',
      'Rental Product Ingestion',
      'Advanced Workflow Automation',
    ],
  },
  {
    name: 'Custom',
    badge: null,
    target: 'Built Around Your Operation',
    description: 'For businesses that need capabilities beyond the standard plans.',
    monthlyUsd: null,
    usage: 'Custom',
    listings: 'Higher capacity',
    extraConversations: 'Contracted',
    featureLabel: 'Everything in Enterprise, plus:',
    cta: 'Contact Sales',
    emailSubject: 'Custom Antbuildz AI plan enquiry',
    features: [
      'Higher AI conversation volume',
      'Higher listing capacity',
      'Custom inventory integrations',
      'ERP / CRM / API connections',
      'Custom workflows',
      'Multiple brands, markets or Webstores',
      'Tailored onboarding and support',
    ],
  },
] as const;

const pricingCtaBindings = new WeakSet<HTMLButtonElement>();
const pricingBillingBindings = new WeakSet<HTMLButtonElement>();
const ANNUAL_PRICING_DISCOUNT = 0.2;

// Approved pricing-page copy only. This does not implement metering or payments.
const PURCHASED_CREDIT_PACKS = [
  { conversations: 25, usd: 22 },
  { conversations: 50, usd: 42 },
  { conversations: 100, usd: 79 },
  { conversations: 500, usd: 349 },
] as const;

const PRICING_USAGE_COPY = {
  monthly: 'Monthly Conversations reset each monthly allowance cycle and do not roll over, including on an annual subscription.',
  purchased: 'Purchased Credits are one-time purchases through supported payment methods, valid for 12 months from purchase, and roll over until expiry.',
  order: 'Usage order: Monthly Conversations first, then Purchased Credits (earliest expiry first), then Pay-As-You-Go if enabled.',
  payg: 'Pay-As-You-Go costs $0.99 per additional AI conversation and requires an automatic payment method or approved billing setup. Invoice or bank-transfer customers do not automatically receive postpaid usage; customers without Pay-As-You-Go can buy prepaid Purchased Credits.',
  cancellation: 'Purchased credits remain valid until their original expiry date but require an active Antbuildz subscription to be used.',
  principle: 'Plan upgrades unlock more business capability. Conversation credits increase usage without forcing a plan upgrade.',
} as const;

const PRICING_FAQS = [
  {
    question: 'What does the AI Sales Agent do?',
    answer: 'It answers customer enquiries using your approved knowledge, recommends suitable products and captures leads. Launch includes AI Product Recommendations without a Webstore; dedicated product URLs and direct product links are included from Growth.',
  },
  {
    question: 'Can I train the AI with my catalogue?',
    answer: 'Yes. Use your product catalogue, manuals, FAQs and business knowledge to guide the AI Sales Agent. Launch includes Knowledge Base and Agent Setup & Instructions. Growth adds Sales Product Ingestion; Enterprise adds Rental Product Ingestion.',
  },
  {
    question: 'What happens if I exceed my Monthly Conversations?',
    answer: `Launch includes 50, Growth 150 and Enterprise 300 AI conversations per month. ${PRICING_USAGE_COPY.monthly} ${PRICING_USAGE_COPY.order} ${PRICING_USAGE_COPY.payg}`,
  },
  {
    question: 'How long do Purchased Credits last, and what if I cancel?',
    answer: `${PRICING_USAGE_COPY.purchased} They are used only after Monthly Conversations are exhausted; the earliest-expiring credits are used first. ${PRICING_USAGE_COPY.cancellation}`,
  },
  {
    question: 'Which plan is right for my business?',
    answer: `Launch: Start with AI, including Multilingual Conversations. Growth: Build your AI Sales Webstore. Enterprise: Run Sales, Rental and Inventory. Custom: Extend beyond standard plans. ${PRICING_USAGE_COPY.principle}`,
  },
  // Preserve the existing additional-agent price and entitlement until approved.
  {
    question: 'Can I add more AI agents later?',
    answer: 'Yes. Each additional agent costs S$49/month and gets its own knowledge base — useful for different product lines or brands.',
  },
] as const;

type PricingComparisonCopy = { label?: string; values?: readonly string[] };

// Only approved mappings are changed. Unspecified legacy entitlements (storage,
// alerts, AI learning, Sheets sync, etc.) stay in place for commercial review.
const AGENT_COMPARISON_COPY: Record<string, PricingComparisonCopy> = {
  Conversations: { label: 'Monthly Conversations', values: ['50', '150', '300', 'Custom'] },
  'Structured Knowledge': { label: 'Knowledge Base' },
  'AI Instructions Control': { label: 'Agent Setup & Instructions' },
  'Conversation Tracking': { label: 'Conversation Monitoring' },
  'Lead Intelligence': { values: ['No', 'Yes', 'Yes', 'Yes'] },
  'Data Sync': { label: 'Inventory Sync', values: ['No', 'Yes', 'Advanced', 'Custom integrations'] },
  'Workflow Automation': { values: ['No', 'No', 'Advanced', 'Custom workflows'] },
};

const WEBSTORE_COMPARISON_COPY: Record<string, PricingComparisonCopy> = {
  Conversations: { label: 'Monthly Conversations', values: ['150', '300', 'Custom'] },
  'Total Listings': { label: 'Active Listings', values: ['100 Sales', '500 Sales + Rental', 'Higher capacity'] },
  'Custom Webstore (URL)': { label: 'Custom Domain' },
  'SEO & GEO Optimized': { label: 'SEO & AI Search-Ready Product Pages' },
  'Dedicated Product Pages': { label: 'Dedicated Product URLs' },
  'Multi-Language Support': { label: 'Multilingual Conversations' },
  'Inventory Management': { values: ['Sales', 'Sales + Rental', 'Sales + Rental'] },
  'Rental Booking System': { values: ['No', 'Yes', 'Yes'] },
  'Real-Time Inventory Sync': { label: 'Inventory Sync', values: ['Yes', 'Advanced', 'Custom integrations'] },
  'Workflow Automation': { values: ['No', 'Advanced', 'Custom workflows'] },
  'AI Instructions Control': { label: 'Agent Setup & Instructions' },
  'Conversation Tracking': { label: 'Conversation Monitoring' },
};

type IndustryLink = {
  label: string;
  href: string;
  description: string;
};

const INDUSTRY_GROUPS: ReadonlyArray<{
  label: string;
  links: ReadonlyArray<IndustryLink>;
}> = [
  {
    label: 'Rental & fleet',
    links: [
      {
        label: 'Rental & Leasing',
        href: '/rental-businesses',
        description: 'Qualify hire needs and prepare quote-ready enquiries.',
      },
      {
        label: 'Buggies & Vehicles',
        href: '/buggies-commercial-vehicles',
        description: 'Guide fleet buyers through use, capacity and configuration.',
      },
    ],
  },
  {
    label: 'Product makers',
    links: [
      {
        label: 'Manufacturers & OEMs',
        href: '/manufacturers-brands',
        description: 'Turn technical catalogues into guided product discovery.',
      },
      {
        label: 'Parts & Aftermarket',
        href: '/parts-aftermarket',
        description: 'Capture asset, fitment and replacement requirements.',
      },
    ],
  },
  {
    label: 'Distribution',
    links: [
      {
        label: 'Dealers & Distributors',
        href: '/dealers-distributors',
        description: 'Navigate multi-brand ranges and route enquiries.',
      },
      {
        label: 'Hardware & Trade',
        href: '/hardware-trade-supplies',
        description: 'Guide job-led product, accessory and consumable selection.',
      },
    ],
  },
  {
    label: 'Technical supply',
    links: [
      {
        label: 'Industrial & MRO',
        href: '/industrial-mro',
        description: 'Match specifications, SKUs and maintenance requirements.',
      },
      {
        label: 'Building & Engineering',
        href: '/building-engineering',
        description: 'Structure project material and technical RFQs.',
      },
    ],
  },
];


type HomeIndustryChapter = {
  label: string;
  title: string;
  introduction: string;
  workflow: readonly [string, string, string];
  industries: readonly [
    {
      label: string;
      href: string;
      summary: string;
      image: string;
      alt: string;
    },
    {
      label: string;
      href: string;
      summary: string;
      image: string;
      alt: string;
    },
  ];
};

const HOME_INDUSTRY_CHAPTERS: ReadonlyArray<HomeIndustryChapter> = [
  {
    label: 'Rental & fleet',
    title: 'Qualify rental and fleet requirements',
    introduction: 'Capture hire dates, site conditions, payload, route and quantity before the conversation reaches your rental or fleet team.',
    workflow: ['Capture the requirement', 'Shortlist supported options', 'Prepare a quote-ready brief'],
    industries: [
      {
        label: 'Rental & Leasing',
        href: '/rental-businesses',
        summary: 'Qualify the job, capacity, hire dates, site conditions and delivery needs before preparing a quote-ready fleet handover.',
        image: '/images/solution-rental.jpg',
        alt: 'Rental boom lift fleet prepared for industrial hire',
      },
      {
        label: 'Buggies & Vehicles',
        href: '/buggies-commercial-vehicles',
        summary: 'Capture seating, payload, route, quantity and hire period for vehicle rental or sales.',
        image: '/images/solution-vehicles.png',
        alt: 'Commercial vehicles and utility buggy outside a distribution facility',
      },
    ],
  },
  {
    label: 'Product lifecycle',
    title: 'Guide products across their lifecycle',
    introduction: 'Help buyers compare approved models or identify parts using application, asset and fitment context.',
    workflow: ['Define the application or asset', 'Compare models or fitment', 'Route to sales or parts'],
    industries: [
      {
        label: 'Manufacturers & OEMs',
        href: '/manufacturers-brands',
        summary: 'Answer technical product questions, compare suitable models and route application-ready enquiries.',
        image: '/images/solution-manufacturers.jpg',
        alt: 'Engineer reviewing industrial machinery in a manufacturing facility',
      },
      {
        label: 'Parts & Aftermarket',
        href: '/parts-aftermarket',
        summary: 'Use make, model, serial range and approved fitment data to identify suitable parts and service kits.',
        image: '/images/solution-parts.jpg',
        alt: 'Industrial parts specialist checking bearings and fitment information',
      },
    ],
  },
  {
    label: 'Channel sales',
    title: 'Turn broad catalogues into clear buying paths',
    introduction: 'Guide buyers from a job requirement to suitable products across multi-brand, hardware and trade ranges.',
    workflow: ['Understand the job', 'Build a compatible shortlist', 'Route to branch or quotation'],
    industries: [
      {
        label: 'Dealers & Distributors',
        href: '/dealers-distributors',
        summary: 'Guide buyers across approved multi-brand ranges and route qualified opportunities to the right branch.',
        image: '/images/solution-dealers.jpg',
        alt: 'Industrial equipment dealer reviewing products in a warehouse showroom',
      },
      {
        label: 'Hardware & Trade',
        href: '/hardware-trade-supplies',
        summary: 'Turn a job and material into a compatible basket of tools, fixings, consumables and accessories.',
        image: '/images/solution-hardware.jpg',
        alt: 'Trade buyer selecting tools and supplies at a hardware counter',
      },
    ],
  },
  {
    label: 'Technical & project supply',
    title: 'Structure technical and project enquiries',
    introduction: 'Translate maintenance and project needs into the specifications, standards and quantities required for review.',
    workflow: ['Capture the specification', 'Confirm standards and compatibility', 'Prepare the structured RFQ'],
    industries: [
      {
        label: 'Industrial & MRO',
        href: '/industrial-mro',
        summary: 'Translate maintenance needs into technical attributes, approved SKU matches and structured RFQs.',
        image: '/images/solution-mro.jpg',
        alt: 'Maintenance engineer inspecting industrial pump equipment',
      },
      {
        label: 'Building & Engineering',
        href: '/building-engineering',
        summary: 'Capture grades, quantities, standards, delivery stages and site requirements before quotation.',
        image: '/images/solution-building.jpg',
        alt: 'Construction professionals reviewing project requirements on site',
      },
    ],
  },
];

const HOME_HERO_CONVERSATION: ReadonlyArray<{
  kind: 'buyer' | 'agent' | 'requirement';
  text: string;
}> = [
  {
    kind: 'buyer',
    text: 'Need a 5 t electric forklift for our warehouse.',
  },
  {
    kind: 'agent',
    text: 'What lift height, aisle width and hire period do you need?',
  },
  {
    kind: 'buyer',
    text: '6 m lift, 4.2 m aisles and 12 weeks from 3 June.',
  },
  {
    kind: 'agent',
    text: 'Understood. I’m checking residual capacity, mast configuration and the approved fleet data.',
  },
  {
    kind: 'requirement',
    text: '5 t electric · 6 m lift · 4.2 m aisle · 12-week hire',
  },
  {
    kind: 'agent',
    text: 'The requirement is ready for your rental team to confirm availability and quotation.',
  },
];

let homeHeroRuntimeElement: HTMLElement | null = null;
let homeHeroRuntimeCleanup: (() => void) | null = null;
let homeHeroVideoElement: HTMLVideoElement | null = null;
let homeHeroVideoCleanup: (() => void) | null = null;

// Reuse distinct Who We Serve hero transcripts, not variations of the rental chat.
const HOME_BACKGROUND_CONVERSATIONS = [
  {
    layer: 'left', source: '/manufacturers-brands', label: 'Manufacturer pump selection example',
    summary: 'A manufacturer enquiry captures pump flow, head, fluid, temperature, power supply and materials before checking approved configurations.',
    messages: [
      { kind: 'buyer', text: 'Need a pump for 42 m³/h at 18 m head.' },
      { kind: 'agent', text: 'Could you confirm the fluid, operating temperature, and power supply?' },
      { kind: 'buyer', text: 'Process water, 45°C, 400 V / 50 Hz. Indoor skid.' },
      { kind: 'agent', text: 'Could you also confirm the wetted material, required standard, and project timing?' },
      { kind: 'buyer', text: 'Stainless wetted parts. European project. RFQ this month.' },
      { kind: 'agent', text: 'I’m checking the approved product information for suitable pump configurations.' },
    ],
  },
  {
    layer: 'right', source: '/parts-aftermarket', label: 'Aftermarket parts identification example',
    summary: 'A spare-parts enquiry captures the excavator model, service interval and filter reference before checking approved fitment information.',
    messages: [
      { kind: 'buyer', text: 'Need a replacement filter for an excavator; no part number.' },
      { kind: 'agent', text: 'Could you confirm the machine model, serial range, and service interval?' },
      { kind: 'buyer', text: '24-ton excavator, 2019, at its 4,000-hour service.' },
      { kind: 'agent', text: 'Do you have the current filter reference and required delivery date?' },
      { kind: 'buyer', text: 'One hydraulic return filter. Deliver to a regional workshop.' },
      { kind: 'agent', text: 'I’m checking the approved fitment information for this service requirement.' },
    ],
  },
  {
    layer: 'outer-left', source: '/hardware-trade-supplies', label: 'Hardware and trade drill selection example',
    summary: 'A trade enquiry captures the steel grade, hole diameter, usage, battery platform and accessories before checking approved drill packages.',
    messages: [
      { kind: 'buyer', text: 'Need cordless drills for installing stainless-steel handrails.' },
      { kind: 'agent', text: 'What steel grade, hole diameter, and usage frequency should the drills handle?' },
      { kind: 'buyer', text: '316 stainless, 6–10 mm holes, with frequent site use.' },
      { kind: 'agent', text: 'Do you have a preferred battery platform, and do you also need batteries, chargers, and drill bits?' },
      { kind: 'buyer', text: '18 V. Four drill sets with spare batteries and cobalt bits by Friday.' },
      { kind: 'agent', text: 'I’m checking approved drill specifications, battery compatibility, and suitable bits for stainless steel.' },
    ],
  },
  {
    layer: 'outer-right', source: '/buggies-commercial-vehicles', label: 'Utility buggy fleet qualification example',
    summary: 'A resort fleet enquiry captures seating, cargo, payload, route, weather protection and hire dates before checking approved utility vehicles.',
    messages: [
      { kind: 'buyer', text: 'We need to rent six electric utility buggies for a resort maintenance fleet.' },
      { kind: 'agent', text: 'How many seats should each buggy have, and will they carry passengers, cargo, or both?' },
      { kind: 'buyer', text: 'Two seats with a cargo bed for maintenance tools and supplies.' },
      { kind: 'agent', text: 'What payload, daily distance, terrain, weather protection, charging arrangement, rental period, and delivery date should the fleet support?' },
      { kind: 'buyer', text: 'At least 350 kg payload, about 15 km daily, on paved resort routes. We need a canopy and windscreen for a six-month rental starting before November.' },
      { kind: 'agent', text: 'I’m checking the approved vehicle range for payload, range, weather protection, charging needs, and fleet suitability.' },
    ],
  },
] as const;

function createIndustryLink(
  { label, href, description }: IndustryLink,
  className: string,
  showDescription = false,
) {
  const link = document.createElement('a');
  link.className = className;
  link.href = href;

  const name = document.createElement('span');
  name.textContent = label;
  link.appendChild(name);

  if (showDescription) {
    const supportingCopy = document.createElement('small');
    supportingCopy.textContent = description;
    link.appendChild(supportingCopy);
  }

  return link;
}

function createDesktopIndustriesMenu() {
  const menu = document.createElement('details');
  menu.className = 'antbuildz-industries-menu';

  const trigger = document.createElement('summary');
  trigger.className = 'antbuildz-industries-menu__trigger';
  trigger.setAttribute('aria-haspopup', 'true');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-controls', 'antbuildz-industries-dropdown');

  const triggerLabel = document.createElement('span');
  triggerLabel.textContent = 'Industries';
  trigger.appendChild(triggerLabel);

  const panel = document.createElement('nav');
  panel.id = 'antbuildz-industries-dropdown';
  panel.className = 'antbuildz-industries-menu__panel';
  panel.setAttribute('aria-label', 'Industries');

  const { intro } = createHeaderMenuIntro(
    'WHO WE SERVE', 'Industrial AI by business model',
    'Practical AI sales workflows for products, rental, parts and technical supply.',
    'View AI products', '/ai-webstore-suite',
  );

  const links = document.createElement('div');
  links.className = 'antbuildz-industries-menu__links';
  INDUSTRY_GROUPS.forEach((industryGroup, index) => {
    const group = document.createElement('section');
    group.className = 'antbuildz-industries-menu__group';
    const groupTitle = document.createElement('p');
    groupTitle.id = `antbuildz-industry-group-${index + 1}`;
    groupTitle.textContent = industryGroup.label;
    group.setAttribute('aria-labelledby', groupTitle.id);
    group.appendChild(groupTitle);

    const groupLinks = document.createElement('div');
    groupLinks.className = 'antbuildz-industries-menu__group-links';
    industryGroup.links.forEach((industry) => {
      groupLinks.appendChild(
        createIndustryLink(industry, 'antbuildz-industries-menu__link', true),
      );
    });
    group.appendChild(groupLinks);
    links.appendChild(group);
  });

  panel.appendChild(intro);
  panel.appendChild(links);
  menu.appendChild(trigger);
  menu.appendChild(panel);
  bindHeaderDropdown(menu, trigger);
  return menu;
}

function markActiveIndustryLinks(scope: ParentNode) {
  scope.querySelectorAll<HTMLAnchorElement>('.antbuildz-industries-menu a[href], .antbuildz-industries-mobile a[href]')
    .forEach((link) => {
      const isActive = link.getAttribute('href') === window.location.pathname;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
}

function correctIndustriesMenu(root: HTMLElement) {
  const desktopLinks = root.querySelector<HTMLElement>('.bright-nav-product-links');
  if (desktopLinks) {
    const industriesMenu = desktopLinks.querySelector('.antbuildz-industries-menu')
      ?? createDesktopIndustriesMenu();
    const pricingLink = Array.from(desktopLinks.children).find(
      (child) => child.textContent?.trim() === 'Pricing',
    );
    // Keep visual order and keyboard order aligned, including after remounts.
    if (pricingLink && pricingLink.nextElementSibling !== industriesMenu) {
      desktopLinks.insertBefore(industriesMenu, pricingLink.nextSibling);
    } else if (!industriesMenu.parentElement) {
      desktopLinks.appendChild(industriesMenu);
    }
  }

  markActiveIndustryLinks(document);
}

function correctHeaderLayout(root: HTMLElement) {
  const utilities = root.querySelector<HTMLElement>('.bright-nav-utilities');
  const signIn = utilities?.querySelector<HTMLElement>('.bright-nav-sign-in');
  const languageUtilities = utilities?.querySelector<HTMLElement>('.antbuildz-header-utilities');
  if (utilities && signIn && languageUtilities && languageUtilities.nextElementSibling !== signIn) {
    utilities.insertBefore(languageUtilities, signIn);
  }

  if (utilities && !utilities.querySelector('.antbuildz-header-demo')) {
    const demoLink = document.createElement('a');
    demoLink.className = 'antbuildz-header-demo';
    demoLink.href = DEMO_REQUEST_PATH;
    demoLink.textContent = 'Book a Demo';
    utilities.insertBefore(demoLink, utilities.querySelector('.antbuildz-menu-trigger'));
  }

}

function createWordmark() {
  const wordmark = document.createElement('span');
  wordmark.className = 'antbuildz-ai-wordmark';
  wordmark.setAttribute('aria-hidden', 'true');

  const name = document.createElement('span');
  name.textContent = 'antbuildz';
  const ai = document.createElement('span');
  ai.className = 'antbuildz-ai-wordmark__ai';
  ai.textContent = '.ai';
  wordmark.appendChild(name);
  wordmark.appendChild(ai);
  return wordmark;
}

function correctWordmarks(root: HTMLElement) {
  root.querySelectorAll<HTMLAnchorElement>('a[aria-label="Antbuildz home"]').forEach((link) => {
    link.setAttribute('aria-label', 'Antbuildz AI home');
    link.classList.add('antbuildz-ai-wordmark-link');
    link.querySelector('img')?.setAttribute('hidden', '');
    if (!link.querySelector('.antbuildz-ai-wordmark')) link.appendChild(createWordmark());
  });
}

function bindHeaderNavigation(link: HTMLAnchorElement) {
  if (link.dataset.antbuildzHeaderNavigation === 'true') return;
  link.dataset.antbuildzHeaderNavigation = 'true';
  link.addEventListener('click', (event) => {
    if (
      event.button !== 0
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
    ) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    // Changing href alone leaves the copied React Router handler pointing to
    // the old Console page. Native navigation follows the corrected link.
    window.location.assign(link.href);
  });
}

function navigateHomeFromLink(event: MouseEvent) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey
    || event.shiftKey || event.altKey || !(event.target instanceof Element)) return;
  const link = event.target.closest<HTMLAnchorElement>('#root a[href]');
  if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
  const destination = new URL(link.href, window.location.href);
  if (destination.origin !== window.location.origin || destination.pathname !== '/'
    || destination.search || destination.hash) return;

  // The copied shell and host router have separate navigation state. Handle
  // home links before either router or the legacy loading-overlay listener.
  event.preventDefault();
  event.stopImmediatePropagation();
  window.location.assign(destination.href);
}

function navigateHomeFromHistory() {
  // Browser Back can restore the URL without completing the copied loader.
  // Reload only the homepage; other routes keep their existing history behaviour.
  if (window.location.pathname === '/') window.location.reload();
}

function navigateSalesAgentFromLink(event: MouseEvent | KeyboardEvent) {
  if (event.defaultPrevented || event.metaKey || event.ctrlKey
    || event.shiftKey || event.altKey || !(event.target instanceof Element)) return;
  if ('key' in event ? event.key !== 'Enter' || event.repeat : event.button !== 0) return;
  const link = event.target.closest<HTMLAnchorElement>('#root a[href]');
  if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
  const destination = new URL(link.href, window.location.href);
  if (destination.origin !== window.location.origin
    || !['/ai-sales-agent', '/aiagent'].includes(destination.pathname)) return;

  // The copied navigation still owns its original destination internally.
  // Use the public page directly, before its router/loading handler runs.
  destination.pathname = '/ai-sales-agent';
  event.preventDefault();
  event.stopImmediatePropagation();
  window.location.assign(destination.href);
}

function navigateDemoFromLink(event: MouseEvent | KeyboardEvent) {
  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
    || !(event.target instanceof Element)) return;
  if ('key' in event ? event.key !== 'Enter' || event.repeat : event.button !== 0) return;
  const link = event.target.closest<HTMLAnchorElement>('a[href]');
  if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
  const destination = new URL(link.href, window.location.href);
  if (destination.origin !== window.location.origin || destination.pathname !== DEMO_REQUEST_PATH) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  window.location.assign(destination.href);
}

function correctLinks(root: HTMLElement) {
  root.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
    const currentHref = link.getAttribute('href');
    if (currentHref && ROUTE_ALIASES[currentHref]) link.setAttribute('href', ROUTE_ALIASES[currentHref]);

    const label = link.textContent?.trim();
    if (label === 'Book Demo' || label === 'Book a Demo') {
      link.setAttribute('href', DEMO_REQUEST_PATH);
      link.removeAttribute('target');
      link.removeAttribute('rel');
    }
  });

  root.querySelectorAll<HTMLAnchorElement>('header a').forEach((link) => {
    const label = link.textContent?.trim();
    if (label === 'AI Sales Agent') link.setAttribute('href', '/ai-sales-agent');
    if (label === 'AI Webstore Suite') link.setAttribute('href', '/ai-webstore-suite');
    if (label === 'Pricing') link.setAttribute('href', '/pricing');
    if (link.closest('.bright-nav-product-links')
      && (label === 'Backend Admin' || label === 'AI Agent Console' || label === 'Resources')) {
      if (label !== 'Resources') link.textContent = 'Resources';
      link.setAttribute('href', '/resources');
      link.setAttribute('aria-label', 'Resources');
      if (window.location.pathname === '/resources') link.setAttribute('aria-current', 'page');
      else if (window.location.pathname.startsWith('/resources/')) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
      bindHeaderNavigation(link);
    }
  });

  root.querySelectorAll<HTMLAnchorElement>('footer a').forEach((link) => {
    const label = link.textContent?.trim();
    if (label === 'AI Webstore Suite') link.setAttribute('href', '/ai-webstore-suite');
    if (label === 'AI Sales Agent') link.setAttribute('href', '/ai-sales-agent');
    if (label === 'Resources') link.setAttribute('href', '/resources');
    if (label === 'AI Product FAQs') {
      link.textContent = 'AI FAQs';
      link.setAttribute('href', '/help/ai');
    }
    if (label === 'Pricing Plan') {
      link.textContent = 'Pricing';
      link.setAttribute('href', '/pricing');
    }
    if (label === 'Book a Demo') link.setAttribute('href', DEMO_REQUEST_PATH);
  });
}

function correctResourceRoles(root: HTMLElement) {
  if (window.location.pathname !== '/resources') return;
  const topics = root.querySelector<HTMLElement>('.bright-resource-topic-list');
  const trigger = Array.from(topics?.querySelectorAll<HTMLButtonElement>('button') ?? []).find(
    (button) => button.querySelector('span:nth-child(2)')?.textContent?.trim() === 'AI Agent Roles',
  );
  if (!topics || !trigger) return;

  let panel = topics.querySelector<HTMLElement>('#antbuildz-resource-role-links');
  if (!panel) {
    panel = document.createElement('nav');
    panel.id = 'antbuildz-resource-role-links';
    panel.className = 'antbuildz-resource-role-links';
    panel.setAttribute('aria-label', 'AI Agent role guides');
    panel.hidden = trigger.getAttribute('aria-expanded') !== 'true';
    RESOURCE_ROLE_LINKS.forEach((role) => {
      const link = document.createElement('a');
      link.href = role.href;
      link.textContent = role.label;
      panel!.appendChild(link);
    });
    trigger.insertAdjacentElement('afterend', panel);
  }

  trigger.setAttribute('aria-controls', panel.id);
  if (trigger.dataset.antbuildzRoleDisclosure === 'true') return;
  trigger.dataset.antbuildzRoleDisclosure = 'true';
  trigger.setAttribute('aria-expanded', String(!panel.hidden));

  const setExpanded = (expanded: boolean) => {
    trigger.setAttribute('aria-expanded', String(expanded));
    const currentPanel = topics.querySelector<HTMLElement>('#antbuildz-resource-role-links');
    if (currentPanel) currentPanel.hidden = !expanded;
  };
  // Preserve the existing category filter; the disclosure adds direct links.
  trigger.addEventListener('click', () => {
    setExpanded(trigger.getAttribute('aria-expanded') !== 'true');
  });
  trigger.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    if (!event.repeat) trigger.click();
  });
  topics.addEventListener('click', (event) => {
    const button = (event.target as Element).closest('button');
    if (button && button !== trigger) setExpanded(false);
  });
  topics.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || trigger.getAttribute('aria-expanded') !== 'true') return;
    event.preventDefault();
    setExpanded(false);
    trigger.focus();
  });
}

function correctFooter(root: HTMLElement) {
  const footer = root.querySelector<HTMLElement>('.abz-public-footer');
  if (!footer) return;

  footer.setAttribute('aria-label', 'Antbuildz AI footer');
  footer.querySelector<HTMLElement>('nav[aria-label="Marketplace"]')?.setAttribute('hidden', '');

  const brandCopy = footer.querySelector<HTMLElement>('.abz-public-footer__brand p');
  setPricingText(brandCopy, 'Industrial AI Sales Agent, AI Webstore Suite and AI Agent Console for product-led B2B teams.');

  const companyResources = footer.querySelector<HTMLAnchorElement>(
    'nav[aria-label="Company"] a[href="/blogs"], nav[aria-label="Company"] a[href="/resources"]',
  );
  if (companyResources) {
    setPricingText(companyResources, 'Resources');
    companyResources.setAttribute('href', '/resources');
    // Follow the updated destination, not the transferred router's Blogs prop.
    if (companyResources.dataset.antbuildzFooterResources !== 'true') {
      companyResources.dataset.antbuildzFooterResources = 'true';
      bindResourceNavigation(companyResources);
    }
    // Keep React-owned nodes mounted while removing the duplicate list row
    // from both the layout and keyboard/accessibility navigation.
    footer.querySelector('nav[aria-label="AI Products"] a[href="/resources"]')
      ?.closest('li')?.setAttribute('hidden', '');
  }

  const companyPolicies = footer.querySelector<HTMLAnchorElement>(
    'nav[aria-label="Company"] a[href="/agreements"]',
  );
  if (companyPolicies) {
    setPricingText(companyPolicies, 'AI Agreements & Policies');
    companyPolicies.setAttribute('href', '/agreements');
  }

  const companyHelp = footer.querySelector<HTMLAnchorElement>(
    'nav[aria-label="Company"] a[href="/help"], nav[aria-label="Company"] a[href="/help/ai"], nav[aria-label="Company"] a[href="/faqs"]',
  );
  if (companyHelp) {
    setPricingText(companyHelp, 'AI Help Centre');
    companyHelp.setAttribute('href', '/help/ai');
  }
}

function createHomeHeroConversation(
  messages: typeof HOME_HERO_CONVERSATION = HOME_HERO_CONVERSATION,
  layer: 'centre' | 'left' | 'right' | 'outer-left' | 'outer-right' = 'centre',
  label = 'Example industrial buyer qualification conversation',
  summary = 'The AI Sales Agent gathers forklift capacity, lift height, aisle width and hire period, checks approved fleet information, and prepares the requirement for availability and quotation review by the rental team.',
) {
  const conversation = document.createElement('section');
  conversation.className = `antbuildz-home-hero-conversation is-${layer}`;
  conversation.setAttribute('aria-label', label);
  conversation.dataset.layer = layer;

  const accessibleSummary = document.createElement('p');
  accessibleSummary.className = 'sr-only';
  accessibleSummary.textContent = `Illustrative conversation between a buyer and Emma, AI Sales Agent. ${summary}`;

  const transcript = document.createElement('div');
  transcript.className = 'antbuildz-home-hero-conversation__transcript';
  transcript.setAttribute('aria-hidden', 'true');
  messages.forEach((message, index) => {
    const bubble = document.createElement('article');
    bubble.className = `antbuildz-home-hero-conversation__bubble is-${message.kind}`;
    bubble.dataset.step = String(index);
    // Reuse Emma's shared identity and keep the illustrative buyer visually
    // distinct with an existing industrial-team image.
    const isBuyer = message.kind === 'buyer';
    const avatar = document.createElement('img');
    avatar.className = `antbuildz-home-hero-conversation__avatar${isBuyer ? '' : ' antbuildz-emma-portrait'}`;
    avatar.src = isBuyer ? '/images/industrial-buyer-avatar.jpg' : EMMA_PORTRAIT_SRC;
    avatar.alt = isBuyer ? 'Example industrial buyer' : EMMA_PORTRAIT_ALT;
    avatar.width = 24;
    avatar.height = 24;
    avatar.draggable = false;
    bubble.appendChild(avatar);
    const surface = document.createElement('div');
    surface.className = 'antbuildz-home-hero-conversation__surface';
    if (message.kind === 'requirement') {
      const label = document.createElement('span');
      label.textContent = 'REQUIREMENT PROFILE';
      const value = document.createElement('strong');
      value.textContent = message.text;
      const note = document.createElement('small');
      note.textContent = 'Pending availability and quotation review';
      surface.appendChild(label);
      surface.appendChild(value);
      surface.appendChild(note);
    } else {
      surface.textContent = message.text;
    }
    bubble.appendChild(surface);
    transcript.appendChild(bubble);
  });

  const typing = document.createElement('div');
  typing.className = 'antbuildz-home-hero-conversation__typing';
  typing.setAttribute('aria-hidden', 'true');
  typing.appendChild(document.createElement('span'));
  typing.appendChild(document.createElement('span'));
  typing.appendChild(document.createElement('span'));
  transcript.appendChild(typing);

  conversation.appendChild(accessibleSummary);
  conversation.appendChild(transcript);
  return conversation;
}

function createHomeIndustryVisual(
  industry: HomeIndustryChapter['industries'][number],
  modifier: string,
) {
  const figure = document.createElement('figure');
  figure.className = `antbuildz-home-industry-visual__figure ${modifier}`;

  const image = document.createElement('img');
  image.src = industry.image;
  image.alt = industry.alt;
  image.loading = 'lazy';
  image.decoding = 'async';

  const caption = document.createElement('figcaption');
  caption.textContent = industry.label;
  figure.appendChild(image);
  figure.appendChild(caption);
  return figure;
}

function createHomeIndustryChapter(chapter: HomeIndustryChapter, index: number) {
  const section = document.createElement('section');
  section.className = `antbuildz-home-industry-chapter${index % 2 ? ' is-reversed' : ''}`;
  section.setAttribute('aria-labelledby', `antbuildz-home-industry-chapter-${index + 1}`);

  const inner = document.createElement('div');
  inner.className = 'antbuildz-home-industry-chapter__inner';

  const copy = document.createElement('div');
  copy.className = 'antbuildz-home-industry-chapter__copy';

  const chapterLabel = document.createElement('p');
  chapterLabel.className = 'antbuildz-home-industry-chapter__label';
  chapterLabel.textContent = `${String(index + 1).padStart(2, '0')} · ${chapter.label}`;

  const title = document.createElement('h3');
  title.id = `antbuildz-home-industry-chapter-${index + 1}`;
  title.textContent = chapter.title;

  const introduction = document.createElement('p');
  introduction.className = 'antbuildz-home-industry-chapter__introduction';
  introduction.textContent = chapter.introduction;

  const industrySummaries = document.createElement('div');
  industrySummaries.className = 'antbuildz-home-industry-chapter__summaries';
  chapter.industries.forEach((industry) => {
    const summary = document.createElement('article');
    summary.className = 'antbuildz-home-industry-summary';

    const summaryTitle = document.createElement('h4');
    const summaryLink = document.createElement('a');
    summaryLink.href = industry.href;
    summaryLink.textContent = industry.label;
    summaryTitle.appendChild(summaryLink);

    const summaryCopy = document.createElement('p');
    summaryCopy.textContent = industry.summary;

    const summaryAction = document.createElement('a');
    summaryAction.className = 'antbuildz-home-industry-summary__action';
    summaryAction.href = industry.href;
    summaryAction.textContent = `Explore ${industry.label}`;

    summary.appendChild(summaryTitle);
    summary.appendChild(summaryCopy);
    summary.appendChild(summaryAction);
    industrySummaries.appendChild(summary);
  });

  const workflow = document.createElement('ol');
  workflow.className = 'antbuildz-home-industry-chapter__workflow';
  workflow.setAttribute('aria-label', `${chapter.label} AI sales workflow`);
  chapter.workflow.forEach((step, stepIndex) => {
    const item = document.createElement('li');
    const stepNumber = document.createElement('span');
    stepNumber.setAttribute('aria-hidden', 'true');
    stepNumber.textContent = String(stepIndex + 1).padStart(2, '0');
    const stepText = document.createElement('strong');
    stepText.textContent = step;
    item.appendChild(stepNumber);
    item.appendChild(stepText);
    workflow.appendChild(item);
  });

  copy.appendChild(chapterLabel);
  copy.appendChild(title);
  copy.appendChild(introduction);
  copy.appendChild(industrySummaries);
  copy.appendChild(workflow);

  const visual = document.createElement('div');
  visual.className = 'antbuildz-home-industry-visual';
  visual.appendChild(createHomeIndustryVisual(chapter.industries[0], 'is-primary'));
  visual.appendChild(createHomeIndustryVisual(chapter.industries[1], 'is-secondary'));

  inner.appendChild(copy);
  inner.appendChild(visual);
  section.appendChild(inner);
  return section;
}

function createHomeIndustriesSection() {
  const section = document.createElement('section');
  section.className = 'antbuildz-home-industries';
  section.setAttribute('aria-labelledby', 'antbuildz-home-industries-title');

  const intro = document.createElement('div');
  intro.className = 'antbuildz-home-industries__intro';
  const eyebrow = document.createElement('p');
  eyebrow.className = 'antbuildz-home-industries__eyebrow';
  eyebrow.textContent = 'WHO WE SERVE';
  const title = document.createElement('h2');
  title.id = 'antbuildz-home-industries-title';
  title.textContent = 'AI sales workflows shaped around industrial work.';
  const description = document.createElement('p');
  description.className = 'antbuildz-home-industries__description';
  description.textContent = 'From rental dates and site conditions to technical specifications and parts fitment, Antbuildz AI captures the details your team needs before an enquiry reaches sales.';
  intro.appendChild(eyebrow);
  intro.appendChild(title);
  intro.appendChild(description);

  const chapters = document.createElement('div');
  chapters.className = 'antbuildz-home-industries__chapters';
  HOME_INDUSTRY_CHAPTERS.forEach((chapter, index) => {
    chapters.appendChild(createHomeIndustryChapter(chapter, index));
  });

  section.appendChild(intro);
  section.appendChild(chapters);
  return section;
}

function resetHomeHeroRuntime() {
  homeHeroRuntimeCleanup?.();
  homeHeroRuntimeCleanup = null;
  homeHeroRuntimeElement = null;
}

function resetHomeHeroVideo() {
  homeHeroVideoCleanup?.();
  homeHeroVideoCleanup = null;
  homeHeroVideoElement = null;
}

function setupHomeHeroVideo(hero: HTMLElement) {
  const poster = '/images/home-hero-industrial-loop-poster.jpg';
  const heroImage = hero.querySelector<HTMLImageElement>('.ai-marketplace-hero-image');
  if (heroImage) {
    heroImage.src = poster;
    heroImage.alt = 'Industrial equipment fleet in a dusty machinery yard';
    heroImage.width = 1280;
    heroImage.height = 720;
  }

  let video = hero.querySelector<HTMLVideoElement>('.antbuildz-home-hero-video');
  if (!video) {
    video = document.createElement('video');
    video.className = 'antbuildz-home-hero-video';
    video.src = '/videos/home-hero-industrial-loop.mp4';
    video.poster = poster;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('aria-hidden', 'true');
    video.tabIndex = -1;
    heroImage?.after(video);
  }
  if (homeHeroVideoElement === video) return;

  resetHomeHeroVideo();
  homeHeroVideoElement = video;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const syncPlayback = () => {
    if (!video) return;
    const shouldPlay = !reducedMotion.matches && !document.hidden;
    video.autoplay = shouldPlay;
    video.preload = shouldPlay ? 'metadata' : 'none';
    if (shouldPlay) void video.play().catch(() => undefined);
    else video.pause();
  };
  reducedMotion.addEventListener('change', syncPlayback);
  document.addEventListener('visibilitychange', syncPlayback);
  syncPlayback();
  homeHeroVideoCleanup = () => {
    reducedMotion.removeEventListener('change', syncPlayback);
    document.removeEventListener('visibilitychange', syncPlayback);
    video?.pause();
  };
}

function setupHomeHeroRuntime(root: HTMLElement) {
  const stage = root.querySelector<HTMLElement>('.ai-marketplace-hero-stage');
  const hero = root.querySelector<HTMLElement>('.ai-marketplace-hero');
  const conversation = root.querySelector<HTMLElement>('.antbuildz-home-hero-conversation.is-centre');
  if (!stage || !hero || !conversation || homeHeroRuntimeElement === conversation) return;

  resetHomeHeroRuntime();
  homeHeroRuntimeElement = conversation;
  const cleanups = Array.from(hero.querySelectorAll<HTMLElement>('.antbuildz-home-hero-conversation'))
    .map((chat, layerIndex) => setupHomeHeroConversationRuntime(stage, hero, chat, layerIndex));
  homeHeroRuntimeCleanup = () => {
    cleanups.forEach((cleanup) => cleanup());
    hero.style.removeProperty('--antbuildz-home-title-top');
    hero.style.removeProperty('--antbuildz-home-title-scale');
    hero.style.removeProperty('--antbuildz-home-chat-opacity');
    hero.style.removeProperty('--antbuildz-home-chat-shift');
    hero.style.removeProperty('--antbuildz-home-chat-top');
    hero.style.removeProperty('--antbuildz-home-chat-height');
  };
}

function setupHomeHeroConversationRuntime(
  stage: HTMLElement,
  hero: HTMLElement,
  conversation: HTMLElement,
  layerIndex: number,
) {
  const messageNodes = Array.from(
    conversation.querySelectorAll<HTMLElement>('[data-step]'),
  );
  const typing = conversation.querySelector<HTMLElement>('.antbuildz-home-hero-conversation__typing');
  const transcript = conversation.querySelector<HTMLElement>('.antbuildz-home-hero-conversation__transcript');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let currentStep = reducedMotion.matches ? messageNodes.length - 1 : 0;
  let conversationActive = false;
  let scrollFrame = 0;
  let transcriptFrame = 0;
  let transcriptTimer = 0;

  const updateTranscriptFade = () => {
    if (!transcript) return;
    const top = transcript.getBoundingClientRect().top + 10;
    messageNodes.forEach((message) => {
      const bounds = message.getBoundingClientRect();
      const fadeDistance = Math.min(56, bounds.height || 1);
      const opacity = transcript.scrollTop < 1 ? 1 : Math.min(1, Math.max(0, (bounds.top - top + fadeDistance) / fadeDistance));
      message.style.setProperty('--home-chat-message-opacity', String(opacity));
    });
  };

  const updateTranscriptPosition = (resetToTop = false) => {
    if (!transcript) return;
    const maxScroll = Math.max(0, transcript.scrollHeight - transcript.clientHeight);
    if (resetToTop) {
      transcript.scrollTop = 0;
      updateTranscriptFade();
      return;
    }
    if (maxScroll > 2) {
      transcript.scrollTo({
        top: maxScroll,
        behavior: reducedMotion.matches ? 'auto' : 'smooth',
      });
    }
    updateTranscriptFade();
  };

  const scheduleTranscriptPosition = (resetToTop = false) => {
    if (transcriptFrame) window.cancelAnimationFrame(transcriptFrame);
    if (transcriptTimer) window.clearTimeout(transcriptTimer);
    transcriptFrame = window.requestAnimationFrame(() => {
      transcriptFrame = 0;
      updateTranscriptPosition(resetToTop);
    });
    transcriptTimer = window.setTimeout(() => {
      transcriptTimer = 0;
      updateTranscriptPosition(resetToTop);
    }, 380);
  };

  const renderConversation = (resetToTop = false) => {
    messageNodes.forEach((message, index) => {
      message.classList.toggle('is-visible', index <= currentStep);
    });
    typing?.classList.toggle(
      'is-visible',
      conversationActive && !reducedMotion.matches && currentStep < messageNodes.length - 1,
    );
    scheduleTranscriptPosition(resetToTop);
  };

  const updateScrollProgress = () => {
    scrollFrame = 0;
    const bounds = stage.getBoundingClientRect();
    const travel = Math.max(1, bounds.height - window.innerHeight);
    const progress = Math.min(1, Math.max(0, -bounds.top / travel));
    const titleProgress = reducedMotion.matches ? 1 : Math.min(1, progress / .38);
    const easedTitleProgress = 1 - ((1 - titleProgress) ** 3);
    const conversationProgress = reducedMotion.matches
      ? 1
      : Math.min(1, Math.max(0, (progress - .12) / .23));

    if (conversation.dataset.layer === 'centre') {
      const titleTravel = window.innerWidth <= 767 ? 20 : 25;
      hero.style.setProperty('--antbuildz-home-title-top', `${50 - (titleTravel * easedTitleProgress)}%`);
      hero.style.setProperty('--antbuildz-home-title-scale', `${1 - (.1 * easedTitleProgress)}`);
      hero.style.setProperty('--antbuildz-home-chat-opacity', `${conversationProgress}`);
      hero.style.setProperty('--antbuildz-home-chat-shift', `${44 * (1 - conversationProgress)}px`);
      // Anchor to the actual title, including wrapping and short desktop heights.
      const title = hero.querySelector<HTMLElement>('.antbuildz-ai-home-intro') || hero.querySelector<HTMLElement>('.ai-marketplace-hero-copy h1');
      if (title) {
        const heroBounds = hero.getBoundingClientRect();
        const titleGap = heroBounds.width <= 767 ? 24 : 40;
        const chatTop = title.getBoundingClientRect().bottom - heroBounds.top + titleGap;
        hero.style.setProperty('--antbuildz-home-chat-top', `${chatTop}px`);
        hero.style.setProperty('--antbuildz-home-chat-height', `${Math.max(200, Math.min(430, heroBounds.height - chatTop - 28))}px`);
      }
    }
    const layer = conversation.dataset.layer;
    const layerVisible = window.innerWidth <= 767
      ? layer === 'centre'
      : !layer?.startsWith('outer-') || window.innerWidth >= 1180;
    conversationActive = layerVisible && conversationProgress > .72 && bounds.bottom > 0 && bounds.top < window.innerHeight;
    conversation.classList.toggle('is-active', conversationActive);
    renderConversation();
  };

  const scheduleScrollProgress = () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(updateScrollProgress);
  };

  const advanceConversation = window.setInterval(() => {
    if (!conversationActive || reducedMotion.matches || document.hidden) return;
    const nextStep = (currentStep + 1) % messageNodes.length;
    const isRestarting = nextStep === 0;
    currentStep = nextStep;
    renderConversation(isRestarting);
  }, [1900, 2500, 3100, 2800, 3400][layerIndex] ?? 1900);

  const handleMotionPreference = () => {
    currentStep = reducedMotion.matches ? messageNodes.length - 1 : 0;
    renderConversation();
    scheduleScrollProgress();
  };

  window.addEventListener('scroll', scheduleScrollProgress, { passive: true });
  window.addEventListener('resize', scheduleScrollProgress);
  transcript?.addEventListener('scroll', updateTranscriptFade, { passive: true });
  reducedMotion.addEventListener('change', handleMotionPreference);
  renderConversation();
  updateScrollProgress();

  return () => {
    window.clearInterval(advanceConversation);
    window.removeEventListener('scroll', scheduleScrollProgress);
    window.removeEventListener('resize', scheduleScrollProgress);
    transcript?.removeEventListener('scroll', updateTranscriptFade);
    reducedMotion.removeEventListener('change', handleMotionPreference);
    if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    if (transcriptFrame) window.cancelAnimationFrame(transcriptFrame);
    if (transcriptTimer) window.clearTimeout(transcriptTimer);
  };
}

function correctHomepage(root: HTMLElement) {
  const isHomepage = window.location.pathname === '/';
  root.classList.toggle('antbuildz-ai-home', isHomepage);
  document.body.classList.toggle('antbuildz-ai-home-active', isHomepage);
  const existingIndustries = root.querySelector<HTMLElement>('.antbuildz-home-industries');
  if (!isHomepage) {
    resetHomeHeroRuntime();
    resetHomeHeroVideo();
    root.querySelector<HTMLVideoElement>('.antbuildz-home-hero-video')?.remove();
    root.querySelectorAll<HTMLElement>('.antbuildz-home-hero-conversation').forEach((chat) => chat.remove());
    existingIndustries?.remove();
    return;
  }

  const heroCopy = root.querySelector<HTMLElement>('.ai-marketplace-hero-copy');
  const titleLines = heroCopy?.querySelectorAll<HTMLElement>('h1 .ai-hero-line');
  if (titleLines?.[0] && titleLines[0].textContent !== 'We Make Industrial Possible') titleLines[0].textContent = 'We Make Industrial Possible';
  if (titleLines?.[1] && titleLines[1].textContent !== 'With Antbuildz AI') titleLines[1].textContent = 'With Antbuildz AI';
  if (titleLines?.[0] && titleLines[1] && titleLines[1].previousSibling === titleLines[0]) {
    titleLines[0].after(document.createTextNode(' '));
  }

  if (heroCopy && !heroCopy.querySelector('.antbuildz-ai-home-eyebrow')) {
    const eyebrow = document.createElement('p');
    eyebrow.className = 'antbuildz-ai-home-eyebrow';
    eyebrow.textContent = 'AI Sales Agent for industrial businesses';
    heroCopy.prepend(eyebrow);
  }
  heroCopy?.querySelector('.antbuildz-ai-home-intro')?.remove();

  const hero = root.querySelector<HTMLElement>('.ai-marketplace-hero');
  if (hero) setupHomeHeroVideo(hero);
  if (hero && !hero.querySelector('.antbuildz-home-hero-conversation')) {
    hero.appendChild(createHomeHeroConversation());
    HOME_BACKGROUND_CONVERSATIONS.forEach(({ messages, layer, label, summary, source }) => {
      const background = createHomeHeroConversation(messages, layer, label, summary);
      background.dataset.source = source;
      hero.appendChild(background);
    });
  }
  setupHomeHeroRuntime(root);

  const marketplaceSearch = root.querySelector<HTMLElement>('.ai-marketplace-search-shell');
  marketplaceSearch?.setAttribute('aria-hidden', 'true');
  marketplaceSearch?.setAttribute('inert', '');

  const heroSection = root.querySelector<HTMLElement>('.ai-hero-section');
  if (heroSection && !existingIndustries) {
    heroSection.insertAdjacentElement('afterend', createHomeIndustriesSection());
  }
}

function setPricingText(element: Element | null | undefined, value: string) {
  if (element && element.textContent !== value) element.textContent = value;
}

function formatUsdAmount(amount: number) {
  const hasCents = !Number.isInteger(amount);
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

function setPricingDetail(details: HTMLElement, key: string, label: string, value: string) {
  let row = details.querySelector<HTMLElement>(`[data-antbuildz-pricing-detail="${key}"]`);
  if (!row) {
    row = document.createElement('div');
    row.dataset.antbuildzPricingDetail = key;
    row.innerHTML = '<span></span><strong></strong>';
    details.appendChild(row);
  }
  setPricingText(row.querySelector('span'), label);
  setPricingText(row.querySelector('strong'), value);
}

function correctPricingComparison(
  block: HTMLElement | null,
  plans: readonly AgentPricingPlan[],
  copy: Record<string, PricingComparisonCopy>,
) {
  if (!block) return;
  block.querySelectorAll('.pricing-compare-plan-chip').forEach((chip, index) => {
    if (plans[index]) setPricingText(chip, plans[index].name);
  });
  block.querySelectorAll<HTMLElement>('.pricing-compare-row').forEach((row) => {
    const label = row.querySelector('.pricing-compare-td-feature');
    const originalLabel = row.dataset.antbuildzOriginalFeature ?? label?.textContent?.trim();
    if (!originalLabel) return;
    row.dataset.antbuildzOriginalFeature = originalLabel;
    const update = copy[originalLabel];
    if (!update) return;
    if (update.label) setPricingText(label, update.label);
    row.querySelectorAll('.pricing-compare-td-value').forEach((cell, index) => {
      const value = update.values?.[index];
      if (value === undefined) return;
      setPricingText(cell, value);
      cell.classList.toggle('is-yes', value === 'Yes');
      cell.classList.toggle('is-no', value === 'No');
    });
  });
}

function correctPricingSupportingCopy(root: HTMLElement, agentSection: HTMLElement) {
  setPricingText(root.querySelector('.pricing-hero p'), 'One AI Sales Agent. Four plans to grow with your business.');
  setPricingText(agentSection.querySelector('.pricing-section-header p'), PRICING_USAGE_COPY.principle);
  setPricingText(
    agentSection.querySelector('.pricing-conversation-note p'),
    `A conversation means one meaningful live AI-agent session; Playground is for test prompts inside the AI console. ${PRICING_USAGE_COPY.monthly} Plan, Purchased Credit and Pay-As-You-Go prices are in USD; the existing Additional AI Agent price is shown separately in SGD.`,
  );

  const packCard = root.querySelector('.pricing-topup-table')?.closest('.pricing-addon-card');
  if (packCard) {
    setPricingText(packCard.querySelector('h3'), 'Purchased Credits');
    const descriptions = packCard.querySelectorAll('.pricing-addon-desc');
    setPricingText(descriptions[0], PRICING_USAGE_COPY.purchased);
    setPricingText(descriptions[1], 'Buy more upfront and save on each conversation.');
    packCard.querySelectorAll('tbody tr').forEach((row, index) => {
      const pack = PURCHASED_CREDIT_PACKS[index];
      if (!pack) return;
      const cells = row.querySelectorAll('td');
      setPricingText(cells[0], `${pack.conversations} conversations`);
      setPricingText(cells[1], `$${pack.usd} · $${(pack.usd / pack.conversations).toFixed(2)}/conversation`);
    });
  }

  correctPricingComparison(
    root.querySelector('#compare-features-ai-agent'), AGENT_PRICING_PLANS, AGENT_COMPARISON_COPY,
  );
  correctPricingComparison(
    root.querySelector('#compare-features-webstore'), AGENT_PRICING_PLANS.slice(1), WEBSTORE_COMPARISON_COPY,
  );
  setPricingText(
    root.querySelector('#compare-features-ai-agent .pricing-compare-subtitle'),
    'Launch, Growth, Enterprise and Custom: compare AI capabilities across the four subscription plans.',
  );
  setPricingText(
    root.querySelector('#compare-features-webstore .pricing-compare-subtitle'),
    'Growth includes the Sales Webstore. Enterprise adds Rental. Custom extends beyond the standard plans.',
  );

  root.querySelectorAll('.pricing-faq-item').forEach((item, index) => {
    const faq = PRICING_FAQS[index];
    if (!faq) return;
    // Preserve the original accordion button, icon and open/close state.
    setPricingText(item.querySelector('.pricing-faq-trigger > span:first-child'), faq.question);
    setPricingText(item.querySelector('.pricing-faq-answer p'), faq.answer);
  });

  // Avoid the copied footer CTA's obsolete Starter checkout price. Reuse the
  // enquiry-only behaviour of the four corrected subscription cards.
  const bottomCta = root.querySelector<HTMLButtonElement>('.pricing-bottom-cta .pricing-cta-white');
  if (bottomCta && !pricingCtaBindings.has(bottomCta)) {
    pricingCtaBindings.add(bottomCta);
    bottomCta.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.href = `mailto:hello@antbuildz.com?subject=${encodeURIComponent('Antbuildz AI plan enquiry')}`;
    });
  }
}

function correctPricing(root: HTMLElement) {
  const isPricingPage = window.location.pathname === '/pricing';
  root.classList.toggle('antbuildz-ai-pricing', isPricingPage);
  if (!isPricingPage) return;

  const agentSection = Array.from(root.querySelectorAll<HTMLElement>('.pricing-section')).find(
    (section) => section.querySelector('.pricing-section-label')?.textContent?.trim() === 'AI Sales Agent',
  );
  if (!agentSection) return;

  const pricingControls = root.querySelector<HTMLElement>('.pricing-controls-row');
  let billingCycle: 'monthly' | 'annual' = 'monthly';
  if (pricingControls) {
    pricingControls.hidden = false;
    pricingControls.removeAttribute('aria-hidden');
    pricingControls.removeAttribute('inert');

    const sectionHeader = agentSection.querySelector<HTMLElement>('.pricing-section-header');
    if (
      sectionHeader
      && (pricingControls.parentElement !== agentSection || pricingControls.previousElementSibling !== sectionHeader)
    ) {
      sectionHeader.insertAdjacentElement('afterend', pricingControls);
    }

    const currencyControl = pricingControls.querySelector<HTMLElement>('.pricing-currency-select-wrap');
    if (currencyControl) {
      currencyControl.hidden = true;
      currencyControl.setAttribute('aria-hidden', 'true');
      currencyControl.setAttribute('inert', '');
    }

    const billingButtons = Array.from(
      pricingControls.querySelectorAll<HTMLButtonElement>('.pricing-billing-btn'),
    );
    const storedCycle = pricingControls.dataset.antbuildzBilling;
    const activeCycle = billingButtons
      .find((button) => button.classList.contains('is-active'))
      ?.textContent?.includes('Annual') ? 'annual' : 'monthly';
    billingCycle = storedCycle === 'annual' || storedCycle === 'monthly' ? storedCycle : activeCycle;

    billingButtons.forEach((button) => {
      const buttonCycle = button.textContent?.includes('Annual') ? 'annual' : 'monthly';
      const isActive = buttonCycle === billingCycle;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
      if (!pricingBillingBindings.has(button)) {
        pricingBillingBindings.add(button);
        button.addEventListener('click', () => {
          pricingControls.dataset.antbuildzBilling = buttonCycle;
          window.requestAnimationFrame(() => correctPricing(root));
        });
      }
    });
  }

  const cards = Array.from(agentSection.querySelectorAll<HTMLElement>('.pricing-card'));

  AGENT_PRICING_PLANS.forEach((plan, index) => {
    const card = cards[index];
    if (!card) return;

    card.dataset.antbuildzPlan = plan.name.toLowerCase();
    card.classList.toggle('pricing-card-featured', plan.badge === 'Most Popular');

    let badge = card.querySelector<HTMLElement>('.antbuildz-pricing-badge');
    if (!badge) {
      badge = document.createElement('div');
      badge.className = 'antbuildz-pricing-badge';
      card.insertAdjacentElement('afterbegin', badge);
    }
    badge.classList.toggle('is-empty', !plan.badge);
    badge.classList.toggle('is-popular', plan.badge === 'Most Popular');
    setPricingText(badge, plan.badge ?? 'Plan badge');
    badge.setAttribute('aria-hidden', plan.badge ? 'false' : 'true');

    setPricingText(card.querySelector('.pricing-plan-name'), plan.name);
    // Use the existing text slot without adding a new card element.
    setPricingText(card.querySelector('.pricing-target'), `${plan.target}. ${plan.description}`);

    const price = card.querySelector<HTMLElement>('.pricing-price');
    const period = card.querySelector<HTMLElement>('.pricing-price-period');
    const priceRow = card.querySelector<HTMLElement>('.pricing-price-row');
    let annualNote = card.querySelector<HTMLElement>('.antbuildz-pricing-annual-note');
    if (!annualNote) {
      annualNote = document.createElement('div');
      annualNote.className = 'pricing-annual-note antbuildz-pricing-annual-note';
      annualNote.hidden = true;
      priceRow?.insertAdjacentElement('afterend', annualNote);
    }

    if (plan.monthlyUsd) {
      annualNote.classList.remove('is-placeholder');
      const monthlyEquivalent = billingCycle === 'annual'
        ? plan.monthlyUsd * (1 - ANNUAL_PRICING_DISCOUNT)
        : plan.monthlyUsd;
      setPricingText(price, `$${formatUsdAmount(monthlyEquivalent)}`);
      if (period) {
        period.hidden = false;
        setPricingText(period, '/mo');
      }
      if (annualNote) {
        annualNote.hidden = billingCycle !== 'annual';
        if (billingCycle === 'annual') {
          const annualTotal = plan.monthlyUsd * 12 * (1 - ANNUAL_PRICING_DISCOUNT);
          setPricingText(
            annualNote,
            `$${formatUsdAmount(annualTotal)} billed annually · Save 20%`,
          );
        }
      }
    } else {
      setPricingText(price, 'Contact Sales');
      if (period) period.hidden = true;
      annualNote.hidden = billingCycle !== 'annual';
      annualNote.classList.toggle('is-placeholder', billingCycle === 'annual');
      setPricingText(annualNote, 'Annual billing is agreed with your sales plan');
    }

    const button = card.querySelector<HTMLButtonElement>('.pricing-cta');
    if (button) {
      setPricingText(button, plan.cta);
      button.classList.toggle('pricing-cta-featured', plan.badge === 'Most Popular');
      button.dataset.antbuildzEmailSubject = plan.emailSubject;
      button.dataset.antbuildzDemo = String(plan.cta === 'Book a Demo');
      if (!pricingCtaBindings.has(button)) {
        pricingCtaBindings.add(button);
        button.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopImmediatePropagation();
          if (button.dataset.antbuildzDemo === 'true') {
            window.location.assign(new URL(DEMO_REQUEST_PATH, window.location.origin).href);
            return;
          }
          const subject = button.dataset.antbuildzEmailSubject ?? 'Antbuildz AI pricing enquiry';
          window.location.href = `mailto:hello@antbuildz.com?subject=${encodeURIComponent(subject)}`;
        });
      }
    }

    let details = card.querySelector<HTMLElement>('.antbuildz-pricing-details');
    if (!details) {
      details = document.createElement('div');
      details.className = 'antbuildz-pricing-details';
      button?.insertAdjacentElement('beforebegin', details);
    }
    setPricingDetail(details, 'usage', 'Monthly Conversations', plan.usage);
    setPricingDetail(details, 'listings', 'Listings', plan.listings);
    setPricingDetail(details, 'overage', 'Extra conversations', plan.extraConversations);

    setPricingText(card.querySelector('.pricing-feature-group-label'), plan.featureLabel);

    const featureRows = Array.from(card.querySelectorAll<HTMLElement>('.pricing-feature-row'));
    // Repeat the existing row pattern for the full approved feature list.
    const rowTemplate = featureRows[0];
    const featureList = card.querySelector('.pricing-features');
    while (rowTemplate && featureList && featureRows.length < plan.features.length) {
      const row = rowTemplate.cloneNode(true) as HTMLElement;
      featureList.appendChild(row);
      featureRows.push(row);
    }
    featureRows.forEach((row, featureIndex) => {
      const feature = plan.features[featureIndex];
      row.hidden = !feature;
      if (feature) setPricingText(row.lastElementChild, feature);
    });
  });
  correctPricingSupportingCopy(root, agentSection);
}

function correctPublicTypography(root: HTMLElement) {
  // Public marketing roles must never resize the operational Console.
  const isPublicPage = Boolean(root.querySelector('.antbuildz-public-header'));
  root.classList.toggle('antbuildz-public-typography', isPublicPage);
  if (!isPublicPage) return;
  root.querySelector('article h1')?.closest('article')?.classList.add('antbuildz-article-typography');
}

function applyAntbuildzAiCorrections(root: HTMLElement) {
  correctWordmarks(root);
  correctLinks(root);
  correctIndustriesMenu(root);
  correctHeaderLayout(root);
  correctResourceRoles(root);
  correctResourcesMenu(root);
  correctPublicDrawer();
  correctFooter(root);
  correctHomepage(root);
  correctPricing(root);
  correctDemoRequest(root);
  correctSalesAgentCopy(root, window.location.pathname);
  simplifyAgreementHub(root);
  syncAgreementMetadata(document, window.location.pathname);
  scopeAiHelpExperience(root, window.location.pathname);
  standardiseAgentPortraits(root);
  correctPublicTypography(root);

  const pageTitle = PAGE_TITLES[window.location.pathname];
  if (pageTitle) document.title = pageTitle;
  syncHomepageMetadata(document, window.location.pathname);
}

/**
 * Runs the original 8080 Antbuildz interface from a copied, local production
 * bundle. The source project remains untouched and this project owns its own
 * assets, so localhost:8081 does not depend on localhost:8080 at runtime.
 */
export function OriginalAntbuildzApp({ className = '' }: { className?: string }) {
  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;

    document.addEventListener('click', navigateHomeFromLink, true);
    document.addEventListener('click', navigateSalesAgentFromLink, true);
    document.addEventListener('keydown', navigateSalesAgentFromLink, true);
    document.addEventListener('click', navigateDemoFromLink, true);
    document.addEventListener('keydown', navigateDemoFromLink, true);
    window.addEventListener('popstate', navigateHomeFromHistory);

    let correctionFrame = 0;
    const scheduleCorrections = () => {
      if (correctionFrame) return;
      correctionFrame = window.requestAnimationFrame(() => {
        correctionFrame = 0;
        applyAntbuildzAiCorrections(root);
      });
    };

    if (!document.getElementById(ORIGINAL_STYLESHEET_ID)) {
      const stylesheet = document.createElement('link');
      stylesheet.id = ORIGINAL_STYLESHEET_ID;
      stylesheet.rel = 'stylesheet';
      stylesheet.href = '/assets/index-DZYh9Xyx.css';
      document.head.appendChild(stylesheet);
    }

    if (!document.getElementById(ORIGINAL_SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = ORIGINAL_SCRIPT_ID;
      script.type = 'module';
      script.src = '/assets/index-i9-KQg8N.js';
      script.addEventListener('load', scheduleCorrections);
      document.body.appendChild(script);
    }

    const observer = new MutationObserver(scheduleCorrections);
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    const headObserver = new MutationObserver(() => {
      syncHomepageMetadata(document, window.location.pathname);
      syncAiHelpMetadata(document, window.location.pathname);
      syncAgreementMetadata(document, window.location.pathname);
    });
    headObserver.observe(document.head, { childList: true, subtree: true, characterData: true, attributes: true });
    document.addEventListener('click', scheduleCorrections);
    document.addEventListener('pointerdown', dismissHeaderDropdowns);
    document.addEventListener('focusin', dismissHeaderDropdowns);
    window.addEventListener('popstate', scheduleCorrections);
    window.addEventListener('hashchange', scheduleCorrections);
    scheduleCorrections();

    return () => {
      resetHomeHeroRuntime();
      observer.disconnect();
      headObserver.disconnect();
      document.removeEventListener('click', scheduleCorrections);
      document.removeEventListener('click', navigateHomeFromLink, true);
      document.removeEventListener('click', navigateSalesAgentFromLink, true);
      document.removeEventListener('keydown', navigateSalesAgentFromLink, true);
      document.removeEventListener('click', navigateDemoFromLink, true);
      document.removeEventListener('keydown', navigateDemoFromLink, true);
      window.removeEventListener('popstate', navigateHomeFromHistory);
      document.removeEventListener('pointerdown', dismissHeaderDropdowns);
      document.removeEventListener('focusin', dismissHeaderDropdowns);
      window.removeEventListener('popstate', scheduleCorrections);
      window.removeEventListener('hashchange', scheduleCorrections);
      if (correctionFrame) window.cancelAnimationFrame(correctionFrame);
    };
  }, []);

  return <div id="root" className={`antbuildz-original-root ${className}`.trim()} />;
}
