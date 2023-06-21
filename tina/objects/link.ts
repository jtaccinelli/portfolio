import type { TinaField } from "tinacms";
import { url } from "@tina/objects/url";

export const LINK_FRAGMENT = `
  label,
  "url": select(
    variant == "url" => url,
    reference->handle.current == "home" => "/",
    reference->_type == "page" => "/" + reference->handle.current,
    reference->_type == "client" => "/clients/" + reference->handle.current,
    reference->_type == "skill" => "/skills/" + reference->handle.current,
    reference->_type == "project" => "/projects/" + reference->handle.current,
    reference->_type == "blog" => "/blogs/" + reference->handle.current,
    "/"
  ),
`;

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
        Object.assign(url, {
          required: true,
        }),
      ],
    },
  ],
};
