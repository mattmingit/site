import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import MdxH3 from "@/post-components/mdxh3";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import "katex/dist/katex.min.css";
import "prismjs/themes/prism-okaidia.css";
import { AnimatedName } from "@/app/ui/animated-name";

interface PageProps {
  params: Promise<{ language: string; slug: string }>;
}

const leetcodeDir = path.join(process.cwd(), "leetcode");

export async function generateStaticParams() {
  if (!fs.existsSync(leetcodeDir)) return [];

  const params: { language: string; slug: string }[] = [];

  fs.readdirSync(leetcodeDir).forEach((language) => {
    const langDir = path.join(leetcodeDir, language);
    if (fs.statSync(langDir).isDirectory()) {
      fs.readdirSync(langDir)
        .filter((file) => file.endsWith(".mdx"))
        .forEach((file) => {
          params.push({ language, slug: file.replace(/\.mdx$/, "") });
        });
    }
  });

  return params;
}

function getDiffcultyColor(difficulty: string) {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "text-green";
    case "medium":
      return "text-orange";
    case "hard":
      return "text-red";
    default:
      return "text-foreground-2";
  }
}

function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case "accepted":
      return "text-green";
    case "in progress":
      return "text-yellow";
    case "pending":
      return "text-orange";
    case "rejected":
      return "text-red";
    default:
      return "text-foreground-2";
  }
}

export default async function LeetcodePageSolution({ params }: PageProps) {
  const { language, slug } = await params;

  const filePath = path.join(leetcodeDir, language, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return <p> Solution not found for {slug}</p>;
  }

  const content = fs.readFileSync(filePath, "utf8");

  interface Frontmatter {
    id: string;
    title: string;
    difficulty: string;
    topic: string[];
    status: string;
  }

  const mdxData = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [[rehypePrism, { ignoreMissing: true }], rehypeKatex],
      },
    },
    components: { MdxH3 },
  });

  const { frontmatter, content: renderedContent } = mdxData;

  return (
    <div className="flex flex-col items-start max-w-[750px] text-foreground-2 w-[750px]">
      <h1 className="text-[20px] font-semibold text-foreground-2">
        {frontmatter.title}
      </h1>
      <AnimatedName />
      <p className="text-foreground-2 text-[14px]">
        <span className={getDiffcultyColor(frontmatter.difficulty)}>
          {frontmatter.difficulty}
        </span>{" "}
        •{" "}
        <span className={getStatusColor(frontmatter.status)}>
          {frontmatter.status}
        </span>
      </p>
      <div className="flex gap-2 mt-2">
        {Array.isArray(frontmatter.topic) ? (
          frontmatter.topic.map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 text-xs bg-gray-200 rounded-md"
            >
              {topic}
            </span>
          ))
        ) : (
          <p>No tags available</p>
        )}
      </div>
      <article className="flex flex-col gap-[5px] mt-[50px] text-[14px] prose-a:text-blue prose-code:font-semibold prose-code:bg-gray-100 prose-code:text-blue prose-code:p-1 prose-code:rounded-[5px]">
        {renderedContent}
      </article>
    </div>
  );
}
