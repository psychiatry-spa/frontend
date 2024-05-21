import { useMutation, useQueryClient } from "react-query";
import fetchData from "./fetchData";

const usePost = <T>(url: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<T, Error, any>(
    (body: any) => fetchData<T>(url, { method: "POST", body }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(url);
      }
    }
  );

  return {
    isLoading: mutation.isLoading,
    data: mutation.data,
    error: mutation.error,
    post: mutation.mutateAsync,
  };
};

export default usePost;