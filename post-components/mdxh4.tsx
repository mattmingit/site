interface MdxH3Props extends React.ComponentProps<"h3"> {}

const MdxH4 = ({ children, ...rest }: MdxH3Props) => {
  return (
    <h4 className="text-[14px] font-semibold" {...rest}>
      {children}
    </h4>
  );
};

export default MdxH4;
