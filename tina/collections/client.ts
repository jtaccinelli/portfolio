import type { Collection } from "tinacms";

import { url } from "../objects/url";

export const client: Collection = {
  name: "client",
  label: "Clients",
  path: "tina/content/clients",
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "handle",
      label: "Handle",
      required: true,
    },
    Object.assign(url, {
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
