import { useEffect, useState } from "react";
import { SearchQueryProps } from "../../../types/types";
import Icon from "../../../common/Icon";

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
      <div className="relative text-primary-600 dark:text-primary-200">
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
          dark:bg-dark-bg-hover dark:border-dark-border dark:placeholder-primary-300 dark:text-primary-300"
        />
      </div>
    </form>
  );
};

export default SearchBar;
