import type {CurrentUser, SanityDocument} from 'sanity'

import type {SchemaTypes} from '~/schemas'
import type {BlockTypes} from '~/schemas/objects/blocks'

export interface HiddenArgs {
  document: SanityDocument | undefined
  parent: any
  value: any
  currentUser: Omit<CurrentUser, 'role'> | null
}

export interface ObjectQuery {
  _type: SchemaTypes
}

export interface SlugQuery {
  current: string
}

export type ArrayQuery<Schema> = (ObjectQuery & {_key: string} & Schema)[]

export type ReferenceQuery<Schema> = ObjectQuery & {_ref: string} & Schema

export interface DocumentQuery extends ObjectQuery {
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
}

export interface BlockQuery extends ObjectQuery {
  _type: BlockTypes
}
