import { link } from "@root/objects/link";
import { seo } from "@root/objects/seo";
import { builder } from "@root/objects/builder";
import { card } from "@root/objects/card";

export const objects = [link, seo, builder, card] as const;
export type ObjectTypes = (typeof objects)[number]["name"];
