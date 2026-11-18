import { site } from '@/data/site';
import { programs } from '@/data/programs';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [{
      '@type': ['SportsClub', 'LocalBusiness'],
      '@id': `${site.url}/#club`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/logo-club-azulejo.png`,
      image: `${site.url}/og-club-azulejo.jpg`,
      description: 'Escuela de natación en Lindavista, Ciudad de México, con clases para preescolares, niños y el programa AquaBienestar para adultos mayores.',
      telephone: '+52-00-0000-0000',
      address: { '@type': 'PostalAddress', streetAddress: site.address.street, addressLocality: site.address.locality, addressRegion: site.address.region, postalCode: site.address.zip, addressCountry: 'MX' },
      geo: { '@type': 'GeoCoordinates', latitude: 0, longitude: 0 },
      areaServed: ['Lindavista', 'Gustavo A. Madero', 'Ciudad de México'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Programas de natación',
        itemListElement: [
          { '@type': 'Offer', name: 'Clase muestra gratuita', price: '0', priceCurrency: 'MXN', itemOffered: { '@type': 'Service', name: 'Clase muestra de natación' } },
          ...programs.map((p) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: p.title } })),
        ],
      },
      sameAs: [site.social.instagram, site.social.facebook],
    }],
  };
}
