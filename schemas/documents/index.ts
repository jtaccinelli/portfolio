import navigation from '@schemas/documents/navigation'
import configuration from '@schemas/documents/configuration'

import blog from '@schemas/documents/blog'
import page from '@schemas/documents/page'
import client from '@schemas/documents/client'
import project from '@schemas/documents/project'
import service from '@schemas/documents/skill'
import experience from '@schemas/documents/experience'

export const singletons = [navigation, configuration]

export default [page, experience, blog, client, service, project, ...singletons]
