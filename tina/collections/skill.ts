import { seo } from "@tina/objects/seo";
import type { Collection } from "tinacms";

export const skill: Collection = {
  name: "skill",
  label: "Skills",
  path: "src/content/skills",
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
      name: "handle",
      label: "Handle",
      required: true,
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
      ui: {
        component: "textarea",
      },
    },
    seo,
  ],
};
