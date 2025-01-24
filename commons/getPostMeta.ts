import fs, { fdatasync } from "fs";
import matter from "gray-matter";
import { postMetaData } from "./postMeta";

const getPostMetaData = (): postMetaData[] => {
  const fls = fs.readdirSync("post/");
  const mdxPosts = fls.filter((f) => f.endsWith(".mdx"));

  const posts = mdxPosts.map((fn) => {
    const fcontent = fs.readFileSync(`post/${fn}`, "utf8");
    const matterRes = matter(fcontent);
    return {
      title: matterRes.data.title,
      date: matterRes.data.date,
      image: matterRes.data.image,
      description: matterRes.data.description,
      category: matterRes.data.category,
      icon: matterRes.data.icon,
      slug: fn.replace(".mdx", ""),
    };
  });
  return posts;
};

export default getPostMetaData;
