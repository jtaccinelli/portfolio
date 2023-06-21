import type { DocumentQuery, SlugQuery } from "@tina/shared/sanity";
import type { Collection } from "tinacms";

export interface ClientDocumentQuery extends DocumentQuery {
  _type: typeof client.name;
  title: string;
  handle: SlugQuery;
  website?: string;
  blurb: string;
  logo: any; // TODO: Image Type
}

export const client: Collection = {
  name: "client",
  label: "Clients",
  path: "src/content/clients",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "handle",
      label: "Handle",
      required: true,
    },
    {
      type: "string",
      name: "website",
      label: "Website",
      ui: {
        validate: (value) => {
          if (!Boolean(new URL(value))) {
            return "This value should be a URL.";
          }
        },
      },
    },
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
