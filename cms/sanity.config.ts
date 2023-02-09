import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {FolderIcon} from '@sanity/icons'
import {visionTool} from '@sanity/vision'

import {schemas} from '@schemas'
import {singletons} from '@schemas/documents'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: '10uz7hfe',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (builder) =>
        builder
          .list()
          .title('Content')
          .items([
            ...builder.documentTypeListItems().filter((item) => {
              return !singletons.some((singleton) => {
                return singleton.name === item.getId()
              })
            }),
            builder.divider(),
            ...singletons.map((singleton) =>
              builder
                .listItem()
                .title(singleton.title)
                .icon(singleton?.icon ?? FolderIcon)
                .child(
                  builder
                    .document()
                    .schemaType(singleton.name)
                    .documentId(singleton.name)
                    .title(singleton.title)
                )
            ),
            builder.divider(),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [...schemas],
    templates(templates) {
      return templates.filter((template) => {
        return !singletons.some((singleton) => {
          return singleton.name === template.schemaType
        })
      })
    },
  },
  document: {
    actions(input, context) {
      const isSingleton = singletons.some((singleton) => {
        return singleton.name === context.schemaType
      })

      if (!isSingleton) return input
      return input.filter((props) => {
        console.log(props.action)
        return ['publish', 'discardChanges', 'restore'].includes(props?.action ?? '')
      })
    },
  },
})
