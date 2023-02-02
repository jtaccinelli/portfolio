import { useLoaderData } from "@remix-run/react";

import type { PageDocument } from "@shared/sanity";
import { PAGE_QUERY } from "@shared/queries";

import { getSanityClient } from "@app/lib/sanity";

import { TextSpinner } from "@app/components/text-spinner";
import { ContentBuilder } from "@app/components/blocks/builder";

export async function loader() {
  const client = getSanityClient();

  const page = await client.fetch<PageDocument>(PAGE_QUERY, {
    handle: "index",
  });

  return { page };
}

export default function Index() {
  const data = useLoaderData();
  const page = data.page as PageDocument;

  return (
    <div className="flex flex-col">
      <ContentBuilder content={page.content} />
    </div>
  );
}
