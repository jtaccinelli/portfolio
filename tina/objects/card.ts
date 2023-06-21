import type { TinaField } from "tinacms";

import { defineCustomField } from "@tina/utils";

import { link } from "@tina/objects/link";

export const card: TinaField = {
  type: "object",
  name: "card",
  label: "Card",
  fields: [
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "string",
      name: "body",
      label: "Body",
      ui: {
        component: "textarea",
      },
    },
    defineCustomField(link, {
      name: "cta",
      label: "CTA",
    }),
  ],
};
