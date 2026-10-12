import type { MetadataRoute } from 'next';
import { productRoutes, solutions } from '@/lib/site-content';
import { resourceSeoEntries } from '@/lib/resource-seo';
import { AI_ROLE_LINKS, AI_ROLE_REDIRECTS } from '@/lib/ai-roles';

const lastVerified = '2026-09-02';
const refinedRoutes = new Set(['ai-agent', 'ai-webstore-suite', 'ai-agent-console', 'book-a-demo', 'resources', 'about', 'agreements']);
const legalDocuments = ['terms', 'privacy', 'dpa', 'acceptable-use'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://antbuildz.ai';
  const canonicalProductRoutes = productRoutes.filter((slug) => slug !== 'ai-agent-roles' && slug !== 'faqs');
  const canonicalStaticSlugs = [...canonicalProductRoutes, ...solutions.map(({ slug }) => slug)];

  return [
    { url: base, lastModified: lastVerified },
    ...canonicalStaticSlugs.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: slug === 'ai-agent' ? '2026-09-11' : refinedRoutes.has(slug) ? '2026-09-06' : lastVerified,
    })),
    { url: `${base}/help/ai`, lastModified: lastVerified },
    { url: `${base}/resources/getting-started`, lastModified: '2026-09-07' },
    { url: `${base}/conversational-experience`, lastModified: '2026-10-10' },
    { url: `${base}/ai-roles`, lastModified: '2026-09-04' },
    { url: `${base}/who-we-serve`, lastModified: '2026-09-06' },
    ...AI_ROLE_LINKS.map(({ href }) => ({ url: `${base}${href}`, lastModified: '2026-09-04' })),
    ...legalDocuments.map((document) => ({
      url: `${base}/agreements/${document}`,
      lastModified: '2026-09-04',
    })),
    ...resourceSeoEntries.filter(article => !AI_ROLE_REDIRECTS[`/resources/${article.slug}`]).map((article) => ({
      url: `${base}/resources/${article.slug}`,
      ...(article.dateModified || article.datePublished
        ? { lastModified: article.dateModified ?? article.datePublished }
        : {}),
    })),
  ];
}
