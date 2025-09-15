// src/utils/constants/blogCategories.js
// import {
//   PROJECT_CATEGORIES,
//   PROJECT_CONTEXTS,
//   PROJECT_STATUS,
// } from "./categories.ts";
// import { validateCategory } from "../blog/blogHelpers.ts";

export const BLOG_CATEGORIES = {
  TECHNOLOGY: "technology",
  ECONOMICS: "economics",
  PROGRAMMING: "programming",
  BUSINESS: "business",
  PERSONAL: "personal",
  TUTORIAL: "tutorial",
} as const;

export const POST_STATUS = {
  PUBLISHED: "published",
  DRAFT: "draft",
  ARCHIVED: "archived",
} as const;

// const blogCollection = defineCollection({
//   type: "content",
//   schema: z
//     .object({
//       title: z.string(),
//       pubDate: z.string(),
//       updatedDate: z.string().optional(),
//       author: z.string().default("Matteo Montanari"),
//       description: z.string().max(160),
//       image: z
//         .object({
//           url: z.string(),
//           alt: z.string(),
//         })
//         .optional(),
//       status: z
//         .enum([POST_STATUS.PUBLISHED, POST_STATUS.DRAFT, POST_STATUS.ARCHIVED])
//         .default(POST_STATUS.PUBLISHED),
//       // category: z.enum([
//       //   BLOG_CATEGORIES.TECHNOLOGY,
//       //   BLOG_CATEGORIES.ECONOMICS,
//       //   BLOG_CATEGORIES.PROGRAMMING,
//       //   BLOG_CATEGORIES.BUSINESS,
//       //   BLOG_CATEGORIES.PERSONAL,
//       //   BLOG_CATEGORIES.TUTORIAL,
//       // ]),
//       category: z
//         .string()
//         .refine((cat) => validateCategory(cat), {
//           message: `Category must be one of: ${Object.values(BLOG_CATEGORIES).join(", ")}`,
//         })
//         .default(BLOG_CATEGORIES.PERSONAL),
//       tags: z.array(z.string()).default([]),
//       //redingTime: z.number().optional(), // TODO: create an Astro component to compute this and pass it in blog post layout.
//       slug: z.string().optional(), // WARN: understand if this has to be removed because we dinamically generate slug in transform
//       relatedPosts: z.array(z.string()).default([]),
//       canonicalUrl: z.string().url().optional(),
//       projectType: z
//         .enum([
//           PROJECT_CATEGORIES.ACADEMIC,
//           PROJECT_CATEGORIES.PERSONAL,
//           PROJECT_CATEGORIES.RESEARCH,
//           PROJECT_CATEGORIES.FREELANCE,
//           PROJECT_CATEGORIES.OPEN_SOURCE,
//           PROJECT_CATEGORIES.PROFESSIONAL,
//         ])
//         .optional(),
//     })
//     .transform((data) => {
//       return {
//         ...data,
//         slug: data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
//       };
//     }),
// });
//
// export const collections = {
//   blog: blogCollection,
// };
