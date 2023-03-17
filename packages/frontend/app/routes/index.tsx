import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import { PageDocumentQuery, PAGE_QUERY } from "cms/schemas/documents/page";

import { getSanityClient } from "site/lib/sanity";
import { ContentBuilder } from "site/components/blocks/builder";

export const loader: LoaderFunction = async () => {
  const client = getSanityClient();

  const page = await client.fetch<PageDocumentQuery>(PAGE_QUERY, {
    handle: "home",
  });

  return json({ page });
};

export default function Page() {
  const data = useLoaderData();
  const page = data.page as PageDocumentQuery;

  return <ContentBuilder content={page.content} />;
}
