import navigation from '@schemas/documents/navigation'
import configuration from '@schemas/documents/configuration'

import blog from '@schemas/documents/blog'
import page from '@schemas/documents/page'

import client from '@schemas/documents/client'
import skill from '@schemas/documents/skill'
import project from '@schemas/documents/project'

export const singletons = [navigation, configuration]

export default [page, blog, client, skill, project, ...singletons]
