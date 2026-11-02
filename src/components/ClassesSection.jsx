import React from 'react';
import { CLASSES_DATA } from '../data/mockData';

/**
 * Renderizador de ícono SVG según la categoría de clase
 */
const ClassIcon = ({ type }) => {
  switch (type) {
    case 'child':
      return (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'lanes':
      return (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.345-3 4.345-3s1.862 3 4.345 3M3 9c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.345-3 4.345-3s1.862 3 4.345 3" />
        </svg>
      );
    case 'adult':
      return (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'fitness':
    default:
      return (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
  }
};

/**
 * Componente ClassesSection (Clases y Horarios)
 * - Diseño responsivo Mobile-First (1 col móvil -> 2 cols tablet -> 4 cols desktop)
 * - Tarjetas semánticas (<article>) con ícono, descripción y horarios generales
 */
const ClassesSection = () => {
  return (
    <section
      id="clases"
      aria-labelledby="classes-heading"
      className="py-20 md:py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            Programas Acuáticos
          </span>
          <h2
            id="classes-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Clases y Horarios Diseñados para Ti
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Grid de Tarjetas (Mobile-first: 1 col -> md: 2 cols -> lg: 4 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CLASSES_DATA.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-cyan-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Parte superior de la tarjeta */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accentColor} flex items-center justify-center shadow-md shadow-cyan-600/20 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <ClassIcon type={item.iconType} />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bloque de Horarios en la parte inferior */}
              <div className="px-6 sm:px-7 pb-6 pt-4 bg-slate-50/80 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 mb-3">
                  <svg
                    className="w-4 h-4 text-cyan-600 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Horarios Generales</span>
                </div>

                <ul className="space-y-1.5 mb-5" aria-label={`Horarios de ${item.title}`}>
                  {item.schedules.map((schedule, index) => (
                    <li
                      key={index}
                      className="text-xs sm:text-sm text-slate-700 font-medium flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" aria-hidden="true" />
                      <span>{schedule}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-sm font-bold text-blue-700 bg-blue-50 hover:bg-amber-400 hover:text-slate-950 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span>Reservar lugar</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;

