'use client';

import type { SVGProps } from 'react';
import baseStyles from './home-enquiry-gap.module.css';
import styles from './home-market-shift.module.css';

// Fidelity transfer from the read-only Webstore reference.
function Icon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{children}</svg>;
}
function Search(props: SVGProps<SVGSVGElement>) { return <Icon {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></Icon>; }
function Clock(props: SVGProps<SVGSVGElement>) { return <Icon {...props}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></Icon>; }

function Sparkles(props: SVGProps<SVGSVGElement>) { return <Icon {...props}><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3ZM20 2v4M18 4h4M4 17v4M2 19h4" /></Icon>; }
function Check(props: SVGProps<SVGSVGElement>) { return <Icon {...props}><path d="m20 6-11 11-5-5" /></Icon>; }

export function HomeMarketShift() {
  return (
      <section className={`${baseStyles.section} ${styles.section}`} aria-labelledby="home-market-shift">
        <div className="max-w-7xl mx-auto">
          <div className="ws2-market-heading max-w-[1180px] mx-auto text-center mb-14">
            <p className="mkt-section-eyebrow ws2-eyebrow-orange">Market Shift</p>
            <h2 id="home-market-shift" className="mkt-section-title text-[#0b1220]">
              <span className="mkt-gradient-text">AI Is Changing</span> How Industrial Buyers Choose
            </h2>
            <p className="mkt-section-desc ws2-market-desc mt-5">
              <span className="mkt-desc-line">Buyers research industrial products online before contacting a supplier.</span>
              <span className="mkt-desc-line">Make specifications, product options and the next enquiry step easy to find.</span>
            </p>
          </div>

          <div className={`${styles.cards} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[22px] items-start lg:pb-20`}>
            {[
              { eyebrow: "Online", title: "Industrial Enquiries Start Online", desc: "Help buyers find your products, understand the specifications and see how to make an enquiry.", tone: "blue", visual: "search" },
              { eyebrow: "Speed", title: "Fast Product Answers Are Expected", desc: "Answer routine product questions promptly. Flag availability, delivery and commercial details that your team needs to confirm.", tone: "peach", visual: "clock" },
              { eyebrow: "Self-Serve", title: "Product Discovery Is Self-Directed", desc: "Let buyers browse your catalogue, compare options and explore product fit before speaking with sales.", tone: "mint", visual: "browse" },
              { eyebrow: "AI Influence", title: "AI Influences Supplier Shortlists", desc: "Clear, structured product pages help buyers and AI-assisted search understand what you supply.", tone: "lavender", visual: "bot" },
            ].map((c, i) => {
              const tones: Record<string, { color: string; soft: string }> = {
                blue: { color: "#2563eb", soft: "#eff6ff" },
                peach: { color: "#e11d48", soft: "#fff1f2" },
                mint: { color: "#059669", soft: "#ecfdf5" },
                lavender: { color: "#7c3aed", soft: "#f5f3ff" },
              };
              const t = tones[c.tone];
              return (
                <article
                  key={i}
                  className={`ws2-bento-card group relative self-start overflow-hidden bg-white transition-all duration-300 flex flex-col ${i % 2 === 1 ? "lg:mt-20" : ""}`}
                >
                  {/* Visual */}
                  <div
                    className="ws2-bento-visual relative h-[210px] flex items-center justify-center overflow-hidden" aria-hidden="true"
                    style={{ background: `radial-gradient(120% 80% at 50% 0%, ${t.soft} 0%, #fafbfc 70%, #f7f8fa 100%)` }}
                  >
                    {c.visual === "search" && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute w-[160px] h-[160px] rounded-full border-[1.5px] border-dashed opacity-70" style={{ borderColor: `${t.color}32` }} />
                        <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-white text-xs font-bold shadow-lg" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}dd)` }}>
                          <Search className="w-3.5 h-3.5" /> Search & Compare
                        </div>
                        {["Specs", "Pricing", "Reviews", "Suppliers"].map((chip, ci) => (
                          <span
                            key={chip}
                            className="absolute text-[0.72rem] font-semibold px-2.5 py-1 bg-white border border-[rgba(15,23,42,0.08)] rounded-full shadow-sm"
                            style={{
                              top: `${50 + 38 * Math.sin((ci * Math.PI) / 2)}%`,
                              left: `${50 + 38 * Math.cos((ci * Math.PI) / 2)}%`,
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    )}
                    {c.visual === "clock" && (
                      <div className="relative flex items-center justify-center">
                        <div className={`absolute w-[150px] h-[150px] rounded-full ${styles.clockPulse}`} style={{ background: `${t.color}15` }} />
                        <div className="relative w-[78px] h-[78px] rounded-full grid place-items-center text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}dd)` }}>
                          <Clock className="w-9 h-9" />
                        </div>
                        <div className="absolute -right-2 top-2 px-2.5 py-1 rounded-full bg-white border border-[rgba(15,23,42,0.08)] shadow text-[0.7rem] font-bold" style={{ color: t.color }}>
                          Quick answers
                        </div>
                      </div>
                    )}
                    {c.visual === "browse" && (
                      <div className="relative flex items-end gap-2.5">
                        {[0, 1, 2].map((b) => (
                          <div
                            key={b}
                            className="w-[64px] h-[88px] rounded-xl bg-white border border-[rgba(15,23,42,0.08)] shadow-md p-2 flex flex-col justify-between"
                            style={{ transform: `translateY(${b === 1 ? "-10px" : "0"})` }}
                          >
                            <div className="h-3 w-8 rounded" style={{ background: `${t.color}30` }} />
                            <div className="space-y-1">
                              <div className="h-1.5 w-full rounded bg-slate-100" />
                              <div className="h-1.5 w-3/4 rounded bg-slate-100" />
                            </div>
                            <div className="h-2 w-10 rounded-full" style={{ background: t.color }} />
                          </div>
                        ))}
                        <div className="absolute -top-3 -right-3 px-2 py-0.5 rounded-full text-[0.65rem] font-bold text-white shadow" style={{ background: t.color }}>
                          Compare
                        </div>
                      </div>
                    )}
                    {c.visual === "bot" && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Central AI core */}
                        <div className="relative z-20 flex flex-col items-center gap-1.5">
                          <div
                            className="w-12 h-12 rounded-2xl grid place-items-center text-white shadow-lg"
                            style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}dd)` }}
                          >
                            <Sparkles className="w-6 h-6" />
                          </div>
                          <span className="text-[0.6rem] font-bold tracking-wider uppercase" style={{ color: t.color }}>AI Analysis</span>
                        </div>

                        {/* Pulsing rings behind core */}
                        <div className="absolute w-[130px] h-[130px] rounded-full" style={{ background: `${t.color}10` }} />

                        {/* Supplier comparison chips */}
                        {[
                          { label: "Supplier A", score: "Specs", pos: "top-3 left-3" },
                          { label: "Supplier B", score: "Price", pos: "top-3 right-3" },
                          { label: "Supplier C", score: "Fit", pos: "bottom-5 left-4" },
                        ].map((s) => (
                          <div
                            key={s.label}
                            className={`absolute ${s.pos} z-10 flex items-center gap-1.5 px-2 py-1 bg-white border border-[rgba(15,23,42,0.08)] rounded-lg shadow-sm`}
                          >
                            <span className="text-[0.62rem] font-semibold text-[#0b1220]">{s.label}</span>
                            <span className="text-[0.6rem] font-bold px-1.5 py-0.5 rounded text-white" style={{ background: t.color }}>{s.score}</span>
                          </div>
                        ))}

                        {/* Match badge */}
                        <div
                          className="absolute bottom-5 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-lg shadow-sm text-white"
                          style={{ background: t.color }}
                        >
                          <Check className="w-3 h-3" />
                          <span className="text-[0.62rem] font-bold">Best Match</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-white to-transparent z-[5] pointer-events-none" />
                  </div>

                  {/* Body */}
                  <div className="ws2-bento-body px-7 pt-6 pb-7 flex flex-col">
                    <span className="text-[0.78rem] font-semibold mb-2.5" style={{ color: t.color }}>{c.eyebrow}</span>
                    <h3 className="font-display font-bold text-[1.18rem] leading-[1.3] tracking-[-0.015em] text-[#0b1220] mb-2.5">{c.title}</h3>
                    <p className="text-[0.92rem] leading-[1.65] text-[#5b6472]">{c.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
  );
}
