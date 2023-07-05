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
