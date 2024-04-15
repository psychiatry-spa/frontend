interface Props {
  text: string;
}

const TableItem = ({ text }: Props) => {
  return (
    <td className="lg:table-cell hidden px-3 font-medium text-primary dark:text-primary-100">
      {text.replace(/^\w/, (c) => c.toUpperCase())}
    </td>
  );
};

export default TableItem;
