import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Facilities from '@/components/sections/Facilities';
import Programs from '@/components/sections/Programs';
import Offers from '@/components/sections/Offers';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import Faq from '@/components/sections/Faq';
import Contact from '@/components/sections/Contact';
import WaveDivider from '@/components/ui/WaveDivider';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Facilities />
      <WaveDivider from="#fff" to="#eaf2fa" />
      <Programs />
      <WaveDivider from="#eaf2fa" to="#fff" />
      <Offers />
      <WaveDivider from="#fff" to="#14335f" />
      <Testimonials />
      <WaveDivider from="#14335f" to="#fff" />
      <About />
      <WaveDivider from="#fff" to="#eaf2fa" />
      <Faq />
      <WaveDivider from="#eaf2fa" to="#14335f" />
      <Contact />
    </>
  );
}
