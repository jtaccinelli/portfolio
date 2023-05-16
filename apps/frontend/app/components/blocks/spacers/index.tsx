import clsx from "clsx";

import type { SpacerBlockQuery } from "@portfolio/schemas";

interface Props {
  content: SpacerBlockQuery;
}

export function SpacerBlock({ content }: Props) {
  return (
    <div
      className={clsx(
        content.height === "tall" && "h-12",
        content.height === "taller" && "h-24",
        content.height === "tallest" && "h-32"
      )}
    ></div>
  );
}
