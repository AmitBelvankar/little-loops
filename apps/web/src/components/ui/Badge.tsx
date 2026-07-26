import type { ReactNode } from "react";

/**
 * Slightly asymmetric "blob" radius instead of a perfect pill — a lightweight
 * CSS-only craft cue (see Soft Craft Texture, design/design-tokens.md).
 */
const BLOB_RADIUS = "255px 15px 225px 15px / 15px 225px 15px 255px";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center bg-accent-muted px-3 py-1 text-xs font-medium tracking-wide text-accent uppercase"
      style={{ borderRadius: BLOB_RADIUS }}
    >
      {children}
    </span>
  );
}
