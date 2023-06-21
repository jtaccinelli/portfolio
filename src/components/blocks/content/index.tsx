import type { FC } from "react";

import { ContentBlockQuery } from "@portfolio/schemas";

import { ContentSimpleLayout } from "@root/app/components/blocks/content/simple";
import { ContentGridLayout } from "@root/app/components/blocks/content/grid";

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
