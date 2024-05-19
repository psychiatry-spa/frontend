import useFetchData from "./useFetchData";

const usePost = <T>(url: string) => {
  const { isLoading, data, error, fetchData } = useFetchData<T>(url, { method: "POST" });

  const post = (body: any) => fetchData({ body });

  return { isLoading, data, error, post };
};

export default usePost;