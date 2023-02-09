import type {ArrayQuery, DocumentQuery} from '@shared/sanity'
import type {LinkQuery} from '@schemas/objects/link'

import {MenuIcon} from '@sanity/icons'

export interface NavigationDocumentQuery extends DocumentQuery {
  _type: typeof navigation.name
  title: string
  heading: string
  subheading: string
  items: ArrayQuery<LinkQuery>
  connect: ArrayQuery<LinkQuery>
}

export const navigation = {
  type: 'document',
  name: 'navigation',
  title: 'Navigation',
  icon: MenuIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      hidden: true,
      initialValue: 'Navigation',
    },
    {
      type: 'string',
      name: 'heading',
      title: 'Heading',
    },
    {
      type: 'string',
      name: 'subheading',
      title: 'Subheading',
    },
    {
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [{type: 'link'}],
    },
    {
      type: 'array',
      name: 'connect',
      title: 'Connect',
      of: [{type: 'link'}],
    },
  ],
}
