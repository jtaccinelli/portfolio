import type { ClientsBlockQuery } from "@portfolio/schemas";

interface Props {
  content: ClientsBlockQuery;
}

export function ClientsSimpleLayout({ content }: Props) {
  return (
    <div className="p-8 md:px-24">
      <div className="flex max-w-xl flex-col items-start space-y-8">
        <h3 className="text-2xl font-medium">{content.heading}</h3>
      </div>
    </div>
  );
}
