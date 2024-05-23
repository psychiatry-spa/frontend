import { useMutation, useQueryClient } from "react-query";
import fetchData from "./fetchData";

const useDelete = <T>(url: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<T, Error, any>(
    (body: any) => fetchData<T>(url, { method: "DELETE", body }),
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
    delete: mutation.mutateAsync,
  };
};

export default useDelete;
