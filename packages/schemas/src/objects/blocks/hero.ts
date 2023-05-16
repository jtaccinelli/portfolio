import {ImageIcon} from '@sanity/icons'

import type {ArrayQuery, BlockQuery} from '~/shared/sanity'

import type {LinkQuery} from '~/objects/link'
import {LINK_FRAGMENT} from '~/objects/link'

export interface HeroBlockQuery extends BlockQuery {
  _type: typeof hero.name
  layout: (typeof layouts)[number]['value']
  heading?: string
  body: string
  ctas: ArrayQuery<LinkQuery>
}

export const HERO_BLOCK_FRAGMENT = `
  ...,
  ctas[] {
    ${LINK_FRAGMENT}
  }
`

const layouts = [
  {title: 'Simple', value: 'simple'},
  {title: 'Graphic', value: 'graphic'},
  {title: 'Narrow', value: 'narrow'},
] as const

export const hero = {
  type: 'object',
  name: 'hero',
  title: 'Hero Block',
  icon: ImageIcon,
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
      type: 'text',
      name: 'body',
      title: 'Body',
      rows: 4,
    },
    {
      type: 'array',
      name: 'ctas',
      title: 'Calls to Action',
      of: [{type: 'link'}],
    },
  ],
  preview: {
    select: {
      body: 'body',
    },
    prepare: (selection: any) => ({
      title: 'Hero Block',
      subtitle: selection.body,
      media: ImageIcon,
    }),
  },
} as const
