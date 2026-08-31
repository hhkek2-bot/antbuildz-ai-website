import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { allStaticSlugs, getSolution } from '@/lib/site-content';
import { SOCIAL_SHARE_IMAGE } from '@/lib/social-share';
import { OriginalAntbuildzApp } from '../original-antbuildz-app';
import { WebstoreConceptPage } from '../webstore-2-ai-webstore-preview/webstore-concept';

const pageTitles: Record<string, [string, string]> = {
  'ai-webstore-suite': ['AI Webstore Suite', 'Extend your AI Sales Agent with a browsable product catalogue, dedicated product pages and supported inventory workflows through the AI Webstore Suite.'],
  'ai-sales-agent': ['Industrial AI Sales Agent', 'Qualify complex industrial enquiries, recommend supported products and prepare sales-ready handovers.'],
  'ai-agent-console': ['AI Agent Console', 'Manage AI knowledge, instructions, conversations, workflows, testing and performance in one workspace.'],
  pricing: ['Pricing', 'Explore Antbuildz AI Webstore Suite and AI Sales Agent plans.'],
  'book-a-demo': ['Book a Demo', 'Share your name and work email, then schedule an Antbuildz AI demo for your industrial sales workflows.'],
  resources: ['Industrial AI Resources', 'Practical guides for AI Agents, product knowledge and industrial buyer journeys.'],
  'ai-agent-roles': ['AI Agent Roles', 'Specialised AI roles for sales, product, service, technical support and after-sales workflows.'],
  faqs: ['AI FAQs', 'Answers about the Antbuildz AI Sales Agent, AI Webstore Suite and AI Agent Console.'],
  about: ['About Antbuildz', 'Built from industrial rental and sales experience, designed for practical AI commerce.'],
  agreements: ['Antbuildz AI Agreements & Policies', 'Find privacy, data-handling and product policies for Antbuildz AI services.'],
};

export function generateStaticParams() {
  return allStaticSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  const [title, description] = solution
    ? [`AI Sales Agent for ${solution.accent}`, solution.summary]
    : (pageTitles[slug] ?? ['Antbuildz AI', 'Industrial AI sales ecosystem.']);
  const images = solution
    ? [{ url: solution.image, alt: `${solution.navLabel} industrial operations` }]
    : [SOCIAL_SHARE_IMAGE];
  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: { title, description, url: `/${slug}`, images },
    twitter: { card: 'summary_large_image', title, description, images },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === 'develop-admin') {
    redirect('/ai-agent-console');
  }
  if (slug === 'ai-agent-roles') {
    redirect('/resources/ai-agent-roles');
  }
  if (slug === 'help' || slug === 'faqs') {
    redirect('/help/ai');
  }
  if (slug === 'ai-webstore-suite') {
    return <WebstoreConceptPage />;
  }

  return <OriginalAntbuildzApp />;
}
