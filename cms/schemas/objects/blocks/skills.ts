import {ControlsIcon} from '@sanity/icons'

export default {
  type: 'object',
  name: 'skills',
  title: 'Skills Block',
  icon: ControlsIcon,
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
          to: [{type: 'skill'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: (selection: any) => ({
      title: 'Skills Block',
      subtitle: selection.heading,
      media: ControlsIcon,
    }),
  },
}
