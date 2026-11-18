import type { Program } from '@/types';

export const programs: Program[] = [
  { age: '3 a 6 años', title: 'Natación para preescolares en Lindavista', text: 'Los primeros pasos en el agua a través del juego: pierden el miedo, ganan confianza y aprenden a flotar y desplazarse con seguridad.', price: '$[monto] MXN al mes', schedule: '[Días y horarios]' },
  { age: '6 a 10 años', title: 'Clases de natación para niños', text: 'Técnica de los estilos, respiración y resistencia en grupos por nivel, con avances que las familias pueden ver.', price: '$[monto] MXN al mes', schedule: '[Días y horarios]' },
  { age: 'Adultos mayores', title: 'AquaBienestar: natación para adultos mayores', text: 'Actividad de bajo impacto en el agua para mantenerte activo, ganar movilidad y disfrutar en un ambiente tranquilo y acompañado.', price: '$[monto] MXN al mes', schedule: '[Días y horarios]', featured: true, tag: 'Exclusivo del club' },
];
