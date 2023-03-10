import type {ArrayQuery, BlockQuery} from '@shared/sanity'
import type {CardQuery} from '@schemas/objects/card'

import {CopyIcon} from '@sanity/icons'

export interface CardsBlockQuery extends BlockQuery {
  _type: typeof cards.name
  layout: (typeof layouts)[number]['value']
  heading: string
  cards: ArrayQuery<CardQuery>
}

const layouts = [{title: 'Simple', value: 'simple'}] as const

export const cards = {
  type: 'object',
  name: 'cards',
  title: 'Cards Block',
  icon: CopyIcon,
  fields: [
    {
      type: 'string',
      name: 'layout',
      title: 'Layout',
      initialValue: 'simple',
      options: {
        list: layouts,
      },
    },
    {
      type: 'string',
      name: 'heading',
      title: 'Heading',
    },
    {
      type: 'array',
      name: 'cards',
      title: 'Cards',
      of: [
        {
          type: 'card',
        },
      ],
    },
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
}
