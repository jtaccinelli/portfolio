import type {CurrentUser, SanityDocument} from 'sanity'
import type {SchemaTypes} from "@schemas";
import type {BlockTypes} from "@schemas/objects/blocks";

export interface HiddenArgs {
  document: SanityDocument | undefined
  parent: any
  value: any
  currentUser: Omit<CurrentUser, 'role'> | null
}

// --- BASE SANITY TYPES

export interface ObjectQuery {
  _type: SchemaTypes;
}

export type ArrayQuery<Schema> = ({_key: string} & {
  [Key in keyof Schema]: Schema[Key];
})[]

export interface DocumentQuery extends ObjectQuery {
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface ReferenceQuery {
  _ref: string;
}

// --- CUSTOM OBJECT TYPES

export interface Link extends ObjectQuery {
  _type: "link";
  label: string;
  url: string;
}

export type Links = ArrayQuery<Link>

export interface SEO extends ObjectQuery {
  _type: "seo";
  title: string;
  description: string;
  image: unknown; // TODO: Image Type
}

export interface Card extends ObjectQuery {
  _type: "card";
  heading: string;
  body: string;
  cta: Link;
}

export type Cards = ArrayQuery<Card>

// --- BLOCK TYPES

export interface BlockQuery extends ObjectQuery {
  _type: BlockTypes;
}

export interface HeroBlock extends BlockQuery {
  _type: "hero";
  layout: "simple" | "graphic";
  body: string;
  ctas: Links;
}

export interface ContentBlock extends BlockQuery {
  _type: "content";
  layout: "simple" | "grid";
  heading: string;
  body: string[];
  ctas: Links;
}

export interface CardsBlock extends BlockQuery {
  _type: "cards";
  layout: "simple";
  heading: string;
  cards: Cards;
}

export type Builder = ArrayQuery<HeroBlock | ContentBlock | CardsBlock>;

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
