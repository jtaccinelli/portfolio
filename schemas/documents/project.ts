import {PresentationIcon} from '@sanity/icons'

export default {
  type: 'document',
  name: 'project',
  title: 'Projects',
  icon: PresentationIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
  ],
}
