import {Rule} from 'sanity'

export default {
  type: 'object',
  name: 'seo',
  title: 'SEO',
  fields: [
    {type: 'string', name: 'title', title: 'Title'},
    {
      type: 'text',
      name: 'description',
      title: 'Description',
      rows: 4,
      validation: (rule: Rule) =>
        rule.max(150).warning(`A description should not be longer than 150 characters`),
    },
    {type: 'image', name: 'thumbnail', title: 'Thumbnail'},
  ],
}
