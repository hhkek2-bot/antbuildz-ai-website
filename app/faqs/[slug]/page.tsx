import { redirect } from 'next/navigation';

export default async function FaqPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`https://antbuildz.com/faqs/${encodeURIComponent(slug)}`);
}
