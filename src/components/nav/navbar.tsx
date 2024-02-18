import { Icon } from "../icon";
import { IconButton } from "./icon-button";
import { SearchBar } from "./search-bar";
// import { handleThemeSwitch } from "../../util/switchTheme";

import { useState, useEffect } from "react";

export const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme == "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleThemeSwitch = () => setTheme(theme === "dark" ? "light" : "dark");

  const [sidebar, setSidebar] = useState("hidden");
  const sidebarElem = document.getElementById("sidebar");

  useEffect(() => {
    if (sidebar === "hidden") sidebarElem?.classList.remove("hidden");
    else sidebarElem?.classList.add("hidden");
  }, [sidebar]);

  const handleSidebar = () => {
    setSidebar(sidebar === "hidden" ? "" : "hidden");
  };

  return (
    <nav className="border-b bg-white dark:bg-gray-800 dark:border-gray-700">
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
