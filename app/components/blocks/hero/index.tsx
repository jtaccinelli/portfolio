import type { FC } from "react";

import type { HeroBlock as Content } from "@shared/sanity";

import { HeroSimpleLayout } from "@app/components/blocks/hero/simple";

interface Props {
  content: Content;
}

type Layouts = { [key in Content["layout"]]: FC<Props> };

const layouts: Layouts = {
  simple: HeroSimpleLayout,
};

export function HeroBlock({ content }: Props) {
  const Layout = layouts[content.layout];
  return <Layout content={content} />;
}
