import Link from "next/link";
import path from "path";
import fs from "fs";

const leetcodeDir = path.join(process.cwd(), "leetcode");

export default function LeetcodePage() {
  const leetcodeLangs = fs
    .readdirSync(leetcodeDir)
    .filter((directory) =>
      fs.statSync(path.join(leetcodeDir, directory)).isDirectory(),
    );

  return (
    <>
      <div className="flex flex-none flex-col items-start justify-center flex-nowrap gap-[10px] h-min overflow-hidden p-0 font-fs max-w-[750px] text-foreground-2 text-[14px] w-[750px]">
        <div className="text-foreground-2 gap-[15px] mb-[10px]">
          <p className="font-semibold text-[16px]">Leetcode solutions</p>
          <p className="mt-4">
            This section contains solution for leetcode problems categorized by
            programming language.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {leetcodeLangs.map((lang) => {
            return (
              <div key={lang} className="w-full">
                <Link
                  href={`/fun/leetcode/${lang}`}
                  className="font-semibold text-foreground-2 hover:text-blue hover:underline"
                >
                  ~/ {lang}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
