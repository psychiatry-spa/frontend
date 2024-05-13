import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UsersTable from "./components/user-table/UsersTable";
import Container from "../../../layouts/admin/Container";
import IconButton from "../../common/buttons/IconButton";

const Crud = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="m-4">
      <Container>
        <h1 className="text-3xl font-medium mb-4 text-primary dark:text-primary-100">
          All users
        </h1>
        <div className="flex items-center">
          <SearchBar setSearchQuery={setSearchQuery} />
          <IconButton name="delete" isBackground={true} styles="ml-4" />
        </div>
        <UsersTable searchQuery={searchQuery} />
      </Container>
    </div>
  );
};

export default Crud;
