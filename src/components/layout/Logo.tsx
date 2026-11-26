import logoUrl from '@/assets/logo_club_azulejo_clean.webp';

export default function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="Club Azulejo, inicio">
      <img src={logoUrl} alt="" width={36} height={36} aria-hidden="true" />
      <span><b>Club Azulejo</b><small>Escuela de Natación</small></span>
    </a>
  );
}
