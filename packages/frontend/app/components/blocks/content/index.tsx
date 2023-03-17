import type { FC } from "react";

import { ContentBlockQuery } from "cms/schemas/objects/blocks/content";

import { ContentSimpleLayout } from "site/components/blocks/content/simple";
import { ContentGridLayout } from "site/components/blocks/content/grid";

interface Props {
  content: ContentBlockQuery;
}

type Layouts = { [key in ContentBlockQuery["layout"]]: FC<Props> };

const layouts: Layouts = {
  simple: ContentSimpleLayout,
  grid: ContentGridLayout,
};

export function ContentBlock({ content }: Props) {
  const Layout = layouts[content.layout];
  return <Layout content={content} />;
}
