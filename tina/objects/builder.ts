import type { TinaField } from "tinacms";

import { hero } from "./blocks/hero";
import { content } from "./blocks/content";
import { cards } from "./blocks/cards";
import { clients } from "./blocks/clients";
import { skills } from "./blocks/skills";
import { projects } from "./blocks/projects";
import { blogs } from "./blocks/blogs";
import { ticker } from "./blocks/ticker";

export const builder: TinaField = {
  type: "object",
  name: "builder",
  label: "Builder",
  list: true,
  templates: [hero, content, cards, clients, skills, projects, blogs, ticker],
};
