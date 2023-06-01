import {EditIcon} from '@sanity/icons'

import type {ArrayQuery, BlockQuery, ReferenceQuery} from '~/shared/sanity'

import type {BlogDocumentQuery} from '~/documents/blog'
import {BLOG_DOCUMENT_FRAGMENT} from '~/documents/blog'

export interface BlogsBlockQuery extends BlockQuery {
  _type: typeof blogs.name
  layout: (typeof layouts)[number]['value']
  heading: string
  items: ArrayQuery<ReferenceQuery<BlogDocumentQuery>>
}

export const BLOGS_BLOCK_FRAGMENT = `
  ...,
  count(items) > 0 => {
    "items": items[]->{
      ${BLOG_DOCUMENT_FRAGMENT}
    }
  },
  count(items) == 0 => {
    "items": *[_type == "blog"]{
      ${BLOG_DOCUMENT_FRAGMENT}
    }
  }
`

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
} as const
