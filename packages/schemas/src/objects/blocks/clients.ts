import {defineArrayMember, defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

import type {ArrayQuery, BlockQuery, ReferenceQuery} from '~/shared/sanity'
import type {ClientDocumentQuery} from '~/documents/client'

export interface ClientsBlockQuery extends BlockQuery {
  _type: typeof clients.name
  layouts: (typeof layouts)[number]['value']
  heading: string
  items: ArrayQuery<ReferenceQuery<ClientDocumentQuery>>
}

const layouts = [{title: 'Simple', value: 'simple'}] as const

export const clients = defineType({
  type: 'object',
  name: 'clients',
  title: 'Clients Block',
  icon: UserIcon,
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
          to: [{type: 'client'}],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: (selection) => ({
      title: 'Client Block',
      subtitle: selection.heading,
      media: UserIcon,
    }),
  },
})
