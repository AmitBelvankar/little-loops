import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">We couldn&apos;t find that one</h1>
        <p className="max-w-sm text-foreground/70">
          This product may have sold out or been removed from the catalog.
        </p>
        <Button href="/" variant="secondary" className="mt-2">
          Back to the catalog
        </Button>
      </div>
    </Container>
  );
}
