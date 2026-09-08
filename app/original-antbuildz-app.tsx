'use client';

import { useEffect } from 'react';
import { RESOURCE_TUTORIAL_CATEGORIES, RESOURCE_LEARNING_LABELS } from '../lib/resource-tutorial-categories';
import { WEBSTORE_TITLE } from '../lib/ai-webstore-copy';
import { scopeAiHelpExperience } from '../lib/ai-help-scope';
import { simplifyAgreementHub, syncAgreementMetadata } from '../lib/agreement-hub';
import { EMMA_PORTRAIT_ALT, EMMA_PORTRAIT_SRC, standardiseAgentPortraits } from '../lib/agent-identity';
import { correctSalesAgentCopy, setSalesAgentText } from '../lib/ai-sales-agent-copy';
import { HOMEPAGE_SEO, syncHomepageMetadata } from '../lib/homepage-seo';
import { syncDefaultSocialShareImage } from '../lib/social-share';
import { applyPublicMarketingSectionSystem } from '../lib/public-marketing-sections';
import { applyPublicMarketingTypographyTrial } from '../lib/public-marketing-typography';
import { applyPublicCtaSystem } from '../lib/public-cta-system';
import { removeHeadingFullStops } from '../lib/title-punctuation';
import { addLegalAcknowledgement, syncLegalNavigation } from '../lib/legal-navigation';
import { correctIndustryFaqs } from '../lib/industry-faq-content';
import { applyWhoWeServeProcessCopy } from '../lib/who-we-serve-process-copy';
import { AI_ROLES, AI_ROLE_LINKS, AI_ROLE_REDIRECTS } from '../lib/ai-roles';
import { syncAiRoleNavigation } from '../lib/ai-role-navigation';
import { getTransferredResourcePath, syncResourceNavigation } from '../lib/resource-navigation';
import { correctResourceCopy, RESOURCE_LIBRARY_SEO } from '../lib/resource-copy';

const ORIGINAL_STYLESHEET_ID = 'antbuildz-original-styles';
const ORIGINAL_SCRIPT_ID = 'antbuildz-original-app';

const ROUTE_ALIASES: Record<string, string> = {
  '/aiagent': '/ai-sales-agent',
  '/webstore': '/ai-webstore-suite',
  '/webstore-2': '/ai-webstore-suite',
  '/app': '/ai-agent-console',
  '/develop-admin': '/ai-agent-console',
};

const SALES_AGENT_HERO_THEMES = ['slate', 'violet', 'blue', 'gold', 'red'] as const;
const SALES_AGENT_HERO_THEME_INTERVAL_MS = 2_000;
let salesAgentHeroThemeTimer = 0;
let salesAgentHeroThemeElement: HTMLElement | null = null;

function resetSalesAgentHeroThemes() {
  if (salesAgentHeroThemeTimer) window.clearInterval(salesAgentHeroThemeTimer);
  if (salesAgentHeroThemeElement) delete salesAgentHeroThemeElement.dataset.antbuildzHeroTheme;
  salesAgentHeroThemeTimer = 0;
  salesAgentHeroThemeElement = null;
}

function syncSalesAgentHeroThemes(root: HTMLElement, pathname: string) {
  const chat = pathname === '/ai-sales-agent'
    ? root.querySelector<HTMLElement>('[data-antbuildz-sales-agent] .bright-chat-theme-demo')
    : null;
  if (!chat) {
    resetSalesAgentHeroThemes();
    return;
  }
  if (chat === salesAgentHeroThemeElement) return;

  resetSalesAgentHeroThemes();
  salesAgentHeroThemeElement = chat;
  let themeIndex = 0;
  chat.dataset.antbuildzHeroTheme = SALES_AGENT_HERO_THEMES[themeIndex];

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  salesAgentHeroThemeTimer = window.setInterval(() => {
    if (!chat.isConnected || window.location.pathname !== '/ai-sales-agent') {
      resetSalesAgentHeroThemes();
      return;
    }
    themeIndex = (themeIndex + 1) % SALES_AGENT_HERO_THEMES.length;
    chat.dataset.antbuildzHeroTheme = SALES_AGENT_HERO_THEMES[themeIndex];
  }, SALES_AGENT_HERO_THEME_INTERVAL_MS);
}

const WHO_WE_SERVE_PATHS = new Set([
  '/rental-businesses',
  '/manufacturers-brands',
  '/dealers-distributors',
  '/industrial-mro',
  '/hardware-trade-supplies',
  '/building-engineering',
  '/parts-aftermarket',
  '/buggies-commercial-vehicles',
]);

const PAGE_TITLES: Record<string, string> = {
  '/': HOMEPAGE_SEO.title,
  '/ai-webstore-suite': `${WEBSTORE_TITLE} | Antbuildz AI`,
  '/ai-sales-agent': 'AI Agent for Complex Product Businesses | Antbuildz AI',
  '/ai-agent-console': 'AI Agent Console | Knowledge, Workflows & Conversations | Antbuildz AI',
  '/pricing': 'Antbuildz AI Pricing | Antbuildz AI',
  '/resources': `${RESOURCE_LIBRARY_SEO.title} | Antbuildz AI`,
  '/faqs': 'AI FAQs | Antbuildz AI',
  '/help/ai': 'AI Help Centre | Antbuildz AI',
  '/about': 'About Antbuildz AI | Antbuildz AI',
  '/book-a-demo': 'Book an Antbuildz AI Agent Demo | Antbuildz AI',
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

function correctLegalAcceptance(root: HTMLElement) {
  if (window.location.pathname === '/subscribe') {
    const main = root.querySelector<HTMLElement>('main');
    if (main) {
      addLegalAcknowledgement(main, true);
      if (!main.querySelector('.antbuildz-checkout-preview-notice')) {
        const notice = document.createElement('aside');
        notice.className = 'antbuildz-checkout-preview-notice';
        notice.textContent = 'Subscription preview only. This prototype uses test details and does not collect payment or activate a paid subscription. The live offer is a 14-day free trial with a credit card required. Live checkout must confirm the selected plan, price, renewal terms and payment authorisation before activation. Do not enter real card details here.';
        main.prepend(notice);
      }
      for (const button of main.querySelectorAll('button')) {
        if (button.textContent?.trim() === 'Start Free Trial') setPricingText(button, 'Preview setup');
      }
    }
  }
  const signUp = root.querySelector<HTMLElement>('.marketing-auth--sign-up');
  if (!signUp) return;
  addLegalAcknowledgement(signUp);
  const terms = signUp.querySelector<HTMLAnchorElement>('a[href="/legal/terms"], a[href="/agreements/terms"]');
  const privacy = signUp.querySelector<HTMLAnchorElement>('a[href="/legal/privacy"], a[href="/agreements/privacy"]');
  if (terms) {
    terms.href = '/agreements/terms';
    setPricingText(terms, 'Terms of Service');
  }
  if (privacy) {
    privacy.href = '/agreements/privacy';
    setPricingText(privacy, 'Privacy Policy');
  }
}

const RESOURCE_TOPICS = [
  { label: 'AI Agent Roles', id: 'ai-agent-roles', description: 'Explore specialist roles across the customer journey.' },
  { label: 'Understand Antbuildz AI Agent', id: 'understand-ai-agent', description: 'Learn the essentials of industrial AI sales.' },
  { label: 'Antbuildz AI Agent + Webstore', displayLabel: 'How Webstore Supports the AI Agent', id: 'ai-agent-webstore', description: 'See how structured product pages and inventory context support your Agent.' },
  { label: 'Why Antbuildz AI Agent Is Different', id: 'why-antbuildz-ai', description: 'Explore the approach to industrial buying workflows.' },
  { label: 'Getting Ready for Antbuildz AI Agent', id: 'getting-ready', description: 'Prepare your product information and business knowledge.' },
  { label: 'AI Console Features — Your Command Centre', id: 'ai-console-features', description: 'Get to know the tools for managing your Agent.' },
] as const;

const RESOURCE_MENU_GROUPS: {label:string;topics: {label:string;displayLabel?:string;id:string;description:string;href?:string}[]}[] = [
  { label: 'Understand the products', topics: RESOURCE_TOPICS.slice(1,4).map(topic=>({...topic,displayLabel:RESOURCE_LEARNING_LABELS[topic.label]})) },
  { label: 'Get started', topics: [
    {...RESOURCE_TOPICS[4],displayLabel:RESOURCE_LEARNING_LABELS[RESOURCE_TOPICS[4].label]},
    ...RESOURCE_TUTORIAL_CATEGORIES.slice(0,2),
  ] },
  { label: 'Use & improve', topics: [
    RESOURCE_TUTORIAL_CATEGORIES[2],
    {...RESOURCE_TOPICS[5],displayLabel:RESOURCE_LEARNING_LABELS[RESOURCE_TOPICS[5].label]},
    RESOURCE_TUTORIAL_CATEGORIES[3],
  ] },
] as const;

const DRAWER_LINKS = [
  { label: 'AI Agent', href: '/ai-sales-agent' },
  { label: 'AI Webstore Suite', href: '/ai-webstore-suite' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Industries', href: '/who-we-serve' },
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

function createHeaderMenuIntro(
  title: string,
  description: string,
  action?: { label: string; href: string },
) {
  const intro = document.createElement('div');
  intro.className = 'antbuildz-industries-menu__intro';
  const copy = document.createElement('div');
  copy.className = 'antbuildz-industries-menu__intro-copy';
  const heading = document.createElement('strong');
  heading.textContent = title;
  const text = document.createElement('p');
  text.textContent = description;
  copy.append(heading, text);
  const link = action ? document.createElement('a') : null;
  if (link && action) {
    link.className = 'antbuildz-industries-menu__overview-action';
    link.href = action.href;
    link.textContent = action.label;
    intro.append(copy, link);
  } else {
    intro.appendChild(copy);
  }
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
    if (window.location.pathname === '/resources' && link.pathname === '/resources') {
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
      'Resources',
      'Understand the product. Follow the steps.',
      { label: 'All resources', href: '/resources' },
    );
    if (overview) {
      overview.classList.add('antbuildz-resources-menu__link');
      bindResourceNavigation(overview);
    }
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
          { ...topic, label: topic.displayLabel ?? topic.label, href: topic.href ?? `/resources#${topic.id}` },
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
    .find((item) => {
      const label = item.querySelector('span:nth-child(2)')?.textContent?.trim();
      const original = item.dataset.originalTopicLabel;
      return label === topic.label || label === topic.displayLabel || Boolean(original && (original === topic.label || original === topic.displayLabel));
    });
  if (button) {
    root.dataset.antbuildzResourceTopic = topic.id;
    button.click();
  }
}

function dismissHeaderDropdowns(event: Event) {
  const target = event.target;
  if (!(target instanceof Node)) return;
  document.querySelectorAll<HTMLDetailsElement>('.antbuildz-industries-menu[open], .antbuildz-resources-menu[open], .antbuildz-roles-menu[open], .antbuildz-products-menu[open]')
    .forEach((menu) => { if (!menu.contains(target)) menu.open = false; });
}

type AgentPricingPlan = {
  name: string;
  badge: string | null;
  subtitle: string | null;
  bestFor: string;
  monthlyUsd: number | null;
  usage: string;
  listings: string;
  featureLabel: string;
  cta: string;
  trialPlan?: 'agent' | 'sales' | 'rental-plus';
  emailSubject: string;
  features: readonly string[];
  customSummary?: string;
};

const AGENT_PRICING_PLANS: readonly AgentPricingPlan[] = [
  {
    name: 'Agent',
    badge: null,
    subtitle: null,
    bestFor: 'Teams that want AI to answer enquiries, recommend products and support customers.',
    monthlyUsd: 49,
    usage: '50 / month',
    listings: '—',
    featureLabel: 'Includes:',
    cta: 'Start 14-Day Free Trial',
    trialPlan: 'agent',
    emailSubject: 'Antbuildz AI Agent plan enquiry',
    features: [
      'Dedicated AI Terminal',
      'Website Chat Embed',
      'Knowledge Base',
      'Product Recommendations',
      'Lead Capture & Monitoring',
      'Multilingual AI',
      'Agent Setup & Rules',
      'Google Sheets + Excel',
    ],
  },
  {
    name: 'Sales',
    badge: 'Most Popular',
    subtitle: null,
    bestFor: 'Teams that want an AI-powered store for product discovery, enquiries and sales.',
    monthlyUsd: 149,
    usage: '75 / month',
    listings: '100 (Sales)',
    featureLabel: 'Everything in Agent, plus:',
    cta: 'Start 14-Day Free Trial',
    trialPlan: 'sales',
    emailSubject: 'Antbuildz AI Sales plan enquiry',
    features: [
      'Sales Webstore',
      '100 Sales Listings',
      'Store Builder + Custom Domain',
      'SEO + AI Search Pages',
      'Multilingual Store',
      'AI Product Links',
      'Inventory Management + Sync',
    ],
  },
  {
    name: 'Rental+',
    badge: 'Best Value',
    subtitle: null,
    bestFor: 'Teams that need sales, rental, availability and bookings in one AI-powered store.',
    monthlyUsd: 299,
    usage: '100 / month',
    listings: '300 (Sales + Rental)',
    featureLabel: 'Everything in Agent, plus:',
    cta: 'Start 14-Day Free Trial',
    trialPlan: 'rental-plus',
    emailSubject: 'Antbuildz AI Rental+ plan enquiry',
    features: [
      'Sales + Rental Webstore',
      '300 Sales + Rental Listings',
      'Store Builder + Custom Domain',
      'SEO + AI Search Pages',
      'Multilingual Store',
      'AI Product Links',
      'Sales + Rental Inventory',
      'Rental Booking System',
    ],
  },
  {
    name: 'Custom',
    badge: null,
    subtitle: null,
    bestFor: 'Businesses whose requirements go beyond the standard plans.',
    monthlyUsd: null,
    usage: '',
    listings: '',
    featureLabel: '',
    cta: 'Talk to Sales',
    emailSubject: 'Custom Antbuildz AI plan enquiry',
    features: [],
    customSummary: 'For higher conversation or listing volumes, specialised deployments, multiple Webstores, or ERP, CRM and third-party integrations, ask us about a custom plan.',
  },
] as const;

const pricingCtaBindings = new WeakSet<HTMLButtonElement>();
const pricingBillingBindings = new WeakSet<HTMLButtonElement>();
const ANNUAL_PRICING_DISCOUNT = 0.2;

// Approved pricing-page copy only. This does not implement metering or payments.
const PURCHASED_CREDIT_PACKS = [
  { sessions: 25, usd: 25 },
  { sessions: 50, usd: 42 },
  { sessions: 100, usd: 79 },
  { sessions: 500, usd: 349 },
] as const;

const PRICING_USAGE_COPY = {
  session: 'One AI conversation covers one buyer enquiry with up to five message exchanges. Test prompts and unrelated interactions do not count.',
  monthly: 'Monthly allowances reset and never roll over—even on annual plans.',
  purchased: 'Purchased AI Conversation Credits do not expire. Choose a credit pack or expressly enable Auto Top-Up. The default threshold is five total available conversations: monthly remaining plus purchased credits. Enabled Auto Top-Up purchases your selected pack using your authorised payment method whenever that threshold is reached, and may repeat as usage continues. Change or disable it in your account, or contact help@antbuildz.ai.',
  order: 'Usage order: included monthly AI conversations first, then purchased AI Conversation Credits.',
  cancellation: 'Purchased AI Conversation Credits do not expire, but using them requires access to the applicable Services. They have no cash value and are generally non-refundable, except for verified billing errors or where required by law.',
  principle: 'Plan upgrades unlock more business capability. AI Conversation Credits add enquiry capacity without forcing a plan upgrade.',
} as const;

const PRICING_FAQS = [
  {
    question: 'What does the AI Agent do?',
    answer: 'It uses approved product and business knowledge to guide sales, rental, product and support conversations. Sales Specialist is its AI Sales Agent role. Agent works with your existing channels; Sales and Rental+ add AI Webstore Suite capabilities around the same AI Agent.',
  },
  {
    question: 'Can I train the AI with my catalogue?',
    answer: 'Yes. Use your product catalogue, manuals, FAQs and business knowledge to guide the AI Agent. Sales adds AI Webstore Suite sales capabilities with catalogue and inventory management; Rental+ includes sales plus rental inventory, pricing, availability and booking workflows.',
  },
  {
    question: 'What happens if I use all my included AI conversations?',
    answer: `Agent includes 50, Sales 75 and Rental+ 100 AI conversations per month. ${PRICING_USAGE_COPY.session} ${PRICING_USAGE_COPY.monthly} You can purchase AI Conversation Credits or enable Auto Top-Up when you need more capacity. ${PRICING_USAGE_COPY.order}`,
  },
  {
    question: 'How do AI Conversation Credits and Auto Top-Up work?',
    answer: `${PRICING_USAGE_COPY.purchased} They are used only after your included monthly AI conversations are exhausted. ${PRICING_USAGE_COPY.cancellation}`,
  },
  {
    question: 'Which plan is right for my business?',
    answer: `Agent adds the AI Agent to your existing channels. Sales includes Agent plus AI Webstore Suite sales capabilities. Rental+ includes Sales plus rental and booking capabilities. Custom extends beyond the standard plans. ${PRICING_USAGE_COPY.principle}`,
  },
  // Preserve the existing additional-agent price and entitlement until approved.
  {
    question: 'Can I add more AI Agents later?',
    answer: 'Yes. Each additional agent costs S$49/month and gets its own knowledge base — useful for different product lines or brands.',
  },
] as const;

type PricingComparisonRow = {
  feature: string;
  included: readonly [boolean, boolean, boolean];
};

const PRICING_COMPARISON_ROWS: readonly PricingComparisonRow[] = [
  { feature: 'AI Agent', included: [true, true, true] },
  { feature: 'Knowledge Base', included: [true, true, true] },
  { feature: 'Product Recommendations', included: [true, true, true] },
  { feature: 'Agent Instructions', included: [true, true, true] },
  { feature: 'Lead Capture', included: [true, true, true] },
  { feature: 'Conversation Monitoring', included: [true, true, true] },
  { feature: 'Website Embed', included: [true, true, true] },
  { feature: 'Multilingual AI Conversations', included: [true, true, true] },
  { feature: 'Sales Webstore', included: [false, true, true] },
  { feature: 'Store Builder', included: [false, true, true] },
  { feature: 'Sales Listings', included: [false, true, true] },
  { feature: 'Free Custom Domain Setup', included: [false, true, true] },
  { feature: 'Dedicated Product Pages', included: [false, true, true] },
  { feature: 'Google & AI Search-Ready', included: [false, true, true] },
  { feature: 'Multilingual Webstore', included: [false, true, true] },
  { feature: 'Direct Product Links', included: [false, true, true] },
  { feature: 'Sales Inventory', included: [false, true, true] },
  { feature: 'Inventory Sync', included: [false, true, true] },
  { feature: 'Catalogue Import', included: [false, true, true] },
  { feature: 'Lead Intelligence', included: [false, true, true] },
  { feature: 'Sales + Rental Webstore', included: [false, false, true] },
  { feature: 'Sales + Rental Listings', included: [false, false, true] },
  { feature: 'Rental Bookings', included: [false, false, true] },
  { feature: 'Availability & Pricing', included: [false, false, true] },
  { feature: 'Sales + Rental Inventory', included: [false, false, true] },
  { feature: 'Multiple Rental Units', included: [false, false, true] },
  { feature: 'Advanced Inventory Sync', included: [false, false, true] },
  { feature: 'Third-Party Sync', included: [false, false, true] },
  { feature: 'Rental Catalogue Import', included: [false, false, true] },
  { feature: 'Workflow Automation', included: [false, false, true] },
] as const;

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
let publicHeroHeaderCleanup: (() => void) | null = null;
let publicHeroHeaderElement: HTMLElement | null = null;
let publicHeroSurfaceElement: HTMLElement | null = null;

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
    'AI for complex product businesses',
    'Explore equipment, rental, instruments, electronics and technical supply.',
    { label: 'View All Industries', href: '/who-we-serve' },
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
    const pricingLink = desktopLinks.querySelector('.antbuildz-roles-menu') ?? Array.from(desktopLinks.children).find(
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
  const productLinks = root.querySelector<HTMLElement>('.bright-nav-product-links');
  const utilities = root.querySelector<HTMLElement>('.bright-nav-utilities');

  if (productLinks) {
    productLinks.querySelectorAll('.antbuildz-header-webstore-two').forEach(link => link.remove());
  }

  if (utilities && !utilities.querySelector('.antbuildz-header-demo')) {
    const demoLink = document.createElement('a');
    demoLink.className = 'antbuildz-header-demo';
    demoLink.href = DEMO_REQUEST_PATH;
    demoLink.textContent = 'Book a Demo';
    utilities.insertBefore(demoLink, utilities.querySelector('.antbuildz-menu-trigger'));
  }

}

function correctAiRolesMenu(root: HTMLElement) {
  const desktop = root.querySelector<HTMLElement>('.bright-nav-product-links');
  if (!desktop || desktop.querySelector('.antbuildz-roles-menu')) return;
  const menu = document.createElement('details');
  menu.className = 'antbuildz-roles-menu';
  const trigger = document.createElement('summary');
  trigger.className = 'antbuildz-industries-menu__trigger';
  trigger.textContent = 'AI Roles';
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-controls', 'antbuildz-roles-dropdown');
  const panel = document.createElement('nav');
  panel.id = 'antbuildz-roles-dropdown';
  panel.className = 'antbuildz-industries-menu__panel';
  panel.setAttribute('aria-label', 'AI Roles');
  const { intro } = createHeaderMenuIntro('One AI Agent. Multiple roles.',
    'Built for businesses with products to sell, explain and support.', { label: 'All AI Roles', href: '/ai-roles' });
  const links = document.createElement('div');
  links.className = 'antbuildz-industries-menu__links antbuildz-resources-menu__links';
  const roleColumns = [
    AI_ROLES.slice(0, 2),
    AI_ROLES.slice(2, 4),
    AI_ROLES.slice(4),
  ];
  roleColumns.forEach((roles) => {
    const group = document.createElement('div');
    group.className = 'antbuildz-industries-menu__group antbuildz-roles-menu__column';
    const groupLinks = document.createElement('div');
    groupLinks.className = 'antbuildz-industries-menu__group-links';
    roles.forEach(role => groupLinks.appendChild(createIndustryLink(
      { label: role.name, href: `/ai-roles/${role.slug}`, description: role.summary },
      'antbuildz-industries-menu__link', true,
    )));
    group.appendChild(groupLinks);
    links.appendChild(group);
  });
  panel.append(intro, links);
  menu.append(trigger, panel);
  bindHeaderDropdown(menu, trigger);
  const pricing = Array.from(desktop.children).find(child => child.textContent?.trim() === 'Pricing');
  if (pricing) pricing.insertAdjacentElement('afterend', menu);
  else desktop.appendChild(menu);
}

/** Group product destinations without removing the copied router's owned links. */
function correctProductsMenu(root: HTMLElement) {
  const desktop = root.querySelector<HTMLElement>('.bright-nav-product-links');
  if (!desktop) return;
  let menu = desktop.querySelector<HTMLDetailsElement>('.antbuildz-products-menu');
  if (!menu) {
    menu = document.createElement('details');
    menu.className = 'antbuildz-products-menu';
    const trigger = document.createElement('summary');
    trigger.className = 'antbuildz-industries-menu__trigger';
    trigger.textContent = 'Products';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', 'antbuildz-products-dropdown');
    const panel = document.createElement('nav');
    panel.id = 'antbuildz-products-dropdown';
    panel.className = 'antbuildz-industries-menu__panel';
    panel.setAttribute('aria-label', 'Products');
    const { intro } = createHeaderMenuIntro('Your Agent, Webstore and Console',
      'Answer product questions, connect your catalogue and manage your AI in one platform.');
    const links = document.createElement('div');
    links.className = 'antbuildz-industries-menu__links antbuildz-resources-menu__links';
    const products = [
      { group: 'Engage customers', label: 'AI Agent', href: '/ai-sales-agent', description: 'Deploy a 24/7 AI Agent to answer enquiries across your online channels and supported languages.' },
      { group: 'Guide product discovery', label: 'AI Webstore Suite', href: '/ai-webstore-suite', description: 'Connect your sales and rental catalogue and inventory for more accurate product recommendations.' },
      { group: 'Manage your Agent', label: 'AI Agent Console', href: '/ai-agent-console', description: 'Train and deploy an on-brand AI Agent with your company knowledge, inventory and selected role.' },
    ];
    products.forEach((product, index) => {
      const group = document.createElement('section');
      group.className = 'antbuildz-industries-menu__group';
      const title = document.createElement('p');
      title.id = `antbuildz-product-group-${index + 1}`;
      title.textContent = product.group;
      group.setAttribute('aria-labelledby', title.id);
      const groupLinks = document.createElement('div');
      groupLinks.className = 'antbuildz-industries-menu__group-links';
      const link = createIndustryLink(product, 'antbuildz-industries-menu__link', true);
      bindHeaderNavigation(link);
      groupLinks.appendChild(link);
      group.append(title, groupLinks);
      links.appendChild(group);
    });
    panel.append(intro, links);
    menu.append(trigger, panel);
    bindHeaderDropdown(menu, trigger);
    desktop.prepend(menu);
  }
  Array.from(desktop.children).forEach(child => {
    if (child instanceof HTMLAnchorElement && ['/ai-sales-agent', '/ai-webstore-suite', '/ai-agent-console'].includes(child.getAttribute('href') ?? '')) child.hidden = true;
  });
  menu.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
    if (link.pathname === window.location.pathname) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  // Keep visual and keyboard order identical. Move only when needed so the
  // transferred shell's mutation observer settles after the first correction.
  const ordered = [menu, desktop.querySelector('.antbuildz-roles-menu'), desktop.querySelector('.antbuildz-industries-menu'), desktop.querySelector('.antbuildz-resources-menu'), Array.from(desktop.children).find(child => child instanceof HTMLAnchorElement && child.getAttribute('href') === '/pricing')];
  let previous: Element | undefined;
  ordered.forEach(item => {
    if (!item) return;
    if (!previous) { if (desktop.firstElementChild !== item) desktop.prepend(item); }
    else if (previous.nextElementSibling !== item) previous.insertAdjacentElement('afterend', item);
    previous = item;
  });
}

/** Use the same menu markup, content and behaviour on source-rendered public pages. */
export function syncPublicHeaderDropdowns(header: HTMLElement) {
  correctIndustriesMenu(header);
  correctAiRolesMenu(header);
  correctResourcesMenu(header);
  correctProductsMenu(header);
  header.querySelectorAll<HTMLElement>('[data-menu-fallback]').forEach(link => { link.hidden = true; });
}

function createWordmark() {
  const wordmark = document.createElement('span');
  wordmark.className = 'antbuildz-ai-wordmark';
  wordmark.setAttribute('aria-hidden', 'true');

  const brand = document.createElement('span');
  brand.className = 'antbuildz-ai-wordmark__brand';
  const brandImage = document.createElement('img');
  brandImage.className = 'antbuildz-ai-wordmark__brand-image';
  brandImage.src = '/images/antbuildz-wordmark.png';
  brandImage.alt = '';
  brandImage.width = 1471;
  brandImage.height = 225;
  brandImage.decoding = 'async';
  brand.appendChild(brandImage);

  const ai = document.createElement('span');
  ai.className = 'antbuildz-ai-wordmark__ai';
  ai.textContent = '.ai';
  wordmark.appendChild(brand);
  wordmark.appendChild(ai);
  return wordmark;
}

function correctRouteLoader(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('[role="status"][aria-live="polite"]').forEach((loader) => {
    const isTransferredLoader = loader.textContent?.trim() === 'Loading workspace…';
    const isAntbuildzLoader = loader.dataset.antbuildzRouteLoader === 'true';
    if (!isTransferredLoader && !isAntbuildzLoader) return;
    if (isAntbuildzLoader && loader.querySelector('.antbuildz-route-loader__stage')) return;

    loader.dataset.antbuildzRouteLoader = 'true';
    loader.className = 'antbuildz-route-loader';
    loader.setAttribute('aria-label', 'Loading Antbuildz AI');

    const visual = document.createElement('div');
    visual.className = 'antbuildz-route-loader__visual';
    visual.setAttribute('aria-hidden', 'true');

    const stage = document.createElement('div');
    stage.className = 'antbuildz-route-loader__stage';

    const baseWordmark = createWordmark();
    baseWordmark.classList.add('antbuildz-route-loader__wordmark', 'is-base');

    const progress = document.createElement('div');
    progress.className = 'antbuildz-route-loader__progress';
    const progressWordmark = createWordmark();
    progressWordmark.classList.add('antbuildz-route-loader__wordmark', 'is-progress');
    progress.appendChild(progressWordmark);

    stage.append(baseWordmark, progress);
    visual.appendChild(stage);

    const status = document.createElement('span');
    status.className = 'antbuildz-route-loader__status';
    status.textContent = 'Loading Antbuildz AI';
    loader.replaceChildren(visual, status);
  });
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

function navigateWebstoreFromLink(event: MouseEvent | KeyboardEvent) {
  if (event.defaultPrevented || event.metaKey || event.ctrlKey
    || event.shiftKey || event.altKey || !(event.target instanceof Element)) return;
  if ('key' in event ? event.key !== 'Enter' || event.repeat : event.button !== 0) return;
  const link = event.target.closest<HTMLAnchorElement>('#root a[href]');
  if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
  const destination = new URL(link.href, window.location.href);
  if (destination.origin !== window.location.origin
    || !['/ai-webstore-suite', '/webstore', '/webstore-2'].includes(destination.pathname)) return;

  // The copied router still renders its superseded mint Webstore page on the
  // first client-side click. Enter the canonical product document directly so
  // the selected AI Webstore Suite experience appears without a refresh.
  destination.pathname = '/ai-webstore-suite';
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
      && ['AI Sales Agent', 'AI Webstore Suite', 'Pricing'].includes(label ?? '')) {
      if (link.getAttribute('href') === window.location.pathname) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    }
    if (link.parentElement?.matches('.bright-nav-product-links')
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
  if (window.location.hash === '#ai-agent-roles') {
    window.location.replace('/ai-roles');
    return;
  }
  root.querySelectorAll<HTMLElement>('.next-step-panel--resources').forEach((panel) => {
    panel.hidden = true;
    panel.inert = true;
    panel.setAttribute('aria-hidden', 'true');
  });
  const topics = root.querySelector<HTMLElement>('.bright-resource-topic-list');
  const trigger = Array.from(topics?.querySelectorAll<HTMLButtonElement>('button') ?? []).find(
    (button) => button.querySelector('span:nth-child(2)')?.textContent?.trim() === 'AI Agent Roles',
  );
  if (!topics) return;

  // Keep React-owned nodes mounted but remove the role collection from this
  // educational library. AI Roles has its own dedicated page and navigation.
  if (trigger && !trigger.hidden) trigger.hidden = true;
  root.querySelectorAll<HTMLElement>('.bright-resource-collection').forEach(collection => {
    if (collection.querySelector('h3')?.textContent?.trim() === 'AI Agent Roles' && !collection.hidden) collection.hidden = true;
  });
  const total = topics.querySelector('button strong');
  if (total?.textContent === '49') total.textContent = '44';
}

function bindFooterAiHelpNavigation(footer: HTMLElement) {
  if (footer.dataset.antbuildzAiHelpNavigation === 'true') return;
  footer.dataset.antbuildzAiHelpNavigation = 'true';
  footer.addEventListener('click', (event) => {
    if (
      event.defaultPrevented
      || event.button !== 0
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
      || !(event.target instanceof Element)
    ) return;
    const link = event.target.closest<HTMLAnchorElement>('a[href="/help/ai"]');
    if (!link || !footer.contains(link)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    // The transferred footer still carries its former React Router destination.
    // Use a full navigation so both AI FAQ tabs render immediately.
    window.location.assign(new URL('/help/ai', window.location.origin).href);
  }, true);
}

function correctFooter(root: HTMLElement) {
  const footer = root.querySelector<HTMLElement>('.abz-public-footer');
  if (!footer) return;

  footer.setAttribute('aria-label', 'Antbuildz AI footer');
  bindFooterAiHelpNavigation(footer);
  footer.querySelector<HTMLElement>('nav[aria-label="Marketplace"]')?.setAttribute('hidden', '');

  const languageUtilities = root.querySelector<HTMLElement>('.antbuildz-header-utilities');
  const footerBottom = footer.querySelector<HTMLElement>('.abz-public-footer__bottom-inner');
  if (languageUtilities && footerBottom && languageUtilities.parentElement !== footerBottom) {
    languageUtilities.classList.add('antbuildz-footer-language');
    footerBottom.appendChild(languageUtilities);
  }

  const aiProducts = footer.querySelector<HTMLElement>('nav[aria-label="AI Products"]');
  const salesAgentItem = aiProducts?.querySelector<HTMLAnchorElement>('a[href="/ai-sales-agent"]')?.closest('li');
  const webstoreItem = aiProducts?.querySelector<HTMLAnchorElement>('a[href="/ai-webstore-suite"]')?.closest('li');
  if (salesAgentItem && webstoreItem && salesAgentItem !== webstoreItem.previousElementSibling) {
    webstoreItem.parentElement?.insertBefore(salesAgentItem, webstoreItem);
  }

  const brandCopy = footer.querySelector<HTMLElement>('.abz-public-footer__brand p');
  setPricingText(brandCopy, 'Product Intelligence for Complex Product Businesses.');

  const footerBrand = footer.querySelector<HTMLElement>('.abz-public-footer__brand');
  if (footerBrand && !footerBrand.querySelector('[data-antbuildz-footer-email="true"]')) {
    const emailAction = footer.ownerDocument.createElement('a');
    emailAction.className = 'antbuildz-footer-email';
    emailAction.dataset.antbuildzFooterEmail = 'true';
    emailAction.href = 'mailto:help@antbuildz.ai?subject=Antbuildz%20AI%20enquiry';
    emailAction.setAttribute('aria-label', 'Email Antbuildz AI');
    emailAction.textContent = 'Email Us';
    footerBrand.appendChild(emailAction);
  }

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
    setPricingText(companyPolicies, 'Terms & Policy');
    companyPolicies.setAttribute('href', '/agreements');
  }

  const companyHelp = footer.querySelector<HTMLAnchorElement>(
    'nav[aria-label="Company"] a[href="/help"], nav[aria-label="Company"] a[href="/help/ai"], nav[aria-label="Company"] a[href="/faqs"]',
  );
  if (companyHelp) {
    setPricingText(companyHelp, 'AI Help Centre');
    companyHelp.setAttribute('href', '/help/ai');
  }

  const companyList = footer.querySelector<HTMLElement>('nav[aria-label="Company"] ul');
  if (companyList && !companyList.querySelector('[data-antbuildz-marketplace-link="true"]')) {
    const marketplaceItem = footer.ownerDocument.createElement('li');
    const marketplaceLink = footer.ownerDocument.createElement('a');
    marketplaceLink.dataset.antbuildzMarketplaceLink = 'true';
    marketplaceLink.href = 'https://antbuildz.com';
    marketplaceLink.textContent = 'Marketplace';
    marketplaceItem.appendChild(marketplaceLink);
    companyList.appendChild(marketplaceItem);
  }

}

const ABOUT_AI_DESTINATION = 'https://antbuildz.ai';
const ABOUT_MARKETPLACE_DESTINATION = 'https://antbuildz.com';

function bindAboutDestination(link: HTMLAnchorElement, destination: string) {
  link.setAttribute('href', destination);
  link.removeAttribute('target');
  link.removeAttribute('rel');
  link.dataset.antbuildzAboutDestination = destination;
  if (link.dataset.antbuildzAboutDestinationBound === 'true') return;
  link.dataset.antbuildzAboutDestinationBound = 'true';
  link.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey
      || event.shiftKey || event.altKey) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.assign(link.dataset.antbuildzAboutDestination ?? destination);
  }, true);
}

function correctAboutEcosystem(root: HTMLElement) {
  if (window.location.pathname !== '/about') return;

  const buildSection = root.querySelector<HTMLElement>('.about-build-section');
  if (buildSection) {
    const headingCopy = buildSection.querySelector<HTMLElement>('.about-section-heading > p');
    setPricingText(
      headingCopy,
      'Antbuildz brings Agentic AI, Webstore Suite, and Marketplace together to power the full industrial rental and sales journey — from product discovery and customer intent to smart recommendations, qualified enquiries, and closed opportunities.',
    );
    const pillarTitles = Array.from(buildSection.querySelectorAll<HTMLElement>('.about-build-card > h3'));
    ['Agentic AI', 'Webstore Suite', 'Marketplace'].forEach((title, index) => {
      setPricingText(pillarTitles[index], title);
    });
  }

  const finalSection = root.querySelector<HTMLElement>('.about-final-section');
  if (!finalSection) return;
  const actions = finalSection.querySelector<HTMLElement>('.about-final-actions');
  actions?.setAttribute('aria-label', 'Explore Antbuildz AI Agent or Marketplace');

  Array.from(finalSection.querySelectorAll<HTMLAnchorElement>('a.about-final-action')).forEach((link) => {
    const label = link.querySelector<HTMLElement>('span')?.textContent?.trim();
    if (label === 'AI Agent' || label === 'Antbuildz AI Agent') {
      setPricingText(link.querySelector('span'), 'Antbuildz AI Agent');
      link.hidden = false;
      link.removeAttribute('inert');
      bindAboutDestination(link, ABOUT_AI_DESTINATION);
      return;
    }
    if (label === 'AI-Powered Webstore') {
      link.hidden = true;
      link.setAttribute('inert', '');
      return;
    }
    if (label === 'Marketplace') {
      link.hidden = false;
      link.removeAttribute('inert');
      bindAboutDestination(link, ABOUT_MARKETPLACE_DESTINATION);
    }
  });
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
    // distinct with the approved Asian industrial-buyer portrait.
    const isBuyer = message.kind === 'buyer';
    const avatar = document.createElement('img');
    avatar.className = `antbuildz-home-hero-conversation__avatar${isBuyer ? '' : ' antbuildz-emma-portrait'}`;
    avatar.src = isBuyer ? '/images/industrial-buyer-avatar-asian-v2.jpg' : EMMA_PORTRAIT_SRC;
    avatar.alt = isBuyer ? 'Example Asian industrial buyer' : EMMA_PORTRAIT_ALT;
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
  title.textContent = 'AI sales workflows shaped around industrial work';
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

function resetPublicHeroHeader() {
  publicHeroHeaderCleanup?.();
  publicHeroHeaderCleanup = null;
  publicHeroHeaderElement = null;
  publicHeroSurfaceElement = null;
}

function correctPublicHeroHeader(root: HTMLElement) {
  const header = root.querySelector<HTMLElement>('.antbuildz-public-header');
  const path = window.location.pathname;
  // Home and the canonical AI Webstore Suite own darker, fixed overlay-header
  // treatments. Other public product routes reuse the shared transparent-top
  // and scrolled-glass behaviour. The Console has no public header.
  const usesExistingOverlay = path === '/' || path === '/ai-webstore-suite';
  if (!header || usesExistingOverlay) {
    if (publicHeroHeaderElement || publicHeroSurfaceElement) resetPublicHeroHeader();
    return;
  }

  const page = header.nextElementSibling as HTMLElement | null;
  const directHero = page?.querySelector<HTMLElement>(
    ':scope > .bright-hero, :scope > section[class~="bg-hero"]',
  );
  const surface = directHero ?? page;
  if (!surface) {
    resetPublicHeroHeader();
    return;
  }

  if (header === publicHeroHeaderElement && surface === publicHeroSurfaceElement) return;
  resetPublicHeroHeader();
  publicHeroHeaderElement = header;
  publicHeroSurfaceElement = surface;
  header.classList.add('is-public-hero-overlay');
  surface.classList.add('antbuildz-public-hero-surface');

  const spacer = document.createElement('div');
  spacer.className = 'antbuildz-public-hero-spacer';
  spacer.setAttribute('aria-hidden', 'true');
  surface.prepend(spacer);

  const syncHeaderHeight = () => {
    root.style.setProperty('--public-header-height', `${header.getBoundingClientRect().height}px`);
  };
  const syncHeaderScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  const headerSizeObserver = new ResizeObserver(syncHeaderHeight);
  headerSizeObserver.observe(header);
  window.addEventListener('scroll', syncHeaderScroll, { passive: true });
  syncHeaderHeight();
  syncHeaderScroll();

  publicHeroHeaderCleanup = () => {
    window.removeEventListener('scroll', syncHeaderScroll);
    headerSizeObserver.disconnect();
    header.classList.remove('is-public-hero-overlay', 'is-scrolled');
    surface.classList.remove('antbuildz-public-hero-surface');
    spacer.remove();
    root.style.removeProperty('--public-header-height');
  };
}

function setupHomeHeroMedia(hero: HTMLElement) {
  const heroImage = hero.querySelector<HTMLImageElement>('.ai-marketplace-hero-image');
  if (heroImage) {
    heroImage.src = '/marketplace/how-it-works/assets/hero-option-2-mountain-logistics.png';
    heroImage.alt = 'Heavy-haul truck transporting an excavator along a mountain road above an industrial valley at blue hour';
    heroImage.width = 1672;
    heroImage.height = 941;
    heroImage.loading = 'eager';
    heroImage.decoding = 'async';
    heroImage.fetchPriority = 'high';
  }
  hero.querySelector<HTMLVideoElement>('.antbuildz-home-hero-video')?.remove();
}

function setupHomeHeroRuntime(root: HTMLElement) {
  const hero = root.querySelector<HTMLElement>('.ai-marketplace-hero');
  const conversation = root.querySelector<HTMLElement>('.antbuildz-home-hero-conversation.is-centre');
  if (!hero || !conversation || homeHeroRuntimeElement === conversation) return;

  resetHomeHeroRuntime();
  homeHeroRuntimeElement = conversation;
  const cleanups = Array.from(hero.querySelectorAll<HTMLElement>('.antbuildz-home-hero-conversation'))
    .map((chat, layerIndex) => setupHomeHeroConversationRuntime(hero, chat, layerIndex));
  homeHeroRuntimeCleanup = () => {
    cleanups.forEach((cleanup) => cleanup());
    hero.style.removeProperty('--antbuildz-home-chat-top');
    hero.style.removeProperty('--antbuildz-home-chat-height');
  };
}

function setupHomeHeroConversationRuntime(
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
  let conversationActive = true;
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
      message.classList.toggle('is-fade-top', false);
      message.classList.toggle('is-fade-near-top', false);
      message.classList.toggle('is-fade-near-bottom', false);
      message.classList.toggle('is-fade-bottom', false);
    });
    const visibleMessages = messageNodes.slice(0, currentStep + 1);
    if (visibleMessages.length > 1) {
      visibleMessages[0]?.classList.toggle('is-fade-top', true);
      visibleMessages.at(-1)?.classList.toggle('is-fade-bottom', true);
    }
    if (visibleMessages.length > 3) {
      visibleMessages[1]?.classList.toggle('is-fade-near-top', true);
      visibleMessages.at(-2)?.classList.toggle('is-fade-near-bottom', true);
    }
    typing?.classList.toggle(
      'is-visible',
      conversationActive && !reducedMotion.matches && currentStep < messageNodes.length - 1,
    );
    scheduleTranscriptPosition(resetToTop);
  };

  const updateLayout = () => {
    if (conversation.dataset.layer === 'centre') {
      const heroBounds = hero.getBoundingClientRect();
      const chatHeight = heroBounds.width <= 767
        ? Math.min(340, Math.max(280, heroBounds.height * .38))
        : Math.min(370, Math.max(300, heroBounds.height * .46));
      hero.style.setProperty('--antbuildz-home-chat-height', `${chatHeight}px`);
      const copyBounds = hero.querySelector('.ai-marketplace-hero-copy')?.getBoundingClientRect();
      if (heroBounds.width <= 767 && copyBounds) {
        hero.style.setProperty('--antbuildz-home-chat-top', `${copyBounds.bottom - heroBounds.top + 24}px`);
      } else {
        hero.style.removeProperty('--antbuildz-home-chat-top');
      }
    }
    const layer = conversation.dataset.layer;
    const layerVisible = layer === 'centre';
    conversationActive = layerVisible;
    conversation.classList.toggle('is-active', conversationActive);
    renderConversation();
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
    updateLayout();
  };

  window.addEventListener('resize', updateLayout);
  const copyResizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(updateLayout);
  const heroCopy = hero.querySelector('.ai-marketplace-hero-copy');
  if (conversation.dataset.layer === 'centre' && heroCopy) copyResizeObserver?.observe(heroCopy);
  transcript?.addEventListener('scroll', updateTranscriptFade, { passive: true });
  reducedMotion.addEventListener('change', handleMotionPreference);
  renderConversation();
  updateLayout();

  return () => {
    window.clearInterval(advanceConversation);
    window.removeEventListener('resize', updateLayout);
    copyResizeObserver?.disconnect();
    transcript?.removeEventListener('scroll', updateTranscriptFade);
    reducedMotion.removeEventListener('change', handleMotionPreference);
    if (transcriptFrame) window.cancelAnimationFrame(transcriptFrame);
    if (transcriptTimer) window.clearTimeout(transcriptTimer);
  };
}

const HOME_HERO_EYEBROW = 'AI Agent for Sales & Rental Businesses';
const HOME_HERO_TITLE_PRIMARY = 'Built for Complex';
const HOME_HERO_TITLE_BRAND = 'Product Conversations';
const HOME_HERO_DESCRIPTION = 'Understands specifications, inventory, availability and customer needs across sales, rental and support.';

function correctHomepage(root: HTMLElement) {
  const isHomepage = window.location.pathname === '/';
  root.classList.toggle('antbuildz-ai-home', isHomepage);
  document.body.classList.toggle('antbuildz-ai-home-active', isHomepage);
  correctHomeInventoryAgentCard(root, isHomepage);
  const existingIndustries = root.querySelector<HTMLElement>('.antbuildz-home-industries');
  if (!isHomepage) {
    resetHomeHeroRuntime();
    root.querySelector<HTMLVideoElement>('.antbuildz-home-hero-video')?.remove();
    root.querySelectorAll<HTMLElement>('.antbuildz-home-hero-conversation').forEach((chat) => chat.remove());
    existingIndustries?.remove();
    return;
  }

  const heroCopy = root.querySelector<HTMLElement>('.ai-marketplace-hero-copy');
  const titleLines = heroCopy?.querySelectorAll<HTMLElement>('h1 .ai-hero-line');
  if (titleLines?.[0] && titleLines[0].textContent !== HOME_HERO_TITLE_PRIMARY) titleLines[0].textContent = HOME_HERO_TITLE_PRIMARY;
  if (titleLines?.[1] && titleLines[1].textContent !== HOME_HERO_TITLE_BRAND) titleLines[1].textContent = HOME_HERO_TITLE_BRAND;
  if (titleLines?.[0] && titleLines[1] && titleLines[1].previousSibling === titleLines[0]) {
    titleLines[0].after(document.createTextNode(' '));
  }

  let eyebrow = heroCopy?.querySelector<HTMLElement>('.antbuildz-ai-home-eyebrow');
  if (heroCopy && !eyebrow) {
    const eyebrow = document.createElement('p');
    eyebrow.className = 'antbuildz-ai-home-eyebrow';
    heroCopy.prepend(eyebrow);
  }
  eyebrow = heroCopy?.querySelector<HTMLElement>('.antbuildz-ai-home-eyebrow');
  if (eyebrow && eyebrow.textContent !== HOME_HERO_EYEBROW) eyebrow.textContent = HOME_HERO_EYEBROW;
  let description = heroCopy?.querySelector<HTMLElement>('.antbuildz-ai-home-description');
  if (heroCopy && !description) {
    description = document.createElement('p');
    description.className = 'antbuildz-ai-home-description';
    heroCopy.querySelector('h1')?.after(description);
  }
  if (description && description.textContent !== HOME_HERO_DESCRIPTION) description.textContent = HOME_HERO_DESCRIPTION;
  heroCopy?.querySelector('.antbuildz-ai-home-intro')?.remove();

  const hero = root.querySelector<HTMLElement>('.ai-marketplace-hero');
  if (hero) setupHomeHeroMedia(hero);
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

const HOME_AGENT_CARD_ORIGINAL = {
  image: '/marketplace/how-it-works/assets/aria-cta-background-v2.jpg',
  imageAlt: 'Emma, Antbuildz AI Sales Agent',
  eyebrow: 'Meet Emma',
  title: 'Talk to Emma, Our AI Sales Agent',
  description: 'Tell Emma what you need, whether you’re looking to rent or buy, and any product preferences. She’ll guide you to the right option.',
  button: 'Talk to Emma',
  buttonAria: 'Talk to Emma in the Antbuildz AI Agent terminal',
  buttonHref: '/chat',
  badge: 'Emma · AI Sales Agent',
} as const;

const HOME_AGENT_CARD_INVENTORY = {
  image: '/images/emma-inventory-tablet-v1.png',
  imageAlt: 'Emma checking approved industrial product inventory on a tablet',
  eyebrow: null,
  title: 'An AI Agent That Understands Your Inventory',
  description: 'With connected inventory data, it helps customers compare products, check availability and enquire to buy or rent.',
  button: 'Explore AI Agent',
  buttonAria: 'Explore the Antbuildz AI Agent',
  buttonHref: '/ai-sales-agent',
  badge: 'AI Agent',
} as const;

function correctHomeInventoryAgentCard(root: HTMLElement, isHomepage: boolean) {
  const section = root.querySelector<HTMLElement>('#meet-aria');
  if (!section) return;
  const copy = isHomepage ? HOME_AGENT_CARD_INVENTORY : HOME_AGENT_CARD_ORIGINAL;
  section.classList.toggle('antbuildz-inventory-agent-card', isHomepage);
  const image = section.querySelector<HTMLImageElement>('.aria-sales-agent-cta__background');
  if (image) {
    image.src = copy.image;
    image.alt = copy.imageAlt;
  }
  const eyebrow = section.querySelector<HTMLElement>('.aria-sales-agent-cta__eyebrow');
  if (eyebrow) {
    eyebrow.hidden = !copy.eyebrow;
    if (copy.eyebrow) setPricingText(eyebrow, copy.eyebrow);
  }
  setPricingText(section.querySelector('h2'), copy.title);
  setPricingText(section.querySelector('.aria-sales-agent-cta__description'), copy.description);
  const button = section.querySelector<HTMLAnchorElement>('.aria-sales-agent-cta__button');
  if (button) {
    setPricingText(button.querySelector('span'), copy.button);
    button.setAttribute('aria-label', copy.buttonAria);
    button.setAttribute('href', copy.buttonHref);
  }
  setPricingText(section.querySelector('.aria-sales-agent-cta__name'), copy.badge);
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

function getAnnualMonthlyUsd(monthlyUsd: number) {
  // Keep the familiar 9-ending presentation while ensuring that the annual
  // total is exactly twelve times the displayed monthly equivalent.
  return Math.floor(monthlyUsd * (1 - ANNUAL_PRICING_DISCOUNT));
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

function simplifyCustomPricingCard(card: HTMLElement, summary: string) {
  card.classList.add('antbuildz-pricing-custom-compact');

  const planName = card.querySelector<HTMLElement>('.pricing-plan-name');
  setPricingText(planName, 'Need More Than a Standard Plan?');

  let label = card.querySelector<HTMLElement>('.antbuildz-pricing-custom-label');
  if (!label) {
    label = card.ownerDocument.createElement('div');
    label.className = 'antbuildz-pricing-custom-label';
    planName?.insertAdjacentElement('beforebegin', label);
  }
  setPricingText(label, 'Custom');

  let copy = card.querySelector<HTMLElement>('.antbuildz-pricing-custom-copy');
  if (!copy) {
    copy = card.ownerDocument.createElement('p');
    copy.className = 'antbuildz-pricing-custom-copy';
    card.querySelector('.pricing-cta')?.insertAdjacentElement('beforebegin', copy);
  }
  setPricingText(copy, summary);

  card.querySelectorAll(
    '.antbuildz-pricing-badge, .pricing-target, .pricing-price-row, .antbuildz-pricing-annual-note, .antbuildz-pricing-details, .pricing-feature-group-label, .pricing-features, .pricing-divider',
  ).forEach((element) => element.remove());
}

function correctPricingComparison(
  block: HTMLElement | null,
  legacyBlock: HTMLElement | null,
) {
  if (!block) return;
  if (legacyBlock) {
    legacyBlock.hidden = true;
    legacyBlock.setAttribute('aria-hidden', 'true');
    legacyBlock.setAttribute('inert', '');
  }
  if (block.dataset.antbuildzUnifiedComparison === 'true') return;

  const ownerDocument = block.ownerDocument;
  const card = ownerDocument.createElement('div');
  card.className = 'pricing-compare-card';

  const scroll = ownerDocument.createElement('div');
  scroll.className = 'pricing-compare-scroll';
  scroll.setAttribute('role', 'region');
  scroll.setAttribute('aria-labelledby', 'antbuildz-plan-comparison-title');
  scroll.setAttribute('tabindex', '0');

  const table = ownerDocument.createElement('table');
  table.className = 'pricing-compare-table pricing-compare-table-4plans antbuildz-plan-comparison-table';

  const head = ownerDocument.createElement('thead');
  const headRow = ownerDocument.createElement('tr');
  ['Feature', 'Agent', 'Sales', 'Rental+'].forEach((label, index) => {
    const heading = ownerDocument.createElement('th');
    heading.className = index === 0 ? 'pricing-compare-th-feature' : 'pricing-compare-th-plan';
    heading.setAttribute('scope', 'col');
    if (index === 0) {
      heading.textContent = label;
    } else {
      const chip = ownerDocument.createElement('span');
      chip.className = 'pricing-compare-plan-chip';
      chip.textContent = label;
      heading.appendChild(chip);
    }
    headRow.appendChild(heading);
  });
  head.appendChild(headRow);

  const body = ownerDocument.createElement('tbody');
  PRICING_COMPARISON_ROWS.forEach(({ feature, included }, rowIndex) => {
    const row = ownerDocument.createElement('tr');
    row.className = 'pricing-compare-row';
    if (rowIndex === 8 || rowIndex === 20) row.classList.add('is-tier-start');

    const label = ownerDocument.createElement('th');
    label.className = 'pricing-compare-td-feature';
    label.setAttribute('scope', 'row');
    label.textContent = feature;
    row.appendChild(label);

    included.forEach((isIncluded) => {
      const cell = ownerDocument.createElement('td');
      cell.className = `pricing-compare-td-value ${isIncluded ? 'is-yes' : 'is-no'}`;
      cell.textContent = isIncluded ? '✓' : '—';
      cell.setAttribute('aria-label', isIncluded ? 'Included' : 'Not included');
      row.appendChild(cell);
    });
    body.appendChild(row);
  });

  table.appendChild(head);
  table.appendChild(body);
  scroll.appendChild(table);
  card.appendChild(scroll);
  block.replaceChildren(card);
  block.dataset.antbuildzUnifiedComparison = 'true';
}

function correctPricingSupportingCopy(root: HTMLElement, agentSection: HTMLElement) {
  // The closing CTA already completes the pricing journey. Remove the copied
  // assurance strip beneath it so the page can transition directly to the
  // shared footer without repeating four generic feature claims.
  root.querySelector('.pricing-trust-grid')?.remove();

  // Custom requirements are already handled by the dedicated Custom plan.
  // Remove the repeated enterprise contact strip between the FAQ and CTA.
  root.querySelector('.pricing-enterprise-note')?.remove();

  const heroTitle = root.querySelector<HTMLElement>('.pricing-hero h1');
  if (heroTitle && heroTitle.dataset.antbuildzPricingTitle !== 'channels') {
    heroTitle.dataset.antbuildzPricingTitle = 'channels';
    heroTitle.replaceChildren(
      document.createTextNode('Deploy Your '),
      Object.assign(document.createElement('span'), {
        className: 'pricing-gradient-text',
        textContent: 'AI Agent',
      }),
      document.createElement('br'),
      document.createTextNode('Across Your Customer Channels.'),
    );
  }
  setPricingText(
    root.querySelector('.pricing-hero p'),
    'One business conversation may turn into thousands in revenue.',
  );

  // The copied page repeats the product title directly above the billing
  // controls. Keep the primary hero and remove only this duplicate heading
  // block so the controls and cards retain their transferred positions.
  const duplicateSectionHeader = agentSection.querySelector<HTMLElement>('.pricing-section-header');
  if (duplicateSectionHeader) {
    duplicateSectionHeader.hidden = true;
    duplicateSectionHeader.setAttribute('aria-hidden', 'true');
    duplicateSectionHeader.setAttribute('inert', '');
  }
  setPricingText(
    agentSection.querySelector('.pricing-conversation-note p'),
    `${PRICING_USAGE_COPY.session} ${PRICING_USAGE_COPY.monthly} Plan and AI Conversation Credit prices are in USD; the existing Additional AI Agent price is shown separately in SGD.`,
  );

  const packCard = root.querySelector('.pricing-topup-table')?.closest('.pricing-addon-card');
  if (packCard) {
    setPricingText(packCard.querySelector('h3'), 'AI Conversation Credits');
    const descriptions = packCard.querySelectorAll('.pricing-addon-desc');
    setPricingText(descriptions[0], 'Add credits when you need more conversations.');
    setPricingText(descriptions[1], 'Choose a credit pack or use Auto Top-Up. Purchased credits do not expire.');
    const headings = packCard.querySelectorAll('thead th');
    setPricingText(headings[0], 'Credit pack');
    setPricingText(headings[1], 'Price');
    packCard.querySelectorAll('tbody tr').forEach((row, index) => {
      const pack = PURCHASED_CREDIT_PACKS[index];
      if (!pack) return;
      const cells = row.querySelectorAll('td');
      setPricingText(cells[0], `${pack.sessions} credits`);
      setPricingText(cells[1], `US$${formatUsdAmount(pack.usd)}`);
    });
  }

  const comparisonHeader = root.querySelector<HTMLElement>('#compare-features > .pricing-section-header');
  const comparisonLabel = comparisonHeader?.querySelector<HTMLElement>('.pricing-section-label');
  const comparisonTitle = comparisonHeader?.querySelector<HTMLElement>('h2');
  setPricingText(comparisonLabel, 'Plan Comparison');
  if (comparisonTitle && comparisonTitle.dataset.antbuildzConsolidated !== 'true') {
    const highlightedWord = document.createElement('span');
    highlightedWord.className = 'pricing-gradient-text';
    highlightedWord.textContent = 'Features';
    comparisonTitle.replaceChildren(
      document.createTextNode('Compare '),
      highlightedWord,
      document.createTextNode(' Side by Side'),
    );
    comparisonTitle.id = 'antbuildz-plan-comparison-title';
    comparisonTitle.dataset.antbuildzConsolidated = 'true';
  }
  setPricingText(
    comparisonHeader?.querySelector('p'),
    'One AI Agent across every plan; Sales adds an AI Sales Webstore, while Rental+ adds rental, booking and combined inventory capabilities.',
  );
  correctPricingComparison(
    root.querySelector('#compare-features-ai-agent'),
    root.querySelector('#compare-features-webstore'),
  );

  root.querySelectorAll('.pricing-faq-item').forEach((item, index) => {
    const faq = PRICING_FAQS[index];
    if (!faq) return;
    // Preserve the original accordion button, icon and open/close state.
    setPricingText(item.querySelector('.pricing-faq-trigger > span:first-child'), faq.question);
    setPricingText(item.querySelector('.pricing-faq-answer p'), faq.answer);
  });

  // Replace the copied checkout actions with the approved public conversion
  // paths while keeping the transferred CTA structure and native buttons.
  const bottomDemoCta = root.querySelector<HTMLButtonElement>('.pricing-bottom-cta .pricing-cta-white');
  setPricingText(bottomDemoCta, 'Book a Demo');
  if (bottomDemoCta && !pricingCtaBindings.has(bottomDemoCta)) {
    pricingCtaBindings.add(bottomDemoCta);
    bottomDemoCta.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.assign(new URL(DEMO_REQUEST_PATH, window.location.origin).href);
    });
  }

  const bottomEmailCta = root.querySelector<HTMLButtonElement>('.pricing-bottom-cta .pricing-cta-outline-white');
  setPricingText(bottomEmailCta, 'Email Sales');
  if (bottomEmailCta && !pricingCtaBindings.has(bottomEmailCta)) {
    pricingCtaBindings.add(bottomEmailCta);
    bottomEmailCta.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.href = `mailto:help@antbuildz.ai?subject=${encodeURIComponent('Antbuildz AI plan enquiry')}`;
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

    card.dataset.antbuildzPlan = plan.name === 'Rental+' ? 'rental-plus' : plan.name.toLowerCase();
    card.classList.toggle('pricing-card-featured', plan.name === 'Sales');

    let badge = card.querySelector<HTMLElement>('.antbuildz-pricing-badge');
    if (!badge) {
      badge = document.createElement('div');
      badge.className = 'antbuildz-pricing-badge';
      card.insertAdjacentElement('afterbegin', badge);
    }
    badge.classList.toggle('is-empty', !plan.badge);
    badge.classList.toggle('is-popular', plan.name === 'Sales');
    setPricingText(badge, plan.badge ?? 'Plan badge');
    badge.setAttribute('aria-hidden', plan.badge ? 'false' : 'true');

    setPricingText(card.querySelector('.pricing-plan-name'), plan.name);
    const positioning = card.querySelector<HTMLElement>('.pricing-target');
    const positioningSignature = `${plan.subtitle}|${plan.bestFor}|no-feature-intro`;
    if (positioning && positioning.dataset.antbuildzPricingPositioning !== positioningSignature) {
      const bestFor = positioning.ownerDocument.createElement('span');
      bestFor.className = 'antbuildz-pricing-best-for';
      const bestForLabel = positioning.ownerDocument.createElement('strong');
      bestForLabel.textContent = 'Best for:';
      bestFor.append(bestForLabel, positioning.ownerDocument.createTextNode(` ${plan.bestFor}`));

      if (plan.subtitle) {
        const subtitle = positioning.ownerDocument.createElement('span');
        subtitle.className = 'antbuildz-pricing-subtitle';
        subtitle.textContent = plan.subtitle;
        positioning.replaceChildren(subtitle, bestFor);
      } else {
        positioning.replaceChildren(bestFor);
      }
      positioning.dataset.antbuildzPricingPositioning = positioningSignature;
      positioning.setAttribute(
        'aria-label',
        `${plan.subtitle ? `${plan.subtitle}. ` : ''}Best for: ${plan.bestFor}`,
      );
    }

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
        ? getAnnualMonthlyUsd(plan.monthlyUsd)
        : plan.monthlyUsd;
      setPricingText(price, `US$${formatUsdAmount(monthlyEquivalent)}`);
      if (period) {
        period.hidden = false;
        setPricingText(period, '/mo');
      }
      if (annualNote) {
        annualNote.hidden = billingCycle !== 'annual';
        if (billingCycle === 'annual') {
          const annualTotal = monthlyEquivalent * 12;
          setPricingText(
            annualNote,
            `US$${formatUsdAmount(annualTotal)} billed annually · Save 20%`,
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
      button.setAttribute('aria-label', plan.trialPlan ? `${plan.cta} — ${plan.name} plan` : plan.cta);
      button.classList.toggle('pricing-cta-featured', plan.badge === 'Most Popular');
      button.dataset.antbuildzTrialPlan = plan.trialPlan ?? '';
      button.dataset.antbuildzEmailSubject = plan.emailSubject;
      button.dataset.antbuildzDemo = String(plan.cta === 'Book a Demo');
      if (!pricingCtaBindings.has(button)) {
        pricingCtaBindings.add(button);
        button.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopImmediatePropagation();
          const trialPlan = button.dataset.antbuildzTrialPlan;
          if (trialPlan) {
            const destination = new URL('/signup', window.location.origin);
            destination.searchParams.set('plan', trialPlan);
            destination.searchParams.set('trial', '14-day');
            window.location.assign(destination.href);
            return;
          }
          if (button.dataset.antbuildzDemo === 'true') {
            window.location.assign(new URL(DEMO_REQUEST_PATH, window.location.origin).href);
            return;
          }
          const subject = button.dataset.antbuildzEmailSubject ?? 'Antbuildz AI pricing enquiry';
          window.location.href = `mailto:help@antbuildz.ai?subject=${encodeURIComponent(subject)}`;
        });
      }
    }

    let trialNote = card.querySelector<HTMLElement>('.antbuildz-pricing-trial-note');
    if (plan.trialPlan && button) {
      if (!trialNote) {
        trialNote = document.createElement('p');
        trialNote.className = 'antbuildz-pricing-trial-note';
        button.insertAdjacentElement('afterend', trialNote);
      }
      trialNote.id = `pricing-trial-note-${plan.trialPlan}`;
      button.setAttribute('aria-describedby', trialNote.id);
      setPricingText(trialNote, 'Credit card required');
    } else {
      trialNote?.remove();
      button?.removeAttribute('aria-describedby');
    }

    let details = card.querySelector<HTMLElement>('.antbuildz-pricing-details');
    if (!details) {
      details = document.createElement('div');
      details.className = 'antbuildz-pricing-details';
      button?.insertAdjacentElement('beforebegin', details);
    }
    let detailsHeading = details.querySelector<HTMLElement>('.antbuildz-pricing-details-heading');
    if (!detailsHeading) {
      detailsHeading = document.createElement('div');
      detailsHeading.className = 'antbuildz-pricing-details-heading';
      details.prepend(detailsHeading);
    }
    setPricingText(detailsHeading, 'Plan allowances');
    setPricingDetail(details, 'usage', 'Included AI conversations', plan.usage);
    setPricingDetail(details, 'listings', 'Listings', plan.listings);
    details.querySelector('[data-antbuildz-pricing-detail="overage"]')?.remove();

    const featureLabel = card.querySelector<HTMLElement>('.pricing-feature-group-label');
    card.querySelector('.antbuildz-pricing-feature-intro')?.remove();
    setPricingText(featureLabel, plan.featureLabel);

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

    if (plan.customSummary) simplifyCustomPricingCard(card, plan.customSummary);
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

function markWhoWeServePage(root: HTMLElement) {
  root.classList.toggle('antbuildz-who-we-serve-page', WHO_WE_SERVE_PATHS.has(window.location.pathname));
}

function correctIndustryTrustPlacement(root: HTMLElement) {
  const isWhoWeServePage = WHO_WE_SERVE_PATHS.has(window.location.pathname);
  root.querySelectorAll<HTMLElement>('.si-sierra-stage--trust').forEach((section) => {
    if (isWhoWeServePage) {
      section.dataset.antbuildzHomepageOnly = 'true';
      section.hidden = true;
      section.setAttribute('inert', '');
      return;
    }
    if (section.dataset.antbuildzHomepageOnly !== 'true') return;
    section.hidden = false;
    section.removeAttribute('inert');
    delete section.dataset.antbuildzHomepageOnly;
  });
}

function removeWhoWeServeBreadcrumb(root: HTMLElement) {
  if (!WHO_WE_SERVE_PATHS.has(window.location.pathname)) return;
  root
    .querySelectorAll<HTMLElement>('.solutions-insurance-page .si-location-trail')
    .forEach((trail) => trail.remove());
}

function applyAntbuildzAiCorrections(root: HTMLElement) {
  correctRouteLoader(root);
  correctWordmarks(root);
  correctLinks(root);
  correctIndustriesMenu(root);
  correctHeaderLayout(root);
  correctAiRolesMenu(root);
  correctPublicHeroHeader(root);
  correctResourceRoles(root);
  correctResourceCopy(root, window.location.pathname);
  correctResourcesMenu(root);
  correctProductsMenu(root);
  correctPublicDrawer();
  correctFooter(root);
  correctAboutEcosystem(root);
  syncAiRoleNavigation(root, AI_ROLE_LINKS, AI_ROLE_REDIRECTS);
  syncResourceNavigation(root);
  correctHomepage(root);
  correctPricing(root);
  correctDemoRequest(root);
  correctLegalAcceptance(root);
  correctSalesAgentCopy(root, window.location.pathname);
  applyPublicCtaSystem(root, window.location.pathname);
  syncLegalNavigation(root);
  syncSalesAgentHeroThemes(root, window.location.pathname);
  simplifyAgreementHub(root);
  syncAgreementMetadata(document, window.location.pathname);
  scopeAiHelpExperience(root, window.location.pathname);
  standardiseAgentPortraits(root);
  markWhoWeServePage(root);
  correctIndustryTrustPlacement(root);
  removeWhoWeServeBreadcrumb(root);
  applyWhoWeServeProcessCopy(root, window.location.pathname);
  correctIndustryFaqs(root, window.location.pathname);
  correctPublicTypography(root);
  applyPublicMarketingTypographyTrial(root, window.location.pathname);
  applyPublicMarketingSectionSystem(root, window.location.pathname);
  removeHeadingFullStops(root, window.location.pathname);

  // Product links keep their established URL and DOM structure. Sales-role
  // links retain their specific role names and destinations.
  root.querySelectorAll<HTMLAnchorElement>('a[href="/ai-sales-agent"]').forEach(link => {
    const labels: Record<string, string> = {
      'AI Sales Agent': 'AI Agent',
      'Explore AI Sales Agent': 'Explore AI Agent',
      'Meet Your AI Sales Agent': 'Meet Your AI Agent',
    };
    const label = link.textContent?.trim() ?? '';
    if (labels[label]) setSalesAgentText(link, labels[label]);
    const aria = link.getAttribute('aria-label');
    if (aria?.includes('AI Sales Agent')) link.setAttribute('aria-label', aria.replace('AI Sales Agent', 'AI Agent'));
  });

  const pageTitle = PAGE_TITLES[window.location.pathname];
  if (pageTitle) document.title = pageTitle;
  syncHomepageMetadata(document, window.location.pathname);
  syncDefaultSocialShareImage(document);
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

    // The copied SPA updates the document head after hydration. Preserve the
    // authoritative metadata rendered by the Next route so canonicals never
    // fall back to localhost or the retired antbuildzai.com domain.
    const protectedPathname = window.location.pathname;
    const transferredResourcePath = getTransferredResourcePath(protectedPathname);
    const nativeReplaceState = window.history.replaceState.bind(window.history);
    const protectedTitle = document.title;
    const protectedCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href ?? '';
    const protectedRouteSchema = document.getElementById('route-jsonld')?.textContent ?? '';
    const protectedMeta = new Map<string, string>();
    const metadataSelectors = [
      'meta[name="description"]',
      'meta[name="robots"]',
      'meta[name="googlebot"]',
      'meta[property="og:title"]',
      'meta[property="og:description"]',
      'meta[property="og:url"]',
      'meta[property="og:type"]',
      'meta[property="og:site_name"]',
      'meta[property="og:locale"]',
      'meta[property="og:image"]',
      'meta[property="og:image:alt"]',
      'meta[property="og:image:width"]',
      'meta[property="og:image:height"]',
      'meta[name="twitter:card"]',
      'meta[name="twitter:title"]',
      'meta[name="twitter:description"]',
      'meta[name="twitter:image"]',
      'meta[name="twitter:image:alt"]',
    ];
    for (const selector of metadataSelectors) {
      const value = document.querySelector<HTMLMetaElement>(selector)?.content;
      if (value) protectedMeta.set(selector, value);
    }
    const restoreServerMetadata = () => {
      if (window.location.pathname !== protectedPathname) return;
      if (protectedTitle && document.title !== protectedTitle) document.title = protectedTitle;
      if (protectedCanonical) {
        const links = Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]'));
        const canonical = links[0] ?? document.createElement('link');
        if (!links.length) {
          canonical.rel = 'canonical';
          document.head.appendChild(canonical);
        }
        if (canonical.href !== protectedCanonical) canonical.href = protectedCanonical;
        // The transferred app may add its own identical canonical after hydration.
        for (const duplicate of links.slice(1)) duplicate.remove();
      }
      for (const [selector, value] of protectedMeta) {
        document.querySelectorAll<HTMLMetaElement>(selector).forEach((meta) => {
          if (meta.content !== value) meta.content = value;
        });
      }
      if (protectedRouteSchema) {
        let script = document.getElementById('route-jsonld');
        if (!script) {
          script = document.createElement('script');
          script.id = 'route-jsonld';
          script.setAttribute('type', 'application/ld+json');
          document.head.appendChild(script);
        }
        if (script.textContent !== protectedRouteSchema) script.textContent = protectedRouteSchema;
      }
    };

    document.addEventListener('click', navigateHomeFromLink, true);
    document.addEventListener('click', navigateSalesAgentFromLink, true);
    document.addEventListener('keydown', navigateSalesAgentFromLink, true);
    document.addEventListener('click', navigateWebstoreFromLink, true);
    document.addEventListener('keydown', navigateWebstoreFromLink, true);
    document.addEventListener('click', navigateDemoFromLink, true);
    document.addEventListener('keydown', navigateDemoFromLink, true);
    window.addEventListener('popstate', navigateHomeFromHistory);

    let correctionFrame = 0;
    let resourceRestoreFrame = 0;
    const scheduleCorrections = () => {
      if (correctionFrame) return;
      correctionFrame = window.requestAnimationFrame(() => {
        correctionFrame = 0;
        applyAntbuildzAiCorrections(root);
        restoreServerMetadata();
      });
    };
    const restoreTransferredResourcePath = (attempt = 0) => {
      if (!transferredResourcePath || window.location.pathname !== transferredResourcePath) {
        scheduleCorrections();
        return;
      }
      const articleHasRendered = Boolean(root.querySelector('article h1'));
      if (!articleHasRendered && attempt < 120) {
        resourceRestoreFrame = window.requestAnimationFrame(() => restoreTransferredResourcePath(attempt + 1));
        return;
      }
      nativeReplaceState(window.history.state, '', `${protectedPathname}${window.location.search}${window.location.hash}`);
      scheduleCorrections();
    };

    if (!document.getElementById(ORIGINAL_STYLESHEET_ID)) {
      const stylesheet = document.createElement('link');
      stylesheet.id = ORIGINAL_STYLESHEET_ID;
      stylesheet.rel = 'stylesheet';
      stylesheet.href = '/assets/index-DZYh9Xyx.css';
      document.head.appendChild(stylesheet);
    }

    if (!document.getElementById(ORIGINAL_SCRIPT_ID)) {
      if (transferredResourcePath) {
        nativeReplaceState(window.history.state, '', `${transferredResourcePath}${window.location.search}${window.location.hash}`);
      }
      const script = document.createElement('script');
      script.id = ORIGINAL_SCRIPT_ID;
      script.type = 'module';
      script.src = '/assets/index-i9-KQg8N.js';
      script.addEventListener('load', () => {
        restoreTransferredResourcePath();
      });
      document.body.appendChild(script);
    }

    const observer = new MutationObserver(() => {
      // Correct the copied Suspense fallback in the same microtask that adds
      // it, so the workspace wording cannot flash for a painted frame.
      correctRouteLoader(root);
      scheduleCorrections();
    });
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    const headObserver = new MutationObserver(() => {
      restoreServerMetadata();
      syncDefaultSocialShareImage(document);
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
      resetPublicHeroHeader();
      resetSalesAgentHeroThemes();
      observer.disconnect();
      headObserver.disconnect();
      document.removeEventListener('click', scheduleCorrections);
      document.removeEventListener('click', navigateHomeFromLink, true);
      document.removeEventListener('click', navigateSalesAgentFromLink, true);
      document.removeEventListener('keydown', navigateSalesAgentFromLink, true);
      document.removeEventListener('click', navigateWebstoreFromLink, true);
      document.removeEventListener('keydown', navigateWebstoreFromLink, true);
      document.removeEventListener('click', navigateDemoFromLink, true);
      document.removeEventListener('keydown', navigateDemoFromLink, true);
      window.removeEventListener('popstate', navigateHomeFromHistory);
      document.removeEventListener('pointerdown', dismissHeaderDropdowns);
      document.removeEventListener('focusin', dismissHeaderDropdowns);
      window.removeEventListener('popstate', scheduleCorrections);
      window.removeEventListener('hashchange', scheduleCorrections);
      if (correctionFrame) window.cancelAnimationFrame(correctionFrame);
      if (resourceRestoreFrame) window.cancelAnimationFrame(resourceRestoreFrame);
    };
  }, []);

  return <div id="root" className={`antbuildz-original-root ${className}`.trim()} />;
}
