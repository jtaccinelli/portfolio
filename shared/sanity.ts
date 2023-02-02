export type Types =
  | "navigation"
  | "footer"
  | "configuration"
  | "client"
  | "page"
  | "project"
  | "skill"
  | "seo"
  | "link";

export type Node = {
  _type: Types;
};

export type ArrayItem = Node & {
  _key: string;
};

export type Document = Node & {
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
};

export type Reference = Node & {
  _ref: string;
};

export type Link = Node & { _type: "link" } & (
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
export type SEO = Node & {
  _type: "seo";
  title: string;
  description: string;
  image: unknown;
};

export type NavigationItem = ArrayItem & {
  label: string;
  link: Link;
};

export type NavigationDocument = Document & {
  type: "navigation";
  connect: NavigationItem[];
  items: NavigationItem[];
  heading: string;
  subheading: string;
};

export type FooterDocument = Document & {
  type: "footer";
  acknowledgement: string;
  links: NavigationItem[];
};

export type ConfigurationDocument = Document & {
  type: "configuration";
  defaultSeo: SEO;
};
