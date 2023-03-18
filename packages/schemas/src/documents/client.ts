import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

import type {DocumentQuery, SlugQuery} from '~/shared/sanity'

export interface ClientDocumentQuery extends DocumentQuery {
  _type: typeof client.name
  title: string
  handle: SlugQuery
  website?: string
  blurb: string
  logo: any // TODO: Image Type
}

export const client = defineType({
  type: 'document',
  name: 'client',
  title: 'Clients',
  icon: UserIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'handle',
      title: 'Handle',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
      },
    }),
    defineField({
      type: 'url',
      name: 'website',
      title: 'Website',
    }),
    defineField({
      type: 'text',
      name: 'blurb',
      title: 'Blurb',
      validation: (rule) => rule.required(),
      rows: 4,
    }),
    defineField({
      type: 'image',
      name: 'logo',
      title: 'Logo',
    }),
  ],
})
