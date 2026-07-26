import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton({
  productName,
  className,
}: {
  productName: string;
  className?: string;
}) {
  return (
    <Button
      variant="whatsapp"
      href={buildWhatsAppUrl(productName)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      Enquire on WhatsApp
    </Button>
  );
}
