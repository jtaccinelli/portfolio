import {documents} from 'cms/schemas/documents'
import {objects} from 'cms/schemas/objects'
import {blocks} from 'cms/schemas/objects/blocks'

export const schemas = [...documents, ...objects, ...blocks] as const
export type SchemaTypes = (typeof schemas)[number]['name']
