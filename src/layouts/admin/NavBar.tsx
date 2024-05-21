import Icon from "../../components/common/Icon";
import { SearchBar } from "../../components/common/bars/SearchBar";
import { useDarkMode } from "../../context/DarkModeContext";

interface Props {
  handleClick: () => void;
}

const Navbar = ({ handleClick }: Props) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="fixed py-2 z-10 w-full border-b bg-white border-primary-200 dark:bg-dark-container dark:border-dark-border">
      <div className="hidden p-2">
        <button onClick={handleClick}>
          <Icon name="sun" />
        </button>
      </div>
      <div className="flex justify-between">
        <div className="ml-0 w-80  block lg:ml-64">
          <SearchBar />
        </div>

        <div className="flex items-center justify-end w-full">
          <button
            onClick={toggleDarkMode}
            className={`mx-2 text-primary relative inline-flex items-center justify-center w-14 h-8 rounded-full focus:outline-none transition-colors duration-300 ease-in-out ${
              isDarkMode ? "bg-accent" : "bg-primary-100"
            }`}
          >
            <Icon
              name={`${isDarkMode ? "darkmode" : "lightmode"}`}
              styles={
                `text-primary-800 size-3 p-1 absolute left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out dark:bg-primary-800 dark:text-primary-100 ${
                  isDarkMode ? "transform translate-x-full" : ""
              }`}
            />
          </button>

          <button
            className="text-primary-800 mx-2 bg-primary-100 p-2 rounded-full hover:bg-primary-200 hover:text-primary
                       dark:bg-primary-800 dark:text-primary-200 dark:hover:text-primary-100 dark:hover:bg-primary-700"
          >
            <Icon name="bell" styles="size-4" />
          </button>
          <img
            className="size-12 rounded-full mx-2"
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="avatar"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
