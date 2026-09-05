import { permanentRedirect } from 'next/navigation';

export default async function FaqPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  permanentRedirect(`https://antbuildz.com/faqs/${encodeURIComponent(slug)}`);
}
