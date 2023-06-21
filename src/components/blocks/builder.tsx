import type { BuilderQuery } from "@portfolio/schemas";

import { HeroBlock } from "@root/app/components/blocks/hero";
import { ContentBlock } from "@root/app/components/blocks/content";
import { CardsBlock } from "@root/app/components/blocks/cards";
import { FallbackBlock } from "@root/app/components/blocks/fallback";
import { TickerBlock } from "@root/app/components/blocks/ticker";

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
          case "ticker":
            return <TickerBlock key={item._key} content={item} />;
          default:
            return <FallbackBlock key="fallback" content={item} />;
        }
      })}
    </>
  );
}
