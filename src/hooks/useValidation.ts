export const useValidation = (formData: {
  fullname?: string;
  email: string;
  password: string;
}) => {
  const errors: string[] = [];
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

  if (formData.fullname) {
    let fullnameRegex = /^[A-Za-z\s]+$/;
    if (!fullnameRegex.test(formData.fullname)) {
      console.error(
        "Full name should only contain alphabetic characters and spaces."
      )
      errors.push("Invalid full name format")
    }
  }

  if (errors) return {errors};
};
