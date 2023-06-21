import { documents } from "@root/documents";
import { objects } from "@root/objects";
import { blocks } from "@root/objects/blocks";

export const schemas = [...documents, ...objects, ...blocks] as const;
export type SchemaTypes = (typeof schemas)[number]["name"];
