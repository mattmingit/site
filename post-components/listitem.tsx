interface ListItemProps extends React.ComponentProps<"span"> {}

const ListItem = ({ children, ...rest }: ListItemProps) => {
  return (
    <>
      <span className="text-[14px] font-semibold" {...rest}>
        {children}
      </span>
      <br />
    </>
  );
};

export default ListItem;
