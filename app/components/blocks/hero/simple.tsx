import type { HeroBlock as Content } from "@shared/sanity";

import { TextSpinner } from "@app/components/text-spinner";

interface Props {
  content: Content;
}

export function HeroSimpleLayout({ content }: Props) {
  return (
    <div className="relative flex flex-col items-start justify-center overflow-hidden py-32 px-8 md:py-48 md:px-24">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-100 opacity-25 md:scale-150">
        <TextSpinner text="Design + Development +" repeats={7} />
      </div>
      <h1 className="max-w-xl whitespace-pre-wrap text-2xl leading-relaxed md:text-4xl">
        {content.body}
      </h1>
    </div>
  );
}
