import { SidebarButton } from "./SidebarButton";
import { SearchBar } from "../../common/bars/SearchBar";
import { Link } from "react-router-dom";

interface Props {
  isSidebar: boolean;
}

const Sidebar = ({ isSidebar }: Props) => {
  return (
    <aside
      id="sidebar"
      className={`fixed h-full top-0 left-0 z-10 pt-16 w-52 font-normal lg:flex flex-col transition-width ${
        isSidebar ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col border-r h-full pt-5 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <ul className="">
          <li className="m-2 lg:hidden">
            <SearchBar />
          </li>
          <li>
            <SidebarButton text="Dashboard" iconName="pie-chart" />
          </li>
          <li>
            <Link to="/admin/calendar">
              <SidebarButton text="Calendar" iconName="pie-chart" />
            </Link>
          </li>
          <li>
            <Link to="/admin/crud">
              <SidebarButton text="CRUD" iconName="database" />
            </Link>
          </li>
          <li>
            <SidebarButton text="Setting" iconName="settings" />
          </li>
          <li>
            <a href="https://github.com/psychiatry-spa" target="_blank">
              <SidebarButton text="Repository" iconName="github" />
            </a>
          </li>
          <li>
            <SidebarButton text="Support" iconName="help" />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
