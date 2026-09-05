/* Native links cross between source-rendered pages and the independent legacy SPA. */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import { AI_ROLES, type AiRole } from '@/lib/ai-roles';
import { AI_ROLE_IMAGES, AI_ROLES_OVERVIEW_IMAGE } from '@/lib/ai-role-images';
import { AI_ROLE_COPY, AI_ROLES_OVERVIEW_COPY, type AiRoleCopy } from '@/lib/ai-role-copy';
import { PublicPageShell } from '../agreements/legal-shell';
import styles from './roles.module.css';

function Actions({ mode = 'standard' }: { mode?: 'standard' | 'hero' }) {
  if (mode === 'hero') {
    return <div className={styles.actions}>
      <a className={styles.primary} href="/ai-sales-agent">Learn More</a>
    </div>;
  }
  return <div className={styles.actions}>
    <a className={styles.primary} href="/signup">Build Your AI Agent</a>
    <a className={styles.secondary} href="/book-a-demo">Book a Demo</a>
  </div>;
}

function RoleCards({ current }: { current?: string }) {
  const gridClassName = `${styles.roleCards} ${current ? styles.relatedRoleCards : styles.overviewRoleCards}`;
  return <div className={gridClassName}>
    {AI_ROLES.filter(role => role.slug !== current).map((role, index) => <a className={styles.roleCard} href={`/ai-roles/${role.slug}`} key={role.slug}>
      <span className={styles.step} aria-hidden="true">0{index + 1}</span>
      <h3>{role.name}</h3><p>{role.summary}</p><span className={styles.textLink}>Explore role <span aria-hidden="true">↗</span></span>
    </a>)}
  </div>;
}

const workflow = [
  ['Add your knowledge', 'Choose the job you want the Agent to handle. Add the relevant catalogues, manuals, FAQs and policies in AI Agent Console.'],
  ['Set the rules', 'Define what the Agent should answer, what details it should collect and when your team needs to take over.'],
  ['Test real enquiries', 'Use the Playground to test typical customer questions and exceptions. Refine your knowledge and instructions before going live.'],
  ['Publish and review', 'Share your dedicated AI Terminal link on your website, in ads and across marketing channels. Review incoming conversations and keep your answers current.'],
] as const;

function Workflow({ copy }: { copy?: AiRoleCopy }) {
  return <section className={styles.section} aria-labelledby="workflow-heading"><div className={styles.frame}>
    <div className={styles.intro}><p className={styles.eyebrow}>How</p><h2 id="workflow-heading">{copy?.deploymentHeading ?? 'How to deploy your AI Agent'}</h2>
      <p>{copy?.deploymentIntro ?? 'Set up knowledge and conversation rules in AI Agent Console. Your dedicated AI Terminal gives anyone with the link a place to talk to your Agent.'}</p></div>
    <ol className={styles.workflow}>{(copy?.workflow ?? workflow).map(([name, body], index) => <li key={name}><span className={styles.step}>0{index + 1}</span><h3>{name}</h3><p>{body}</p></li>)}</ol>
    <a className={styles.textLink} href="/ai-agent-console">Explore AI Agent Console <span aria-hidden="true">↗</span></a>
  </div></section>;
}

function FinalCta() {
  return <section className={styles.closing}><div className={styles.ctaPanel}>
    <h2>Ready to deploy<br /> your AI Agent?</h2>
    <p>Start with one conversation role and your business knowledge. Share your AI Terminal wherever customers discover you.</p><Actions />
    <a className={styles.textLink} href="/pricing">View Pricing</a>
  </div></section>;
}

/** The AI Roles editorial hero, without conversation overlays. */
function RoleHeroStage({ role, overview = false }: { role: AiRole; overview?: boolean }) {
  const photo = overview ? AI_ROLES_OVERVIEW_IMAGE : AI_ROLE_IMAGES[role.slug];
  return <div className={`${styles.heroStage} ${role.slug === 'after-sales-service' ? styles.afterSalesStage : ''}`}>
    <Image className={styles.heroPhoto}
      src={photo.src} alt={photo.alt} fill
      sizes="(max-width: 767px) 90vw, (max-width: 1344px) calc(100vw - 24px), 1320px" priority />
    <div className={styles.stageShade} aria-hidden="true" />
    <div className={styles.stageCopy}>
      <h1><span>{overview ? AI_ROLES_OVERVIEW_COPY.headline[0] : AI_ROLE_COPY[role.slug].headline[0]}</span>{' '}<span>{overview ? AI_ROLES_OVERVIEW_COPY.headline[1] : AI_ROLE_COPY[role.slug].headline[1]}</span></h1>
      <p className={styles.stageLead}>{overview ? AI_ROLES_OVERVIEW_COPY.intro : AI_ROLE_COPY[role.slug].intro}</p>
    </div>
    <div className={styles.stageActions}><Actions mode="hero" /></div>
  </div>;
}

export function RolesOverview() {
  return <PublicPageShell><div className={styles.page}>
    <section className={styles.hero}><div className={styles.frame}>
      <RoleHeroStage role={AI_ROLES[0]} overview />
    </div></section>
    <section className={styles.section} aria-labelledby="roles-heading"><div className={styles.frame}>
      <div className={styles.intro}><p className={styles.eyebrow}>What</p><h2 id="roles-heading">What your AI Agent can do</h2><p>Choose the conversation your visitors need: sales, product guidance or support. These are roles for one configurable Agent, not five separate products or subscriptions. Your Agent answers from your business knowledge, asks useful questions and gathers details for your team.</p></div><RoleCards />
    </div></section>
    <section className={`${styles.section} ${styles.white}`} aria-labelledby="placement-heading"><div className={styles.frame}>
      <div className={styles.split}><div><p className={styles.eyebrow}>When</p><h2 id="placement-heading">When to deploy your Agent</h2></div><div><p>Use your Agent when people arrive from your website, ads or other online channels with questions. Link a campaign directly to your dedicated AI Terminal so an interested visitor can talk to your Agent, explore products and explain what they need.</p><p>Your AI Terminal is a dedicated, shareable conversation page. Anyone with its link can talk to your Agent. Share it in ads, social posts, emails or website links to give each visitor a direct way to get answers from your business knowledge.</p><a className={styles.textLink} href="/ai-sales-agent">Explore AI Sales Agent</a></div></div>
    </div></section>
    <Workflow />
    <FinalCta />
  </div></PublicPageShell>;
}

export function RoleDetail({ role }: { role: AiRole }) {
  const copy = AI_ROLE_COPY[role.slug];
  return <PublicPageShell><div className={styles.page}>
    <section className={styles.hero}><div className={styles.frame}>
      <RoleHeroStage role={role} />
    </div></section>
    <section className={styles.section} aria-labelledby="capabilities-heading"><div className={styles.frame}>
      <div className={styles.intro}><p className={styles.eyebrow}>What</p><h2 id="capabilities-heading">{copy.capabilityHeading}</h2><p>{copy.description}</p></div>
      <div className={styles.capabilities}>{role.capabilities.map((capability, index) => <article key={capability.title}><span className={styles.step}>0{index + 1}</span><h3>{capability.title}</h3><p>{capability.body}</p></article>)}</div>
    </div></section>
    <section className={`${styles.section} ${styles.white}`} aria-labelledby="use-cases-heading"><div className={styles.frame}>
      <div className={styles.intro}><p className={styles.eyebrow}>When</p><h2 id="use-cases-heading">When to deploy this Agent</h2><p>{copy.useCaseIntro}</p></div><div className={styles.businesses}>{role.businesses.map(business => <article key={business.name}><h3>{business.name}</h3><p>{business.example}</p></article>)}</div>
      <div className={styles.related}><a className={styles.textLink} href={role.related.href}>{role.related.label} ↗</a><a className={styles.textLink} href="/resources">Explore AI Agent guides ↗</a><a className={styles.textLink} href="/help/ai">AI Agent setup FAQs ↗</a></div>
    </div></section>
    <Workflow copy={copy} />
    <section className={`${styles.section} ${styles.white}`} aria-labelledby="preparation-heading"><div className={styles.frame}>
      <div className={styles.split}><div><p className={styles.eyebrow}>Prepare</p><h2 id="preparation-heading">What to prepare<br /> for this role</h2></div><div><ul className={styles.sources}>{role.sources.map(source => <li key={source}>{source}</li>)}</ul><p className={styles.small}>Defining a role does not automatically connect these systems. The Agent handles conversations: answering questions and collecting enquiry details. Your team handles quotations, order changes, approvals and service arrangements.</p><a className={styles.textLink} href="/ai-agent-console">Manage knowledge in AI Agent Console ↗</a></div></div>
    </div></section>
    <section className={`${styles.section} ${styles.white}`}><div className={styles.frame}><div className={styles.intro}><h2>Explore the other roles</h2><p>Different jobs. The same AI Agent and business knowledge.</p></div><RoleCards current={role.slug} /></div></section>
    <FinalCta />
  </div></PublicPageShell>;
}
