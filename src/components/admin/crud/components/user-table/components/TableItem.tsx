interface Props {
  text: string;
}

const TableItem = ({ text }: Props) => {
  return (
    <td className="lg:table-cell hidden px-3 text-primary font-medium">
      {text.replace(/^\w/, (c) => c.toUpperCase())}
    </td>
  );
};

export default TableItem;
