import type { CardsBlock as Content } from "@shared/sanity";
import { CallToAction } from "@app/components/cta";

interface Props {
  content: Content;
}

export function CardsSimpleLayout({ content }: Props) {
  return (
    <div className="flex flex-col space-y-16 px-8 py-24 md:px-24">
      <h3 className="max-w-xl text-3xl md:text-3xl">{content.heading}</h3>
      <div className="grid grid-cols-1 gap-24 md:grid-cols-3">
        {content.cards?.map((item) => (
          <div key={item._key} className="flex flex-col items-start space-y-4">
            <p className="text-xl">{item.heading}</p>
            <p className="h-full pb-8">{item.body}</p>
            <CallToAction label={item.cta.label} link={item.cta.url} />
          </div>
        ))}
      </div>
    </div>
  );
}
