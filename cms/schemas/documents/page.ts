import type {DocumentQuery, SlugQuery} from '@shared/sanity'
import type {SeoQuery} from '@schemas/objects/seo'

import {DocumentsIcon} from '@sanity/icons'

export interface PageDocumentQuery extends DocumentQuery {
  _type: typeof page.name
  title: string
  handle: SlugQuery
  content: any // TODO: Builder Type
  seo: SeoQuery
}

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
}
