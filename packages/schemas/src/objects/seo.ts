import {defineField, defineType} from 'sanity'

import type {ObjectQuery} from '~/shared/sanity'

export interface SeoQuery extends ObjectQuery {
  _type: typeof seo.name
  title: string
  description: string
  thumbnail: string
}

export const seo = defineType({
  type: 'object',
  name: 'seo',
  title: 'SEO',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Description',
      rows: 4,
      validation: (rule) => {
        return rule.max(150)
      },
    }),
    defineField({
      type: 'image',
      name: 'thumbnail',
      title: 'Thumbnail',
    }),
  ],
})
