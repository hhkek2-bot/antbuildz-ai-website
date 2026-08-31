export const AI_WEBSTORE_PAGE = {
  path: '/ai-webstore-suite',
  title: 'AI Webstore Suite',
  description: 'Extend your AI Sales Agent with a browsable product catalogue, dedicated product pages and supported inventory workflows through the AI Webstore Suite.',
  url: 'https://antbuildz.ai/ai-webstore-suite',
  image: 'https://antbuildz.ai/images/antbuildz-ai-social-share.jpg',
} as const;

/** Keep the copied app's head updates aligned with the canonical product page. */
export function syncWebstoreMetadata(doc: Document, pathname: string) {
  if (pathname !== AI_WEBSTORE_PAGE.path) return;
  const title = `${AI_WEBSTORE_PAGE.title} | Antbuildz AI`;
  if (doc.title !== title) doc.title = title;
  const values: Record<string, string> = {
    'meta[name="description"]': AI_WEBSTORE_PAGE.description,
    'meta[name="robots"]': 'index, follow',
    'meta[name="googlebot"]': 'index, follow',
    'meta[property="og:title"]': AI_WEBSTORE_PAGE.title,
    'meta[property="og:description"]': AI_WEBSTORE_PAGE.description,
    'meta[property="og:url"]': AI_WEBSTORE_PAGE.url,
    'meta[property="og:image"]': AI_WEBSTORE_PAGE.image,
    'meta[name="twitter:title"]': AI_WEBSTORE_PAGE.title,
    'meta[name="twitter:description"]': AI_WEBSTORE_PAGE.description,
    'meta[name="twitter:image"]': AI_WEBSTORE_PAGE.image,
  };
  for (const [selector, value] of Object.entries(values)) {
    for (const element of doc.querySelectorAll(selector)) {
      if (element.getAttribute('content') !== value) element.setAttribute('content', value);
    }
  }
  for (const link of doc.querySelectorAll('link[rel="canonical"]')) {
    if (link.getAttribute('href') !== AI_WEBSTORE_PAGE.url) link.setAttribute('href', AI_WEBSTORE_PAGE.url);
  }
}
