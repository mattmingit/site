import { Link } from "next-view-transitions";

export function AnimatedName() {
  return (
    <Link
      href="/"
      className="flex mt-1 mb-1 ml-[2px] text-[13px] text-foreground-3 fade-in"
    >
      Matteo Montanari
    </Link>
  );
}
