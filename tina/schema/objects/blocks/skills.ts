import type { Template } from "tinacms";

export const skills: Template = {
  name: "skills",
  label: "Skills Block",
  fields: [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
      options: [
        {
          label: "Simple",
          value: "simple",
        },
      ],
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "object",
      name: "skills",
      label: "Skills",
      list: true,
      fields: [
        {
          type: "reference",
          name: "skill",
          label: "Skill",
          collections: ["skill"],
        },
      ],
    },
  ],
};
