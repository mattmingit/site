interface OlProps extends React.ComponentProps<"ol"> {}

const Ol = ({ children, ...props }: OlProps) => {
  return (
    <ol className="list-decimal list-outside text-[14px]" {...props}>
      {children}
    </ol>
  );
};

export default Ol;
