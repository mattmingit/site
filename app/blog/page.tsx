import Link from "next/link";
import getPostMetaData from "@/commons/getPostMeta";

export default function Blog() {
  const postMeta = getPostMetaData();
  const parseDate = (date: string): Date => {
    const [d, m, y] = date.split("/").map(Number);
    return new Date(y, m - 1, d); // Create a valid Date object
  };
  postMeta.sort((a, b) => {
    const pd = parseDate(a.date);
    const nd = parseDate(b.date);
    return nd.getTime() - pd.getTime(); // Sort in descending order
  });

  return (
    <>
      <div className="flex flex-none flex-col items-start justify-center flex-nowrap gap-[40px] h-min overflow-hidden p-0 font-fs max-w-[750px] text-foreground-2 text-[14px]">
        <div className="text-foreground-2 gap-[15px] flex flex-col mb-[50px]">
          <p className="font-semibold text-[16px]">
            Blog, thoughts and commentaries
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[40px]">
          {postMeta.map((p) => {
            const d = parseDate(p.date);
            return (
              <div key={p.slug} className="pt-[40px]">
                <Link href={`/blog/${p.slug}`}>
                  <img
                    src={p.image}
                    className="h-[200px] w-[400px] rounded-lg"
                  />
                  <p className="text-[18px] font-medium pl-[5px] mt-[15px] max-w-[300px]">
                    {p.title}
                  </p>

                  <p className="mt-[10px] pl-[5px] pb-[15px] text-foreground-2 max-w-[300px]">
                    {p.description}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
