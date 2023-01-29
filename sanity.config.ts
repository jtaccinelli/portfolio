import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

import navigation from '@schemas/documents/navigation'
import configuration from '@schemas/documents/configuration'
import {schemaTypes} from './schemas'
import {FolderIcon} from '@sanity/icons'

export const singletons = [navigation, configuration]

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: '10uz7hfe',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (sanity) =>
        sanity
          .list()
          .title('Content')
          .items([
            ...singletons.map((singleton) =>
              sanity
                .listItem()
                .title(singleton.title)
                .icon(singleton?.icon ?? FolderIcon)
                .child(
                  sanity
                    .document()
                    .schemaType(singleton.name)
                    .documentId(singleton.name)
                    .title(singleton.title)
                )
            ),
            ...sanity.documentTypeListItems().filter((item) => {
              return !singletons.some((singleton) => {
                return singleton.name === item.getId()
              })
            }),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates(templates) {
      return templates.filter((template) => {
        return singletons.some((singleton) => {
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
        return ['publish', 'discardChanges', 'restore'].includes(props?.action ?? '')
      })
    },
  },
})
