import { useNavigate } from "react-router-dom";
import InputField from "../login-form/components/InputField";
import Socials from "../socials/Socials";
import Button from "../buttons/Button";
import { useState } from "react";
import { API_ENDPOINTS } from "../../../constants";
import useSubmitForm from "../../../hooks/api/useSubmitForm";
import Container from "../Container";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // TODO: Refactor into separate method
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const submitForm = useSubmitForm(API_ENDPOINTS.signUp);

  // TODO: Refactor into separate method
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await submitForm(formData);
    if (result.ok) {
      navigate("/admin/dashboard");
    }
  };

  const isDisabled = () =>
    !formData.name || !formData.email || !formData.password;

  return (
    <Container>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h1 className="font-semibold font-sans mb-5 text-2xl text-primary">
          Create new Account
        </h1>
        <InputField
          data={formData.name}
          type="name"
          handleChange={handleChange}
        />
        <InputField
          data={formData.email}
          type="email"
          handleChange={handleChange}
        />
        <InputField
          data={formData.password}
          type="password"
          handleChange={handleChange}
        />

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
