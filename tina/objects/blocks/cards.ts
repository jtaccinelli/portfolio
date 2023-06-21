import type { Template } from "tinacms";

import { card } from "@tina/objects/card";

export const cards: Template = {
  name: "cards",
  label: "Cards Block",
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
      name: "cards",
      label: "Cards",
      list: true,
      fields: [card],
    },
  ],
};
