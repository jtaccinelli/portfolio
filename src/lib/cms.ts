export function parseLinkHref(link: any) {
  if (!link) return;
  if ("url" in link) return link.url;

  return "";
  // const [type, handle] = link?.reference?.split("/").splice(-2);

  // switch (type) {
  //   case "Page":
  //     return `/${handle}`;
  //   case "Blog":
  //     return `/blogs/${handle}`;
  //   case "Client":
  //     return `/clients/${handle}`;
  //   case "Project":
  //     return `/projects/${handle}`;
  //   case "Skill":
  //     return `/skills/${handle}`;
  //   default:
  //     return;
  // }
}
