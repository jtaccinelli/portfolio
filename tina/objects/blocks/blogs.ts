import type { Template } from "tinacms";

export const blogs: Template = {
  name: "blogs",
  label: "Blogs Block",
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
      name: "items",
      label: "Items",
      list: true,
      fields: [
        {
          type: "reference",
          name: "blog",
          label: "Blog",
          collections: ["blog"],
        },
      ],
    },
  ],
};
