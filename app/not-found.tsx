import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The requested Antbuildz AI page could not be found.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <section className={styles.panel} aria-labelledby="not-found-title">
        <p className={styles.eyebrow}>Page not found</p>
        <h1 id="not-found-title">This page is no longer available</h1>
        <p className={styles.description}>
          The page may have moved or is no longer part of Antbuildz AI. Continue from one of the links below.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/">Return to Home</Link>
          <Link className={styles.secondary} href="/resources">Explore Resources</Link>
        </div>
      </section>
    </main>
  );
}
