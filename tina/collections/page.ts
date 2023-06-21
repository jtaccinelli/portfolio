import { seo } from "@tina/objects/seo";
import type { Collection } from "tinacms";

export const page: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/pages",
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
      name: "handle",
      label: "Handle",
      required: true,
    },
    {
      type: "builder",
      label: "content",
      title: "Content",
    },
    seo,
  ],
};
