// Approved wording brief, 28 August 2026. This module changes text only on
// /ai-sales-agent; the transferred layout, demonstrations and FAQs stay owned
// by their existing components. Stable visual selectors cover animated clones.
export const SALES_AGENT_COPY = {
  hero: 'Use your catalogue, specifications and business knowledge to answer buyer questions, recommend suitable products and qualify sales and rental enquiries. Give your team the details needed for a quotation.',
  capabilitiesIntro: [
    'Help buyers explore suitable products, explain their requirements and request a quotation. ',
    'Your AI Sales Agent gathers the information your team needs to take the enquiry forward.',
  ],
  capabilities: [
    ['knowledge', 'Industrial Product Knowledge', 'Answer questions using your product specifications, applications, rental terms and sales information.'],
    ['training', 'Your Business Knowledge', 'Equip your agent with catalogues, manuals, pricing guides, policies and company information.'],
    ['matching', 'Product Recommendations', 'Suggest suitable options based on the buyer’s application, specifications and rental or purchase requirements.'],
    ['signals', 'Buyer Signals', 'Identify urgency, budget and buying interest to help your team prioritise enquiries.'],
    ['security', 'Knowledge and Response Control', 'Choose the information your agent uses and set instructions for questions that need your team’s attention.'],
    ['workflow', 'Quotation Handover', 'Collect product choices, quantities, location and timing for your team to review and quote.'],
  ],
  controlLabels: ['Business Knowledge', 'Agent Instructions', 'Response Rules'],
  quotationLabels: ['Requirements Captured', 'Products Shortlisted', 'Quote Requested', 'Ready for Review'],
  featuresIntro: 'Equip your AI Sales Agent with product knowledge, lead capture, buyer analysis and multilingual support. Set how it recommends products, qualifies sales and rental enquiries, and prepares the details your team needs for follow-up. Available features and connections depend on your plan.',
  features: [
    ['knowledge', 'Knowledge Base', 'Add catalogues, manuals, FAQs, pricing guidance and business policies to support product conversations.'],
    ['lead', 'Lead Capture', 'Collect contact details, product interest, quantity, location and timing for follow-up.'],
    ['sync', 'Connected Product Data', 'On supported plans, connect your AI Webstore Suite catalogue so your agent can use product listings, specifications and links.'],
    ['analysis', 'Buyer Analysis', 'Review buyer requirements, urgency and purchasing interest to prioritise enquiries.'],
    ['workflow', 'Instruction & Workflow Control', 'Set how your agent qualifies buyers, handles pricing questions, recommends products and hands enquiries to your team.'],
    ['equipment', 'Product Recommendations', 'Help buyers explore suitable products based on their application, specifications and sales or rental requirements.'],
    ['languages', 'Multilingual Support', 'Support product questions and buyer enquiries in multiple languages.'],
    ['quotation', 'Quotation Intent Capture', 'Recognise quotation requests and gather the details your team needs to respond.'],
  ],
  problemsIntro: 'Industrial buyers need answers about specifications, suitability, pricing and rental terms. Delayed replies, scattered information and missing requirements make enquiries harder to follow up.',
  problems: [
    ['a1', 'Slow First Replies', 'Buyers need answers about products and availability, but your team cannot always reply straight away.'],
    ['a2', 'Visitors Leave With Questions', 'Visitors may leave when they cannot find answers about specifications, suitability or rental terms.'],
    ['b', 'Enquiries Across Too Many Channels', 'Questions arrive through websites, messages, calls and referrals, making conversations harder to track and follow up.'],
    ['d', 'Scattered Product Knowledge', 'Specifications, pricing and rental terms sit across files, people and systems, making consistent answers harder to find.'],
    ['c1', 'Missing Buyer Requirements', 'Product choices, quantity, location and timing can be missed, leaving your team without the details needed to quote.'],
    ['c2', 'Follow-Up Without Context', 'Your team has to repeat questions when buyer requirements and earlier conversations are not available.'],
  ],
  consoleIntro: [
    'Control the knowledge and instructions your AI Sales Agent uses. ',
    'Review conversations, buyer details and enquiry signals so your team knows where to follow up.',
  ],
  consoleTabs: [
    ['Define Your Agent’s Role.', 'Set your agent’s role, tone and response boundaries.'],
    ['Manage Your Business Knowledge.', 'Add catalogues, documents and business information for your agent to use.'],
    ['Guide Qualification and Handover.', 'Set instructions for qualification, product recommendations and handover to your team.'],
    ['Review Buyer Conversations.', 'Review buyer questions and agent responses so your team can continue with context.'],
    ['Review Buyer Details.', 'Review contact details and product requirements for follow-up.'],
    ['Understand Quotation Interest.', 'Review urgency, budget and quotation interest to prioritise enquiries.'],
  ],
  connection: 'Start with the AI Sales Agent. Add the AI Webstore Suite to connect conversations with product listings, inventory and sales or rental workflows. Available connections and workflows depend on your plan and setup.',
  channelsIntro: 'Give buyers a way to ask product questions wherever they discover your business. Use your website and shared agent link to turn interest into enquiries your team can follow up.',
  channels: [
    ['Website & Webstore', 'Let visitors ask questions, explain their requirements and explore suitable products.'],
    ['Campaigns & QR Codes', 'Connect advertisements, social posts, brochures and QR codes to your agent.'],
    ['Business Messaging', 'Share your agent link through messaging channels so buyers can start a product conversation.'],
    ['Email & Sales Outreach', 'Include your agent link in campaigns, proposals and email signatures.'],
    ['Overseas Enquiries', 'Support multilingual conversations and collect requirements from buyers in other markets.'],
    ['Shared Product Knowledge', 'Make your catalogues, specifications and business guidance available through one agent.'],
  ],
  nextStepIntro: 'Bring product questions, buyer requirements and quotation interest together so your team can continue with useful context.',
  nextSteps: [
    ['Answer', 'Respond to product questions'],
    ['Qualify', 'Capture buyer requirements'],
    ['Match', 'Recommend suitable options'],
    ['Prepare', 'Gather quotation details'],
  ],
  closingLabels: [
    ['Product Recommendations', 'Help buyers find suitable options'],
    ['Buyer Requirements', 'Capture the details that matter'],
    ['Sales & Rental', 'Qualify both types of enquiry'],
    ['Quotation Requests', 'Prepare details for your team'],
    ['Multilingual Conversations', 'Support enquiries in multiple languages'],
    ['Sales Handover', 'Give your team useful context'],
  ],
} as const;

// Update existing text nodes, never detach React-owned spans, icons or links.
// Passing parts retains the original gradient/text split in rich headings.
export function setSalesAgentText(element: Element | null, parts: string | readonly string[]) {
  if (!element) return;
  const nodes: Node[] = [];
  const collect = (node: Node) => {
    if (node.nodeType === 3) nodes.push(node);
    else if (node.nodeName.toLowerCase() !== 'svg') node.childNodes.forEach(collect);
  };
  collect(element);
  const values = typeof parts === 'string' ? [parts] : parts;
  nodes.forEach((node, index) => {
    const value = values[index] ?? '';
    if (node.textContent !== value) node.textContent = value;
  });
}

const actionDestinations = new WeakMap<Element, (string | null)[]>();

export function correctSalesAgentCopy(root: HTMLElement, pathname: string) {
  if (pathname !== '/ai-sales-agent') return;
  // The shared header also uses .bright-landing. Anchor to the page's hero
  // so the first class match cannot silently scope all updates to the header.
  const page = root.querySelector('.bright-hero')?.closest<HTMLElement>('.bright-landing');
  if (!page) return;
  page.setAttribute('data-antbuildz-sales-agent', 'true');
  const set = (selector: string, value: string | readonly string[]) =>
    page.querySelectorAll(selector).forEach(element => setSalesAgentText(element, value));
  const action = (selector: string, label: string) => {
    page.querySelectorAll(selector).forEach(link => {
      // Renaming Get Demo must not cause the shared label-based normaliser
      // to change this wording-only request's existing CTA destination.
      const attributes = ['href', 'target', 'rel'];
      if (!actionDestinations.has(link)) actionDestinations.set(link, attributes.map(name => link.getAttribute(name)));
      setSalesAgentText(link, label);
      actionDestinations.get(link)?.forEach((value, index) => {
        if (link.getAttribute(attributes[index]) === value) return;
        if (value === null) link.removeAttribute(attributes[index]);
        else link.setAttribute(attributes[index], value);
      });
    });
  };

  set('.bright-hero h1 .bright-hero-title-line:nth-child(1)', 'The AI Sales Agent');
  set('.bright-hero h1 .bright-hero-title-line:nth-child(2)', '');
  set('.bright-hero h1 .bright-hero-title-line:nth-child(3)', ['', 'Built for Industrial Business.']);
  set('.bright-subtitle', SALES_AGENT_COPY.hero);
  action('.bright-hero-actions-block .bright-btn-primary', 'Build Your AI Agent ');
  action('.bright-hero-actions-block .bright-btn-secondary', 'Book a Demo');

  SALES_AGENT_COPY.capabilitiesIntro.forEach((text, i) => set(`.bento-desc-line:nth-child(${i + 1})`, text));
  SALES_AGENT_COPY.capabilities.forEach(([visual, title, description]) => {
    set(`.bento-card[data-visual="${visual}"] .bento-body h3`, title);
    set(`.bento-card[data-visual="${visual}"] .bento-body p`, description);
  });
  set('.bento-card[data-visual="security"] .bento-eyebrow', 'Controlled');
  set('.bento-card[data-visual="workflow"] .bento-eyebrow', 'Prepared');
  SALES_AGENT_COPY.controlLabels.forEach((label, i) => set(`.bv-sec-${i + 1}`, label));
  SALES_AGENT_COPY.quotationLabels.forEach((label, i) => set(`.bv-task-${i + 1} > span:last-child`, label));

  set('.si-headline-line:first-child', ['AI Agent ', 'Features', '']);
  set('.si-headline-line:last-child', 'Built for Industrial Sales.');
  set('.si-sub', SALES_AGENT_COPY.featuresIntro);
  SALES_AGENT_COPY.features.forEach(([visual, title, description]) => {
    page.querySelectorAll(`.si-visual-${visual}`).forEach(illustration => {
      const card = illustration.closest('.si-card');
      setSalesAgentText(card?.querySelector('.si-card-title') ?? null, title);
      setSalesAgentText(card?.querySelector('.si-card-desc') ?? null, description);
    });
  });

  set('.pain-bento-header h2', ['Why Enquiries Still ', 'Slip Through.']);
  set('.pain-bento-header > p', SALES_AGENT_COPY.problemsIntro);
  SALES_AGENT_COPY.problems.forEach(([area, title, description]) => {
    set(`.pain-area-${area} .pain-body h3`, title);
    set(`.pain-area-${area} .pain-body p`, description);
  });
  set('.pv-drop', 'Questions unanswered');

  set('.af-section-eyebrow', 'AI Agent Console');
  set('.af-section-title-line:first-child', 'Manage Your Agent. ');
  set('.af-section-title-line:last-child', 'Manage Your Enquiries.');
  SALES_AGENT_COPY.consoleIntro.forEach((text, i) => set(`.af-section-desc-line:nth-child(${i + 1})`, text));
  const activeTab = Array.from(page.querySelectorAll('.af-pill')).findIndex(tab => tab.getAttribute('aria-selected') === 'true');
  const tabCopy = SALES_AGENT_COPY.consoleTabs[activeTab];
  if (tabCopy) {
    set('.af-headline h2', tabCopy[0]);
    set('.af-headline p', tabCopy[1]);
  }

  set('.flexible-ai-platform__eyebrow', 'Connected Catalogue and Inventory');
  set('#flexible-ai-platform-heading', ['Extend Your Agent Into a ', 'Complete Sales System.']);
  set('.flexible-ai-platform__heading > p', SALES_AGENT_COPY.connection);

  set('.dt-title', ['One ', 'AI Sales Agent.']);
  set('.dt-subtitle', 'More Ways to Start a Conversation.');
  set('.dt-desc', SALES_AGENT_COPY.channelsIntro);
  page.querySelectorAll('.dt-card').forEach((card, i) => {
    const copy = SALES_AGENT_COPY.channels[i];
    if (!copy) return;
    setSalesAgentText(card.querySelector('.dt-card-title'), copy[0]);
    setSalesAgentText(card.querySelector('.dt-card-desc'), copy[1]);
  });

  set('.aisl-intro h2', ['Help Your Team ', 'Take the Next Step.']);
  set('.aisl-intro-copy', SALES_AGENT_COPY.nextStepIntro);
  const capabilities = page.querySelector('.aisl-metrics');
  capabilities?.setAttribute('aria-label', 'AI Sales Agent capabilities');
  capabilities?.setAttribute('data-antbuildz-capabilities', 'true');
  page.querySelectorAll('.aisl-stat-cell').forEach((cell, i) => {
    const copy = SALES_AGENT_COPY.nextSteps[i];
    if (!copy) return;
    cell.querySelectorAll('.aisl-stat-prefix, .aisl-stat-suffix').forEach(suffix => setSalesAgentText(suffix, ''));
    setSalesAgentText(cell.querySelector('.aisl-stat-value > span:not([class])'), copy[0]);
    setSalesAgentText(cell.querySelector('.aisl-stat-label'), copy[1]);
  });

  set('.ws-cta-title', ['Build', ' Your AI Sales Agent.']);
  action('.ws-cta-btn-primary', 'Build Your AI Agent ');
  action('.ws-cta-btn-outline', 'Book a Demo');
  page.querySelectorAll('.ws-cta-float').forEach((card, i) => {
    const copy = SALES_AGENT_COPY.closingLabels[i];
    if (!copy) return;
    setSalesAgentText(card.querySelector('.ws-cta-float-label'), copy[0]);
    setSalesAgentText(card.querySelector('.ws-cta-float-sub'), copy[1]);
  });
}
