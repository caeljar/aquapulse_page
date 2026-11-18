import { site } from '@/data/site';

const options = ['Preescolares (3 a 6 años)', 'Niños (6 a 10 años)', 'AquaBienestar (adultos mayores)', 'Aún no sé, necesito orientación'];

export default function ContactForm() {
  return (
    <form action={site.formAction} method="post">
      <label>Nombre<input name="nombre" autoComplete="name" required /></label>
      <label>Teléfono o WhatsApp<input name="telefono" type="tel" autoComplete="tel" required /></label>
      <label>Me interesa
        <select name="programa" required>
          <option value="">Selecciona una opción</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
      <label>Edad de quien va a nadar<input name="edad" inputMode="numeric" maxLength={3} /></label>
      <label>Mensaje (opcional)<textarea name="mensaje" rows={3} /></label>
      <input className="hp" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn btn-c" type="submit">Reservar mi clase gratis</button>
      <p className="note">Usamos tus datos solo para contactarte sobre tu clase. <a href="/aviso-de-privacidad/">Aviso de privacidad</a>.</p>
    </form>
  );
}
