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
    default: 'Antbuildz AI | Customer AI Agent for Complex Products',
    template: '%s | Antbuildz AI',
  },
  description: 'Customer AI Agent for complex product businesses, with AI Webstore Suite and AI Agent Console. Built from industrial equipment, rental and technical B2B expertise.',
  keywords: ['Customer AI Agent', 'Customer AI Agent for complex products', 'Industrial AI Sales Agent', 'AI Webstore Suite', 'equipment rental AI', 'industrial product sales'],
  applicationName: 'Antbuildz AI',
  category: 'AI software for complex product businesses',
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
    title: 'Antbuildz AI | Customer AI Agent for Complex Products',
    description: 'Turn customer conversations into qualified demand with a Customer AI Agent, connected AI Webstore Suite and one operational Console.',
    url: 'https://antbuildz.ai',
    siteName: 'Antbuildz AI',
    locale: 'en_US',
    type: 'website',
    images: [SOCIAL_SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antbuildz AI | Customer AI Agent for Complex Products',
    description: 'Customer AI Agent, AI Webstore Suite and AI Agent Console for complex product businesses.',
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
      description: 'Customer AI Agents for complex product businesses, specialising in industrial equipment, rental and technical B2B products.',
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
      description: 'Customer AI Agent for complex products, handling customer sales, rental, support and product guidance with approved knowledge, AI Webstore Suite and AI Agent Console.',
      provider: { '@id': 'https://antbuildz.ai/#organization' },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
