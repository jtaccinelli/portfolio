import type { Builder } from "@cms/shared/sanity";

import { HeroBlock } from "@site/app/components/blocks/hero";
import { ContentBlock } from "@site/app/components/blocks/content";
import { CardsBlock } from "@site/app/components/blocks/cards";
import { FallbackBlock } from "@site/app/components/blocks/fallback";

interface Props {
  content: Builder;
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
