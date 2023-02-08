import type { FC } from "react";

import type { ContentBlock as Content } from "@shared/sanity";

import { ContentSimpleLayout } from "@app/components/blocks/content/simple";
import { ContentGridLayout } from "@app/components/blocks/content/grid";

interface Props {
  content: Content;
}

type Layouts = { [key in Content["layout"]]: FC<Props> };

const layouts: Layouts = {
  simple: ContentSimpleLayout,
  grid: ContentGridLayout,
};

export function ContentBlock({ content }: Props) {
  const Layout = layouts[content.layout];
  return <Layout content={content} />;
}
