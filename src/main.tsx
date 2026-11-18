import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
// Orden importante: motion.css siempre al final (prefers-reduced-motion).
import '@/styles/base.css';
import '@/styles/header.css';
import '@/styles/hero.css';
import '@/styles/reveal.css';
import '@/styles/trust.css';
import '@/styles/photos.css';
import '@/styles/programs.css';
import '@/styles/offers.css';
import '@/styles/quotes.css';
import '@/styles/about.css';
import '@/styles/faq.css';
import '@/styles/contact.css';
import '@/styles/footer.css';
import '@/styles/motion.css';
import App from './App';

const root = document.getElementById('root')!;
const app = <StrictMode><App /></StrictMode>;
// Si el HTML fue prerenderizado en el build, se hidrata; en desarrollo se monta normal.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
