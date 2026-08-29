export const PREVIEW_PAGE = {
  path: '/webstore-2-ai-webstore-preview',
  title: 'AI Webstore Suite — Listing Workflow Concept',
  description: 'Extend your AI Sales Agent with a browsable product catalogue, dedicated product pages and supported inventory workflows through the AI Webstore Suite.',
  url: 'https://antbuildz.ai/webstore-2-ai-webstore-preview',
  image: 'https://antbuildz.ai/images/industrial-ai.png',
} as const;

/** Keep the copied app's head updates aligned with this isolated preview. */
export function syncPreviewMetadata(doc: Document, pathname: string) {
  if (pathname !== PREVIEW_PAGE.path) return;
  const title = `${PREVIEW_PAGE.title} | Antbuildz AI`;
  if (doc.title !== title) doc.title = title;
  const values: Record<string, string> = {
    'meta[name="description"]': PREVIEW_PAGE.description,
    'meta[name="robots"]': 'noindex, nofollow',
    'meta[name="googlebot"]': 'noindex, nofollow',
    'meta[property="og:title"]': PREVIEW_PAGE.title,
    'meta[property="og:description"]': PREVIEW_PAGE.description,
    'meta[property="og:url"]': PREVIEW_PAGE.url,
    'meta[property="og:image"]': PREVIEW_PAGE.image,
    'meta[name="twitter:title"]': PREVIEW_PAGE.title,
    'meta[name="twitter:description"]': PREVIEW_PAGE.description,
    'meta[name="twitter:image"]': PREVIEW_PAGE.image,
  };
  for (const [selector, value] of Object.entries(values)) {
    for (const element of doc.querySelectorAll(selector)) {
      if (element.getAttribute('content') !== value) element.setAttribute('content', value);
    }
  }
  for (const link of doc.querySelectorAll('link[rel="canonical"]')) {
    if (link.getAttribute('href') !== PREVIEW_PAGE.url) link.setAttribute('href', PREVIEW_PAGE.url);
  }
}
