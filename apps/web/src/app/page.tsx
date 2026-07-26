import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

/**
 * Temporary design-direction preview — NOT the real catalog grid (F01).
 * Exists only to check the Soft Craft Texture direction and component
 * primitives before wiring real Sanity product data.
 */
export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-10 py-16">
        <div className="flex flex-col gap-3">
          <Badge>New</Badge>
          <h1 className="text-3xl font-semibold tracking-tight">Design direction preview</h1>
          <p className="max-w-md text-foreground/70">
            Soft Craft Texture — cream background with a near-invisible grain, terracotta
            accent, thread-like dividers, organic badge shape. Real catalog grid comes next.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary button</Button>
          <Button variant="secondary">Secondary button</Button>
          <Button variant="whatsapp" href="https://wa.me/">
            WhatsApp CTA
          </Button>
        </div>
      </div>
    </Container>
  );
}
