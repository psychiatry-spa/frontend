import Icon from "../../components/common/icon";
import { IconButton } from "../../components/admin/nav-bar/IconButton";
import { SearchBar } from "../../components/common/bars/SearchBar";
import { useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const handleMode = () => setIsDark(!isDark);
  return (
    <nav className="fixed lg:p-4 p-2 z-10 w-full border-b bg-white border-primary-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between">
        <div className="ml-60 w-96 hidden lg:block">
          <SearchBar />
        </div>

        <div className="flex items-center justify-end w-full">
          <button
            onClick={handleMode}
            className={`mx-2 text-primary relative inline-flex items-center justify-center w-14 h-8 rounded-full focus:outline-none transition-colors duration-300 ease-in-out ${
              isDark ? "bg-accent" : "bg-primary-100"
            }`}
          >
            <Icon
              name={`${isDark ? "darkmode" : "lightmode"}`}
              styles={`text-primary-800 size-3 p-1 absolute left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${
                isDark ? "transform translate-x-full" : ""
              }`}
            />
          </button>

          <button className="text-primary-800 mx-2 bg-primary-100 p-2 rounded-full hover:bg-primary-200 hover:text-primary">
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
