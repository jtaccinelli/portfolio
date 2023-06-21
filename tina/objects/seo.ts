import type { Rule } from "sanity";

import type { ObjectQuery } from "@tina/shared/sanity";

export interface SeoQuery extends ObjectQuery {
  _type: typeof seo.name;
  title: string;
  description: string;
  thumbnail: string;
}

export const seo = {
  type: "object",
  name: "seo",
  title: "SEO",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "text",
      name: "description",
      title: "Description",
      rows: 4,
      validation: (rule: Rule) => rule.max(150),
    },
    {
      type: "image",
      name: "thumbnail",
      title: "Thumbnail",
    },
  ],
} as const;
