import { content } from "@root/objects/blocks/content";
import { hero } from "@root/objects/blocks/hero";
import { cards } from "@root/objects/blocks/cards";

import { clients } from "@root/objects/blocks/clients";
import { projects } from "@root/objects/blocks/projects";
import { skills } from "@root/objects/blocks/skills";
import { blogs } from "@root/objects/blocks/blogs";
import { ticker } from "@root/objects/blocks/ticker";

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
