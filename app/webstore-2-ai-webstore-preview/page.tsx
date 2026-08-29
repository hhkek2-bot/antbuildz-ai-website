import type { Metadata } from 'next';
import { WebstoreConceptPage } from './webstore-concept';
import { PREVIEW_PAGE } from './preview-metadata';

const { title, description, url, image } = PREVIEW_PAGE;

// This review page is deliberately outside the public route catalogue,
// sitemap and llms.txt. It must not compete with the approved product page.
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: url },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: { title, description, url, images: [{ url: image, alt: 'Antbuildz industrial AI ecosystem' }] },
  twitter: { title, description, card: 'summary_large_image', images: [image] },
};

export default function Page() {
  return <WebstoreConceptPage />;
}
