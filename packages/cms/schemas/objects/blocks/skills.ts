import {ControlsIcon} from '@sanity/icons'

import type {ArrayQuery, BlockQuery, ReferenceQuery} from 'cms/shared/sanity'
import type {SkillDocumentQuery} from 'cms/schemas/documents/skill'

export interface SkillsBlockQuery extends BlockQuery {
  _type: typeof skills.name
  layout: (typeof layouts)[number]['value']
  heading: string
  items: ArrayQuery<ReferenceQuery<SkillDocumentQuery>>
}

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
