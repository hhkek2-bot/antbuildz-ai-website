import { OriginalAntbuildzApp } from '../../original-antbuildz-app';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { AI_HELP_SEO } from '../../../lib/ai-help-scope';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== 'ai') return { robots: { index: false, follow: true } };
  return {
    title: 'AI Help Centre',
    description: AI_HELP_SEO.description,
    alternates: { canonical: '/help/ai' },
    openGraph: { title: AI_HELP_SEO.title, description: AI_HELP_SEO.description, url: '/help/ai' },
    twitter: { title: AI_HELP_SEO.title, description: AI_HELP_SEO.description },
  };
}

export default async function HelpPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === 'marketplace') {
    redirect('https://antbuildz.com/help/marketplace');
  }
  return <OriginalAntbuildzApp />;
}
