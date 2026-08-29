import type { MetadataRoute } from 'next';
import { allStaticSlugs } from '@/lib/site-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://antbuildz.ai';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...allStaticSlugs.filter((slug) => slug !== 'faqs').map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: slug === 'ai-sales-agent' || slug === 'ai-webstore-suite' ? 0.9 : 0.7,
    })),
    { url: `${base}/help/ai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];
}
