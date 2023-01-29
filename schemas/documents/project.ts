import {PresentationIcon} from '@sanity/icons'

export default {
  type: 'document',
  name: 'project',
  title: 'Projects',
  icon: PresentationIcon,
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'metadata', title: 'Metadata'},
    {name: 'assets', title: 'Assets'},
    {name: 'seo', title: 'SEO'},
  ],
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
      group: 'content',
    },
    {
      type: 'array',
      name: 'content',
      title: 'Content',
      of: [{type: 'block'}],
      group: 'content',
    },
    {
      type: 'reference',
      name: 'client',
      title: 'Client',
      to: [{type: 'client'}],
      group: 'metadata',
    },
    {
      type: 'array',
      name: 'projects',
      title: 'Related Projects',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}],
        },
      ],
      group: 'metadata',
    },
    {
      type: 'array',
      name: 'services',
      title: 'Related Services',
      of: [
        {
          type: 'reference',
          to: [{type: 'service'}],
        },
      ],
      group: 'metadata',
    },
    {
      type: 'array',
      name: 'technology',
      title: 'Technology',
      of: [{type: 'string'}],
      group: 'metadata',
    },
    {
      type: 'array',
      name: 'desktop_assets',
      title: 'Desktop Assets',
      of: [{type: 'image'}],
      group: 'assets',
    },
    {
      type: 'array',
      name: 'mobile_assets',
      title: 'Mobile Assets',
      of: [{type: 'image'}],
      group: 'assets',
    },
    {
      type: 'seo',
      name: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
}
