import type { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import { PAGE_QUERY } from "cms/schemas/documents/page";
import { PageDocumentQuery } from "cms/schemas/documents/page";

import { getSanityClient } from "site/lib/sanity";
import { ContentBuilder } from "site/components/blocks/builder";

export const loader: LoaderFunction = async ({ params }) => {
  const client = getSanityClient();

  const page = await client.fetch<PageDocumentQuery>(PAGE_QUERY, {
    handle: params.handle,
  });

  return { page };
};

export default function Page() {
  const data = useLoaderData();
  const page = data.page as PageDocumentQuery;

  return <ContentBuilder content={page.content} />;
}
