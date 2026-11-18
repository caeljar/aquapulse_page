import ProgramCard from './ProgramCard';
import { programs } from '@/data/programs';

export default function Programs() {
  return (
    <section className="sky pt-s" id="programas">
      <div className="wrap">
        <h2>Programas de natación para niños y adultos mayores</h2>
        <p>Grupos por edad y nivel. Si no sabes cuál elegir, te orientamos en la clase muestra.</p>
        <div className="cards">
          {programs.map((p, i) => <ProgramCard key={p.title} program={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
