import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { PageDocumentQuery } from "@portfolio/schemas";
import { PAGE_QUERY } from "@portfolio/schemas";

import { getSanityClient } from "@root/app/lib/sanity";
import { ContentBuilder } from "@root/app/components/blocks/builder";

export const loader: LoaderFunction = async ({ params }) => {
  const client = getSanityClient();

  const page = await client.fetch<PageDocumentQuery>(PAGE_QUERY, {
    handle: params.handle,
  });

  return json({ page });
};

export default function Page() {
  const data = useLoaderData();
  const page = data.page as PageDocumentQuery;

  return <ContentBuilder content={page.content} />;
}
