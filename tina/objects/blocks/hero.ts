import type { Template } from "tinacms";

import { link } from "../link";

export const hero: Template = {
  name: "hero",
  label: "Hero Block",
  fields: [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
      options: [
        { label: "Simple", value: "simple" },
        { label: "Graphic", value: "graphic" },
      ],
    },
    {
      type: "string",
      name: "body",
      label: "Body",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "ctas",
      label: "Calls to Action",
      list: true,
      fields: [link],
    },
  ],
};
