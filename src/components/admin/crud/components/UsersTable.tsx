import { useEffect, useMemo, useState } from "react";
import { API_ENDPOINTS } from "../../../../constants/const";
import { SearchQueryProps, UsersProps } from "../../../types/types";
import useFetchData from "../../../../hooks/useFetchData";

const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const UsersTable = ({ searchQuery }: SearchQueryProps) => {
  const [data, setData] = useState<UsersProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sort, setSort] = useState<{
    field: "name" | "role" | "country" | "createdAt" | "consultations" | "none";
    order: "asc" | "desc" | "none";
  }>({ field: "none", order: "none" });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const fetchUsers = useFetchData(API_ENDPOINTS.usersList);
      const response = await fetchUsers();
      if (response.ok) {
        setData(response.data.users);
        setLoading(false);
      } else {
        console.error("Failed to fetch Users");
        setLoading(false);
      }
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

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <table className="table-auto w-full min-w-full">
        <thead className="">
          <tr className="text-deep-sea text-left font-semibold h-10">
            <th
              className="hover:bg-slate-200 rounded-l-md pl-2 cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name
            </th>
            <th
              className="hover:bg-slate-200 lg:table-cell hidden px-3 border-ocean-wave cursor-pointer"
              onClick={() => handleSort("role")}
            >
              Role
            </th>
            <th
              className="hover:bg-slate-200 px-3 border-ocean-wave cursor-pointer"
              onClick={() => handleSort("consultations")}
            >
              Consultations
            </th>
            <th
              className="hover:bg-slate-200 lg:table-cell hidden px-3 border-ocean-wave cursor-pointer"
              onClick={() => handleSort("country")}
            >
              Country
            </th>
            <th
              className="hover:bg-slate-200 xl:table-cell hidden px-3 border-ocean-wave cursor-pointer"
              onClick={() => handleSort("createdAt")}
            >
              Creation date
            </th>
            <th className="px-3">Properties</th>
          </tr>
        </thead>
        <tbody>
          {filteredSortedData.length > 0 ? (
            paginatedData.map(
              ({
                _id,
                imageUrl,
                name,
                surname,
                email,
                role,
                country,
                consultations,
                createdAt,
              }) => (
                <tr
                  className="text-ocean-wave border-b border-ocean-wave/25"
                  key={_id}
                >
                  <td className="pl-2 py-4 flex items-center space-x-3">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={
                        imageUrl
                          ? imageUrl
                          : "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
                      }
                      alt="pfp"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-deep-sea">
                        {name} {surname}
                      </div>
                      <div className="font-normal text-ocean-wave">{email}</div>
                    </div>
                  </td>
                  <td className="lg:table-cell hidden px-3 uppercase font-medium">
                    {role}
                  </td>
                  <td className="px-3 text-deep-sea">{consultations.length}</td>
                  <td className="lg:table-cell hidden px-3">{country}</td>
                  <td className="xl:table-cell hidden px-3">
                    {formatDate(createdAt)}
                  </td>
                  <td>
                    <button className="primary text-base w-20 py-1 bg-ocean-wave">
                      Delete
                    </button>
                  </td>
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
      {filteredSortedData && (
        <div className="flex justify-center mt-4">
          <div className="inline-flex lg:gap-x-3  items-center">
            <button
              className="p-3 w-32 rounded-xl primary text-base inline-block"
              onClick={handlePrevPage}
            >
              Previous page
            </button>
            <span className="mx-3 text-xl text-deep-sea">
              {currentPage} out of {totalPages}
            </span>
            <button
              className="p-3 w-32 rounded-xl primary text-base inline-block"
              onClick={handleNextPage}
            >
              Next page
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UsersTable;
