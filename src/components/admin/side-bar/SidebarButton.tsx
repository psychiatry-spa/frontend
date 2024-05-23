import { Link } from "react-router-dom";
import Icon from "../../common/Icon";

interface Props {
  name: string;
  setIsSidebar: (isSidebar: boolean) => void;
}

export const SidebarButton = ({ name, setIsSidebar }: Props) => {
  const isActive = location.pathname === `/admin/${name.toLowerCase()}`;
  
  const handleClick = () => {
    setIsSidebar(false);
  }
  return (
    <Link
      className={`w-56 py-2 mx-2 my-1 flex items-center rounded-lg
      hover:bg-primary-100 hover:text-primary-800 
      dark:hover:bg-dark-bg-hover dark:hover:text-primary-100
      ${
        isActive
          ? " font-medium bg-primary-100 text-primary-800 dark:bg-dark-bg-hover dark:text-primary-100"
          : " text-primary-700 dark:text-primary-200"
      }`}
      to={`/admin/${name.toLowerCase()}`}
      onClick={handleClick}
    >
      <Icon name={name.toLowerCase()} styles="m-1 mr-3 size-5" />
      <span className="text-[1.1rem]">
        {name.replace(/^\w/, (c) => c.toUpperCase())}
      </span>
    </Link>
  );
};
