import {navigation} from '~/documents/navigation'
import {configuration} from '~/documents/configuration'

import {blog} from '~/documents/blog'
import {page} from '~/documents/page'
import {client} from '~/documents/client'
import {skill} from '~/documents/skill'
import {project} from '~/documents/project'
import {footer} from '~/documents/footer'

export const singletons = [navigation, footer, configuration] as const
export type SingletonTypes = (typeof singletons)[number]['name']

export const documents = [page, blog, client, skill, project, ...singletons] as const
export type DocumentTypes = (typeof documents)[number]['name']
