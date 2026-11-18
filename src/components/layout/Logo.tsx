/** Logo provisional en SVG. Reemplazar por el archivo oficial del cliente. */
export default function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="Club Azulejo, inicio">
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <rect width="36" height="36" rx="3" fill="#e8532f" />
        <circle cx="18" cy="18" r="11" fill="none" stroke="#fff" strokeWidth="2" />
        <path d="M8 19q3-4 5.5 0t5.5 0 5.5 0 3.5 0M9 24q3-4 5.5 0t5.5 0 5.5 0" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span><b>Club Azulejo</b><small>Escuela de Natación</small></span>
    </a>
  );
}
