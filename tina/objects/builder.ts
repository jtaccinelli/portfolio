import type { ArrayQuery } from "@tina/shared/sanity";

import type { HeroBlockQuery } from "@tina/objects/blocks/hero";
import type { ContentBlockQuery } from "@tina/objects/blocks/content";
import type { CardsBlockQuery } from "@tina/objects/blocks/cards";
import type { ClientsBlockQuery } from "@tina/objects/blocks/clients";
import type { SkillsBlockQuery } from "@tina/objects/blocks/skills";
import type { ProjectsBlockQuery } from "@tina/objects/blocks/projects";
import type { BlogsBlockQuery } from "@tina/objects/blocks/blogs";
import type { TickerBlockQuery } from "@tina/objects/blocks/ticker";

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
