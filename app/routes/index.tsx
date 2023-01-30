import type { LoaderFunction } from "@remix-run/cloudflare";

import type { NavigationDocument } from "@shared/sanity";

import { getSanityClient } from "@app/lib/sanity";
import { NAVIGATION_QUERY } from "@app/queries/navigation";

import { Navigation } from "@app/components/navigation";
import { TextSpinner } from "@app/components/text-spinner";

export const loader: LoaderFunction = async () => {
  const client = getSanityClient();
  const navigation = await client.fetch<NavigationDocument>(NAVIGATION_QUERY);
  return { navigation };
};

export default function Index() {
  return (
    <div>
      <Navigation />
      <TextSpinner
        text="Design + Development + "
        repeats={5}
        className="fixed left-1/2 -bottom-16 -right-16 opacity-50"
      />
    </div>
  );
}
