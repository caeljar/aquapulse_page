import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import type { Program } from '@/types';

export default function ProgramCard({ program: p, index }: { program: Program; index: number }) {
  return (
    <Reveal as="article" i={index} className={`card${p.featured ? ' feat' : ''}`}>
      {p.tag && <span className="tag">{p.tag}</span>}
      <span className="age">{p.age}</span>
      <h3>{p.title}</h3>
      <p>{p.text}</p>
      <div className="price">{p.price}</div>
      <div className="meta">{p.schedule}</div>
      <Button href="#contacto">Reservar clase</Button>
    </Reveal>
  );
}
