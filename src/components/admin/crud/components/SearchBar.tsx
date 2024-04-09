import { useEffect, useState } from "react";
import { SearchQueryProps } from "../../../types/types";
import Icon from "../../../common/icon";

const SearchBar = ({ setSearchQuery }: SearchQueryProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery && setSearchQuery(inputValue);
    }, 600);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <form className="w-1/2">
      <label htmlFor="topbar-search" className="sr-only">
        Search
      </label>
      <div className="relative text-primary-700">
        <Icon
          name="search"
          styles="size-8 absolute inset-y-0 left-0 pl-3 pt-3"
        />
        <input
          type="text"
          name="search-bar"
          placeholder="Type to search..."
          id="search-bar"
          className="block w-full pl-10 p-2.5 outline-none rounded-lg border
          placeholder-primary-600 bg-primary-005  border-primary-200
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
      </div>
    </form>
  );
};

export default SearchBar;
