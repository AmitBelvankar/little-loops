import { client } from "./client";
import type { Product, Subcategory } from "./types";

const PRODUCT_PROJECTION = `{
  _id,
  name,
  "slug": slug.current,
  images,
  price,
  description,
  isNew,
  publishedAt,
  category->{ _id, name, "slug": slug.current },
  subcategory->{ _id, name, "slug": slug.current, parentCategory->{ _id, name, "slug": slug.current } }
}`;

export async function getProducts(subcategorySlug?: string): Promise<Product[]> {
  const filter = subcategorySlug
    ? `*[_type == "product" && defined(publishedAt) && subcategory->slug.current == $subcategorySlug]`
    : `*[_type == "product" && defined(publishedAt)]`;

  return client.fetch(
    `${filter} | order(publishedAt desc) ${PRODUCT_PROJECTION}`,
    subcategorySlug ? { subcategorySlug } : {}
  );
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug && defined(publishedAt)][0] ${PRODUCT_PROJECTION}`,
    { slug }
  );
}

export async function getSubcategories(): Promise<Subcategory[]> {
  return client.fetch(
    `*[_type == "subcategory"] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      parentCategory->{ _id, name, "slug": slug.current }
    }`
  );
}
