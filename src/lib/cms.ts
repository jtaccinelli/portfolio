export type ExternalLink = {
  label: string;
  url: string;
};

export type ReferenceLink = {
  label: string;
  reference: string;
};

export type Link = ExternalLink | ReferenceLink;

export function parseLinkHref(link: Link) {
  if (!link) return;
  if ("url" in link) return link.url;

  const [type, handle] = link.reference.split("/").splice(-2);

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
