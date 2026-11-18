import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

export default function TrustBar() {
  const items = [
    [`${site.rating.value} ★ en Google`, `${site.rating.count} opiniones de familias`],
    ['Clase muestra gratis', 'Sin compromiso'],
    ['Respuesta en 30 min', 'Recepción en horario de atención'],
  ];
  return (
    <section className="trust" aria-label="Por qué elegirnos">
      <div className="wrap">
        <ul>
          {items.map(([t, s], i) => <Reveal as="li" i={i} key={t}><b>{t}</b>{s}</Reveal>)}
        </ul>
      </div>
    </section>
  );
}
