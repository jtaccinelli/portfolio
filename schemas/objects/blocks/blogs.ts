import {EditIcon} from '@sanity/icons'

export default {
  type: 'object',
  name: 'blogs',
  title: 'Blogs Block',
  icon: EditIcon,
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
          to: [{type: 'blog'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: (selection: {heading: string}) => ({
      title: 'Blogs Block',
      subtitle: selection.heading,
      media: EditIcon,
    }),
  },
}
