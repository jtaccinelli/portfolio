import type {ArrayQuery, BlockQuery, ReferenceQuery} from '@shared/sanity'
import type {ProjectDocumentQuery} from '@schemas/documents/project'

import {PresentationIcon} from '@sanity/icons'

export interface ProjectsBlockQuery extends BlockQuery {
  _type: typeof projects.name
  layout: (typeof layouts)[number]['value']
  heading: string
  items: ArrayQuery<ReferenceQuery<ProjectDocumentQuery>>
}

const layouts = [{title: 'Simple', value: 'simple'}] as const

export const projects = {
  type: 'object',
  name: 'projects',
  title: 'Projects Block',
  icon: PresentationIcon,
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
          to: [{type: 'project'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: (selection: any) => ({
      title: 'Project Block',
      subtitle: selection.heading,
      media: PresentationIcon,
    }),
  },
}
