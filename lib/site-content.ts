export type Solution = {
  slug: string;
  navLabel: string;
  accent: string;
  summary: string;
  image: string;
  audiences: string[];
  workflow: [string, string, string];
  outcome: string;
  example: string;
};

export const solutions: Solution[] = [
  {
    slug: 'rental-businesses',
    navLabel: 'Rental & Leasing',
    accent: 'Equipment Rental Companies',
    summary: 'Qualify rental enquiries by job, capacity, hire dates, site conditions and delivery needs, then recommend suitable options from your approved fleet data.',
    image: '/images/solution-rental.jpg',
    audiences: ['Machinery and equipment rental', 'Access and material-handling fleets', 'Multi-location hire businesses'],
    workflow: ['Define the hire requirement', 'Shortlist suitable fleet options', 'Prepare a quote-ready handover'],
    outcome: 'Give your rental desk a commercially useful handover instead of another incomplete enquiry.',
    example: 'Need a 5 t electric forklift for 12 weeks, lifting to 6 m inside a warehouse with 4.2 m aisles.',
  },
  {
    slug: 'manufacturers-brands',
    navLabel: 'Manufacturers & OEMs',
    accent: 'Manufacturers and OEMs',
    summary: 'Answer technical product questions from approved data, compare suitable models and route application-ready enquiries to sales or engineering.',
    image: '/images/solution-manufacturers.jpg',
    audiences: ['Equipment and machinery manufacturers', 'Technical product brands', 'OEM application teams'],
    workflow: ['Define the application', 'Compare approved options', 'Route the qualified enquiry'],
    outcome: 'Turn repeat technical questions into application-ready opportunities for the right market team.',
    example: 'Need a stainless pump for 42 m³/h at 18 m head, process water at 45°C, 400 V / 50 Hz.',
  },
  {
    slug: 'dealers-distributors',
    navLabel: 'Dealers & Distributors',
    accent: 'Equipment Dealers and Distributors',
    summary: 'Guide buyers across approved multi-brand ranges, explain relevant model differences and route qualified opportunities to the right branch.',
    image: '/images/solution-dealers.jpg',
    audiences: ['Multi-brand equipment dealers', 'Technical product distributors', 'Regional sales teams'],
    workflow: ['Define the buyer requirement', 'Compare approved models', 'Route the qualified enquiry'],
    outcome: 'Turn a large multi-brand catalogue into one guided sales conversation.',
    example: 'Need a battery boom lift with 20 m working height and 10 m outreach for outdoor up-and-over access.',
  },
  {
    slug: 'industrial-mro',
    navLabel: 'Industrial & MRO',
    accent: 'Industrial and MRO Suppliers',
    summary: 'Turn a plain-language maintenance need into technical attributes, approved SKU matches, compatible alternatives and a structured RFQ.',
    image: '/images/solution-mro.jpg',
    audiences: ['Maintenance and engineering teams', 'MRO distributors', 'Plants and service contractors'],
    workflow: ['Capture the requirement', 'Confirm the specification', 'Prepare the RFQ'],
    outcome: 'Give technical sales teams the product context they need to respond accurately.',
    example: 'Need a 2-inch abrasion-resistant hose for hydraulic oil at 180 bar and 90°C, 12 m long.',
  },
  {
    slug: 'hardware-trade-supplies',
    navLabel: 'Hardware & Trade',
    accent: 'Tools and Hardware Suppliers',
    summary: 'Guide trade buyers from the job and material to approved tools, fixings, consumables, compatible accessories and a complete quotation enquiry.',
    image: '/images/solution-hardware.jpg',
    audiences: ['Hardware and building supply stores', 'Power-tool dealers', 'Trade and contractor supply teams'],
    workflow: ['Define the job and material', 'Build the approved basket', 'Prepare the quote enquiry'],
    outcome: 'Move buyers from a job requirement to a complete, compatible product basket.',
    example: 'Need four 18 V cordless drill sets, spare batteries and cobalt bits for 316 stainless steel.',
  },
  {
    slug: 'building-engineering',
    navLabel: 'Building & Engineering',
    accent: 'Building Material Suppliers',
    summary: 'Capture project specifications, grades, quantities, standards, delivery stages and site needs before preparing a structured materials RFQ.',
    image: '/images/solution-building.jpg',
    audiences: ['Building product manufacturers', 'Contractors and specialist trades', 'Consultants and project teams'],
    workflow: ['Define the project requirement', 'Confirm the specification', 'Prepare the structured RFQ'],
    outcome: 'Turn incomplete project information into a review-ready RFQ.',
    example: 'Pricing aluminium façade panels for a high-rise project with phased floor-by-floor delivery.',
  },
  {
    slug: 'parts-aftermarket',
    navLabel: 'Parts & Aftermarket',
    accent: 'Spare-Parts Suppliers',
    summary: 'Use equipment make, model, serial range and approved fitment data to identify suitable parts, replacements and service kits.',
    image: '/images/solution-parts.jpg',
    audiences: ['Equipment parts suppliers', 'Dealers and service centres', 'Aftermarket distributors'],
    workflow: ['Identify the asset', 'Check approved fitment', 'Prepare the parts enquiry'],
    outcome: 'Help customers reach the right part faster while keeping final fitment with your specialists.',
    example: 'Need a hydraulic return filter for a 2019 24-ton excavator at its 4,000-hour service.',
  },
  {
    slug: 'buggies-commercial-vehicles',
    navLabel: 'Buggies & Vehicles',
    accent: 'Buggy & Vehicle Businesses',
    summary: 'Qualify rental or sales enquiries by seating, payload, route, hire period and quantity, then recommend supported fleet options.',
    image: '/images/solution-vehicles.png',
    audiences: ['Utility buggy fleets', 'Delivery and service vehicles', 'Passenger and specialised fleets'],
    workflow: ['Define the rental or sales need', 'Compare supported vehicles', 'Prepare the quote-ready brief'],
    outcome: 'Create a structured fleet brief with the requirements needed for quotation and specialist review.',
    example: 'Need six electric utility buggies with cargo beds, 350 kg payload and weather protection for six months.',
  },
];

export const productRoutes = [
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
] as const;

export const allStaticSlugs = [...productRoutes, ...solutions.map((item) => item.slug)];

export const agentFaqs = [
  ['What does the Antbuildz AI Sales Agent do?', 'It answers product questions, qualifies requirements, recommends suitable options from approved information, captures buyer intent and prepares quotation-ready handovers.'],
  ['Can it learn from our product catalogue?', 'Yes. Add approved catalogues, manuals, FAQs, pricing guidance, policies and sales rules to the knowledge base. Your team controls what the Agent may use and share.'],
  ['Is this a generic chatbot?', 'No. Antbuildz AI is designed for industrial product, equipment rental and technical sales workflows where specifications, compatibility, availability and commercial context matter.'],
  ['Can it handle rental and sales enquiries?', 'Yes. It can qualify hire dates, site conditions and delivery needs for rental, or capture specifications, quantities, budgets and timelines for sales.'],
  ['Does it support multiple languages?', 'Yes. The Agent can support multilingual buyer conversations when configured with suitable knowledge and language coverage.'],
  ['How does it know when to involve our team?', 'You configure handover rules, commercial boundaries and escalation points in the AI Agent Console. Qualified or sensitive enquiries can be routed to the right person.'],
  ['Can we review what the Agent says?', 'Yes. The Console gives your team conversation review, knowledge controls, instructions, testing and performance signals so you can improve responses over time.'],
  ['What is the difference between AI Webstore Suite and AI Sales Agent?', 'AI Webstore Suite combines a purpose-built Webstore with the AI Sales Agent. The AI Sales Agent can also support customer conversations without a new Webstore.'],
] as const;

export const resourceCards = [
  { title: 'Understand AI Agents', text: 'A practical introduction to industrial AI Agents, buyer conversations and qualification workflows.', image: '/resources/understand-ai-agents.jpg', tag: 'Foundations', href: '/ai-sales-agent' },
  { title: 'AI Sales Agent + Webstore', text: 'See how structured product pages and conversation-led discovery work together.', image: '/resources/ai-agent-webstore.jpg', tag: 'Product guide', href: '/ai-webstore-suite' },
  { title: 'AI Agent Roles', text: 'Explore focused AI roles for sales, product knowledge, customer service, technical support and after-sales workflows.', image: '/resources/ai-agent-roles.jpg', tag: 'Role library', href: '/ai-agent-roles' },
  { title: 'The Antbuildz Difference', text: 'Why industrial product context matters more than generic document search.', image: '/resources/antbuildz-difference.jpg', tag: 'Point of view', href: '/about' },
  { title: 'Get Your Business Ready', text: 'Prepare catalogues, policies, product data and sales rules for a reliable Agent.', image: '/resources/getting-ready.jpg', tag: 'Checklist', href: '/resources#readiness' },
  { title: 'Run Your AI Agent Console', text: 'Manage knowledge, instructions, testing and conversations in one operational workspace.', image: '/resources/ai-console.jpg', tag: 'Operations', href: '/ai-agent-console' },
] as const;

export const roleCards = [
  ['AI Sales Agent', 'Qualifies buyers, recommends suitable products and prepares sales-ready enquiries.', 'Product · quantity · location · timing'],
  ['AI Product Specialist', 'Explains approved specifications, applications, differences and alternatives.', 'Specs · fit · comparisons · options'],
  ['AI Customer Service Agent', 'Answers repeat customer questions and routes cases that need human attention.', 'Orders · policies · status · escalation'],
  ['AI Technical Support Agent', 'Collects symptoms, asset details and operating context before specialist review.', 'Model · serial · issue · environment'],
  ['AI After-Sales Support Agent', 'Guides service, maintenance and parts enquiries from approved support information.', 'Service · warranty · parts · follow-up'],
] as const;

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
