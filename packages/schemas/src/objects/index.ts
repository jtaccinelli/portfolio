import {link} from '~/objects/link'
import {seo} from '~/objects/seo'
import {builder} from '~/objects/builder'
import {card} from '~/objects/card'

export const objects = [link, seo, builder, card] as const
export type ObjectTypes = (typeof objects)[number]['name']
