import fs from "fs";
import path from "path";
import Link from "next/link";
import { AnimatedName } from "@/app/ui/animated-name";
import matter from "gray-matter";

interface PageProps {
  params: Promise<{ language: string }>;
}

export async function generateStaticParams() {
  const leetcodeDir = path.join(process.cwd(), "leetcode");
  if (!fs.existsSync(leetcodeDir)) return [];

  const languages = fs
    .readdirSync(leetcodeDir)
    .filter((dir) => fs.statSync(path.join(leetcodeDir, dir)).isDirectory());
  return languages.map((language) => ({ language }));
}

function getProblems(language: string) {
  const langDir = path.join(process.cwd(), "leetcode", language);

  if (!fs.existsSync(langDir)) {
    return [];
  }

  return fs
    .readdirSync(langDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(langDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      return {
        id: data.id,
        title: file.replace(/\.mdx$/, ""),
        slug: file.replace(/\.mdx$/, "")
      };
      //file.replace(/\.mdx$/, ""))
    }).sort((a, b) => a.id - b.id);
}

export default async function LeetcodeLanguagePage({ params }: PageProps) {
  const { language } = await params;
  const problems = getProblems(language);

  return (
    <div className="flex flex-col items-start max-w-[750px] text-foreground-2 w-[750px]">
      <p className="font-semibold text-[20px]">Leetcode/{language}</p>
      <AnimatedName />

      <ul className="ml-5 mt-2 space-y-2 list-decimal">
        {problems.length > 0 ? (
          problems.map(({slug, title}) => (
            <li key={slug}>
              <Link
                href={`/fun/leetcode/${language}/${slug}`}
                className="text-blue-400 hover:underline"
              >
                {title}
              </Link>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No solutions available yet.</p>
        )}
      </ul>
    </div>
  );
}
