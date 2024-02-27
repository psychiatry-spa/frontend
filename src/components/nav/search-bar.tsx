import Icon from "../common/icon";

export const SearchBar = () => {
  return (
    <form className="w-full">
      <label htmlFor="topbar-search" className="sr-only">
        Search
      </label>
      <div className="relative text-gray-500">
        <Icon
          name="search"
          styles="size-8 absolute inset-y-0 left-0 pl-3 pt-3"
        />
        <input
          type="text"
          name="search-bar"
          placeholder="Search"
          id="search-bar"
          className="block w-full pl-10 p-2.5 outline-none bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-base 
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
      </div>
    </form>
  );
};
