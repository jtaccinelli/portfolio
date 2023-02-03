import type { HeroBlock as Content } from "@shared/sanity";

interface Props {
  content: Content;
}

export function HeroSimpleLayout({ content }: Props) {
  return (
    <div className="flex flex-col items-start justify-center overflow-hidden py-48 px-8 md:px-24">
      <h1 className="max-w-xl whitespace-pre-wrap text-2xl leading-relaxed md:text-4xl">
        {content.body}
      </h1>
    </div>
  );
}
