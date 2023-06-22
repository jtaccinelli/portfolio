import type { Collection } from "tinacms";

import { link } from "../objects/link";
import { defineCustomField } from "..//utils";

export const navigation: Collection = {
  name: "navigation",
  label: "Navigation",
  path: "tina/content/navigation",
  format: "json",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      type: "string",
      name: "heading",
      label: "Heading",
      required: true,
    },
    {
      type: "string",
      name: "subheading",
      label: "Subheading",
      required: true,
    },
    defineCustomField(link, {
      name: "links",
      label: "Links",
      list: true,
    }),
    defineCustomField(link, {
      name: "connect",
      label: "Connect",
      list: true,
    }),
  ],
};
