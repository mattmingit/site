/* @next-codemod-ignore */
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import Icon from "@/design-system/icon";

const postDir = path.join(process.cwd(), "post");

export async function generateStaticParams() {
  const f = await fs.readdirSync(postDir);
  console.log("Files in post firectory:", f);
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
  } catch (error: any) {
    throw new Error(`Failed to read file at ${fPath}: ${error.message}`);
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

  // if (!post) {
  //   notFound();
  // }

  // const { content, data } = post;
  // const mdxSource = await serialize(content, { scope: data });

  const mdxData = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  }).catch((error) => {
    throw new Error(`Failed to compile MDX: ${error.message}`);
  });

  if (!mdxData || !mdxData.frontmatter) {
    throw new Error("Frontmatter is missing in the MDX file.");
  }

  const { frontmatter, content: renderedContent } = mdxData;

  return (
    // <main className="prose mx-auto px-4 py-8">
    //   <h1>{data.title}</h1>
    //   <p className="text-gray-500">{data.date}</p>
    //   {data.image && <img src={data.image} alt={data.title} className="my-4" />}
    //   <MDXRemote source={mdxSource} />
    // </main>
    <div className="flex flex-none flex-col items-start justify-center flex-nowrap gap-[40px] h-min overflow-hidden p-0 font-fs max-w-[750px] text-foreground-2">
      <div>
        <p className="text-[20px] font-semibold">{frontmatter.title}</p>
        <div className="flex flex-row text-[12px]">
          <Icon src={frontmatter.icon} size="12"></Icon>
          <p className="text-post-date ml-[5px]">{frontmatter.category}</p>
          <p className="text-post-date ml-[5px]">•</p>
          <p className="text-post-date ml-[5px]">{frontmatter.date}</p>
        </div>
      </div>
      <article className="flex flex-col gap-[20px] text-[14px]">
        {renderedContent}
      </article>
    </div>
  );
}
