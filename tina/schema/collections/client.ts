import type { Collection } from "tinacms";

import { url } from "../objects/url";
import { defineCustomField } from "../../utils";

export const client: Collection = {
  name: "client",
  label: "Clients",
  path: "tina/content/client",
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    defineCustomField(url, {
      name: "website",
      label: "Website",
    }),
    {
      type: "string",
      name: "blurb",
      label: "Blurb",
      required: true,
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "logo",
      label: "Logo",
    },
  ],
};
