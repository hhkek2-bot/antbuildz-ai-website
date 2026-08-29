import { EMMA_PORTRAIT_ALT, EMMA_PORTRAIT_SRC } from '../lib/agent-identity';

/** The shared, established AI Sales Agent portrait — not a company logo. */
export function EmmaAvatar({ className = '', size = 32, decorative = false }: { className?: string; size?: number; decorative?: boolean }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={EMMA_PORTRAIT_SRC} alt={decorative ? '' : EMMA_PORTRAIT_ALT} className={`antbuildz-emma-portrait ${className}`.trim()} width={size} height={size} draggable={false} />;
}
