import { documents } from "@tina/documents";
import { objects } from "@tina/objects";
import { blocks } from "@tina/objects/blocks";

export const schemas = [...documents, ...objects, ...blocks] as const;
export type SchemaTypes = (typeof schemas)[number]["name"];
