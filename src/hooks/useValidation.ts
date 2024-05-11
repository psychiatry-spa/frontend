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
    errors.push("Short password");
  } else {
    if (!passwordRegex.test(formData.password)) {
      errors.push("Weak password");
    }
  }
  if (!emailRegex.test(formData.email)) {
    errors.push("Invalid email format");
  }

  if (formData.fullName) {
    if (!fullnameRegex.test(formData.fullName)) {
      errors.push("Invalid full name format")
    }
  }

  return {errors};
};
