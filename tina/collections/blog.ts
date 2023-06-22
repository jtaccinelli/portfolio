import type { Collection } from "tinacms";

export const blog: Collection = {
  name: "blog",
  label: "Blogs",
  path: "tina/content/blogs",
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
      type: "rich-text",
      name: "content",
      label: "Content",
      isBody: true,
      required: true,
    },
  ],
};
