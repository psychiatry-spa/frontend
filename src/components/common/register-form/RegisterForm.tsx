import { useNavigate } from "react-router-dom";
import InputField from "../login-form/components/InputField";
import Socials from "../socials/Socials";
import Button from "../buttons/Button";
import { useCallback, useMemo, useState } from "react";
import { API_ENDPOINTS } from "../../../constants";
import useSubmitForm from "../../../hooks/api/useSubmitForm";
import Container from "../Container";
import { useValidation } from "../../../hooks/useValidation";
import { FormData, FormErrorFlags } from "../../types";

const RegisterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrorFlags>({
    passwordCharactersError: false,
    emailError: false,
    incorrectError: false,
    passwordError: false,
    fullNameError: false,
  });

  const navigate = useNavigate();
  const submitForm = useSubmitForm(API_ENDPOINTS.signUp);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    let errorKeys: string[] = ["incorrectError"];
    if (name === "email") {
      errorKeys = ["emailError"];
    } else if (name === "password") {
      errorKeys = ["passwordError", "passwordCharactersError"];
    } else if (name === "fullName") {
      errorKeys = ["fullNameError"];
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...errorKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {}),
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { validationErrors } = await useValidation(formData);
      if (validationErrors.length > 0) {
        const newErrors: FormErrorFlags = {
          passwordCharactersError: validationErrors.includes("Short password"),
          passwordError: validationErrors.includes("Weak password"),
          fullNameError: validationErrors.includes("Invalid full name format"),
          incorrectError: false,
          emailError: validationErrors.includes("Invalid email format"),
        };
        setErrors(newErrors);
        return;
      }
      const result = await submitForm(formData);
      if (!result.ok) {
        setErrors({ ...errors, incorrectError: true });
      } else navigate("/admin/dashboard");
    },
    [formData]
  );

  const isDisabled = useMemo(
    () => !formData.fullName || !formData.email || !formData.password,
    [formData.fullName, formData.email, formData.password]
  );

  return (
    <Container styles="mt-10 h-[550px] lg:h-max m-0 w-[400px] h-full rounded-b md:w-[350px] lg:w-[450px] md:mr-5">
      <form className="flex flex-col" onSubmit={handleSubmit} noValidate={true}>
        <h1 className="font-semibold font-sans mb-5 text-2xl text-primary">
          Create new Account
        </h1>
        <InputField
          name="fullName"
          data={formData.fullName || ""}
          type="fullName"
          handleChange={handleChange}
        />
        {errors.fullNameError && (
          <p className="text-red-500 text-sm">
            Full name should only contain alphabetic characters and spaces.
          </p>
        )}
        <InputField
          name="email"
          data={formData.email}
          type="email"
          handleChange={handleChange}
        />
        {errors.emailError && (
          <p className="text-red-500 text-sm">
            Please enter a valid email address. Example: name@domain.com.
          </p>
        )}
        <InputField
          name="password"
          inputStyles="pr-11"
          data={formData.password}
          type="password"
          handleChange={handleChange}
        />
        {errors.passwordError && (
          <p className="text-red-500 text-sm">
            At least 1 uppercase, lowercase, number and special character.
          </p>
        )}
        {errors.incorrectError && (
          <p className="text-red-500 text-sm">Incorrect email or password</p>
        )}
        {errors.passwordCharactersError && (
          <p className="text-red-500 text-sm">At least 6 characters</p>
        )}
        <Button
          style={"primary"}
          disabled={isDisabled}
          type="submit"
          styles="my-5 text-2xl font-medium"
        >
          Sign up
        </Button>
      </form>
      <Socials text="Or sign up with" />
    </Container>
  );
};

export default RegisterForm;
