import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { allStaticSlugs, getSolution } from '@/lib/site-content';
import { SOCIAL_SHARE_IMAGE } from '@/lib/social-share';
import { WEBSTORE_DESCRIPTION } from '@/lib/ai-webstore-copy';
import { OriginalAntbuildzApp } from '../original-antbuildz-app';
import { AiSalesAgentPage } from '../ai-sales-agent-global-reach';
import { WebstoreConceptPage } from '../webstore-2-ai-webstore-preview/webstore-concept';
import { LEGAL_ALIASES } from '@/lib/legal-navigation';
import { RESOURCE_LIBRARY_SEO } from '@/lib/resource-copy';

const pageTitles: Record<string, [string, string]> = {
  'ai-webstore-suite': ['AI Webstore Suite for Industrial Products', WEBSTORE_DESCRIPTION],
  'ai-sales-agent': ['AI Sales Agent for Industrial Enquiries', 'Qualify complex industrial sales and rental enquiries, recommend suitable options from approved knowledge, and prepare useful handovers for your team.'],
  'ai-agent-console': ['AI Agent Console for Industrial Sales Teams', 'Manage approved knowledge, Agent instructions, conversations, workflows, testing and performance for your industrial AI sales operation.'],
  pricing: ['Antbuildz AI Pricing', 'Compare the published Antbuildz AI Sales Agent and AI Webstore Suite plans, included features and available setup paths.'],
  'book-a-demo': ['Book an Industrial AI Demo', 'Share your contact details and schedule an Antbuildz AI demo focused on your industrial products, sales workflows and buyer enquiries.'],
  resources: [RESOURCE_LIBRARY_SEO.title, RESOURCE_LIBRARY_SEO.description],
  'ai-agent-roles': ['AI Agent Roles', 'Specialised AI roles for sales, product, service, technical support and after-sales workflows.'],
  faqs: ['AI FAQs', 'Answers about the Antbuildz AI Sales Agent, AI Webstore Suite and AI Agent Console.'],
  about: ['About Antbuildz Industrial AI', 'Learn how Antbuildz applies industrial rental, product and sales experience to practical AI tools for complex B2B buyer journeys.'],
  agreements: ['Antbuildz AI Agreements & Policies', 'Find the published privacy, data-handling and product policy documents that apply to Antbuildz AI services and customers.'],
};

const redirectTargets: Record<string, string> = {
  ...LEGAL_ALIASES,
  legal: '/agreements',
  'develop-admin': '/ai-agent-console',
  'ai-agent-roles': '/ai-roles',
  assistant: '/ai-sales-agent',
  webstore: '/ai-webstore-suite',
  home: '/',
  'ai-platform': '/',
  login: '/sign-in',
  help: '/help/ai',
  faqs: '/help/ai',
  marketplace: 'https://antbuildz.com',
  blogs: '/resources',
};

const nonIndexableClientPages: Record<string, [string, string]> = {
  trial: ['Start an Antbuildz AI Trial', 'Create and configure an Antbuildz AI Agent for your business.'],
  contact: ['Contact Antbuildz AI', 'Contact the Antbuildz AI team about products, demos and industrial sales workflows.'],
  'sign-in': ['Sign In to Antbuildz AI', 'Sign in to your Antbuildz AI account.'],
  signup: ['Create an Antbuildz AI Account', 'Create an account to start using Antbuildz AI.'],
  'forgot-password': ['Reset Your Antbuildz AI Password', 'Request a password reset for your Antbuildz AI account.'],
  'reset-password': ['Choose a New Antbuildz AI Password', 'Choose a new password for your Antbuildz AI account.'],
  subscribe: ['Antbuildz AI Subscription', 'Review and manage an Antbuildz AI subscription.'],
  onboarding: ['Antbuildz AI Onboarding', 'Complete the setup steps for your Antbuildz AI account.'],
  admin: ['Antbuildz AI Administration', 'Restricted Antbuildz AI administration workspace.'],
  owner: ['Antbuildz AI Administration', 'Restricted Antbuildz AI administration workspace.'],
  'platform-admin': ['Antbuildz AI Administration', 'Restricted Antbuildz AI administration workspace.'],
  chat: ['Antbuildz AI Conversation', 'Antbuildz AI conversation workspace.'],
  monitor: ['Antbuildz AI Monitor', 'Restricted Antbuildz AI monitoring workspace.'],
  'main-dashboard': ['Antbuildz AI Dashboard', 'Restricted Antbuildz AI account workspace.'],
};

export function generateStaticParams() {
  return allStaticSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (redirectTargets[slug]) {
    return { robots: { index: false, follow: true } };
  }
  if (nonIndexableClientPages[slug]) {
    const [title, description] = nonIndexableClientPages[slug];
    return { title, description, robots: { index: false, follow: true } };
  }
  const solution = getSolution(slug);
  if (!solution && !pageTitles[slug]) notFound();
  const [title, description] = solution
    ? [`AI Sales Agent for ${solution.accent}`, solution.summary]
    : pageTitles[slug];
  const images = solution
    ? [{ url: solution.image, alt: `${solution.navLabel} industrial operations` }]
    : [SOCIAL_SHARE_IMAGE];
  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    robots: { index: true, follow: true },
    openGraph: { title, description, url: `/${slug}`, siteName: 'Antbuildz AI', type: 'website', locale: 'en_SG', images },
    twitter: { card: 'summary_large_image', title, description, images },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (redirectTargets[slug]) permanentRedirect(redirectTargets[slug]);

  if (nonIndexableClientPages[slug]) return <OriginalAntbuildzApp />;

  const solution = getSolution(slug);
  const routeSeo = solution
    ? { title: `AI Sales Agent for ${solution.accent}`, description: solution.summary }
    : pageTitles[slug]
      ? { title: pageTitles[slug][0], description: pageTitles[slug][1] }
      : null;
  if (!routeSeo) notFound();

  const url = `https://antbuildz.ai/${slug}`;
  const routeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name: routeSeo.title,
        description: routeSeo.description,
        url,
        inLanguage: 'en-SG',
        isPartOf: { '@id': 'https://antbuildz.ai/#website' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://antbuildz.ai' },
          { '@type': 'ListItem', position: 2, name: routeSeo.title, item: url },
        ],
      },
    ],
  };

  const content = slug === 'ai-webstore-suite'
    ? <WebstoreConceptPage />
    : slug === 'ai-sales-agent'
      ? <AiSalesAgentPage />
      : <OriginalAntbuildzApp />;

  return (
    <>
      <script
        id="route-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema).replace(/</g, '\\u003c') }}
      />
      {content}
    </>
  );
}
