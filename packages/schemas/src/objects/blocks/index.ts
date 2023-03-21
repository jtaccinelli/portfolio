import {content} from '~/objects/blocks/content'
import {hero} from '~/objects/blocks/hero'
import {cards} from '~/objects/blocks/cards'

import {clients} from '~/objects/blocks/clients'
import {projects} from '~/objects/blocks/projects'
import {skills} from '~/objects/blocks/skills'
import {blogs} from '~/objects/blocks/blogs'
import {ticker} from '~/objects/blocks/ticker'

export const blocks = [content, hero, cards, clients, projects, skills, blogs, ticker] as const
export type BlockTypes = (typeof blocks)[number]['name']
