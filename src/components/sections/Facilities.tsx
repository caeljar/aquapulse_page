import Reveal from '@/components/ui/Reveal';

// Reemplazar cada marco por <Image> / <img> con la foto real (guardarlas en /public/images).
const photos = ['[Foto: alberca principal]', '[Foto: vestidores]', '[Foto: área de espera]'];

export default function Facilities() {
  return (
    <section id="instalaciones">
      <div className="wrap">
        <h2>Instalaciones de nuestra escuela de natación en Lindavista</h2>
        <p>[Describe la alberca: medidas, profundidades, vestidores, área para familias, estacionamiento. Texto pendiente del club.]</p>
        <div className="gal">
          {photos.map((p, i) => <Reveal i={i} key={p} className="ph">{p}</Reveal>)}
        </div>
      </div>
    </section>
  );
}
