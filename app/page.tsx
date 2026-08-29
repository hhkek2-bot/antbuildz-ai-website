import { OriginalAntbuildzApp } from './original-antbuildz-app';
import { HomeEducation } from './home-education';
import type { Metadata } from 'next';
import { HOMEPAGE_SEO } from '../lib/homepage-seo';

export const metadata: Metadata = {
  title: { absolute: HOMEPAGE_SEO.title },
  description: HOMEPAGE_SEO.description,
  alternates: { canonical: HOMEPAGE_SEO.url },
  openGraph: {
    title: HOMEPAGE_SEO.title, description: HOMEPAGE_SEO.description,
    url: HOMEPAGE_SEO.url, siteName: 'Antbuildz AI', type: 'website', locale: 'en_SG',
    images: [{ url: HOMEPAGE_SEO.image, width: 1792, height: 1024, alt: 'Antbuildz industrial AI ecosystem' }],
  },
  twitter: { card: 'summary_large_image', title: HOMEPAGE_SEO.title, description: HOMEPAGE_SEO.description, images: [HOMEPAGE_SEO.image] },
};

export default function Home() {
  return <><link rel="preload" as="image" href="/marketplace/how-it-works/assets/hero-option-2-mountain-logistics.png" fetchPriority="high" /><OriginalAntbuildzApp /><HomeEducation /></>;
}
