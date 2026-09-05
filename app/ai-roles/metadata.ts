import type { Metadata } from 'next';
import { SOCIAL_SHARE_IMAGE } from '@/lib/social-share';

export function roleMetadata(name: string, description: string, path: string): Metadata {
  const title = `${name} | Antbuildz AI`;
  const url = `https://antbuildz.ai${path}`;
  return { title: { absolute: title }, description, alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', images: [SOCIAL_SHARE_IMAGE] },
    twitter: { card: 'summary_large_image', title, description, images: [SOCIAL_SHARE_IMAGE] },
  };
}

export function RoleSchema({ name, description, breadcrumbName = name, path }: { name: string; description: string; breadcrumbName?: string; path: string }) {
  const base = 'https://antbuildz.ai';
  const breadcrumbs = [{ '@type': 'ListItem', position: 1, name: 'Home', item: base },
    { '@type': 'ListItem', position: 2, name: 'AI Agent Roles', item: `${base}/ai-roles` }];
  if (path !== '/ai-roles') breadcrumbs.push({ '@type': 'ListItem', position: 3, name: breadcrumbName, item: `${base}${path}` });
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${base}${path}#webpage`, name, description, inLanguage: 'en', url: `${base}${path}`, isPartOf: { '@id': `${base}/#website` }, about: { '@id': `${base}/#software` } },
    { '@type': 'BreadcrumbList', itemListElement: breadcrumbs },
  ] }).replace(/</g, '\\u003c');
}
