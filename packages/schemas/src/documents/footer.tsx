import {BlockElementIcon} from '@sanity/icons'

import type {DocumentQuery} from '~/shared/sanity'

export interface FooterDocumentQuery extends DocumentQuery {
  _type: typeof footer.name
  title: string
  acknowledgement: string
}

export const FOOTER_DOCUMENT_FRAGMENT = `
  ...
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
  ],
} as const
