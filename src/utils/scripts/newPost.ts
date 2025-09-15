import { existsSync, mkdirSync, writeFileSync } from "fs";
import { format } from "date-fns";
import path from "path";
import { fileURLToPath } from "url";
import { BLOG_CATEGORIES, POST_STATUS } from "../constants/blogCategories.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, "../../..");

const title = process.argv[2];
if (!title) {
  console.error("Please provide a title: pnpm run newPost <post-title>");
  process.exit(1);
}

const date = format(new Date(), "yyyy-MM-dd");
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-")
  .replace(/^-|-$/g, "");

const frontmatter = `---
title: "${title}"
pubDate: "${date}"
updatedDate: "${date}"
author: "Matteo Montanari"
description: ""
image:
  url: ""
  alt: ""
status: "${POST_STATUS.PUBLISHED}"
category: "${BLOG_CATEGORIES.PERSONAL}"
tags: []
relatedPosts: []
projectType:
---

Start writing your content...
`;

const postDir = path.join(projectRoot, "src/pages/blog/posts");
const filePath = path.join(postDir, `${slug}.mdx`);

if (!existsSync(postDir)) {
  mkdirSync(postDir, { recursive: true });
}

writeFileSync(filePath, frontmatter);
console.log(`Created new post: ${filePath}`);
