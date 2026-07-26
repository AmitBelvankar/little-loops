import { CatalogGrid } from "@/components/product/CatalogGrid";
import { FilterBar } from "@/components/product/FilterBar";
import { Container } from "@/components/layout/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { getProducts, getSubcategories } from "@/sanity/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ subcategory?: string }>;
}) {
  const { subcategory } = await searchParams;
  const [products, subcategories] = await Promise.all([
    getProducts(subcategory),
    getSubcategories(),
  ]);

  return (
    <Container>
      <div className="flex flex-col gap-8 py-8">
        <FilterBar subcategories={subcategories} activeSlug={subcategory} />
        {products.length === 0 ? (
          <EmptyState message="No products here yet — check back soon." />
        ) : (
          <CatalogGrid products={products} />
        )}
      </div>
    </Container>
  );
}
