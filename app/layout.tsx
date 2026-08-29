import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://antbuildz.ai'),
  title: {
    default: 'Antbuildz AI | Industrial AI Sales Ecosystem',
    template: '%s | Antbuildz AI',
  },
  description: 'AI Sales Agent, AI Webstore Suite and AI Agent Console for industrial products, equipment rental, parts and technical B2B sales.',
  keywords: ['Industrial AI Sales Agent', 'AI Webstore Suite', 'equipment rental AI', 'industrial product sales'],
  alternates: { canonical: '/' },
  applicationName: 'Antbuildz AI',
  category: 'Industrial AI software',
  authors: [{ name: 'Antbuildz', url: 'https://antbuildz.ai' }],
  creator: 'Antbuildz',
  publisher: 'Antbuildz',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: {
    title: 'Antbuildz AI | Industrial AI Sales Ecosystem',
    description: 'Turn product conversations into qualified demand with an AI Sales Agent, AI-ready Webstore and one operational Console.',
    url: 'https://antbuildz.ai',
    siteName: 'Antbuildz AI',
    locale: 'en_SG',
    type: 'website',
    images: [{ url: '/images/industrial-ai.png', width: 1792, height: 1024, alt: 'Antbuildz industrial AI ecosystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antbuildz AI | Industrial AI Sales Ecosystem',
    description: 'Industrial AI Sales Agent, AI Webstore Suite and AI Agent Console.',
    images: ['/images/industrial-ai.png'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://antbuildz.ai/#organization',
      name: 'Antbuildz',
      url: 'https://antbuildz.ai',
      logo: 'https://antbuildz.ai/images/antbuildz-wordmark.png',
      description: 'Industrial AI Sales Agent, AI Webstore Suite and AI Agent Console for rental, equipment, parts and technical product businesses.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://antbuildz.ai/#website',
      url: 'https://antbuildz.ai',
      name: 'Antbuildz AI',
      publisher: { '@id': 'https://antbuildz.ai/#organization' },
      inLanguage: 'en-SG',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://antbuildz.ai/#software',
      name: 'Antbuildz AI',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://antbuildz.ai',
      description: 'A connected industrial AI sales ecosystem combining an AI Sales Agent, AI Webstore Suite and AI Agent Console.',
      provider: { '@id': 'https://antbuildz.ai/#organization' },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-SG" className={`${plusJakartaSans.variable} ${inter.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
