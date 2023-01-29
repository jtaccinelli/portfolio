import {Rule} from 'sanity'
import {HiddenArgs} from '@shared/sanity'

export default {
  type: 'object',
  name: 'link',
  title: 'Link',
  fields: [
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
    },
    {
      type: 'reference',
      name: 'reference',
      title: 'Reference',
      to: [{type: 'navigation'}],
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
        return rule.uri({allowRelative: true})
      },
    },
  ],
}
