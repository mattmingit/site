// src/utils/blog/blogHelpers.ts
import { BLOG_CATEGORIES } from "../constants/blogCategories.ts";

export const getDefaultAuthor = () => {
  return "Matteo Montanari";
};

export const getReadingTime = (content: string) => {
  const wordPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordPerMinute);
};

export const validateCategory = (category: string) => {
  return Object.values(BLOG_CATEGORIES).includes(category as any);
};
