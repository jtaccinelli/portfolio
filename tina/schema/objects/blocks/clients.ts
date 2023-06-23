import type { Template } from "tinacms";

export const clients: Template = {
  name: "clients",
  label: "Clients Block",
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
      name: "clients",
      label: "Clients",
      list: true,
      fields: [
        {
          type: "reference",
          name: "client",
          label: "Client",
          collections: ["client"],
        },
      ],
    },
  ],
};
