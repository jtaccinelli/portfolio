import { Link, useLoaderData } from "@remix-run/react";
import { resolveSanityLink } from "@app/lib/sanity";
import type { NavigationDocument } from "@shared/sanity";
import type { CSSProperties } from "react";

export function Navigation() {
  const data = useLoaderData();
  const navigation = data.navigation as NavigationDocument;

  const style = {
    "--item-count": navigation.items.length,
  } as CSSProperties;

  return (
    <div className="fixed bottom-0 left-0 right-0 flex flex-row items-center justify-between p-16">
      <p className="text-sm font-medium invert">{navigation.heading}</p>
      <div className="flex h-12 flex-row items-center space-x-4 rounded-full bg-gray-100 px-6">
        <div className="flex flex-row">
          {navigation.items.map((item) => (
            <Link key={item._key} to={resolveSanityLink(item.link)}>
              <div className="px-2">{item.label}</div>
            </Link>
          ))}
          <div style={style} className="w"></div>
        </div>
        <div className="w-px self-stretch bg-gray-200" />
        <div className="">Connect</div>
      </div>
      <p className="text-sm font-medium invert">{navigation.subheading}</p>
    </div>
  );
}
