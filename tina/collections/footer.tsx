import type { ArrayQuery, DocumentQuery } from "@tina/shared/sanity";

import type { LinkQuery } from "@tina/objects/link";
import { LINK_FRAGMENT } from "@tina/objects/link";
import type { Collection } from "tinacms";

export interface FooterDocumentQuery extends DocumentQuery {
  _type: typeof footer.name;
  title: string;
  acknowledgement: string;
  links: ArrayQuery<LinkQuery>;
}

export const FOOTER_QUERY = `
*[_type == "footer"][0]{
    ...,
    links[] {
        _key,
        ${LINK_FRAGMENT}
    }
}
`;

export const footer: Collection = {
  name: "footer",
  label: "Footer",
  path: "src/content/footer",
  format: "json",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      type: "string",
      name: "acknowledgement",
      label: "Acknowledgement",
      ui: {
        component: "text-area",
      },
    },
    {
      type: "array",
      name: "links",
      title: "Footer Links",
      of: [{ type: "link" }],
    },
  ],
};
