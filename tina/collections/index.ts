import { navigation } from "@tina/collections/navigation";
import { configuration } from "@tina/collections/configuration";
import { footer } from "@tina/collections/footer";

import { blog } from "@tina/collections/blog";
import { page } from "@tina/collections/page";
import { client } from "@tina/collections/client";
import { skill } from "@tina/collections/skill";
import { project } from "@tina/collections/project";

export const singletons = [navigation, footer, configuration] as const;
export type SingletonTypes = (typeof singletons)[number]["name"];

export const documents = [
  page,
  blog,
  client,
  skill,
  project,
  ...singletons,
] as const;
export type DocumentTypes = (typeof documents)[number]["name"];
