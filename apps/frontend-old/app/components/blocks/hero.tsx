import type { FC } from "react";
import type { HeroBlockQuery } from "@portfolio/schemas";

import { CallToAction } from "~/app/components/cta";
import { TextSpinner } from "~/app/components/text-spinner";

interface Props {
  content: HeroBlockQuery;
}

function SimpleLayout({ content }: Props) {
  return (
    <div className="flex flex-col items-start justify-center gap-8 overflow-hidden border-b border-gray-800 bg-gradient-to-bl from-gray-900 to-gray-950/50 px-8 py-48 md:px-24">
      {content.heading ? (
        <h1 className="text-gray-600">{content.heading}</h1>
      ) : null}
      <p className="max-w-xl whitespace-pre-wrap text-3xl leading-relaxed">
        {content.body}
      </p>
      {content.ctas?.map((item) => (
        <CallToAction key={item._key} label={item.label} link={item.url} />
      ))}
    </div>
  );
}

function GraphicLayout({ content }: Props) {
  return (
    <div className="relative flex flex-col items-start justify-center gap-8 overflow-hidden border-b border-gray-800 bg-gradient-to-bl from-gray-900 to-gray-950/50 px-8 py-48 md:px-24">
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 translate-x-1/4 translate-y-1/4 scale-100 opacity-25 md:scale-150">
        <TextSpinner
          text="Design + Development +"
          repeats={7}
          className="opacity-25"
        />
      </div>
      {content.heading ? (
        <h1 className="text-gray-600">{content.heading}</h1>
      ) : null}
      <p className="max-w-xl whitespace-pre-wrap text-3xl leading-relaxed">
        {content.body}
      </p>
      {content.ctas?.map((item) => (
        <CallToAction key={item._key} label={item.label} link={item.url} />
      ))}
    </div>
  );
}

function NarrowLayout({ content }: Props) {
  return (
    <div className="flex flex-col items-start justify-center gap-8 overflow-hidden border-b border-gray-800 bg-gradient-to-bl from-gray-900 to-gray-950/50 px-8 py-24 pt-36 md:px-24">
      {content.heading ? (
        <h1 className="text-gray-600">{content.heading}</h1>
      ) : null}
      <p className="max-w-xl whitespace-pre-wrap text-3xl leading-relaxed">
        {content.body}
      </p>
      {content.ctas?.map((item) => (
        <CallToAction key={item._key} label={item.label} link={item.url} />
      ))}
    </div>
  );
}

type Layouts = { [key in HeroBlockQuery["layout"]]: FC<Props> };

const layouts: Layouts = {
  simple: SimpleLayout,
  graphic: GraphicLayout,
  narrow: NarrowLayout,
};

export function HeroBlock({ content }: Props) {
  const Layout = layouts[content.layout];
  return <Layout content={content} />;
}
