import type { FC } from "react";

import type { HeroBlock as Content } from "@shared/sanity";

import { HeroSimpleLayout } from "@app/components/blocks/hero/simple";
import { HeroGraphicLayout } from "@app/components/blocks/hero/graphic";

interface Props {
  content: Content;
}

type Layouts = { [key in Content["layout"]]: FC<Props> };

const layouts: Layouts = {
  simple: HeroSimpleLayout,
  graphic: HeroGraphicLayout,
};

export function HeroBlock({ content }: Props) {
  const Layout = layouts[content.layout];
  return <Layout content={content} />;
}
