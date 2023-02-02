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
    {
      type: 'slug',
      name: 'handle',
      title: 'Handle',
      options: {
        source: 'title',
      },
    },
    {
      type: 'builder',
      name: 'content',
      title: 'Content',
    },
    {
      type: 'seo',
      name: 'seo',
      title: 'SEO',
    },
  ],
}
