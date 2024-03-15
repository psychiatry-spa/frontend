import { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../../../../constants/const";
import { SearchQueryProps } from "../../../types/types";
import useFetchData from "../../../../hooks/useFetchData";

interface CrudUsersProps {
  imageURL: string;
  name: string;
  surname: string;
  email: string;
  country: string;
  consultationCounter: number;
  role: "admin" | "user";
  createdAt: number;
}

const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const year = date.getFullYear(); // Получаем год
  const month = date.getMonth() + 1; // Получаем месяц, начиная с 0, поэтому прибавляем 1
  const day = date.getDate(); // Получаем день месяца
  // Форматируем часы, минуты и секунды для отображения двух цифр
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // Формируем строку в формате "ГГГГ-ММ-ДД ЧЧ:ММ:СС"
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const UsersTable = ({ searchQuery }: SearchQueryProps) => {
  const [data, setData] = useState<CrudUsersProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const fetchUsers = useFetchData(API_ENDPOINTS.usersList);
      const response = await fetchUsers();
      if (response.ok) {
        setData(response.data.users);
        setLoading(false);
      } else {
        console.log("Failed to fetch Users");
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredData = searchQuery
    ? data.filter(({ name, surname, email }) => {
        const query = searchQuery.toLowerCase();
        return (
          name.toLowerCase().includes(query) ||
          surname.toLowerCase().includes(query) ||
          email.toLowerCase().includes(query)
        );
      })
    : data;

  const handleClick = () => {
    console.log(data);
  };

  return (
    <table className="table-auto w-full min-w-full">
      <thead className="">
        <tr className="text-deep-sea text-left font-light">
          <th className="pl-2 font-medium rounded-tl-lg">Name</th>
          <th className="hidden px-3 font-medium border-x border-frost">
            Role
          </th>
          <th className="px-3 font-medium border-x border-frost">Count</th>
          <th className="hidden px-3 font-medium border-x border-frost">
            Country
          </th>
          <th className="hidden px-3 font-medium border-x border-frost">
            Creation date
          </th>
          <th className="px-3 font-medium rounded-tr-lg">Properties</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          filteredData.map(
            ({
              imageURL,
              name,
              surname,
              email,
              role,
              country,
              consultationCounter,
              createdAt,
            }) => (
              <tr
                className="text-ocean-wave border-b border-ocean-wave/25"
                key={email}
              >
                <td className="pl-2 py-4 flex items-center space-x-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={imageURL}
                    alt="pfp"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold text-deep-sea">
                      {name} {surname}
                    </div>
                    <div className="text-sm text-ocean-wave">{email}</div>
                  </div>
                </td>
                <td className="hidden px-3 uppercase font-medium">{role}</td>
                <td className="px-3 text-deep-sea text-center">
                  {consultationCounter}
                </td>
                <td className="hidden px-3">{country}</td>
                <td className="hidden px-3">{formatDate(createdAt)}</td>
                <td>
                  <button
                    onClick={handleClick}
                    className="primary text-base w-20 py-1 bg-ocean-wave"
                  >
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
              <button onClick={handleClick}>eiorfeoirk</button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UsersTable;
