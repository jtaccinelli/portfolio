import { ContentBlockQuery } from "cms/schemas/objects/blocks/content";

import { CallToAction } from "site/components/cta";

interface Props {
  content: ContentBlockQuery;
}

export function ContentSimpleLayout({ content }: Props) {
  return (
    <div className="px-8 py-24 md:px-24">
      <div className="flex max-w-xl flex-col items-start space-y-8">
        <h3 className="text-3xl">{content.heading}</h3>
        {content.body?.map((item, index) => (
          <p key={index}>{item}</p>
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
