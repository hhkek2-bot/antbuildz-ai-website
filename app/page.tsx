import { OriginalAntbuildzApp } from './original-antbuildz-app';
import { HomeEducation } from './home-education';
import type { Metadata } from 'next';
import { HOMEPAGE_SEO, HOMEPAGE_WEBPAGE } from '../lib/homepage-seo';
import { SOCIAL_SHARE_IMAGE } from '../lib/social-share';
import { MarketingNoScript } from './marketing-no-script';

export const metadata: Metadata = {
  title: { absolute: HOMEPAGE_SEO.title },
  description: HOMEPAGE_SEO.description,
  alternates: { canonical: HOMEPAGE_SEO.url },
  openGraph: {
    title: HOMEPAGE_SEO.title, description: HOMEPAGE_SEO.description,
    url: HOMEPAGE_SEO.url, siteName: 'Antbuildz AI', type: 'website', locale: 'en_US',
    images: [SOCIAL_SHARE_IMAGE],
  },
  twitter: { card: 'summary_large_image', title: HOMEPAGE_SEO.title, description: HOMEPAGE_SEO.description, images: [HOMEPAGE_SEO.image] },
};

export default function Home() {
  return (
    <>
      <link rel="preload" as="image" href="/videos/home-hero-ai-agent-product-match-v2-poster.jpg" fetchPriority="high" />
      <script
        id="route-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOMEPAGE_WEBPAGE).replace(/</g, '\\u003c') }}
      />
      <OriginalAntbuildzApp />
      <MarketingNoScript title="Get Discovered Make Conversations Count" description="Engage customers 24/7 with an AI Agent built for complex product and service conversations. Boost product visibility across search engines and AI platforms with AI Webstore Suite." />
      <HomeEducation />
    </>
  );
}
