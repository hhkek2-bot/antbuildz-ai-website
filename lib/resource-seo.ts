import { RESOURCE_POSITIONING_OVERRIDES } from './resource-copy';

export type ResourceSeoEntry = {
  slug: string;
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  imageAlt?: string;
};

/** Legacy resource paths map one-to-one to readable canonical URLs. */
export const RESOURCE_URL_REDIRECTS: Record<string, string> = {
  whatisanaisalesagentforindustrialb2bproductsequipmentrentalsales: 'what-is-an-ai-sales-agent',
  howaiagentsdifferfromchatbotswhatb2bindustrialbusinessesneedtoknow: 'ai-agents-vs-chatbots-for-industrial-b2b',
  '7keybenefitsofaiagentsforb2bbusinessesintheequipmentindustry': 'ai-agent-benefits-for-industrial-b2b',
  whatkindofenquiriescanantbuildzaiagenthandle: 'enquiries-an-ai-agent-can-handle',
  whatantbuildzaiagentcanandcannotdoforindustrialb2bbusinesses: 'what-an-ai-agent-can-and-cannot-do',
  whyaisalesagentsneedproperbusinessknowledgeforindustrialb2bsales: 'why-ai-sales-agents-need-business-knowledge',
  antbuildzaiagentyourfirstdigitalsalestouchpointforindustrialb2benquiries: 'ai-agent-as-first-digital-sales-touchpoint',
  whyantbuildzaiagentworksbetterwithanintegratedwebstore: 'why-ai-agents-work-with-an-integrated-webstore',
  howwebstoreturnsproductcataloguesintoadigitalsaleschannel: 'how-ai-webstore-creates-a-digital-sales-channel',
  howantbuildzaiagenthelpswebstorevisitorsunderstandproducts: 'how-ai-agents-help-webstore-visitors-understand-products',
  howantbuildzaiagentsupportsdifferentindustrialb2benquiryworkflows: 'ai-agent-industrial-enquiry-workflows',
  whyaproductcataloguealoneisnotenough: 'why-a-product-catalogue-is-not-enough',
  howantbuildzaiwebstorehelpsyoucapturemoreleadswithouthiringmoresalespeople: 'how-ai-webstore-helps-capture-sales-enquiries',
  howantbuildzaiwebstoreturnseverymarketingtouchpointintoqualifiedsalesenquiries: 'how-ai-webstore-qualifies-marketing-enquiries',
  whyantbuildzaiwebstoreisdifferentfromanormalcompanywebsite: 'ai-webstore-vs-company-website',
  antbuildzaiagentvsgenericaiagentswhatmakesitdifferentforindustrialb2bbusinesses: 'ai-agent-vs-generic-ai-agents',
  antbuildzaiagentvsgenericaitoolslikechatgptwhyllmaloneisnotenough: 'ai-agent-vs-chatgpt',
  'why-industryspecific-ai-agent-matters-for-industrial-b2b-businesses': 'why-industry-specific-ai-agents-matter',
  howtostructureb2bproductknowledgeforaiwebstoreandaiagent: 'how-to-structure-b2b-product-knowledge',
  howantbuildzcombinesmarketplacewebstorecatalogueandaiagentintoonedigitalsalesecosystem: 'how-antbuildz-connects-webstore-and-ai-agent',
  howantbuildzaiagentlearnsfromyourcataloguewebsitepdfssheetsanddocs: 'how-ai-agents-learn-from-business-knowledge',
  howantbuildzaiagentimprovesovertime: 'how-ai-agents-improve-over-time',
  howtotestandimproveantbuildzaiagentresponses: 'how-to-test-ai-agent-responses',
  whenantbuildzaiagentshouldhandovertoahuman: 'when-ai-agents-should-hand-over-to-humans',
  howtomakeantbuildzaiagentmoreaccurateanduseful: 'how-to-improve-ai-agent-accuracy',
  whyfaqagreementandpolicyarethefoundationofyouraiagent: 'why-faqs-agreements-and-policies-matter-for-ai-agents',
  whatcompanyinformationshouldyouprepareforyouraiagent: 'company-information-to-prepare-for-ai-agents',
  whyenterpriselevelproductdataqualityiscriticalforyouraiagent: 'why-product-data-quality-matters-for-ai-agents',
  whatinformationshouldyoupreparebeforelaunchingyourantbuildzaiagent: 'ai-agent-pre-launch-checklist',
  settingshelpantbuildzaiconsolefeatureguide: 'ai-agent-console-settings-and-help',
  knowledgebaseantbuildzaiconsolefeatureguide: 'ai-agent-console-knowledge-base',
  overviewdashboardantbuildzaiconsolefeatureguide: 'ai-agent-console-overview-dashboard',
  conversationsantbuildzaiconsolefeatureguide: 'ai-agent-console-conversations',
  playgroundantbuildzaiconsolefeatureguide: 'ai-agent-console-playground',
  agentsetupantbuildzaiconsolefeatureguide: 'ai-agent-console-agent-setup',
  inventorymanagementantbuildzaiconsolefeatureguide: 'ai-agent-console-inventory-management',
  dealsantbuildzaiconsolefeatureguide: 'ai-agent-console-deals',
  leadsantbuildzaiconsolefeatureguide: 'ai-agent-console-leads',
  integrationsantbuildzaiconsolefeatureguide: 'ai-agent-console-integrations',
  scenariosantbuildzaiconsolefeatureguide: 'ai-agent-console-scenarios',
  useractivitiesantbuildzaiconsolefeatureguide: 'ai-agent-console-user-activities',
  invoicesantbuildzaiconsolefeatureguide: 'ai-agent-console-invoices',
  paymentmethodsantbuildzaiconsolefeatureguide: 'ai-agent-console-payment-methods',
  billingantbuildzaiconsolefeatureguide: 'ai-agent-console-billing',
};

/**
 * Search metadata for every resource article exposed by the transferred app.
 * The values mirror the approved resource catalogue in the read-only reference
 * project so initial HTML and the hydrated page describe the same article.
 */
const resourceSeoEntriesSource: ResourceSeoEntry[] = [
  {"slug":"ai-sales-agent-for-industrial-businesses","title":"AI Sales Specialist for Industrial Businesses | Antbuildz","description":"Learn how to use Antbuildz AI Sales Specialist for industrial lead qualification, product recommendations, pricing checks, quotation preparation, and sales handover workflows.","datePublished":"2026-08-17","dateModified":"2026-08-19","image":"/resource-articles/ai-agent-roles/ai-sales-agent.jpg","imageAlt":"AI sales specialist helping an industrial buyer compare equipment and prepare a sales enquiry"},
  {"slug":"ai-customer-service-agent-for-industrial-businesses","title":"Industrial AI Customer Service Agent | Antbuildz","description":"Learn how to configure Antbuildz AI for industrial customer service, including order status, rental extensions, delivery enquiries, policy answers, and escalation.","datePublished":"2026-08-17","dateModified":"2026-08-17","image":"/resource-articles/ai-agent-roles/ai-customer-service-agent.jpg","imageAlt":"AI customer service agent helping an industrial equipment customer and coordinating human support"},
  {"slug":"ai-technical-support-agent-for-industrial-businesses","title":"AI Technical Support for Industrial Products | Antbuildz","description":"Learn how Antbuildz AI Technical Support uses approved manuals, specifications, engineering tables, load charts, diagrams, and escalation rules in industrial workflows.","datePublished":"2026-08-17","dateModified":"2026-08-17","image":"/resource-articles/ai-agent-roles/ai-technical-support-agent.jpg","imageAlt":"AI technical support agent and engineer reviewing approved industrial equipment documentation"},
  {"slug":"ai-product-specialist-for-industrial-businesses","title":"AI Product Specialist for Industrial Businesses | Antbuildz","description":"Learn how to use an Antbuildz AI Product Specialist for buyer guidance, product comparison, sales enablement, onboarding, manuals, SOPs, and product knowledge.","datePublished":"2026-08-17","dateModified":"2026-08-17","image":"/resource-articles/ai-agent-roles/ai-product-specialist.jpg","imageAlt":"AI product specialist helping a buyer and employee compare industrial products and retrieve approved documents"},
  {"slug":"ai-after-sales-agent-for-industrial-businesses","title":"Industrial AI After-Sales Support Agent | Antbuildz","description":"Learn how Antbuildz AI supports maintenance, warranty, service intake, manuals, parts identification, compatibility checks, and repeat purchases after delivery.","datePublished":"2026-08-17","dateModified":"2026-08-17","image":"/resource-articles/ai-agent-roles/ai-after-sales-support-agent.jpg","imageAlt":"AI after-sales support agent helping identify compatible industrial equipment parts and service needs"},
  {"slug":"whatisanaisalesagentforindustrialb2bproductsequipmentrentalsales","title":"What Is an AI Sales Agent for Industrial B2B Products, Equipment Rental & Sales | Antbuildz AI Agent Resources","description":"Learn what an AI Sales Agent is, how it supports industrial B2B sales conversations, and how it helps businesses respond faster, qualify leads, and reduce repetitive sales work."},
  {"slug":"howaiagentsdifferfromchatbotswhatb2bindustrialbusinessesneedtoknow","title":"How AI Agents Differ from Chatbots: What B2B Industrial Businesses Need to Know | Antbuildz AI Agent Resources","description":"Understand the difference between normal chatbots and AI Agents, and why industrial B2B businesses need AI that can reason, ask follow-up questions, and follow sales workflows."},
  {"slug":"7keybenefitsofaiagentsforb2bbusinessesintheequipmentindustry","title":"7 Key Benefits of AI Agents for B2B Businesses in the Equipment Industry | Antbuildz AI Agent Resources","description":"Discover how AI Agents help industrial B2B businesses improve response speed, lead qualification, customer engagement, sales productivity, and enquiry conversion."},
  {"slug":"whatkindofenquiriescanantbuildzaiagenthandle","title":"What Kind of Enquiries Can Antbuildz AI Agent Handle? | Antbuildz AI Agent Resources","description":"See the different enquiry types Antbuildz AI Agent can support, including rental, sales, spare parts, service, technical questions, pricing, delivery, and lead capture."},
  {"slug":"whatantbuildzaiagentcanandcannotdoforindustrialb2bbusinesses","title":"What Antbuildz AI Agent Can and Cannot Do for Industrial B2B Businesses | Antbuildz AI Agent Resources","description":"Learn what Antbuildz AI Agent can handle, where it needs business rules, and when human review is still required for technical, pricing, legal, or high-value decisions."},
  {"slug":"whyaisalesagentsneedproperbusinessknowledgeforindustrialb2bsales","title":"Why AI Sales Agents Need Proper Business Knowledge for Industrial B2B Sales | Antbuildz AI Agent Resources","description":"Understand why AI Agents need approved business knowledge, product data, FAQs, policies, and workflows to answer customers accurately and avoid generic responses."},
  {"slug":"antbuildzaiagentyourfirstdigitalsalestouchpointforindustrialb2benquiries","title":"Antbuildz AI Agent: Your First Digital Sales Touchpoint for Industrial B2B Enquiries | Antbuildz AI Agent Resources","description":"Learn how Antbuildz AI Agent acts as the first digital sales layer to engage website visitors, answer questions, qualify leads, and capture deal intent."},
  {"slug":"whyantbuildzaiagentworksbetterwithanintegratedwebstore","title":"Why Antbuildz AI Agent Works Better With an Integrated Webstore | Antbuildz AI Agent Resources","description":"See why Antbuildz AI Agent becomes more powerful when connected to Webstore product data, product pages, specifications, URLs, and structured enquiry workflows."},
  {"slug":"howwebstoreturnsproductcataloguesintoadigitalsaleschannel","title":"How Webstore Turns Product Catalogues Into a Digital Sales Channel | Antbuildz AI Agent Resources","description":"Learn how Antbuildz Webstore turns static product catalogues into searchable, structured, enquiry-ready digital sales channels for rental and sales businesses."},
  {"slug":"howantbuildzaiagenthelpswebstorevisitorsunderstandproducts","title":"How Antbuildz AI Agent Helps Webstore Visitors Understand Products | Antbuildz AI Agent Resources","description":"Understand how Antbuildz AI Agent helps customers read product pages, understand specifications, compare options, and ask better product questions."},
  {"slug":"howantbuildzaiagentsupportsdifferentindustrialb2benquiryworkflows","title":"How Antbuildz AI Agent Supports Different Industrial B2B Enquiry Workflows | Antbuildz AI Agent Resources","description":"Learn how Antbuildz AI Agent supports different workflows for rental, sales, spare parts, service, pricing, delivery, technical questions, and lead capture."},
  {"slug":"whyaproductcataloguealoneisnotenough","title":"Why a Product Catalogue Alone Is Not Enough | Antbuildz AI Agent Resources","description":"Understand why static product catalogues are not enough for industrial B2B sales, and how AI Webstore and AI Agent help guide customers toward better enquiries."},
  {"slug":"howantbuildzaiwebstorehelpsyoucapturemoreleadswithouthiringmoresalespeople","title":"How Antbuildz AI Webstore Helps You Capture More Leads Without Hiring More Salespeople | Antbuildz AI Agent Resources","description":"Learn how Antbuildz AI Webstore helps businesses capture more enquiries, qualify customer needs, and support sales growth without immediately increasing headcount."},
  {"slug":"howantbuildzaiwebstoreturnseverymarketingtouchpointintoqualifiedsalesenquiries","title":"How Antbuildz AI Webstore Turns Every Marketing Touchpoint Into Qualified Sales Enquiries | Antbuildz AI Agent Resources","description":"See how Webstore pages and AI Agent conversations help turn website traffic, ads, QR codes, social media, email, and campaigns into better-qualified sales enquiries."},
  {"slug":"whyantbuildzaiwebstoreisdifferentfromanormalcompanywebsite","title":"Why Antbuildz AI Webstore Is Different From a Normal Company Website | Antbuildz AI Agent Resources","description":"Understand why Antbuildz AI Webstore is more than a normal website, with structured product pages, AI Agent connection, multilingual support, and enquiry workflows."},
  {"slug":"antbuildzaiagentvsgenericaiagentswhatmakesitdifferentforindustrialb2bbusinesses","title":"Antbuildz AI Agent vs Generic AI Agents: What Makes It Different for Industrial B2B Businesses | Antbuildz AI Agent Resources","description":"Learn how Antbuildz AI Agent differs from generic AI agents through industrial B2B logic, Webstore data, enterprise workflows, lead capture, and AI Console control."},
  {"slug":"antbuildzaiagentvsgenericaitoolslikechatgptwhyllmaloneisnotenough","title":"Antbuildz AI Agent vs Generic AI Tools Like ChatGPT: Why LLM Alone Is Not Enough | Antbuildz AI Agent Resources","description":"Understand why ChatGPT and other LLM tools are not the same as a business-ready AI Agent, and why industrial B2B sales needs data, workflows, and business rules."},
  {"slug":"why-industryspecific-ai-agent-matters-for-industrial-b2b-businesses","title":"Why Industry-Specific AI Agent Matters for Industrial B2B Businesses | Antbuildz AI Agent Resources","description":"Learn why industrial B2B businesses need industry-specific AI that understands rental, sales, technical products, workflows, product data, and customer intent."},
  {"slug":"howtostructureb2bproductknowledgeforaiwebstoreandaiagent","title":"How to Structure B2B Product Knowledge for AI Webstore and AI Agent | Antbuildz AI Agent Resources","description":"A practical guide on structuring product categories, specifications, use cases, rental and sales rules, compatibility, pricing, FAQs, and enquiry workflows for AI use."},
  {"slug":"howantbuildzcombinesmarketplacewebstorecatalogueandaiagentintoonedigitalsalesecosystem","title":"How Antbuildz Combines Marketplace, Webstore, Catalogue, and AI Agent Into One Digital Sales Ecosystem | Antbuildz AI Agent Resources","description":"Understand how Antbuildz connects Marketplace, Webstore, Catalogue, and AI Agent into one ecosystem for product discovery, structured data, enquiry capture, and sales follow-up."},
  {"slug":"howantbuildzaiagentlearnsfromyourcataloguewebsitepdfssheetsanddocs","title":"How Antbuildz AI Agent Learns From Your Catalogue, Website, PDFs, Sheets, and Docs | Antbuildz AI Agent Resources","description":"Learn how Antbuildz AI Agent uses your existing business materials as knowledge sources, and why clean, structured, updated information helps the AI perform better."},
  {"slug":"howantbuildzaiagentimprovesovertime","title":"How Antbuildz AI Agent Improves Over Time | Antbuildz AI Agent Resources","description":"Understand how Antbuildz AI Agent improves through conversation review, knowledge base updates, FAQ improvements, workflow refinement, and AI Console management."},
  {"slug":"howtotestandimproveantbuildzaiagentresponses","title":"How to Test and Improve Antbuildz AI Agent Responses | Antbuildz AI Agent Resources","description":"A practical subscriber guide on how to test AI Agent responses using real customer questions, review weak answers, improve workflows, and update AI Console."},
  {"slug":"whenantbuildzaiagentshouldhandovertoahuman","title":"When Antbuildz AI Agent Should Hand Over to a Human | Antbuildz AI Agent Resources","description":"Learn when the AI Agent should continue handling enquiries and when human sales involvement is needed for negotiation, closing, special pricing, complaints, or technical review."},
  {"slug":"howtomakeantbuildzaiagentmoreaccurateanduseful","title":"How to Make Antbuildz AI Agent More Accurate and Useful | Antbuildz AI Agent Resources","description":"A subscriber guide on improving AI Agent accuracy and usefulness through better Webstore data, FAQs, business rules, workflows, lead capture, and conversation review."},
  {"slug":"whyfaqagreementandpolicyarethefoundationofyouraiagent","title":"Why FAQ, Agreement, and Policy Are the Foundation of Your AI Agent | Antbuildz AI Agent Resources","description":"Learn why FAQ, agreement, and policy are core business foundations that help the AI Agent answer correctly, follow company rules, and avoid wrong promises."},
  {"slug":"whatcompanyinformationshouldyouprepareforyouraiagent","title":"What Company Information Should You Prepare for Your AI Agent? | Antbuildz AI Agent Resources","description":"A preparation guide on the company profile, business scope, service areas, product categories, handover contacts, tone of voice, and operating rules your AI Agent needs."},
  {"slug":"whyenterpriselevelproductdataqualityiscriticalforyouraiagent","title":"Why Enterprise-Level Product Data Quality Is Critical for Your AI Agent | Antbuildz AI Agent Resources","description":"Learn why accurate, structured, and updated product data is essential for enterprise-ready AI Agent performance, customer trust, and high-quality sales enquiries."},
  {"slug":"whatinformationshouldyoupreparebeforelaunchingyourantbuildzaiagent","title":"What Information Should You Prepare Before Launching Your Antbuildz AI Agent? | Antbuildz AI Agent Resources","description":"A master pre-launch checklist covering company information, product data, FAQs, agreement terms, policies, pricing rules, workflows, lead capture, handover rules, and testing."},
  {"slug":"settingshelpantbuildzaiconsolefeatureguide","title":"Settings & Help — Antbuildz AI Console Feature Guide | Antbuildz AI Agent Resources","description":"Learn how to configure your AI Console settings, manage your account, customize preferences, and access help resources for a smoother experience."},
  {"slug":"knowledgebaseantbuildzaiconsolefeatureguide","title":"Knowledge Base — Antbuildz AI Console Feature Guide | Antbuildz AI Agent Resources","description":"Learn how to build, organize, and manage your AI Knowledge Base to provide accurate, up-to-date responses for your AI Sales Agent."},
  {"slug":"overviewdashboardantbuildzaiconsolefeatureguide","title":"Overview Dashboard — Antbuildz AI Console Feature Guide | Antbuildz AI Agent Resources","description":"Monitor conversations, leads, AI performance, and business insights from a centralized dashboard designed for efficient AI management."},
  {"slug":"conversationsantbuildzaiconsolefeatureguide","title":"Conversations — Antbuildz AI Console Feature Guide | Antbuildz AI Agent Resources","description":"Learn how to review customer conversations, monitor AI responses, assign chats, and maintain high-quality customer interactions."},
  {"slug":"playgroundantbuildzaiconsolefeatureguide","title":"Playground — Antbuildz AI Console Feature Guide | Antbuildz AI Agent Resources","description":"Test prompts, experiment with AI responses, and evaluate different scenarios before deploying changes to your live AI Agent."},
  {"slug":"agentsetupantbuildzaiconsolefeatureguide","title":"Agent Setup — Antbuildz AI Console Feature Guide | Antbuildz AI Agent Resources","description":"Configure your AI Sales Agent by defining its role, behavior, instructions, and personality to match your business requirements."},
  {"slug":"inventorymanagementantbuildzaiconsolefeatureguide","title":"Inventory Management — Antbuildz AI Console Feature Guide | Antbuildz AI Agent Resources","description":"Manage your equipment, products, services, pricing, and availability to help your AI Agent provide accurate recommendations and quotations."},
  {"slug":"dealsantbuildzaiconsolefeatureguide","title":"Deals — Antbuildz AI Console Feature Guide | Antbuildz AI Agent Resources","description":"Manage sales opportunities, track deal progress, organize pipelines, and improve conversion rates throughout your sales process."},
  {"slug":"leadsantbuildzaiconsolefeatureguide","title":"Leads — Antbuildz AI Console Feature Guide | Antbuildz AI Agent Resources","description":"Capture, organize, qualify, and manage customer leads while monitoring follow-up progress to maximize sales opportunities."},
  {"slug":"integrationsantbuildzaiconsolefeatureguide","title":"Integrations — Antbuildz AI Console Feature Guide | Antbuildz AI Agent Resources","description":"Connect your AI Console with external platforms, business tools, APIs, and messaging channels to automate workflows and data synchronization."},
  {"slug":"scenariosantbuildzaiconsolefeatureguide","title":"Scenarios — Antbuildz AI Console Feature Guide | Antbuildz AI Agent Resources","description":"Create and manage AI conversation scenarios to automate customer interactions, guide workflows, and deliver consistent responses."},
  {"slug":"useractivitiesantbuildzaiconsolefeatureguide","title":"User Activities — Antbuildz AI Console Feature Guide | Antbuildz AI Agent Resources","description":"Monitor user activities, AI actions, and account history to improve collaboration, security, and operational visibility."},
  {"slug":"invoicesantbuildzaiconsolefeatureguide","title":"Invoices — Antbuildz AI Console Feature Guide | Antbuildz AI Agent Resources","description":"Manage invoices, monitor payment status, and keep track of billing records for your subscriptions and business transactions."},
  {"slug":"paymentmethodsantbuildzaiconsolefeatureguide","title":"Payment Methods — Antbuildz AI Console Feature Guide | Antbuildz AI Agent Resources","description":"Add, update, and manage payment methods securely for subscriptions, invoices, and other billing-related services."},
  {"slug":"billingantbuildzaiconsolefeatureguide","title":"Billing — Antbuildz AI Console Feature Guide | Antbuildz AI Agent Resources","description":"Manage your subscription, review billing history, access invoices, and monitor payment information from one place."},
];

export const resourceSeoEntries: ResourceSeoEntry[] = resourceSeoEntriesSource.map((entry) => {
  const slug = RESOURCE_URL_REDIRECTS[entry.slug] ?? entry.slug;
  const override = RESOURCE_POSITIONING_OVERRIDES[slug];
  return {
    ...entry,
    slug,
    ...override,
    title: override?.title ? `${override.title} | Antbuildz AI` : entry.title,
    dateModified: override ? '2026-09-05' : entry.dateModified,
  };
});

export const resourceSeoBySlug = new Map(resourceSeoEntries.map((entry) => [entry.slug, entry]));

export function getResourceRedirect(slug: string) {
  const canonicalSlug = RESOURCE_URL_REDIRECTS[slug];
  return canonicalSlug ? `/resources/${canonicalSlug}` : undefined;
}

export function getResourceSeo(slug: string) {
  return resourceSeoBySlug.get(slug);
}
