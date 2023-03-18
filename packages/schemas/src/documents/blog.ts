import {defineArrayMember, defineField, defineType} from 'sanity'
import {EditIcon} from '@sanity/icons'

import type {DocumentQuery} from '~/shared/sanity'

export interface BlogDocumentQuery extends DocumentQuery {
  _type: typeof blog.name
  title: string
  content: any // TODO: Content Block Type
}

export const blog = defineType({
  type: 'document',
  name: 'blog',
  title: 'Blogs',
  icon: EditIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'array',
      name: 'content',
      title: 'Content',
      of: [defineArrayMember({type: 'block'})],
    }),
  ],
})
