import type { FC } from "react";

import type { HeroBlockQuery } from "@portfolio/schemas";

import { HeroSimpleLayout } from "@root/app/components/blocks/hero/simple";
import { HeroGraphicLayout } from "@root/app/components/blocks/hero/graphic";

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
