import {documents} from '~/schemas/documents'
import {objects} from '~/schemas/objects'
import {blocks} from '~/schemas/objects/blocks'

export const schemas = [...documents, ...objects, ...blocks] as const
export type SchemaTypes = (typeof schemas)[number]['name']
