import {defineArrayMember, defineField, defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

import type {ArrayQuery, DocumentQuery, ReferenceQuery, SlugQuery} from '~/shared/sanity'

import type {ClientDocumentQuery} from '~/documents/client'
import type {SkillDocumentQuery} from '~/documents/skill'

import type {SeoQuery} from '~/objects/seo'

export interface ProjectDocumentQuery extends DocumentQuery {
  _type: typeof project.name
  title: string
  handle: SlugQuery
  subtitle: string
  blurb: string
  client: ReferenceQuery<ClientDocumentQuery>
  skills: ArrayQuery<ReferenceQuery<SkillDocumentQuery>>
  completed_on: any // TODO: Date Data Type;
  live_site: string
  seo: SeoQuery
}

export const project = defineType({
  type: 'document',
  name: 'project',
  title: 'Projects',
  icon: PresentationIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
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
      type: 'reference',
      name: 'client',
      title: 'Client',
      to: [{type: 'client'}],
    }),
    defineField({
      type: 'array',
      name: 'skills',
      title: 'Skills',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'skill'}],
        }),
      ],
    }),
    defineField({
      type: 'date',
      name: 'completed_on',
      title: 'Date Completed',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'url',
      name: 'live_site',
      title: 'Live Site',
    }),
    defineField({
      type: 'seo',
      name: 'seo',
      title: 'SEO',
    }),
  ],
})
