import type { FC } from "react";

import type { TickerBlockQuery } from "@portfolio/schemas";

interface Props {
  content: TickerBlockQuery;
}

function HighlightLayout({ content }: Props) {
  return (
    <div className="flex h-16 items-center gap-2 overflow-hidden bg-accent-600 p-4 text-white">
      {Array(2)
        .fill(Array(10).fill(content.content))
        .map((child, index) => (
          <p
            key={index}
            className="flex min-w-full flex-shrink-0 animate-scroll justify-around"
          >
            {child}
          </p>
        ))}
    </div>
  );
}

function SubtleLayout({ content }: Props) {
  return (
    <div className="flex h-16 items-center gap-2 overflow-hidden bg-gray-950/50 p-4 text-gray-500">
      {Array(2)
        .fill(Array(10).fill(content.content))
        .map((child, index) => (
          <p
            key={index}
            className="flex min-w-full flex-shrink-0 animate-scroll justify-around"
          >
            {child}
          </p>
        ))}
    </div>
  );
}

type Layouts = { [key in TickerBlockQuery["layout"]]: FC<Props> };

const layouts: Layouts = {
  subtle: SubtleLayout,
  highlight: HighlightLayout,
};

export function TickerBlock({ content }: Props) {
  const Layout = layouts[content.layout];
  return <Layout content={content} />;
}
