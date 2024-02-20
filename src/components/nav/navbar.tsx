import { Icon } from "../common/icon";
import { IconButton } from "./icon-button";
import { SearchBar } from "./search-bar";

import useColorMode from "../../hooks/useColorMode";
import useSwitchSidebar from "../../hooks/useSwtichSidebar";

export const Navbar = () => {
  const { colorMode, setColorMode } = useColorMode();
  const handleThemeSwitch = () =>
    setColorMode(colorMode === "dark" ? "light" : "dark");

  const { sidebar, setSidebar } = useSwitchSidebar();
  const handleSidebar = () => setSidebar(sidebar === "hidden" ? "" : "hidden");

  return (
    <nav className="fixed z-30 w-full border-b bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex">
        <div className="flex justify-start items-center">
          <div className="lg:hidden p-2">
            <IconButton name="sun" handleClick={handleSidebar} />
          </div>
          <a href="" className="flex justify-start items-center p-4 mr-20">
            <Icon name="moon" styles="size-10" />
            <span className="font-bold text-2xl pl-2 dark:text-white">
              LogoName
            </span>
          </a>
          <div className="w-96 hidden lg:block">
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
