import Icon from "../icon";

export const SearchBar = () => {
  return (
    <form className="w-full">
      <label htmlFor="topbar-search" className="sr-only">
        Search
      </label>
      <div className="relative text-primary-600">
        <Icon
          name="search"
          styles="size-8 absolute inset-y-0 left-0 pl-3 pt-3"
        />
        <input
          type="text"
          name="search-bar"
          placeholder="Type to search..."
          id="search-bar"
          className="block w-full pl-10 p-2.5 outline-none placeholder-primary-500 
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
      </div>
    </form>
  );
};
