import { Container } from "./Container";
import { ThreadDivider } from "../ui/ThreadDivider";

export function Footer() {
  return (
    <footer className="mt-auto">
      <ThreadDivider />
      <Container>
        <p className="py-6 text-sm text-foreground/60">
          Little Loops — handmade with care.
        </p>
      </Container>
    </footer>
  );
}
