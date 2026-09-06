'use client';
/* Native links cross into the independently rendered public product pages. */
import { useState } from 'react';
import { HELP_FAQ_GROUPS, searchHelpFaqs, type HelpFaq } from '@/lib/help-faq-content';
import styles from './help-centre.module.css';

const tabs = [
  { id: 'primary', label: 'AI Agent', description: 'Setup, product intelligence, controls and integrations.' },
  { id: 'secondary', label: 'AI Webstore Suite', description: 'Webstore, catalogue, transactions and subscriptions.' },
] as const;
function Chevron({ open = false }: { open?: boolean }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ transform: open ? 'rotate(180deg)' : undefined }}><path d="m6 9 6 6 6-6" /></svg>;
}
function FaqRow({ faq }: { faq: HelpFaq }) {
  const [open, setOpen] = useState(false);
  return <div className={styles.row}>
    <h4><button className={styles.trigger} type="button" id={`${faq.id}-question`} aria-expanded={open} aria-controls={`${faq.id}-answer`} onClick={() => setOpen(!open)}><span>{faq.question}</span><Chevron open={open} /></button></h4>
    <div id={`${faq.id}-answer`} role="region" aria-labelledby={`${faq.id}-question`} hidden={!open}><div className="help-centre-answer"><p>{faq.answer}</p><a className="help-centre-reference" href={faq.href}>{faq.reference} <span aria-hidden="true">→</span></a></div></div>
  </div>;
}
export function HelpCentre() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('primary');
  const searching = Boolean(query.trim());
  const results = searchHelpFaqs(query);
  const groups = HELP_FAQ_GROUPS.filter(group => searching ? results.some(faq => faq.group === group.id) : active === 'primary' ? group.id !== 'webstore-suite' : ['webstore-suite','subscriptions'].includes(group.id));
  return <div className="help-centre-page antbuildz-ai-help-centre">
    <section className="help-centre-hero"><div className="faq-master-container"><div className="help-centre-hero__intro"><p className="faq-master-eyebrow">Antbuildz AI Help Centre</p><h1>Antbuildz AI Help</h1><p>Clear answers for the AI Agent, AI Webstore Suite and AI Agent Console, including product knowledge, setup, controls and subscriptions.</p></div>
      <label className="help-centre-search"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search Antbuildz AI help" aria-label="Search Help Centre answers" /></label>
    </div></section>
    <section className="help-centre-content" aria-label="AI product help topics"><div className="faq-master-container">
      {searching ? <div className="help-centre-content__heading"><div><p className="faq-master-eyebrow">Search results</p><h2 className={styles.searchTitle}>Results for “{query.trim()}”</h2></div><p aria-live="polite">{results.length} {results.length === 1 ? 'answer' : 'answers'}</p></div> : <div className="help-centre-tabs" role="tablist" aria-label="Choose an AI product">{tabs.map(tab => <button className={`help-centre-tab${active === tab.id ? ' is-active' : ''}`} key={tab.id} id={`help-centre-tab-ai-${tab.id}`} type="button" role="tab" aria-selected={active === tab.id} aria-controls="help-centre-panel-ai" tabIndex={active === tab.id ? 0 : -1} onClick={() => setActive(tab.id)} onKeyDown={event => { if (!['ArrowLeft','ArrowRight'].includes(event.key)) return; event.preventDefault(); const next = active === 'primary' ? 'secondary' : 'primary'; setActive(next); requestAnimationFrame(() => document.getElementById(`help-centre-tab-ai-${next}`)?.focus()); }}><span className="help-centre-tab__copy"><strong>{tab.label}</strong><span>{tab.description}</span></span></button>)}</div>}
      <div className="help-centre-layout"><div className="help-centre-answers-card" id={searching ? undefined : 'help-centre-panel-ai'} role={searching ? undefined : 'tabpanel'} aria-labelledby={searching ? undefined : `help-centre-tab-ai-${active}`}>
        {groups.length ? groups.map(group => <section className="help-centre-topic" id={group.id} key={group.id}><header><p>{group.eyebrow}</p><h3>{group.title}</h3><span>{group.summary}</span></header><div className="faq-master-accordion help-centre-accordion">{results.filter(faq => faq.group === group.id).map(faq => <FaqRow key={faq.id} faq={faq} />)}</div></section>) : <div className="help-centre-empty"><h3>No matching answer yet</h3><p>Try a different keyword, or ask the Antbuildz team for help.</p></div>}
      </div></div>
    </div></section>
  </div>;
}
