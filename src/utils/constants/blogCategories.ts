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
  WRITING: "writing",
  TUTORIAL: "tutorial",
} as const;

export const POST_STATUS = {
  PUBLISHED: "published",
  DRAFT: "draft",
  ARCHIVED: "archived",
} as const;
