import {BlockContentIcon} from '@sanity/icons'

export default {
  type: 'object',
  name: 'content',
  title: 'Content Block',
  icon: BlockContentIcon,
  fields: [
    {
      type: 'string',
      name: 'layout',
      title: 'Layout',
      initialValue: 'simple',
      options: {
        list: [
          {title: 'Simple', value: 'simple'},
          {title: 'Grid', value: 'grid'},
        ],
      },
    },
    {
      type: 'string',
      name: 'heading',
      title: 'Heading',
    },
    {
      type: 'array',
      name: 'body',
      title: 'Body',
      of: [{type: 'text', rows: 4}],
    },
    {
      type: 'array',
      name: 'ctas',
      title: 'Calls to Action',
      of: [{type: 'link'}]
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: (selection: any) => ({
      title: 'Content Block',
      subtitle: selection.heading,
      media: BlockContentIcon,
    }),
  },
}
