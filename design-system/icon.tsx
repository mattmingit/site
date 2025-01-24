export default function Icon(props: {
  src: string;
  class?: string;
  size?: string;
}) {
  return (
    <img
      src={props.src}
      className={props.class}
      width={props.size || 16}
      height={props.size || 16}
    ></img>
  );
}
