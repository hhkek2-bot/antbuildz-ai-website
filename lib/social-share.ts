export const SOCIAL_SHARE_IMAGE = {
  url: 'https://antbuildz.ai/images/antbuildz-ai-social-share-v2.jpg',
  width: 1200,
  height: 630,
  type: 'image/jpeg',
  alt: 'Make industrial buying better with Antbuildz AI over a mountain logistics scene',
} as const;

export const SOCIAL_SHARE_IMAGE_PATH = '/images/antbuildz-ai-social-share-v2.jpg' as const;

const OBSOLETE_SHARE_IMAGES = new Set([
  'https://antbuildzai.com/cta-construction.jpeg',
  'https://antbuildz.ai/images/antbuildz-ai-social-share.jpg',
]);

/**
 * Prevent the transferred client bundle from restoring its former preview
 * artwork after the canonical server metadata has rendered. Approved,
 * route-specific social images are deliberately left unchanged.
 */
export function syncDefaultSocialShareImage(doc: Document) {
  const selectors = ['meta[property="og:image"]', 'meta[name="twitter:image"]'];
  for (const selector of selectors) {
    for (const element of doc.querySelectorAll<HTMLMetaElement>(selector)) {
      const current = element.content;
      if (OBSOLETE_SHARE_IMAGES.has(current)) element.content = SOCIAL_SHARE_IMAGE.url;
    }
  }
}
