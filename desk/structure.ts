import {StructureResolver} from 'sanity/lib/exports/desk'

export const structure: StructureResolver = (sanity) =>
  sanity
    .list()
    .title('Content')
    .items([
      sanity
        .listItem()
        .title('Navigation')
        .child(sanity.document().schemaType('navigation').documentId('navigation')),
      ...sanity
        .documentTypeListItems()
        .filter((item) => !['navigation'].includes(item.getId() ?? '')),
    ])
