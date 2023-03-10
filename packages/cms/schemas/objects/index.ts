import {link} from 'cms/schemas/objects/link'
import {seo} from 'cms/schemas/objects/seo'
import {builder} from 'cms/schemas/objects/builder'
import {card} from 'cms/schemas/objects/card'

export const objects = [link, seo, builder, card] as const
export type ObjectTypes = (typeof objects)[number]['name']
