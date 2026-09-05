/* Native document navigation is required when entering the independent copied SPA. */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import type { ReactNode } from 'react';
import styles from './legal-pages.module.css';
import { AI_ROLE_LINKS } from '@/lib/ai-roles';
import { PublicHeaderBehaviour } from '../public-header-behaviour';

import { PublicFooterSocial } from '../public-footer-social';
import { PublicFooterLanguage } from '../public-footer-language';
import '../public-footer.css';

const productLinks = [
  ['AI Sales Agent', '/ai-sales-agent'],
  ['AI Webstore Suite', '/ai-webstore-suite'],
  ['Pricing', '/pricing'],
] as const;

const industryLinks = [
  ['Rental & Leasing', '/rental-businesses'],
  ['Manufacturer & OEM', '/manufacturers-brands'],
  ['Dealers & Distributors', '/dealers-distributors'],
  ['Industrial & MRO', '/industrial-mro'],
  ['Trade Supplies', '/hardware-trade-supplies'],
  ['Building Materials', '/building-engineering'],
  ['Parts & Aftermarket', '/parts-aftermarket'],
  ['Buggy & Vehicle', '/buggies-commercial-vehicles'],
] as const;

const agentRoleLinks = AI_ROLE_LINKS.map(({ label, href }) => [label, href] as const);

function LegalWordmark() {
  return (
    <span className={styles.wordmark} aria-hidden="true">
      <span className={styles.wordmarkImage}>
        <Image src="/images/antbuildz-wordmark.png" width={1471} height={225} alt="" priority />
      </span>
      <span className={styles.wordmarkAi}>.ai</span>
    </span>
  );
}

function LegalHeader() {
  return (
    <header className={`${styles.header} antbuildz-public-header`} data-source-public-header>
      <PublicHeaderBehaviour />
      <div className={styles.headerInner}>
        <a className={styles.brandLink} href="/" aria-label="Antbuildz AI home">
          <LegalWordmark />
        </a>
        <nav className={`${styles.desktopNav} bright-nav-product-links`} aria-label="Primary navigation">
          {productLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a href="/ai-roles" data-menu-fallback>AI Roles</a>
          <a href="/rental-businesses" data-menu-fallback>Industries</a>
          <a href="/resources" aria-label="Resources">Resources</a>
        </nav>
        <div className={styles.headerUtilities}>
          <a className={styles.signIn} href="/sign-in">Sign in</a>
          <a className={styles.demoAction} href="/book-a-demo">Book a Demo</a>
          <details className={styles.mobileMenu}>
            <summary aria-label="Open navigation"><span /><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <a href="/ai-sales-agent">AI Sales Agent</a>
              <a href="/ai-webstore-suite">AI Webstore Suite</a>
              <a href="/ai-agent-console">AI Agent Console</a>
              <a href="/pricing">Pricing</a>
              <a href="/ai-roles">All AI Roles</a>
              <a href="/resources">Resources</a>
              <a href="/about">About Us</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function LegalFooter() {
  const columns = [
    ['AI Products', [
      ['AI Sales Agent', '/ai-sales-agent'], ['AI Webstore Suite', '/ai-webstore-suite'],
      ['AI FAQs', '/help/ai'], ['Pricing', '/pricing'], ['Book a Demo', '/book-a-demo'],
    ]],
    ['Who We Serve', industryLinks],
    ['AI Agent Roles', agentRoleLinks],
    ['Company', [
      ['About Us', '/about'], ['Terms & Policy', '/agreements'],
      ['AI Help Centre', '/help/ai'], ['Resources', '/resources'], ['Marketplace', 'https://antbuildz.com'],
    ]],
  ] as const;
  return (
    <footer className="abz-public-footer" data-public-footer-source aria-label="Antbuildz AI footer">
      <div className="abz-public-footer__main">
        <div className="abz-public-footer__container abz-public-footer__grid">
          <div className="abz-public-footer__brand">
            {/* The homepage is still an independent SPA and needs a document navigation to mount reliably. */}
            <a className="antbuildz-ai-wordmark-link" href="/" aria-label="Antbuildz AI home">
              <span className="antbuildz-ai-wordmark" aria-hidden="true">
                <span className="antbuildz-ai-wordmark__brand">
                  <Image className="antbuildz-ai-wordmark__brand-image" src="/images/antbuildz-wordmark.png" width={1471} height={225} alt="" />
                </span><span className="antbuildz-ai-wordmark__ai">.ai</span>
              </span>
            </a>
            <p>We are Building the Intelligence Layer for Industrial Businesses.</p>
          </div>
          {columns.map(([label, links]) => <nav className={`abz-public-footer__link-column${label === 'Who We Serve' ? ' abz-public-footer__link-column--who-we-serve' : ''}`} aria-label={label} key={label}>
            <h2>{label}</h2><ul>{links.map(([text, href]) => <li key={href}><a href={href}>{text}</a></li>)}</ul>
          </nav>)}
        </div>
      </div>
      <div className="abz-public-footer__bottom">
        <div className="abz-public-footer__container abz-public-footer__bottom-inner">
          <PublicFooterSocial />
          <p>© 2026 Antbuildz.com</p>
          <PublicFooterLanguage />
        </div>
      </div>
    </footer>
  );
}

export function LegalShell({ children }: { children: ReactNode }) {
  return <PublicPageShell>{children}</PublicPageShell>;
}

/** Shared source-rendered public chrome; legal and role pages use the same footer. */
export function PublicPageShell({ children }: { children: ReactNode }) {
  return <div className={styles.site}><LegalHeader /><main>{children}</main><LegalFooter /></div>;
}
