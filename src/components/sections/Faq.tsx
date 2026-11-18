import FaqItem from './FaqItem';
import { faqs } from '@/data/faqs';

export default function Faq() {
  return (
    <section className="sky faq pt-s" id="preguntas">
      <div className="wrap">
        <h2>Preguntas frecuentes sobre las clases de natación</h2>
        {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
      </div>
    </section>
  );
}
