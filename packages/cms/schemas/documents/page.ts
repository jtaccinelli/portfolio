import {DocumentsIcon} from '@sanity/icons'

import type {DocumentQuery, SlugQuery} from 'cms/shared/sanity'

import type {BuilderQuery} from 'cms/schemas/objects/builder'
import type {SeoQuery} from 'cms/schemas/objects/seo'
import {LINK_FRAGMENT} from 'cms/schemas/objects/link'

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

export const page = {
  type: 'document',
  name: 'page',
  title: 'Pages',
  icon: DocumentsIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'slug',
      name: 'handle',
      title: 'Handle',
      options: {
        source: 'title',
      },
    },
    {
      type: 'builder',
      name: 'content',
      title: 'Content',
    },
    {
      type: 'seo',
      name: 'seo',
      title: 'SEO',
    },
  ],
} as const
