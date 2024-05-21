import { useCallback, useMemo, useState } from "react";
import { API_ENDPOINTS } from "../../../constants";
import InputField from "./components/InputField";
import Button from "../buttons/Button";
import Socials from "../socials/Socials";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../Icon";
import Container from "../Container";
import { useValidation } from "../../../hooks/useValidation";
import { FormErrorFlags, FormData } from "../../types";
import usePost from "../../../api/base/usePost";

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrorFlags>({
    passwordCharactersError: false,
    emailError: false,
    incorrectError: false,
    passwordError: false,
  });

  const navigate = useNavigate();
  const { post, isLoading, error } = usePost(API_ENDPOINTS.signIn);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { validationErrors } = await useValidation(formData);
      if (validationErrors.length > 0) {
        const newErrors = {
          passwordCharactersError: validationErrors.includes("Short password"),
          passwordError: validationErrors.includes("Weak password"),
          incorrectError: false,
          emailError: validationErrors.includes("Invalid email format"),
        };
        setErrors(newErrors);
        return;
      }
      try {
        await post(formData);
        navigate("/admin/dashboard");
      } catch (err) {
        setErrors({ ...errors, incorrectError: true });
      }
    },
    [formData, post, navigate, errors]
  );

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
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...errorKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {}),
    }));
  }, []);

  const isDisabled = useMemo(
    () => !formData.email || !formData.password,
    [formData.email, formData.password]
  );

  return (
    <Container styles="mt-10 h-[550px] lg:h-max m-0 w-[400px] h-full rounded-b md:w-[350px] lg:w-[450px] md:mr-5">
      <form className="flex flex-col" onSubmit={handleSubmit} noValidate={true}>
        <h1 className="font-semibold font-sans mb-5 text-2xl text-primary">
          Log in to Your Account
        </h1>
        <InputField
          name="email"
          inputStyles={
            errors.emailError || errors.incorrectError ? "border-red-500" : ""
          }
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
          inputStyles={
            errors.passwordError ||
            errors.incorrectError ||
            errors.passwordCharactersError
              ? "border-red-500"
              : ""
          }
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
        <div className="flex justify-between text-secondary pt-1 pb-2">
          <div className="flex justify-start items-center">
            Remember me
            <button>
              <Icon name="remember-me" styles="size-4 ml-2" />
            </button>
          </div>
          <Link to="/">Forgot password?</Link>
        </div>
        <Button
          style="primary"
          disabled={isDisabled}
          type="submit"
          styles="my-5 text-2xl font-medium"
        >
          { isLoading ? "Logging in..." : "Log in"}
        </Button>
      </form>
      <Socials text="Or log in with" />
    </Container>
  );
};

export default LoginForm;
