import { useState } from "react";
import { API_ENDPOINTS } from "../../../constants/const";
import useSubmitForm from "../../../hooks/api/useSubmitForm";
import InputField from "./components/InputField";
import Button from "../buttons/Button";
import Socials from "../socials/Socials";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../icon";
import Container from "../Container";
import { useValidation } from "../../../hooks/useValidation";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordCharactersError, setPasswordCharactersError] =
    useState<boolean>();
  const [emailError, setEmailError] = useState<boolean>();
  const [passwordError, setPasswordError] = useState<boolean>();
  const [incorrectError, setIncorrectError] = useState<boolean>();

  const navigate = useNavigate();
  const submitForm = useSubmitForm(API_ENDPOINTS.signIn);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = await useValidation(formData);
    if (validation && validation.errors.length > 0) {
      validation.errors.forEach((error) => {
        switch (error) {
          case "Short password":
            setPasswordCharactersError(true);
            break;
          case "Incorrect email or password":
            setIncorrectError(true);
            break;
          case "Weak password":
            setPasswordError(true);
            break;
          case "Invalid email format":
            setEmailError(true);
            break;
        }
      });
      return 0;
    };
    const result = await submitForm(formData);
    if (!result.ok) {
      setIncorrectError(true);
    } else navigate("/admin/dashboard")
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setPasswordCharactersError(false);
    setEmailError(false);
    setPasswordError(false);
    setIncorrectError(false);
  };

  const isDisabled = () => !formData.email || !formData.password;

  return (
    <Container>
      <form className="flex flex-col" onSubmit={handleSubmit} noValidate={true}>
        <h1 className="font-semibold font-sans mb-5 text-2xl text-primary">
          Log in to Your Account
        </h1>
        <InputField
          styles={emailError || incorrectError ? "border-red-500" : ""}
          data={formData.email}
          type="email"
          handleChange={handleChange}
        />
        {emailError && (
          <p className="text-red-500 text-sm">
            Please enter a valid email address. Example: name@domain.com.
          </p>
        )}
        <InputField
          styles={
            passwordError || incorrectError || passwordCharactersError
              ? "border-red-500"
              : ""
          }
          data={formData.password}
          type="password"
          handleChange={handleChange}
        />
        {passwordError && (
          <p className="text-red-500 text-sm">
            At least 1 uppercase, lowercase, number and special character.
          </p>
        )}
        {incorrectError && (
          <p className="text-red-500 text-sm">Incorrect email or password</p>
        )}
        {passwordCharactersError && (
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
          style={"primary"}
          disabled={isDisabled()}
          type="submit"
          styles="my-5 text-2xl font-medium"
        >
          Log in
        </Button>
      </form>
      <Socials text="Or log in with" />
    </Container>
  );
};

export default LoginForm;
