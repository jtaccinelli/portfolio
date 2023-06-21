import { defineConfig } from "tinacms";

// Regular Collections
import { client } from "@tina/collections/client";
import { blog } from "@tina/collections/blog";

// Singletons Collections
import { navigation } from "@tina/singletons/navigation";
import { footer } from "@tina/singletons/footer";
import { configuration } from "@tina/singletons/configuration";

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
      // SINGLETONS
      navigation,
      footer,
      configuration,
    ],
  },
});
