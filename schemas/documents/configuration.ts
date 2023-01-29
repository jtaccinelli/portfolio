import {CogIcon} from '@sanity/icons'

export default {
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
      name: 'default-seo',
      title: 'Default SEO',
    },
  ],
}
