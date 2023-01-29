import navigation from '@schemas/documents/navigation'
import configuration from '@schemas/documents/configuration'

import blog from '@schemas/documents/blog'
import page from '@schemas/documents/page'
import client from '@schemas/documents/client'
import project from '@schemas/documents/project'
import service from '@schemas/documents/service'

export const singletons = [navigation, configuration]

export default [page, project, blog, client, service, ...singletons]
