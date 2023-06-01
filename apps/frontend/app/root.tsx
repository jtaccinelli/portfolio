import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "@remix-run/react";

import clsx from "clsx";

import type {
  NavigationDocumentQuery,
  FooterDocumentQuery,
  ConfigurationDocumentQuery,
} from "@portfolio/schemas";

import {
  NAVIGATION_DOCUMENT_FRAGMENT,
  FOOTER_DOCUMENT_FRAGMENT,
  CONFIGURATION_DOCUMENT_FRAGMENT,
} from "@portfolio/schemas";

import { getSanityClient } from "~/app/lib/sanity";

import { Navigation } from "~/app/components/globals/navigation";
import { Footer } from "~/app/components/globals/footer";

import styles from "./styles/style.css";
import fonts from "./styles/fonts.css";
import icons from "boxicons/css/boxicons.min.css";

export const loader: LoaderFunction = async () => {
  const client = getSanityClient();

  const [navigation, footer, configuration] = await Promise.all([
    client.fetch<NavigationDocumentQuery>(`
    *[_type == "navigation"][0] {
      ${NAVIGATION_DOCUMENT_FRAGMENT}
    }`),
    client.fetch<FooterDocumentQuery>(`
    *[_type == "footer"][0]{
      ${FOOTER_DOCUMENT_FRAGMENT}   
    }`),
    client.fetch<ConfigurationDocumentQuery>(`
    *[_type == "configuration"][0] {
      ${CONFIGURATION_DOCUMENT_FRAGMENT}
    }`),
  ]);

  return { navigation, footer, configuration };
};

export const meta: MetaFunction = ({ data }) => {
  const configuration = data.configuration as ConfigurationDocumentQuery;
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
  const { state } = useNavigation();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-screen bg-gray-800 p-2 text-white md:p-8">
        <div className="relative mx-auto h-full max-w-7xl overflow-y-scroll rounded-md shadow-2xl">
          <div
            className={clsx(
              "flex w-full flex-col bg-gray-900",
              "[&>*:not(:first-child)]:opacity-1 [&>*:not(:first-child)]:transition-opacity",
              state === "loading" && "[&>*:not(:first-child)]:opacity-0"
            )}
          >
            <Navigation />
            <Outlet />
            <Footer />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <script
          defer
          data-domain="jtaccinelli.com.au"
          src="https://plausible.io/js/script.js"
        />
        <LiveReload />
      </body>
    </html>
  );
}
