import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import {
  BLOG_CATEGORIES,
  POST_STATUS,
} from "./utils/constants/blogCategories.ts";
import {
  PROJECT_CATEGORIES,
  PROJECT_CONTEXTS,
} from "./utils/constants/categories";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/pages/blog/posts" }),
  schema: z
    .object({
      title: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date(),
      author: z.string().default("Matteo Montanari"),
      description: z.string().max(500),
      image: z
        .object({
          url: z.string(),
          alt: z.string(),
        })
        .optional(),
      status: z
        .enum([POST_STATUS.PUBLISHED, POST_STATUS.DRAFT, POST_STATUS.ARCHIVED])
        .default(POST_STATUS.PUBLISHED),
      category: z
        .enum([
          BLOG_CATEGORIES.BUSINESS,
          BLOG_CATEGORIES.PERSONAL,
          BLOG_CATEGORIES.TUTORIAL,
          BLOG_CATEGORIES.ECONOMICS,
          BLOG_CATEGORIES.TECHNOLOGY,
          BLOG_CATEGORIES.PROGRAMMING,
        ])
        .default(BLOG_CATEGORIES.PERSONAL),
      tags: z.array(z.string()).default([]),
      readingTime: z.string().optional(),
      slug: z.string().optional(),
      relatedPosts: z.array(z.string()).optional(),
      projectType: z
        .enum([
          PROJECT_CATEGORIES.ACADEMIC,
          PROJECT_CATEGORIES.PERSONAL,
          PROJECT_CATEGORIES.RESEARCH,
          PROJECT_CATEGORIES.FREELANCE,
          PROJECT_CATEGORIES.OPEN_SOURCE,
          PROJECT_CATEGORIES.PROFESSIONAL,
        ])
        .default(PROJECT_CATEGORIES.PERSONAL),
      contentPreview: z.string().max(500).optional(),
    })
    .transform((data) => {
      return {
        ...data,
        slug: data.title
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, ""),
      };
    }),
});

const project = defineCollection({
  schema: z.object({
    name: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    icon: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    description: z.string().max(200),
    url: z.string(),
    year: z.string().optional(),
    category: z
      .enum([
        PROJECT_CATEGORIES.ACADEMIC,
        PROJECT_CATEGORIES.PERSONAL,
        PROJECT_CATEGORIES.RESEARCH,
        PROJECT_CATEGORIES.FREELANCE,
        PROJECT_CATEGORIES.OPEN_SOURCE,
        PROJECT_CATEGORIES.PROFESSIONAL,
      ])
      .default(PROJECT_CATEGORIES.PERSONAL),
    context: z.enum([
      PROJECT_CONTEXTS.PERSONAL_LEARNING,
      PROJECT_CONTEXTS.THESIS,
      PROJECT_CONTEXTS.HACKATHON,
      PROJECT_CONTEXTS.ASSIGNMENT,
      PROJECT_CONTEXTS.CLIENT_WORK,
      PROJECT_CONTEXTS.COURSE_FINAL,
      PROJECT_CONTEXTS.WORK_PROJECT,
    ]),
    repository: z.string().optional(),
    demo: z.string().optional(),
  }),
});

export const collections = { blog, project };
