import type { HeroBlock as Content } from "site/shared/sanity";
import { CallToAction } from "site/components/cta";

interface Props {
  content: Content;
}

export function HeroSimpleLayout({ content }: Props) {
  return (
    <div className="flex flex-col items-start justify-center space-y-8 overflow-hidden py-48 px-8 md:px-24">
      <h1 className="max-w-xl whitespace-pre-wrap text-3xl leading-relaxed">
        {content.body}
      </h1>
      {content.ctas?.map((item) => (
        <CallToAction key={item._key} label={item.label} link={item.url} />
      ))}
    </div>
  );
}
