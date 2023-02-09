import type {ArrayQuery} from '@shared/sanity'

import type {HeroBlockQuery} from '@schemas/objects/blocks/hero'
import type {ContentBlockQuery} from '@schemas/objects/blocks/content'
import type {CardsBlockQuery} from '@schemas/objects/blocks/cards'
import type {ClientsBlockQuery} from '@schemas/objects/blocks/clients'
import type {SkillsBlockQuery} from '@schemas/objects/blocks/skills'
import type {ProjectsBlockQuery} from '@schemas/objects/blocks/projects'
import type {BlogsBlockQuery} from '@schemas/objects/blocks/blogs'

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
}
