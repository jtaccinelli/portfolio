import {CopyIcon} from '@sanity/icons'

export default {
  type: 'object',
  name: 'cards',
  title: 'Cards Block',
  icon: CopyIcon,
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
      name: 'cards',
      title: 'Cards',
      of: [
        {
          type: 'card',
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: (selection: any) => ({
      title: 'Cards Block',
      subtitle: selection.heading,
      media: CopyIcon,
    }),
  },
}
