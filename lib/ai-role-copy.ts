/** Search intent and page copy; role names/navigation remain stable. */
export type AiRoleCopy = {
  title: string;
  seoTitle: string;
  metaDescription: string;
  headline: readonly [string, string];
  intro: string;
  capabilityHeading: string;
  description: string;
  useCaseIntro: string;
  deploymentHeading: string;
  deploymentIntro: string;
  workflow: readonly (readonly [string, string])[];
};

export const AI_ROLES_OVERVIEW_COPY = {
  title: 'AI Agent Roles for Sales & Product Support',
  seoTitle: 'Industrial AI Agents for Sales & Support',
  metaDescription: 'AI agents for inbound sales and support conversations. Share your dedicated AI Terminal through websites, ads and campaigns to help customers find answers.',
  headline: ['AI Agent Roles', 'for customer conversations'] as const,
  intro: 'Turn website visits and ad clicks into helpful conversations. Share your dedicated AI Terminal so anyone can ask your Agent about products, sales or support.',
};

export const AI_ROLE_COPY: Record<string, AiRoleCopy> = {
  'sales-specialist': {
    title: 'AI Agent for Sales Specialist',
    seoTitle: 'AI Sales Agent for Product Enquiries',
    metaDescription: 'AI sales agent for industrial product businesses. Match buyer needs with suitable products using approved catalogue knowledge and connected inventory data.',
    headline: ['AI Agent for', 'Sales Specialist'],
    intro: 'Deploy an AI sales agent that uses approved catalogue knowledge and connected inventory data to recommend suitable products for each buyer’s requirements.',
    capabilityHeading: 'What an AI Agent for Sales Specialist can do',
    description: 'Your AI sales agent helps manufacturers, distributors and industrial suppliers handle inbound product enquiries. It asks about the application, quantity, location and timing, then recommends suitable catalogue items. When inventory is connected, it can prioritise products using current stock or rental availability. Your team confirms price and delivery.',
    useCaseIntro: 'Deploy this role when website visitors or people responding to ads want to discuss a product. Link your ads and campaigns to your dedicated AI Terminal so interested buyers can ask questions and explain what they need.',
    deploymentHeading: 'How to deploy an AI Agent for Sales Specialist',
    deploymentIntro: 'Configure your sales conversations in AI Agent Console, then share your AI Terminal with incoming prospects.',
    workflow: [
      ['Add your knowledge', 'Add your catalogue, inventory data, sales FAQs and quotation requirements. Start with the product range you want the Agent to cover.'],
      ['Set the rules', 'Specify the questions to ask: application, quantity, location and timing. Leave final pricing and availability confirmation with your sales team.'],
      ['Test real enquiries', 'Use the Playground to test product recommendations and quote requests. Check that the Agent captures the details your team needs.'],
      ['Publish and review', 'Embed the Agent on your website and share your AI Terminal link through ads and sales campaigns. Review buyer conversations and improve the product and inventory information behind each recommendation.'],
    ],
  },
  'product-specialist': {
    title: 'AI Agent for Product Specialist',
    seoTitle: 'AI Product Recommendation Agent',
    metaDescription: 'AI product recommendation agent for industrial catalogues. Help buyers compare specifications and find suitable products using approved knowledge and connected inventory.',
    headline: ['AI Agent for', 'Product Specialist'],
    intro: 'Use an AI product recommendation agent to compare specifications and find suitable options from your approved catalogue and connected inventory.',
    capabilityHeading: 'What an AI Agent for Product Specialist can do',
    description: 'Your AI product recommendation agent turns catalogue data into practical product guidance. It compares equipment, spare parts and other technical products against customer requirements. When inventory is connected, it can recommend from current stock or rental availability. Missing dimensions and compatibility questions stay visible for your team to check.',
    useCaseIntro: 'Deploy this role when an online visitor wants to understand a product before choosing. Link product pages, launch ads and marketing posts to your AI Terminal for questions about features, specifications and fit.',
    deploymentHeading: 'How to deploy an AI Agent for Product Specialist',
    deploymentIntro: 'Add your product knowledge in AI Agent Console, then give visitors a dedicated AI Terminal for product conversations.',
    workflow: [
      ['Add your knowledge', 'Add specifications, product manuals and comparison tables. Include model references so similar products can be distinguished.'],
      ['Set the rules', 'Define which requirements to ask about, such as dimensions, application and operating conditions. Flag undocumented compatibility for your team to check.'],
      ['Test real enquiries', 'Use the Playground to compare similar models and test incomplete requirements. Check each recommendation against your approved specifications.'],
      ['Publish and review', 'Embed the Agent on your website and link product pages, product ads and marketing posts to your AI Terminal. Review comparison questions and add the product details visitors need.'],
    ],
  },
  'customer-support': {
    title: 'AI Agent for Customer Support',
    seoTitle: 'AI Customer Support Agent for Product Teams',
    metaDescription: 'AI customer support agent for product businesses. Answer delivery, returns and product enquiries from approved FAQs and policies, then hand exceptions to your team.',
    headline: ['AI Agent for', 'Customer Support'],
    intro: 'Use an AI customer support agent to answer delivery, returns and product enquiries from approved FAQs and policies, then send exceptions to your team with the relevant details.',
    capabilityHeading: 'What an AI Agent for Customer Support can do',
    description: 'Your AI customer support agent answers recurring questions from your FAQs, policies and product information. Help shoppers and business buyers understand the next step without inventing an order update, refund approval or policy exception.',
    useCaseIntro: 'Deploy this role when visitors have questions about delivery, returns or your products. Share your AI Terminal on your website and in customer messages so people can start a support conversation directly.',
    deploymentHeading: 'How to deploy an AI Agent for Customer Support',
    deploymentIntro: 'Configure your FAQs and support instructions in AI Agent Console, then share your AI Terminal with customers who need answers.',
    workflow: [
      ['Add your knowledge', 'Add your support FAQs, delivery information and returns policies. Include the contact details and next steps customers should receive.'],
      ['Set the rules', 'Define what the Agent can answer and what needs human review. Request an order reference when needed, without promising refunds or order updates.'],
      ['Test real enquiries', 'Use the Playground to test delivery questions, returns and policy exceptions. Check that missing order information is handled without guessing.'],
      ['Publish and review', 'Embed the Agent on your website and share your AI Terminal link on support pages and in customer emails. Review conversations and improve your FAQs.'],
    ],
  },
  'technical-support': {
    title: 'AI Agent for Technical Support',
    seoTitle: 'AI Technical Support Agent for Equipment',
    metaDescription: 'AI technical support agent for industrial equipment. Find approved manuals, explain specifications and fault codes, and route complex enquiries to technicians.',
    headline: ['AI Agent for', 'Technical Support'],
    intro: 'Use an AI technical support agent to find approved manuals, explain specifications and identify relevant products before a technician reviews complex issues.',
    capabilityHeading: 'What an AI Agent for Technical Support can do',
    description: 'Your AI technical support agent helps customers find model-specific information in manuals, specification sheets and troubleshooting guides. It gathers symptoms and fault codes, finds documented guidance and relevant product information, and sends complex or safety-sensitive issues to a technician.',
    useCaseIntro: 'Deploy this role when online visitors need to understand specifications, manuals or a technical issue. Link product pages, technical content and relevant campaigns to your AI Terminal so they can ask about their model and application.',
    deploymentHeading: 'How to deploy an AI Agent for Technical Support',
    deploymentIntro: 'Prepare approved technical knowledge in AI Agent Console, then share your AI Terminal for model-specific questions and guidance.',
    workflow: [
      ['Add your knowledge', 'Add approved manuals, fault-code references and troubleshooting guides. Identify the models and document versions the Agent should use.'],
      ['Set the rules', 'Ask for the model and symptoms before offering guidance. Define when to stop troubleshooting and refer the customer to a qualified technician.'],
      ['Test real enquiries', 'Use the Playground to test fault codes, missing model details and unsafe situations. Have a qualified team member review the responses before launch.'],
      ['Publish and review', 'Embed the Agent on your website and link technical pages, documentation and relevant campaigns to your AI Terminal. Review incoming questions and keep approved guidance and technician referral instructions current.'],
    ],
  },
  'after-sales-service': {
    title: 'AI Agent for After-Sales Service',
    seoTitle: 'AI After-Sales Service Agent',
    metaDescription: 'AI after-sales service agent for product businesses. Guide warranty, maintenance, repair and spare-parts enquiries, then prepare complete service requests for your team.',
    headline: ['AI Agent for', 'After-Sales Service'],
    intro: 'Use an AI after-sales service agent to guide warranty, maintenance, repair and spare-parts enquiries before your service team confirms next steps.',
    capabilityHeading: 'What an AI Agent for After-Sales Service can do',
    description: 'Your AI after-sales service agent supports post-purchase warranty, maintenance, repair and spare-parts enquiries. It collects product and purchase details so your team can confirm coverage, compatibility and the appropriate service.',
    useCaseIntro: 'Deploy this role when customers ask about care, warranty or spare parts after a purchase. Link service pages, follow-up emails and maintenance campaigns to your AI Terminal for a direct conversation about what they need.',
    deploymentHeading: 'How to deploy an AI Agent for After-Sales Service',
    deploymentIntro: 'Add your after-sales knowledge in AI Agent Console, then share your AI Terminal as a place to ask post-purchase questions.',
    workflow: [
      ['Add your knowledge', 'Add warranty terms, care guides, parts catalogues and your service request process for the products you support.'],
      ['Set the rules', 'Ask for the model, serial number, purchase date and issue. Keep warranty approval, repair commitments and parts compatibility checks with your service team.'],
      ['Test real enquiries', 'Use the Playground to test a warranty question, a maintenance request and a spare-part enquiry. Check that it finds the relevant service information or spare-parts options and collects the details your team needs.'],
      ['Publish and review', 'Embed the Agent on your website and share your AI Terminal link through service pages, follow-up emails and maintenance campaigns. Review conversations and update guidance for recurring ownership questions.'],
    ],
  },
};
