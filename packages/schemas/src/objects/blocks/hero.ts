import {defineArrayMember, defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

import type {ArrayQuery, BlockQuery} from '~/shared/sanity'
import type {LinkQuery} from '~/objects/link'

export interface HeroBlockQuery extends BlockQuery {
  _type: typeof hero.name
  layout: (typeof layouts)[number]['value']
  body: string
  ctas: ArrayQuery<LinkQuery>
}

const layouts = [
  {title: 'Simple', value: 'simple'},
  {title: 'Graphic', value: 'graphic'},
] as const

export const hero = defineType({
  type: 'object',
  name: 'hero',
  title: 'Hero Block',
  icon: ImageIcon,
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
      type: 'text',
      name: 'body',
      title: 'Body',
      rows: 4,
    }),
    defineField({
      type: 'array',
      name: 'ctas',
      title: 'Calls to Action',
      of: [defineArrayMember({type: 'link'})],
    }),
  ],
  preview: {
    select: {
      body: 'body',
    },
    prepare: (selection) => ({
      title: 'Hero Block',
      subtitle: selection.body,
      media: ImageIcon,
    }),
  },
})
