import type { CardsBlockQuery } from "@portfolio/schemas";

import { CallToAction } from "~/app/components/cta";

interface Props {
  content: CardsBlockQuery;
}

export function CardsSimpleLayout({ content }: Props) {
  return (
    <div className="flex flex-col gap-16 p-8 md:px-24">
      <h3 className="text-2xl font-medium">{content.heading}</h3>
      <div className="grid grid-cols-1 gap-24 md:grid-cols-3">
        {content.cards?.map((item) => (
          <div key={item._key} className="flex flex-col items-start space-y-4">
            <p className="font-medium">{item.heading}</p>
            <p className="h-full pb-8 text-gray-400">{item.body}</p>
            <CallToAction label={item.cta.label} link={item.cta.url} />
          </div>
        ))}
      </div>
    </div>
  );
}
