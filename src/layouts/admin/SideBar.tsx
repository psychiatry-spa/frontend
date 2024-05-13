import { SidebarButton } from "../../components/common/buttons/SidebarButton";
import { SearchBar } from "../../components/common/bars/SearchBar";
import { Link } from "react-router-dom";
import Icon from "../../components/common/Icon";
import { useState } from "react";

interface Props {
  isSidebar: boolean;
}

const Sidebar = ({ isSidebar }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
      <aside
        id="sidebar"
        className={`fixed h-full z-10 w-60 font-normal transition-all duration-300 ${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-col`}
      >
        <div className="flex flex-col h-full bg-white border-r border-primary-200 dark:bg-dark-container dark:border-dark-border">
          <Link to="/" className="flex justify-around items-center py-3">
            <Icon name="google" styles="size-10" />
            <span className="font-bold text-primary text-2xl dark:text-white">
              Admin Panel
            </span>
          </Link>
          <ul>
            <li className="m-2 lg:hidden">
              <SearchBar />
            </li>
            {["dashboard", "calendar", "manager", "posts", "settings"].map((name) => (
              <li key={name}>
                <SidebarButton name={name} />
              </li>
            ))}
            <li className="border-b border-primary-200 mx-3"></li>
            {["repository", "support", "logout"].map((name) => (
              <li key={name}>
                <SidebarButton name={name} />
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <button 
        onClick={toggleSidebar} 
        className={`fixed top-3/4 left-0 z-30 lg:hidden transform transition-transform ${
          isOpen ? 'translate-x-full rotate-180' : 'translate-x-0 rotate-0'
        }`}
      >
        <Icon name="arrow-right" styles="size-6" />
      </button>
    </>
  );
};

export default Sidebar;
