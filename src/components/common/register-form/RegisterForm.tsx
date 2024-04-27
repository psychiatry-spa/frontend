import { useNavigate } from "react-router-dom";
import InputField from "../login-form/components/InputField";
import Socials from "../socials/Socials";
import Button from "../buttons/Button";
import { useState } from "react";
import { API_ENDPOINTS } from "../../../constants/const";
import useSubmitForm from "../../../hooks/api/useSubmitForm";
import Container from "../Container";
import { useValidation } from "../../../hooks/useValidation";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [passwordCharactersError, setPasswordCharactersError] =
    useState<boolean>();
  const [emailError, setEmailError] = useState<boolean>();
  const [passwordError, setPasswordError] = useState<boolean>();
  const [incorrectError, setIncorrectError] = useState<boolean>();
  const [fullnameError, setFullnameError] = useState<boolean>();

  // TODO: Refactor into separate method
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
    setFullnameError(false);
  };
  const navigate = useNavigate();
  const submitForm = useSubmitForm(API_ENDPOINTS.signUp);

  // TODO: Refactor into separate method
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
          case "Invalid full name format":
            setFullnameError(true);
            break;
        }
      });
      return 0;
    }
    const result = await submitForm(formData);
    result.ok && navigate("/admin/dashboard");
  };

  const isDisabled = () =>
    !formData.fullname || !formData.email || !formData.password;

  return (
    <Container>
      <form className="flex flex-col" onSubmit={handleSubmit} noValidate={true}>
        <h1 className="font-semibold font-sans mb-5 text-2xl text-primary">
          Create new Account
        </h1>
        <InputField
          data={formData.fullname}
          type="fullname"
          handleChange={handleChange}
        />
        {fullnameError && (
          <p className="text-red-500 text-sm">
            Full name should only contain alphabetic characters and spaces.
          </p>
        )}
        <InputField
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

        <Button
          style={"primary"}
          disabled={isDisabled()}
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
