/** Presentation-only cleanup of the transferred agreement directory.
 * Keep the original document rows, URLs, dates and category handlers intact.
 * Hide React-owned duplicate elements instead of detaching its DOM nodes.
 */
export const AGREEMENT_SEO = {
  title: 'Antbuildz AI Agreements & Policies | Antbuildz AI',
  description: 'Find privacy, data-handling and product policies for Antbuildz AI services.',
  url: 'https://antbuildz.ai/agreements',
} as const;

export function syncAgreementMetadata(doc: Document, pathname: string) {
  if (pathname !== '/agreements') return;
  if (doc.title !== AGREEMENT_SEO.title) doc.title = AGREEMENT_SEO.title;
  const values: Record<string, string> = {
    'meta[name="description"]': AGREEMENT_SEO.description,
    'meta[property="og:title"]': AGREEMENT_SEO.title,
    'meta[property="og:description"]': AGREEMENT_SEO.description,
    'meta[property="og:url"]': AGREEMENT_SEO.url,
    'meta[name="twitter:title"]': AGREEMENT_SEO.title,
    'meta[name="twitter:description"]': AGREEMENT_SEO.description,
  };
  for (const [selector, value] of Object.entries(values)) {
    for (const element of doc.querySelectorAll(selector)) {
      if (element.getAttribute('content') !== value) element.setAttribute('content', value);
    }
  }
  for (const link of doc.querySelectorAll('link[rel="canonical"]')) {
    if (link.getAttribute('href') !== AGREEMENT_SEO.url) link.setAttribute('href', AGREEMENT_SEO.url);
  }
}

export function simplifyAgreementHub(root: HTMLElement) {
  const hub = root.querySelector<HTMLElement>('.legal-policies-home');
  if (!hub) return;
  hub.classList.add('antbuildz-agreement-hub');

  const setText = (selector: string, text: string) => {
    const element = hub.querySelector(selector);
    if (element && element.textContent !== text) element.textContent = text;
  };
  const redundant = [
    '.legal-policies-home__library-heading',
    '.legal-policies-home__topic-label',
    '.legal-policies-home__topic-list strong',
    '.legal-policies-home__collection-number',
    '.legal-policies-home__card-eyebrow',
    '.legal-policies-home__collection-link',
    '.legal-policies-home__agreement-group-heading p',
    '.legal-policies-home__agreement-group-heading--market > a',
    '[aria-labelledby="legal-collection-general"] .legal-policies-home__agreement-group-heading',
    '.legal-agreement-row > div > p:first-child',
    '.legal-policies-home__status-note h3',
    '.legal-policies-home__other-markets-note',
  ];
  hub.querySelectorAll<HTMLElement>(redundant.join(',')).forEach(element => { element.hidden = true; });
  const library = hub.querySelector('.legal-policies-home__library');
  library?.removeAttribute('aria-labelledby');
  library?.setAttribute('aria-label', 'Browse Antbuildz AI policy documents');

  setText('.legal-policies-home__hero h1', 'Antbuildz AI Agreements & Policies');
  setText('.legal-policies-home__intro', 'Find privacy, data-handling and product policies for Antbuildz AI services.');
  setText('#legal-collection-general', 'Privacy & data');
  setText('#legal-collection-ai-products', 'AI product policies');
  setText('[aria-labelledby="legal-collection-general"] .legal-policies-home__collection-header > div > p:last-child', 'Privacy and data handling for Antbuildz AI services.');
  setText('[aria-labelledby="legal-collection-ai-products"] .legal-policies-home__collection-header > div > p:last-child', 'Policies for the AI Webstore Suite and related Antbuildz AI services.');
  setText('.legal-policies-home__status-note p', 'A separate Antbuildz AI platform terms document is not currently available.');
  setText('.legal-policies-home__legal-note', 'A separate AI Sales Agent agreement is not currently available.');
  hub.querySelectorAll('.legal-policies-home__topic-list button').forEach((button, index) => {
    const label = button.querySelector('span');
    const text = ['Privacy & data', 'AI product policies'][index];
    if (label && text && label.textContent !== text) label.textContent = text;
    button.setAttribute('aria-controls', 'legal-policy-content');
    if (index >= 2 || /marketplace/i.test(button.textContent ?? '')) {
      (button as HTMLElement).hidden = true;
      button.setAttribute('aria-hidden', 'true');
      button.setAttribute('tabindex', '-1');
    }
  });
  hub.querySelectorAll<HTMLElement>('[aria-labelledby="legal-collection-marketplace"]').forEach((collection) => {
    collection.hidden = true;
    collection.setAttribute('aria-hidden', 'true');
  });
  hub.querySelectorAll('.legal-agreement-row').forEach(row => {
    const title = row.querySelector('h3')?.textContent?.trim();
    const link = row.querySelector('a');
    const country = row.closest('.legal-policies-home__agreement-group')
      ?.querySelector('.legal-policies-home__agreement-group-heading--market h3')?.textContent?.trim();
    if (link && title) link.setAttribute('aria-label', `View ${title}${country ? ` — ${country}` : ''}`);
  });
}
