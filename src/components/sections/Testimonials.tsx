import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { testimonials } from '@/data/testimonials';
import { site } from '@/data/site';

export default function Testimonials() {
  return (
    <section className="navy pt-s" id="opiniones">
      <div className="wrap">
        <h2>Lo que dicen las familias del Club Azulejo</h2>
        <div className="q">
          {testimonials.map((t, i) => (
            <Reveal as="blockquote" i={i} key={t.author}>
              <p>“{t.quote}”</p>
              <footer>{t.author}</footer>
            </Reveal>
          ))}
        </div>
        <div className="g">
          <b>{site.rating.value} ★</b>
          <span>{site.rating.count} opiniones en Google</span>
          <Button href={site.reviewsUrl} variant="o" rel="noopener">Deja tu reseña</Button>
        </div>
      </div>
    </section>
  );
}
