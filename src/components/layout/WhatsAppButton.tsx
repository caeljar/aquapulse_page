import Button from '@/components/ui/Button';
import { waLink } from '@/data/site';

export default function WhatsAppButton() {
  return <Button href={waLink} className="wa" rel="noopener">WhatsApp</Button>;
}
