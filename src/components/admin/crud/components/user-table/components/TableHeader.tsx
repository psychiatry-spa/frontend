import { useState } from "react";
import Icon from "../../../../../common/icon";
import { Order } from "../../../Types";

interface Props {
  name: string;
  handleClick: (s: string) => void;
}

const TableHeader = ({ name, handleClick }: Props) => {
  const [order, setOrder] = useState<Order>("none");
  return (
    <th
      className="lg:table-cell hidden p-3 pr-6 cursor-pointer text-xs hover:text-primary-800"
      onClick={() => handleClick(name)}
    >
      <div className="flex justify-between items-center">
        <span>{name.toUpperCase()}</span>
        {name && (
          <div className="flex flex-col">
            <Icon
              name="up-arrow"
              styles={order === "none" || order === "asc" ? "size-2" : "size-0"}
            />
            <Icon
              name="down-arrow"
              styles={
                order === "none" || order === "desc" ? "size-2" : "size-0"
              }
            />
          </div>
        )}
      </div>
    </th>
  );
};

export default TableHeader;
