import Button from '@/components/ui/Button';
import WaveDivider from '@/components/ui/WaveDivider';
import { site } from '@/data/site';

export default function Hero() {
  return (
    <section className="hero navy" id="inicio">
      <div className="wrap">
        <div>
          <h1>
            <span>Escuela de natación en Lindavista, CDMX:</span>
            <span><em>clases para niños y adultos mayores</em></span>
          </h1>
          <p className="lead">En Club Azulejo aprendes a nadar paso a paso, en un ambiente familiar y cuidado. Programas para preescolares, niños y AquaBienestar para adultos mayores.</p>
          <div className="ctas">
            <Button href="#contacto">Reservar clase muestra gratis</Button>
            <Button href="#programas" variant="o">Ver programas</Button>
          </div>
          <span className="pill"><b>★ {site.rating.value}</b> · {site.rating.count} opiniones en Google</span>
        </div>
        <aside className="ticket" aria-label="Clase muestra gratuita">
          <span className="eyebrow">PRIMERA VEZ EN EL CLUB</span>
          <b>Clase muestra gratuita</b>
          <p>Conoce la alberca, al equipo y el programa ideal para ti o tu familia, sin compromiso.</p>
          <Button href="#contacto">Reservar mi lugar</Button>
          <small>Recepción te responde en menos de 30 minutos.</small>
        </aside>
      </div>
      <WaveDivider to="#fff" />
      <WaveDivider to="#fff" />
    </section>
  );
}
