import type { FC } from "react";

import type { ContentBlock as Content } from "@shared/sanity";

import { ContentSimpleLayout } from "@app/components/blocks/content/simple";

interface Props {
  content: Content;
}

type Layouts = { [key in Content["layout"]]: FC<Props> };

const layouts: Layouts = {
  simple: ContentSimpleLayout,
};

export function ContentBlock({ content }: Props) {
  const Layout = layouts[content.layout];
  return <Layout content={content} />;
}
