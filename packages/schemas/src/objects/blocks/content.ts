import {defineArrayMember, defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

import type {ArrayQuery, BlockQuery} from '~/shared/sanity'
import type {LinkQuery} from '~/objects/link'

export interface ContentBlockQuery extends BlockQuery {
  _type: typeof content.name
  layout: (typeof layouts)[number]['value']
  heading: string
  body: ArrayQuery<string>
  ctas: ArrayQuery<LinkQuery>
}

const layouts = [
  {title: 'Simple', value: 'simple'},
  {title: 'Grid', value: 'grid'},
] as const

export const content = defineType({
  type: 'object',
  name: 'content',
  title: 'Content Block',
  icon: BlockContentIcon,
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
      name: 'body',
      title: 'Body',
      of: [defineArrayMember({type: 'text', rows: 4})],
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
      heading: 'heading',
    },
    prepare: (selection) => ({
      title: 'Content Block',
      subtitle: selection.heading,
      media: BlockContentIcon,
    }),
  },
})
