import {defineField, defineType} from 'sanity'

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

export const link = defineType({
  type: 'object',
  name: 'link',
  title: 'Link',
  fields: [
    defineField({
      type: 'string',
      name: 'label',
      title: 'Label',
    }),
    defineField({
      type: 'string',
      name: 'variant',
      title: 'Variant',
      initialValue: 'reference',
      options: {
        list: [...variants],
      },
      validation: (rule) => {
        return rule.required()
      },
    }),
    defineField({
      type: 'reference',
      name: 'reference',
      title: 'Reference',
      to: [{type: 'project'}, {type: 'client'}, {type: 'skill'}, {type: 'page'}, {type: 'blog'}],
      hidden: ({parent}) => {
        return parent?.variant !== 'reference'
      },
    }),
    defineField({
      type: 'url',
      name: 'url',
      title: 'URL',
      hidden: ({parent}) => {
        return parent?.variant !== 'url'
      },
      validation: (rule) => {
        return rule.uri({allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel']})
      },
    }),
  ],
})
