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
  ['What catalogue or product information should we prepare?', 'Start with approved catalogues, specifications, manuals and business guidance. Include model variants, compatibility, availability and sales or rental rules where relevant. Confirm supported sources and inventory fields during setup.'],
  ['How does the Agent narrow down suitable products?', 'It considers the buyer’s requirements alongside supplied product information and supported inventory fields. Missing specifications prompt clarification; a related description alone does not establish suitability.'],
  ['Do we need AI Webstore Suite to use AI Agent?', 'No. Start with AI Agent and your approved knowledge. Add AI Webstore Suite for structured product pages and inventory context. Sales supports product discovery and enquiries; Rental+ includes sales plus rental availability, rental periods, bookings and rental workflows.'],
  ['What should our team review before confirming a recommendation?', 'Your team checks technical suitability, unresolved requirements, availability and commercial terms before confirming a recommendation or issuing a quotation.'],
  ['Is Antbuildz AI only for industrial businesses?', 'Industrial equipment, rental and B2B products are our strongest specialisation. The same approach can support instruments, electronics, components and technical consumer products such as 3D printers. Bring a catalogue and a typical customer question to a demo so we can assess the fit.'],
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

export function HomeTrustPanel() {
  return (
    <section className={styles.trust} aria-labelledby="home-data-trust-heading">
      <div className={styles.trustFrame}>
        <div className={styles.trustPanel}>
          <div className={styles.trustCopy}>
            <span className={styles.trustEyebrow}>Data protection &amp; control</span>
            <h2 id="home-data-trust-heading">Control What Your Agent Knows and Uses</h2>
            <p>Antbuildz AI uses the product data, company knowledge and business information your team approves. You control what the Agent can access, how it responds and when an enquiry should be handed to your team.</p>
          </div>
          <ul className={styles.trustAssurances} aria-label="Data protection and control principles">
            <li><strong>Protected Business Information</strong><span>Your approved product and business information remains protected.</span></li>
            <li><strong>Authorised Access</strong><span>Only authorised users can manage the Agent’s knowledge and settings.</span></li>
            <li><strong>Human Oversight</strong><span>Define what the Agent can handle and when your team should take over.</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export const HOME_SELECTION_STEPS = [
  ['Ingest', 'Structure product data', 'Turn approved catalogues, specifications and diagrams into structured data the Agent can use.'],
  ['Reason', 'Clarify buyer needs', 'Identify confirmed requirements, missing details and the next question to ask before matching.'],
  ['Retrieve', 'Identify closest match', 'Systematically compare confirmed requirements with approved catalogue and connected inventory data to identify the closest supported match.'],
  ['Recommend', 'Capture buyer intent', 'Recommend the closest supported product, explain why it matches and capture the buyer’s interest as a qualified enquiry for your team.'],
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
            <h2 id="home-selection-approach"><span>From Data</span><span>To Recommendation</span></h2>
            <p>The Agent structures approved product data, clarifies buyer needs, identifies the closest supported match and turns interest into a qualified enquiry.</p>
          </div>
          {/* Layout lock: preserve the four large alternating graphic-and-copy
              rows. Future refinements belong inside SelectionOverviewGraphic
              only unless the user explicitly asks to unlock this layout. */}
          <ol className={styles.stages} aria-label="Ingest, Reason, Retrieve, Recommend: from data to recommendation">
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
            <p className={styles.eyebrow}>AI Agent + AI Webstore Suite</p>
            <h2 id="home-product-relationship" className={styles.productHeading}><span>AI That Understands</span>{' '}<span>What You Sell</span></h2>
            <p className={styles.connection}>Built around equipment rental and industrial sales, Antbuildz AI handles products where specifications, applications, compatibility and availability shape the decision. That product intelligence helps customers compare complex products and find a supported match, with your team confirming suitability and commercial terms.</p>
          </div>
          <div className={styles.products}>
            <article className={styles.agentProduct}>
              <AgentGraphic />
              <div className={styles.productIdentity}><p className={styles.productLabel}>AI Agent</p><span className={styles.productBadge}>The core product</span></div>
              <h3>Guide product conversations</h3>
              <p>Guide product choices, sales, rental and support using approved knowledge, with a clear handover to your team.</p>
              <a className={styles.textLink} href="/ai-sales-agent" aria-label="Explore AI Agent"><Arrow /></a>
            </article>
            <ProductConnector />
            <article className={styles.webstoreProduct}>
              <WebstoreGraphic />
              <div className={styles.productIdentity}><p className={styles.productLabel}>AI Webstore Suite</p><span className={styles.productBadge}>Available as an add-on</span></div>
              <h3>Turn your catalogue into a sales channel</h3>
              <p>Structure products, specifications and inventory so customers can discover them and your AI Agent can recommend supported options.</p>
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
              <h2 id="home-industries-heading">Built From Industrial Complexity</h2>
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
            <h2 id="home-faq-heading">Your AI Agent questions, answered</h2>
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
