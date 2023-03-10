import type { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import type { PageDocument } from "@cms/shared/sanity";
import { PAGE_QUERY } from "@site/shared/queries";

import { getSanityClient } from "@site/app/lib/sanity";

import { ContentBuilder } from "@site/app/components/blocks/builder";

export const loader: LoaderFunction = async () => {
  const client = getSanityClient();

  const page = await client.fetch<PageDocument>(PAGE_QUERY, {
    handle: "home",
  });

  return { page };
};

export default function Page() {
  const data = useLoaderData();
  const page = data.page as PageDocument;

  return <ContentBuilder content={page.content} />;
}
