import type { HeroBlockQuery } from "@portfolio/schemas";
import { CallToAction } from "~/app/components/cta";

interface Props {
  content: HeroBlockQuery;
}

export function HeroNarrowLayout({ content }: Props) {
  return (
    <div className="bg-gray-950 flex flex-col items-start justify-center space-y-8 overflow-hidden py-24 px-8 pt-36 md:px-24">
      {content.heading ? (
        <h1 className="font-medium text-gray-600">{content.heading}</h1>
      ) : null}
      <p className="max-w-xl whitespace-pre-wrap text-3xl font-medium leading-relaxed">
        {content.body}
      </p>
      {content.ctas?.map((item) => (
        <CallToAction key={item._key} label={item.label} link={item.url} />
      ))}
    </div>
  );
}
