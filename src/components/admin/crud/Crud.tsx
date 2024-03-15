import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UsersTable from "./components/UsersTable";

const Crud = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="ml-6 mt-8">
      <h1 className="text-3xl font-medium text-deep-sea/">All users</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <UsersTable searchQuery={searchQuery} />
    </div>
  );
};

export default Crud;
