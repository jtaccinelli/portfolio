import {PresentationIcon} from '@sanity/icons'

export default {
  type: 'object',
  name: 'projects',
  title: 'Projects Block',
  icon: PresentationIcon,
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
          to: [{type: 'project'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: (selection: {heading: string}) => ({
      title: 'Project Block',
      subtitle: selection.heading,
      media: PresentationIcon,
    }),
  },
}
