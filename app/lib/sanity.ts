import PicoSanity from "picosanity";
import type { Link } from "@shared/sanity";

let client: ReturnType<typeof PicoSanity>;

export const getSanityClient = () => {
  client ||= PicoSanity({
    apiVersion: "2021-03-25",
    projectId: "10uz7hfe",
    dataset: "production",
    useCdn: false,
  });

  return client;
};

export const resolveSanityLink = (link: Link) => {
  switch (link.variant) {
    case "url":
      return link.url;
    case "reference":
      return `/${link.reference._type}/${link.reference.handle}`;
  }
};
