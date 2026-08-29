const ROLE_ATTRIBUTE = 'data-antbuildz-type-role';
const ALIGN_ATTRIBUTE = 'data-antbuildz-type-align';

export const PUBLIC_MARKETING_TYPOGRAPHY_PATHS = new Set([
  '/',
  '/ai-sales-agent',
  '/ai-webstore-suite',
  '/webstore-2-ai-webstore-preview',
  '/pricing',
  '/resources',
  '/help/ai',
  '/about',
  '/book-a-demo',
  '/agreements',
  '/rental-businesses',
  '/manufacturers-brands',
  '/dealers-distributors',
  '/industrial-mro',
  '/hardware-trade-supplies',
  '/building-engineering',
  '/parts-aftermarket',
  '/buggies-commercial-vehicles',
]);

export const PUBLIC_MARKETING_TYPOGRAPHY_SELECTORS = {
  heroTitle: [
    '.ai-marketplace-hero-copy h1',
    '.bright-hero-text-block h1',
    '.ws2-hero-title',
    '.pricing-hero > h1',
    '.bright-resource-hero-copy > h1',
    '.help-centre-hero__intro > h1',
    '.about-hero-copy > h1',
    '.book-demo-story > h1',
    '.legal-policies-home__hero-content > h1',
    '.si-detail-hero-copy > h1',
  ],
  sectionTitle: [
    '#home-market-shift',
    '#home-agent-foundations',
    '#home-industrial-context',
    '#home-selection-approach',
    '#home-product-relationship',
    '#home-industries-heading',
    '#home-data-trust-heading',
    '#home-faq-heading',
    '.aria-sales-agent-cta__copy > h2',
    '.bright-section-header > h2',
    '.si-header > .si-headline',
    '.af-section-header > h2',
    '.flexible-ai-platform__heading > h2',
    '.dt-header > .dt-title',
    '.aisl-intro > h2',
    '.bright-faq-accordion-title',
    '.ws-cta-title',
    '.mkt-section-title',
    '.pricing-section-header > h2',
    '.pricing-bottom-cta > h2',
    '.next-step-panel__copy > h2',
    '.si-sierra-copy > h2',
    '.si-sierra-editorial > h2',
    '.si-sierra-trust-panel__copy > h2',
    '.si-sierra-heading > h2',
    '.about-section-intro > h2',
    '.about-vision-section h2',
    '.about-team-section h2',
    '.about-section-heading > h2',
    '.about-final-section h2',
  ],
  majorIntro: [
    '.bright-hero-text-block > .bright-subtitle',
    '.ws2-hero-desc',
    '.pricing-hero > .pricing-hero-sub',
    '.bright-resource-hero-copy > .bright-subtitle',
    '.help-centre-hero__intro > p:not(.faq-master-eyebrow)',
    '.about-hero-copy > p',
    '.book-demo-story > .book-demo-story__lead',
    '.legal-policies-home__hero-content > .legal-policies-home__intro',
    '.si-detail-hero-copy > .si-hero-copy',
    '#home-market-shift + p',
    '#home-agent-foundations ~ p',
    'section[aria-labelledby="home-industrial-context"] p[class*="lead"]',
    '#home-selection-approach + p',
    '#home-product-relationship + p',
    '#home-data-trust-heading + p',
    '#home-faq-heading + p',
    '.aria-sales-agent-cta__description',
    '.bright-section-header > p',
    '.si-header > .si-sub',
    '.af-section-header > p:not(.af-section-eyebrow)',
    '.flexible-ai-platform__heading > p',
    '.dt-header > .dt-desc',
    '.aisl-intro > .aisl-intro-copy',
    '.mkt-section-desc',
    '.pricing-section-header > p',
    '.pricing-bottom-cta > p',
    '.next-step-panel__copy > p:not(.next-step-panel__eyebrow)',
    '.si-sierra-copy > p',
    '.si-sierra-editorial > p',
    '.si-sierra-trust-panel__copy > p',
    '.si-sierra-heading > p',
    '.about-section-heading > p',
  ],
} as const;

type MarketingTypeRole = 'hero-title' | 'section-title' | 'major-intro';

function markRole(root: HTMLElement, selectors: readonly string[], role: MarketingTypeRole) {
  root.querySelectorAll<HTMLElement>(selectors.join(',')).forEach(element => {
    if (element.getAttribute(ROLE_ATTRIBUTE) !== role) element.setAttribute(ROLE_ATTRIBUTE, role);

    if (role === 'hero-title') return;
    const isCentred = window.getComputedStyle(element).textAlign === 'center';
    if (isCentred && element.getAttribute(ALIGN_ATTRIBUTE) !== 'center') {
      element.setAttribute(ALIGN_ATTRIBUTE, 'center');
    } else if (!isCentred && element.hasAttribute(ALIGN_ATTRIBUTE)) {
      element.removeAttribute(ALIGN_ATTRIBUTE);
    }
  });
}

export function applyPublicMarketingTypographyTrial(root: HTMLElement, pathname: string) {
  const isTrialRoute = PUBLIC_MARKETING_TYPOGRAPHY_PATHS.has(pathname);
  root.classList.toggle('antbuildz-typography-trial', isTrialRoute);

  if (!isTrialRoute) {
    root.querySelectorAll<HTMLElement>(`[${ROLE_ATTRIBUTE}]`).forEach(element => {
      element.removeAttribute(ROLE_ATTRIBUTE);
      element.removeAttribute(ALIGN_ATTRIBUTE);
    });
    return;
  }

  markRole(root, PUBLIC_MARKETING_TYPOGRAPHY_SELECTORS.heroTitle, 'hero-title');
  markRole(root, PUBLIC_MARKETING_TYPOGRAPHY_SELECTORS.sectionTitle, 'section-title');
  markRole(root, PUBLIC_MARKETING_TYPOGRAPHY_SELECTORS.majorIntro, 'major-intro');
}
