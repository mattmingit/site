import Link from "next/link";

export default function Fun() {
  return (
    <>
      <div className="flex flex-none flex-col items-start justify-center flex-nowrap gap-[40px] h-min overflow-hidden p-0 font-fs max-w-[750px] w-[750px]">
        <div className="text-foreground-2 gap-[15px] flex flex-col mb-[50px] text-[14px]">
          <p className="font-semibold text-[16px] text-foreground-2">Fun</p>
          <p>This is a vault tha contains some fun stuff.</p>
          <ul className="flex flex-col justify-between gap-2 font-bold cursor-pointer">
            {/*<Link href="/">~/vault</Link>*/}
            <Link href="/fun/leetcode">~/leetcode</Link>
            {/*<Link href="/">~/travel</Link>*/} 
          </ul>
        </div>
      </div>
    </>
  );
}
