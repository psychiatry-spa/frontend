import { useQuery } from "react-query";
import fetchData from "./fetchData";

const useGet = <T>(url: string) => {
  const { data, error, isLoading, refetch } = useQuery<T, Error>(url, () =>
    fetchData<T>(url)
  );

  return { isLoading, data, error, refetch };
};

export default useGet;
