import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UsersTable from "./components/user-table/UsersTable";
import Container from "../../../layouts/admin/Container";
import Icon from "../../common/icon";
// import { SearchBar } from "../../common/bars/SearchBar";

const Crud = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="mx-4 my-4">
      <Container>
        <h1 className="text-3xl font-medium text-primary mb-4">All users</h1>
        <div className="flex items-center">
          <SearchBar setSearchQuery={setSearchQuery} />
          <button className="text-primary-800 ml-4 m-1 bg-primary-100 p-3 rounded-full hover:bg-primary-200 hover:text-primary">
            <Icon name="delete" styles="size-5" />
          </button>
        </div>
        <UsersTable searchQuery={searchQuery} />
      </Container>
    </div>
  );
};

export default Crud;
