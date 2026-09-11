// Shared public CTA contract for the three principal marketing pages.
// Labels and visual priority are derived from the destination so repeated
// actions cannot drift between transferred components or responsive variants.

export const PUBLIC_CTA_PAGES = new Set([
  '/',
  '/ai-agent',
  '/ai-webstore-suite',
]);

export const PUBLIC_CTA_DESTINATIONS = {
  '/book-a-demo': { label: 'Book a Demo', variant: 'primary' },
  '/pricing': { label: 'View Pricing', variant: 'secondary' },
  '/ai-agent': { label: 'Explore AI Agent', variant: 'secondary' },
  '/ai-webstore-suite': { label: 'Explore AI Webstore Suite', variant: 'secondary' },
} as const;

export type PublicCtaDestination = keyof typeof PUBLIC_CTA_DESTINATIONS;

const PUBLIC_CTA_SELECTORS = [
  '.antbuildz-public-header .antbuildz-header-demo',
  '.bright-hero-actions-block a[href]',
  '[data-antbuildz-sales-agent-global-reach] a[href]',
  '.ws-cta-actions a[href]',
  '.webstore2-page .ws2-hero-actions a[href]',
  '.aria-sales-agent-cta__button[href]',
  '.ai-webstore-section a[href]',
  '.ai-agent-reference-section a[href]',
].join(',');

function destinationFromHref(href: string): PublicCtaDestination | null {
  const pathname = href.split(/[?#]/, 1)[0] as PublicCtaDestination;
  return pathname in PUBLIC_CTA_DESTINATIONS ? pathname : null;
}

function setCtaLabel(element: Element, label: string) {
  const textNodes: Node[] = [];
  const collect = (node: Node) => {
    if (node.nodeType === 3) textNodes.push(node);
    else if (node.nodeName.toLowerCase() !== 'svg') node.childNodes.forEach(collect);
  };
  collect(element);
  if (textNodes.length === 0 && element.ownerDocument) {
    element.prepend(element.ownerDocument.createTextNode(label));
    return;
  }
  textNodes.forEach((node, index) => {
    const next = index === 0 ? label : '';
    if (node.textContent !== next) node.textContent = next;
  });
}

function normaliseLegacyDemoDestination(link: HTMLAnchorElement) {
  const label = link.textContent?.replace(/\s+/g, ' ').trim() ?? '';
  if (label === 'Book a Demo' || label === 'Get an AI Webstore Suite Demo') {
    link.setAttribute('href', '/book-a-demo');
  }
}

function placeDemoBeforePricing(root: HTMLElement) {
  const groups = new Set<HTMLElement>();
  root.querySelectorAll<HTMLAnchorElement>('a[data-antbuildz-cta="true"]').forEach(link => {
    if (link.parentElement) groups.add(link.parentElement);
  });

  groups.forEach(group => {
    const links = Array.from(group.children).filter(
      (element): element is HTMLAnchorElement => element instanceof HTMLAnchorElement,
    );
    const demo = links.find(link => link.dataset.antbuildzCtaDestination === '/book-a-demo');
    const pricing = links.find(link => link.dataset.antbuildzCtaDestination === '/pricing');
    if (!demo || !pricing || links.indexOf(demo) < links.indexOf(pricing)) return;
    group.insertBefore(demo, pricing);
  });
}

export function applyPublicCtaSystem(root: HTMLElement, pathname: string) {
  if (!PUBLIC_CTA_PAGES.has(pathname)) return;

  root.querySelectorAll<HTMLAnchorElement>(PUBLIC_CTA_SELECTORS).forEach(link => {
    normaliseLegacyDemoDestination(link);
    const destination = destinationFromHref(link.getAttribute('href') ?? '');
    if (!destination) return;

    const rule = PUBLIC_CTA_DESTINATIONS[destination];
    setCtaLabel(link, rule.label);
    link.dataset.antbuildzCta = 'true';
    link.dataset.antbuildzCtaDestination = destination;
    link.dataset.antbuildzCtaVariant = rule.variant;
    if (link.hasAttribute('aria-label')) link.setAttribute('aria-label', rule.label);
  });

  placeDemoBeforePricing(root);

  // Webstore uses a small number of intentional text CTAs to cross-link to
  // the Agent page. They keep their lighter link treatment, but share the
  // same destination-owned wording as the corresponding button.
  if (pathname === '/ai-webstore-suite') {
    root.querySelectorAll<HTMLAnchorElement>('.webstore2-page a[href="/ai-agent"]').forEach(link => {
      if (link.closest('header, footer')) return;
      setCtaLabel(link, PUBLIC_CTA_DESTINATIONS['/ai-agent'].label);
      link.dataset.antbuildzTextCta = 'true';
    });
  }

}
