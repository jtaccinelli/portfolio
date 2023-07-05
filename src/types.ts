import type { CollectionEntry } from "astro:content";

// Collection Types
export type BlogType = CollectionEntry<"blog">["data"];
export type ClientType = CollectionEntry<"client">["data"];
export type FooterType = CollectionEntry<"footer">["data"];
export type NavigationType = CollectionEntry<"navigation">["data"];
export type ProjectType = CollectionEntry<"project">["data"];
export type SkillType = CollectionEntry<"skill">["data"];

// Block Types
export type CTA = {
  label: string;
  url: string;
};
