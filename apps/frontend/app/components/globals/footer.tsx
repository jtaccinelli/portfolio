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
    <div className="grid grid-cols-1 gap-16 bg-black px-8 py-24 pb-32 md:grid-cols-3 md:px-24">
      <div className="flex flex-col items-start space-y-2">
        <p className="font-medium text-white">Connect</p>
        {navigation.connect?.map((item) => (
          <Link key={item._key} to={item.url}>
            <p className="border-b-2 border-gray-700 transition-colors hover:border-accent-600">
              {item.label}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-start space-y-2">
        <p className="font-medium text-white">Boring Stuff</p>
        {footer.links?.map((item) => (
          <Link key={item._key} to={item.url}>
            <p className="border-b-2 border-gray-700 transition-colors hover:border-accent-600">
              {item.label}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex flex-col space-y-2">
        <p className="font-medium text-white">Acknowledgment</p>
        <p>{footer.acknowledgement}</p>
      </div>
    </div>
  );
}
