import type { TickerBlockQuery } from "@portfolio/schemas";

interface Props {
  content: TickerBlockQuery;
}

export function TickerHighlightLayout({ content }: Props) {
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
