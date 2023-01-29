import {MenuIcon} from '@sanity/icons'

const item = {
  type: 'object',
  name: 'item',
  title: 'Item',
  fields: [
    {type: 'string', name: 'label', title: 'Label'},
    {type: 'link', name: 'link', title: 'Link'},
  ],
}

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
    {type: 'string', name: 'heading', title: 'Heading'},
    {type: 'string', name: 'subheading', title: 'Subheading'},
    {
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [item],
    },
    {
      type: 'array',
      name: 'connect',
      title: 'Connect',
      of: [item],
    },
  ],
}
