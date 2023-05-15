import {ControlsIcon} from '@sanity/icons'

import type {ArrayQuery, BlockQuery, ReferenceQuery} from '~/shared/sanity'

import type {SkillDocumentQuery} from '~/documents/skill'
import {SKILL_DOCUMENT_FRAGMENT} from '~/documents/skill'

export interface SkillsBlockQuery extends BlockQuery {
  _type: typeof skills.name
  layout: (typeof layouts)[number]['value']
  heading: string
  items: ArrayQuery<ReferenceQuery<SkillDocumentQuery>>
}

export const SKILLS_BLOCK_FRAGMENT = `
  ...,
  items[]->{
    ${SKILL_DOCUMENT_FRAGMENT}
  }
`

const layouts = [{title: 'Simple', value: 'simple'}] as const

export const skills = {
  type: 'object',
  name: 'skills',
  title: 'Skills Block',
  icon: ControlsIcon,
  fields: [
    {
      type: 'string',
      name: 'layout',
      title: 'Layout',
      initialValue: 'simple',
      options: {
        list: layouts,
      },
    },
    {
      type: 'string',
      name: 'heading',
      title: 'Heading',
    },
    {
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [
        {
          type: 'reference',
          to: [{type: 'skill'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: (selection: any) => ({
      title: 'Skills Block',
      subtitle: selection.heading,
      media: ControlsIcon,
    }),
  },
} as const
