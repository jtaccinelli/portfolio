import { Link, useLoaderData } from "@remix-run/react";
import type { FooterDocument, NavigationDocument } from "@shared/sanity";
import { resolveSanityLink } from "@app/lib/sanity";

export function Footer() {
  const data = useLoaderData();
  const footer = data.footer as FooterDocument;
  const navigation = data.navigation as NavigationDocument;

  return (
    <div className="grid grid-cols-3 gap-16 border-t border-gray-800 bg-gray-900 p-16 pb-32">
      <div className="flex flex-col space-y-2">
        <p className="text-gray-500">Connect</p>
        {navigation.connect.map((item) => (
          <Link key={item._key} to={resolveSanityLink(item.link)}>
            <p className="underline underline-offset-4">{item.label}</p>
          </Link>
        ))}
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-gray-500">Boring Stuff</p>
        {footer.links.map((item) => (
          <Link key={item._key} to={resolveSanityLink(item.link)}>
            <p className="underline underline-offset-4">{item.label}</p>
          </Link>
        ))}
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-gray-500">Acknowledgment</p>
        <p>{footer.acknowledgement}</p>
      </div>
    </div>
  );
}
