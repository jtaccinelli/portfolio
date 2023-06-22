import type { Template } from "tinacms";

import { link } from "../link";
import { defineCustomField } from "../../utils";

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
    defineCustomField(link, {
      name: "ctas",
      label: "Calls to Action",
      list: true,
      ui: {
        itemProps: (item) => {
          console.log(item);
          return { label: `${item?.label} (${item?._template})` };
        },
      },
    }),
  ],
};
