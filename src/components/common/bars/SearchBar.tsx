import { useState } from "react";
import Icon from "../icon";

export const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);
  return (
    <form className="w-full">
      <label htmlFor="topbar-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <Icon
          name="search"
          styles="size-8 absolute inset-y-0 left-0 pl-3 pt-3"
        />
        <input
          type="text"
          name="search-bar"
          placeholder="Search"
          id="search-bar"
          className="block w-full pl-10 p-2.5 outline-none bg-primary-005 focus:bg-white border border-primary-500 rounded-lg placeholder-secondary 
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
      </div>
    </form>
  );
};
