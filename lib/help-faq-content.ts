/** Editable AI Help Centre FAQ source. Audited 2026-09-06.
 * Marketplace-only entries remain on antbuildz.com; billing terms follow Pricing.
 * Search, visible answers and FAQ schema all consume this same data. */
export type HelpFaq = { id: string; group: string; question: string; answer: string; href: string; reference: string };
export const HELP_FAQS: readonly HelpFaq[] = [
  {
    "id": "ai-1",
    "group": "about-antbuildz",
    "question": "What is Antbuildz AI?",
    "answer": "Antbuildz AI provides an AI Agent for complex product businesses. It uses approved product knowledge, specifications, inventory and workflows to support sales, rental, product guidance and customer support. Industrial equipment and B2B rental are its strongest specialisations; instruments, electronics, components and technical consumer products can also fit.",
    "href": "/about",
    "reference": "Learn more: About Antbuildz"
  },
  {
    "id": "ai-2",
    "group": "about-antbuildz",
    "question": "What does Antbuildz AI build?",
    "answer": "Antbuildz AI builds a configurable AI Agent for product conversations. AI Webstore Suite adds the connected product, inventory and store layer. AI Agent Console is where your team manages knowledge, instructions, testing, conversations and handover rules.",
    "href": "/about",
    "reference": "Learn more: About Antbuildz"
  },
  {
    "id": "ai-3",
    "group": "about-antbuildz",
    "question": "Who is Antbuildz built for?",
    "answer": "Antbuildz AI is built for businesses whose customers need help understanding, comparing, choosing or using complex products. Examples include equipment rental companies, manufacturers, dealers, industrial suppliers, instrument makers, electronics distributors and technical consumer-product brands.",
    "href": "/who-we-serve",
    "reference": "Explore Who We Serve"
  },
  {
    "id": "ai-4",
    "group": "about-antbuildz",
    "question": "How do the Antbuildz AI products fit together?",
    "answer": "AI Agent is the core product. Sales Specialist, Product Specialist, Customer Service, Technical Support and After-Sales Support are Agent roles. Sales and Rental+ are subscription plans with different capabilities. AI Webstore Suite is the connected product, inventory and store layer; AI Agent Console manages your Agent.",
    "href": "/about",
    "reference": "Learn more: About Antbuildz"
  },
  {
    "id": "ai-7",
    "group": "about-antbuildz",
    "question": "What is the Antbuildz AI Agent?",
    "answer": "Antbuildz AI Agent is the core product for complex product businesses. It uses approved knowledge and connected product data to answer questions, clarify requirements, compare supported options and prepare the next step across sales, rental and support. Your team controls its scope and human handover.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-8",
    "group": "about-antbuildz",
    "question": "What are the available Agent roles?",
    "answer": "The roles are Sales Specialist, Product Specialist, Customer Service, Technical Support and After-Sales Support. AI Sales Agent describes the Sales Specialist role. Choose a role around the conversations your customers need; roles are not subscription plans.",
    "href": "/ai-roles",
    "reference": "Explore Agent roles"
  },
  {
    "id": "ai-9",
    "group": "ai-sales-agent",
    "question": "What is an AI Sales Agent?",
    "answer": "AI Sales Agent is the sales use case of Antbuildz AI Agent. The Sales Specialist role uses approved product knowledge and connected inventory to clarify buyer requirements, compare suitable options and prepare sales enquiries for your team. It is one role of the core AI Agent.",
    "href": "/ai-roles/sales-specialist",
    "reference": "Explore Sales Specialist"
  },
  {
    "id": "ai-10",
    "group": "ai-sales-agent",
    "question": "What is Antbuildz AI Webstore Suite?",
    "answer": "AI Webstore Suite is the product, inventory and store layer connected to your AI Agent. It provides structured catalogue listings and dedicated product pages for complex products, including equipment, instruments, electronics and parts. Sales and rental capabilities depend on your plan and setup.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-11",
    "group": "ai-sales-agent",
    "question": "What is the difference between AI Agent and AI Webstore Suite?",
    "answer": "AI Agent handles customer conversations using approved product knowledge and workflows. AI Webstore Suite adds the connected catalogue, product pages, inventory and store layer. You can start with the Agent without launching a new Webstore.",
    "href": "/resources/why-ai-agents-work-with-an-integrated-webstore",
    "reference": "Read the guide: Why Antbuildz AI Agent Works Better With an Integrated Webstore"
  },
  {
    "id": "ai-12",
    "group": "ai-sales-agent",
    "question": "Do I need AI Webstore Suite to use AI Agent?",
    "answer": "No. AI Agent can be deployed independently and use approved company knowledge and product information. However, combining it with AI Webstore Suite gives the Agent access to a more structured product environment, including listings, specifications, categories, images, links and other connected business data.",
    "href": "/resources/why-ai-agents-work-with-an-integrated-webstore",
    "reference": "Read the guide: Why Antbuildz AI Agent Works Better With an Integrated Webstore"
  },
  {
    "id": "ai-13",
    "group": "ai-sales-agent",
    "question": "How do the Agent, Sales and Rental+ plans differ?",
    "answer": "Agent provides the AI Agent for your existing customer channels. Sales adds AI Webstore Suite sales capabilities, including catalogue and inventory management. Rental+ includes Sales plus rental and booking capabilities. Compare the current plans for included features and limits.",
    "href": "/resources/why-ai-agents-work-with-an-integrated-webstore",
    "reference": "Read the guide: Why Antbuildz AI Agent Works Better With an Integrated Webstore"
  },
  {
    "id": "ai-14",
    "group": "ai-sales-agent",
    "question": "How does AI Webstore Suite support the AI Agent?",
    "answer": "AI Webstore Suite structures product listings, specifications, categories, images and supported inventory fields. When connected, that information gives your AI Agent product context for recommendations and customer questions. The quality and freshness of the source data still matter.",
    "href": "/resources/why-ai-agents-work-with-an-integrated-webstore",
    "reference": "Read the guide: Why Antbuildz AI Agent Works Better With an Integrated Webstore"
  },
  {
    "id": "ai-15",
    "group": "ai-sales-agent",
    "question": "Which Antbuildz AI product should I choose?",
    "answer": "Start with the AI Agent and approved business knowledge. Choose Sales if you also need AI Webstore Suite sales capabilities, or Rental+ for sales plus rental capabilities. Your Agent role defines the conversation it handles; your plan defines the subscribed capabilities and limits.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-16",
    "group": "ai-sales-agent",
    "question": "Can I start with one Antbuildz AI product and add the other later?",
    "answer": "Yes, subject to the current subscription and implementation options. A business can start with its immediate requirement and expand its Antbuildz AI setup as its catalogue, digital sales operation or AI use cases grow.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-17",
    "group": "ai-sales-agent",
    "question": "What types of businesses is Antbuildz AI built for?",
    "answer": "Antbuildz AI is for complex product businesses, with particular strength in industrial equipment, B2B sales and rental. The same approach can support instruments, electronics, components and technical consumer products such as 3D printers where specifications, applications or compatibility shape the decision.",
    "href": "/who-we-serve",
    "reference": "Explore Who We Serve"
  },
  {
    "id": "ai-18",
    "group": "ai-sales-agent",
    "question": "Is Antbuildz AI only for industrial or rental businesses?",
    "answer": "No. Industrial equipment and rental are our strongest specialisations, but the common requirement is product complexity. Instruments, electronics and technical consumer products can also fit when customers need help understanding or choosing products. Bring your catalogue and typical enquiries to a demo so we can assess the fit.",
    "href": "/who-we-serve",
    "reference": "Explore Who We Serve"
  },
  {
    "id": "ai-19",
    "group": "ai-sales-agent",
    "question": "Can manufacturers, dealers, distributors and industrial suppliers use Antbuildz AI?",
    "answer": "Yes. Antbuildz AI is suitable whenever customers need product clarification, technical information, recommendation, availability, quotation support or lead qualification before they can buy or rent.",
    "href": "/who-we-serve",
    "reference": "Explore Who We Serve"
  },
  {
    "id": "ai-20",
    "group": "ai-sales-agent",
    "question": "Can Antbuildz AI support both rental and product sales?",
    "answer": "Yes. The system can be configured around rental and sales enquiries, including product specifications, quantity, location, rental duration, purchase intent, availability, pricing rules and other business-specific requirements.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-21",
    "group": "ai-sales-agent",
    "question": "Can Antbuildz AI be used for customer service and technical support as well as sales?",
    "answer": "Yes. Customer Service, Technical Support, Product Specialist and After-Sales Support are roles alongside Sales Specialist. Define each Agent’s knowledge, instructions and handover boundaries around the job it needs to do. Support conversations do not need to become sales enquiries.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-22",
    "group": "ai-sales-agent",
    "question": "How is Antbuildz AI Agent different from a traditional chatbot?",
    "answer": "Traditional chatbots often follow fixed scripts or answer straightforward FAQs. Antbuildz AI Agent is designed to understand customer intent, identify missing information, ask follow-up questions, retrieve relevant product and company knowledge, follow business workflows, recommend suitable products and capture qualified sales opportunities.",
    "href": "/resources/ai-agents-vs-chatbots-for-industrial-b2b",
    "reference": "Read the guide: How AI Agents Differ from Chatbots"
  },
  {
    "id": "ai-23",
    "group": "ai-sales-agent",
    "question": "How is Antbuildz different from generic AI tools such as ChatGPT?",
    "answer": "A general LLM can provide broad knowledge, but it does not automatically know your current catalogue, inventory, pricing rules, company policies or sales workflow. Antbuildz combines AI models with your approved business knowledge, structured product data, workflow controls, lead capture and AI Agent Console supervision to create a business-ready Agent.",
    "href": "/resources/ai-agent-vs-chatgpt",
    "reference": "Read the guide: Antbuildz AI Agent vs Generic AI Tools Like ChatGPT"
  },
  {
    "id": "ai-24",
    "group": "ai-sales-agent",
    "question": "Why does an industrial business need an industry-specific AI Agent?",
    "answer": "Industrial product decisions often depend on specifications, applications, compatibility, availability and commercial rules. Antbuildz uses approved product knowledge and workflows to guide those conversations. Similar requirements also arise with instruments, electronics and other complex products.",
    "href": "/resources/why-industry-specific-ai-agents-matter",
    "reference": "Read the guide: Why Industry-Specific AI Agent Matters for Industrial B2B Businesses"
  },
  {
    "id": "ai-25",
    "group": "capabilities",
    "question": "What can Antbuildz AI Agent do?",
    "answer": "Depending on configuration, the Agent can answer company and product questions, handle rental and sales enquiries, capture requirements, ask clarification questions, search approved knowledge, recommend suitable products, compare options, capture and qualify leads, recognise buyer intent, support quotation workflows, escalate conversations and support customers outside normal office hours.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-26",
    "group": "capabilities",
    "question": "Can the AI Agent help customers who do not know exactly what they need?",
    "answer": "Yes. The Agent can ask relevant clarification questions about application, capacity, dimensions, operating environment, location, rental duration, quantity, budget or other constraints before suggesting suitable products. This is useful when buyers describe a job or problem instead of naming a specific model.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-27",
    "group": "capabilities",
    "question": "Can the AI Agent recommend products from my own catalogue?",
    "answer": "Yes. The Agent can be configured to retrieve and recommend products from your approved catalogue and connected product data. You can also define boundaries so it recommends only approved products and brands.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-28",
    "group": "capabilities",
    "question": "Can the AI Agent compare different products?",
    "answer": "Yes. It can compare available products using relevant specifications and the customer requirements and explain why particular options appear more suitable. For complex technical decisions, it should state assumptions or identify missing information instead of making unsupported claims.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-29",
    "group": "capabilities",
    "question": "Can the AI Agent ask clarification questions before recommending a product?",
    "answer": "Yes. The Agent can be configured to collect missing information before it recommends a product. For industrial enquiries this can include application, capacity, dimensions, environment, duty, quantity, location, rental duration, budget or delivery timeline.",
    "href": "/resources/what-is-an-ai-sales-agent",
    "reference": "Read the guide: What Is an AI Sales Agent for Industrial B2B Products, Equipment Rental & Sales"
  },
  {
    "id": "ai-30",
    "group": "capabilities",
    "question": "Can the AI Agent capture and qualify leads?",
    "answer": "Yes. It can capture information such as customer and company details, product requirement, location, budget, quantity, timeline, rental duration and purchase or rental intent. It can also identify urgency and sales readiness so the sales team can prioritise stronger opportunities.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-31",
    "group": "capabilities",
    "question": "Can the AI Agent work outside business hours?",
    "answer": "Yes. The Agent can respond to supported customer enquiries outside normal office hours, helping businesses engage customers across different time zones subject to service availability.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-32",
    "group": "capabilities",
    "question": "Can the AI Agent support multiple languages?",
    "answer": "Yes. Antbuildz AI Agent supports multilingual customer conversations. Language quality can vary by language, terminology and the quality of the underlying knowledge, so important technical terminology should be tested in the languages your customers use.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-33",
    "group": "capabilities",
    "question": "What information can I train the AI Agent with?",
    "answer": "Depending on supported formats and integrations, knowledge can include product catalogues, technical manuals, specifications, pricing information, rental and sales terms, FAQs, company policies, websites, documents, spreadsheets, structured Webstore product data and other approved company knowledge. Use current, accurate sources wherever possible.",
    "href": "/resources/how-ai-agents-learn-from-business-knowledge",
    "reference": "Read the guide: How Antbuildz AI Agent Learns From Your Catalogue, Website, PDFs, Sheets and Docs"
  },
  {
    "id": "ai-34",
    "group": "capabilities",
    "question": "Can Antbuildz AI read catalogues, PDFs, websites, spreadsheets and documents?",
    "answer": "Yes. Antbuildz is designed to ingest knowledge from multiple business sources, including catalogues, manuals, documents, websites and structured files. Retrieval quality depends heavily on the quality and structure of the source material, so complex technical content should be validated during testing.",
    "href": "/resources/how-ai-agents-learn-from-business-knowledge",
    "reference": "Read the guide: How Antbuildz AI Agent Learns From Your Catalogue, Website, PDFs, Sheets and Docs"
  },
  {
    "id": "ai-35",
    "group": "capabilities",
    "question": "Can the AI Agent understand technical specifications, tables, charts and engineering data?",
    "answer": "Antbuildz AI is designed for technical and industrial knowledge and can work with specifications, structured tables and technical documents. It can also work with more complex performance or engineering charts where ingestion and retrieval are configured correctly. Safety-critical answers should be checked against authoritative manufacturer data, and the Agent should not invent missing chart values.",
    "href": "/resources/how-ai-agents-learn-from-business-knowledge",
    "reference": "Read the guide: How Antbuildz AI Agent Learns From Your Catalogue, Website, PDFs, Sheets and Docs"
  },
  {
    "id": "ai-36",
    "group": "capabilities",
    "question": "Can the AI Agent reason about customer requirements instead of only searching keywords?",
    "answer": "Yes. The Agent is designed to combine several customer requirements with relevant product knowledge and business rules. It can identify constraints, ask for missing information, retrieve suitable products and compare available options rather than matching a single keyword.",
    "href": "/resources/what-is-an-ai-sales-agent",
    "reference": "Read the guide: What Is an AI Sales Agent for Industrial B2B Products, Equipment Rental & Sales"
  },
  {
    "id": "ai-37",
    "group": "capabilities",
    "question": "Can the AI Agent use general AI knowledge together with my company knowledge?",
    "answer": "Yes, when enabled. General AI knowledge can help with general explanations, terminology and broad technical context. Company-specific products, prices, availability, policies and commercial commitments should rely on your approved knowledge and connected data. Product recommendations can be restricted to your own approved catalogue.",
    "href": "/resources/ai-agent-vs-chatgpt",
    "reference": "Read the guide: Antbuildz AI Agent vs Generic AI Tools Like ChatGPT"
  },
  {
    "id": "ai-38",
    "group": "capabilities",
    "question": "Can I restrict the AI Agent to my own products and brands?",
    "answer": "Yes. You can define product and recommendation boundaries so the Agent works within your approved catalogue or brand portfolio. If no suitable approved product exists, it should say that it cannot identify a suitable approved option rather than inventing one.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-39",
    "group": "capabilities",
    "question": "What happens if the AI Agent does not know the answer?",
    "answer": "It should not guess. The preferred behaviour is to ask for additional information where appropriate, explain that it cannot confidently verify the answer, or escalate the question to a human team member.",
    "href": "/resources/how-to-test-ai-agent-responses",
    "reference": "Read the guide: How to Test and Improve Antbuildz AI Agent Responses"
  },
  {
    "id": "ai-40",
    "group": "capabilities",
    "question": "How does Antbuildz reduce AI hallucination?",
    "answer": "No credible AI system can guarantee zero hallucination. Antbuildz reduces risk by combining approved knowledge, retrieval, structured product data, clear Agent instructions, product boundaries, workflow controls, testing, conversation monitoring and human escalation. For technical or commercial questions, verified source information should take priority over unsupported model assumptions.",
    "href": "/resources/ai-agent-console-knowledge-base",
    "reference": "Read the guide: Knowledge Base — AI Agent Console Feature Guide"
  },
  {
    "id": "ai-41",
    "group": "capabilities",
    "question": "Can the AI Agent access my inventory and product availability?",
    "answer": "Yes, when the Agent is connected to a supported Webstore, inventory source or integration. Availability-sensitive answers should come from the connected source rather than static general knowledge.",
    "href": "/resources/why-ai-agents-work-with-an-integrated-webstore",
    "reference": "Read the guide: Why Antbuildz AI Agent Works Better With an Integrated Webstore"
  },
  {
    "id": "ai-42",
    "group": "capabilities",
    "question": "Can the AI Agent compare products and recommend a suitable option?",
    "answer": "Yes. It can compare products against the customer requirements and explain which options appear more suitable. For technical equipment, the Agent should also identify important assumptions or missing requirements before making a recommendation.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-43",
    "group": "control-security",
    "question": "Will updates to my Webstore catalogue be available to the AI Agent?",
    "answer": "When Webstore synchronisation is enabled, structured product information such as listings, specifications, categories, images and links can be synchronised for use by the Agent. The exact update timing depends on the integration and data workflow.",
    "href": "/resources/why-ai-agents-work-with-an-integrated-webstore",
    "reference": "Read the guide: Why Antbuildz AI Agent Works Better With an Integrated Webstore"
  },
  {
    "id": "ai-44",
    "group": "control-security",
    "question": "Can Antbuildz AI connect to my existing website, inventory or business systems?",
    "answer": "Antbuildz AI can support integrations depending on the target system and the available connection method. Possible sources can include Webstore data, APIs, spreadsheets or other supported systems. Custom integrations should be assessed individually before they are promised as available.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-45",
    "group": "control-security",
    "question": "Can I connect spreadsheets or external data sources?",
    "answer": "Yes, where the relevant import or integration method is supported. Spreadsheets are useful for structured product, pricing or inventory data, but the source should have consistent fields and current values to improve retrieval quality.",
    "href": "/resources/how-ai-agents-learn-from-business-knowledge",
    "reference": "Read the guide: How Antbuildz AI Agent Learns From Your Catalogue, Website, PDFs, Sheets and Docs"
  },
  {
    "id": "ai-46",
    "group": "control-security",
    "question": "Can I control what my AI Agent is allowed to say or do?",
    "answer": "Yes. Businesses can configure instructions, knowledge sources, product boundaries, pricing behaviour, qualification logic, workflows and escalation rules. The Agent should operate within those approved boundaries.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-47",
    "group": "control-security",
    "question": "Can I stop the AI Agent from giving final pricing or commercial commitments?",
    "answer": "Yes. You can configure the Agent to explain products and collect requirements while requiring a human or approved workflow to provide final pricing, discounts, contractual commitments or other sensitive commercial decisions.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-48",
    "group": "control-security",
    "question": "Can my sales team take over a customer conversation?",
    "answer": "Yes, where the deployed workflow supports human handover. The Agent should escalate when a conversation requires human judgement, negotiation, unusual commercial approval, safety-critical advice or information outside its authorised scope.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-49",
    "group": "control-security",
    "question": "Can I review conversations handled by my AI Agent?",
    "answer": "Yes. Conversation monitoring helps your team review customer questions, identify knowledge gaps, spot weak responses, evaluate lead quality and improve Agent instructions and business knowledge. Access should follow the user permissions in the AI Agent Console.",
    "href": "/resources/how-ai-agents-improve-over-time",
    "reference": "Read the guide: How Antbuildz AI Agent Improves Over Time"
  },
  {
    "id": "ai-50",
    "group": "control-security",
    "question": "Does the AI Agent automatically learn from every customer conversation?",
    "answer": "Do not treat every conversation as automatic training. Conversations can reveal gaps and improvement opportunities, but changes to knowledge or Agent behaviour should be reviewed and intentionally applied rather than allowing uncontrolled self-learning.",
    "href": "/resources/how-ai-agents-improve-over-time",
    "reference": "Read the guide: How Antbuildz AI Agent Improves Over Time"
  },
  {
    "id": "ai-51",
    "group": "control-security",
    "question": "How do I test and improve my AI Agent?",
    "answer": "Test it with real customer questions, different phrasings, incomplete enquiries, product-retrieval cases, technical scenarios and cases where the correct response should be escalation. Review weak responses, then improve the knowledge base, Agent instructions or workflow and retest.",
    "href": "/resources/how-to-test-ai-agent-responses",
    "reference": "Read the guide: How to Test and Improve Antbuildz AI Agent Responses"
  },
  {
    "id": "ai-52",
    "group": "control-security",
    "question": "Is my company knowledge private?",
    "answer": "Antbuildz is designed to isolate subscriber knowledge so one customer's private business knowledge is not exposed to another subscriber. Access should follow the configured subscriber permissions and current service terms.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-53",
    "group": "control-security",
    "question": "Will my company data be used to train public AI models?",
    "answer": "Antbuildz's stated product position is that subscriber company knowledge is kept private, isolated from other customers and not used to train public external AI models. The current Antbuildz privacy and service terms remain the authoritative source for contractual data-processing commitments.",
    "href": "/agreements",
    "reference": "See the applicable terms: Agreements & Policies"
  },
  {
    "id": "ai-54",
    "group": "control-security",
    "question": "Can other Antbuildz customers access my company data?",
    "answer": "Private subscriber knowledge is intended to remain isolated to the authorised subscriber environment. Other customers should not be able to access your private knowledge unless you deliberately publish information through a public surface.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-55",
    "group": "control-security",
    "question": "Can I remove or update uploaded knowledge?",
    "answer": "Yes, subject to the current Knowledge Base features and permissions. Businesses should update or remove obsolete information so the Agent is not relying on outdated product, pricing, policy or company content.",
    "href": "/resources/ai-agent-console-knowledge-base",
    "reference": "Read the guide: Knowledge Base — AI Agent Console Feature Guide"
  },
  {
    "id": "ai-56",
    "group": "control-security",
    "question": "Can I control which knowledge the Agent can access?",
    "answer": "Yes. The Agent should use only the knowledge sources, product data and connected systems that the subscriber has authorised for that Agent or use case, subject to the current configuration and permission model.",
    "href": "/resources/ai-agent-console-knowledge-base",
    "reference": "Read the guide: Knowledge Base — AI Agent Console Feature Guide"
  },
  {
    "id": "ai-57",
    "group": "implementation",
    "question": "Do I need technical knowledge to set up an AI Agent?",
    "answer": "No advanced AI expertise should be required for normal setup. Your team mainly needs to define the Agent role, provide relevant knowledge, configure business rules and test responses. More complex system integrations may require technical implementation.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-58",
    "group": "implementation",
    "question": "How long does setup normally take?",
    "answer": "Standard self-deployment is designed to be fast when the product catalogue and company knowledge are ready. The actual time depends on the amount and quality of knowledge, the complexity of the workflow and whether custom integrations are required.",
    "href": "/resources/what-is-an-ai-sales-agent",
    "reference": "Read the guide: What Is an AI Sales Agent for Industrial B2B Products, Equipment Rental & Sales"
  },
  {
    "id": "ai-59",
    "group": "implementation",
    "question": "Can I test the AI Agent before launching it?",
    "answer": "Yes. Testing before public deployment is strongly recommended. Test representative customer questions, product retrieval, edge cases, technical scenarios, business rules and escalation behaviour before going live.",
    "href": "/resources/how-to-test-ai-agent-responses",
    "reference": "Read the guide: How to Test and Improve Antbuildz AI Agent Responses"
  },
  {
    "id": "ai-60",
    "group": "implementation",
    "question": "Will Antbuildz help with onboarding and training?",
    "answer": "Antbuildz provides product guidance, resources and support materials, and may provide onboarding assistance depending on the subscribed service and implementation. Complex deployments can require additional implementation support.",
    "href": "/resources",
    "reference": "Explore related AI Agent guides"
  },
  {
    "id": "ai-61",
    "group": "implementation",
    "question": "How do I get started with AI Agent?",
    "answer": "Start by defining what the Agent should do, which products or services it should support, what knowledge it can use, what information it should collect, which commercial actions it may take and when it should escalate. Then add the relevant knowledge and test the Agent before launch.",
    "href": "/ai-agent",
    "reference": "Learn more: AI Agent"
  },
  {
    "id": "ai-62",
    "group": "webstore-suite",
    "question": "Why does my business need AI Webstore Suite?",
    "answer": "AI Webstore Suite adds a structured digital catalogue, product pages and inventory context to your AI Agent. It is built from equipment, rental and industrial sales experience and can also support other complex products. Use it when customers need to browse product information as well as ask questions.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-63",
    "group": "webstore-suite",
    "question": "Why should I use AI Webstore Suite if I already have a website?",
    "answer": "A traditional corporate website may explain your company but may not provide structured product discovery, rental functions, inventory management, quotation workflows or AI-ready product data. AI Webstore Suite can operate as the product and transaction layer alongside an existing corporate website rather than necessarily replacing it.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-64",
    "group": "webstore-suite",
    "question": "How can AI Webstore Suite help grow my business?",
    "answer": "It can help put more of your catalogue online, improve product discovery, capture enquiries, strengthen your digital brand, support SEO and AI-search visibility, support rental and sales workflows and connect visitors with your AI Agent. Actual results depend on catalogue quality, market, implementation and marketing execution.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-65",
    "group": "webstore-suite",
    "question": "What features are included in AI Webstore Suite?",
    "answer": "Capabilities can include product and inventory management, sales and rental listings, enquiry and quotation tools, store analytics, content pages and multilingual content. Sales adds sales Webstore capabilities; Rental+ includes sales plus rental capabilities. Available features and integrations depend on the current plan and setup.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-66",
    "group": "webstore-suite",
    "question": "Can I use AI Webstore Suite worldwide?",
    "answer": "AI Webstore Suite is designed for businesses in different markets. Confirm subscription availability, supported languages and any payment, tax or integration requirements for your market during setup.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-67",
    "group": "webstore-suite",
    "question": "Can businesses from any country subscribe?",
    "answer": "Antbuildz AI is designed for international use. Subscription availability, billing methods and specific services may vary by market, so businesses should check the current signup and pricing options or contact Antbuildz.",
    "href": "/pricing",
    "reference": "Learn more: Pricing"
  },
  {
    "id": "ai-68",
    "group": "webstore-suite",
    "question": "Is AI Webstore Suite mobile-friendly?",
    "answer": "Yes. Customer-facing Webstore pages are designed to work across desktop, tablet and mobile devices.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-69",
    "group": "webstore-suite",
    "question": "Does AI Webstore Suite support multiple languages?",
    "answer": "Yes. The Webstore supports multilingual capabilities to help businesses serve customers across different language markets. The number and availability of supported languages may change as the product evolves.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-70",
    "group": "webstore-suite",
    "question": "Is AI Webstore Suite optimised for SEO and GEO?",
    "answer": "Yes. The Webstore is designed with structured product and category pages and supports content such as resources, FAQs and other pages that can improve discoverability by traditional search engines and AI-driven discovery systems. Results still depend on content quality, competition, domain authority and execution.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-71",
    "group": "webstore-suite",
    "question": "Is there a free trial?",
    "answer": "Trial availability can depend on the current plan, market and promotion. Refer to the latest Antbuildz pricing page or contact the team for the current offer.",
    "href": "/pricing",
    "reference": "Learn more: Pricing"
  },
  {
    "id": "ai-72",
    "group": "webstore-suite",
    "question": "How do I subscribe to Antbuildz AI?",
    "answer": "Choose the AI product or package that fits your requirements and start through the current Antbuildz signup or pricing process. For more complex implementations, discuss your catalogue, integrations and Agent requirements with Antbuildz before deployment.",
    "href": "/pricing",
    "reference": "Learn more: Pricing"
  },
  {
    "id": "ai-73",
    "group": "webstore-suite",
    "question": "How much does Antbuildz AI cost?",
    "answer": "Pricing depends on your plan, subscription period, usage and any additional implementation requirements. View Pricing for current prices, included AI conversations, credit packs and add-ons.",
    "href": "/pricing",
    "reference": "Learn more: Pricing"
  },
  {
    "id": "ai-74",
    "group": "webstore-suite",
    "question": "Can I switch or change my subscription plan?",
    "answer": "Available upgrades, downgrades and plan changes depend on the current subscription terms. Check your billing dashboard or contact Antbuildz before changing an active subscription.",
    "href": "/pricing",
    "reference": "Learn more: Pricing"
  },
  {
    "id": "ai-75",
    "group": "webstore-suite",
    "question": "Do I need to be a designer or developer to use AI Webstore Suite?",
    "answer": "No. AI Webstore Suite is designed so business teams can manage products, content and store information without building a website from scratch. Technical support may still be required for custom domains, integrations or advanced configurations.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-76",
    "group": "webstore-suite",
    "question": "Will I receive setup guidance or training?",
    "answer": "Yes. Antbuildz provides product guidance, tutorials and support resources, and may provide onboarding assistance depending on the subscribed service.",
    "href": "/resources",
    "reference": "Explore related AI Agent guides"
  },
  {
    "id": "ai-77",
    "group": "webstore-suite",
    "question": "How can I customise my Webstore design?",
    "answer": "Businesses can customise relevant branding, text, layouts and store content within the current Webstore capabilities. The exact customisation options depend on the subscribed plan and product features.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-78",
    "group": "webstore-suite",
    "question": "What pages can I create besides product listings?",
    "answer": "Depending on current features, businesses can create supporting pages such as Resources or blog content, FAQs, agreements, company information and other content pages. These pages can also support SEO, GEO and customer education.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-79",
    "group": "webstore-suite",
    "question": "Can I use my own domain name?",
    "answer": "Yes. A Webstore can use an Antbuildz subdomain by default, while custom-domain setup is available subject to the current plan and configuration.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-80",
    "group": "webstore-suite",
    "question": "Does AI Webstore Suite include a checkout payment gateway?",
    "answer": "Complex product purchases often need specification checks, availability confirmation or a quotation before an order. AI Webstore Suite supports the enquiry and sales or rental journey through the capabilities in your setup. Confirm any payment gateway or checkout requirements before subscribing.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-81",
    "group": "webstore-suite",
    "question": "Does AI Webstore Suite support automatic currency conversion?",
    "answer": "The platform supports international pricing and multi-market use. Currency display and conversion capabilities depend on the current configuration. Final commercial transactions should always use the currency and amount confirmed by the seller.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-82",
    "group": "webstore-suite",
    "question": "How do I list products on my Webstore?",
    "answer": "Add products through the Webstore dashboard with relevant information such as product name, category, brand, model, specifications, images, pricing or rental information and availability. Businesses with large catalogues can use supported bulk-upload options.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-83",
    "group": "webstore-suite",
    "question": "Is there a limit to the number of products I can list?",
    "answer": "Product limits depend on the subscribed plan. Businesses with larger catalogues can check the current plan capacity or contact Antbuildz for an appropriate solution.",
    "href": "/pricing",
    "reference": "Learn more: Pricing"
  },
  {
    "id": "ai-84",
    "group": "webstore-suite",
    "question": "Can I bulk upload hundreds or thousands of products?",
    "answer": "Yes. Antbuildz supports bulk product onboarding for large catalogues using structured data such as spreadsheets or other supported import processes. The required format and implementation method depend on your product data.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-87",
    "group": "webstore-suite",
    "question": "Are there restrictions on rental or sales product listings?",
    "answer": "Yes. Listings must comply with Antbuildz listing policies and applicable laws. Product descriptions, photos, specifications, availability and pricing information should be accurate and not misleading.",
    "href": "/agreements",
    "reference": "Learn more: Agreements & Policies"
  },
  {
    "id": "ai-88",
    "group": "webstore-suite",
    "question": "Can I feature brands that my company does not own?",
    "answer": "You should only display, market or sell brands where your company has the legal right to do so. You are responsible for obtaining any necessary authorisation to use brand names, logos, images or other intellectual property.",
    "href": "/agreements",
    "reference": "Learn more: Agreements & Policies"
  },
  {
    "id": "ai-89",
    "group": "webstore-suite",
    "question": "Will I need additional staff to manage my Webstore?",
    "answer": "Not necessarily. The Webstore is designed to reduce manual work around product presentation, enquiries and digital sales operations. The actual staffing requirement depends on catalogue size, transaction volume and internal workflow.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-90",
    "group": "webstore-suite",
    "question": "How will I be notified about rentals or sales generated through my Webstore?",
    "answer": "The Webstore provides customer-enquiry and notification functions through the available platform channels. Current notification channels may include the Webstore workspace and email, with other channels depending on integration.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-91",
    "group": "webstore-suite",
    "question": "What payment terms apply to transactions managed through my Webstore?",
    "answer": "For direct Webstore transactions, use the terms agreed between your business and the customer. Your AI Agent should follow approved pricing and commercial rules and leave final commitments to the authorised team or workflow.",
    "href": "/agreements",
    "reference": "Learn more: Agreements & Policies"
  },
  {
    "id": "ai-92",
    "group": "webstore-suite",
    "question": "Who is responsible for product warranties on a Webstore?",
    "answer": "The Webstore owner or product seller is responsible for defining and fulfilling the applicable product warranty. Warranty terms should be stated clearly in product information or transaction documents.",
    "href": "/agreements",
    "reference": "Learn more: Agreements & Policies"
  },
  {
    "id": "ai-93",
    "group": "webstore-suite",
    "question": "What happens if a product becomes unavailable after a customer places an order or enquiry?",
    "answer": "Update the customer as soon as possible. Where appropriate, offer an alternative product, revised delivery date or refund according to the applicable transaction terms. Keeping inventory information current reduces this risk.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-94",
    "group": "webstore-suite",
    "question": "Can I track the performance of my Webstore?",
    "answer": "Yes. AI Webstore Suite includes analytics and traffic insights that can help businesses understand Webstore activity and performance. The specific metrics available depend on the current analytics features.",
    "href": "/ai-webstore-suite",
    "reference": "Learn more: AI Webstore Suite"
  },
  {
    "id": "ai-95",
    "group": "subscriptions",
    "question": "What is the difference between included AI conversations and AI Conversation Credits?",
    "answer": "Your plan includes a monthly AI conversation allowance. Purchased AI Conversation Credits add capacity after that allowance is used. Monthly allowances reset and do not roll over; purchased credits do not expire. See Pricing for the current conversation definition and usage terms.",
    "href": "/pricing",
    "reference": "Learn more: Pricing"
  },
  {
    "id": "ai-96",
    "group": "subscriptions",
    "question": "What happens when my included AI conversations are used up?",
    "answer": "Purchased AI Conversation Credits are used after the included monthly allowance is exhausted. You can purchase a credit pack or expressly enable Auto Top-Up. Check your remaining balance and billing settings before relying on additional capacity.",
    "href": "/pricing",
    "reference": "Learn more: Pricing"
  },
  {
    "id": "ai-97",
    "group": "subscriptions",
    "question": "Can I purchase more AI Conversation Credits?",
    "answer": "Yes. Choose a credit pack or expressly enable Auto Top-Up through the available billing options. AI Conversation Credits add enquiry capacity; plan upgrades add business capabilities. View Pricing for current packs, Auto Top-Up behaviour and terms.",
    "href": "/pricing",
    "reference": "Learn more: Pricing"
  },
  {
    "id": "ai-98",
    "group": "subscriptions",
    "question": "Can I add more AI Agents?",
    "answer": "Additional Agent capacity may be available depending on the subscription. Businesses that need multiple Agents for different brands, teams, markets or use cases should check the current plan or contact Antbuildz.",
    "href": "/pricing",
    "reference": "Learn more: Pricing"
  },
  {
    "id": "ai-99",
    "group": "subscriptions",
    "question": "Can I cancel my Antbuildz AI subscription?",
    "answer": "Cancellation is subject to the current subscription and billing terms. Review your billing settings and applicable subscription conditions before cancelling.",
    "href": "/pricing",
    "reference": "Learn more: Pricing"
  },
  {
    "id": "ai-100",
    "group": "subscriptions",
    "question": "Where can I see current Antbuildz AI pricing?",
    "answer": "Use the live Antbuildz pricing page as the source of truth for current plan pricing, conversation allowances, top-ups, add-ons and promotional offers.",
    "href": "/pricing",
    "reference": "Learn more: Pricing"
  }
];
export const HELP_FAQ_GROUPS = [
  {
    "id": "about-antbuildz",
    "eyebrow": "Start here",
    "title": "About Antbuildz AI",
    "summary": "The product hierarchy and who it is built for."
  },
  {
    "id": "ai-sales-agent",
    "eyebrow": "AI Agent",
    "title": "Agent foundations",
    "summary": "Roles, complex products and sales, rental and support conversations."
  },
  {
    "id": "capabilities",
    "eyebrow": "Capabilities",
    "title": "Product intelligence & recommendations",
    "summary": "Product matching, knowledge, customer requirements and connected inventory."
  },
  {
    "id": "control-security",
    "eyebrow": "Control & security",
    "title": "Knowledge, governance & integrations",
    "summary": "Approved data, team controls and supported connections."
  },
  {
    "id": "implementation",
    "eyebrow": "Implementation",
    "title": "Setup & launch",
    "summary": "Deploying, testing and improving your AI Agent."
  },
  {
    "id": "webstore-suite",
    "eyebrow": "AI Webstore Suite",
    "title": "Webstore, catalogue & transactions",
    "summary": "The connected product, inventory and store layer."
  },
  {
    "id": "subscriptions",
    "eyebrow": "Plans",
    "title": "Subscriptions & scale",
    "summary": "Monthly allowances, AI Conversation Credits, additional Agents and plans."
  }
] as const;

const normalise = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
export function searchHelpFaqs(query: string, faqs: readonly HelpFaq[] = HELP_FAQS) {
  const terms = normalise(query).split(' ').filter(term => term.length > 1);
  return faqs.filter(faq => terms.every(term => normalise(`${faq.question} ${faq.answer} ${faq.reference}`).includes(term)));
}
