import blog from '@schemas/documents/blog'

import navigation from '@schemas/documents/navigation'
import configuration from '@schemas/documents/configuration'

export const singletons = [navigation, configuration]

export default [blog, ...singletons]
