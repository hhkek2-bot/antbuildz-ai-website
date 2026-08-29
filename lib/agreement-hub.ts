/** Presentation-only cleanup of the transferred agreement directory.
 * Keep the original document rows, URLs, dates and category handlers intact.
 * Hide React-owned duplicate elements instead of detaching its DOM nodes.
 */
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
    '.legal-policies-home__other-markets-note > div > p',
    '.legal-policies-home__other-markets-note > a',
  ];
  hub.querySelectorAll<HTMLElement>(redundant.join(',')).forEach(element => { element.hidden = true; });
  const library = hub.querySelector('.legal-policies-home__library');
  library?.removeAttribute('aria-labelledby');
  library?.setAttribute('aria-label', 'Browse policy documents');

  setText('.legal-policies-home__intro', 'Find policies for Antbuildz products, privacy and marketplace activity.');
  setText('#legal-collection-general', 'General policies');
  setText('#legal-collection-ai-products', 'AI products');
  setText('[aria-labelledby="legal-collection-general"] .legal-policies-home__collection-header > div > p:last-child', 'Privacy and data handling.');
  setText('[aria-labelledby="legal-collection-ai-products"] .legal-policies-home__collection-header > div > p:last-child', 'Policies for Antbuildz software services.');
  setText('[aria-labelledby="legal-collection-marketplace"] .legal-policies-home__collection-header > div > p:last-child', 'Listing and transaction policies for the Antbuildz Marketplace on antbuildz.com.');
  setText('.legal-policies-home__status-note p', 'A separate Platform Terms document is not currently available.');
  setText('.legal-policies-home__legal-note', 'A separate AI Sales Agent agreement is not currently available.');
  setText('.legal-policies-home__other-markets-note h3', 'Other markets');
  hub.querySelectorAll('.legal-policies-home__topic-list button').forEach((button, index) => {
    const label = button.querySelector('span');
    const text = ['General policies', 'AI products', 'Marketplace'][index];
    if (label && text && label.textContent !== text) label.textContent = text;
    button.setAttribute('aria-controls', 'legal-policy-content');
  });
  hub.querySelectorAll('.legal-agreement-row').forEach(row => {
    const title = row.querySelector('h3')?.textContent?.trim();
    const link = row.querySelector('a');
    const country = row.closest('.legal-policies-home__agreement-group')
      ?.querySelector('.legal-policies-home__agreement-group-heading--market h3')?.textContent?.trim();
    if (link && title) link.setAttribute('aria-label', `View ${title}${country ? ` — ${country}` : ''}`);
  });
}
