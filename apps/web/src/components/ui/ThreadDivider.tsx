/**
 * Thread-like dashed rule, pure CSS (repeating-linear-gradient) — no image
 * asset, no SVG request. See "Dividers" in design/design-tokens.md.
 */
export function ThreadDivider() {
  return (
    <div
      role="separator"
      className="h-px w-full opacity-60"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, var(--border) 0 6px, transparent 6px 12px)",
      }}
    />
  );
}
