import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { PageDocumentQuery, SeoQuery } from "@portfolio/schemas";
import { PAGE_DOCUMENT_FRAGMENT } from "@portfolio/schemas";

import { getSanityClient } from "~/app/lib/sanity";
import { ContentBuilder } from "~/app/components/blocks/builder";

export const loader: LoaderFunction = async () => {
  const client = getSanityClient();

  const page = await client.fetch<PageDocumentQuery>(
    `*[_type == "page" && handle.current == "home"][0]{
      ${PAGE_DOCUMENT_FRAGMENT}
    }`
  );

  return json({ page });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const seo = data.page.seo as SeoQuery;
  return {
    title: seo?.title ?? "Landing Page",
    description: seo?.description,
  };
};

export default function Page() {
  const data = useLoaderData();
  const page = data.page as PageDocumentQuery;

  return <ContentBuilder content={page.content} />;
}
