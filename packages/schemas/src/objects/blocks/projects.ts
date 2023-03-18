import {defineArrayMember, defineField, defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

import type {ArrayQuery, BlockQuery, ReferenceQuery} from '~/shared/sanity'
import type {ProjectDocumentQuery} from '~/documents/project'

export interface ProjectsBlockQuery extends BlockQuery {
  _type: typeof projects.name
  layout: (typeof layouts)[number]['value']
  heading: string
  items: ArrayQuery<ReferenceQuery<ProjectDocumentQuery>>
}

const layouts = [{title: 'Simple', value: 'simple'}] as const

export const projects = defineType({
  type: 'object',
  name: 'projects',
  title: 'Projects Block',
  icon: PresentationIcon,
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
          to: [{type: 'project'}],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: (selection) => ({
      title: 'Project Block',
      subtitle: selection.heading,
      media: PresentationIcon,
    }),
  },
})
