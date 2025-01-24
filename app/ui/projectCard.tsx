export default function ProjectCard(props: any) {
  const icon = props.icon;
  const title = props.title;
  const year = props.year;
  const image = props.image;
  const href = props.href;
  const desc = props.desc;
  const employer = props.employer;

  return (
    <>
      <div className="h-[auto] w-[100%]  cursor-pointer ">
        <div className="flex justify-center rounded-[10px] h-[400px]">
          <img
            src={image}
            alt=""
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
