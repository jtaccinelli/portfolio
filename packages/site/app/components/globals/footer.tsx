import { Link, useLoaderData } from "@remix-run/react";
import type { FooterDocument, NavigationDocument } from "@cms/shared/sanity";

export function Footer() {
  const data = useLoaderData();
  const footer = data.footer as FooterDocument;
  const navigation = data.navigation as NavigationDocument;

  return (
    <div className="grid grid-cols-1 gap-16 bg-accent-600 px-8 py-24 pb-32 md:grid-cols-3 md:px-24">
      <div className="flex flex-col space-y-2">
        <p className="text-accent-300">Connect</p>
        {navigation.connect?.map((item) => (
          <Link key={item._key} to={item.url}>
            <p className="underline underline-offset-4">{item.label}</p>
          </Link>
        ))}
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-accent-300">Boring Stuff</p>
        {footer.links?.map((item) => (
          <Link key={item._key} to={item.url}>
            <p className="underline underline-offset-4">{item.label}</p>
          </Link>
        ))}
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-accent-300">Acknowledgment</p>
        <p>{footer.acknowledgement}</p>
      </div>
    </div>
  );
}
