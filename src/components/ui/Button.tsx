import type { AnchorHTMLAttributes } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; variant?: 'c' | 'o' | '' };

export default function Button({ href, variant = 'c', className = '', children, ...rest }: Props) {
  const v = variant ? `btn-${variant}` : '';
  return <a className={`btn ${v} ${className}`.trim()} href={href} {...rest}>{children}</a>;
}
