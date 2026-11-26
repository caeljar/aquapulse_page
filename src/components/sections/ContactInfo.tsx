import Button from '@/components/ui/Button';
import { site, waLink } from '@/data/site';
import whatsAppLogoUrl from '@/assets/logo_whatsapp.svg';

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
      <Button href={waLink} variant="o" rel="noopener">Escribir por WhatsApp <img src={whatsAppLogoUrl} alt="" width={20} height={20} aria-hidden="true" /></Button>
    </div>
  );
}
