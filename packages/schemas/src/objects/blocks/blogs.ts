import {defineArrayMember, defineField, defineType} from 'sanity'
import {EditIcon} from '@sanity/icons'

import type {ArrayQuery, BlockQuery, ReferenceQuery} from '~/shared/sanity'
import type {BlogDocumentQuery} from '~/documents/blog'

export interface BlogsBlockQuery extends BlockQuery {
  _type: typeof blogs.name
  layout: (typeof layouts)[number]['value']
  heading: string
  items: ArrayQuery<ReferenceQuery<BlogDocumentQuery>>
}

const layouts = [{title: 'Simple', value: 'simple'}] as const

export const blogs = defineType({
  type: 'object',
  name: 'blogs',
  title: 'Blogs Block',
  icon: EditIcon,
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
      name: 'items',
      title: 'Items',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'blog'}],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: (selection: any) => ({
      title: 'Blogs Block',
      subtitle: selection.heading as string,
      media: EditIcon,
    }),
  },
})
