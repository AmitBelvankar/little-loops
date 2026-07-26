import type { SchemaTypeDefinition } from "sanity";

import { category } from "./category";
import { product } from "./product";
import { subcategory } from "./subcategory";

export const schemaTypes: SchemaTypeDefinition[] = [category, subcategory, product];
