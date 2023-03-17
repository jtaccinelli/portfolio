import type { FC } from "react";

import { HeroBlockQuery } from "cms/schemas/objects/blocks/hero";

import { HeroSimpleLayout } from "site/components/blocks/hero/simple";
import { HeroGraphicLayout } from "site/components/blocks/hero/graphic";

interface Props {
  content: HeroBlockQuery;
}

type Layouts = { [key in HeroBlockQuery["layout"]]: FC<Props> };

const layouts: Layouts = {
  simple: HeroSimpleLayout,
  graphic: HeroGraphicLayout,
};

export function HeroBlock({ content }: Props) {
  const Layout = layouts[content.layout];
  return <Layout content={content} />;
}
