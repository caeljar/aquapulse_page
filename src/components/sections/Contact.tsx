import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <section className="navy contact pt-s" id="contacto">
      <div className="wrap">
        <h2>Contacta al Club Azulejo, escuela de natación en Lindavista</h2>
        <p>Reserva tu clase muestra gratis. Recepción te responde en menos de 30 minutos en horario de atención.</p>
        <div className="grid">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
