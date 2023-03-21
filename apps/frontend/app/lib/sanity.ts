import type { SanityClient } from "@sanity/client";
import { createClient } from "@sanity/client";

let client: SanityClient;

export const getSanityClient = () => {
  client ||= createClient({
    apiVersion: "2021-03-25",
    projectId: "10uz7hfe",
    dataset: "production",
    useCdn: false,
  });

  return client;
};
