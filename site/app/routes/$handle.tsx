import type { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import type { PageDocument } from "@shared/sanity";
import { PAGE_QUERY } from "@shared/queries";

import { getSanityClient } from "@app/lib/sanity";

import { ContentBuilder } from "@app/components/blocks/builder";

export const loader: LoaderFunction = async ({ params }) => {
  const client = getSanityClient();

  const page = await client.fetch<PageDocument>(PAGE_QUERY, {
    handle: params.handle,
  });

  return { page };
};

export default function Page() {
  const data = useLoaderData();
  const page = data.page as PageDocument;

  return <ContentBuilder content={page.content} />;
}
