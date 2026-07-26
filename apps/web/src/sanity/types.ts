import type { SanityImageObject } from "@sanity/image-url/lib/types/types";

export interface Category {
  _id: string;
  name: string;
  slug: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  parentCategory: Category;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  images: SanityImageObject[];
  price: number | null;
  description: string | null;
  category: Category;
  subcategory: Subcategory;
  isNew: boolean;
  publishedAt: string;
}
