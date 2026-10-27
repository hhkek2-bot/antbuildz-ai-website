import type { Metadata } from 'next';
import ConsoleMockup from './console-mockup';

export const metadata: Metadata = {
  title: 'AI Agent Console — Design Preview',
  description: 'An interactive Antbuildz AI Agent Console design concept with illustrative data.',
  alternates: { canonical: '/console-mockup' },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: { title: 'AI Agent Console — Design Preview', description: 'A separate interface concept for review.', url: '/console-mockup' },
};
export default function Page() { return <ConsoleMockup />; }
