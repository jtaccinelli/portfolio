import type {ArrayQuery, Link} from "@shared/sanity";

export type LinksQuery = ArrayQuery<Link>

export const links = {
  type: 'array',
  name: 'links',
  title: 'Links',
  of: [
    {
      type: 'link',
      name: 'link',
      title: 'Link',
    },
  ],
}
