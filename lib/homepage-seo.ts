/** Homepage metadata shared by the server and the transferred app's head adapter. */
export const HOMEPAGE_SEO = {
  title: 'Industrial AI Sales Agent for B2B | Antbuildz AI',
  description: 'Antbuildz AI is the Industrial AI Sales Agent that helps buyers understand complex products, find suitable options and submit qualified enquiries—using approved product and inventory data, with a clear handover to your team.',
  url: 'https://antbuildz.ai',
  image: 'https://antbuildz.ai/images/antbuildz-ai-social-share.jpg',
} as const;

export const HOMEPAGE_WEBPAGE = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${HOMEPAGE_SEO.url}/#webpage`,
  name: HOMEPAGE_SEO.title,
  description: HOMEPAGE_SEO.description,
  url: HOMEPAGE_SEO.url,
  inLanguage: 'en-SG',
  isPartOf: { '@id': `${HOMEPAGE_SEO.url}/#website` },
  about: { '@id': `${HOMEPAGE_SEO.url}/#software` },
};

export function syncHomepageMetadata(doc: Document, pathname: string) {
  if (pathname !== '/') return;
  if (doc.title !== HOMEPAGE_SEO.title) doc.title = HOMEPAGE_SEO.title;
  const values: Record<string, string> = {
    'meta[name="description"]': HOMEPAGE_SEO.description,
    'meta[property="og:title"]': HOMEPAGE_SEO.title,
    'meta[property="og:description"]': HOMEPAGE_SEO.description,
    'meta[property="og:url"]': HOMEPAGE_SEO.url,
    'meta[property="og:image"]': HOMEPAGE_SEO.image,
    'meta[name="twitter:title"]': HOMEPAGE_SEO.title,
    'meta[name="twitter:description"]': HOMEPAGE_SEO.description,
    'meta[name="twitter:image"]': HOMEPAGE_SEO.image,
  };
  for (const [selector, value] of Object.entries(values)) {
    for (const element of doc.querySelectorAll(selector)) {
      if (element.getAttribute('content') !== value) element.setAttribute('content', value);
    }
  }
  for (const link of doc.querySelectorAll('link[rel="canonical"]')) {
    if (link.getAttribute('href') !== HOMEPAGE_SEO.url) link.setAttribute('href', HOMEPAGE_SEO.url);
  }
  // Correct only the transferred route's schema. Preserve the shared server graph.
  const routeSchema = doc.getElementById('route-jsonld');
  const json = JSON.stringify(HOMEPAGE_WEBPAGE);
  if (routeSchema && routeSchema.textContent !== json) routeSchema.textContent = json;
}
