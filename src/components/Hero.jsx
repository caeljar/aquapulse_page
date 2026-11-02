import React from 'react';

/**
 * Componente Hero Section
 * - Impacto visual inmediato con tipografía deportiva y contraste WCAG AA/AAA
 * - Imagen de fondo de alta calidad con overlay degradado azul/cian
 * - Indicadores clave de confianza (agua climatizada, certificación, horarios)
 */
const Hero = () => {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative min-h-[88vh] flex items-center overflow-hidden bg-slate-900"
    >
      {/* Imagen principal de fondo (Placeholder de alta resolución optimizado) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1920&q=85"
          alt="Nadador profesional deslizándose en una alberca semiolímpica de agua azul cristalina"
          className="w-full h-full object-cover object-center opacity-45 scale-105 transition-transform duration-1000"
          fetchPriority="high"
        />
        {/* Gradiente multicapa para garantizar legibilidad del texto en cualquier pantalla */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-cyan-900/50"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"
          aria-hidden="true"
        />
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Etiqueta superior deportiva */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
            Únete ahora
          </div>

          {/* Título Principal de Alto Impacto */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6"
          >
            Lorem ipsum dolor {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-sky-400">
              sit amet
            </span>
          </h1>

          {/* Subtítulo sobre instalaciones e instructores */}
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit{' '}
            <strong className="font-semibold text-white">sed do eiusmod tempor incididunt</strong>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* Botones de Llamado a la Acción (CTA) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-amber-400"
            >
              <span>Contáctanos</span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <a
              href="#clases"
              className="inline-flex items-center justify-center px-7 py-4 text-base sm:text-lg font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Ver Clases y Horarios
            </a>
          </div>

          {/* Métricas rápidas de respaldo */}
          <dl className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <dt className="text-xs sm:text-sm font-medium text-cyan-200/80 uppercase tracking-wider">
                Temperatura Ideal
              </dt>
              <dd className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">28.5°C</dd>
            </div>
            <div>
              <dt className="text-xs sm:text-sm font-medium text-cyan-200/80 uppercase tracking-wider">
                Purificación Salina
              </dt>
              <dd className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">100% UV</dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-xs sm:text-sm font-medium text-cyan-200/80 uppercase tracking-wider">
                Instructores
              </dt>
              <dd className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">Certificados</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Divisor decorativo en forma de ola en la base del Hero */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none overflow-hidden leading-none">
        <svg
          className="relative block w-full h-10 sm:h-16 text-slate-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.22,192.39,105.4,236.4,94.81,278.34,64.45,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

