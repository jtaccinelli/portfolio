import type { FC } from "react";

import type { CardsBlock as Content } from "@cms/shared/sanity";

import { CardsSimpleLayout } from "@site/app/components/blocks/cards/simple";

interface Props {
  content: Content;
}

type Layouts = { [key in Content["layout"]]: FC<Props> };

const layouts: Layouts = {
  simple: CardsSimpleLayout,
};

export function CardsBlock({ content }: Props) {
  const Layout = layouts[content.layout];
  return <Layout content={content} />;
}
