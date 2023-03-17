import { BuilderQuery } from "cms/schemas/objects/builder";

import { HeroBlock } from "site/components/blocks/hero";
import { ContentBlock } from "site/components/blocks/content";
import { CardsBlock } from "site/components/blocks/cards";
import { FallbackBlock } from "site/components/blocks/fallback";

interface Props {
  content: BuilderQuery;
}

export function ContentBuilder({ content }: Props) {
  return (
    <>
      {content?.map((item) => {
        switch (item._type) {
          case "hero":
            return <HeroBlock key={item._key} content={item} />;
          case "content":
            return <ContentBlock key={item._key} content={item} />;
          case "cards":
            return <CardsBlock key={item._key} content={item} />;
          default:
            return <FallbackBlock key="fallback" content={item} />;
        }
      })}
    </>
  );
}
