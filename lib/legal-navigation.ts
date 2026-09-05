/** One canonical Antbuildz.ai destination per legal document. */
export const LEGAL_LINKS = [
  ['Terms', '/agreements/terms'],
  ['Privacy', '/agreements/privacy'],
  ['DPA', '/agreements/dpa'],
  ['Acceptable Use', '/agreements/acceptable-use'],
] as const;

export const LEGAL_CONTACT = 'help@antbuildz.ai';

export const LEGAL_ALIASES: Record<string, string> = {
  terms: '/agreements/terms',
  'terms-of-service': '/agreements/terms',
  'terms-and-conditions': '/agreements/terms',
  privacy: '/agreements/privacy',
  'privacy-policy': '/agreements/privacy',
  dpa: '/agreements/dpa',
  'acceptable-use': '/agreements/acceptable-use',
  cookies: '/agreements/privacy#cookies',
  'cookie-policy': '/agreements/privacy#cookies',
};

export function legalDestination(href: string, origin: string): string | null {
  let url: URL;
  try { url = new URL(href, origin); } catch { return null; }
  if (![new URL(origin).hostname, 'antbuildz.ai', 'www.antbuildz.ai', 'antbuildz.com', 'www.antbuildz.com'].includes(url.hostname)) return null;
  const path = url.pathname.replace(/\/+$/, '');
  // The directory is source-rendered; bypass the transferred SPA's old policy list.
  if (path === '/agreements') return '/agreements';
  if (path === '/pages/int-privacypolicy') return '/agreements/privacy';
  if (path === '/pages/webstorepolicy' || path === '/agreements/ai-webstore' || path === '/agreements/platform') return '/agreements/terms';
  const match = path.match(/^\/(?:legal\/|agreements\/)?([^/]+)$/);
  if (!match) return null;
  const destination = LEGAL_ALIASES[match[1]];
  return destination ? `${destination}${destination.includes('#') ? '' : url.hash}` : null;
}

function bindLocalLegalLink(link: HTMLAnchorElement, destination: string) {
  if (link.getAttribute('href') !== destination) link.setAttribute('href', destination);
  if (link.dataset.antbuildzLegalDestination !== destination) link.dataset.antbuildzLegalDestination = destination;
  if (link.dataset.antbuildzLegalBound) return;
  link.dataset.antbuildzLegalBound = 'true';
  // Override stale destinations held by the transferred React bundle.
  link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.assign(link.dataset.antbuildzLegalDestination!);
  }, true);
}

export function syncLegalNavigation(root: HTMLElement) {
  for (const link of root.querySelectorAll<HTMLAnchorElement>('a[href]')) {
    const destination = legalDestination(link.getAttribute('href')!, window.location.origin);
    if (destination) bindLocalLegalLink(link, destination);
    const href = link.getAttribute('href') ?? '';
    if (/^mailto:[^?]*@antbuildz\.(com|ai)(?:\?|$)/i.test(href)) {
      bindLocalLegalLink(link, `mailto:${LEGAL_CONTACT}${href.includes('?') ? href.slice(href.indexOf('?')) : ''}`);
      if (/^[\w.+-]+@antbuildz\.(com|ai)$/i.test(link.textContent?.trim() ?? '')) link.textContent = LEGAL_CONTACT;
    }
  }
}

export function addLegalAcknowledgement(container: HTMLElement, subscription = false) {
  if (container.querySelector('.antbuildz-legal-acknowledgement')) return;
  const doc = container.ownerDocument;
  const notice = doc.createElement('p');
  notice.className = 'antbuildz-legal-acknowledgement';
  notice.append(subscription ? 'By subscribing, you agree to the ' : 'By creating an account, you agree to the ');
  const terms = doc.createElement('a');
  terms.textContent = 'Antbuildz AI Terms of Service';
  bindLocalLegalLink(terms, '/agreements/terms');
  const privacy = doc.createElement('a');
  privacy.textContent = 'Privacy Policy';
  bindLocalLegalLink(privacy, '/agreements/privacy');
  notice.append(terms, ' and acknowledge the ', privacy, '.');
  const button = container.querySelector('button');
  if (button) button.insertAdjacentElement('beforebegin', notice);
  else container.appendChild(notice);
}
