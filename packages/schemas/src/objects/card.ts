import {defineField, defineType} from 'sanity'

import type {ObjectQuery} from '~/shared/sanity'
import type {LinkQuery} from '~/objects/link'

export interface CardQuery extends ObjectQuery {
  _type: typeof card.name
  heading: string
  body: string
  cta: LinkQuery
}

export const card = defineType({
  type: 'object',
  name: 'card',
  title: 'Name',
  fields: [
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
    }),
    defineField({
      type: 'text',
      name: 'body',
      title: 'Body',
      rows: 4,
    }),
    defineField({
      type: 'link',
      name: 'cta',
      title: 'CTA',
    }),
  ],
})
