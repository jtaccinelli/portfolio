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
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
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
      // // SINGLETONS
      navigation,
      footer,
      configuration,
    ],
  },
});
