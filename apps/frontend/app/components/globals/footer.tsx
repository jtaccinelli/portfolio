import { Link, useLoaderData } from "@remix-run/react";

import type {
  FooterDocumentQuery,
  NavigationDocumentQuery,
} from "@portfolio/schemas";

export function Footer() {
  const data = useLoaderData();
  const footer = data.footer as FooterDocumentQuery;
  const navigation = data.navigation as NavigationDocumentQuery;

  return (
    <div className="bg-accent-800 grid grid-cols-1 gap-16 px-8 py-24 pb-32 md:px-24">
      <div className="flex flex-col gap-2">
        <p className="font-medium text-white">Acknowledgment</p>
        <p className="max-w-xl">{footer.acknowledgement}</p>
      </div>
      <div className="flex flex-col items-start gap-2">
        <p className="font-medium text-white">Connect</p>
        {navigation.connect?.map((item) => (
          <Link key={item._key} to={item.url}>
            <p className="border-accent-700 hover:border-accent-400 border-b-2 transition-colors">
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
