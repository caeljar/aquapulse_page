import Button from '@/components/ui/Button';
import { waLink } from '@/data/site';
import whatsAppLogoUrl from '@/assets/logo_whatsapp.svg';

export default function WhatsAppButton() {
  return (
    <Button href={waLink} className="wa" rel="noopener">
      <img src={whatsAppLogoUrl} alt="" width={20} height={20} aria-hidden="true" />
      WhatsApp
    </Button>
  );
}
