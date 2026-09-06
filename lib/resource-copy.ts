export type ResourcePositioningCopy = {
  title?: string;
  description?: string;
};

export const RESOURCE_LIBRARY_SEO = {
  title: "AI Agent Guides for Industrial B2B",
  description: "Learn how industrial AI Agents qualify enquiries, use approved product knowledge, connect to inventory, and work with an AI Webstore for search and product discovery.",
} as const;

export const RESOURCE_POSITIONING_OVERRIDES: Record<string, ResourcePositioningCopy> = {
  'why-ai-agents-work-with-an-integrated-webstore': {
    title: 'How Antbuildz Webstore Improves AI Agent Recommendations',
    description: "Learn how Antbuildz Webstore supports the AI Agent with structured product pages, approved specifications and inventory context for more accurate recommendations.",
  },
  'how-ai-webstore-creates-a-digital-sales-channel': {
    title: 'How Structured Product Pages Support AI Search and Sales',
    description: "See how Webstore turns a product catalogue into dedicated, searchable product pages that support SEO, AI discovery and better-informed AI Agent conversations.",
  },
  'how-ai-agents-help-webstore-visitors-understand-products': {
    title: "How an AI Agent Uses Webstore Product Data",
    description: "Learn how the AI Agent uses approved Webstore specifications, product URLs and inventory context to explain options and prepare clearer industrial enquiries.",
  },
  'ai-agent-industrial-enquiry-workflows': {
    description: "See how the AI Agent supports rental, sales, parts, service and technical enquiry workflows, with optional Webstore product and inventory context when relevant.",
  },
  'why-a-product-catalogue-is-not-enough': {
    title: 'Why Product Catalogues Need Conversation and Context',
    description: "Learn why a static product catalogue cannot clarify buyer requirements, and how an AI Agent uses approved knowledge to guide the next sales step.",
  },
  'how-ai-webstore-helps-capture-sales-enquiries': {
    title: 'How a Webstore Supports AI-Led Sales Enquiries',
    description: "Learn how structured Webstore product pages support AI Agent conversations, capture buyer intent and give sales teams clearer product enquiries.",
  },
  'how-ai-webstore-qualifies-marketing-enquiries': {
    title: 'How Product Pages and AI Turn Discovery Into Enquiries',
    description: "See how dedicated product URLs support search discovery while the AI Agent answers questions, qualifies requirements and captures buyer intent.",
  },
  'ai-webstore-vs-company-website': {
    title: 'AI Webstore vs a Company Website for Product Discovery',
    description: "Compare a standard company website with an AI-ready Webstore that adds structured product pages, inventory context and support for AI Agent recommendations.",
  },
  'ai-agent-vs-generic-ai-agents': {
    description: 'Learn how Antbuildz AI Agent differs from generic AI through industrial qualification workflows, approved business knowledge, inventory connections, lead capture and Console control.',
  },
  'how-to-structure-b2b-product-knowledge': {
    title: "How to Structure Product Knowledge for an AI Agent",
    description: "Structure categories, specifications, applications, compatibility, pricing guidance and inventory fields so an AI Agent can answer and qualify enquiries accurately.",
  },
  'how-antbuildz-connects-webstore-and-ai-agent': {
    title: "How the AI Agent, Webstore and Marketplace Work Together",
    description: "Understand the AI Agent as the core product, Webstore as its structured product and inventory layer, and Marketplace as an optional discovery channel.",
  },
  'how-to-improve-ai-agent-accuracy': {
    description: "Improve AI Agent accuracy with approved knowledge, structured product data, optional inventory connections, business rules, testing and conversation review.",
  },
};

const PRODUCT_MODEL_COPY = 'The AI Agent uses product knowledge, inventory and workflows to guide customer conversations. Sales Specialist, Product Specialist, Customer Service, Technical Support and After-Sales Support are its roles. Sales and Rental+ are subscription capabilities. AI Webstore Suite adds the connected product, inventory and store layer, with dedicated product URLs for search discovery.';

const RESOURCE_BLOG_CONTENT_PATH = '/resource-articles/content';

const BODY_REPLACEMENTS: Record<string, string> = {
  // FAQ answers in the transferred article fallback; full article FAQs live in public/resource-articles/content.
  "Review the agent setup, qualification questions, knowledge base, and workflows. High activity with weak leads usually means the agent is not collecting the right buying signals.": "Review the chosen Agent role, approved knowledge and workflow. For Sales Specialist, check whether qualification questions collect useful buying requirements. For Customer Service or support roles, assess answer quality, issue resolution and appropriate handover rather than lead volume.",
  "The most important parts are agent role, company context, behaviour rules, handover instructions, and lead qualification fields. These tell Antbuildz AI Agent how to behave before it uses the knowledge base.": "Define the Agent role, company context, behaviour and handover boundaries first. Sales Specialist may need qualification fields; Customer Service, Product Specialist, Technical Support and After-Sales Support need instructions suited to their own customer conversations.",
  "Start with the systems your team already uses for follow-up, such as email, CRM, WhatsApp, lead forms, or internal notification channels.": "Start with supported connections that fit your team\u2019s follow-up process. Confirm availability and any integration requirements for your plan before connecting email, CRM, messaging or notification systems. Sharing an Agent link does not itself require a native messaging integration.",
  "The Webstore gives Antbuildz AI Agent structured product, pricing, availability, and catalogue context. Without that data, the agent may understand the customer question but still lack the company-specific information needed to recommend or qualify correctly.": "AI Webstore Suite adds structured product pages and supported inventory context to the AI Agent. The Agent can also work with approved business knowledge and existing channels without a new Webstore. Product facts and commercial rules must be clear and current in either setup.",
  "Review product, stock, price, and specification data whenever inventory changes. For active equipment businesses, a weekly review is safer during launch and a monthly review is the minimum after the process stabilises.": "Update product, stock, price and specification information whenever the source changes. Review the connected data and its update frequency during setup, and ask your team to confirm availability when a current value cannot be verified.",
  "Equipment rental companies, machinery dealers, industrial suppliers, spare parts teams, and service teams benefit most when they receive repeated customer questions that require product, pricing, availability, or workflow context.": "A strong fit is a complex product business with repeated questions about specifications, suitability, pricing or availability. Industrial equipment, B2B sales and rental are Antbuildz\u2019s strongest specialisations; instruments, electronics, components and technical consumer products can also fit.",
  'How Webstore Data Helps Antbuildz AI Agent Answer Better': "How Webstore Data Supports the AI Agent",
  "Why it matters: A webstore is the AI agent's digital showroom, product database, and sales backbone.": "Why it matters: Webstore is a supporting product-data layer for the AI Agent, with dedicated pages for product discovery.",
  'Why it matters: Without webstore data, the agent is intelligent but blind.': "Why it matters: The AI Agent can use approved Knowledge Base content without Webstore; connecting Webstore adds structured product and inventory context.",
  'Deploying an AI agent without a webstore is like hiring a great salesperson and putting them in an empty office with no catalogue, price list, inventory system, or product documents.': "Businesses can deploy the AI Agent with approved catalogues, manuals, policies and other knowledge sources. Adding Antbuildz Webstore strengthens product discovery with structured product pages, dedicated URLs and inventory context.",
  'Why is Webstore data important for this topic?': "How does Webstore data support the AI Agent?",
  'The Webstore gives Antbuildz AI Agent structured product, pricing, availability, and catalogue context. Without that data, the agent may understand the customer question but still lack the company-specific information needed to recommend or qualify correctly.': "Antbuildz Webstore supplies structured product pages, approved specifications and inventory context. The AI Agent can also work from catalogues, manuals, policies and other approved sources; Webstore becomes the supporting product layer when deeper product discovery and matching are required.",
  'Review product, stock, price, and specification data whenever inventory changes. For active equipment businesses, a weekly review is safer during launch and a monthly review is the minimum after the process stabilises.': "Update Webstore product, specification, price and inventory fields whenever the source data changes. Assign an owner, record the source and review dates, and remove stale values before the AI Agent uses them in customer conversations.",
  'Why it matters: Marketplace visibility, webstore branding, product catalogue data, and Antbuildz AI Agent intelligence work best when connected.': "Why it matters: The AI Agent remains the core customer-facing product. Webstore can add structured product data, while Marketplace can provide an optional discovery channel.",
  'Why it matters: Antbuildz AI Agent uses the catalogue, webstore, and marketplace context to answer accurately.': "Why it matters: The AI Agent answers from approved knowledge. Webstore and Marketplace add context only when a business chooses to connect them.",
  'Antbuildz combines Marketplace, Webstore, Product Catalogue, and Antbuildz AI Agent into one connected platform for equipment businesses.': "Antbuildz AI Agent is the core product for buyer conversations. Antbuildz Webstore can support it with structured product pages and inventory context, while Antbuildz Marketplace remains a separate, optional channel for product discovery.",
  'The Core Idea: Webstore Gives the AI Agent Something Real to Work With': 'The Core Idea: Approved Product Knowledge Makes the Agent More Accurate',
  'Webstore + AI Agent: The Real Advantage': "How Webstore Supports the AI Agent",
  'Layman Explanation: Webstore Gives the AI Agent Eyes and Structure': 'How Structured Product Data Gives the Agent More Context',
  '8. Webstore + AI Agent Creates a Full Digital Sales Engine': '8. Webstore Adds a Structured Product Layer',
  'The Big Idea: One Ecosystem, Not Four Separate Tools': 'How the Products Work Together',
  'A strong AI Webstore is not just a product display. It is the product data foundation for AI-powered sales.': "A well-structured Webstore is more than a product display. It can supply a connected AI Agent with clearer product pages, specifications and inventory context.",
};

const POSITIONING_PHRASE_REPLACEMENTS: Array<[string, string]> = [
  [
    'Without a Webstore, your product information may be scattered across PDFs, Excel files, WhatsApp chats, salespeople’s memory, brochures, old websites, and internal documents.',
    "Product information is often scattered across PDFs, Excel files, WhatsApp chats, salespeople’s memory, brochures, old websites and internal documents. The AI Agent can use approved sources from these systems, while Webstore provides a more structured product layer when a business connects it.",
  ],
  [
    'Antbuildz AI Agent can reason through the customer’s requirement, but it needs structured business data to do that properly. The Webstore provides that structure.',
    'Antbuildz AI Agent can reason through a customer’s requirement using approved business knowledge. Connecting Webstore adds structured product pages, specifications and inventory context that can make product matching more precise.',
  ],
  [
    'A Webstore alone helps customers browse. An AI Agent alone helps customers ask questions. But Webstore + AI Agent creates something stronger:',
    "The AI Agent leads the buyer conversation. When Webstore is connected, its structured product pages give the Agent more product context and give buyers a clearer place to continue their research.",
  ],
  [
    'The real power is not Webstore alone or AI Agent alone.',
    "The AI Agent is the core conversational product. Webstore strengthens it when structured product pages, searchable URLs and inventory context are needed.",
  ],
  [
    'AI Agent can work without Webstore. AI Agent works better with Webstore. AI Agent + Webstore creates a stronger digital sales engine.',
    "The AI Agent can work from approved catalogues, manuals, policies and business knowledge. Webstore is an optional supporting system that adds structured product and inventory context.",
  ],
  [
    'Instead of treating Marketplace, Webstore, Catalogue, and AI Agent as separate tools, Antbuildz connects them into one digital sales ecosystem.',
    "Antbuildz AI Agent is the core product for buyer conversations. Webstore can provide its structured product and inventory layer, while Marketplace remains an optional channel for discovery.",
  ],
  [
    'The Marketplace helps customers discover you. The Webstore gives your business a branded product destination. The Catalogue structures your product knowledge. The AI Agent turns product interest into guided sales conversations and qualified enquiries.',
    "The AI Agent turns product interest into guided conversations and qualified enquiries. Webstore can add a branded product destination and structured catalogue, while Marketplace can provide another discovery channel.",
  ],
  [
    'The Webstore becomes the product database, visual product layer, rental and sales system, and business logic foundation for the AI Agent.',
    "Webstore can become the structured product and inventory layer that supports the AI Agent, including product pages, specifications, rental or sales options and enquiry paths.",
  ],
];

function setText(element: Element | null, text: string) {
  if (element && element.textContent?.trim() !== text) element.textContent = text;
}

function createProductModelSection(document: Document, variant: 'index' | 'article') {
  const section = document.createElement('section');
  section.className = `antbuildz-resource-model antbuildz-resource-model--${variant}`;
  section.dataset.antbuildzResourceModel = variant;
  section.setAttribute('aria-labelledby', `antbuildz-resource-model-${variant}`);

  const inner = document.createElement('div');
  inner.className = 'antbuildz-resource-model__inner';
  const eyebrow = document.createElement('p');
  eyebrow.className = 'antbuildz-resource-model__eyebrow';
  eyebrow.textContent = 'HOW THE PRODUCTS FIT TOGETHER';
  const title = document.createElement('h2');
  title.id = `antbuildz-resource-model-${variant}`;
  title.textContent = 'The AI Agent is the core product.';
  const description = document.createElement('p');
  description.className = 'antbuildz-resource-model__description';
  description.textContent = PRODUCT_MODEL_COPY;
  inner.append(eyebrow, title, description);
  section.appendChild(inner);
  return section;
}

function updateLinkedArticleCopy(root: HTMLElement) {
  root.querySelectorAll<HTMLAnchorElement>('a[href*="/resources/"]').forEach((link) => {
    const slug = new URL(link.href, window.location.origin).pathname.split('/').filter(Boolean).at(-1);
    const copy = slug ? RESOURCE_POSITIONING_OVERRIDES[slug] : undefined;
    if (!copy) return;
    const titleTarget = link.querySelector('h4, h3, p');
    if (copy.title && titleTarget) setText(titleTarget, copy.title);
    else if (copy.title && link.children.length === 0) setText(link, copy.title);
    if (copy.description) {
      const paragraph = Array.from(link.querySelectorAll('p')).find((item) => item !== titleTarget);
      if (paragraph) setText(paragraph, copy.description);
    }
  });
}

function correctResourceIndex(root: HTMLElement) {
  const hero = root.querySelector<HTMLElement>('.bright-resource-hero');
  const body = root.querySelector<HTMLElement>('.bright-resource-body');
  if (!hero || !body) return;

  setText(hero.querySelector('h1'), "Build an AI Agent for complex products.");
  setText(hero.querySelector('h1 + p'), "Learn how the Antbuildz AI Agent understands enquiries, uses approved business knowledge and, when connected, draws on Webstore product and inventory data for better-supported recommendations.");

  if (!root.querySelector('[data-antbuildz-resource-model="index"]')) {
    body.insertAdjacentElement('beforebegin', createProductModelSection(document, 'index'));
  }

  root.querySelectorAll<HTMLElement>('.bright-resource-topic-list button span:nth-child(2), .bright-resource-collection h3')
    .forEach((element) => {
      if (element.textContent?.trim() === 'Antbuildz AI Agent + Webstore') {
        setText(element, "How Webstore Supports the AI Agent");
      }
    });

  Array.from(root.querySelectorAll<HTMLElement>('.bright-resource-collection:not([hidden])')).forEach((collection, index) => {
    const number = collection.querySelector<HTMLElement>('.bright-resource-collection-number');
    if (number) setText(number, String(index + 1).padStart(2, '0'));
  });
  updateLinkedArticleCopy(root);
}

function correctResourceArticle(root: HTMLElement, pathname: string) {
  const article = root.querySelector<HTMLElement>('main article');
  if (!article) return;
  const slug = pathname.split('/').filter(Boolean).at(-1) ?? '';
  const copy = RESOURCE_POSITIONING_OVERRIDES[slug];
  const header = article.querySelector<HTMLElement>(':scope > div > header');
  if (copy?.title) setText(header?.querySelector('h1') ?? null, copy.title);
  if (copy?.description) setText(header?.querySelector('h1 + p') ?? null, copy.description);

  const articleBody = article.querySelector<HTMLElement>(':scope > div > div.grid > .min-w-0 > div:first-child');
  if (articleBody && !articleBody.dataset.antbuildzResourceBlog) {
    articleBody.dataset.antbuildzResourceBlog = 'loading';
    fetch(`${RESOURCE_BLOG_CONTENT_PATH}/${slug}.html`)
      .then((response) => {
        if (!response.ok) throw new Error(`Resource article returned ${response.status}`);
        return response.text();
      })
      .then((html) => {
        if (!articleBody.isConnected || window.location.pathname !== pathname) return;
        articleBody.dataset.antbuildzResourceBlog = 'loaded';
        articleBody.classList.add('antbuildz-resource-blog-content');
        articleBody.innerHTML = html;
        correctResourceArticle(root, pathname);
      })
      .catch(() => {
        articleBody.dataset.antbuildzResourceBlog = 'fallback';
      });
  }
  if (articleBody && !articleBody.querySelector('[data-antbuildz-resource-model="article"]')) {
    articleBody.prepend(createProductModelSection(document, 'article'));
  }

  if (articleBody?.dataset.antbuildzResourceBlog === 'loaded' && !articleBody.querySelector('.antbuildz-resource-answer')) {
    const answer = document.createElement('p');
    answer.className = 'antbuildz-resource-answer';
    const label = document.createElement('strong');
    label.textContent = 'Direct answer. ';
    answer.append(label, copy?.description ?? header?.querySelector('h1 + p')?.textContent?.trim() ?? '');
    articleBody.querySelector('[data-antbuildz-resource-model="article"]')?.insertAdjacentElement('afterend', answer);
  }

  article.querySelectorAll<HTMLElement>('h2, h3, h4, p, li').forEach((element) => {
    const original = element.textContent?.trim() ?? '';
    const replacement = BODY_REPLACEMENTS[original];
    if (replacement) {
      setText(element, replacement);
      return;
    }
    const updated = POSITIONING_PHRASE_REPLACEMENTS.reduce(
      (text, [phrase, next]) => text.includes(phrase) ? text.replace(phrase, next) : text,
      original,
    );
    if (updated !== original) setText(element, updated);
  });

  article.querySelectorAll<HTMLElement>('nav, span').forEach((element) => {
    if (element.children.length === 0 && element.textContent?.trim() === 'Antbuildz AI Agent + Webstore') {
      setText(element, "How Webstore Supports the AI Agent");
    }
  });

  const nextStep = article.querySelector<HTMLElement>('.next-step-panel--resource-article');
  if (nextStep) {
    setText(nextStep.querySelector('h2'), "Start with the AI Agent.");
    setText(nextStep.querySelector('h2 + p'), "See how the core AI Agent can handle your buyer conversations, then connect Webstore when you need structured product pages and inventory context.");
    nextStep.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
      const label = link.textContent?.trim();
      if (label === 'Explore AI Agent') setText(link, "Explore AI Agent");
      if (label === 'Visit Webstore') setText(link, 'See how Webstore supports it');
      if (label === 'See pricing') setText(link, 'View Pricing');
    });
  }
  updateLinkedArticleCopy(article);
}

export function correctResourceCopy(root: HTMLElement, pathname: string) {
  if (pathname === '/resources') correctResourceIndex(root);
  else if (pathname.startsWith('/resources/')) correctResourceArticle(root, pathname);
}
