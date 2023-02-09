// --- BASE SANITY TYPES

import {SchemaTypes} from "@portfolio/cms/schemas";
import {BlockTypes} from "@portfolio/cms/schemas/objects/blocks";

export interface Object {
  _type: SchemaTypes;
}

export interface ArrayItem {
  _key: string;
}

export interface Document extends Object {
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface Reference {
  _ref: string;
}

// --- CUSTOM OBJECT TYPES

export interface Link extends Object {
  _type: "link";
  label: string;
  url: string;
}

export interface LinksItem extends ArrayItem, Link {}

export type Links = Array<LinksItem>

export interface SEO extends Object {
  _type: "seo";
  title: string;
  description: string;
  image: unknown; // TODO: Image Type
}

export interface Card extends Object {
  _type: "card";
  heading: string;
  body: string;
  cta: Link;
}

export interface CardsItem extends ArrayItem, Card {}

export type Cards = Array<CardsItem>

// --- BLOCK TYPES

export interface Block extends Object {
  _type: BlockTypes;
}

export interface HeroBlock extends Block {
  _type: "hero";
  layout: "simple" | "graphic";
  body: string;
  ctas: Links;
}

export interface ContentBlock extends Block {
  _type: "content";
  layout: "simple" | "grid";
  heading: string;
  body: string[];
  ctas: Links;
}

export interface CardsBlock extends Block {
  _type: "cards";
  layout: "simple";
  heading: string;
  cards: Cards;
}

export type Builder = (ArrayItem & (HeroBlock | ContentBlock | CardsBlock))[];

// --- DOCUMENT TYPES

export type NavigationDocument = Document & {
  type: "navigation";
  connect: Links;
  items: Links;
  heading: string;
  subheading: string;
};

export type FooterDocument = Document & {
  type: "footer";
  acknowledgement: string;
  links: Links;
};

export type ConfigurationDocument = Document & {
  type: "configuration";
  default_seo: SEO;
};

export type PageDocument = Document & {
  type: "page";
  handle: string;
  content: Builder;
};
