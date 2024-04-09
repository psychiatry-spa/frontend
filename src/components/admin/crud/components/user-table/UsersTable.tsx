import { useEffect, useMemo, useState } from "react";
import { API_ENDPOINTS } from "../../../../../constants/const";
import { SearchQueryProps, UsersProps } from "../../../../types/types";
import useFetchData from "../../../../../hooks/useFetchData";

import TableHeader from "./components/TableHeader";
import TableNameItem from "./components/TableNameItem";
import TableItem from "./components/TableItem";
import Icon from "../../../../common/icon";

import { format } from "date-fns";

const UsersTable = ({ searchQuery }: SearchQueryProps) => {
  const [data, setData] = useState<UsersProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sort, setSort] = useState<{
    field: "name" | "role" | "country" | "createdAt" | "consultations" | "none";
    order: "asc" | "desc" | "none";
  }>({ field: "none", order: "none" });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const fetchUsers = useFetchData(API_ENDPOINTS.usersList);
      const response = await fetchUsers();
      if (response.ok) setData(response.data.users);
      else console.error("Failed to fetch Users");
      setLoading(false);
    };

    fetchData();
  }, [searchQuery]);

  const filteredSortedData = useMemo(() => {
    let sortedData = [...data];

    if (searchQuery) {
      sortedData = sortedData.filter(({ name, surname, email }) =>
        [name, surname, email].some((value) =>
          value.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    if (sort.field !== "none" && sort.order !== "none") {
      sortedData.sort((a, b) => {
        const key = sort.field as keyof UsersProps;

        let valueA = String(a[key] ?? "");
        let valueB = String(b[key] ?? "");

        if (key === "createdAt") {
          return sort.order === "asc"
            ? new Date(valueA as string).getTime() -
                new Date(valueB as string).getTime()
            : new Date(valueB as string).getTime() -
                new Date(valueA as string).getTime();
        } else if (key === "consultations") {
          const lengthA = (a[key] as unknown as any[]).length;
          const lengthB = (b[key] as unknown as any[]).length;
          return sort.order === "asc" ? lengthA - lengthB : lengthB - lengthA;
        } else {
          return sort.order === "asc"
            ? (valueA as string).localeCompare(valueB as string)
            : (valueB as string).localeCompare(valueA as string);
        }
      });
    }

    return sortedData;
  }, [data, searchQuery, sort]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredSortedData.slice(startIndex, endIndex);
  }, [filteredSortedData, currentPage, itemsPerPage]);

  const handleSort = (field: typeof sort.field) => {
    setSort((prevSort) => {
      if (prevSort.field !== field) return { field, order: "asc" };

      if (field === "createdAt") {
        return {
          field,
          order: prevSort.order === "none" ? "asc" : "none",
        };
      }

      if (field === "consultations")
        return {
          field,
          order: prevSort.order === "asc" ? "desc" : "asc",
        };

      return {
        field,
        order:
          prevSort.order === "none"
            ? "asc"
            : prevSort.order === "asc"
            ? "desc"
            : "none",
      };
    });
  };

  const totalPages = Math.ceil(filteredSortedData.length / itemsPerPage);

  const handlePrevPage = () =>
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  const handleNextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));

  // if (loading)
  //   return (
  //     <table className="table-auto w-full min-w-full mt-4 animate-pulse">
  //       <thead className="border-b border-primary-200">
  //         <tr>
  //           {}
  //           <td className="h-10 bg-primary-100 "></td>
  //           <td className="h-10 bg-primary-100 "></td>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr>
  //           <td className="h-2.5 bg-gray-200"></td>
  //           <td className="loading-skeleton-cell"></td>
  //           <td className="loading-skeleton-cell"></td>
  //         </tr>
  //         <tr>
  //           <td className="loading-skeleton-cell"></td>
  //           <td className="loading-skeleton-cell"></td>
  //           <td className="loading-skeleton-cell"></td>
  //         </tr>
  //         <tr>
  //           <td className="loading-skeleton-cell"></td>
  //           <td className="loading-skeleton-cell"></td>
  //           <td className="loading-skeleton-cell"></td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   );

  return (
    <>
      <table className="table-auto w-full min-w-full mt-4">
        <thead className="bg-primary-005 border-b border-primary-200">
          <tr className="text-primary-600">
            {["name", "role", "consultations", "country", "createdAt", ""].map(
              (name) => (
                <TableHeader name={name} handleClick={() => handleSort(name)} />
              )
            )}
          </tr>
        </thead>
        <tbody>
          {filteredSortedData.length > 0 ? (
            paginatedData.map(
              (
                {
                  _id,
                  imageUrl,
                  name,
                  surname,
                  email,
                  role,
                  country,
                  consultations,
                  createdAt,
                },
                index
              ) => (
                <tr
                  className={`border-b border-primary-200${
                    index % 2 !== 0 && " bg-primary-001"
                  }`}
                  key={_id}
                >
                  {!loading ? (
                    <>
                      <TableNameItem
                        name={name}
                        surname={surname}
                        email={email}
                        imageUrl={imageUrl}
                      />

                      {[
                        role,
                        consultations.length.toString(),
                        (country = ""),
                        format(createdAt, "MM.dd.yyyy H:mm:ss"),
                      ].map((text) => (
                        <TableItem text={text} />
                      ))}

                      <td>
                        <button className="text-primary-800 ml-4 m-1 bg-primary-100 p-3 rounded-full hover:bg-primary-200 hover:text-primary">
                          <Icon name="delete" styles="size-5" />
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="pl-2 py-3 flex items-center gap-x-5">
                        <img
                          className="size-10 rounded-full"
                          src={
                            "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
                          }
                          alt="avatar"
                        />
                        <div className="flex flex-col">
                          <span className="font-semibold bg-primary-100 py-1 px-6">
                            AAaasdsadasdsad
                          </span>
                          <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap text-primary-600">
                            dasdsadsad
                          </span>
                        </div>
                      </td>
                      <td className="pl-2 py-3 flex items-center gap-x-5">
                        <img
                          className="size-10 rounded-full"
                          src={
                            "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
                          }
                          alt="avatar"
                        />
                        <div className="flex flex-col">
                          <span className="font-semibold bg-primary-100 py-1 px-6">
                            AAaasdsadasdsad
                          </span>
                          <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap text-primary-600">
                            asdasdasda
                          </span>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={9999} className="text-5xl text-center py-32 pr-32">
                No results
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {filteredSortedData.length > 0 && (
        <div className="flex items-center justify-start pt-5">
          <button
            onClick={handlePrevPage}
            className="mr-2 text-primary-800 p-1.5 rounded-full hover:bg-primary-200 hover:text-primary"
          >
            <Icon name="arrow-left" styles="size-4" />
          </button>
          <button
            onClick={handleNextPage}
            className="mr-2 text-primary-800 p-1.5 rounded-full hover:bg-primary-200 hover:text-primary"
          >
            <Icon name="arrow-right" styles="size-4" />
          </button>
          <span className="text-sm text-primary-600 mr-1">Showing </span>
          <span className="text-primary text-sm font-medium mr-1">1-20</span>
          <span className="text-sm text-primary-600 mr-1"> of </span>
          <span className="text-primary text-sm font-medium">100</span>
        </div>
      )}
    </>
  );
};

export default UsersTable;
