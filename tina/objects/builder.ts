import type { TinaField } from "tinacms";

import { hero } from "@tina/objects/blocks/hero";
import { content } from "@tina/objects/blocks/content";
import { cards } from "@tina/objects/blocks/cards";
import { clients } from "@tina/objects/blocks/clients";
import { skills } from "@tina/objects/blocks/skills";
import { projects } from "@tina/objects/blocks/projects";
import { blogs } from "@tina/objects/blocks/blogs";
import { ticker } from "@tina/objects/blocks/ticker";

export const builder: TinaField = {
  type: "object",
  name: "builder",
  label: "Builder",
  list: true,
  templates: [hero, content, cards, clients, skills, projects, blogs, ticker],
};
