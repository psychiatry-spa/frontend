import React from "react";

const useUsers = (
  enpoint: string,
  formData: {}
): React.FormEventHandler<HTMLFormElement> => {
  return async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(enpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error while submitting the form:", error);
    }
  };
};

export default useUsers;
