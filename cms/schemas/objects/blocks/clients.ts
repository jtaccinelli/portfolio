import {UserIcon} from '@sanity/icons'

export default {
  type: 'object',
  name: 'clients',
  title: 'Clients Block',
  icon: UserIcon,
  fields: [
    {
      type: 'string',
      name: 'layout',
      title: 'Layout',
      initialValue: 'simple',
      options: {
        list: [{title: 'Simple', value: 'simple'}],
      },
    },
    {
      type: 'string',
      name: 'heading',
      title: 'Heading',
    },
    {
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [
        {
          type: 'reference',
          to: [{type: 'client'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: (selection: any) => ({
      title: 'Client Block',
      subtitle: selection.heading,
      media: UserIcon,
    }),
  },
}
