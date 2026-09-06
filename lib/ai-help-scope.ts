/**
 * Keeps the transferred help experience focused on Antbuildz AI.
 * React-owned Marketplace cards and FAQ rows stay mounted, but are removed
 * from the visual and accessibility trees on the Antbuildz.AI website.
 */
export const AI_HELP_SEO = {
  title: 'AI Help Centre | Antbuildz AI',
  description: 'Find answers about the Antbuildz AI Agent, AI Webstore Suite, AI Agent Console, product knowledge, setup, controls and subscriptions.',
  url: 'https://antbuildz.ai/help/ai',
} as const;

export function syncAiHelpMetadata(doc: Document, pathname: string) {
  if (pathname !== '/help/ai') return;
  if (doc.title !== AI_HELP_SEO.title) doc.title = AI_HELP_SEO.title;
  const values: Record<string, string> = {
    'meta[name="description"]': AI_HELP_SEO.description,
    'meta[property="og:title"]': AI_HELP_SEO.title,
    'meta[property="og:description"]': AI_HELP_SEO.description,
    'meta[property="og:url"]': AI_HELP_SEO.url,
    'meta[name="twitter:title"]': AI_HELP_SEO.title,
    'meta[name="twitter:description"]': AI_HELP_SEO.description,
  };
  for (const [selector, value] of Object.entries(values)) {
    for (const element of doc.querySelectorAll(selector)) {
      if (element.getAttribute('content') !== value) element.setAttribute('content', value);
    }
  }
  for (const link of doc.querySelectorAll('link[rel="canonical"]')) {
    if (link.getAttribute('href') !== AI_HELP_SEO.url) link.setAttribute('href', AI_HELP_SEO.url);
  }
}

export function scopeAiHelpExperience(root: HTMLElement, pathname: string) {
  const setText = (element: Element | null, text: string) => {
    if (element && element.textContent !== text) element.textContent = text;
  };

  if (pathname === '/faqs' || pathname === '/help') {
    const directory = root.querySelector<HTMLElement>('.help-directory');
    if (!directory) return;
    directory.classList.add('antbuildz-ai-help-directory');

    setText(directory.querySelector('.faq-master-eyebrow'), 'Antbuildz AI Help Centre');
    setText(directory.querySelector('.help-directory__intro h1'), 'Answers for Antbuildz AI products.');
    setText(
      directory.querySelector('.help-directory__intro > p:last-child'),
      'Find practical guidance for the AI Agent, AI Webstore Suite, AI Agent Console, product knowledge, setup and plans.',
    );

    const marketplaceCard = directory.querySelector<HTMLElement>('.help-directory__card[href="/help/marketplace"]');
    if (marketplaceCard) {
      marketplaceCard.hidden = true;
      marketplaceCard.setAttribute('aria-hidden', 'true');
      marketplaceCard.setAttribute('tabindex', '-1');
    }

    const aiCard = directory.querySelector<HTMLAnchorElement>('.help-directory__card[href="/help/ai"]');
    if (aiCard) {
      setText(aiCard.querySelector('h2'), 'Antbuildz AI Help');
      setText(
        aiCard.querySelector('span'),
        'Answers for AI Agent, AI Webstore Suite, AI Agent Console, approved knowledge, setup and subscriptions.',
      );
      const action = aiCard.querySelector('strong');
      if (action?.firstChild?.nodeType === Node.TEXT_NODE
        && action.firstChild.nodeValue !== 'Browse AI FAQs ') {
        action.firstChild.nodeValue = 'Browse AI FAQs ';
      }
      aiCard.setAttribute('aria-label', 'Browse Antbuildz AI FAQs');
    }

  }

  if (pathname !== '/help/ai') return;
  syncAiHelpMetadata(document, pathname);
  const helpCentre = root.querySelector<HTMLElement>('.help-centre-page');
  if (!helpCentre) return;
  helpCentre.classList.add('antbuildz-ai-help-centre');

  setText(helpCentre.querySelector('.faq-master-eyebrow'), 'Antbuildz AI Help Centre');
  setText(helpCentre.querySelector('.help-centre-hero__intro h1'), 'Antbuildz AI Help');
  setText(
    helpCentre.querySelector('.help-centre-hero__intro > p:last-child'),
    'Clear answers for the AI Agent, AI Webstore Suite and AI Agent Console, including product knowledge, setup, controls and subscriptions.',
  );

  helpCentre.querySelectorAll<HTMLElement>('.help-centre-accordion > .border-b').forEach((row) => {
    const question = row.querySelector('button')?.textContent?.trim() ?? '';
    if (!/marketplace/i.test(question)) return;
    row.hidden = true;
    row.setAttribute('aria-hidden', 'true');
  });
}
