import { Link } from "react-router-dom";
import Icon from "../../common/icon";

interface Props {
  name: string;
  isActive?: boolean;
}

export const SidebarButton = ({ name, isActive = false }: Props) => {
  return (
    <Link
      to={`/admin/${name.toLowerCase()}`}
      className={`p-2 m-1 mx-3 flex items-center rounded-lg
      hover:bg-primary-100 hover:text-primary-800 
      dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700
      ${isActive ? " bg-primary-100 text-primary-800 font-medium" : " text-primary-700"}`}
    >
      <Icon name={name.toLowerCase()} styles="m-1 mr-3 size-5" />
      <span className="text-[1.1rem]">
        {name.replace(/^\w/, (c) => c.toUpperCase())}
      </span>
    </Link>
  );
};
