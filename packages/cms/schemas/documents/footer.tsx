import {BlockElementIcon} from '@sanity/icons'

import type {ArrayQuery, DocumentQuery} from '@cms/shared/sanity'

import type {LinkQuery} from '@cms/schemas/objects/link'
import {LINK_FRAGMENT} from '@cms/schemas/objects/link'

export interface FooterDocumentQuery extends DocumentQuery {
  _type: typeof footer.name
  title: string
  acknowledgement: string
  links: ArrayQuery<LinkQuery>
}

export const FOOTER_QUERY = `
*[_type == "footer"][0]{
    ...,
    links[] {
        ${LINK_FRAGMENT}
    }
}
`

export const footer = {
  type: 'document',
  name: 'footer',
  title: 'Footer',
  icon: BlockElementIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      hidden: true,
      initialValue: 'Footer',
    },
    {
      type: 'text',
      name: 'acknowledgement',
      title: 'Acknowledgement',
      rows: 4,
    },
    {
      type: 'array',
      name: 'links',
      title: 'Footer Links',
      of: [{type: 'link'}],
    },
  ],
} as const
