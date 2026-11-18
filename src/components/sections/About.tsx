import Reveal from '@/components/ui/Reveal';

const values = [
  ['Ambiente familiar', 'Un lugar cercano donde todos te conocen por tu nombre.'],
  ['Atención por nivel', 'Grupos organizados por edad y avance. [Confirmar tamaño de grupo.]'],
  ['AquaBienestar', 'Un programa pensado para los adultos mayores, a su ritmo.'],
];

export default function About() {
  return (
    <section className="about pt-s" id="nosotros">
      <div className="wrap">
        <Reveal>
          <h2>Club Azulejo, escuela de natación en Lindavista</h2>
          <p>[Historia del club: cuándo nació, quién lo fundó y qué lo mueve. Texto pendiente del cliente.]</p>
          <p>Enseñamos natación a niños y adultos mayores de la colonia Lindavista y de toda la alcaldía Gustavo A. Madero.</p>
        </Reveal>
        <ul className="vals">
          {values.map(([t, d], i) => <Reveal as="li" i={i} key={t}><b>{t}</b>{d}</Reveal>)}
        </ul>
      </div>
    </section>
  );
}
