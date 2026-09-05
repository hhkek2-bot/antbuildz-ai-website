import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { getSolution, solutions } from '@/lib/site-content';

export const metadata: Metadata = { robots: { index: false, follow: true } };

export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getSolution(slug)) notFound();
  permanentRedirect(`/${slug}`);
}
