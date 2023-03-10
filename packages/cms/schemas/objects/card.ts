import type {ObjectQuery} from 'cms/shared/sanity'
import type {LinkQuery} from 'cms/schemas/objects/link'

export interface CardQuery extends ObjectQuery {
  _type: typeof card.name
  heading: string
  body: string
  cta: LinkQuery
}

export const card = {
  type: 'object',
  name: 'card',
  title: 'Name',
  fields: [
    {
      type: 'string',
      name: 'heading',
      title: 'Heading',
    },
    {
      type: 'text',
      name: 'body',
      title: 'Body',
      rows: 4,
    },
    {
      type: 'link',
      name: 'cta',
      title: 'CTA',
    },
  ],
} as const
