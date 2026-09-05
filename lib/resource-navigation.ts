import { RESOURCE_URL_REDIRECTS } from './resource-seo';

const RESOURCE_CANONICAL_TO_LEGACY = Object.fromEntries(
  Object.entries(RESOURCE_URL_REDIRECTS).map(([legacySlug, canonicalSlug]) => [canonicalSlug, legacySlug]),
) as Record<string, string>;

/**
 * The transferred resource app still resolves its original compact slugs.
 * Expose that route only while the copied client bundle boots, then restore the
 * readable canonical address without creating another navigation.
 */
export function getTransferredResourcePath(pathname: string) {
  if (!pathname.startsWith('/resources/')) return null;
  const canonicalSlug = pathname.slice('/resources/'.length).replace(/\/+$/, '');
  const legacySlug = RESOURCE_CANONICAL_TO_LEGACY[canonicalSlug];
  return legacySlug ? `/resources/${legacySlug}` : null;
}

/** Updates copied-app links so resource visits use the readable canonical URL. */
export function syncResourceNavigation(root: HTMLElement) {
  root.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
    const url = new URL(link.href, window.location.origin);
    if (url.origin !== window.location.origin || !url.pathname.startsWith('/resources/')) return;

    const slug = url.pathname.slice('/resources/'.length).replace(/\/+$/, '');
    const canonicalSlug = RESOURCE_URL_REDIRECTS[slug];
    if (!canonicalSlug) return;

    const destination = `/resources/${canonicalSlug}${url.hash}`;
    if (link.getAttribute('href') !== destination) link.setAttribute('href', destination);
    if (link.dataset.resourceNavigation === 'true') return;
    link.dataset.resourceNavigation = 'true';
    link.addEventListener('click', (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey
        || event.shiftKey || event.altKey || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.assign(link.href);
    }, true);
  });
}
