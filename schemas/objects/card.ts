export default {
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
}
