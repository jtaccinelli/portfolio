import {defineArrayMember, defineField, defineType} from 'sanity'
import {MenuIcon} from '@sanity/icons'

import type {ArrayQuery, DocumentQuery} from '~/shared/sanity'

import type {LinkQuery} from '~/objects/link'
import {LINK_FRAGMENT} from '~/objects/link'

export interface NavigationDocumentQuery extends DocumentQuery {
  _type: typeof navigation.name
  title: string
  heading: string
  subheading: string
  items: ArrayQuery<LinkQuery>
  connect: ArrayQuery<LinkQuery>
}

export const NAVIGATION_QUERY = `
*[_type == "navigation"][0]{
    ...,
    connect[] {
        ${LINK_FRAGMENT}
    },
    items[] {
        ${LINK_FRAGMENT}
    }
}
`

export const navigation = defineType({
  type: 'document',
  name: 'navigation',
  title: 'Navigation',
  icon: MenuIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      hidden: true,
      initialValue: 'Navigation',
    }),
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
    }),
    defineField({
      type: 'string',
      name: 'subheading',
      title: 'Subheading',
    }),
    defineField({
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [defineArrayMember({type: 'link'})],
    }),
    defineField({
      type: 'array',
      name: 'connect',
      title: 'Connect',
      of: [defineArrayMember({type: 'link'})],
    }),
  ],
})
