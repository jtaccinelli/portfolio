import {defineArrayMember, defineField, defineType} from 'sanity'
import {CopyIcon} from '@sanity/icons'

import type {ArrayQuery, BlockQuery} from '~/shared/sanity'
import type {CardQuery} from '~/objects/card'

export interface CardsBlockQuery extends BlockQuery {
  _type: typeof cards.name
  layout: (typeof layouts)[number]['value']
  heading: string
  cards: ArrayQuery<CardQuery>
}

const layouts = [{title: 'Simple', value: 'simple'}] as const

export const cards = defineType({
  type: 'object',
  name: 'cards',
  title: 'Cards Block',
  icon: CopyIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'layout',
      title: 'Layout',
      initialValue: 'simple',
      options: {
        list: [...layouts],
      },
    }),
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
    }),
    defineField({
      type: 'array',
      name: 'cards',
      title: 'Cards',
      of: [
        defineArrayMember({
          type: 'card',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: (selection: any) => ({
      title: 'Cards Block',
      subtitle: selection.heading,
      media: CopyIcon,
    }),
  },
})
