import Icon from "../../components/common/icon";
import { IconButton } from "../../components/admin/nav-bar/IconButton";
import { SearchBar } from "../../components/common/bars/SearchBar";
import { Link } from "react-router-dom";

interface Props {
  isSidebar: boolean;
  setIsSidebar: (isSidebar: boolean) => void;
}

const Navbar = ({ isSidebar, setIsSidebar }: Props) => {
  const handleSidebar = () => setIsSidebar(!isSidebar);

  return (
    <nav className="fixed lg:p-3 p-2 z-30 w-full border-b bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex">
        <div className="flex justify-start items-center">
          <div className="lg:hidden p-2">
            <IconButton name="sun" handleClick={handleSidebar} />
          </div>
          <Link to="/" className="flex justify-start items-center pr-6 mr-8">
            <Icon name="moon" styles="size-10" />
            <span className="font-bold text-2xl dark:text-white">LogoName</span>
          </Link>
          <div className="w-96 hidden lg:block">
            <SearchBar />
          </div>
        </div>

        <div className="flex items-center justify-end w-full">
          <IconButton name="bell" />
          <IconButton name="darkmode" />
          <button className="p-2 bg-accent rounded-full">
            <Icon name="name" styles="size-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
