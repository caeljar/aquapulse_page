import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import Home from '@/pages/Home';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Saltar al contenido</a>
      <Header />
      <main id="main"><Home /></main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
