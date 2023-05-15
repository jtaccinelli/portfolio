import {CogIcon} from '@sanity/icons'

import type {DocumentQuery} from '~/shared/sanity'

import type {SeoQuery} from '~/objects/seo'
import {SEO_FRAGMENT} from '~/objects/seo'

export interface ConfigurationDocumentQuery extends DocumentQuery {
  _type: typeof configuration.name
  title: string
  default_seo: SeoQuery
}

export const CONFIGURATION_DOCUMENT_FRAGMENT = `
  ...,
  default_seo {
    ${SEO_FRAGMENT}
  }
`

export const configuration = {
  type: 'document',
  name: 'configuration',
  title: 'Configuration',
  icon: CogIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      hidden: true,
      initialValue: 'Configuration',
    },
    {
      type: 'seo',
      name: 'default_seo',
      title: 'Default SEO',
    },
  ],
} as const
