export interface FormErrorFlags {
  passwordCharactersError?: boolean;
  emailError?: boolean;
  incorrectError?: boolean;
  passwordError?: boolean;
  fullNameError?: boolean,
}

export interface FormData {
  fullName?: string;
  email: string;
  password: string;
}