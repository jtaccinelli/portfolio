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
          {title: 'External', value: 'external'},
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
      hidden({parent}: {parent: any}) {
        return parent?.variant !== 'external'
      },
    },
  ],
}
