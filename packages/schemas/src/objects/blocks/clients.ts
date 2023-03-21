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

export const clients = {
  type: 'object',
  name: 'clients',
  title: 'Clients Block',
  icon: UserIcon,
  fields: [
    {
      type: 'string',
      name: 'layout',
      title: 'Layout',
      initialValue: layouts[0].value,
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
          to: [{type: 'client'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: (selection: any) => ({
      title: 'Client Block',
      subtitle: selection.heading,
      media: UserIcon,
    }),
  },
} as const