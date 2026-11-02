import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClassesSection from './components/ClassesSection';
import FacilitiesGallery from './components/FacilitiesGallery';
import ContactFooter from './components/ContactFooter';
import WhatsAppButton from './components/WhatsAppButton';
import { FACILITIES_GALLERY_MOCK } from './data/mockData';

/**
 * Componente Principal App
 * Orquesta las secciones de la Landing Page One-Page y está preparado
 * para inyectar datos asíncronos desde un CMS Headless en `FacilitiesGallery`.
 */
function App() {
  // En el futuro, puedes reemplazar FACILITIES_GALLERY_MOCK por un estado
  // alimentado desde tu CMS Headless (Strapi, Contentful, Sanity, etc.):
  // const [facilities, setFacilities] = useState(FACILITIES_GALLERY_MOCK);
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white">
      {/* Enlace de salto para accesibilidad por teclado (WCAG) */}
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-amber-400 focus:text-slate-950 focus:font-bold focus:rounded-lg"
      >
        Saltar al contenido principal
      </a>

      {/* 1. Navegación Sticky */}
      <Header />

      {/* Contenido Principal Semántico */}
      <main id="contenido-principal" className="flex-grow">
        {/* 2. Hero Section de Alto Impacto */}
        <Hero />

        {/* 3. Clases y Horarios (Servicios en Cards) */}
        <ClassesSection />

        {/* 4. Instalaciones (Galería preparada para CMS Headless) */}
        <FacilitiesGallery items={FACILITIES_GALLERY_MOCK} isLoading={false} />
      </main>

      {/* 5. Contacto, Mapa y Ubicación (Footer) */}
      <ContactFooter />

      {/* 6. Botón Flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}

export default App;

