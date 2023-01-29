import {ControlsIcon} from '@sanity/icons'

export default {
  type: 'document',
  name: 'service',
  title: 'Services',
  icon: ControlsIcon,
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
      required: true,
      options: {
        source: 'title',
      },
    },
    {
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
    },
    {
      type: 'text',
      name: 'blurb',
      title: 'Blurb',
      rows: 4,
    },
    {
      type: 'array',
      name: 'content',
      title: 'Content',
      of: [{type: 'block'}],
    },
    {
      type: 'seo',
      name: 'seo',
      title: 'SEO',
    },
  ],
}
