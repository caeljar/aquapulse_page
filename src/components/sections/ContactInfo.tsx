import Button from '@/components/ui/Button';
import { site, waLink } from '@/data/site';

export default function ContactInfo() {
  const a = site.address;
  return (
    <div>
      <iframe className="map" title="Mapa de Club Azulejo Escuela de Natación" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={site.mapSrc} />
      <address>
        <strong>{site.name}</strong><br />
        {a.street}, {a.colony}<br />
        Gustavo A. Madero, {a.region} {a.zip}<br />
        Tel. <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
      </address>
      <p>{site.hours}</p>
      <Button href={waLink} variant="o" rel="noopener">Escribir por WhatsApp</Button>
    </div>
  );
}
