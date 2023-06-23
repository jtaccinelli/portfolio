import type { Collection } from "tinacms";

import { builder } from "../objects/builder";
import { seo } from "../objects/seo";

export const page: Collection = {
  name: "page",
  label: "Pages",
  path: "tina/content/pages",
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    builder,
    seo,
  ],
};
