import { Link, useLoaderData } from "@remix-run/react";

import type { NavigationDocument } from "@shared/sanity";
import { resolveSanityLink } from "@app/lib/sanity";

export function Navigation() {
  const data = useLoaderData();
  const navigation = data.navigation as NavigationDocument;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-row flex-wrap items-center justify-between overflow-visible p-4 md:py-16 md:px-8">
      <div className="mb-4 flex h-12 w-full flex-row items-center space-x-4 rounded-full bg-gray-100 px-4 shadow md:mb-0 md:w-auto md:px-6">
        <div className="flex w-full flex-row">
          {navigation.items.map((item) => (
            <Link key={item._key} to={resolveSanityLink(item.link)}>
              <p className="px-2 text-black">{item.label}</p>
            </Link>
          ))}
        </div>
        <div className="w-px self-stretch bg-gray-200" />
        <div className="text-black">Connect</div>
      </div>
      <p className="ml-8 text-white md:order-first">{navigation.heading}</p>
      <p className="mr-8 text-white">{navigation.subheading}</p>
    </div>
  );
}
