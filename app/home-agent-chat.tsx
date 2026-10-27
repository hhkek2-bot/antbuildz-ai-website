'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './home-agent-chat.module.css';

/** Mounted with the homepage's existing route-aware content slots. */
export function HomeAgentChat() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const launcher = useRef<HTMLButtonElement>(null);
  const minimise = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      if (loaded) launcher.current?.focus({ preventScroll: true });
      return;
    }
    minimise.current?.focus({ preventScroll: true });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, loaded]);

  return (
    <div className={styles.widget} data-antbuildz-ai-widget="">
      <button
        ref={launcher}
        type="button"
        className={styles.launcher}
        data-antbuildz-ai-open=""
        aria-label="Open Global AI Agent"
        aria-expanded={open}
        aria-controls="home-agent-chat-panel"
        hidden={open}
        onClick={() => { setLoaded(true); setOpen(true); }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- Preserve the supplied Global AI Agent portrait. */}
        <img src="/images/global-ai-agent-chat.png" alt="" width={68} height={68} />
      </button>
      <div
        id="home-agent-chat-panel"
        className={styles.panel}
        data-antbuildz-ai-panel=""
        role="region"
        aria-label="Global AI Agent chat"
        hidden={!open}
      >
        <button
          ref={minimise}
          type="button"
          className={styles.minimise}
          data-antbuildz-ai-close=""
          aria-label="Minimise Global AI Agent"
          onClick={() => setOpen(false)}
        >−</button>
        {loaded && <iframe
          src="https://globalteam.antbuildz.com/ai?agent=6acc6b78f44483031be24c94"
          title="Global AI Agent"
          loading="lazy"
          allow="clipboard-write; microphone"
        />}
      </div>
    </div>
  );
}
