import Image from "next/image";

interface ProjectCardProps {
  title: string;
  image: string;
  desc: string;
  employer: string;
}

export default function ProjectCard({
  title,
  image,
  desc,
  employer,
}: ProjectCardProps) {
  return (
    <>
      <div className="h-[auto] w-[100%]  cursor-pointer text-[14px]">
        <div className="flex justify-center rounded-[10px] h-[400px]">
          <Image
            src={image}
            alt={title}
            className="border border-solid border-[1px] rounded-[10px] bg-[#f7f7f7]"
          />
        </div>
        <div className="flex flex-row pt-[5px] font-sf text-foreground-3 justify-between">
          <p className="pl-[5px]">
            {title} - {desc}
          </p>
          <p className="pl-[5px] text-[14px] pr-[5px]">{employer}</p>
        </div>
      </div>
    </>
  );
}
