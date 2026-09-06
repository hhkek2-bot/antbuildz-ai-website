/* Native links cross between source-rendered pages and the independent public SPA. */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import { PublicPageShell } from '../agreements/legal-shell';
import { roleMetadata } from '../ai-roles/metadata';
import shared from '../ai-roles/roles.module.css';
import styles from './overview.module.css';
import { WHO_WE_SERVE_SEO as seo, INDUSTRY_OVERVIEW, TECHNICAL_PRODUCT_EXAMPLES, BUSINESS_FIT } from '@/lib/who-we-serve-overview';
import { AI_ROLES_OVERVIEW_IMAGE } from '@/lib/ai-role-images';

export const metadata = roleMetadata(seo.title, seo.description, seo.path);

const base = 'https://antbuildz.ai';
const schema = {
  '@context': 'https://schema.org', '@graph': [
    { '@type': 'CollectionPage', '@id': `${base}${seo.path}#webpage`, url: `${base}${seo.path}`, name: 'Who We Serve', description: seo.description, isPartOf: { '@id': `${base}/#website` }, about: { '@id': `${base}/#software` }, inLanguage: 'en-SG' },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: 'Who We Serve', item: `${base}${seo.path}` },
    ] },
  ],
};

export default function WhoWeServePage() {
  return <PublicPageShell>
    <script id="route-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <div className={`${shared.page} ${styles.page}`}>
      <section className={shared.hero}>
        <div className={shared.frame}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Who We Serve</span></nav>
          <div className={`${shared.heroStage} ${styles.heroStage}`}>
            <Image className={shared.heroPhoto} src={AI_ROLES_OVERVIEW_IMAGE.src} alt={AI_ROLES_OVERVIEW_IMAGE.alt} fill sizes="(max-width: 767px) 90vw, 1320px" priority />
            <div className={shared.stageShade} aria-hidden="true" />
            <div className={`${shared.stageCopy} ${styles.heroCopy}`}>
              <p className={styles.heroEyebrow}>Who We Serve</p>
              <h1><span>Built Around</span>{' '}<span>Your Product Business</span></h1>
              <p className={shared.stageLead}>From equipment fleets to precision instruments and electronics, help customers compare specifications, clarify requirements and find a supported next step.</p>
            </div>
            <div className={shared.stageActions}><div className={shared.actions}><a className={shared.primary} href="#industries">Find Your Business</a></div></div>
          </div>
        </div>
      </section>

      <section className={`${shared.section} ${styles.canvas}`} aria-labelledby="industries">
        <div className={shared.frame}>
          <div className={shared.intro}><p className={shared.eyebrow}>Our industrial roots</p><h2 id="industries">Find your business</h2><p>Built from industrial equipment and rental experience. Explore how an AI Agent can support the product questions, sales enquiries and service needs in your business.</p></div>
          <div className={styles.industryGrid}>{INDUSTRY_OVERVIEW.map((industry, index) => <a className={styles.industryCard} href={industry.href} key={industry.href}>
            <div className={styles.cardPhoto}><Image src={industry.image} alt={industry.alt} fill sizes="(max-width: 767px) 90vw, (max-width: 1179px) 44vw, 23vw" /></div>
            <div className={styles.cardCopy}><span className={styles.number}>0{index + 1}</span><h3>{industry.name}</h3><p>{industry.description}</p><p className={styles.examples}>{industry.examples}</p><span className={styles.cardLink}>Explore industry <span aria-hidden="true">↗</span></span></div>
          </a>)}</div>
        </div>
      </section>

      <section className={shared.section} aria-labelledby="technical-products"><div className={shared.frame}>
        <div className={shared.intro}><p className={shared.eyebrow}>Beyond heavy equipment</p><h2 id="technical-products">Small products can bring<br /> complex questions</h2><p>Product complexity comes in many forms. Instruments, electronics and technical consumer products can also benefit when customers need guidance to understand, compare or choose.</p></div>
        <div className={styles.technicalGrid}>{TECHNICAL_PRODUCT_EXAMPLES.map(item => <article className={styles.technicalItem} key={item.title}>
          <span className={shared.step}>{item.number}</span><h3>{item.title}</h3><p className={styles.technicalExamples}>{item.examples}</p>
          <blockquote>{item.question}</blockquote><p>{item.guidance}</p><a className={shared.textLink} href={item.href}>{item.link} <span aria-hidden="true">↗</span></a>
        </article>)}</div>
        <p className={styles.note}>These are example applications. Answers depend on your approved knowledge and configured data connections. Your team confirms technical suitability and commercial commitments.</p>
      </div></section>

      <section className={`${shared.section} ${styles.soft}`} aria-labelledby="business-fit"><div className={shared.frame}>
        <div className={shared.split}><div><p className={shared.eyebrow}>A shared need</p><h2 id="business-fit">The fit starts<br /> with your products</h2><p className={styles.fitLead}>Whether you sell to a business or an individual, the key is how much guidance the product decision needs.</p><a className={shared.textLink} href="/ai-sales-agent">Explore AI Agent <span aria-hidden="true">↗</span></a></div>
          <ol className={styles.fitList}>{BUSINESS_FIT.map(([title, body], index) => <li key={title}><span className={styles.number}>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
        </div>
      </div></section>

      <section className={shared.closing}><div className={shared.ctaPanel}><p className={shared.eyebrow}>Let’s talk about your products</p><h2>Your industry isn’t listed?</h2><p>Show us your catalogue and the questions your customers ask.<br /> We’ll explore where an AI Agent could help your team.</p><div className={shared.actions}><a className={shared.primary} href="/book-a-demo">Book a Demo</a><a className={shared.secondary} href="/ai-roles">Explore Agent Roles</a></div></div></section>
    </div>
  </PublicPageShell>;
}
