import Link from 'next/link';
import type { LegalDocument } from './legal-documents';
import { LegalShell } from './legal-shell';
import styles from './legal-pages.module.css';

export function LegalDocumentView({ document }: { document: LegalDocument }) {
  return (
    <LegalShell>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <Link className={styles.backLink} href="/agreements">← Agreements &amp; Policies</Link>
          <p className={styles.eyebrow}>Antbuildz Pte. Ltd. · Singapore</p>
          <h1>{document.title}</h1>
          <p className={styles.heroDescription}>{document.description}</p>
          <span className={styles.updated}>Last updated: {document.lastUpdated}</span>
        </div>
      </header>
      <div className={styles.documentLayout}>
        <nav className={styles.toc} aria-label="On this page">
          <h2>On this page</h2>
          <ol>{document.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol>
        </nav>
        <article className={styles.document}>
          <details className={styles.mobileToc}>
            <summary>On this page</summary>
            <ol>{document.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol>
          </details>
          {document.slug === 'terms' && <aside className={styles.notice}><p><strong>Please read these Terms carefully.</strong> By creating an account, accepting an Order Form, subscribing or using the Services, the Customer agrees to be bound by them.</p></aside>}
          {document.sections.map(section => (
            <section key={section.id} id={section.id}>
              <h2>{section.title}</h2>
              {section.body}
            </section>
          ))}
        </article>
      </div>
    </LegalShell>
  );
}
