import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '../data/mockData';

/**
 * Componente Header (Navegación Principal)
 * - Sticky con efecto blur traslúcido
 * - Menú móvil accesible con atributos ARIA
 * - Botón CTA "Inscríbete" con alto contraste (acento ámbar/naranja)
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-950/20 py-3'
          : 'bg-slate-900 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo del Club */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
            aria-label="AquaPulse Club Acuático - Ir al inicio"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              {/* Ícono de olas acuáticas */}
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.345-3 4.345-3s1.862 3 4.345 3M3 9c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.345-3 4.345-3s1.862 3 4.345 3"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white">
                CLUB <span className="text-cyan-400">NATACIÓN</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-cyan-200/80 font-semibold -mt-1">
                Club de Natación
              </span>
            </div>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            <ul className="flex items-center gap-7">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* 
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-full shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-400/30 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-amber-400"
            >
              Inscríbete
            </a>
            */}
          </nav>

          {/* Botón Menú Hamburguesa (Mobile-First) */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navegación móvil"
          className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-6 space-y-3"
        >
          <ul className="space-y-2">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/70 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <a
              href="#contacto"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center px-5 py-3 text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-colors"
            >
              Inscríbete Ahora
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

