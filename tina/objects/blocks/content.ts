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
      list: true,
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
