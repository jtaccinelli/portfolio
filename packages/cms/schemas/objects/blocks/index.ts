import {content} from 'cms/schemas/objects/blocks/content'
import {hero} from 'cms/schemas/objects/blocks/hero'
import {cards} from 'cms/schemas/objects/blocks/cards'

import {clients} from 'cms/schemas/objects/blocks/clients'
import {projects} from 'cms/schemas/objects/blocks/projects'
import {skills} from 'cms/schemas/objects/blocks/skills'
import {blogs} from 'cms/schemas/objects/blocks/blogs'

export const blocks = [content, hero, cards, clients, projects, skills, blogs] as const
export type BlockTypes = (typeof blocks)[number]['name']
