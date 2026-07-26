import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const VARIANT_CLASSES = {
  primary: "bg-accent text-background hover:bg-accent/90 focus-visible:outline-accent",
  secondary:
    "bg-transparent text-foreground border border-border hover:bg-accent-muted/40 focus-visible:outline-accent",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-dark focus-visible:outline-whatsapp-dark",
} as const;

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium " +
  "transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "disabled:opacity-50 disabled:pointer-events-none";

type Variant = keyof typeof VARIANT_CLASSES;

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  variant?: Variant;
};

type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

  if (props.href) {
    return <a className={classes} {...(props as ButtonAsLink)} />;
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}
