import { Link, useLoaderData, useLocation } from "@remix-run/react";

import type { NavigationDocumentQuery } from "@portfolio/schemas";

import { Dropdown, useDropdown } from "~/app/components/compounds/dropdown";

export function Navigation() {
  const data = useLoaderData();
  const navigation = data.navigation as NavigationDocumentQuery;

  const { pathname } = useLocation();

  const { close, toggle, isShow } = useDropdown();

  return (
    <div className="sticky top-0 z-50 -mb-20 flex h-20 flex-row flex-wrap items-center justify-between overflow-visible bg-gray-950/50 px-8 backdrop-blur md:px-24">
      <div className="relative flex gap-2">
        {navigation.items?.map((item) => {
          return (
            <Link key={item._key} to={item.url}>
              <p
                className="data-active:bg-gray-900 hover:data-active:bg-gray-800 rounded-full px-4 py-2 text-white transition-all  hover:bg-gray-900"
                data-active={pathname === item.url}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <Dropdown.Toggle isShow={isShow} onClose={close} onToggle={toggle}>
        <button className="border-full data-show:bg-gray-800 relative flex flex-row items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-white transition-all hover:bg-gray-800">
          <span>Connect</span>
          <i className="bx bx-chevron-down" />
          <Dropdown.List isShow={isShow}>
            <div className="absolute left-1/2 top-[140%] flex -translate-x-1/2 flex-col divide-y divide-gray-900 overflow-hidden rounded bg-gray-800 transition-all">
              {navigation.connect?.map((item) => (
                <Link key={item._key} to={item.url}>
                  <p className="whitespace-nowrap p-2 px-4 text-left text-white hover:bg-gray-700">
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </Dropdown.List>
        </button>
      </Dropdown.Toggle>
    </div>
  );
}
