import type { Metadata } from 'next';
import { PublicPageShell } from '../agreements/legal-shell';
import { SOCIAL_SHARE_IMAGE } from '@/lib/social-share';
import { ExperienceGallery } from '../features/conversational-experience/experience-media';
import styles from '../features/conversational-experience/experience.module.css';

const path = '/conversational-experience';
const url = `https://antbuildz.ai${path}`;
const title = 'AI Conversation Features for Complex Product Sales | Antbuildz AI Agent';
const description = 'See how the Antbuildz AI Agent helps complex product teams answer enquiries with specification comparisons, technical diagrams, product guidance and human handover.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', siteName: 'Antbuildz AI', images: [SOCIAL_SHARE_IMAGE] },
  twitter: { card: 'summary_large_image', title, description, images: [SOCIAL_SHARE_IMAGE] },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: 'Antbuildz AI Agent Conversation Features for Complex Product Sales', description, inLanguage: 'en-SG', isPartOf: { '@id': 'https://antbuildz.ai/#website' }, about: { '@id': 'https://antbuildz.ai/#software' } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://antbuildz.ai' },
      { '@type': 'ListItem', position: 2, name: 'Conversation Features', item: url },
    ] },
  ],
};

export default function ConversationalExperiencePage() {
  return <PublicPageShell>
    <script id="route-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.frame}>
          <div className={styles.heroBanner}>
            <img className={styles.heroImage} src="/images/conversational-experience/conversation-features-sales-customer.jpg" alt="An Asian sales specialist and customer discussing industrial equipment with a tablet" />
            <div className={styles.heroShade} aria-hidden="true" />
            <div className={styles.heroContent}>
              <h1>Beyond Just a<br />Text Answer</h1>
              <p className={styles.heroLead}>The Antbuildz AI Agent helps complex product teams turn product enquiries into guided conversations with specification comparisons, technical diagrams, product guidance and human handover.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.proof} aria-labelledby="demonstrations">
        <div className={styles.frame}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>AI conversation features for complex product enquiries</p>
            <h2 id="demonstrations">Not just an answer.<br />An easier way to understand, compare and act.</h2>
            <p>The Antbuildz AI Agent can return approved comparisons, relevant technical diagrams, product guidance and configured next steps in one conversation — with human handover for decisions that need confirmation. Examples below are illustrative.</p>
          </div>
          <ExperienceGallery />
        </div>
      </section>

      <section className={styles.boundaries} aria-labelledby="boundaries-title"><div className={styles.frame}>
        <div className={styles.boundaryCopy}><p className={styles.eyebrow}>Built for better handovers</p><h2 id="boundaries-title">Useful context.<br />Clear human handover.</h2><p>The AI Agent uses catalogues, specifications, policies and business guidance your team has approved. It can organise that information for a customer conversation, while your team remains responsible for final technical suitability, live availability, pricing, quotations, bookings and commercial commitments.</p><a className={styles.textLink} href="/ai-agent">Explore the AI Agent <span aria-hidden="true">→</span></a></div>
        <ol className={styles.boundaryList}>
          <li><span>01</span><div><h3>Approved product knowledge</h3><p>Ground each response in the catalogues, specifications, policies and business guidance your team has approved for customer use.</p></div></li>
          <li><span>02</span><div><h3>Requirement-led qualification</h3><p>Capture the product, constraints and missing details before a recommendation or handover is treated as complete.</p></div></li>
          <li><span>03</span><div><h3>Human confirmation for commercial decisions</h3><p>Route final technical suitability, live availability, pricing, quotations and booking decisions to the right person.</p></div></li>
        </ol>
      </div></section>

      <section className={styles.closing}>
        <div className={`${styles.frame} ${styles.closingPanel}`}>
          <img className={styles.closingImage} src="/images/conversational-experience/start-trial-emma-industrial-consultation.jpg" alt="Emma discussing an industrial product on a tablet with a customer in a workshop" />
          <div className={styles.closingShade} aria-hidden="true" />
          <div className={styles.closingContent}>
            <h2 className={styles.closingTitle}>Build Better<br />Customer Experience</h2>
            <p>Choose a plan for guided product conversations that use approved knowledge, help customers understand complex products and hand over the decisions your team needs to confirm.</p>
            <div className={styles.actions}><a className={styles.primary} href="/pricing">Start Trial</a></div>
          </div>
        </div>
      </section>
    </div>
  </PublicPageShell>;
}
