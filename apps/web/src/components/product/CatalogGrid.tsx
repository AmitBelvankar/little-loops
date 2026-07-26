import type { Product } from "@/sanity/types";

import { ProductCard } from "./ProductCard";

/**
 * Container-query grid (ADR-004): column count responds to this grid's own
 * container width via `@container`, not the raw viewport.
 * 2 cols baseline -> 3 at @lg (32rem/512px container) -> 4 at @4xl (56rem/896px container).
 */
export function CatalogGrid({ products }: { products: Product[] }) {
  return (
    <div className="@container">
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 @lg:grid-cols-3 @4xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
