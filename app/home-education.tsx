'use client';

/* eslint-disable @next/next/no-html-link-for-pages -- Native navigation lets the transferred router initialise each destination; Next client transitions cannot own its separately mounted React tree. */

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { mountHomeEducation, type HomeEducationTargets } from '../lib/home-education-mount';
import styles from './home-education.module.css';
import { AgentGraphic, CatalogueGraphic, IndustryGraphic, SelectionGraphic, WebstoreGraphic } from './home-graphics';
import { HomeMarketShift } from './home-market-shift';
import { HomeAgentFoundations } from './home-agent-foundations';

export const HOME_INDUSTRIES = [
  ['Rental & Leasing', '/rental-businesses', 'Clarify capacity, site conditions and hire dates before fleet review.'],
  ['Manufacturers & OEMs', '/manufacturers-brands', 'Guide model selection using approved specifications and application requirements.'],
  ['Dealers & Distributors', '/dealers-distributors', 'Narrow multi-brand ranges around the buyer’s job and product needs.'],
  ['Industrial & MRO', '/industrial-mro', 'Gather maintenance requirements and technical attributes for quotation review.'],
  ['Hardware & Trade', '/hardware-trade-supplies', 'Identify tools and supplies around the material and task.'],
  ['Building & Engineering', '/building-engineering', 'Capture grades, standards, quantities and project delivery requirements.'],
  ['Parts & Aftermarket', '/parts-aftermarket', 'Clarify asset details and check supplied fitment information.'],
  ['Buggies & Vehicles', '/buggies-commercial-vehicles', 'Capture seating, payload and route requirements for fleet enquiries.'],
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

export const HOME_SELECTION_STEPS = [
  ['Ingest', 'Your product knowledge', 'Bring approved catalogues, specifications and business guidance into the Agent’s knowledge base. Build the product context needed to answer buyer enquiries.'],
  ['Reason', 'The buyer’s requirements', 'Interpret the buyer’s application, technical requirements and constraints. Ask for missing details to establish what a suitable product needs to do.'],
  ['Retrieve', 'Relevant product options', 'Find relevant products and specifications in your approved catalogue and supported inventory data. Filter the options against the buyer’s stated requirements.'],
  ['Recommend', 'A shortlist with reasons', 'Suggest suitable options and explain why they fit. Flag what your team still needs to confirm, including technical suitability, availability and commercial terms.'],
] as const;

export function HomeEducationBody() {
  return (
    <><HomeMarketShift /><HomeAgentFoundations />
    <div className={styles.body}>
      <section className={styles.section} aria-labelledby="home-industrial-context">
        <div className={`${styles.frame} ${styles.context}`}>
          <div>
            <p className={styles.eyebrow}>Industrial product knowledge</p>
            <h2 id="home-industrial-context">Built for the complexity of industrial products.</h2>
            <CatalogueGraphic />
          </div>
          <div>
            <p className={styles.lead}>Industrial buyers need to know whether a product fits the job. Antbuildz.AI helps them work through specifications, application requirements and suitable options using your technical catalogue.</p>
            <ul className={styles.points}>
              <li>Bring scattered product documents into the conversation.</li>
              <li>Clarify the application before suggesting equipment.</li>
              <li>Check specifications and supported inventory data.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.approach}`} aria-labelledby="home-selection-approach">
        <div className={styles.frame}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>The Antbuildz approach</p>
            <h2 id="home-selection-approach">From your catalogue to <span className={styles.selectionEmphasis}>a suitable shortlist.</span></h2>
            <p>Start with your approved product knowledge. The Agent interprets each buyer’s needs, finds relevant options and explains its recommendations for your sales team to review.</p>
          </div>
          <ol className={styles.stages} aria-label="Ingest, Reason, Retrieve, Recommend: from catalogue to shortlist">
            {HOME_SELECTION_STEPS.map(([title, label, description], index) => (
              <li key={title}>
                <span className={styles.step} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <article className={styles.stageCard}>
                  <SelectionGraphic step={index} />
                  <h3>{title}</h3>
                  <span className={styles.stageLabel}>{label}</span>
                  <p>{description}</p>
                  <div className={styles.stageProgress} aria-hidden="true"><span style={{ width: `${(index + 1) * 25}%` }} /></div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="home-product-relationship">
        <div className={styles.frame}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>One connected workflow</p>
            <h2 id="home-product-relationship" className={styles.productHeading}><span>Your AI Sales Agent.</span>{' '}<span>Plus a connected Webstore.</span></h2>
          </div>
          <div className={styles.products}>
            <article className={styles.agentProduct}>
              <AgentGraphic />
              <div className={styles.productIdentity}><p className={styles.productLabel}>AI Sales Agent</p><span className={styles.productBadge}>Start here</span></div>
              <h3>Turn buyer questions into informed enquiries.</h3>
              <p>Give buyers clear answers and suitable recommendations. Your Agent interprets requirements, asks for missing details and prepares enquiries for your team, using your approved product and business knowledge.</p>
              <a className={styles.textLink} href="/ai-sales-agent">Explore AI Sales Agent <Arrow /></a>
            </article>
            <span className={styles.productPlus} aria-hidden="true">+</span>
            <article className={styles.webstoreProduct}>
              <WebstoreGraphic />
              <div className={styles.productIdentity}><p className={styles.productLabel}>AI Webstore Suite</p><span className={styles.productBadge}>Optional addition</span></div>
              <h3>Accurate product context. Built for discovery.</h3>
              <p>Connect a branded industrial storefront with a dedicated URL for each product, then organise approved specifications and supported inventory data in one library. Give the Agent more reliable product context for better-informed recommendations, while structured pages support organic visibility in search engines (SEO) and generative AI discovery (GEO).</p>
              <a className={styles.textLink} href="/ai-webstore-suite">Explore AI Webstore Suite <Arrow /></a>
            </article>
          </div>
          <p className={styles.connection}>Start with the Agent. Add Webstore when you need connected product and inventory context, plus greater organic exposure through SEO and GEO. Inventory freshness depends on the data, plan and connections configured during setup.</p>
          <p className={styles.console}>Manage your agent’s knowledge, instructions and conversations through <a href="/ai-agent-console">AI Agent Console</a>.</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.industries}`} aria-labelledby="home-industries-heading">
        <div className={styles.frame}>
          <p className={styles.eyebrow}>Who we serve</p>
          <h2 id="home-industries-heading">Built around the way industrial businesses sell.</h2>
          <ul className={styles.industryGrid}>
            {HOME_INDUSTRIES.map(([name, href, description], index) => (
              <li key={href}><h3><a href={href}><IndustryGraphic index={index} /><span className={styles.industryName}>{name}</span><Arrow /></a></h3><p>{description}</p></li>
            ))}
          </ul>
        </div>
      </section>
    </div></>
  );
}

export function HomeEducationFaq() {
  return (
    <section className={`si-sierra-stage si-sierra-stage--faqs ${styles.faq}`} aria-labelledby="home-faq-heading">
      <div className="si-container">
        <div className="si-sierra-heading si-sierra-heading--centered">
          <span className={`si-eyebrow ${styles.faqEyebrow}`}>FAQ</span>
          <h2 id="home-faq-heading">Your AI Sales Agent questions, answered.</h2>
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
  return <>{createPortal(<HomeEducationBody />, targets.body)}{createPortal(<HomeEducationFaq />, targets.faq)}</>;
}
