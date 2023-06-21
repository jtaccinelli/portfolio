import type { DocumentQuery } from "@tina/shared/sanity";
import type { Collection } from "tinacms";

export interface BlogDocumentQuery extends DocumentQuery {
  _type: typeof blog.name;
  title: string;
  content: any; // TODO: Content Block Type
}

export const blog: Collection = {
  name: "blog",
  label: "Blogs",
  path: "src/content/posts",
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
