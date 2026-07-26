import Link from "next/link";

import { Container } from "./Container";
import { ThreadDivider } from "../ui/ThreadDivider";

export function Header() {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
            Little Loops
          </Link>
        </div>
      </Container>
      <ThreadDivider />
    </header>
  );
}
