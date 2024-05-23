import { useCallback, useState } from "react";

interface FetchOptions {
  method?: string;
  headers?: HeadersInit;
  body?: any;
}

const fetchData = async <T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> => {
  const { method = "GET", headers = {}, body } = options;

  const combinedOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    credentials: "include",
  };

  if (body && (method === "POST" || method === "PUT")) {
    combinedOptions.body = JSON.stringify(body);
  }
  const response = await fetch(url, combinedOptions);
  let data;

  try {
    data = await response.json();
  } catch (e) {
    data = null;
  }

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return data;
};

export default fetchData;
