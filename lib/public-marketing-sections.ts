import { PUBLIC_MARKETING_TYPOGRAPHY_PATHS } from './public-marketing-typography';

const SPACE_ATTRIBUTE = 'data-antbuildz-section-space';
const SURFACE_ATTRIBUTE = 'data-antbuildz-section-surface';
const TITLE_ROLE_SELECTOR = '[data-antbuildz-type-role="section-title"]';

type SectionSpaceRole = 'major' | 'compact';
type SectionSurfaceRole = 'canvas' | 'clean' | 'soft' | 'dark';

const COMPONENT_OWNED_TITLE_SELECTORS = [
  '#home-selection-approach',
].join(',');

const COMPONENT_OWNED_SECTION_SELECTORS = [
  '.ws2-how-section',
  '.pricing-section:has(.pricing-card[data-antbuildz-plan])',
].join(',');

const COMPACT_TITLE_SELECTORS = [
  '.ws-cta-title',
  '.pricing-bottom-cta > h2',
  '.about-final-section h2',
].join(',');

const DARK_SECTION_SELECTORS = [
  '.ws2-global-agent-section',
  '.ink-section',
].join(',');

const CLEAN_SECTION_SELECTORS = [
  '.aria-sales-agent-cta',
  '.si-section',
  '.af-section',
  '.aisl-section',
  '.bright-faq-accordion',
  '.ws-cta-section',
  '.si-sierra-stage--outcomes',
  '.si-sierra-stage--faqs',
  '.si-sierra-stage--cta',
  '.about-history-section',
  '.about-ai-section',
  '.about-build-section',
  '.about-final-section',
].join(',');

const CLEAN_TITLE_SELECTORS = [
  '#home-agent-foundations',
  '#home-faq-heading',
].join(',');

const SOFT_SECTION_SELECTORS = [
  '.bright-features',
  '.pain-bento-section',
  '.ws2-benefits-section',
  '.pricing-compare-section',
  '.si-sierra-stage--context',
  '.si-sierra-stage--foundation',
  '.about-vision-section',
  '.about-team-section',
].join(',');

const SOFT_TITLE_SELECTORS = [
  '#home-product-relationship',
  '#home-data-trust-heading',
].join(',');

function matches(element: HTMLElement, selectors: string) {
  return Boolean(selectors) && element.matches(selectors);
}

function inferSurface(section: HTMLElement, title: HTMLElement): SectionSurfaceRole {
  if (matches(section, DARK_SECTION_SELECTORS)) return 'dark';
  if (matches(section, CLEAN_SECTION_SELECTORS) || matches(title, CLEAN_TITLE_SELECTORS)) return 'clean';
  if (matches(section, SOFT_SECTION_SELECTORS) || matches(title, SOFT_TITLE_SELECTORS)) return 'soft';

  const style = window.getComputedStyle(section);
  const channels = style.backgroundColor.match(/[\d.]+/g)?.map(Number) ?? [];
  const [red = 0, green = 0, blue = 0, alpha = 1] = channels;

  if (alpha === 0) return style.backgroundImage === 'none' ? 'canvas' : 'soft';
  if (red < 80 && green < 80 && blue < 80) return 'dark';
  if (red >= 254 && green >= 254 && blue >= 254) return 'clean';
  if (red === 248 && green === 247 && blue === 255) return 'canvas';
  if (red === 241 && green === 239 && blue === 248) return 'soft';
  return 'soft';
}

function setRole(element: HTMLElement, attribute: string, value: string) {
  if (element.getAttribute(attribute) !== value) element.setAttribute(attribute, value);
}

function resolveSectionOwner(title: HTMLElement) {
  const section = title.closest<HTMLElement>('section');
  if (section?.matches('.next-step-panel')) {
    return section.closest<HTMLElement>('.si-sierra-stage--cta') ?? section;
  }
  return section;
}

export function applyPublicMarketingSectionSystem(root: HTMLElement, pathname: string) {
  const isPublicMarketingRoute = PUBLIC_MARKETING_TYPOGRAPHY_PATHS.has(pathname);
  root.classList.toggle('antbuildz-section-system', isPublicMarketingRoute);

  const markedSections = new Set<HTMLElement>();
  if (isPublicMarketingRoute) {
    root.querySelectorAll<HTMLElement>(TITLE_ROLE_SELECTOR).forEach(title => {
      if (matches(title, COMPONENT_OWNED_TITLE_SELECTORS)) return;
      const section = resolveSectionOwner(title);
      if (!section || section.matches('[hidden],[inert]') || matches(section, COMPONENT_OWNED_SECTION_SELECTORS)) return;

      const space: SectionSpaceRole = matches(title, COMPACT_TITLE_SELECTORS) ? 'compact' : 'major';
      setRole(section, SPACE_ATTRIBUTE, space);
      setRole(section, SURFACE_ATTRIBUTE, inferSurface(section, title));
      markedSections.add(section);
    });
  }

  root.querySelectorAll<HTMLElement>(`[${SPACE_ATTRIBUTE}], [${SURFACE_ATTRIBUTE}]`).forEach(section => {
    if (markedSections.has(section)) return;
    section.removeAttribute(SPACE_ATTRIBUTE);
    section.removeAttribute(SURFACE_ATTRIBUTE);
  });
}
