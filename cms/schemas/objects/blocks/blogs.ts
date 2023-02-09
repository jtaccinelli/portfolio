import type {ArrayQuery, BlockQuery, ReferenceQuery} from '@shared/sanity'
import type {BlogDocumentQuery} from '@schemas/documents/blog'

import {EditIcon} from '@sanity/icons'

export interface BlogsBlockQuery extends BlockQuery {
  _type: typeof blogs.name
  layout: (typeof layouts)[number]['value']
  heading: string
  items: ArrayQuery<ReferenceQuery<BlogDocumentQuery>>
}

const layouts = [{title: 'Simple', value: 'simple'}] as const

export const blogs = {
  type: 'object',
  name: 'blogs',
  title: 'Blogs Block',
  icon: EditIcon,
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
      name: 'items',
      title: 'Items',
      of: [
        {
          type: 'reference',
          to: [{type: 'blog'}],
        },
      ],
    },
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
}
