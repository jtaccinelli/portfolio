import type { Template } from "tinacms";

export const ticker: Template = {
  name: "ticker",
  label: "Ticker Block",
  fields: [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
      options: [
        { label: "Subtle", value: "subtle" },
        { label: "Highlight", value: "highlight" },
      ],
    },
    {
      type: "string",
      name: "content",
      label: "Content",
      required: true,
    },
  ],
};
