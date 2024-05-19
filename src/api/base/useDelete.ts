import useFetchData from "./useFetchData";

const useDelete = <T,>(url: string) => {
  const { isLoading, data, error, fetchData } = useFetchData<T>(url, { method: 'DELETE' });

  const del = () => fetchData();

  return { isLoading, data, error, del };
};

export default useDelete;