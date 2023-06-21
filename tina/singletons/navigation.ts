import type { Collection } from "tinacms";

import { link } from "../objects/link";

export const navigation: Collection = {
  name: "navigation",
  label: "Navigation",
  path: "src/content/navigation",
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
    {
      type: "object",
      name: "items",
      label: "Items",
      list: true,
      fields: [link],
    },
    {
      type: "object",
      name: "connect",
      label: "Connect",
      list: true,
      fields: [link],
    },
  ],
};
