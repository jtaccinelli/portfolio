import type { FC } from "react";

import type { TickerBlockQuery } from "@portfolio/schemas";

import { TickerSubtleLayout } from "@root/app/components/blocks/ticker/subtle";
import { TickerHighlightLayout } from "@root/app/components/blocks/ticker/highlight";

interface Props {
  content: TickerBlockQuery;
}

type Layouts = { [key in TickerBlockQuery["layout"]]: FC<Props> };

const layouts: Layouts = {
  subtle: TickerSubtleLayout,
  highlight: TickerHighlightLayout,
};

export function TickerBlock({ content }: Props) {
  const Layout = layouts[content.layout];
  return <Layout content={content} />;
}
