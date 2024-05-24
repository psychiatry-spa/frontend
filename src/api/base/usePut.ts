import { useMutation, useQueryClient } from "react-query";
import fetchData from "./fetchData";

const usePut = <T>(url: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<T, Error, any>(
    (body: any) => fetchData<T>(url, { method: "PUT", body }),
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
    put: mutation.mutateAsync,
  };
};

export default usePut;
