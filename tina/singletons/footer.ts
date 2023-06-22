import type { Collection } from "tinacms";

import { link } from "../objects/link";

export const footer: Collection = {
  name: "footer",
  label: "Footer",
  path: "tina/content/footer",
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
      name: "acknowledgement",
      label: "Acknowledgement",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "links",
      label: "Footer Links",
      list: true,
      fields: [link],
    },
  ],
};
