import { useEffect, useState } from "react";
import { SearchQueryProps } from "../../../types/types";

const SearchBar = ({ setSearchQuery }: SearchQueryProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery && setSearchQuery(inputValue);
    }, 600);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <form className="w-full mt-7 mb-8 pl-3 py-3 rounded-xl border border-deep-sea/50">
      <div className="w-12 inline-block">*Icon*</div>
      <input
        className="placeholder-ocean-wave bg-[#F9FAFB] outline-none inline"
        type="text"
        placeholder="Search for users"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
    </form>
  );
};

export default SearchBar;
