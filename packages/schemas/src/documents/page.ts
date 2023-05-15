import {DocumentsIcon} from '@sanity/icons'

import type {DocumentQuery, SlugQuery} from '~/shared/sanity'
import type {SeoQuery} from '~/objects/seo'

import type {BuilderQuery} from '~/objects/builder'
import {BUILDER_FRAGMENT} from '~/objects/builder'

export interface PageDocumentQuery extends DocumentQuery {
  _type: typeof page.name
  title: string
  handle: SlugQuery
  content: BuilderQuery
  seo: SeoQuery
}

export const PAGE_DOCUMENT_FRAGMENT = `
  ...,
  "handle": handle.current,
  content[] {
    ${BUILDER_FRAGMENT}
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
