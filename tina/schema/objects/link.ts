import type { TinaField } from "tinacms";

import { url } from "./url";
import { defineCustomField } from "../../utils";

export const link: TinaField = {
  type: "object",
  name: "link",
  label: "Link",
  templates: [
    {
      name: "reference",
      label: "Reference",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
        },
        {
          type: "reference",
          name: "reference",
          label: "Reference",
          collections: ["project", "client", "skill", "page", "blog"],
        },
      ],
    },
    {
      name: "external",
      label: "External URL",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
        },
        defineCustomField(url, {
          required: true,
        }),
      ],
    },
  ],
};
