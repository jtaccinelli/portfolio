import type {Rule} from 'sanity'
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

export const skill = {
  type: 'document',
  name: 'skill',
  title: 'Skills',
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
      validation: (rule: Rule) => rule.required(),
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
      type: 'seo',
      name: 'seo',
      title: 'SEO',
    },
  ],
} as const
