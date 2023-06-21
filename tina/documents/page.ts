import { DocumentsIcon } from "@sanity/icons";

import type { DocumentQuery, SlugQuery } from "@root/shared/sanity";

import type { BuilderQuery } from "@root/objects/builder";
import type { SeoQuery } from "@root/objects/seo";
import { LINK_FRAGMENT } from "@root/objects/link";

export interface PageDocumentQuery extends DocumentQuery {
  _type: typeof page.name;
  title: string;
  handle: SlugQuery;
  content: BuilderQuery;
  seo: SeoQuery;
}

export const PAGE_QUERY = `
*[_type == "page" && handle.current == $handle][0]{
    ...,
    "handle": handle.current,
    content[]{
        ...,  
        ctas[]{
          _key,
          ${LINK_FRAGMENT}
        }
    }
}
`;

export const page = {
  type: "document",
  name: "page",
  title: "Pages",
  icon: DocumentsIcon,
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "slug",
      name: "handle",
      title: "Handle",
      options: {
        source: "title",
      },
    },
    {
      type: "builder",
      name: "content",
      title: "Content",
    },
    {
      type: "seo",
      name: "seo",
      title: "SEO",
    },
  ],
} as const;
