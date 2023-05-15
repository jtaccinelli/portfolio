import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { PageDocumentQuery } from "@portfolio/schemas";
import { PAGE_DOCUMENT_FRAGMENT } from "@portfolio/schemas";

import { getSanityClient } from "~/app/lib/sanity";
import { ContentBuilder } from "~/app/components/blocks/builder";

export const loader: LoaderFunction = async ({ params }) => {
  const client = getSanityClient();

  const page = await client.fetch<PageDocumentQuery>(
    `*[_type == "page" && handle.current == $handle][0]{
      ${PAGE_DOCUMENT_FRAGMENT}
    }`,
    {
      handle: params.handle,
    }
  );

  return json({ page });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const page = data.page as PageDocumentQuery;
  return {
    title: page?.seo?.title ?? page?.title,
    description: page?.seo?.description,
  };
};

export default function Page() {
  const data = useLoaderData();
  const page = data.page as PageDocumentQuery;

  return <ContentBuilder content={page.content} />;
}
