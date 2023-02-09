import type {DocumentQuery} from '@shared/sanity'
import type {SeoQuery} from '@schemas/objects/seo'

import {CogIcon} from '@sanity/icons'

export interface ConfigurationDocumentQuery extends DocumentQuery {
  _type: typeof configuration.name
  title: string
  seo: SeoQuery
}

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
}
