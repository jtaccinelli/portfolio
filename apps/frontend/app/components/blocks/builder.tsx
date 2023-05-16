import type { BuilderQuery } from "@portfolio/schemas";

import { HeroBlock } from "~/app/components/blocks/hero";
import { ContentBlock } from "~/app/components/blocks/content";
import { CardsBlock } from "~/app/components/blocks/cards";
import { FallbackBlock } from "~/app/components/blocks/fallback";
import { TickerBlock } from "~/app/components/blocks/ticker";
import { ClientsBlock } from "~/app/components/blocks/clients";
import { SpacerBlock } from "~/app/components/blocks/spacers";

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
          case "spacer":
            return <SpacerBlock key={item._key} content={item} />;
          case "clients":
            return <ClientsBlock key={item._key} content={item} />;
          case "projects":
          case "skills":
          case "blogs":
          default:
            return <FallbackBlock key={item._key} content={item} />;
        }
      })}
    </>
  );
}
