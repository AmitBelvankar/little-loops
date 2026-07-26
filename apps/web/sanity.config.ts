import { schemaTypes } from "@little-loops/sanity-schema";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  name: "little-loops",
  title: "Little Loops",

  projectId,
  dataset,

  basePath: "/studio",

  schema: {
    types: schemaTypes,
  },

  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
