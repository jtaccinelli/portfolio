import type {ArrayQuery} from '~/shared/sanity'

import type {HeroBlockQuery} from '~/objects/blocks/hero'
import {HERO_BLOCK_FRAGMENT} from '~/objects/blocks/hero'

import type {ContentBlockQuery} from '~/objects/blocks/content'
import {CONTENT_BLOCK_FRAGMENT} from '~/objects/blocks/content'

import type {CardsBlockQuery} from '~/objects/blocks/cards'
import {CARDS_BLOCK_FRAGMENT} from '~/objects/blocks/cards'

import type {ClientsBlockQuery} from '~/objects/blocks/clients'
import {CLIENTS_BLOCK_FRAGMENT} from '~/objects/blocks/clients'

import type {SkillsBlockQuery} from '~/objects/blocks/skills'
import {SKILLS_BLOCK_FRAGMENT} from '~/objects/blocks/skills'

import type {ProjectsBlockQuery} from '~/objects/blocks/projects'
import {PROJECTS_BLOCK_FRAGMENT} from '~/objects/blocks/projects'

import type {BlogsBlockQuery} from '~/objects/blocks/blogs'
import {BLOGS_BLOCK_FRAGMENT} from '~/objects/blocks/blogs'

import type {TickerBlockQuery} from '~/objects/blocks/ticker'
import {TICKER_BLOCK_FRAGMENT} from '~/objects/blocks/ticker'

export type BuilderQuery = ArrayQuery<
  | HeroBlockQuery
  | ContentBlockQuery
  | CardsBlockQuery
  | ClientsBlockQuery
  | SkillsBlockQuery
  | ProjectsBlockQuery
  | BlogsBlockQuery
  | TickerBlockQuery
>

export const BUILDER_FRAGMENT = `
  ...,
  _type == "hero" => {
    ${HERO_BLOCK_FRAGMENT}
  },
  _type == "content" => {
    ${CONTENT_BLOCK_FRAGMENT}
  },
  _type == "cards" => {
    ${CARDS_BLOCK_FRAGMENT}
  },
  _type == "clients" => {
    ${CLIENTS_BLOCK_FRAGMENT}
  },
  _type == "skills" => {
    ${SKILLS_BLOCK_FRAGMENT}
  },
  _type == "projects" => {
    ${PROJECTS_BLOCK_FRAGMENT}
  },
  _type == "blogs" => {
    ${BLOGS_BLOCK_FRAGMENT}
  },
  _type == "ticker" => {
    ${TICKER_BLOCK_FRAGMENT}
  }
`

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
    {type: 'ticker'},
  ],
} as const
