interface Props {
  name: string;
  surname: string;
  email: string;
  imageUrl: string;
}

const TableNameItem = ({ name, surname, email, imageUrl }: Props) => {
  return (
    <td className="pl-2 py-3 flex items-center gap-x-5">
      <img
        className="size-10 rounded-full"
        src={
          imageUrl ||
          "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
        }
        alt="avatar"
      />
      <div className="flex flex-col">
        <span className="font-semibold text-primary">
          {name} {surname}
        </span>
        <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap text-primary-600">
          {email}
        </span>
      </div>
    </td>
  );
};

export default TableNameItem;
