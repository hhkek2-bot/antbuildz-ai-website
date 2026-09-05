import { OriginalAntbuildzApp } from '../../original-antbuildz-app';
import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { AI_HELP_SEO } from '../../../lib/ai-help-scope';
import { SOCIAL_SHARE_IMAGE } from '../../../lib/social-share';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== 'ai') return { robots: { index: false, follow: true } };
  return {
    title: 'AI Help Centre',
    description: AI_HELP_SEO.description,
    alternates: { canonical: '/help/ai' },
    openGraph: { title: AI_HELP_SEO.title, description: AI_HELP_SEO.description, url: '/help/ai', images: [SOCIAL_SHARE_IMAGE] },
    twitter: { card: 'summary_large_image', title: AI_HELP_SEO.title, description: AI_HELP_SEO.description, images: [SOCIAL_SHARE_IMAGE] },
  };
}

export default async function HelpPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === 'marketplace') {
    permanentRedirect('https://antbuildz.com/help/marketplace');
  }
  if (slug !== 'ai') notFound();

  const routeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://antbuildz.ai/help/ai#webpage',
    name: AI_HELP_SEO.title,
    description: AI_HELP_SEO.description,
    url: 'https://antbuildz.ai/help/ai',
    inLanguage: 'en-SG',
    isPartOf: { '@id': 'https://antbuildz.ai/#website' },
  };

  return (
    <>
      <script
        id="route-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema).replace(/</g, '\\u003c') }}
      />
      <OriginalAntbuildzApp />
    </>
  );
}
