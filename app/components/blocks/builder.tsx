import type { Builder } from "@shared/sanity";

import { HeroBlock } from "@app/components/blocks/hero";
import { ContentBlock } from "@app/components/blocks/content";
import { FallbackBlock } from "@app/components/blocks/fallback";

interface Props {
  content: Builder;
}

export function ContentBuilder({ content }: Props) {
  return (
    <>
      {content.map((item) => {
        switch (item._type) {
          case "hero":
            return <HeroBlock key={item._key} content={item} />;
          case "content":
            return <ContentBlock key={item._key} content={item} />;
          default:
            return <FallbackBlock key="fallback" content={item} />;
        }
      })}
    </>
  );
}
