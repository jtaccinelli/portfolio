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
  useTransition,
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

import { Navigation } from "@app/components/globals/navigation";
import { Footer } from "@app/components/globals/footer";

import styles from "./styles/index.css";
import fonts from "./styles/fonts.css";
import icons from "boxicons/css/boxicons.min.css";
import clsx from "clsx";

export const loader: LoaderFunction = async () => {
  const client = getSanityClient();

  const [navigation, footer, configuration] = await Promise.all([
    client.fetch<NavigationDocument>(NAVIGATION_QUERY),
    client.fetch<FooterDocument>(FOOTER_QUERY),
    client.fetch<ConfigurationDocument>(CONFIGURATION_QUERY),
  ]);

  console.log(configuration);

  return { navigation, footer, configuration };
};

export const meta: MetaFunction = ({ data }) => {
  const configuration = data.configuration as ConfigurationDocument;
  return {
    title: configuration.default_seo?.title,
    description: configuration.default_seo?.description,
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
  };
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: fonts },
  { rel: "stylesheet", href: icons },
  {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon.png",
  },
];

export default function App() {
  const { state } = useTransition();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-800 p-2 text-white md:p-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-md">
          <Navigation />
          <div
            className={clsx(
              "[&>*]:opacity-1 grid w-full grid-cols-1 divide-y-4 divide-gray-800 bg-gray-900 [&>*]:transition-opacity",
              state === "loading" && "[&>*]:opacity-0"
            )}
          >
            <Outlet />
          </div>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
