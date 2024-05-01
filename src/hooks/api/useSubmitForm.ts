const useSubmitForm = (endpoint: string) => {
  return async (formData?: {}) => {
    console.log(formData)
    try {
      const options: RequestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: formData ? JSON.stringify(formData) : undefined,
      };

      const response = await fetch(endpoint, options);

      if (!response.ok) {
        console.error("Form submission failed");
        return { ok: false };
      }

      const data = await response.json();
      console.log(data);
      return { ok: true, data };
    } catch (error) {
      console.error("Error while submitting the form:", error);
      return { ok: false, error };
    }
  };
};

export default useSubmitForm;
