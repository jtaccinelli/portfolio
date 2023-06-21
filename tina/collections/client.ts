import type { Collection } from "tinacms";

import { url } from "@tina/objects/url";

export const client: Collection = {
  name: "client",
  label: "Clients",
  path: "src/content/clients",
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
      required: true,
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
