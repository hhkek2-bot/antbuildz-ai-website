'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './intro-video.module.css';

function PlayIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>;
}

export function IntroVideo({ compact = false, videoId = 'ixqbLXuyMG4' }: { compact?: boolean; videoId?: string }) {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => { document.documentElement.style.overflow = previousOverflow; };
  }, [open]);
  const openVideo = (button: HTMLButtonElement) => {
    opener.current = button;
    setOpen(true);
    dialog.current?.showModal();
  };
  const closeVideo = () => dialog.current?.close();
  return <section className={`${styles.wrapper} ${compact ? styles.compact : ''}`} aria-label="Meet AI Agents video">
    {compact ? <button className={styles.preview} type="button" onClick={event => openVideo(event.currentTarget)} aria-haspopup="dialog" aria-controls="meet-agents-player" aria-expanded={open}>
      <span className={styles.previewImage}>
        {/* eslint-disable-next-line @next/next/no-img-element -- YouTube video thumbnail. */}
        <img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" width="480" height="360" />
        <span><PlayIcon /></span>
      </span>
      <span className={styles.previewCopy}><strong>Meet Antbuildz AI</strong><span>Watch the introduction <span aria-hidden="true">↗</span></span></span>
    </button> : <div className={styles.banner}>
      <button className={styles.thumbnail} type="button" onClick={event => openVideo(event.currentTarget)} aria-haspopup="dialog" aria-label="Play Meet AI Agents" aria-controls="meet-agents-player" aria-expanded={open}>
        {/* eslint-disable-next-line @next/next/no-img-element -- YouTube's supplied video thumbnail. */}
        <img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" width="480" height="360" loading="lazy" />
        <span><PlayIcon /></span>
      </button>
      <div className={styles.copy}><h2>Meet AI Agents</h2><p>Meet Antbuildz AI — AI Agents for complex product businesses.</p></div>
      <button className={styles.watch} type="button" aria-haspopup="dialog" aria-controls="meet-agents-player" aria-expanded={open} onClick={event => openVideo(event.currentTarget)}><PlayIcon />Watch video</button>
    </div>}
    <dialog ref={dialog} id="meet-agents-player" className={styles.player} aria-labelledby="meet-agents-title" onClose={() => { setOpen(false); opener.current?.focus(); }} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeVideo();
    }}>
      <div className={styles.playerHeader}><h2 id="meet-agents-title">Meet AI Agents</h2><button type="button" onClick={closeVideo} aria-label="Close video">×</button></div>
      {open && <>
        <iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`} title="Meet Antbuildz AI — AI Agent for Complex Product Businesses" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
        <div className={styles.playerFooter}><a href={videoUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></div>
      </>}
    </dialog>
  </section>;
}
