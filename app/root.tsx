import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/cloudflare";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import {
  CONFIGURATION_QUERY,
  FOOTER_QUERY,
  NAVIGATION_QUERY,
} from "@shared/queries";

import type {
  ConfigurationDocument,
  FooterDocument,
  NavigationDocument,
} from "@shared/sanity";

import { getSanityClient } from "@app/lib/sanity";

import { Navigation } from "@app/components/navigation";
import { Footer } from "@app/components/footer";

import styles from "./styles/index.css";
import fonts from "./styles/fonts.css";

export const loader: LoaderFunction = async () => {
  const client = getSanityClient();

  const [navigation, footer, configuration] = await Promise.all([
    client.fetch<NavigationDocument>(NAVIGATION_QUERY),
    client.fetch<FooterDocument>(FOOTER_QUERY),
    client.fetch<ConfigurationDocument>(CONFIGURATION_QUERY),
  ]);

  return { navigation, footer, configuration };
};

export const meta: MetaFunction = ({ data }) => {
  const configuration = data.configuration as ConfigurationDocument;

  return {
    title: configuration.defaultSeo.title,
    description: configuration.defaultSeo.description,
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
  };
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: fonts },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="rounded-xl bg-gray-900 p-8 text-white">
        <Navigation />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 divide-y-4 divide-gray-900 overflow-hidden rounded-lg bg-gray-800">
          <Outlet />
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
