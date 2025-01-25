interface MdxH3Props extends React.ComponentProps<"h3"> {}

const MdxH3 = ({ children, ...rest }: MdxH3Props) => {
  return (
    <h3 className="text-[16px] font-semibold" {...rest}>
      {children}
    </h3>
  );
};

export default MdxH3;
