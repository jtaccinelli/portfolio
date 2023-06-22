import type { Template } from "tinacms";

import { link } from "../link";

export const content: Template = {
  name: "content",
  label: "Content Block",
  fields: [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
      options: [
        { label: "Simple", value: "simple" },
        { label: "Grid", value: "grid" },
      ],
    },
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
    {
      type: "object",
      name: "ctas",
      label: "Calls to Action",
      list: true,
      fields: [link],
    },
  ],
};