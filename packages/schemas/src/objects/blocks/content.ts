import {BlockContentIcon} from '@sanity/icons'

import type {ArrayQuery, BlockQuery} from '~/shared/sanity'

import type {LinkQuery} from '~/objects/link'
import {LINK_FRAGMENT} from '~/objects/link'

export interface ContentBlockQuery extends BlockQuery {
  _type: typeof content.name
  layout: (typeof layouts)[number]['value']
  heading: string
  body: ArrayQuery<string>
  ctas: ArrayQuery<LinkQuery>
}

export const CONTENT_BLOCK_FRAGMENT = `
  ...,
  ctas[] {
    _key,
    ${LINK_FRAGMENT}
  }
`

const layouts = [
  {title: 'Simple', value: 'simple'},
  {title: 'Grid', value: 'grid'},
  {title: 'Columns', value: 'columns'},
] as const

export const content = {
  type: 'object',
  name: 'content',
  title: 'Content Block',
  icon: BlockContentIcon,
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
      name: 'body',
      title: 'Body',
      of: [{type: 'text', rows: 4}],
    },
    {
      type: 'array',
      name: 'ctas',
      title: 'Calls to Action',
      of: [{type: 'link'}],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: (selection: any) => ({
      title: 'Content Block',
      subtitle: selection.heading,
      media: BlockContentIcon,
    }),
  },
} as const
