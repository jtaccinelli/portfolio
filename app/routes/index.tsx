import type { LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";

import type { Navigation } from "@shared/sanity";

import { getSanityClient, resolveSanityLink } from "@app/lib/sanity";
import { NAVIGATION_QUERY } from "@app/queries/navigation";

export const loader: LoaderFunction = async () => {
  const client = getSanityClient();
  const navigation = await client.fetch<Navigation>(NAVIGATION_QUERY);

  return { navigation };
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const navigation = data.navigation as Navigation;

  console.log(navigation);

  return (
    <div>
      <div className="fixed bottom-16 left-1/2 flex -translate-x-1/2 flex-row bg-gray-100 p-4">
        {navigation.items.map((item) => (
          <Link key={item._key} to={resolveSanityLink(item.link)}>
            <div>{item.label}</div>
          </Link>
        ))}
      </div>
      <h1>{navigation.heading}</h1>
    </div>
  );
}
