import {UserIcon} from '@sanity/icons'

import type {DocumentQuery, SlugQuery} from '@cms/shared/sanity'

export interface ClientDocumentQuery extends DocumentQuery {
  _type: typeof client.name
  title: string
  handle: SlugQuery
  website?: string
  blurb: string
  logo: any // TODO: Image Type
}

export const client = {
  type: 'document',
  name: 'client',
  title: 'Clients',
  icon: UserIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      required: true,
    },
    {
      type: 'slug',
      name: 'handle',
      title: 'Handle',
      required: true,
      options: {
        source: 'title',
      },
    },
    {
      type: 'url',
      name: 'website',
      title: 'Website',
    },
    {
      type: 'text',
      name: 'blurb',
      title: 'Blurb',
      required: true,
      rows: 4,
    },
    {
      type: 'image',
      name: 'logo',
      title: 'Logo',
    },
  ],
} as const
