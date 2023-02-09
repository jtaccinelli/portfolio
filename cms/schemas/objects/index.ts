import { link } from '@schemas/objects/link'
import seo from '@schemas/objects/seo'
import builder from '@schemas/objects/builder'
import links from '@schemas/objects/links'
import card from '@schemas/objects/card'

export const objects = [link, links, seo, builder, card] as const;
export type ObjectTypes = typeof objects[number]['name'];
