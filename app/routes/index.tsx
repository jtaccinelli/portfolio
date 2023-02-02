import type { LoaderFunction } from "@remix-run/cloudflare";

import type { FooterDocument, NavigationDocument } from "@shared/sanity";

import { getSanityClient } from "@app/lib/sanity";
import { NAVIGATION_QUERY } from "@app/queries/navigation";
import { FOOTER_QUERY } from "@app/queries/footer";

import { Navigation } from "@app/components/navigation";
import { TextSpinner } from "@app/components/text-spinner";
import { Footer } from "@app/components/footer";

export const loader: LoaderFunction = async () => {
  const client = getSanityClient();
  const navigation = await client.fetch<NavigationDocument>(NAVIGATION_QUERY);
  const footer = await client.fetch<FooterDocument>(FOOTER_QUERY);
  return { navigation, footer };
};

export default function Index() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="h-[90vh]">
        <TextSpinner
          text="Design + Development + "
          repeats={5}
          className="fixed left-1/2 -bottom-16 -right-16 opacity-50"
        />
      </div>
      <Footer />
    </div>
  );
}
