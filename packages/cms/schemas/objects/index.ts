import {link} from '~/schemas/objects/link'
import {seo} from '~/schemas/objects/seo'
import {builder} from '~/schemas/objects/builder'
import {card} from '~/schemas/objects/card'

export const objects = [link, seo, builder, card] as const
export type ObjectTypes = (typeof objects)[number]['name']
