import type { ClientsBlockQuery } from "@portfolio/schemas";

import { CallToAction } from "~/app/components/cta";

interface Props {
  content: ClientsBlockQuery;
}

export function ClientsSimpleLayout({ content }: Props) {
  return (
    <div className="px-8 py-24 md:px-24">
      <div className="flex max-w-xl flex-col items-start space-y-8">
        <h3 className="text-3xl">{content.heading}</h3>
      </div>
    </div>
  );
}
