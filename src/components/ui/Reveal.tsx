import { useEffect, useRef, type CSSProperties, type ElementType, type HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLElement> & { as?: ElementType; i?: number };

/** Envuelve cualquier elemento y lo anima al entrar en pantalla. */
export default function Reveal({ as: Tag = 'div', i = 0, className = '', children, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in');
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`rv ${className}`.trim()} style={{ '--i': i } as CSSProperties} {...rest}>{children}</Tag>;
}
