import type { TinaField } from "tinacms";

export const url: TinaField = {
  type: "string",
  name: "url",
  label: "URL",
  ui: {
    validate: (value) => {
      if (!Boolean(new URL(value))) {
        return "This value should be a URL.";
      }
    },
  },
};
