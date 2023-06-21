import type { Collection } from "tinacms";

import { defineCustomField } from "@tina/utils";
import { seo } from "@tina/objects/seo";

export const configuration: Collection = {
  name: "configuration",
  label: "Configuration",
  path: "src/content/configuration",
  format: "json",
  fields: [
    defineCustomField(seo, {
      name: "defaultSeo",
      label: "Default SEO",
    }),
  ],
};
