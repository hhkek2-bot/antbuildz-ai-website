import { SOCIAL_SHARE_IMAGE } from '@/lib/social-share';
import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { LegalDocumentView } from '../legal-document-view';
import { getLegalDocument, legalDocumentList } from '../legal-documents';

export function generateStaticParams() {
  return legalDocumentList.map(document => ({ document: document.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ document: string }> }): Promise<Metadata> {
  const { document: slug } = await params;
  if (slug === 'cookies') permanentRedirect('/agreements/privacy#cookies');
  if (slug === 'platform' || slug === 'ai-webstore') permanentRedirect('/agreements/terms');
  const document = getLegalDocument(slug);
  if (!document) notFound();
  const canonical = `/agreements/${document.slug}`;
  return {
    title: document.title,
    description: document.description,
    alternates: { canonical },
    openGraph: {
      images: [SOCIAL_SHARE_IMAGE],
      title: document.title, description: document.description, url: canonical,
      siteName: 'Antbuildz AI', type: 'article', locale: 'en_SG',
    },
    twitter: { images: [SOCIAL_SHARE_IMAGE], card: 'summary_large_image', title: document.title, description: document.description },
  };
}

export default async function AgreementDocumentPage({ params }: { params: Promise<{ document: string }> }) {
  const { document: slug } = await params;
  if (slug === 'cookies') permanentRedirect('/agreements/privacy#cookies');
  if (slug === 'platform' || slug === 'ai-webstore') permanentRedirect('/agreements/terms');
  const document = getLegalDocument(slug);
  if (!document) notFound();
  const url = `https://antbuildz.ai/agreements/${document.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, name: document.title,
        description: document.description, url, inLanguage: 'en-SG',
        isPartOf: { '@id': 'https://antbuildz.ai/#website' }, dateModified: '2026-09-02',
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://antbuildz.ai' },
          { '@type': 'ListItem', position: 2, name: 'Agreements & Policies', item: 'https://antbuildz.ai/agreements' },
          { '@type': 'ListItem', position: 3, name: document.title, item: url },
        ],
      },
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /><LegalDocumentView document={document} /></>;
}
