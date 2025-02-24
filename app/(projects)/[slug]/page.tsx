/* @next-codemod-ignore */
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import "prismjs/themes/prism-okaidia.css";
import { AnimatedName } from "@/app/ui/animated-name";
import MdxH3 from "@/post-components/mdxh3";

const projectDir = path.join(process.cwd(), "projects");

export async function generateStaticParams() {
  const f = fs.readdirSync(projectDir);
  console.log("Files in projects directory: ", f);
  const slugs = f
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
  return slugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  if (!(await params).slug) {
    throw new Error("Slug is undefined. Check route and params.");
  }

  const fPath = path.join(projectDir, `${(await params).slug}.mdx`);
  console.log("Loading file at path:", fPath);
  let content;
  try {
    content = fs.readFileSync(fPath, "utf8");
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to read file at ${fPath}: ${error.message}`);
    } else {
      throw new Error(`Failed to read file at ${fPath}: Unkown error`);
    }
  }

  interface Frontmatter {
    id: string;
    icon: string;
    image: string;
    title: string;
    description: string;
    year: string;
    href: string;
    employer: string;
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
  }).catch((err) => {
    throw new Error(`Failed to compile MDX: ${err.message}`);
  });

  if (!mdxData || !mdxData.frontmatter) {
    throw new Error("Frontmatter is missing in the mMDX file.");
  }

  const { frontmatter, content: renderedContent } = mdxData;

  return (
    <div className="flex flex-none flex-col items-start justify-center flex-nowrap gap-[40px] h-min overflow-hidden p-0 font-fs max-w-[750px] text-foreground-2">
      <div>
        <p className="text-[24px] font-semibold">{frontmatter.title}</p>
        <AnimatedName />
        <div className="flex flex-row text-[12px]">
          {/* <Icon src={frontmatter.icon} size="12"></Icon> */}
          <p className="text-post-date ml-[2px]">{frontmatter.description}</p>
          <p className="text-post-date ml-[5px]">•</p>
          <p className="text-post-date ml-[5px]">{frontmatter.year}</p>
          <p className="text-post-date ml-[5px]">•</p>
          <p className="text-post-date ml-[5px]">{frontmatter.employer}</p>
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
