import type {ArrayQuery} from '@cms/shared/sanity'

import type {HeroBlockQuery} from '@cms/schemas/objects/blocks/hero'
import type {ContentBlockQuery} from '@cms/schemas/objects/blocks/content'
import type {CardsBlockQuery} from '@cms/schemas/objects/blocks/cards'
import type {ClientsBlockQuery} from '@cms/schemas/objects/blocks/clients'
import type {SkillsBlockQuery} from '@cms/schemas/objects/blocks/skills'
import type {ProjectsBlockQuery} from '@cms/schemas/objects/blocks/projects'
import type {BlogsBlockQuery} from '@cms/schemas/objects/blocks/blogs'

export type BuilderQuery = ArrayQuery<
  | HeroBlockQuery
  | ContentBlockQuery
  | CardsBlockQuery
  | ClientsBlockQuery
  | SkillsBlockQuery
  | ProjectsBlockQuery
  | BlogsBlockQuery
>

export const builder = {
  type: 'array',
  name: 'builder',
  title: 'Builder',
  of: [
    {type: 'hero'},
    {type: 'content'},
    {type: 'cards'},
    {type: 'clients'},
    {type: 'skills'},
    {type: 'projects'},
    {type: 'blogs'},
  ],
} as const
