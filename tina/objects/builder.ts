import type { ArrayQuery } from "@root/shared/sanity";

import type { HeroBlockQuery } from "@root/objects/blocks/hero";
import type { ContentBlockQuery } from "@root/objects/blocks/content";
import type { CardsBlockQuery } from "@root/objects/blocks/cards";
import type { ClientsBlockQuery } from "@root/objects/blocks/clients";
import type { SkillsBlockQuery } from "@root/objects/blocks/skills";
import type { ProjectsBlockQuery } from "@root/objects/blocks/projects";
import type { BlogsBlockQuery } from "@root/objects/blocks/blogs";
import type { TickerBlockQuery } from "@root/objects/blocks/ticker";

export type BuilderQuery = ArrayQuery<
  | HeroBlockQuery
  | ContentBlockQuery
  | CardsBlockQuery
  | ClientsBlockQuery
  | SkillsBlockQuery
  | ProjectsBlockQuery
  | BlogsBlockQuery
  | TickerBlockQuery
>;

export const builder = {
  type: "array",
  name: "builder",
  title: "Builder",
  of: [
    { type: "hero" },
    { type: "content" },
    { type: "cards" },
    { type: "clients" },
    { type: "skills" },
    { type: "projects" },
    { type: "blogs" },
    { type: "ticker" },
  ],
} as const;
