import type { ContentBlock as Content } from "@shared/sanity";

interface Props {
  content: Content;
}

export function ContentSimpleLayout({ content }: Props) {
  return (
    <div>
      <p>"Content"</p>
    </div>
  );
}
