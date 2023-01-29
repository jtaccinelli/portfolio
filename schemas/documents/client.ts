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
      required: true,
    },
    {
      type: 'slug',
      name: 'handle',
      title: 'Handle',
      required: true,
      options: {
        source: 'title',
      },
    },
    {
      type: 'url',
      name: 'website',
      title: 'Website',
    },
    {
      type: 'text',
      name: 'blurb',
      title: 'Blurb',
      required: true,
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
