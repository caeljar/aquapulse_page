/**
 * Mock Data preparado para integración con CMS Headless (Strapi, Contentful, Sanity, etc.)
 * Estructura normalizada con IDs únicos, metadatos SEO/accesibilidad (alt), categorías y dimensiones.
 */

export const NAVIGATION_LINKS = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'clases', label: 'Clases y Horarios', href: '#clases' },
  { id: 'instalaciones', label: 'Instalaciones', href: '#instalaciones' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

export const CLASSES_DATA = [
  {
    id: 'natacion-infantil',
    title: 'Natación Infantil',
    badge: '3 a 12 años',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    schedules: [
      'Lun - Mié - Vie: 15:00 a 18:00 hrs',
      'Mar - Jue: 15:30 a 18:30 hrs',
      'Sábados: 09:00 a 12:00 hrs'
    ],
    iconType: 'child',
    accentColor: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'nado-libre',
    title: 'Nado Libre',
    badge: 'Carriles dedicados',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    schedules: [
      'Lunes a Viernes: 06:00 a 14:30 hrs',
      'Lunes a Viernes: 19:30 a 22:00 hrs',
      'Sábados y Domingos: 07:00 a 14:00 hrs',
    ],
    iconType: 'lanes',
    accentColor: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'clases-adultos',
    title: 'Clases para Adultos',
    badge: 'Todos los niveles',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    schedules: [
      'Matutino (Lun - Vie): 07:00, 08:00 y 09:00 hrs',
      'Nocturno (Lun - Jue): 19:00 y 20:00 hrs',
      'Sábados: 08:00 a 10:00 hrs',
    ],
    iconType: 'adult',
    accentColor: 'from-sky-500 to-cyan-600',
  },
  {
    id: 'acuafitness',
    title: 'Acuafitness y Salud',
    badge: 'Bajo impacto',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    schedules: [
      'Lunes a Viernes: 09:00 y 10:00 hrs',
      'Mar - Jue: 18:30 hrs',
      'Sábados: 10:30 hrs',
    ],
    iconType: 'fitness',
    accentColor: 'from-teal-500 to-cyan-600',
  },
];

/**
 * Datos simulados de la Galería de Instalaciones (CMS-Ready).
 * Cuando conectes tu CMS Headless, basta con reemplazar la importación estática
 * por un hook `useEffect` o `useQuery` que devuelva un arreglo con esta misma interfaz.
 */
export const FACILITIES_GALLERY_MOCK = [
  {
    id: 'fac-01',
    title: 'Alberca Semiolímpica Techada',
    category: 'Alberca Principal',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1000&q=80',
    altText: 'Vista panorámica de la alberca semiolímpica techada con carriles azules e iluminación natural',
    featured: true,
  },
  {
    id: 'fac-02',
    title: 'Alberca de Enseñanza',
    category: 'Área Infantil',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=800&q=80',
    altText: 'Nadador entrenando en carril de agua cristalina con reflejos de luz azul',
    featured: false,
  },
  {
    id: 'fac-03',
    title: 'Vestidores y Regaderas',
    category: 'Vestidores',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    altText: 'Interior moderno y limpio de vestidores con acabados claros e iluminación cálida',
    featured: false,
  },
  {
    id: 'fac-04',
    title: 'Área de Observación',
    category: 'Áreas Comunes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
    altText: 'Nadadores en salida de competencia desde los bloques de arranque en la alberca',
    featured: false,
  },
  {
    id: 'fac-05',
    title: 'Zona Funcional',
    category: 'Gimnasio Seco',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?auto=format&fit=crop&w=800&q=80',
    altText: 'Vista aérea de nadador desplazándose en estilo crol sobre agua azul profundo',
    featured: false,
  },
  {
    id: 'fac-06',
    title: 'Sistema de Purificación UV en Alberca',
    category: 'Tecnología',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=800&q=80',
    altText: 'Detalle del agua cristalina y carriles flotantes naranjas y azules de la alberca',
    featured: false,
  },
  {
    id: 'fac-07',
    title: 'Sistema Enseñanza para Niños',
    category: 'Niños',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=800&q=80',
    altText: 'Detalle del agua cristalina y carriles flotantes naranjas y azules de la alberca',
    featured: false,
  },
];

export const CLUB_CONTACT_INFO = {
  name: 'AquaPulse Club Acuático',
  phoneDisplay: '+52 (55) 5555 5555',
  phoneHref: 'tel:+525555555555',
  whatsappNumber: '525555555555',
  whatsappDefaultMessage: '¡Hola! Me gustaría solicitar información sobre las clases de natación.',
  email: 'aquapulse@aquapulseclub.com',
  address: 'Av. Paseo de las Palmas 745, Lomas de Chapultepec, CDMX, C.P. 11000',
  openingHours: 'Lun - Vie: 06:00 - 22:00 | Sáb - Dom: 07:00 - 14:00 | Días Festivos: Cerrado',
};

