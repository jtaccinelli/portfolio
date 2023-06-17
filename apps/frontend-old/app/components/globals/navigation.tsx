import { Link, useLoaderData, useLocation } from "@remix-run/react";

import type { NavigationDocumentQuery } from "@portfolio/schemas";

import { Dropdown, useDropdown } from "~/app/components/compounds/dropdown";
import { useEffect, useRef, useState } from "react";
import { useHasStuck } from "~/app/hooks/use-has-stuck";

export function Navigation() {
  const data = useLoaderData();
  const navigation = data.navigation as NavigationDocumentQuery;

  const { pathname } = useLocation();
  const { close, toggle, isShow } = useDropdown();

  const ref = useRef<HTMLElement>(null);
  const hasStuck = useHasStuck(ref);

  console.log(hasStuck);

  return (
    <nav
      ref={ref}
      className="sticky top-0 z-50 -mb-20 flex h-20 flex-row flex-wrap items-stretch justify-between overflow-visible border-b border-gray-800 bg-gray-900/50 px-8 drop-shadow-2xl backdrop-blur md:px-24"
    >
      <ul className="relative flex gap-2">
        {navigation.items?.map((item) => {
          return (
            <li key={item._key}>
              <Link
                to={item.url}
                className="target:border-accent-600 flex h-full items-center border-t-2 border-transparent px-4 text-white transition-all hover:bg-gray-800/20"
              >
                <p>{item.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <Dropdown.Toggle isShow={isShow} onClose={close} onToggle={toggle}>
        <button className="data-show:bg-gray-800/20 data-show:border-white relative flex items-center gap-2 border-t-2 border-transparent bg-gray-900 px-4 text-white transition-all hover:bg-gray-800/20">
          <span>Connect</span>
          <i className="bx bx-chevron-down" />
          <Dropdown.List isShow={isShow}>
            <div className="absolute right-0 top-full flex flex-col divide-y divide-gray-900 overflow-hidden rounded-b bg-gray-800 transition-all">
              {navigation.connect?.map((item) => (
                <Link key={item._key} to={item.url}>
                  <p className="whitespace-nowrap p-4 text-left text-white hover:bg-gray-700">
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </Dropdown.List>
        </button>
      </Dropdown.Toggle>
    </nav>
  );
}
