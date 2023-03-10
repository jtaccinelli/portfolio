import type { Builder } from "@cms/shared/sanity";

interface Props {
  content: Builder[0];
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
