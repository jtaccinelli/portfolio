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
        list: [{title: 'Simple', value: 'simple'}],
      },
    },
    {
      type: 'string',
      name: 'heading',
      title: 'Heading',
    },
    {
      type: 'links',
      name: 'ctas',
      title: 'Calls to Action',
    },
  ],
}
