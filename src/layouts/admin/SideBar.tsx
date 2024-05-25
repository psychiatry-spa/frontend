import { SidebarButton } from "../../components/admin/side-bar/SidebarButton";
import { SearchBar } from "../../components/common/bars/SearchBar";
import Icon from "../../components/common/Icon";

interface Props {
  isSidebar: boolean;
  setIsSidebar: (isSidebar: boolean) => void;
}

const Sidebar = ({ isSidebar, setIsSidebar }: Props) => {
  const toggleSidebar = () => setIsSidebar(!isSidebar);
  return (
    <>
      <div
        className={`${
          !isSidebar ? "" : "bg-slate-700 md:opacity-0 inset-0 fixed z-20 opacity-50"
        }`}
      ></div>
      <aside
        id="sidebar"
        className={`fixed left-0 h-full z-20 font-normal transition-all duration-300 overflow-hidden ${
          isSidebar ? "w-60" : "w-0"
        } flex-col`}
      >
        <div className="flex flex-col h-full bg-white border-r border-primary-200 dark:bg-dark-container dark:border-dark-border">
          <div className="w-80 text-left mt-3 text-3xl ml-2">
            <button className="" onClick={toggleSidebar}>
              XX
            </button>
          </div>
          <ul>
            {["dashboard", "calendar", "manager", "posts", "settings"].map(
              (name) => (
                <li key={name}>
                  <SidebarButton name={name} setIsSidebar={setIsSidebar} />
                </li>
              )
            )}
            <li className="border-b border-primary-200 mx-3"></li>
            {["repository", "support", "logout"].map((name) => (
              <li key={name}>
                <SidebarButton name={name} setIsSidebar={setIsSidebar} />
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
