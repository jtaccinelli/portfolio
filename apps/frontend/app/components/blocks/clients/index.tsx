import type { FC } from "react";

import type { ClientsBlockQuery } from "@portfolio/schemas";

import { ClientsSimpleLayout } from "~/app/components/blocks/clients/simple";

interface Props {
  content: ClientsBlockQuery;
}

type Layouts = { [key in ClientsBlockQuery["layout"]]: FC<Props> };

const layouts: Layouts = {
  simple: ClientsSimpleLayout,
};

export function ClientsBlock({ content }: Props) {
  const Layout = layouts[content.layout];
  return <Layout content={content} />;
}
