import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/format";
import { urlForImage } from "@/sanity/image";
import type { Product } from "@/sanity/types";

import { WhatsAppButton } from "./WhatsAppButton";

export function ProductCard({ product }: { product: Product }) {
  const imageUrl = urlForImage(product.images[0]).width(600).height(750).fit("crop").url();

  return (
    <div className="flex flex-col gap-3">
      <Link href={`/products/${product.slug}`} className="flex flex-col gap-3">
        {/* aspect-[4/5] reserves layout space up front — zero CLS even with `fill` (ADR-004) */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-accent-muted/30">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 45vw"
            className="object-cover"
          />
          {product.isNew && (
            <div className="absolute left-3 top-3">
              <Badge>New</Badge>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-0.5">
          <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
          <p className="text-sm text-foreground/70">{formatPrice(product.price)}</p>
        </div>
      </Link>
      <WhatsAppButton productName={product.name} className="w-full" />
    </div>
  );
}
