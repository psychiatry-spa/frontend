import Icon from "../common/icon";
import { IconButton } from "./icon-button";
import { SearchBar } from "./search-bar";

import { useState, useEffect } from "react";

interface Props {
  isSidebar: boolean;
  setSidebar: (isSidebar: boolean) => void;
}

const Navbar = ({ isSidebar, setSidebar }: Props) => {
  const [colorMode, setColorMode] = useState(false);

  useEffect(() => {
    if (colorMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [colorMode]);

  const handleThemeSwitch = () => setColorMode(!colorMode);
  const handleSidebar = () => setSidebar(!isSidebar);

  return (
    <nav className="fixed lg:p-3 p-2 z-30 w-full border-b bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex">
        <div className="flex justify-start items-center">
          <div className="lg:hidden p-2">
            <IconButton name="sun" handleClick={handleSidebar} />
          </div>
          <a href="" className="flex justify-start items-center pr-6 mr-16">
            <Icon name="moon" styles="size-10" />
            <span className="font-bold text-2xl dark:text-white">LogoName</span>
          </a>
          <div className="ml-1 w-96 hidden lg:block">
            <SearchBar />
          </div>
        </div>

        <div className="flex items-center justify-end w-full">
          <IconButton name="bell" />
          <IconButton name="moon" handleClick={handleThemeSwitch} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
