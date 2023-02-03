import PicoSanity from "picosanity";

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
