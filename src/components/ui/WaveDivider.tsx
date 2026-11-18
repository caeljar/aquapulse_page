import type { CSSProperties } from 'react';

/** Ola animada entre secciones. from = color de arriba, to = color de abajo. */
export default function WaveDivider({ from, to }: { from?: string; to?: string }) {
  const style: Record<string, string> = {};
  if (from) style['--a'] = from;
  if (to) style['--b'] = to;
  return <div className="wv" style={style as CSSProperties} aria-hidden="true" />;
}
