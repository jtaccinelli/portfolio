export default {
  type: 'array',
  name: 'links',
  title: 'Links',
  of: [
    {
      type: 'object',
      name: 'item',
      title: 'Item',
      fields: [
        {
          type: 'string',
          name: 'label',
          title: 'Label',
        },
        {
          type: 'link',
          name: 'link',
          title: 'Link',
        },
      ],
    },
  ],
}
