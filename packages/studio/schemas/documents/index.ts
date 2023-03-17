import {navigation} from '~/schemas/documents/navigation'
import {configuration} from '~/schemas/documents/configuration'

import {blog} from '~/schemas/documents/blog'
import {page} from '~/schemas/documents/page'
import {client} from '~/schemas/documents/client'
import {skill} from '~/schemas/documents/skill'
import {project} from '~/schemas/documents/project'
import {footer} from '~/schemas/documents/footer'

export const singletons = [navigation, footer, configuration] as const
export type SingletonTypes = (typeof singletons)[number]['name']

export const documents = [page, blog, client, skill, project, ...singletons] as const
export type DocumentTypes = (typeof documents)[number]['name']
