import {ExpandIcon} from '@sanity/icons'

import {BlockQuery} from '~/shared/sanity'

export interface SpacerBlockQuery extends BlockQuery {
  _type: typeof spacer.name
  heights: (typeof heights)[number]['value']
}

export const SPACER_BLOCK_FRAGMENT = `
  ...
`

const heights = [
  {title: 'Tall', value: 'tall'},
  {title: 'Taller', value: 'taller'},
  {title: 'Tallest', value: 'tallest'},
] as const

export const spacer = {
  type: 'object',
  name: 'spacer',
  title: 'Spacer Block',
  icon: ExpandIcon,
  fields: [
    {
      type: 'string',
      name: 'height',
      title: 'Height',
      initialValue: 'tall',
      options: {
        list: heights,
      },
    },
  ],
  preview: {
    select: {
      height: 'height',
    },
    prepare: (selection: any) => ({
      title: 'Spacer Block',
      subtitle: heights.find((height) => height.value === selection.height)?.title ?? 'Tall',
      media: ExpandIcon,
    }),
  },
} as const
