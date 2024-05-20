const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const fullnameRegex = /^[A-Za-z\s]+$/;

interface ValidationResult {
  validationErrors: string[];
}

export const useValidation = (formData: {
  fullName?: string;
  email?: string;
  password?: string;
}): ValidationResult => {
  const validationErrors: string[] = [];
  if (formData.password && formData.password.length < 6) {
    validationErrors.push("Short password");
  } else if (formData.password) {
    if (!passwordRegex.test(formData.password)) {
      validationErrors.push("Weak password");
    }
  }
  if (formData.email && !emailRegex.test(formData.email)) {
    validationErrors.push("Invalid email format");
  }

  if (formData.fullName) {
    if (!fullnameRegex.test(formData.fullName)) {
      validationErrors.push("Invalid full name format")
    }
  }

  return { validationErrors };
};
