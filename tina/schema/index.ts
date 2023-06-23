import type { Schema } from "tinacms";

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

export const schema: Schema = {
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
};
