import {defineField, defineType} from 'sanity'
import {ControlsIcon} from '@sanity/icons'

import type {DocumentQuery, SlugQuery} from '~/shared/sanity'
import type {SeoQuery} from '~/objects/seo'

export interface SkillDocumentQuery extends DocumentQuery {
  _type: typeof skill.name
  title: string
  handle: SlugQuery
  subtitle: string
  blurb: string
  seo: SeoQuery
}

export const skill = defineType({
  type: 'document',
  name: 'skill',
  title: 'Skills',
  icon: ControlsIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'slug',
      name: 'handle',
      title: 'Handle',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
      },
    }),
    defineField({
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
    }),
    defineField({
      type: 'text',
      name: 'blurb',
      title: 'Blurb',
      rows: 4,
    }),
    defineField({
      type: 'seo',
      name: 'seo',
      title: 'SEO',
    }),
  ],
})
