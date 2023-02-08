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
      type: 'links',
      name: 'ctas',
      title: 'Calls to Action',
    },
  ],
  preview: {
    select: {
      body: 'body',
    },
    prepare: (selection: {body: string}) => ({
      title: 'Hero Block',
      subtitle: selection.body,
      media: ImageIcon,
    }),
  },
}
