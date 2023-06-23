import type { Collection } from "tinacms";

import { defineCustomField } from "../../utils";

import { seo } from "../objects/seo";
import { link } from "../objects/link";

export const project: Collection = {
  name: "project",
  label: "Projects",
  path: "tina/content/project",
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
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
      required: true,
      ui: {
        component: "textarea",
      },
    },
    {
      type: "reference",
      name: "client",
      label: "Client",
      collections: ["client"],
    },
    {
      type: "object",
      name: "skills",
      label: "Skills",
      list: true,
      fields: [
        {
          type: "reference",
          name: "skill",
          label: "Skill",
          collections: ["skill"],
        },
      ],
    },
    {
      type: "datetime",
      name: "completedOn",
      label: "Date Completed",
      required: true,
    },
    defineCustomField(link, {
      name: "liveSite",
      label: "Live Site",
    }),
    seo,
  ],
};
