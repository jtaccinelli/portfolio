export default {
  type: 'document',
  name: 'configuration',
  title: 'Configuration',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      hidden: true,
      initialValue: 'Configuration',
    },
    {
      type: 'seo',
      name: 'defaultSeo',
      title: 'Default SEO',
    },
  ],
}
