import {defineArrayMember, defineField, defineType} from 'sanity'
import {ControlsIcon} from '@sanity/icons'

import type {ArrayQuery, BlockQuery, ReferenceQuery} from '~/shared/sanity'
import type {SkillDocumentQuery} from '~/documents/skill'

export interface SkillsBlockQuery extends BlockQuery {
  _type: typeof skills.name
  layout: (typeof layouts)[number]['value']
  heading: string
  items: ArrayQuery<ReferenceQuery<SkillDocumentQuery>>
}

const layouts = [{title: 'Simple', value: 'simple'}] as const

export const skills = defineType({
  type: 'object',
  name: 'skills',
  title: 'Skills Block',
  icon: ControlsIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'layout',
      title: 'Layout',
      initialValue: 'simple',
      options: {
        list: [...layouts],
      },
    }),
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
    }),
    defineField({
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'skill'}],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: (selection) => ({
      title: 'Skills Block',
      subtitle: selection.heading,
      media: ControlsIcon,
    }),
  },
})
