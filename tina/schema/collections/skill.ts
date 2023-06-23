import type { Collection } from "tinacms";

import { seo } from "../objects/seo";

export const skill: Collection = {
  name: "skill",
  label: "Skills",
  path: "tina/content/skill",
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      isTitle: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "string",
      name: "blurb",
      label: "Blurb",
      required: true,
      ui: {
        component: "textarea",
      },
    },
    seo,
  ],
};
