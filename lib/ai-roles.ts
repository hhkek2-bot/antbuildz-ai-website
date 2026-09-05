/** Roles describe jobs of one Agent, not separate products or subscriptions. */
export const AI_ROLE_LINKS = [
  { label: 'Sales Specialist', href: '/ai-roles/sales-specialist' },
  { label: 'Product Specialist', href: '/ai-roles/product-specialist' },
  { label: 'Customer Support', href: '/ai-roles/customer-support' },
  { label: 'Technical Support', href: '/ai-roles/technical-support' },
  { label: 'After-Sales Service', href: '/ai-roles/after-sales-service' },
] as const;

export const AI_ROLE_REDIRECTS: Record<string, string> = {
  '/ai-agent-roles': '/ai-roles',
  '/resources/ai-agent-roles': '/ai-roles',
  '/resources/ai-sales-agent-for-industrial-businesses': '/ai-roles/sales-specialist',
  '/resources/ai-product-specialist-for-industrial-businesses': '/ai-roles/product-specialist',
  '/resources/ai-customer-service-agent-for-industrial-businesses': '/ai-roles/customer-support',
  '/resources/ai-technical-support-agent-for-industrial-businesses': '/ai-roles/technical-support',
  '/resources/ai-after-sales-agent-for-industrial-businesses': '/ai-roles/after-sales-service',
  '/resources/ai-internal-knowledge-agent-for-industrial-businesses': '/ai-roles/product-specialist',
};

export type AiRole = {
  slug: string; name: string; summary: string; description: string;
  capabilities: readonly { title: string; body: string }[];
  example: { context: string; title: string; sources: string; outcome: string; messages: readonly { speaker: 'Customer' | 'Emma'; text: string }[] };
  sources: readonly string[];
  businesses: readonly { name: string; example: string }[];
  related: { label: string; href: string };
};

export const AI_ROLES: readonly AiRole[] = [
  {
    slug: 'sales-specialist', name: 'Sales Specialist',
    summary: 'Help incoming prospects find suitable products from your catalogue and inventory.',
    description: 'Understand what buyers need and recommend suitable products using approved catalogue knowledge and connected inventory data.',
    capabilities: [
      { title: 'Understand the requirement', body: 'Ask about the application, quantity, budget and timing before suggesting an option.' },
      { title: 'Recommend products from inventory', body: 'Match the enquiry to your catalogue and connected inventory, then explain why each available option may fit.' },
      { title: 'Answer sales questions', body: 'Use your approved product information and policies to support the buying decision.' },
      { title: 'Prepare the next sales step', body: 'Capture requirements and contact details for a quote, purchase enquiry or follow-up.' },
    ],
    example: {
      context: 'Furniture supplier', title: 'From a broad enquiry to a useful sales brief',
      sources: 'Chair catalogue · Product specifications · Quotation process',
      outcome: 'A suitable product shortlist based on the buyer’s requirements, with stock, timing and price left for the sales team to confirm.',
      messages: [
        { speaker: 'Customer', text: 'We need 24 chairs for a small café. Easy to clean, and ideally stackable.' },
        { speaker: 'Emma', text: 'Will they be used indoors or outdoors, and when do you need them?' },
        { speaker: 'Customer', text: 'Indoors, by next month.' },
        { speaker: 'Emma', text: 'The café range includes wipe-clean, stackable options. I can share the matching product pages. What is your delivery postcode and work email? I’ll pass the 24-chair requirement to sales to confirm stock, timing and a quote.' },
      ],
    },
    sources: ['Product catalogue', 'Product pages', 'Sales FAQs', 'Delivery policies', 'Excel / Google Sheets'],
    businesses: [
      { name: 'Furniture & consumer brands', example: 'Link product ads to your AI Terminal so interested buyers can discuss options and quote requirements.' },
      { name: 'Distributors & manufacturers', example: 'Invite website visitors to discuss quantities, applications and procurement needs with your Agent.' },
      { name: 'Equipment & rental businesses', example: 'Let visitors from equipment campaigns explain the job, rental dates and delivery needs in a conversation.' },
    ],
    related: { label: 'AI for dealers & distributors', href: '/dealers-distributors' },
  },
  {
    slug: 'product-specialist', name: 'Product Specialist',
    summary: 'Help customers understand, compare and choose the right products.',
    description: 'Make your product knowledge easier to use—from everyday features and dimensions to detailed specifications and application requirements.',
    capabilities: [
      { title: 'Find the right starting point', body: 'Clarify the customer’s use case, constraints and must-have features.' },
      { title: 'Compare the differences', body: 'Explain relevant differences between products without overwhelming the buyer.' },
      { title: 'Make specifications useful', body: 'Translate approved product details into practical guidance for the customer.' },
      { title: 'Check before recommending', body: 'Flag missing dimensions, compatibility details or suitability checks for your team.' },
    ],
    example: {
      context: 'Appliance retailer', title: 'A recommendation that starts with the space',
      sources: 'Appliance catalogue · Dimension sheets · Installation guide',
      outcome: 'A shortlist based on the customer’s constraints, with installation checks kept visible.',
      messages: [
        { speaker: 'Customer', text: 'I need a dishwasher for a narrow kitchen. Which one should I choose?' },
        { speaker: 'Emma', text: 'What is the width of the opening, and do you need an integrated or freestanding model?' },
        { speaker: 'Customer', text: 'The opening is 46 cm. Freestanding.' },
        { speaker: 'Emma', text: 'Let’s compare the 45 cm freestanding models in your shortlist. I’ll show capacity, noise level and programme differences from their specification sheets. Please also check depth, height and the installation clearances before choosing.' },
      ],
    },
    sources: ['Product catalogue', 'Specification sheets', 'Product manuals', 'Comparison tables', 'Excel / Google Sheets'],
    businesses: [
      { name: 'Appliances & electronics', example: 'Link product campaigns to your AI Terminal for questions about features, dimensions and everyday use.' },
      { name: 'Automotive & parts suppliers', example: 'Give visitors from product pages a place to discuss model and application details.' },
      { name: 'Technical product manufacturers', example: 'Invite people reading technical marketing content to ask about ratings, materials and specification differences.' },
    ],
    related: { label: 'AI for manufacturers & OEMs', href: '/manufacturers-brands' },
  },
  {
    slug: 'customer-support', name: 'Customer Support',
    summary: 'Answer everyday customer questions using your business knowledge.',
    description: 'Give customers clear answers from your FAQs, policies and product information, then send exceptions to your team with the relevant details.',
    capabilities: [
      { title: 'Answer common questions', body: 'Explain delivery options, opening hours and everyday product questions.' },
      { title: 'Explain your policies', body: 'Help customers understand returns, exchanges and service processes.' },
      { title: 'Clarify the enquiry', body: 'Ask for the question, product and relevant reference so your team has the context for follow-up.' },
      { title: 'Send exceptions to your team', body: 'Collect the key details so your team can resolve exceptions and account-specific questions.' },
    ],
    example: {
      context: 'Online product store', title: 'Explain the policy. Keep exceptions with your team.',
      sources: 'Returns policy · Support FAQs · Team follow-up instructions',
      outcome: 'The customer knows the next step without an invented refund approval or order status.',
      messages: [
        { speaker: 'Customer', text: 'My order arrived yesterday. Can I exchange one item for another colour?' },
        { speaker: 'Emma', text: 'I can help you check the exchange policy. Has the item been used, and do you still have its original packaging?' },
        { speaker: 'Customer', text: 'It’s unused and still in the box.' },
        { speaker: 'Emma', text: 'Those details help with the policy check. Please share your order number and the colour you’d prefer. I don’t have access to this order, so I’ll pass the request to support to confirm eligibility and the replacement option.' },
      ],
    },
    sources: ['Website FAQs', 'Returns & delivery policies', 'Product information', 'Service procedures', 'Approved support knowledge'],
    businesses: [
      { name: 'Ecommerce & consumer brands', example: 'Link website FAQs to your AI Terminal for delivery, exchange and product questions.' },
      { name: 'Furniture & appliance stores', example: 'Share the Terminal in customer emails for conversations about delivery preparation and support.' },
      { name: 'Distributors & rental companies', example: 'Give visitors to your website a direct conversation about collection and service enquiries.' },
    ],
    related: { label: 'AI for rental & leasing', href: '/rental-businesses' },
  },
  {
    slug: 'technical-support', name: 'Technical Support',
    summary: 'Resolve technical questions using specifications, manuals and product documentation.',
    description: 'Help customers find and understand technical information. Keep complex, uncertain and safety-critical decisions with qualified people.',
    capabilities: [
      { title: 'Find the right documentation', body: 'Identify the product model and retrieve the relevant approved manual or specification.' },
      { title: 'Explain technical details', body: 'Clarify ratings, terminology and documented application requirements.' },
      { title: 'Guide routine troubleshooting', body: 'Follow approved guidance and ask for symptoms, error codes and operating context.' },
      { title: 'Recognise the limits', body: 'Escalate missing evidence, unsafe conditions and specialist decisions instead of guessing.' },
    ],
    example: {
      context: 'Industrial equipment supplier', title: 'Useful guidance with a clear safety boundary',
      sources: 'Model-specific manual · Fault-code reference · Service escalation rules',
      outcome: 'A documented service enquiry, without instructions to bypass a protection device.',
      messages: [
        { speaker: 'Customer', text: 'Our pump keeps tripping. Can I bypass the protection to finish this job?' },
        { speaker: 'Emma', text: 'Do not bypass the protection. Stop using the equipment and follow your site’s safety procedure. What is the model and the displayed fault code?' },
        { speaker: 'Customer', text: 'I can send a photo of the nameplate and the code.' },
        { speaker: 'Emma', text: 'Please share those details. I’ll use them to find the matching manual and prepare a service enquiry. A qualified technician should assess the fault before the equipment is used again.' },
      ],
    },
    sources: ['Product manuals', 'Technical PDFs', 'Specification sheets', 'Fault-code references', 'Approved troubleshooting guides'],
    businesses: [
      { name: 'Equipment & industrial suppliers', example: 'Link equipment pages to your AI Terminal for model-specific questions and technician enquiry details.' },
      { name: 'Electronics & appliance brands', example: 'Let visitors from online support content ask about documented setup requirements and error messages.' },
      { name: 'Manufacturers & OEMs', example: 'Share the Terminal in technical campaigns for specification and application questions.' },
    ],
    related: { label: 'AI for industrial & MRO suppliers', href: '/industrial-mro' },
  },
  {
    slug: 'after-sales-service', name: 'After-Sales Service',
    summary: 'Support customers with warranty, servicing, maintenance, parts and post-purchase enquiries.',
    description: 'Help customers look after the products they own, find the right service information and give your team a clear post-purchase enquiry.',
    capabilities: [
      { title: 'Explain warranty coverage', body: 'Use your published terms and gather purchase details without promising claim approval.' },
      { title: 'Guide maintenance enquiries', body: 'Find the relevant care instructions and documented service intervals.' },
      { title: 'Help identify spare parts', body: 'Collect model, serial number and part details for your team to confirm compatibility.' },
      { title: 'Prepare a service request', body: 'Capture ownership details, symptoms and contact information for follow-up.' },
    ],
    example: {
      context: 'Appliance service team', title: 'Keep the ownership history with the enquiry',
      sources: 'Warranty terms · Model records · Parts catalogue · Service process',
      outcome: 'One service brief containing the product, purchase details, symptoms and requested part.',
      messages: [
        { speaker: 'Customer', text: 'My coffee machine is leaking. I bought it last year. Is it covered, and can I get a replacement seal?' },
        { speaker: 'Emma', text: 'Please share the model, serial number and purchase date. I can check the warranty terms and help identify the relevant parts information.' },
        { speaker: 'Customer', text: 'I have the receipt and a photo of the label.' },
        { speaker: 'Emma', text: 'Please include those with a description of the leak. I’ll prepare a service request so the team can confirm warranty eligibility, the correct seal and whether a repair is needed.' },
      ],
    },
    sources: ['Warranty policies', 'Care & maintenance guides', 'Parts catalogue', 'Product manuals', 'Service procedures'],
    businesses: [
      { name: 'Appliances & consumer products', example: 'Include your AI Terminal link in follow-up emails for warranty, care and repair questions.' },
      { name: 'Automotive & aftermarket suppliers', example: 'Link parts campaigns to a conversation that gathers vehicle and part details for your team.' },
      { name: 'Equipment manufacturers', example: 'Invite visitors from service pages to discuss maintenance and spare-parts needs with your Agent.' },
    ],
    related: { label: 'AI for parts & aftermarket', href: '/parts-aftermarket' },
  },
];

export function getAiRole(slug: string) { return AI_ROLES.find(role => role.slug === slug); }
