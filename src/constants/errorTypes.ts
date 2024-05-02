type ErrorTypes = {
  passwordShort: string;
  passwordWeak: string;
  emailInvalid: string;
  fullNameInvalid: string;
};

export const ERROR_TYPES: ErrorTypes = {
  passwordShort: "Short password",
  passwordWeak: "Weak password",
  emailInvalid: "Invalid email format",
  fullNameInvalid: "Invalid full name format",
};
