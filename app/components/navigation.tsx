import { Link, useLoaderData } from "@remix-run/react";

import type { NavigationDocument } from "@shared/sanity";
import { resolveSanityLink } from "@app/lib/sanity";

export function Navigation() {
  const data = useLoaderData();
  const navigation = data.navigation as NavigationDocument;

  return (
    <div className="fixed top-0 left-0 right-0 flex flex-row items-center justify-between p-16">
      <p className="text-sm text-white">{navigation.heading}</p>
      <div className="flex h-12 flex-row items-center space-x-4 rounded-full bg-gray-100 px-6 shadow">
        <div className="flex flex-row">
          {navigation.items.map((item) => (
            <Link key={item._key} to={resolveSanityLink(item.link)}>
              <p className="px-2 text-black">{item.label}</p>
            </Link>
          ))}
        </div>
        <div className="w-px self-stretch bg-gray-200" />
        <div className="text-black">Connect</div>
      </div>
      <p className="text-sm text-white">{navigation.subheading}</p>
    </div>
  );
}
