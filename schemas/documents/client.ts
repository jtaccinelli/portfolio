import {UserIcon} from '@sanity/icons'

export default {
  type: 'document',
  name: 'client',
  title: 'Clients',
  icon: UserIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug',
    },
    {
      type: 'text',
      name: 'blurb',
      title: 'Blurb',
      rows: 4,
    },
    {
      type: 'image',
      name: 'logo',
      title: 'Logo',
    },
    {
      type: 'image',
      name: 'asset',
      title: 'Featured Asset',
    },
  ],
}
