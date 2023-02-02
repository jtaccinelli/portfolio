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
        list: [{title: 'Simple', value: 'simple'}],
      },
    },
    {
      type: 'string',
      name: 'heading',
      title: 'Heading',
    },
    {
      type: 'text',
      name: 'body',
      title: 'Body',
    },
    {
      type: 'links',
      name: 'ctas',
      title: 'Calls to Action',
    },
  ],
}
