import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { PageDocumentQuery } from "@portfolio/schemas";
import { PAGE_QUERY } from "@portfolio/schemas";

import { getSanityClient } from "~/app/lib/sanity";
import { ContentBuilder } from "~/app/components/blocks/builder";

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
