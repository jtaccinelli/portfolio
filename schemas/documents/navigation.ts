const item = {
  type: 'object',
  name: 'item',
  title: 'Item',
  fields: [
    {type: 'string', name: 'label', title: 'Label'},
    {type: 'link', name: 'link', title: 'Link'},
  ],
}

export default {
  type: 'document',
  name: 'navigation',
  title: 'Navigation',
  fields: [
    {type: 'string', name: 'title', title: 'Title'},
    {
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [item],
    },
    {
      type: 'array',
      name: 'connect',
      title: 'Connect',
      of: [item],
    },
  ],
}
