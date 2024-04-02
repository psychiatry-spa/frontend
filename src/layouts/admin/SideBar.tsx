import { SidebarButton } from "../../components/admin/side-bar/SidebarButton";
import { SearchBar } from "../../components/common/bars/SearchBar";
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
            <Link to="/admin/dashboard">
              <SidebarButton text="Dashboard" iconName="dashboard" />
            </Link>
          </li>
          <li>
            <Link to="/admin/calendar">
              <SidebarButton text="Calendar" iconName="date" />
            </Link>
          </li>
          <li>
            <Link to="/admin/manager">
              <SidebarButton text="Manager" iconName="database" />
            </Link>
          </li>
          <li>
            <Link to="/admin/posts">
              <SidebarButton text="Posts" iconName="post" />
            </Link>
          </li>
          <li>
            <Link to="/admin/settings">
              <SidebarButton text="Setting" iconName="settings" />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/psychiatry-spa" target="_blank">
              <SidebarButton text="Repository" iconName="github" />
            </Link>
          </li>
          <li>
            <SidebarButton text="Support" iconName="support" />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
