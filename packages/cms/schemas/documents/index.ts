import {navigation} from '@cms/schemas/documents/navigation'
import {configuration} from '@cms/schemas/documents/configuration'

import {blog} from '@cms/schemas/documents/blog'
import {page} from '@cms/schemas/documents/page'
import {client} from '@cms/schemas/documents/client'
import {skill} from '@cms/schemas/documents/skill'
import {project} from '@cms/schemas/documents/project'
import {footer} from '@cms/schemas/documents/footer'

export const singletons = [navigation, footer, configuration] as const
export type SingletonTypes = (typeof singletons)[number]['name']

export const documents = [page, blog, client, skill, project, ...singletons] as const
export type DocumentTypes = (typeof documents)[number]['name']
