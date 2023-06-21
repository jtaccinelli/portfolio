import type { Collection } from "tinacms";

export const blog: Collection = {
  name: "blog",
  label: "Blogs",
  path: "src/content/blogs",
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
    },
    {
      type: "rich-text",
      name: "content",
      label: "Content",
      isBody: true,
    },
  ],
};
