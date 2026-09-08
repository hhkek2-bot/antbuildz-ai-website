import { customerTutorials } from './customer-tutorials';
const aliases: Record<string,string> = {
  'quick-start-ai-agent':'start onboarding checklist company setup workspace launch first agent',
  'choose-plan-and-sign-up':'signup sign up subscribe subscription package trial monthly annual',
  'webstore-onboarding-checklist':'upload products import products csv excel website catalogue pdf company inventory sync listings',
  'ai-agent-console-knowledge-base':'upload documents knowledge sources company information manuals technical files',
  'add-faq-knowledge':'faq questions answers knowledge',
  'add-sop-and-policy-knowledge':'sop policies procedure manuals technical',
  'ai-agent-console-playground':'test testing publish install embed go live recommendation comparison escalation',
  'understand-usage-and-billing':'credits billing conversations auto top up threshold cancel upgrade downgrade subscription',
  'onboarding-troubleshooting':'wrong recommendation incorrect product missing document not used login failed crawl import not updating',
};
const normalise = (value:string) => value.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
export function searchTutorials(query:string) {
  const terms = normalise(query).split(' ').filter(Boolean);
  return customerTutorials.filter(guide=>terms.every(term=>normalise(`${guide.title} ${guide.description} ${aliases[guide.slug]??''}`).includes(term)));
}
