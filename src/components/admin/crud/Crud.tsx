import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UsersTable from "./components/user-table/UsersTable";
import Container from "../../../layouts/admin/Container";
import Icon from "../../common/Icon";
// import { SearchBar } from "../../common/bars/SearchBar";

const Crud = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="mx-4 my-4">
      <Container>
        <h1 className="text-3xl font-medium mb-4 text-primary dark:text-primary-100">
          All users
        </h1>
        <div className="flex items-center">
          <SearchBar setSearchQuery={setSearchQuery} />
          <button
            className="ml-4 m-1 p-3 rounded-full 
                      text-primary-800 bg-primary-100 hover:bg-primary-200 hover:text-primary
                      dark:text-primary-200 dark:bg-primary-800 dark:hover:bg-primary-700 dark:hover:text-primary-100"
          >
            <Icon name="delete" styles="size-5" />
          </button>
        </div>
        <UsersTable searchQuery={searchQuery} />
      </Container>
    </div>
  );
};

export default Crud;
