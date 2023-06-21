import { navigation } from "@root/documents/navigation";
import { configuration } from "@root/documents/configuration";

import { blog } from "@root/documents/blog";
import { page } from "@root/documents/page";
import { client } from "@root/documents/client";
import { skill } from "@root/documents/skill";
import { project } from "@root/documents/project";
import { footer } from "@root/documents/footer";

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
