import type { HeroBlockQuery } from "@portfolio/schemas";
import { CallToAction } from "~/app/components/cta";

interface Props {
  content: HeroBlockQuery;
}

export function HeroNarrowLayout({ content }: Props) {
  return (
    <div className="flex flex-col items-start justify-center space-y-8 overflow-hidden bg-black py-24 px-8 pt-36 md:px-24">
      <h1 className="max-w-xl whitespace-pre-wrap text-3xl leading-relaxed">
        {content.body}
      </h1>
      {content.ctas?.map((item) => (
        <CallToAction key={item._key} label={item.label} link={item.url} />
      ))}
    </div>
  );
}