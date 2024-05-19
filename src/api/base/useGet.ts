import useFetchData from "./useFetchData";

const useGet = <T>(url: string) => {
  const { isLoading, data, error, fetchData } = useFetchData<T>(url, { method: "GET" });

  return { isLoading, data, error, refetch: fetchData };
};

export default useGet;
