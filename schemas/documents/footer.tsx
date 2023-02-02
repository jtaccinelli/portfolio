import {BlockElementIcon} from '@sanity/icons'

export default {
  type: 'document',
  name: 'footer',
  title: 'Footer',
  icon: BlockElementIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      hidden: true,
      initialValue: 'Footer',
    },
    {
      type: 'text',
      name: 'acknowledgement',
      title: 'Acknowledgement',
    },
    {
      type: 'links',
      name: 'links',
      title: 'Footer Links',
    },
  ],
}
