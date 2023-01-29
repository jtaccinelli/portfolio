import {DesktopIcon} from '@sanity/icons'

export default {
  type: 'document',
  name: 'page',
  title: 'Pages',
  icon: DesktopIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
  ],
}
