import { content } from "@tina/objects/blocks/content";
import { hero } from "@tina/objects/blocks/hero";
import { cards } from "@tina/objects/blocks/cards";

import { clients } from "@tina/objects/blocks/clients";
import { projects } from "@tina/objects/blocks/projects";
import { skills } from "@tina/objects/blocks/skills";
import { blogs } from "@tina/objects/blocks/blogs";
import { ticker } from "@tina/objects/blocks/ticker";

export const blocks = [
  content,
  hero,
  cards,
  clients,
  projects,
  skills,
  blogs,
  ticker,
] as const;
export type BlockTypes = (typeof blocks)[number]["name"];
