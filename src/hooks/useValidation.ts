const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const fullnameRegex = /^[A-Za-z\s]+$/;

interface ValidationResult {
  errors: string[];
}

export const useValidation = (formData: {
  fullName?: string;
  email: string;
  password: string;
}): ValidationResult => {
  const errors: string[] = [];
  
  if (formData.password.length < 6) {
    console.error("Password must be at least 6 characters long");
    errors.push("Short password");
  } else {
    if (!passwordRegex.test(formData.password)) {
      console.error(
        "At least 1 uppercase, lowercase, number and special character."
      );
      errors.push("Weak password");
    }
  }
  if (!emailRegex.test(formData.email)) {
    console.error(
      `Please enter a valid email address. Example: "name@domain.com."`
    );
    errors.push("Invalid email format");
  }

  if (formData.fullName) {
    if (!fullnameRegex.test(formData.fullName)) {
      console.error(
        "Full name should only contain alphabetic characters and spaces."
      )
      errors.push("Invalid full name format")
    }
  }

  return {errors};
};
