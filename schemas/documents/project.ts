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
      required: true,
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
      type: 'reference',
      name: 'client',
      title: 'Client',
      to: [{type: 'client'}],
    },
    {
      type: 'array',
      name: 'skills',
      title: 'Skills',
      of: [
        {
          type: 'reference',
          to: [{type: 'skill'}],
        },
      ],
    },
    {
      type: 'date',
      name: 'completed_on',
      title: 'Date Completed',
      required: true,
    },
    {
      type: 'url',
      name: 'live_site',
      title: 'Live Site',
    },
    {
      type: 'seo',
      name: 'seo',
      title: 'SEO',
    },
  ],
}
