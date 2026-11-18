import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { mainOffer, otherOffers } from '@/data/offers';

export default function Offers() {
  return (
    <section className="pt-s" id="ofertas">
      <div className="wrap">
        <h2>Ofertas y promociones del Club Azulejo</h2>
        <div className="offers">
          <Reveal className="offer big">
            <b>{mainOffer.title}</b>
            <p>{mainOffer.text}</p>
            <Button href="#contacto" variant="">{mainOffer.cta}</Button>
          </Reveal>
          {otherOffers.map((o, i) => (
            <Reveal key={o.title} i={i + 1} className="offer"><h3>{o.title}</h3><p>{o.text}</p></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
