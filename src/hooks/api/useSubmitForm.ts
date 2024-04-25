const useSubmitForm = (endpoint: string) => {
  return async (formData?: { email: string; password: string }) => {
    const errors: string[] = [];

    if (formData)
      try {
        if (formData.password.length < 6) {
          console.error("Password must be at least 6 characters long");
          errors.push("Short password");
        } else {
          let passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
          if (!passwordRegex.test(formData.password)) {
            console.error(
              "At least 1 uppercase, lowercase, number and special character."
            );
            errors.push("Weak password");
          }
        }

        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(formData.email)) {
          console.error(
            `Please enter a valid email address. Example: "name@domain.com."`
          );
          errors.push("Invalid email format");
        }

        if (errors.length > 0) return { ok: false, errors };

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
          errors.push("Incorrect email or password");
          return { ok: false, errors };
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
