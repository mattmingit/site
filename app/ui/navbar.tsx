"use client";
//import Link from "next/link";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const curPage = usePathname(); // Get current path
  return (
    <>
      <ul className="flex flex-none flex-col gap-[11px] font-sf">
        <li
          className={`cursor-pointer ${
            curPage === "/"
              ? "font-semibold text-foreground-2"
              : "text-foreground-3"
          } hover:text-foreground-2`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`cursor-pointer ${
            curPage === "/about"
              ? "font-semibold text-foreground-2"
              : "text-foreground-3"
          } hover:text-foreground-2`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`cursor-pointer ${
            curPage === "/blog" || curPage.startsWith("/blog/")
              ? "font-semibold text-foreground-2"
              : "text-foreground-3"
          } hover:text-foreground-2`}
        >
          <Link href="/blog">Blog</Link>
        </li>
        <li
          className={`cursor-pointer ${
            curPage === "/fun"
              ? "font-semibold text-foreground-2"
              : "text-foreground-3"
          } hover:text-foreground-2`}
        >
          Fun
        </li>
        <li className="font-sf text-foreground-3 cursor-pointer hover:text-foreground-2">
          <Link
            href="https://www.linkedin.com/in/matteo-montanari-5a053027a/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </Link>
        </li>
        <li className="font-sf text-foreground-3 cursor-pointer hover:text-foreground-2">
          <Link
            href="/p_doc/Montanari_Matteo_cv.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            CV
          </Link>
        </li>
      </ul>
    </>
  );
}
