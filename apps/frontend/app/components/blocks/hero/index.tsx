import type { FC } from "react";

import type { HeroBlockQuery } from "@portfolio/schemas";

import { HeroSimpleLayout } from "~/app/components/blocks/hero/simple";
import { HeroGraphicLayout } from "~/app/components/blocks/hero/graphic";
import { HeroNarrowLayout } from "~/app/components/blocks/hero/narrow";

interface Props {
  content: HeroBlockQuery;
}

type Layouts = { [key in HeroBlockQuery["layout"]]: FC<Props> };

const layouts: Layouts = {
  simple: HeroSimpleLayout,
  graphic: HeroGraphicLayout,
  narrow: HeroNarrowLayout,
};

export function HeroBlock({ content }: Props) {
  const Layout = layouts[content.layout];
  return <Layout content={content} />;
}
