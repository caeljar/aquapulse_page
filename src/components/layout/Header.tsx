import Logo from './Logo';
import Button from '@/components/ui/Button';
import { nav } from '@/data/site';

export default function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <Logo />
        <nav aria-label="Principal">
          <ul>
            {nav.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}
            <li><Button href="#contacto">Clase gratis</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
