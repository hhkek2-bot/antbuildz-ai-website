import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { getResourceRedirect, getResourceSeo, resourceSeoEntries } from '@/lib/resource-seo';
import { SOCIAL_SHARE_IMAGE } from '@/lib/social-share';
import { AI_ROLE_REDIRECTS } from '@/lib/ai-roles';
import { getResourceBlogSchema } from '@/lib/resource-blog-schema';
import { OriginalAntbuildzApp } from '../../original-antbuildz-app';

const siteUrl = 'https://antbuildz.ai';

export function generateStaticParams() {
  return resourceSeoEntries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug === 'ai-agent-roles') {
    return {
      title: 'AI Agent Roles',
      description: 'Explore five roles of one AI Agent across sales, product guidance, customer support, technical support and after-sales.',
      alternates: { canonical: '/ai-roles' },
      robots: { index: false, follow: true },
    };
  }
  if (AI_ROLE_REDIRECTS[`/resources/${slug}`]) return { robots: { index: false, follow: true } };
  if (getResourceRedirect(slug)) return { robots: { index: false, follow: true } };

  const article = getResourceSeo(slug);
  if (!article) notFound();

  const url = `${siteUrl}/resources/${article.slug}`;
  const images = article.image
    ? [{ url: article.image, alt: article.imageAlt ?? article.title }]
    : [SOCIAL_SHARE_IMAGE];

  return {
    title: { absolute: article.title },
    description: article.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      url,
      images,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images,
    },
  };
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (AI_ROLE_REDIRECTS[`/resources/${slug}`]) permanentRedirect(AI_ROLE_REDIRECTS[`/resources/${slug}`]);
  const redirect = getResourceRedirect(slug);
  if (redirect) permanentRedirect(redirect);

  const article = getResourceSeo(slug);
  if (!article) notFound();

  const url = `${siteUrl}/resources/${article.slug}`;
  const image = article.image ? new URL(article.image, siteUrl).toString() : SOCIAL_SHARE_IMAGE.url;
  const blogSchema = getResourceBlogSchema(article.slug);
  const discussesWebstore = /webstore|product page|inventory/i.test(`${article.title} ${article.description}`);
  const articleSection = article.slug.startsWith('ai-agent-console-')
    ? 'AI Agent Console guides'
    : discussesWebstore
      ? 'How Webstore supports the AI Sales Agent'
      : 'Industrial AI Sales Agent guides';
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: article.title.replace(/\s+\|\s+.*$/, ''),
        name: article.title,
        description: article.description,
        url,
        mainEntityOfPage: { '@id': url },
        inLanguage: 'en-SG',
        image,
        ...(blogSchema ? { articleBody: blogSchema.articleBody, wordCount: blogSchema.wordCount } : {}),
        articleSection,
        keywords: [
          'industrial AI Sales Agent',
          'B2B sales enquiries',
          'approved business knowledge',
          ...(discussesWebstore ? ['AI Webstore', 'structured product data', 'inventory context'] : []),
        ],
        about: { '@type': 'SoftwareApplication', name: 'Antbuildz AI Sales Agent', applicationCategory: 'BusinessApplication' },
        ...(discussesWebstore ? { mentions: { '@type': 'SoftwareApplication', name: 'Antbuildz AI Webstore Suite', applicationCategory: 'BusinessApplication' } } : {}),
        ...(article.datePublished ? { datePublished: article.datePublished } : {}),
        ...(article.dateModified ? { dateModified: article.dateModified } : {}),
        author: { '@id': `${siteUrl}/#organization` },
        publisher: { '@id': `${siteUrl}/#organization` },
        isPartOf: { '@id': `${siteUrl}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Resources', item: `${siteUrl}/resources` },
          { '@type': 'ListItem', position: 3, name: article.title.replace(/\s+\|\s+.*$/, ''), item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        id="route-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }}
      />
      <OriginalAntbuildzApp />
    </>
  );
}
