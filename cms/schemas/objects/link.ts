import type {Rule} from 'sanity'
import type {HiddenArgs} from '@shared/sanity'

export interface LinkQuery extends Object {
  _type: typeof link.name,
  label: string;
  url: string;
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
        list: [
          {title: 'Reference', value: 'reference'},
          {title: 'URL', value: 'url'},
        ],
      },
      validation(rule: Rule): Rule {
        return rule.required()
      },
    },
    {
      type: 'reference',
      name: 'reference',
      title: 'Reference',
      to: [{type: 'project'}, {type: 'client'}, {type: 'skill'}, {type: 'page'}, {type: 'blog'}],
      hidden({parent}: {parent: any}) {
        return parent?.variant !== 'reference'
      },
    },
    {
      type: 'string',
      name: 'url',
      title: 'URL',
      hidden({parent}: HiddenArgs) {
        return parent?.variant !== 'url'
      },
      validation(rule: Rule) {
        return rule.uri({allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel']})
      },
    },
  ],
}
