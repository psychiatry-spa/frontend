import useFetchData from "./useFetchData";

const usePut = <T,>(url: string) => {
  const { isLoading, data, error, fetchData } = useFetchData<T>(url, { method: 'PUT' });

  const put = (body: any) => fetchData({ body });

  return { isLoading, data, error, put };
};

export default usePut;