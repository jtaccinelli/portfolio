import type { HeroBlock as Content } from "@cms/shared/sanity";

import { TextSpinner } from "@site/app/components/text-spinner";
import { CallToAction } from "@site/app/components/cta";

interface Props {
  content: Content;
}

export function HeroGraphicLayout({ content }: Props) {
  return (
    <div className="relative flex flex-col items-start justify-center space-y-8 overflow-hidden py-48 px-8 md:px-24">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-100 opacity-25 md:scale-150">
        <TextSpinner text="Design + Development +" repeats={7} />
      </div>
      <h1 className="max-w-xl whitespace-pre-wrap text-3xl leading-relaxed">
        {content.body}
      </h1>
      {content.ctas?.map((item) => (
        <CallToAction key={item._key} label={item.label} link={item.url} />
      ))}
    </div>
  );
}
