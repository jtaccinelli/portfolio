import type { HeroBlock as Content } from "@shared/sanity";

interface Props {
  content: Content;
}

export function HeroSimpleLayout({ content }: Props) {
  return (
    <div>
      <p>"Hero"</p>
    </div>
  );
}
