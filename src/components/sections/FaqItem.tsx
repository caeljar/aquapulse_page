import type { FaqEntry } from '@/types';

export default function FaqItem({ q, a }: FaqEntry) {
  return (
    <details>
      <summary><h3>{q}</h3></summary>
      <p>{a}</p>
    </details>
  );
}
