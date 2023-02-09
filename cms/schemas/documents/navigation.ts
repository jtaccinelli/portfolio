import {MenuIcon} from '@sanity/icons'

export default {
  type: 'document',
  name: 'navigation',
  title: 'Navigation',
  icon: MenuIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      hidden: true,
      initialValue: 'Navigation',
    },
    {
      type: 'string',
      name: 'heading',
      title: 'Heading',
    },
    {
      type: 'string',
      name: 'subheading',
      title: 'Subheading',
    },
    {
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [{type: 'link'}]
    },
    {
      type: 'array',
      name: 'connect',
      title: 'Connect',
      of: [{type: 'link'}]
    },
  ],
}
