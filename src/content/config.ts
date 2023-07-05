import { defineCollection, reference, z } from "astro:content";

// Generic Types

export const image = z.object({
  url: z.string(),
  alt: z.string(),
});

export const link = z.object({
  url: z.string(),
  label: z.string(),
});

export const seo = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
});

export const card = z.object({
  heading: z.string(),
  body: z.string(),
  cta: link,
});

// Blocks

export const blogs = z.object({
  type: z.enum(["blogs"]),
  layout: z.enum(["simple"]),
  heading: z.string(),
  clients: z.array(reference("blog")),
});

export const cards = z.object({
  type: z.enum(["cards"]),
  layout: z.enum(["simple"]),
  heading: z.string(),
  items: z.array(card),
});

export const clients = z.object({
  type: z.enum(["clients"]),
  layout: z.enum(["simple"]),
  heading: z.string(),
  items: z.array(reference("client")),
});

export const content = z.object({
  type: z.enum(["content"]),
  layout: z.enum(["simple", "grid"]),
  heading: z.string(),
  body: z.array(z.string()),
  ctas: z.array(link),
});

export const hero = z.object({
  type: z.enum(["hero"]),
  layout: z.enum(["simple", "graphic"]),
  body: z.array(z.string()),
  ctas: z.array(link),
});

export const projects = z.object({
  type: z.enum(["projects"]),
  layout: z.enum(["simple"]),
  heading: z.string(),
  items: z.array(reference("project")),
});

export const skills = z.object({
  type: z.enum(["skills"]),
  layout: z.enum(["simple"]),
  heading: z.string(),
  items: z.array(reference("skill")),
});

export const ticker = z.object({
  type: z.enum(["ticker"]),
  layout: z.enum(["subtle", "highlight"]),
  content: z.string(),
});

export const builder = z.array(
  z.union([hero, content, cards, clients, skills, projects, blogs, ticker])
);

// Actual Collections

export const collections = {
  blog: defineCollection({
    type: "data",
    schema: z.object({
      title: z.string(),
      content: z.string(),
    }),
  }),
  client: defineCollection({
    type: "data",
    schema: z.object({
      title: z.string(),
      website: z.string(),
      blurb: z.string(),
      logo: image,
    }),
  }),
  footer: defineCollection({
    type: "data",
    schema: z.object({
      acknowledgement: z.string(),
    }),
  }),
  navigation: defineCollection({
    type: "data",
    schema: z.object({
      heading: z.string(),
      subheading: z.string(),
      links: z.array(link),
      connect: z.array(link),
    }),
  }),
  page: defineCollection({
    type: "data",
    schema: z.object({
      builder: builder,
      seo: seo,
    }),
  }),
  project: defineCollection({
    type: "data",
    schema: z.object({
      title: z.string(),
      subtitle: z.string(),
      blurb: z.string(),
      client: reference("client"),
      skills: z.array(reference("skill")),
      completedOn: z.date(),
      liveSite: z.string(),
    }),
  }),
  skill: defineCollection({
    type: "data",
    schema: z.object({
      title: z.string(),
      subtitle: z.string(),
      blurb: z.string(),
    }),
  }),
};
