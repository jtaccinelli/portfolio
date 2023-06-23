import type {
  Blog,
  Client,
  Maybe,
  Page,
  Project,
  Scalars,
  Skill,
} from "@tina/__generated__/types";

export type LinkReference = {
  label?: Maybe<Scalars["String"]>;
  reference?: Maybe<Blog | Client | Page | Project | Skill>;
};

export type LinkExternal = {
  label?: Maybe<Scalars["String"]>;
  url: Scalars["String"];
};

export type Link = LinkReference | LinkExternal;

export function parseLinkHref(link: Link) {
  if (!link) return;
  if ("url" in link) return link.url;

  const type = link.reference?.__typename;
  const handle = link.reference?._sys.filename;

  switch (type) {
    case "Page":
      return `/${handle}`;
    case "Blog":
      return `/blogs/${handle}`;
    case "Client":
      return `/clients/${handle}`;
    case "Project":
      return `/projects/${handle}`;
    case "Skill":
      return `/skills/${handle}`;
    default:
      return;
  }
}
