import type {ArrayQuery, DocumentQuery} from '@shared/sanity'
import type {LinkQuery} from '@schemas/objects/link'

import {BlockElementIcon} from '@sanity/icons'

export interface FooterDocumentQuery extends DocumentQuery {
  _type: typeof footer.name
  title: string
  acknowledgement: string
  links: ArrayQuery<LinkQuery>
}

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
}
