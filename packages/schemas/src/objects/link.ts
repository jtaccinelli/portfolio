import type {Rule} from 'sanity'

import type {ObjectQuery} from '~/shared/sanity'

export interface LinkQuery extends ObjectQuery {
  _type: typeof link.name
  label: string
  url: string
}

export const LINK_FRAGMENT = `
  label,
  "url": select(
    variant == "url" => url,
    reference->handle.current == "home" => "/",
    reference->_type == "page" => "/" + reference->handle.current,
    reference->_type == "client" => "/clients/" + reference->handle.current,
    reference->_type == "skill" => "/skills/" + reference->handle.current,
    reference->_type == "project" => "/projects/" + reference->handle.current,
    reference->_type == "blog" => "/blogs/" + reference->handle.current,
    "/"
  ),
`

const variants = [
  {title: 'Reference', value: 'reference'},
  {title: 'URL', value: 'url'},
] as const

export const link = {
  type: 'object',
  name: 'link',
  title: 'Link',
  fields: [
    {
      type: 'string',
      name: 'label',
      title: 'Label',
    },
    {
      type: 'string',
      name: 'variant',
      title: 'Variant',
      initialValue: 'reference',
      options: {
        list: variants,
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'reference',
      name: 'reference',
      title: 'Reference',
      to: [{type: 'project'}, {type: 'client'}, {type: 'skill'}, {type: 'page'}, {type: 'blog'}],
      hidden: ({parent}: any) => parent?.variant !== 'reference',
    },
    {
      type: 'url',
      name: 'url',
      title: 'URL',
      hidden: ({parent}: any) => parent?.variant !== 'url',
      validation: (rule: Rule) =>
        rule.uri({
          scheme: ['https', 'http', 'mailto'],
          allowRelative: true,
        }),
    },
  ],
} as const
