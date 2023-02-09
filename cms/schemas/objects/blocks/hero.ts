import {ImageIcon} from '@sanity/icons'

export default {
  type: 'object',
  name: 'hero',
  title: 'Hero Block',
  icon: ImageIcon,
  fields: [
    {
      type: 'string',
      name: 'layout',
      title: 'Layout',
      initialValue: 'simple',
      options: {
        list: [
          {title: 'Simple', value: 'simple'},
          {title: 'Graphic', value: 'graphic'},
        ],
      },
    },
    {
      type: 'text',
      name: 'body',
      title: 'Body',
      rows: 4,
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
      body: 'body',
    },
    prepare: (selection: any) => ({
      title: 'Hero Block',
      subtitle: selection.body,
      media: ImageIcon,
    }),
  },
}
