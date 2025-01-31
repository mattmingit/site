/* @next-codemod-ignore */
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import MdxH3 from "@/post-components/mdxh3";
import ListItem from "@/post-components/listitem";
import { MathBlock } from "@/post-components/math";
import { LLM } from "@/post/media-components/llm";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import "prismjs/themes/prism-okaidia.css";
import { AnimatedName } from "@/app/ui/animated-name";

const postDir = path.join(process.cwd(), "post");

export async function generateStaticParams() {
  const f = await fs.readdirSync(postDir);
  console.log("Files in post directory:", f);
  const slugs = f
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
  return slugs.map((s) => ({ s }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!params.slug) {
    throw new Error("Slug is undefined. Check route and params.");
  }

  const fPath = path.join(postDir, `${params.slug}.mdx`);
  console.log("Loading file at path:", fPath);
  let content;
  try {
    content = await fs.readFileSync(fPath, "utf-8");
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to read file at ${fPath}: ${error.message}`);
    } else {
      throw new Error(`Failed to read file at ${fPath}: Unknown error`);
    }
  }
  interface Frontmatter {
    id: string;
    title: string;
    date: string;
    category: string;
    icon: string;
    image?: string;
    description: string;
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
    components: { MdxH3, ListItem, MathBlock, LLM },
    //components: components,
  }).catch((error) => {
    throw new Error(`Failed to compile MDX: ${error.message}`);
  });

  if (!mdxData || !mdxData.frontmatter) {
    throw new Error("Frontmatter is missing in the MDX file.");
  }

  const { frontmatter, content: renderedContent } = mdxData;

  return (
    <div className="flex flex-none flex-col items-start justify-center flex-nowrap gap-[40px] h-min overflow-hidden p-0 font-fs max-w-[750px] text-foreground-2">
      <div>
        <p className="text-[20px] font-semibold">{frontmatter.title}</p>
        <AnimatedName />
        <div className="flex flex-row text-[12px]">
          {/* <Icon src={frontmatter.icon} size="12"></Icon> */}
          <p className="text-post-date ml-[2px]">{frontmatter.category}</p>
          <p className="text-post-date ml-[5px]">•</p>
          <p className="text-post-date ml-[5px]">{frontmatter.date}</p>
        </div>
      </div>
      <article
        className={`flex flex-col gap-[20px] text-[14px] prose-a:text-blue`}
      >
        {renderedContent}
      </article>
    </div>
  );
}
