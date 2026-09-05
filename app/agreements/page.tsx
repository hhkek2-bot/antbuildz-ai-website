import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalShell } from './legal-shell';
import styles from './legal-pages.module.css';

export const metadata: Metadata = {
  title: 'Antbuildz AI Agreements & Policies',
  description: 'Legal terms and privacy information governing Antbuildz AI services.',
  alternates: { canonical: '/agreements' },
  openGraph: {
    title: 'Antbuildz AI Agreements & Policies',
    description: 'Legal terms and privacy information governing Antbuildz AI services.',
    url: '/agreements', siteName: 'Antbuildz AI', type: 'website', locale: 'en_SG',
  },
};

const policyDocuments = [
  ['Service terms', 'Antbuildz AI Terms of Service', 'Terms governing the use of the Antbuildz AI Sales Agent, AI Webstore Suite and related services.', '/agreements/terms', 'Read Terms of Service'],
  ['Privacy', 'Privacy Policy', 'How Antbuildz collects, uses and protects personal information.', '/agreements/privacy', 'Read Privacy Policy'],
  ['Data processing', 'Data Processing Addendum', 'Terms governing the processing of personal data on behalf of Antbuildz AI customers.', '/agreements/dpa', 'Read Data Processing Addendum'],
  ['Responsible use', 'Acceptable Use Policy', 'Responsible platform use and industrial safety boundaries.', '/agreements/acceptable-use', 'Read Acceptable Use Policy'],
] as const;

export default function AgreementsPage() {
  return (
    <LegalShell>
      <header className={`${styles.hero} ${styles.agreementsHero}`}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Agreements &amp; Policies</p>
          <h1>Legal documents for Antbuildz AI</h1>
          <p className={styles.heroDescription}>Current terms, privacy and data documents for Antbuildz AI services.</p>
        </div>
      </header>
      <section className={styles.indexContent} aria-labelledby="documents-heading">
        <div className={styles.directoryIntro}>
          <h2 id="documents-heading">Documents</h2>
          <p>Choose a document to read the current terms that apply to your use of Antbuildz AI.</p>
        </div>
        <div className={styles.cardGrid}>
          {policyDocuments.map(([label, title, description, href, action]) => (
            <article className={styles.policyCard} key={href}>
              <span>{label}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <Link href={href}>{action}</Link>
            </article>
          ))}
        </div>
        <p className={styles.legalHelp}>Need help with a legal document? <a href="mailto:help@antbuildz.ai">Contact Antbuildz AI</a>.</p>
      </section>
    </LegalShell>
  );
}
