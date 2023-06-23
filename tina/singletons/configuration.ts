import type { Collection } from "tinacms";

import { defineCustomField } from "../utils";
import { seo } from "../objects/seo";

export const configuration: Collection = {
  name: "configuration",
  label: "Configuration",
  path: "src/content/configuration",
  format: "json",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    defineCustomField(seo, {
      name: "defaultSeo",
      label: "Default SEO",
    }),
  ],
};
