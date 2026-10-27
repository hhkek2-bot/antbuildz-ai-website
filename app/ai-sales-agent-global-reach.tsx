'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { IntroVideo } from './features/conversational-experience/intro-video';
import { OriginalAntbuildzApp } from './original-antbuildz-app';
import styles from './ai-sales-agent-global-reach.module.css';

const LANGUAGES = [
  { label: 'Hello', language: 'English', x: '84%', y: '12%', colour: '#3b82f6', dx: '10px', dy: '-12px', delay: '-1.2s', duration: '7.4s' },
  { label: '你好', language: 'Mandarin', x: '14%', y: '14%', colour: '#e3180a', dx: '-12px', dy: '10px', delay: '-3.4s', duration: '8.1s' },
  { label: 'Hola', language: 'Spanish', x: '91%', y: '36%', colour: '#f97316', dx: '12px', dy: '9px', delay: '-2.1s', duration: '7.8s' },
  { label: 'Bonjour', language: 'French', x: '10%', y: '36%', colour: '#7c3aed', dx: '-10px', dy: '-11px', delay: '-4.6s', duration: '8.5s' },
  { label: 'مرحبا', language: 'Arabic', x: '84%', y: '58%', colour: '#7c3aed', dx: '9px', dy: '13px', delay: '-.8s', duration: '7.1s' },
  { label: 'हैलो', language: 'Hindi', x: '18%', y: '58%', colour: '#d4a91c', dx: '-13px', dy: '8px', delay: '-5.1s', duration: '8.3s' },
  { label: 'こんにちは', language: 'Japanese', x: '10%', y: '76%', colour: '#3b82f6', dx: '-8px', dy: '-12px', delay: '-2.9s', duration: '7.7s' },
  { label: '안녕하세요', language: 'Korean', x: '84%', y: '78%', colour: '#10b981', dx: '11px', dy: '-9px', delay: '-3.7s', duration: '8.6s' },
  { label: 'Hallo', language: 'German', x: '36%', y: '8%', colour: '#d4a91c', dx: '-9px', dy: '-10px', delay: '-1.7s', duration: '7.6s' },
  { label: 'Olá', language: 'Portuguese', x: '64%', y: '8%', colour: '#e3180a', dx: '10px', dy: '11px', delay: '-4.1s', duration: '8.2s' },
  { label: 'Привет', language: 'Russian', x: '34%', y: '90%', colour: '#f97316', dx: '-11px', dy: '8px', delay: '-2.5s', duration: '7.9s' },
  { label: 'Apa khabar', language: 'Malay', x: '64%', y: '90%', colour: '#10b981', dx: '12px', dy: '-8px', delay: '-5.4s', duration: '8.4s' },
] as const;

export function AiSalesAgentGlobalReach() {
  return <section className={`${styles.section} ws2-global-agent-section`} aria-labelledby="ai-sales-agent-global-reach-title" data-antbuildz-sales-agent-global-reach="true">
    <div className={styles.glowTop} aria-hidden="true" />
    <div className={styles.glowBottom} aria-hidden="true" />
    <div className={styles.frame}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>MULTIPLE LANGUAGES, CHANNELS &amp; MARKETS</p>
        <h2 className={styles.title} id="ai-sales-agent-global-reach-title" data-antbuildz-preserve-heading-punctuation="true">One Agent. Available <span className={styles.highlight}>24/7.</span></h2>
        <p className={styles.description}>Support buyers across your channels, supported languages and markets—even outside office hours.</p>
      </div>
      <div className={styles.visual} aria-hidden="true">
        <div className={styles.orbit} />
        <Image className={styles.globe} src="/images/ai-sales-agent-global-globe.svg" width={480} height={480} alt="" />
        {LANGUAGES.map((language) => <div
          className={styles.chip}
          key={language.language}
          style={{
            left: language.x,
            top: language.y,
            '--chip-colour': language.colour,
            '--dx': language.dx,
            '--dy': language.dy,
            '--duration': language.duration,
            animationDelay: language.delay,
          } as CSSProperties}
        ><strong>{language.label}</strong><span>{language.language}</span></div>)}
      </div>
    </div>
  </section>;
}

export function AiSalesAgentPage() {
  const [mount, setMount] = useState<HTMLElement | null>(null);
  const [videoMount, setVideoMount] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;
    let container: HTMLDivElement | null = null;
    let videoContainer: HTMLDivElement | null = null;
    let frame = 0;
    const attach = () => {
      if (window.location.pathname !== '/ai-agent') return;
      const hero = root.querySelector<HTMLElement>('[data-antbuildz-sales-agent] .bright-hero');
      if (hero && !videoContainer?.isConnected) {
        videoContainer = document.createElement('div');
        videoContainer.className = styles.videoMount;
        hero.insertAdjacentElement('afterend', videoContainer);
        setVideoMount(videoContainer);
      }
      if (container?.isConnected) return;
      const faq = root.querySelector<HTMLElement>('[data-antbuildz-sales-agent] .bright-faq-accordion');
      if (!faq) return;
      container = document.createElement('div');
      container.className = styles.mount;
      container.setAttribute('data-antbuildz-sales-agent-global-reach-mount', 'true');
      faq.insertAdjacentElement('beforebegin', container);
      setMount(container);
    };
    const scheduleAttach = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        attach();
      });
    };
    const observer = new MutationObserver(scheduleAttach);
    observer.observe(root, { childList: true, subtree: true });
    attach();
    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      container?.remove();
      videoContainer?.remove();
    };
  }, []);

  return <><OriginalAntbuildzApp />{mount && createPortal(<AiSalesAgentGlobalReach />, mount)}{videoMount && createPortal(<IntroVideo />, videoMount)}</>;
}
