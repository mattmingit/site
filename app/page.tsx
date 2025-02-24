import projects from "@/commons/projectList";
import ProjectCard from "./ui/projectCard";
import { NameTransition } from "./ui/name";

export default function Home() {
  return (
    <>
      <div className="flex flex-none flex-col items-start justify-center flex-nowrap gap-[40px] h-min overflow-hidden p-0">
        <div>
          {/* <p className="font-sf font-semibold text-foreground-2 text-[16px]">
            Matteo Montanari
          </p> */}
          <NameTransition />
          <p className="font-sf text-foreground-2 text-[14px] max-w-[750px] pt-[15px]">
            Student of economics and management with a passion for computer
            science. I try to build financial models and frameworks using
            programming languages.
          </p>
        </div>
        <div className="flex flex-none flex-col items-start justify-center flex-nowrap gap-[40px]">
          {projects.map((p) => {
            return (
              <ProjectCard
                key={p.id}
                title={p.title}
                // year={p.year}
                image={p.image}
                href={p.href}
                desc={p.description}
                employer={p.employer}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
