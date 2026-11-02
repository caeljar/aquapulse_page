import React, { useState } from 'react';
import { CLUB_CONTACT_INFO } from '../data/mockData';

/**
 * Componente ContactFooter (Contacto, Ubicación y Footer Semántico)
 * - Formulario de contacto accesible con estado de envío
 * - Información de contacto directa (Teléfono, Dirección, Correo, Horarios)
 * - Espacio para mapa de Google Maps embebido (iframe con lazy loading)
 */
const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer
      id="contacto"
      aria-labelledby="contact-heading"
      className="bg-slate-950 text-slate-200 pt-20 pb-12 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bloque Principal: Formulario + Datos y Mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-slate-800/80">
          {/* Columna Izquierda: Formulario de Contacto (5 columnas en desktop) */}
          <div className="lg:col-span-5 bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              Contacto
            </span>
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2"
            >
              ¿Tienes dudas? ¡Escríbenos!
            </h2>
            <p className="text-sm text-slate-300 mb-6">
              Déjanos tus datos y un miembro del club te contactará.
            </p>

            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="p-6 rounded-xl bg-cyan-950/70 border border-cyan-500/40 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">¡Mensaje recibido con éxito!</h3>
                <p className="text-sm text-slate-300">
                  Gracias por escribirnos. Nuestro equipo de admisiones se pondrá en contacto contigo muy pronto.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 inline-block text-xs font-bold text-cyan-400 hover:text-cyan-300 underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Nombre Completo <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Correo Electrónico <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@ejemplo.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Mensaje <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Me interesa información para Clases para Adultos..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 shadow-lg shadow-amber-500/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-amber-400"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>

          {/* Columna Derecha: Información de Contacto y Mapa (7 columnas en desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-6">
                Visítanos y Conoce las Albercas
              </h3>

              {/* Tarjetas de datos de contacto */}
              <address className="not-italic grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Teléfono */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Teléfono Directo</p>
                    <a
                      href={CLUB_CONTACT_INFO.phoneHref}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      {CLUB_CONTACT_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Correo */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Correo Electrónico</p>
                    <a
                      href={`mailto:${CLUB_CONTACT_INFO.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors break-all"
                    >
                      {CLUB_CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </address>

              {/* Dirección */}
              <div className="mt-4 flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Ubicación e Instalaciones</p>
                  <p className="text-sm sm:text-base font-medium text-white">
                    {CLUB_CONTACT_INFO.address}
                  </p>
                  <p className="text-xs text-cyan-300 mt-1">{CLUB_CONTACT_INFO.openingHours}</p>
                </div>
              </div>
            </div>

            {/* Contenedor de Mapa de Google Maps (Iframe con carga diferida) */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-lg bg-slate-900 h-64 sm:h-72 relative">
              <iframe
                title="Ubicación de AquaPulse Club Acuático en Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661630927097!2d-99.2127654!3d19.4270206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201f3b2a5c3d7%3A0x8e2f30f22f3c42a!2sPaseo%20de%20las%20Palmas%2C%20Lomas%20de%20Chapultepec%2C%20CDMX!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Barra Inferior de Copyright y Enlaces Rápidos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {CLUB_CONTACT_INFO.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#inicio" className="hover:text-cyan-400 transition-colors">
              Inicio
            </a>
            <a href="#clases" className="hover:text-cyan-400 transition-colors">
              Clases
            </a>
            <a href="#instalaciones" className="hover:text-cyan-400 transition-colors">
              Instalaciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;

