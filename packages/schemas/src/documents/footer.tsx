import {defineArrayMember, defineField, defineType} from 'sanity'
import {BlockElementIcon} from '@sanity/icons'

import type {ArrayQuery, DocumentQuery} from '~/shared/sanity'

import type {LinkQuery} from '~/objects/link'
import {LINK_FRAGMENT} from '~/objects/link'

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

export const footer = defineType({
  type: 'document',
  name: 'footer',
  title: 'Footer',
  icon: BlockElementIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      hidden: true,
      initialValue: 'Footer',
    }),
    defineField({
      type: 'text',
      name: 'acknowledgement',
      title: 'Acknowledgement',
      rows: 4,
    }),
    defineField({
      type: 'array',
      name: 'links',
      title: 'Footer Links',
      of: [defineArrayMember({type: 'link'})],
    }),
  ],
})
