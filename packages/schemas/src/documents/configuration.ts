import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

import type {DocumentQuery} from '~/shared/sanity'

import type {SeoQuery} from '~/objects/seo'

export interface ConfigurationDocumentQuery extends DocumentQuery {
  _type: typeof configuration.name
  title: string
  default_seo: SeoQuery
}

export const CONFIGURATION_QUERY = `
*[_type == "configuration"][0]{
    ...
}
`

export const configuration = defineType({
  type: 'document',
  name: 'configuration',
  title: 'Configuration',
  icon: CogIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      hidden: true,
      initialValue: 'Configuration',
    }),
    defineField({
      type: 'seo',
      name: 'default_seo',
      title: 'Default SEO',
    }),
  ],
})
