import { Link, useLoaderData, useLocation } from "@remix-run/react";

import { NavigationDocumentQuery } from "cms/schemas/documents/navigation";

import { Dropdown } from "site/components/compounds/dropdown";

export function Navigation() {
  const data = useLoaderData();
  const navigation = data.navigation as NavigationDocumentQuery;

  console.log(navigation);

  const { pathname } = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-row flex-wrap items-center justify-between overflow-visible p-4 md:py-16 md:px-8">
      <div className="mb-4 flex w-full flex-row items-center space-x-1 rounded-full bg-white p-1 shadow md:mb-0 md:w-auto">
        <div className="relative flex w-full flex-row -space-x-2">
          {navigation.items?.map((item) => {
            return (
              <Link key={item._key} to={item.url}>
                <p
                  className="relative rounded-full border-2 border-transparent px-4 py-2 text-black transition-all hover:text-gray-700 data-active:border-gray-200 data-active:text-accent-600 hover:data-active:border-accent-600"
                  data-active={pathname === item.url}
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
        </Dropdown>
      </div>
      <p className="ml-4 text-white md:order-first">{navigation.heading}</p>
      <p className="mr-4 text-white">{navigation.subheading}</p>
    </div>
  );
}
