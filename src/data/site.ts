export const site = {
  name: 'Club Azulejo Escuela de Natación',
  short: 'Club Azulejo',
  url: 'https://www.TUDOMINIO.com',
  phone: '[00 0000 0000]',
  phoneHref: '+520000000000',
  whatsapp: '520000000000',
  whatsappText: 'Hola, quiero una clase muestra en Club Azulejo',
  address: { street: 'Pernambuco 790', colony: 'Col. Lindavista Norte', locality: 'Lindavista, Gustavo A. Madero', region: 'Ciudad de México', zip: '[CP]' },
  hours: '[Horario de atención]',
  social: { instagram: 'https://www.instagram.com/[usuario]', facebook: 'https://www.facebook.com/[pagina]' },
  reviewsUrl: 'https://g.page/r/[ENLACE-DE-RESEÑAS]',
  rating: { value: '5.0', count: 40 },
  formAction: 'https://formspree.io/f/TU_ID',
  mapSrc: 'https://www.google.com/maps?q=Club+Azulejo+Escuela+de+Natacion+Pernambuco+790+Lindavista&output=embed',
};
export const nav = [
  { href: '#instalaciones', label: 'Instalaciones' }, { href: '#programas', label: 'Programas' },
  { href: '#ofertas', label: 'Ofertas' }, { href: '#opiniones', label: 'Opiniones' },
  { href: '#nosotros', label: 'Nosotros' }, { href: '#preguntas', label: 'Preguntas' },
];
export const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappText)}`;
