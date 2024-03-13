const useFetchData = (endpoint: string) => {
  return async () => {
    try {
      const options: RequestInit = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
      };

      const response = await fetch(endpoint, options);

      if (!response.ok) {
        console.error("Failed to fetch data");
        return { ok: false };
      }

      const data = await response.json();
      console.log(data);
      return { ok: true, data };
    } catch (error) {
      console.error("Error while fetching data:", error);
      return {ok: false, error}
    }
  };
};

export default useFetchData;
