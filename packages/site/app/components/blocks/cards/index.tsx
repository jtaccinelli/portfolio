import type { FC } from "react";

import type { CardsBlockQuery } from "cms/schemas/objects/blocks/cards";

import { CardsSimpleLayout } from "site/components/blocks/cards/simple";

interface Props {
  content: CardsBlockQuery;
}

type Layouts = {
  [key in CardsBlockQuery["layout"]]: FC<Props>;
};

const layouts: Layouts = {
  simple: CardsSimpleLayout,
};

export function CardsBlock({ content }: Props) {
  const Layout = layouts[content.layout];
  return <Layout content={content} />;
}
