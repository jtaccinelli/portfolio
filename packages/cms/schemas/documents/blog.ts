import {EditIcon} from '@sanity/icons'

import type {DocumentQuery} from 'cms/shared/sanity'

export interface BlogDocumentQuery extends DocumentQuery {
  _type: typeof blog.name
  title: string
  content: any // TODO: Content Block Type
}

export const blog = {
  type: 'document',
  name: 'blog',
  title: 'Blogs',
  icon: EditIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'array',
      name: 'content',
      title: 'Content',
      of: [{type: 'block'}],
    },
  ],
} as const
