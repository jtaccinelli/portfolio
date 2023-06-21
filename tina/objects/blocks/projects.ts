import type { Template } from "tinacms";

export const projects: Template = {
  name: "projects",
  label: "Projects Block",
  fields: [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
      options: [
        {
          label: "Simple",
          value: "simple",
        },
      ],
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "object",
      name: "project",
      label: "Projects",
      list: true,
      fields: [
        {
          type: "reference",
          name: "item",
          label: "Item",
          collections: ["project"],
        },
      ],
    },
  ],
};
