import React, { useState } from 'react';
import { FACILITIES_GALLERY_MOCK } from '../data/mockData';

/**
 * Componente FacilitiesGallery (CMS-Ready)
 * - Recibe `items` por props (con fallback a `FACILITIES_GALLERY_MOCK`) para permitir
 *   conectar fácilmente un `fetch` / `useEffect` o `useQuery` desde un CMS Headless (Strapi, Contentful, Sanity).
 * - Incluye filtrado por categoría en cliente.
 * - Implementa `loading="lazy"` y `decoding="async"` para rendimiento web óptimo.
 */
const FacilitiesGallery = ({ items = FACILITIES_GALLERY_MOCK, isLoading = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  // Extrae categorías únicas dinámicamente desde los datos del CMS
  const categories = ['Todas', ...new Set(items.map((item) => item.category))];

  const filteredItems =
    selectedCategory === 'Todas'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="instalaciones"
      aria-labelledby="facilities-heading"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera y Filtros de Categoría */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              Recorrido Visual
            </span>
            <h2
              id="facilities-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              Instalaciones de Primer Nivel
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Diseñadas bajo estándares internacionales de higiene, confort térmico y accesibilidad universal.
            </p>
          </div>

          {/* Botones de filtro alimentados por las categorías del CMS */}
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filtrar instalaciones por categoría"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isActive
                      ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Estado de carga (Skeleton) listo para cuando se conecte la API del CMS */}
        {isLoading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            aria-busy="true"
            aria-label="Cargando galería de instalaciones"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="h-80 rounded-2xl bg-slate-200 animate-pulse"
              />
            ))}
          </div>
        ) : (
          /* Grid Responsivo de Imágenes */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((facility) => (
              <figure
                key={facility.id}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-80 sm:h-96"
              >
                {/* Imagen con Lazy Loading nativo y alt descriptivo */}
                <img
                  src={facility.imageUrl}
                  alt={facility.altText}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Overlay oscuro gradual para garantizar contraste WCAG del texto */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent"
                  aria-hidden="true"
                />

                {/* Etiqueta de categoría superior */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-cyan-500/90 text-slate-950 backdrop-blur-sm shadow-sm">
                    {facility.category}
                  </span>
                </div>

                {/* Descripción de la instalación */}
                <figcaption className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <h3 className="text-xl font-bold leading-snug mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed line-clamp-2">
                    {facility.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FacilitiesGallery;

