import { PublicPageShell } from '../../agreements/legal-shell';
import { roleMetadata } from '../../ai-roles/metadata';
import { AI_HELP_SEO } from '@/lib/ai-help-scope';
import { HELP_FAQS } from '@/lib/help-faq-content';
import { HelpCentre } from './help-centre';

export const metadata = roleMetadata('AI Help Centre', AI_HELP_SEO.description, '/help/ai');
const schema = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'WebPage', '@id': `${AI_HELP_SEO.url}#webpage`, name: AI_HELP_SEO.title, description: AI_HELP_SEO.description, url: AI_HELP_SEO.url, isPartOf: { '@id': 'https://antbuildz.ai/#website' } },
  { '@type': 'FAQPage', '@id': `${AI_HELP_SEO.url}#faq`, mainEntity: HELP_FAQS.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
] };
export default function AiHelpPage() {
  return <div id="root" className="antbuildz-original-root"><link rel="stylesheet" href="/assets/faqs-7gOdZIAC.css" /><PublicPageShell><script id="route-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /><HelpCentre /></PublicPageShell></div>;
}
