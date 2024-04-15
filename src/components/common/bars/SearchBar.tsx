import Icon from "../icon";

export const SearchBar = () => {
  return (
    <form className="w-full">
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
          className="block w-full pl-10 p-2.5 outline-none placeholder-primary-500 
          dark:bg-dark-container dark:border-dark-container dark:placeholder-primary-300"
        />
      </div>
    </form>
  );
};
