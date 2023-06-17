import type { FC } from "react";
import type { ClientsBlockQuery } from "@portfolio/schemas";

interface Props {
  content: ClientsBlockQuery;
}

function SimpleLayout({ content }: Props) {
  return (
    <div className="grid-cols-12 p-8 md:px-24">
      <div className="flex max-w-xl flex-col items-start gap-8">
        <h3 className="text-2xl font-medium">{content.heading}</h3>
      </div>
      <div className="flex"></div>
    </div>
  );
}

type Layouts = { [key in ClientsBlockQuery["layout"]]: FC<Props> };

const layouts: Layouts = {
  simple: SimpleLayout,
};

export function ClientsBlock({ content }: Props) {
  const Layout = layouts[content.layout];
  return <Layout content={content} />;
}
