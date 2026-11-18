import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <p><strong>{site.name}</strong><br />Clases de natación para niños y adultos mayores en Lindavista, CDMX.</p>
        <p>{site.address.street}, Lindavista, Gustavo A. Madero<br /><a href={`tel:${site.phoneHref}`}>{site.phone}</a></p>
        <p>
          <a href={site.social.instagram} rel="noopener">Instagram</a> · <a href={site.social.facebook} rel="noopener">Facebook</a> · <a href="/aviso-de-privacidad/">Privacidad</a>
        </p>
      </div>
    </footer>
  );
}
