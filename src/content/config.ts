import { defineCollection, reference, z } from "astro:content";

// Generic Types

export const image = z.object({
  url: z.string(),
  alt: z.string(),
});

export const link = z.object({
  url: z.string(),
  label: z.string(),
  icon: z.string().optional(),
  blurb: z.string().optional(),
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
  links: defineCollection({
    type: "data",
    schema: z.object({
      pages: z.array(link),
      connect: z.array(link),
      find: z.array(link),
    }),
  }),
  roles: defineCollection({
    type: "data",
    schema: z.object({
      title: z.string(),
      employer: z.string(),
      summary: z.string(),
      start: z.string(),
      end: z.string().optional(),
    }),
  }),
  project: defineCollection({
    type: "data",
    schema: z.object({
      title: z.string(),
      blurb: z.string(),
      type: z.string(),
      url: z.string(),
      tools: z.string().array(),
    }),
  }),
};
