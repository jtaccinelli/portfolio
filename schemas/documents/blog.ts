import {EditIcon} from '@sanity/icons'

export default {
  type: 'document',
  name: 'blogs',
  title: 'Blogs',
  icon: EditIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'array',
      name: 'content',
      title: 'Content',
      of: [{type: 'block'}],
    },
  ],
}
