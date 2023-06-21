import type { SchemaTypes } from "@tina/schemas";
import type { BlockTypes } from "@tina/objects/blocks";

export interface ObjectQuery {
  _type: SchemaTypes;
}

export interface SlugQuery {
  current: string;
}

export type ArrayQuery<Schema> = (ObjectQuery & { _key: string } & Schema)[];

export type ReferenceQuery<Schema> = ObjectQuery & { _ref: string } & Schema;

export interface DocumentQuery extends ObjectQuery {
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface BlockQuery extends ObjectQuery {
  _type: BlockTypes;
}
