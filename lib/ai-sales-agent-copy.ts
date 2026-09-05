// Approved wording brief, 28 August 2026. This module changes text only on
// /ai-sales-agent; the transferred layout, demonstrations and FAQs stay owned
// by their existing components. Stable visual selectors cover animated clones.
export const SALES_AGENT_COPY = {
  hero: 'Turn product questions into qualified sales or rental enquiries with suitable product matches and quote-ready details.',
  capabilitiesIntro: [
    'Your AI Sales Agent clarifies buyer needs, recommends the closest supported products and turns product conversations into qualified sales or rental enquiries.',
    '',
  ],
  capabilities: [
    ['knowledge', 'Industrial Product Knowledge', 'Answer buyer questions using approved specifications, applications, rental terms and sales information.'],
    ['training', 'Your Business Knowledge', 'Answer using your catalogues, manuals, pricing guidance, policies and company information.'],
    ['matching', 'Product Recommendations', 'Systematically compare confirmed buyer requirements with approved product data to recommend the closest supported options.'],
    ['signals', 'Buyer Intent Signals', 'Recognise urgency, budget, application and sales or rental intent as the conversation develops.'],
    ['security', 'Knowledge & Response Control', 'Define which knowledge the Agent uses and how it handles pricing, recommendations and questions requiring human review.'],
    ['workflow', 'Qualified Sales Enquiry', 'Bring together confirmed requirements, recommended products and buyer intent as a qualified sales or rental enquiry.'],
  ],
  capabilityEyebrows: [
    ['knowledge', 'Grounded'],
    ['training', 'Connected'],
    ['matching', 'Reasoning'],
    ['signals', 'Insightful'],
    ['security', 'Controlled'],
    ['workflow', 'Qualified'],
  ],
  recommendationLabels: ['Closest match', 'Strong alternative', 'Alternative'],
  intentLabels: ['Requirements shared', 'Timeline confirmed', 'Budget discussed'],
  controlLabels: ['Business Knowledge', 'Agent Instructions', 'Response Rules'],
  quotationLabels: ['Requirements Confirmed', 'Products Recommended', 'Buyer Intent Captured', 'Qualified Enquiry'],
  featuresIntro: 'Give your Agent the knowledge, controls and connections to recommend products, qualify enquiries and support buyers in multiple languages.',
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
  problemsIntro: 'Buyers need timely answers about product fit, specifications, pricing and availability. Slow replies, scattered information and missed requirements cause valuable enquiries to lose momentum.',
  problems: [
    ['a1', 'Slow First Response', 'Buyers expect quick answers, but your team cannot always respond immediately.'],
    ['a2', 'Unanswered Product Questions', 'Visitors may leave when they cannot confirm specifications, suitability or sales and rental terms.'],
    ['b', 'Enquiries Across Channels', 'Questions arrive through websites, messages, calls, campaigns and referrals, making them difficult to track.'],
    ['d', 'Scattered Product Knowledge', 'Specifications, pricing and policies are spread across files, systems and people, making consistent answers harder.'],
    ['c1', 'Incomplete Buyer Requirements', 'Product, quantity, location and timing can be missed, leaving too little information to recommend or quote.'],
    ['c2', 'Follow-Up Without Context', 'Without the buyer’s requirements and conversation history, your team has to ask the same questions again.'],
  ],
  consoleIntro: [
    'Configure a dedicated AI Sales Agent with your product data, business knowledge and sales instructions. Control how it answers questions, recommends products and handles enquiries.',
    '',
  ],
  consoleTabs: [
    ['Define Your Agent’s Role', 'Set your agent’s role, tone and response boundaries.'],
    ['Manage Your Business Knowledge', 'Add catalogues, documents and business information for your agent to use.'],
    ['Guide Qualification and Handover', 'Set instructions for qualification, product recommendations and handover to your team.'],
    ['Review Buyer Conversations', 'Review buyer questions and agent responses so your team can continue with context.'],
    ['Review Buyer Details', 'Review contact details and product requirements for follow-up.'],
    ['Understand Quotation Interest', 'Review urgency, budget and quotation interest to prioritise enquiries.'],
  ],
  connection: 'Connect your Agent to Antbuildz Webstore inventory, Google Sheets, Excel or supported third-party systems. Recommend products using current stock and rental availability.',
  channelsIntro: 'Connect your website, webstore, ads, emails, social posts and QR codes to the same AI Sales Agent. Buyers can ask questions immediately—without calling, completing a form or waiting for a reply.',
  channels: [
    ['Website & Webstore', 'Embed your Agent as live chat so buyers can ask product questions, clarify requirements and receive recommendations.'],
    ['Campaigns & QR Codes', 'Let buyers move directly from advertisements, social posts, brochures or QR codes into a product conversation.'],
    ['Messaging Channels', 'Share your Agent link through messaging channels so buyers can start a conversation immediately.'],
    ['Email & Sales Outreach', 'Add your Agent link to campaigns, proposals and email signatures.'],
    ['International Enquiries', 'Support multilingual product conversations and capture requirements from buyers in other markets.'],
    ['Shared Business Knowledge', 'Use one approved knowledge base to keep product information and business guidance consistent across every touchpoint.'],
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
  const action = (selector: string, label: string, href?: string) => {
    page.querySelectorAll(selector).forEach(link => {
      // Renaming Get Demo must not cause the shared label-based normaliser
      // to change this wording-only request's existing CTA destination.
      const attributes = ['href', 'target', 'rel'];
      if (!actionDestinations.has(link)) actionDestinations.set(link, attributes.map(name => link.getAttribute(name)));
      if (href) {
        const destinations = actionDestinations.get(link);
        if (destinations) destinations[0] = href;
      }
      setSalesAgentText(link, label);
      actionDestinations.get(link)?.forEach((value, index) => {
        if (link.getAttribute(attributes[index]) === value) return;
        if (value === null) link.removeAttribute(attributes[index]);
        else link.setAttribute(attributes[index], value);
      });
    });
  };
  const eyebrow = (containerSelector: string, headingSelector: string, label: string) => {
    page.querySelectorAll<HTMLElement>(containerSelector).forEach(container => {
      const heading = container.querySelector(headingSelector);
      if (!heading || !container.ownerDocument) return;
      let element = container.querySelector<HTMLElement>(':scope > .antbuildz-sales-agent-eyebrow');
      if (!element) {
        element = container.ownerDocument.createElement('span');
        element.className = 'antbuildz-sales-agent-eyebrow';
        element.append(container.ownerDocument.createTextNode(''));
        container.insertBefore(element, heading);
      }
      setSalesAgentText(element, label);
    });
  };

  set('.bright-hero h1 .bright-hero-title-line:nth-child(1)', 'The AI Sales Agent');
  set('.bright-hero h1 .bright-hero-title-line:nth-child(2)', '');
  set('.bright-hero h1 .bright-hero-title-line:nth-child(3)', ['', 'Built for Industrial Sales']);
  set('.bright-subtitle', SALES_AGENT_COPY.hero);
  action('.bright-hero-actions-block .bright-btn-primary', 'Book a Demo', '/book-a-demo');
  action('.bright-hero-actions-block .bright-btn-secondary', 'View Pricing', '/pricing');
  eyebrow('.bright-hero-text-block', 'h1', 'INDUSTRIAL AI SALES AGENT');
  eyebrow('.bento-section-header', 'h2', 'AI SALES AGENT CAPABILITIES');
  eyebrow('.pain-bento-header', 'h2', 'ENQUIRY CHALLENGES');
  eyebrow('.dt-header', 'h2', 'ONE AI SALES AGENT');
  eyebrow('.bright-faq-accordion > .bright-container', 'h2', 'AI SALES AGENT FAQS');

  SALES_AGENT_COPY.capabilitiesIntro.forEach((text, i) => set(`.bento-desc-line:nth-child(${i + 1})`, text));
  set('.bento-title-line:first-child', 'More Than Answers');
  const capabilityTitleLine = page.querySelector<HTMLElement>('.bento-title-line:last-child');
  if (capabilityTitleLine?.classList && capabilityTitleLine.ownerDocument) {
    capabilityTitleLine.classList.remove('bright-hero-gradient-text');
    let highlight = capabilityTitleLine.querySelector<HTMLElement>(':scope > .antbuildz-capabilities-gradient');
    if (!highlight) {
      const leadingText = Array.from(capabilityTitleLine.childNodes).find(node => node.nodeType === 3)
        ?? capabilityTitleLine.ownerDocument.createTextNode('');
      if (!leadingText.parentNode) capabilityTitleLine.prepend(leadingText);
      leadingText.textContent = 'It ';
      highlight = capabilityTitleLine.ownerDocument.createElement('span');
      highlight.className = 'bright-hero-gradient-text antbuildz-capabilities-gradient';
      highlight.append(capabilityTitleLine.ownerDocument.createTextNode(''));
      capabilityTitleLine.append(highlight);
    }
    setSalesAgentText(highlight, 'Moves Enquiries Forward');
  }
  SALES_AGENT_COPY.capabilities.forEach(([visual, title, description]) => {
    set(`.bento-card[data-visual="${visual}"] .bento-body h3`, title);
    set(`.bento-card[data-visual="${visual}"] .bento-body p`, description);
  });
  SALES_AGENT_COPY.capabilityEyebrows.forEach(([visual, eyebrow]) => {
    set(`.bento-card[data-visual="${visual}"] .bento-eyebrow`, eyebrow);
  });
  set('.bento-card[data-visual="training"] .bv-train-pill', 'Grounded');
  SALES_AGENT_COPY.recommendationLabels.forEach((label, i) => set(`.bv-rank-${i + 1} .bv-rank-pct`, label));
  set('.bento-card[data-visual="matching"] .bv-best', '✓ Closest match');
  SALES_AGENT_COPY.intentLabels.forEach((label, i) => set(`.bv-sig-${i + 1}`, label));
  set('.bento-card[data-visual="signals"] .bv-intent-label', 'High intent');
  set('.bento-card[data-visual="signals"] .bv-intent-score', '');
  SALES_AGENT_COPY.controlLabels.forEach((label, i) => set(`.bv-sec-${i + 1}`, label));
  SALES_AGENT_COPY.quotationLabels.forEach((label, i) => set(`.bv-task-${i + 1} > span:last-child`, label));

  const featuresHeader = page.querySelector<HTMLElement>('.si-header');
  if (featuresHeader?.ownerDocument) {
    let eyebrow = featuresHeader.querySelector<HTMLElement>(':scope > .antbuildz-si-eyebrow');
    if (!eyebrow) {
      eyebrow = featuresHeader.ownerDocument.createElement('span');
      eyebrow.className = 'antbuildz-si-eyebrow';
      eyebrow.append(featuresHeader.ownerDocument.createTextNode(''));
      featuresHeader.insertBefore(eyebrow, featuresHeader.querySelector('.si-headline'));
    }
    setSalesAgentText(eyebrow, 'AI AGENT FEATURES');
  }
  set('.si-headline-line:first-child', ['Built Around', '', '']);
  const featureTitleLine = page.querySelector<HTMLElement>('.si-headline-line:last-child');
  if (featureTitleLine?.ownerDocument) {
    let highlight = featureTitleLine.querySelector<HTMLElement>(':scope > .antbuildz-features-gradient');
    if (!highlight) {
      const existingText = Array.from(featureTitleLine.childNodes).find(node => node.nodeType === 3)
        ?? featureTitleLine.ownerDocument.createTextNode('');
      if (!existingText.parentNode) featureTitleLine.prepend(existingText);
      existingText.textContent = '';
      highlight = featureTitleLine.ownerDocument.createElement('span');
      highlight.className = 'si-gradient-keyword antbuildz-features-gradient';
      highlight.append(featureTitleLine.ownerDocument.createTextNode(''));
      featureTitleLine.append(highlight);
    }
    setSalesAgentText(highlight, 'The Way You Sell');
  }
  set('.si-sub', SALES_AGENT_COPY.featuresIntro);
  SALES_AGENT_COPY.features.forEach(([visual, title, description]) => {
    page.querySelectorAll(`.si-visual-${visual}`).forEach(illustration => {
      const card = illustration.closest('.si-card');
      setSalesAgentText(card?.querySelector('.si-card-title') ?? null, title);
      setSalesAgentText(card?.querySelector('.si-card-desc') ?? null, description);
    });
  });

  set('.pain-bento-header h2', ['Why Enquiries Still ', 'Slip Through']);
  set('.pain-bento-header > p', SALES_AGENT_COPY.problemsIntro);
  SALES_AGENT_COPY.problems.forEach(([area, title, description]) => {
    set(`.pain-area-${area} .pain-body h3`, title);
    set(`.pain-area-${area} .pain-body p`, description);
  });
  set('.pv-drop', 'Questions unanswered');

  set('.af-section-eyebrow', 'AI AGENT CONSOLE');
  set('.af-section-title-line:first-child', 'Build an Agent');
  const consoleTitleLine = page.querySelector<HTMLElement>('.af-section-title-line:last-child');
  if (consoleTitleLine?.classList && consoleTitleLine.ownerDocument) {
    consoleTitleLine.classList.remove('af-title-gradient');
    let leadingText = Array.from(consoleTitleLine.childNodes).find(node => node.nodeType === 3);
    if (!leadingText) {
      leadingText = consoleTitleLine.ownerDocument.createTextNode('');
      consoleTitleLine.prepend(leadingText);
    }
    leadingText.textContent = 'That ';
    let highlight = consoleTitleLine.querySelector<HTMLElement>(':scope > .antbuildz-console-gradient');
    if (!highlight) {
      highlight = consoleTitleLine.ownerDocument.createElement('span');
      highlight.className = 'af-title-gradient antbuildz-console-gradient';
      highlight.append(consoleTitleLine.ownerDocument.createTextNode(''));
      consoleTitleLine.append(highlight);
    }
    setSalesAgentText(highlight, 'Knows Your Business');
  }
  SALES_AGENT_COPY.consoleIntro.forEach((text, i) => set(`.af-section-desc-line:nth-child(${i + 1})`, text));
  const activeTab = Array.from(page.querySelectorAll('.af-pill')).findIndex(tab => tab.getAttribute('aria-selected') === 'true');
  const tabCopy = SALES_AGENT_COPY.consoleTabs[activeTab];
  if (tabCopy) {
    set('.af-headline h2', tabCopy[0]);
    set('.af-headline p', tabCopy[1]);
  }

  set('.flexible-ai-platform__eyebrow', 'CONNECTED INVENTORY DATA');
  const inventoryHeading = page.querySelector<HTMLElement>('#flexible-ai-platform-heading');
  if (inventoryHeading?.ownerDocument) {
    let highlight = inventoryHeading.querySelector<HTMLElement>(':scope > .mkt-gradient-text');
    if (!highlight) {
      highlight = inventoryHeading.ownerDocument.createElement('span');
      highlight.className = 'mkt-gradient-text';
      highlight.append(inventoryHeading.ownerDocument.createTextNode(''));
      inventoryHeading.append(highlight);
    }
    let leadingText = Array.from(inventoryHeading.childNodes).find(node => node.nodeType === 3);
    if (!leadingText) {
      leadingText = inventoryHeading.ownerDocument.createTextNode('');
      inventoryHeading.prepend(leadingText);
    }
    leadingText.textContent = 'Every Recommendation';
    let lineBreak = inventoryHeading.querySelector<HTMLElement>(':scope > .antbuildz-inventory-title-break');
    if (!lineBreak) {
      lineBreak = inventoryHeading.ownerDocument.createElement('br');
      lineBreak.className = 'antbuildz-inventory-title-break';
      inventoryHeading.insertBefore(lineBreak, highlight);
    }
    const lineBreakIndex = Array.from(inventoryHeading.childNodes).indexOf(lineBreak);
    let supportingText = Array.from(inventoryHeading.childNodes).find((node, index) => node.nodeType === 3 && index > lineBreakIndex);
    if (!supportingText) {
      supportingText = inventoryHeading.ownerDocument.createTextNode('');
      inventoryHeading.insertBefore(supportingText, highlight);
    }
    supportingText.textContent = 'Backed by ';
    setSalesAgentText(highlight, 'Current Inventory');
  }
  set('.flexible-ai-platform__heading > p', SALES_AGENT_COPY.connection);

  set('.dt-title', ['Turn Every Marketing Touchpoint', 'Into a Conversation']);
  const touchpointHeading = page.querySelector<HTMLElement>('.dt-title');
  if (touchpointHeading?.ownerDocument) {
    const highlight = touchpointHeading.querySelector<HTMLElement>(':scope > .dt-title-gradient');
    if (highlight && !touchpointHeading.querySelector(':scope > .antbuildz-touchpoint-title-break')) {
      const lineBreak = touchpointHeading.ownerDocument.createElement('br');
      lineBreak.className = 'antbuildz-touchpoint-title-break';
      touchpointHeading.insertBefore(lineBreak, highlight);
    }
  }
  set('.dt-subtitle', '');
  set('.dt-desc', SALES_AGENT_COPY.channelsIntro);
  page.querySelectorAll('.dt-card').forEach((card, i) => {
    const copy = SALES_AGENT_COPY.channels[i];
    if (!copy) return;
    setSalesAgentText(card.querySelector('.dt-card-title'), copy[0]);
    setSalesAgentText(card.querySelector('.dt-card-desc'), copy[1]);
  });
  set('.dt-chat-name', 'AI Sales Agent');
  set('.dt-chat-status', 'Online');
  set('.dt-chat-widget-body .dt-bubble:nth-child(1)', 'Hi—what product or equipment are you looking for?');
  set('.dt-chat-widget-body .dt-bubble:nth-child(2)', 'I need a 3-ton forklift for indoor use.');
  set('.dt-chat-widget-body .dt-bubble:nth-child(3)', 'I found several electric options that may fit. What lifting height and rental period do you need?');

  const nextStepSection = page.querySelector<HTMLElement>('.aisl-section');
  if (nextStepSection) {
    nextStepSection.hidden = true;
    nextStepSection.setAttribute('aria-hidden', 'true');
    nextStepSection.setAttribute('data-antbuildz-sales-agent-removed', 'true');
  }

  set('.ws-cta-title', ['Build', ' Your AI Sales Agent']);
  action('.ws-cta-btn-primary', 'Book a Demo', '/book-a-demo');
  action('.ws-cta-btn-outline', 'View Pricing', '/pricing');
  const closingCta = page.querySelector<HTMLElement>('.ws-cta-section');
  if (closingCta?.classList?.contains('ws-cta-section') && closingCta.ownerDocument) {
    const ctaInner = closingCta.querySelector<HTMLElement>(':scope > .ws-cta-inner');
    if (ctaInner) {
      let media = closingCta.querySelector<HTMLElement>(':scope > .antbuildz-sales-agent-cta-media');
      if (!media) {
        media = closingCta.ownerDocument.createElement('figure');
        media.className = 'antbuildz-sales-agent-cta-media';

        const image = closingCta.ownerDocument.createElement('img');
        image.src = '/images/emma-industrial-sales-consultation-v2.jpg';
        image.alt = 'Industrial sales specialist using product inventory on a tablet to guide a buyer';
        image.width = 1672;
        image.height = 941;
        image.loading = 'lazy';
        image.decoding = 'async';

        media.append(image);
        closingCta.insertBefore(media, ctaInner);
      }

      let supportingCopy = ctaInner.querySelector<HTMLElement>(':scope > .antbuildz-sales-agent-cta-copy');
      if (!supportingCopy) {
        supportingCopy = closingCta.ownerDocument.createElement('p');
        supportingCopy.className = 'antbuildz-sales-agent-cta-copy';
        supportingCopy.append(closingCta.ownerDocument.createTextNode(''));
        ctaInner.querySelector('.ws-cta-title')?.insertAdjacentElement('afterend', supportingCopy);
      }
      setSalesAgentText(
        supportingCopy,
        'Configure your Agent around your products, qualification process and handover rules.',
      );
    }
  }

  // Move the existing equipment-brand proof to the page close and present it
  // as the same continuous logo marquee used by the Webstore. Duplicate items
  // are decorative only and make the motion loop seamless.
  const logoStrip = page.querySelector<HTMLElement>('.bright-logo-strip');
  if (
    logoStrip?.classList?.contains('bright-logo-strip')
    && closingCta?.classList?.contains('ws-cta-section')
    && logoStrip.parentElement === closingCta.parentElement
  ) {
    logoStrip.setAttribute('data-antbuildz-logo-strip', 'true');
    const logoGrid = logoStrip.querySelector<HTMLElement>('.bright-logo-grid-static');
    if (logoGrid && !logoGrid.querySelector('[data-antbuildz-logo-duplicate="true"]')) {
      Array.from(logoGrid.children).forEach(item => {
        const duplicate = item.cloneNode(true) as HTMLElement;
        duplicate.setAttribute('data-antbuildz-logo-duplicate', 'true');
        duplicate.setAttribute('aria-hidden', 'true');
        logoGrid.append(duplicate);
      });
    }
    if (closingCta.nextElementSibling !== logoStrip) {
      closingCta.insertAdjacentElement('afterend', logoStrip);
    }
  }
  page.querySelectorAll('.ws-cta-float').forEach((card, i) => {
    const copy = SALES_AGENT_COPY.closingLabels[i];
    if (!copy) return;
    setSalesAgentText(card.querySelector('.ws-cta-float-label'), copy[0]);
    setSalesAgentText(card.querySelector('.ws-cta-float-sub'), copy[1]);
  });
}
