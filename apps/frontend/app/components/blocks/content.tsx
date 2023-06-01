import type { FC } from "react";
import type { ContentBlockQuery } from "@portfolio/schemas";
import { CallToAction } from "~/app/components/cta";

interface Props {
  content: ContentBlockQuery;
}

function SimpleLayout({ content }: Props) {
  return (
    <div className="p-8 md:px-24">
      <div className="flex max-w-xl flex-col items-start space-y-8">
        <h3 className="text-2xl font-medium">{content.heading}</h3>
        {content.body?.map((item, index) => (
          <p key={index} className="text-gray-400">
            {item}
          </p>
        ))}
        <div className="flex flex-row space-x-4">
          {content.ctas?.map((item) => (
            <CallToAction key={item._key} label={item.label} link={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

function GridLayout({ content }: Props) {
  return (
    <div className="flex flex-col gap-16 p-8 md:px-24">
      <h3 className="max-w-xl text-3xl">{content.heading}</h3>
      <div className="grid grid-cols-3 gap-16">
        {content.body?.map((item, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <p className="font-medium">0{index + 1}</p>
            <p className="text-gray-400">{item}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row space-x-4">
        {content.ctas?.map((item) => (
          <CallToAction key={item._key} label={item.label} link={item.url} />
        ))}
      </div>
    </div>
  );
}

type Layouts = { [key in ContentBlockQuery["layout"]]: FC<Props> };

const layouts: Layouts = {
  simple: SimpleLayout,
  grid: GridLayout,
};

export function ContentBlock({ content }: Props) {
  const Layout = layouts[content.layout];
  return <Layout content={content} />;
}