import { useState } from "react";
import { SidebarButton } from "../../components/admin/side-bar/SidebarButton";
import { SearchBar } from "../../components/common/bars/SearchBar";
import { Link } from "react-router-dom";
import Icon from "../../components/common/icon";

const Sidebar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const handleSidebar = () => setIsSidebar(!isSidebar);

  const [activeButton, setActiveButton] = useState("dashboard");
  const handleActive = (index: string) => {
    console.log(index);
    setActiveButton(index);
  };
  return (
    <aside
      id="sidebar"
      className={`fixed h-full z-10 w-60 font-normal lg:flex flex-col transition-width ${
        isSidebar ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col h-full pt-5 bg-white border-r border-primary-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="lg:hidden p-2">
          <button onClick={handleSidebar}>
            <Icon name="sun" />
          </button>
        </div>
        <Link to="/" className="flex justify-start items-center mb-9">
          <Icon name="moon" styles="size-10" />
          <span className="font-bold text-primary text-2xl dark:text-white">Admin Panel</span>
        </Link>
        <ul>
          <li className="m-2 lg:hidden">
            <SearchBar />
          </li>
          {["dashboard", "calendar", "manager", "settings"].map((name) => (
            <li key={name} onClick={() => handleActive(name)}>
              <SidebarButton name={name} isActive={activeButton === name} />
            </li>
          ))}
          <li className="border-b border-primary-200 mx-3"></li>
          {["repository", "support", "logout"].map((name) => (
            <li key={name} onClick={() => handleActive(name)}>
              <SidebarButton name={name} isActive={activeButton === name} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
