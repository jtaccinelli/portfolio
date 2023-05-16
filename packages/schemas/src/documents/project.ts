import type {Rule} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

import type {ArrayQuery, DocumentQuery, ReferenceQuery, SlugQuery} from '~/shared/sanity'

import type {ClientDocumentQuery} from '~/documents/client'
import type {SkillDocumentQuery} from '~/documents/skill'

import type {SeoQuery} from '~/objects/seo'
import {CLIENT_DOCUMENT_FRAGMENT} from '~/documents/client'
import {SEO_FRAGMENT} from '~/objects/seo'
import {SKILL_DOCUMENT_FRAGMENT} from '~/documents/skill'

export interface ProjectDocumentQuery extends DocumentQuery {
  _type: typeof project.name
  title: string
  handle: SlugQuery
  blurb: string
  client: ReferenceQuery<ClientDocumentQuery>
  skills: ArrayQuery<ReferenceQuery<SkillDocumentQuery>>
  completed_on: any // TODO: Date Data Type;
  live_site: string
  seo: SeoQuery
}

export const PROJECT_DOCUMENT_FRAGMENT = `
  ...,
  "handle": handle.current,
  client->{
    ${CLIENT_DOCUMENT_FRAGMENT}
  },
  skills[]->{
    ${SKILL_DOCUMENT_FRAGMENT}
  },
  seo {
    ${SEO_FRAGMENT}
  }
`

export const project = {
  type: 'document',
  name: 'project',
  title: 'Projects',
  icon: PresentationIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule: Rule) => rule.required(),
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
      validation: (rule: Rule) => rule.required(),
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
} as const
