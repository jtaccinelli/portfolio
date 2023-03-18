import {defineField, defineType} from 'sanity'
import {DocumentsIcon} from '@sanity/icons'

import type {DocumentQuery, SlugQuery} from '~/shared/sanity'

import type {BuilderQuery} from '~/objects/builder'
import type {SeoQuery} from '~/objects/seo'
import {LINK_FRAGMENT} from '~/objects/link'

export interface PageDocumentQuery extends DocumentQuery {
  _type: typeof page.name
  title: string
  handle: SlugQuery
  content: BuilderQuery
  seo: SeoQuery
}

export const PAGE_QUERY = `
*[_type == "page" && handle.current == $handle][0]{
    ...,
    "handle": handle.current,
    content[]{
        ...,    
        ctas[]{
          ${LINK_FRAGMENT}
        }
    }
}
`

export const page = defineType({
  type: 'document',
  name: 'page',
  title: 'Pages',
  icon: DocumentsIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'slug',
      name: 'handle',
      title: 'Handle',
      options: {
        source: 'title',
      },
    }),
    defineField({
      type: 'builder',
      name: 'content',
      title: 'Content',
    }),
    defineField({
      type: 'seo',
      name: 'seo',
      title: 'SEO',
    }),
  ],
})
