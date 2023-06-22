import type { BuilderQuery } from "@portfolio/schemas";

interface Props {
  content: BuilderQuery[number];
}

export function FallbackBlock({ content }: Props) {
  return (
    <div>
      <p>
        This block type <pre>{content._type}</pre> is not supported.
      </p>
    </div>
  );
}
