import type { TinaField } from "tinacms";

export const seo: TinaField = {
  type: "object",
  name: "seo",
  label: "SEO",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
      ui: {
        component: "textarea",
        validate: (value) => {
          if (value?.length > 150) {
            return "This should not be longer than 150 characters.";
          }
        },
      },
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail",
    },
  ],
};
