/* Native links preserve navigation across the independent copied SPA. */
/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import { PublicPageShell } from '../agreements/legal-shell';
import { customerTutorials, tutorialReviewDate, tutorialScreenshots, type CustomerTutorial } from '@/lib/customer-tutorials';
import styles from './tutorials.module.css';
import { RESOURCE_TUTORIAL_CATEGORIES } from '@/lib/resource-tutorial-categories';

function Screenshot({ name }: { name: string }) {
  const shot = tutorialScreenshots[name];
  return <figure className={styles.figure}>
    <a className={styles.capture} href={`/tutorials/screenshots/${name}.jpg`} target="_blank" rel="noreferrer" aria-label={`Open full-size screenshot: ${shot.alt}`}>
      <img src={`/tutorials/screenshots/${name}.jpg`} alt={shot.alt} width={shot.width} height={shot.height} loading="lazy" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs><marker id={`arrow-${name}`} markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5" fill="#E3180A" /></marker></defs>
        {shot.marks.map(mark=><line key={mark.label} x1={mark.x+7} y1={mark.y-13} x2={mark.x} y2={mark.y} stroke="#E3180A" strokeWidth=".4" markerEnd={`url(#arrow-${name})`}/>)}
      </svg>
      {shot.marks.map((mark,i)=><span key={mark.label} aria-hidden="true" className={styles.marker} style={{position:'absolute',left:`${mark.x+7}%`,top:`${mark.y-13}%`,transform:'translate(-50%,-50%)'}}>{i+1}</span>)}
    </a>
    <figcaption>Live screen captured {tutorialReviewDate}. Select the image to open the unchanged original.</figcaption>
    {shot.marks.length > 0 && <ol className={styles.callouts}>{shot.marks.map(mark=><li key={mark.label}>{mark.label}</li>)}</ol>}
  </figure>;
}

export function CustomerTutorialPage({ guide }: { guide: CustomerTutorial }) {
  const category = RESOURCE_TUTORIAL_CATEGORIES.find(item=>item.stage===guide.stage);
  const url = `https://antbuildz.ai/resources/${guide.slug}`;
  const schema = { '@context':'https://schema.org', '@type':'Article', headline:guide.title, description:guide.description, url, dateModified:tutorialReviewDate, articleBody:guide.steps.map(s=>`${s.title}\n${s.paragraphs.join('\n')}`).join('\n\n'), author:{'@type':'Organization',name:'Antbuildz'}, image:guide.steps.filter(s=>s.screenshot).map(s=>`https://antbuildz.ai/tutorials/screenshots/${s.screenshot}.jpg`) };
  return <PublicPageShell><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><div className={styles.frame}>
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/resources">Resources</a><span>/</span><a href="/resources/getting-started">Step-by-step guides</a>{category && <><span>/</span><a href={category.href}>{category.label}</a></>}</nav>
    <header className={styles.hero}><p className={styles.eyebrow}>{guide.stage} · Step-by-step guide</p><h1>{guide.title}</h1><p className={styles.intro}>{guide.description}</p><p className={styles.meta}>Reviewed {tutorialReviewDate} · {guide.status === 'partial' ? 'Partially verified' : 'Interface inspected; actions require your verification'}</p></header>
    <div className={styles.layout}><aside className={styles.contents}><h2>In this guide</h2><ol>{guide.steps.map((s,i)=><li key={s.title}><a href={`#step-${i+1}`}>{s.title}</a></li>)}</ol><a href="#completion">Completion checklist</a><a href="#questions">Common questions</a></aside>
    <article className={styles.article}><section className={styles.note}><h2>Before you start</h2><p>{guide.prerequisite}</p><p><strong>Verification scope:</strong> {guide.limitation}</p></section>
      {guide.steps.map((step,i)=><section className={styles.step} id={`step-${i+1}`} key={step.title}><p className={styles.eyebrow}>Step {i+1}</p><h2>{step.title}</h2>{step.paragraphs.map(p=><p key={p}>{p}</p>)}{step.example && <div className={styles.example}><p className={styles.eyebrow}>Example — adapt and approve before use</p><pre>{step.example}</pre></div>}{step.screenshot && <Screenshot name={step.screenshot}/>} {step.guideSlug && <p><a href={`/resources/${step.guideSlug}`}>{customerTutorials.find(g=>g.slug===step.guideSlug)?.title} →</a></p>}</section>)}
      <section className={styles.step} id="completion"><h2>Completion checklist</h2><ul>{guide.checks.map(c=><li key={c}>{c}</li>)}</ul></section>
      <section className={styles.step} id="questions"><h2>Common questions</h2>{guide.faq.map(f=><details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</section>
      <nav className={styles.next} aria-label="Related tutorials"><h2>Related guides</h2>{customerTutorials.filter(t=>t.slug!==guide.slug && t.stage===guide.stage).slice(0,3).map(t=><a key={t.slug} href={`/resources/${t.slug}`}>{t.title} →</a>)}<a href="/resources/getting-started">Browse all step-by-step guides →</a></nav>
    </article></div></div></PublicPageShell>;
}

export function CustomerTutorialHub() {
  return <PublicPageShell><div className={styles.frame}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/resources">Resources</a><span>/ Step-by-step guides</span></nav><header className={styles.hero}><p className={styles.eyebrow}>Customer onboarding & product guidance</p><h1>From your first account<br/>to a customer-ready agent.</h1><p className={styles.intro}>Choose your package, prepare reliable knowledge and learn your AI Agent Console one task at a time. Follow the steps, compare the real screens and check the result before moving on.</p><a className={styles.button} href="/resources/quick-start-ai-agent">Follow the quick start →</a></header>
    <div className={styles.note}><h2>Choose the starting point that fits you</h2><p>Already signed up? Start with Agent Setup below. Bringing your product catalogue online? Use the webstore preparation checklist. Checkout activation and the live webstore builder walkthrough are still awaiting verification; those guides are clearly labelled.</p><p><a href="/pricing">Compare current packages</a> · <a href="https://aiconsole.antbuildz.com/app/overview">Open AI Agent Console</a></p></div>
    {RESOURCE_TUTORIAL_CATEGORIES.map((category,i)=><section className={styles.stage} id={category.id} style={{scrollMarginTop:110}} key={category.id}><p className={styles.eyebrow}>Part {i+1}</p><h2>{category.label}</h2><div className={styles.cards}>{customerTutorials.filter(g=>g.stage===category.stage).map(g=><a className={styles.card} key={g.slug} href={`/resources/${g.slug}`}><span className={styles.meta}>{g.status==='partial'?'Preparation · verification incomplete':'Step-by-step guidance'}</span><h3>{g.title}</h3><p>{g.description}</p><span>Read guide →</span></a>)}</div></section>)}
    <section className={styles.note}><h2>Written for customers—and support knowledge</h2><p>Each guide includes prerequisites, exact control names, completion checks and common questions. The support export retains verification limits and screenshot links. Importing it does not automatically train or connect an agent.</p><a href="/resources/tutorial-knowledge">View the structured knowledge export →</a></section>
  </div></PublicPageShell>;
}
