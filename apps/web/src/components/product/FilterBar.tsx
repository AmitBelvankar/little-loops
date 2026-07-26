import Link from "next/link";

import type { Subcategory } from "@/sanity/types";

const CHIP_BASE =
  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const CHIP_ACTIVE = "border-accent bg-accent text-background";
const CHIP_INACTIVE = "border-border bg-transparent text-foreground hover:bg-accent-muted/40";

export function FilterBar({
  subcategories,
  activeSlug,
}: {
  subcategories: Subcategory[];
  activeSlug?: string;
}) {
  return (
    <nav
      aria-label="Filter by subcategory"
      className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <Link href="/" className={`${CHIP_BASE} ${!activeSlug ? CHIP_ACTIVE : CHIP_INACTIVE}`}>
        All
      </Link>
      {subcategories.map((subcategory) => (
        <Link
          key={subcategory._id}
          href={`/?subcategory=${subcategory.slug}`}
          className={`${CHIP_BASE} ${activeSlug === subcategory.slug ? CHIP_ACTIVE : CHIP_INACTIVE}`}
        >
          {subcategory.name}
        </Link>
      ))}
    </nav>
  );
}
