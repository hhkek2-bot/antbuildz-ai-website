import type { MetadataRoute } from 'next';
import { allStaticSlugs } from '@/lib/site-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://antbuildz.ai';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...allStaticSlugs.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: slug === 'ai-sales-agent' || slug === 'ai-webstore-suite' ? 0.9 : 0.7,
    })),
  ];
}
