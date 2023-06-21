import { link } from "@tina/objects/link";
import { seo } from "@tina/objects/seo";
import { builder } from "@tina/objects/builder";
import { card } from "@tina/objects/card";

export const objects = [link, seo, builder, card] as const;
export type ObjectTypes = (typeof objects)[number]["name"];
