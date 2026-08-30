'use client';

/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element -- Native navigation lets the transferred router initialise each destination; industry cards reuse local responsive source imagery without an image service. */

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { mountHomeEducation, type HomeEducationTargets } from '../lib/home-education-mount';
import styles from './home-education.module.css';
import { AgentGraphic, SelectionOverviewGraphic, WebstoreGraphic } from './home-graphics';
import { HomeAgentFoundations } from './home-agent-foundations';

export const HOME_INDUSTRIES = [
  ['Rental & Leasing', '/rental-businesses', 'Clarify capacity, site conditions and hire dates before fleet review.', '/images/solution-rental.jpg', 'Rental boom lift fleet prepared for industrial hire'],
  ['Manufacturers & OEMs', '/manufacturers-brands', 'Guide model selection using approved specifications and application requirements.', '/images/solution-manufacturers.jpg', 'Engineer reviewing industrial machinery in a manufacturing facility'],
  ['Dealers & Distributors', '/dealers-distributors', 'Narrow multi-brand ranges around the buyer’s job and product needs.', '/images/solution-dealers.jpg', 'Industrial equipment dealer reviewing products in a warehouse showroom'],
  ['Industrial & MRO', '/industrial-mro', 'Gather maintenance requirements and technical attributes for quotation review.', '/images/solution-mro.jpg', 'Maintenance engineer inspecting industrial pump equipment'],
  ['Hardware & Trade', '/hardware-trade-supplies', 'Identify tools and supplies around the material and task.', '/images/solution-hardware.jpg', 'Trade buyer selecting tools and supplies at a hardware counter'],
  ['Building & Engineering', '/building-engineering', 'Capture grades, standards, quantities and project delivery requirements.', '/images/solution-building.jpg', 'Construction professionals reviewing project requirements on site'],
  ['Parts & Aftermarket', '/parts-aftermarket', 'Clarify asset details and check supplied fitment information.', '/images/solution-parts.jpg', 'Industrial parts specialist checking bearings and fitment information'],
  ['Buggies & Vehicles', '/buggies-commercial-vehicles', 'Capture seating, payload and route requirements for fleet enquiries.', '/images/solution-vehicles.png', 'Commercial vehicles and utility buggy outside a distribution facility'],
] as const;

export const HOME_QUESTIONS = [
  ['What catalogue or product information should we prepare?', 'Start with approved catalogues, product specifications and business guidance. Identify gaps, outdated details and questions that require your team’s input. Confirm supported sources and inventory fields during setup.'],
  ['How does the Agent narrow down suitable products?', 'It considers the buyer’s requirements alongside supplied product information and supported inventory fields. Missing specifications prompt clarification; a related description alone does not establish suitability.'],
  ['Do we need AI Webstore Suite to use AI Sales Agent?', 'No. You can start with the AI Sales Agent and your approved knowledge. Add the AI Webstore Suite when you need a branded catalogue and dedicated product pages.'],
  ['What should our team review before confirming a recommendation?', 'Your team checks technical suitability, unresolved requirements, availability and commercial terms before confirming a recommendation or issuing a quotation.'],
  ['How do we get started?', 'Bring a representative catalogue and a typical buyer enquiry to a demo. We can discuss your workflow, available information and which setup fits your business.'],
] as const;

function Arrow() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function ProductConnector() {
  return (
    <div className={styles.productConnector} aria-hidden="true">
      <span className={styles.connectorTrack}><span className={styles.connectorPulse} /></span>
    </div>
  );
}

function ShieldIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 19 6v5c0 4.6-2.8 8.2-7 10-4.2-1.8-7-5.4-7-10V6l7-3Z" /><path d="m9.5 12 1.7 1.7 3.6-4" /></svg>;
}

function DataIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></svg>;
}

function TeamIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9.5" cy="7" r="4" /><path d="M17 11a4 4 0 0 1 4 4v2M16 3.3a4 4 0 0 1 0 7.4" /></svg>;
}

export function HomeTrustPanel() {
  return (
    <section className={styles.trust} aria-labelledby="home-data-trust-heading">
      <div className={styles.trustFrame}>
        <div className={styles.trustPanel}>
          <div className={styles.trustMark} aria-hidden="true"><ShieldIcon /></div>
          <div className={styles.trustCopy}>
            <span className={styles.trustEyebrow}>Data protection &amp; trust</span>
            <h2 id="home-data-trust-heading">We care about your business data</h2>
            <p>Antbuildz AI is designed to protect the company knowledge, customer conversations and operational information you use with your Agent. Access remains limited to authorised users, while your team controls the approved knowledge and important business decisions.</p>
            <a className={styles.trustReview} href="/legal/privacy">Read our privacy policy</a>
          </div>
          <ul className={styles.trustAssurances} aria-label="Data protection and trust principles">
            <li><ShieldIcon /><div><strong>Protected business data</strong><span>Your company knowledge, operational information and customer conversations are treated as protected business information.</span></div></li>
            <li><DataIcon /><div><strong>Authorised access</strong><span>Company knowledge and console access remain limited to authorised users.</span></div></li>
            <li><TeamIcon /><div><strong>Your team stays in control</strong><span>Your team manages what knowledge the Agent uses and retains oversight of important decisions.</span></div></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export const HOME_SELECTION_STEPS = [
  ['Ingest', 'Structure product knowledge', 'Turn approved catalogues, specification tables and diagrams into structured product knowledge.'],
  ['Reason', 'Clarify the buyer’s needs', 'Identify known requirements, missing constraints and the right next action before matching.'],
  ['Retrieve', 'Find supported options', 'Search approved catalogue and supported inventory records for relevant options.'],
  ['Recommend', 'Explain the recommendation', 'Explain the strongest option and flag suitability, availability and commercial checks for review.'],
] as const;

export function HomeEducationBody() {
  const industryTrack = useRef<HTMLUListElement>(null);
  const [activeIndustry, setActiveIndustry] = useState(0);

  useEffect(() => {
    const track = industryTrack.current;
    if (!track) return;

    let frame = 0;
    const syncActiveIndustry = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const cards = Array.from(track.children) as HTMLElement[];
        const trackRect = track.getBoundingClientRect();
        const paddingLeft = Number.parseFloat(window.getComputedStyle(track).paddingLeft) || 0;
        const snapEdge = trackRect.left + paddingLeft;
        let nearestIndex = 0;
        let nearestDistance = Number.POSITIVE_INFINITY;

        cards.forEach((card, index) => {
          const distance = Math.abs(card.getBoundingClientRect().left - snapEdge);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = index;
          }
        });

        setActiveIndustry((current) => current === nearestIndex ? current : nearestIndex);
      });
    };

    syncActiveIndustry();
    track.addEventListener('scroll', syncActiveIndustry, { passive: true });
    window.addEventListener('resize', syncActiveIndustry);
    return () => {
      window.cancelAnimationFrame(frame);
      track.removeEventListener('scroll', syncActiveIndustry);
      window.removeEventListener('resize', syncActiveIndustry);
    };
  }, []);

  const scrollIndustryTo = (index: number) => {
    const track = industryTrack.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    const trackRect = track.getBoundingClientRect();
    const paddingLeft = Number.parseFloat(window.getComputedStyle(track).paddingLeft) || 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setActiveIndustry(index);
    track.scrollTo({
      left: track.scrollLeft + card.getBoundingClientRect().left - trackRect.left - paddingLeft,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  };

  const scrollIndustries = (direction: -1 | 1) => {
    const nextIndustry = Math.max(0, Math.min(HOME_INDUSTRIES.length - 1, activeIndustry + direction));
    scrollIndustryTo(nextIndustry);
  };
  return (
    <><HomeAgentFoundations />
    <div className={styles.body}>
      <section className={`${styles.section} ${styles.approach}`} aria-labelledby="home-selection-approach">
        <div className={styles.frame}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>The Antbuildz approach</p>
            <h2 id="home-selection-approach">From your inventory to <span className={styles.selectionEmphasis}>recommendation</span></h2>
            <p>Start with approved product knowledge. The Agent clarifies the buyer’s needs, finds relevant options and explains what your team should review.</p>
          </div>
          {/* Layout lock: preserve the four large alternating graphic-and-copy
              rows. Future refinements belong inside SelectionOverviewGraphic
              only unless the user explicitly asks to unlock this layout. */}
          <ol className={styles.stages} aria-label="Ingest, Reason, Retrieve, Recommend: from inventory to recommendation">
            {HOME_SELECTION_STEPS.map(([title, label, description], index) => (
              <li key={title}>
                <div className={styles.stageVisual}>
                  <SelectionOverviewGraphic step={index} />
                </div>
                <article className={styles.stageCopy}>
                  <span className={styles.stageKicker}><b aria-hidden="true">{String(index + 1).padStart(2, '0')}</b>{title}</span>
                  <h3>{label}</h3>
                  <p>{description}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="home-product-relationship">
        <div className={styles.frame}>
          <div className={`${styles.intro} ${styles.productIntro}`}>
            <p className={styles.eyebrow}>One connected workflow</p>
            <h2 id="home-product-relationship" className={styles.productHeading}><span>Your AI Sales Agent</span>{' '}<span>Plus a connected Webstore</span></h2>
            <p className={styles.connection}>Start with the AI Sales Agent. Add AI Webstore Suite when you need a browsable catalogue, supported inventory context and dedicated product pages that can support SEO and GEO discovery. Inventory freshness and visibility depend on your data, plan, connections and indexing.</p>
          </div>
          <div className={styles.products}>
            <article className={styles.agentProduct}>
              <AgentGraphic />
              <div className={styles.productIdentity}><p className={styles.productLabel}>AI Sales Agent</p><span className={styles.productBadge}>Start here</span></div>
              <h3>Turn buyer questions into informed enquiries</h3>
              <p>Give buyers clearer answers and suitable recommendations. Your Agent clarifies requirements, checks approved product information and supported inventory, then prepares the details your team needs to confirm suitability and availability.</p>
              <a className={styles.textLink} href="/ai-sales-agent" aria-label="Explore AI Sales Agent"><Arrow /></a>
            </article>
            <ProductConnector />
            <article className={styles.webstoreProduct}>
              <WebstoreGraphic />
              <div className={styles.productIdentity}><p className={styles.productLabel}>AI Webstore Suite</p><span className={styles.productBadge}>Optional addition</span></div>
              <h3>A searchable product library for buyers and your Agent</h3>
              <p>Give buyers a browsable catalogue with a dedicated page for each product. Structured specifications and supported inventory help your Agent answer product questions and recommend suitable options with clearer context.</p>
              <a className={styles.textLink} href="/ai-webstore-suite" aria-label="Explore AI Webstore Suite"><Arrow /></a>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.industries}`} aria-labelledby="home-industries-heading">
        <div className={styles.frame}>
          <div className={styles.industryHeader}>
            <div>
              <p className={styles.eyebrow}>Who we serve</p>
              <h2 id="home-industries-heading">Built around the way industrial businesses sell</h2>
            </div>
          </div>
        </div>
        <div className={styles.industryCarousel}>
          <div className={styles.industryControls} aria-label="Who We Serve carousel controls">
            <button type="button" onClick={() => scrollIndustries(-1)} aria-label="Show previous industries"><span aria-hidden="true">←</span></button>
            <button type="button" onClick={() => scrollIndustries(1)} aria-label="Show next industries"><span aria-hidden="true">→</span></button>
          </div>
          <ul className={styles.industryGrid} ref={industryTrack} tabIndex={0} aria-label="Who We Serve industries">
            {HOME_INDUSTRIES.map(([name, href, description, image, alt], index) => (
              <li className={styles.industryCard} data-active={index === activeIndustry} key={href}>
                <a href={href} onFocus={() => scrollIndustryTo(index)}>
                  <img src={image} alt={alt} loading="lazy" width="1600" height="1000" />
                  <span className={styles.industryShade} aria-hidden="true" />
                  <span className={styles.industryContent}>
                    <span className={styles.industryIndex}>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{name}</h3>
                    <span className={styles.industryDescription}>{description}</span>
                    <span className={styles.industryLink}>Explore <Arrow /></span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div></>
  );
}

export function HomeEducationFaq() {
  const emmaPlacement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const placement = emmaPlacement.current;
    const emma = document.getElementById('meet-aria');
    const originalParent = emma?.parentElement;
    const originalNextSibling = emma?.nextSibling ?? null;
    if (!placement || !emma || !originalParent) return;

    placement.appendChild(emma);
    return () => {
      if (originalNextSibling?.parentNode === originalParent) originalParent.insertBefore(emma, originalNextSibling);
      else originalParent.appendChild(emma);
    };
  }, []);

  return (
    <>
      <section className={`si-sierra-stage si-sierra-stage--faqs ${styles.faq}`} aria-labelledby="home-faq-heading">
        <div className="si-container">
          <div className="si-sierra-heading si-sierra-heading--centered">
            <span className={`si-eyebrow ${styles.faqEyebrow}`}>FAQ</span>
            <h2 id="home-faq-heading">Your AI Sales Agent questions, answered</h2>
            <p>What to prepare, how recommendations work and where your team stays involved.</p>
          </div>
          <div className="si-sierra-faq-list">
            {HOME_QUESTIONS.map(([question, answer]) => (
              <details className="si-sierra-faq-item" key={question}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <div className="si-sierra-faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
          <div className={styles.faqActions}>
            <a className={`mkt-btn mkt-btn-primary ${styles.demo}`} href="/book-a-demo">Book a Demo <Arrow /></a>
          </div>
        </div>
      </section>
      <div ref={emmaPlacement} className={styles.emmaPlacement} data-home-emma-placement="" />
    </>
  );
}

export function HomeEducation() {
  const [targets, setTargets] = useState<HomeEducationTargets | null>(null);
  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;
    return mountHomeEducation(root, styles.retired, setTargets);
  }, []);
  if (!targets) return null;
  return <>{createPortal(<HomeEducationBody />, targets.body)}{createPortal(<><HomeTrustPanel /><HomeEducationFaq /></>, targets.faq)}</>;
}
