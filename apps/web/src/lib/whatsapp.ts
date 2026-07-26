/**
 * wa.me deep link only — never the WhatsApp Cloud API (PRD §5, ADR-driven
 * V1 constraint). Single number sourced from env, never hardcoded per call site.
 */
export function buildWhatsAppUrl(productName: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const message = `Hi! I'm interested in the ${productName}`;
  const query = `?text=${encodeURIComponent(message)}`;

  if (!number) {
    // No number configured yet (PRD §9 open question #3 — personal vs. WhatsApp Business number).
    // Falls back to wa.me's own number-less form so the link still opens WhatsApp.
    return `https://wa.me/${query}`;
  }

  return `https://wa.me/${number}${query}`;
}
