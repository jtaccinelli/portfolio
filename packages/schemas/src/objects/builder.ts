import type {ArrayQuery} from '~/shared/sanity'

import type {HeroBlockQuery} from '~/objects/blocks/hero'
import type {ContentBlockQuery} from '~/objects/blocks/content'
import type {CardsBlockQuery} from '~/objects/blocks/cards'
import type {ClientsBlockQuery} from '~/objects/blocks/clients'
import type {SkillsBlockQuery} from '~/objects/blocks/skills'
import type {ProjectsBlockQuery} from '~/objects/blocks/projects'
import type {BlogsBlockQuery} from '~/objects/blocks/blogs'

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
