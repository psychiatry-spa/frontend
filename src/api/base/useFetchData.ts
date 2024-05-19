import { useCallback, useState } from "react";

interface FetchOptions {
  method?: string;
  headers?: HeadersInit;
  body?: any;
}

interface FetchResponse<T> {
  ok: boolean;
  data: T;
  status: number;
  statusText: string;
}

const useFetchData = <T,>(url: string, options: FetchOptions = {}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async (overrideOptions: FetchOptions = {}) => {
    setIsLoading(true);

    const { method = 'GET', headers = {}, body} = {...options, ...overrideOptions };

    const combinedOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    if (body && (method === 'POST' || method === 'PUT')) {
      combinedOptions.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, combinedOptions);
      let data;

      try {
        data = await response.json();
      } catch (e) {
        data = null;
      }

      const result: FetchResponse<T> = {
        ok: response.ok,
        data,
        status: response.status,
        statusText: response.statusText,
      };

      return result;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [url, options]);

  return { isLoading, data, error, fetchData };
};

export default useFetchData;