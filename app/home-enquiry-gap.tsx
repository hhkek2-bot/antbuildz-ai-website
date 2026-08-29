'use client';

import { useState, type SVGProps } from 'react';
import styles from './home-enquiry-gap.module.css';

// Source-owned transfer of the approved Webstore "The Gap" section.
// The reference project and original Webstore route remain unchanged.
function Icon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{children}</svg>;
}
function Search(props: SVGProps<SVGSVGElement>) { return <Icon {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></Icon>; }
function FileText(props: SVGProps<SVGSVGElement>) { return <Icon {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6M8 13h8M8 17h8"/></Icon>; }
function Wrench(props: SVGProps<SVGSVGElement>) { return <Icon {...props}><path d="m14.7 6.3 3 3a1 1 0 0 0 1.4 0l2.8-2.8a6 6 0 0 1-7.9 7.9l-7.5 7.5a3 3 0 0 1-4.2-4.2l7.5-7.5a6 6 0 0 1 7.9-7.9l-2.8 2.8a1 1 0 0 0-.2 1.2Z"/></Icon>; }
function MousePointerClick(props: SVGProps<SVGSVGElement>) { return <Icon {...props}><path d="m9 9 5 12 1.8-5.2L21 14ZM7.2 2.2 8 5.1M5.1 8 2.2 7.2M14 4.1l-1.5 2.3M6.4 12.5 4.1 14"/></Icon>; }
function MessageSquare(props: SVGProps<SVGSVGElement>) { return <Icon {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-5 5V4a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2Z"/></Icon>; }
function Megaphone(props: SVGProps<SVGSVGElement>) { return <Icon {...props}><path d="m3 11 18-5v12L3 14v-3ZM7 15l1 6h3l-1-5M21 6v12"/></Icon>; }
function User(props: SVGProps<SVGSVGElement>) { return <Icon {...props}><circle cx="12" cy="8" r="4"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/></Icon>; }
function Clock(props: SVGProps<SVGSVGElement>) { return <Icon {...props}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></Icon>; }

type ProblemTone = "lavender" | "peach" | "blue" | "mint" | "cream" | "ink";
const problems: { n: string; eyebrow: string; title: string; desc: string; tone: ProblemTone; visual: string }[] = [
  { n: "01", eyebrow: "Product Pages", title: "Weak Product Page Conversion", desc: "Traffic reaches product pages that do not explain specifications, suitability, pricing, availability, or the next enquiry step clearly enough.", tone: "lavender", visual: "browser" },
  { n: "02", eyebrow: "SEO & AI Search", title: "Poor Product Search Visibility", desc: "Product information hidden in PDFs, catalogues, images, or weak pages is harder for search engines and AI tools to understand, cite, and recommend.", tone: "cream", visual: "search" },
  { n: "03", eyebrow: "Product Data", title: "Unstructured Product Information", desc: "Incomplete specifications, inconsistent categories, and missing pricing or availability make it difficult for buyers to compare options and decide.", tone: "mint", visual: "scattered" },
  { n: "04", eyebrow: "Buyer Action", title: "No Clear Enquiry or Quote Path", desc: "Many websites lack clear enquiry flows, quotation actions, product comparison, or interactive guidance that moves an interested buyer forward.", tone: "blue", visual: "passive" },
  { n: "05", eyebrow: "Manual Sales", title: "Too Much Manual Sales Dependence", desc: "Buyers still need to call, email, or WhatsApp sales teams just to get basic answers before they can move forward.", tone: "peach", visual: "repeat" },
  { n: "06", eyebrow: "Buyer Speed", title: "Slow Buyer Experience", desc: "When pricing, availability, specs, and quotations require repeated back-and-forth communication, buyers lose momentum and choose faster suppliers.", tone: "ink", visual: "slow" },
];

const problemTones: Record<ProblemTone, { color: string; soft: string }> = {
  lavender: { color: "#7c3aed", soft: "#f5f3ff" },
  peach: { color: "#e11d48", soft: "#fff1f2" },
  blue: { color: "#2563eb", soft: "#eff6ff" },
  mint: { color: "#059669", soft: "#ecfdf5" },
  cream: { color: "#b45309", soft: "#fffbeb" },
  ink: { color: "#06b6d4", soft: "#f1f5f9" },
};

export function HomeEnquiryGap() {
  const [paused, setPaused] = useState(false);
  return (
      <section className={styles.section} aria-labelledby="home-enquiry-gap" data-paused={paused}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-[1100px] mx-auto text-center mb-14">
            <p className="mkt-section-eyebrow ws2-eyebrow-red">The Gap</p>
            <h2 id="home-enquiry-gap" className="mkt-section-title text-[#0b1220]">
              Why Industrial Product Enquiries <span className="mkt-gradient-text">Get Lost</span>
            </h2>
            <p className="mkt-section-desc ws2-gap-desc mt-5">
              Traffic alone does not create qualified enquiries. When product pages lack clear specifications, commercial information, guidance, and quotation paths, interested buyers leave before contacting sales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
            {problems.map((p, i) => {
              const t = problemTones[p.tone];
              return (
                <article
                  key={i}
                  className="ws2-bento-card group relative overflow-hidden bg-white hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Visual */}
                  <div
                    className="ws2-bento-visual relative h-[230px] flex items-center justify-center overflow-hidden" aria-hidden="true"
                    style={{ background: `radial-gradient(120% 80% at 50% 0%, ${t.soft} 0%, #fafbfc 70%, #f7f8fa 100%)` }}
                  >
                    {p.visual === "browser" && (
                      <div className="relative w-[80%] h-[150px] rounded-xl bg-white border border-[rgba(15,23,42,0.08)] shadow-md overflow-hidden">
                        <div className="flex items-center gap-1 px-3 py-1.5 border-b border-slate-100">
                          <span className="w-2 h-2 rounded-full bg-red-300" />
                          <span className="w-2 h-2 rounded-full bg-yellow-300" />
                          <span className="w-2 h-2 rounded-full bg-green-300" />
                          <span className="ml-2 h-1.5 w-20 rounded bg-slate-100" />
                        </div>
                        {/* incoming traffic dots */}
                        {[
                          { l: "G", left: "12%", c: "#4285F4", d: "0s" },
                          { l: "Ads", left: "34%", c: "#34a853", d: "0.4s" },
                          { l: "Soc", left: "58%", c: "#ec4899", d: "0.8s" },
                          { l: "Ref", left: "80%", c: "#f59e0b", d: "1.2s" },
                        ].map((s) => (
                          <span key={s.l} className="absolute top-7 pc-traffic flex items-center gap-1 text-[0.55rem] font-bold" style={{ left: s.left, color: s.c, animationDelay: s.d }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.c }} />
                            {s.l}
                          </span>
                        ))}
                        <div className="px-3 pt-9 space-y-1.5 opacity-50">
                          <div className="h-1.5 w-2/3 rounded bg-slate-200" />
                          <div className="h-1.5 w-1/2 rounded bg-slate-200" />
                          <div className="mt-2 h-5 w-20 rounded border border-dashed border-slate-300 grid place-items-center text-[0.55rem] text-slate-400">weak CTA</div>
                        </div>
                        <span className="absolute -right-2 -bottom-2 px-2 py-0.5 rounded-full text-[0.6rem] font-bold text-white shadow pc-pulse-soft" style={{ background: t.color }}>
                          Traffic lost
                        </span>
                      </div>
                    )}
                    {p.visual === "search" && (
                      <div className="relative w-[80%]">
                        <div className="px-3 py-2 rounded-full bg-white border border-[rgba(15,23,42,0.08)] shadow-md flex items-center gap-2 text-[0.7rem] font-medium text-[#0b1220] overflow-hidden">
                          <Search className="w-3.5 h-3.5 shrink-0" style={{ color: t.color }} />
                          <span className="whitespace-nowrap overflow-hidden inline-block" style={{ borderRight: `1.5px solid ${t.color}` }}>
                            industrial pump supplier...
                          </span>
                        </div>
                        <div className="mt-3 relative space-y-1.5 overflow-hidden rounded-md">
                          {[0, 1, 2].map((r) => (
                            <div key={r} className="px-2.5 py-1.5 rounded-md bg-white border border-slate-100">
                              <div className="h-1.5 w-3/4 rounded bg-slate-200 mb-1" />
                              <div className="h-1 w-1/2 rounded bg-slate-100" />
                            </div>
                          ))}
                          {/* hidden PDF */}
                          <div className="px-2.5 py-1.5 rounded-md bg-white border border-dashed border-slate-200 flex items-center gap-1.5 opacity-60">
                            <FileText className="w-3 h-3 text-slate-400" />
                            <span className="text-[0.6rem] text-slate-400">specs-catalogue.pdf (hidden)</span>
                          </div>
                          {/* scan line */}
                          <div className="absolute inset-x-0 h-[2px] pc-scan" style={{ background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }} />
                        </div>
                          <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[0.6rem] font-bold text-white shadow" style={{ background: t.color }}>
                          Not ranked
                        </span>
                      </div>
                    )}
                    {p.visual === "passive" && (
                      <div className="relative w-[80%]">
                        <div className="rounded-xl bg-white border border-[rgba(15,23,42,0.08)] shadow-md p-3 space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-md grid place-items-center" style={{ background: `${t.color}18` }}>
                              <Wrench className="w-3.5 h-3.5" style={{ color: t.color }} />
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="h-2 w-2/3 rounded" style={{ background: `${t.color}30` }} />
                              <div className="h-1.5 w-1/2 rounded bg-slate-100" />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="h-1.5 w-full rounded bg-slate-100" />
                            <div className="h-1.5 w-5/6 rounded bg-slate-100" />
                          </div>
                          <div className="flex gap-1.5">
                            <div className="h-6 flex-1 rounded-md border border-dashed border-slate-200 grid place-items-center text-[0.6rem] text-slate-400">Enquire?</div>
                            <div className="h-6 flex-1 rounded-md border border-dashed border-slate-200 grid place-items-center text-[0.6rem] text-slate-400">Quote?</div>
                          </div>
                        </div>
                        {/* searching cursor */}
                        <div className="absolute top-1 left-0 pc-cursor-search">
                          <MousePointerClick className="w-5 h-5 drop-shadow-sm" style={{ color: t.color }} />
                          <span className="absolute -top-3 left-4 px-1.5 py-0.5 rounded-full bg-white border border-slate-200 shadow text-[0.55rem] font-bold" style={{ color: t.color }}>?</span>
                        </div>
                        <span className="absolute -bottom-2 right-2 px-2 py-0.5 rounded-full text-[0.6rem] font-bold text-white shadow" style={{ background: t.color }}>
                          No next step
                        </span>
                      </div>
                    )}
                    {p.visual === "scattered" && (
                      <div className="relative w-full h-full">
                        {/* center incomplete product card */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[44%] rounded-lg bg-white border border-[rgba(15,23,42,0.08)] shadow p-2 space-y-1">
                          <div className="h-2 w-2/3 rounded" style={{ background: `${t.color}30` }} />
                          <div className="text-[0.55rem] text-slate-400">Capacity?</div>
                          <div className="text-[0.55rem] text-slate-400">Price?</div>
                          <div className="text-[0.55rem] text-slate-400">Availability?</div>
                        </div>
                        {/* broken connection lines */}
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                          <line x1="20%" y1="22%" x2="50%" y2="50%" stroke={t.color} strokeWidth="1" strokeDasharray="3 3" />
                          <line x1="80%" y1="20%" x2="50%" y2="50%" stroke={t.color} strokeWidth="1" strokeDasharray="3 3" />
                          <line x1="18%" y1="78%" x2="50%" y2="50%" stroke={t.color} strokeWidth="1" strokeDasharray="3 3" />
                          <line x1="82%" y1="76%" x2="50%" y2="50%" stroke={t.color} strokeWidth="1" strokeDasharray="3 3" />
                        </svg>
                        {/* floating chips */}
                        {[
                          { label: "Specs.pdf", x: "16%", y: "22%", d: "0s" },
                          { label: "Pricing.xls", x: "82%", y: "20%", d: "0.4s" },
                          { label: "WhatsApp", x: "16%", y: "78%", d: "0.8s" },
                          { label: "Catalogue", x: "84%", y: "76%", d: "0.2s" },
                        ].map((f) => (
                          <span
                            key={f.label}
                            className="absolute text-[0.62rem] font-semibold px-2 py-0.5 bg-white border border-[rgba(15,23,42,0.08)] rounded-full shadow-sm"
                            style={{ top: f.y, left: f.x, transform: "translate(-50%,-50%)", color: t.color }}
                          >
                            {f.label}
                          </span>
                        ))}
                        <span className="absolute top-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[0.6rem] font-bold text-white shadow pc-pulse-soft" style={{ background: t.color }}>
                          Unstructured
                        </span>
                      </div>
                    )}
                    {p.visual === "repeat" && (
                      <div className="relative w-[82%] h-full grid place-items-center">
                        {/* center sales inbox */}
                        <div className="relative">
                          <div className="w-12 h-12 rounded-xl bg-white border border-[rgba(15,23,42,0.08)] shadow grid place-items-center">
                            <MessageSquare className="w-5 h-5" style={{ color: t.color }} />
                          </div>
                          <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full text-[0.6rem] font-bold text-white grid place-items-center shadow" style={{ background: t.color }}>
                            5
                          </span>
                        </div>
                        {/* surrounding question bubbles */}
                        {[
                          { q: "Quantity?", x: "6%", y: "18%", d: "0s" },
                          { q: "Height?", x: "72%", y: "12%", d: "0.5s" },
                          { q: "Available?", x: "2%", y: "62%", d: "1s" },
                          { q: "Delivery?", x: "70%", y: "62%", d: "1.5s" },
                          { q: "Can quote?", x: "38%", y: "8%", d: "2s" },
                        ].map((b) => (
                          <div key={b.q} className="absolute pc-pop" style={{ top: b.y, left: b.x, animationDelay: b.d }}>
                            <div className="px-2 py-1 rounded-lg bg-white border border-[rgba(15,23,42,0.08)] shadow text-[0.6rem] font-medium text-[#0b1220]">{b.q}</div>
                          </div>
                        ))}
                        <span className="absolute -bottom-1 right-2 px-2 py-0.5 rounded-full text-[0.6rem] font-bold text-white shadow pc-pulse-soft" style={{ background: t.color }}>
                          <Megaphone className="inline w-2.5 h-2.5 mr-0.5" /> repeating…
                        </span>
                      </div>
                    )}
                    {p.visual === "slow" && (
                      <div className="relative w-[86%]">
                        {/* timeline */}
                        <div className="relative h-1 rounded-full bg-slate-200/70">
                          <div className="absolute inset-y-0 left-0 w-1/2 rounded-full" style={{ background: `${t.color}55` }} />
                          {[
                            { l: "Search", x: "0%" },
                            { l: "Ask", x: "28%" },
                            { l: "Wait", x: "50%" },
                            { l: "Quote", x: "78%" },
                            { l: "Deal", x: "98%" },
                          ].map((s, si) => (
                            <div key={s.l} className="absolute -top-1.5" style={{ left: s.x }}>
                              <span className="block w-3 h-3 rounded-full bg-white border-2" style={{ borderColor: si === 2 ? t.color : "#cbd5e1" }} />
                              <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[0.55rem] font-semibold text-slate-500 whitespace-nowrap">{s.l}</span>
                            </div>
                          ))}
                          {/* buyer dot */}
                          <div className="absolute -top-2 pc-buyer-walk" style={{ left: 0 }}>
                            <div className="w-5 h-5 rounded-full grid place-items-center text-white shadow" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)` }}>
                              <User className="w-3 h-3" />
                            </div>
                          </div>
                          {/* clock at Wait */}
                          <div className="absolute -top-7 left-[50%] -translate-x-1/2">
                            <div className="px-1.5 py-0.5 rounded-full bg-white border border-[rgba(15,23,42,0.08)] shadow flex items-center gap-1 text-[0.55rem] font-bold" style={{ color: t.color }}>
                              <Clock className="w-2.5 h-2.5" /> waiting…
                            </div>
                          </div>
                        </div>
                        <span className="absolute -bottom-7 right-0 px-2 py-0.5 rounded-full text-[0.6rem] font-bold text-white shadow" style={{ background: t.color }}>
                          Deal lost
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-white to-transparent z-[5] pointer-events-none" />
                  </div>

                  {/* Body */}
                  <div className="ws2-bento-body px-7 pt-6 pb-7 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-[0.7rem] font-bold tracking-wider px-2 py-0.5 rounded-full text-white" style={{ background: t.color }}>{p.n}</span>
                      <span className="text-[0.78rem] font-semibold" style={{ color: t.color }}>{p.eyebrow}</span>
                    </div>
                    <h3 className="font-display font-bold text-[1.18rem] leading-[1.3] tracking-[-0.015em] text-[#0b1220] mb-2.5">{p.title}</h3>
                    <p className="text-[0.92rem] leading-[1.65] text-[#5b6472]">{p.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className={styles.motionControl}><button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? "Play illustrations" : "Pause illustrations"}</button></div>
      </section>
  );
}
