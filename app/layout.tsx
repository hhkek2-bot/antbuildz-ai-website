import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { SOCIAL_SHARE_IMAGE, SOCIAL_SHARE_IMAGE_PATH } from '@/lib/social-share';
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
    default: 'Customer AI Agent for Complex Conversations | Antbuildz AI',
    template: '%s | Antbuildz AI',
  },
  description: 'AI Agent for customer conversations about products and services, with AI Webstore Suite and AI Agent Console. Built for complex enquiries.',
  keywords: ['AI Agent for customer conversations', 'AI Agent for complex products and services', 'Industrial AI Sales Agent', 'AI Webstore Suite', 'equipment rental AI'],
  applicationName: 'Antbuildz AI',
  category: 'AI software for customer conversations',
  authors: [{ name: 'Antbuildz', url: 'https://antbuildz.ai' }],
  creator: 'Antbuildz',
  publisher: 'Antbuildz',
  icons: {
    icon: [
      { url: '/favicon.ico?v=3', type: 'image/x-icon', sizes: 'any' },
      { url: '/images/antbuildz-ai-favicon-transparent.png?v=3', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico?v=3',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: {
    title: 'Customer AI Agent for Complex Conversations | Antbuildz AI',
    description: 'Answer everyday customer questions and guide complex product and service enquiries with the Antbuildz AI Agent.',
    url: 'https://antbuildz.ai',
    siteName: 'Antbuildz AI',
    locale: 'en_US',
    type: 'website',
    images: [SOCIAL_SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer AI Agent for Complex Conversations | Antbuildz AI',
    description: 'AI Agent, AI Webstore Suite and AI Agent Console for product and service businesses.',
    images: [SOCIAL_SHARE_IMAGE_PATH],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
      description: 'Antbuildz AI provides a Customer AI Agent for complex conversations and an optional AI Webstore Suite for product discovery and structured product knowledge.',
      areaServed: 'Worldwide',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://antbuildz.ai/#website',
      url: 'https://antbuildz.ai',
      name: 'Antbuildz AI',
      publisher: { '@id': 'https://antbuildz.ai/#organization' },
      inLanguage: 'en',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://antbuildz.ai/#software',
      name: 'Antbuildz Customer AI Agent',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://antbuildz.ai/ai-agent',
      description: 'Customer AI Agent using approved business knowledge, catalogues, specifications and connected inventory to guide complex conversations and capture enquiries.',
      provider: { '@id': 'https://antbuildz.ai/#organization' },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
