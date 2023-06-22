import { defineConfig } from "tinacms";

// Regular Collections
import { client } from "./collections/client";
import { blog } from "./collections/blog";
import { page } from "./collections/page";
import { project } from "./collections/project";
import { skill } from "./collections/skill";

// Singletons Collections
import { navigation } from "./singletons/navigation";
import { footer } from "./singletons/footer";
import { configuration } from "./singletons/configuration";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || "main";

export default defineConfig({
  branch,
  clientId: "e1b15466-0a8a-49fb-9a64-1d5fb67b7f11",
  token: "5b1a74be3673954c8abf31a0a5d550e38d641e21",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "media",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      blog,
      client,
      page,
      project,
      skill,
      // SINGLETONS
      navigation,
      footer,
      configuration,
    ],
  },
});
