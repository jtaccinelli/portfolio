import type { CSSProperties } from "react";
import { Link, useLoaderData, useLocation } from "@remix-run/react";

import type { NavigationDocument } from "@shared/sanity";
import { resolveSanityLink } from "@app/lib/sanity";
import { Dropdown } from "@app/components/compounds/dropdown";

export function Navigation() {
  const data = useLoaderData();
  const navigation = data.navigation as NavigationDocument;

  const { pathname } = useLocation();

  const style = {
    "--link-count": navigation.items.length,
  } as CSSProperties;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-row flex-wrap items-center justify-between overflow-visible p-4 md:py-16 md:px-8">
      <div className="mb-4 flex w-full flex-row items-center space-x-1 rounded-full bg-white p-1 shadow md:mb-0 md:w-auto">
        <div style={style} className="relative flex w-full flex-row px-4">
          {navigation.items.map((item) => {
            const link = resolveSanityLink(item.link);
            return (
              <Link key={item._key} to={link}>
                <p
                  className="relative px-2 text-black after:absolute after:top-full after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-white after:transition-all hover:after:bg-gray-300 data-active:text-red-600 data-active:after:bg-red-300"
                  data-active={pathname.includes(link)}
                >
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="-my-1 w-px self-stretch bg-gray-200" />
        <Dropdown>
          <Dropdown.Toggle>
            <button className="border-full relative flex flex-row items-center space-x-2 rounded-full px-4 py-2 text-black transition-all hover:bg-gray-200 data-show:bg-black data-show:text-white">
              <span>Connect</span>
              <i className="bx bx-chevron-down" />
              <Dropdown.List>
                <div className="absolute top-[140%] left-1/2 flex -translate-x-1/2 flex-col divide-y divide-gray-900 overflow-hidden rounded bg-gray-800 transition-all">
                  {navigation.connect.map((item) => (
                    <Link key={item._key} to={resolveSanityLink(item.link)}>
                      <p className="whitespace-nowrap p-2 px-4 text-left text-white hover:bg-gray-700">
                        {item.label}
                      </p>
                    </Link>
                  ))}
                </div>
              </Dropdown.List>
            </button>
          </Dropdown.Toggle>
        </Dropdown>
      </div>
      <p className="ml-8 text-white md:order-first">{navigation.heading}</p>
      <p className="mr-8 text-white">{navigation.subheading}</p>
    </div>
  );
}
