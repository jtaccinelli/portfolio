import {ArrowRightIcon} from '@sanity/icons'
import {Rule} from 'sanity'
import {BlockQuery} from '~/shared/sanity'

export interface TickerBlockQuery extends BlockQuery {
  _type: typeof ticker.name
  layout: (typeof layouts)[number]['value']
  content: string
}

export const TICKER_BLOCK_FRAGMENT = `
  ...
`

const layouts = [
  {title: 'Subtle', value: 'subtle'},
  {title: 'Highlight', value: 'highlight'},
] as const

export const ticker = {
  type: 'object',
  name: 'ticker',
  title: 'Ticker Block',
  icon: ArrowRightIcon,
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
      name: 'content',
      title: 'Content',
      validation: (rule: Rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: (selection: any) => ({
      title: 'Ticker Block',
      subtitle: selection.content,
      media: ArrowRightIcon,
    }),
  },
} as const
