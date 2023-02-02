// --- BASE SANITY TYPES

export type SingletonTypes = "navigation" | "footer" | "configuration";
export type ObjectTypes = "seo" | "link" | "links" | "item";
export type DocumentTypes = "client" | "page" | "project" | "skill";
export type BlockTypes = "content" | "hero";

export type AllTypes =
  | SingletonTypes
  | ObjectTypes
  | DocumentTypes
  | BlockTypes;

export type Object = {
  _type: AllTypes;
};

export type ArrayItem = Object & {
  _key: string;
};

export type Document = Object & {
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
};

export type Reference = Object & {
  _ref: string;
};

// --- CUSTOM OBJECT TYPES

export type Link = Object & { _type: "link" } & (
    | {
        variant: "url";
        url: string;
      }
    | {
        variant: "reference";
        reference: Reference & {
          handle: string;
        };
      }
  );

// TODO: Image Type
export type SEO = Object & {
  _type: "seo";
  title: string;
  description: string;
  image: unknown;
};

export type Links = (ArrayItem & {
  _type: "item";
  label: string;
  link: Link;
})[];

// --- BLOCK TYPES

export type HeroBlock = Object & {
  _type: "hero";
  layout: "simple";
  body: string;
  ctas: Links;
};

export type ContentBlock = Object & {
  _type: "content";
  layout: "simple";
  heading: string;
  body: string;
  ctas: Links;
};

export type Builder = (ArrayItem & { _key: BlockTypes } & (
    | HeroBlock
    | ContentBlock
  ))[];

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
  defaultSeo: SEO;
};

export type PageDocument = Document & {
  type: "page";
  handle: string;
  content: Builder;
};
