import type { TickerBlockQuery } from "@portfolio/schemas";

interface Props {
  content: TickerBlockQuery;
}

export function TickerSubtleLayout({ content }: Props) {
  return (
    <div className="flex gap-2 overflow-hidden bg-gray-900 p-4 text-gray-500">
      {Array(2).fill(
        <p className="flex min-w-full flex-shrink-0 animate-scroll justify-around gap-1">
          {Array(10).fill(<p>{content.content}</p>)}
        </p>
      )}
    </div>
  );
}
