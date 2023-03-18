import {documents} from '~/documents'
import {objects} from '~/objects'
import {blocks} from '~/objects/blocks'

export const schemas = [...documents, ...objects, ...blocks] as const
export type SchemaTypes = (typeof schemas)[number]['name']
