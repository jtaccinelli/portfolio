import type { TinaField } from "tinacms";

export const url: TinaField = {
  type: "string",
  name: "url",
  label: "URL",
  ui: {
    validate: (value) => {
      try {
        new URL(value);
      } catch (error) {
        return "This value should be a URL.";
      }
    },
  },
};
