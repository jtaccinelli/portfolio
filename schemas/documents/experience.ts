import {DocumentTextIcon} from '@sanity/icons'

export default {
  type: 'document',
  name: 'experience',
  title: 'Experience',
  icon: DocumentTextIcon,
  fieldsets: [{name: 'duration', options: {columns: 2}}],
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
    },
    {
      type: 'text',
      name: 'blurb',
      title: 'Blurb',
      rows: 4,
    },
    {
      type: 'date',
      name: 'start',
      title: 'Start Date',
      required: true,
      fieldset: 'duration',
    },
    {
      type: 'date',
      name: 'end',
      title: 'End Date',
      fieldset: 'duration',
    },
    {
      type: 'reference',
      name: 'client',
      title: 'Client',
      to: [{type: 'client'}],
    },
    {
      type: 'array',
      name: 'projects',
      title: 'Projects',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    },
    {
      type: 'array',
      name: 'skills',
      title: 'Skills',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    },
    {
      type: 'seo',
      name: 'seo',
      title: 'SEO',
    },
  ],
}
