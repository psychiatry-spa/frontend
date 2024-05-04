import React, { useState } from "react";
import Container from "../Container";
import useSubmitForm from "../../../hooks/api/useSubmitForm";
import { API_ENDPOINTS } from "../../../constants/index";
import { useNavigate } from "react-router-dom";
import Button from "../buttons/Button";
import InputField from "../login-form/components/InputField";

const ForgotPassordForm = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const navigate = useNavigate();
  const submitForm = useSubmitForm(API_ENDPOINTS.signIn);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await submitForm(formData);
    if (result.ok) {
      navigate("/admin/dashboard");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isDisabled = () => !formData.email;

  return (
    <Container>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h1 className="font-semibold font-sans mb-5 text-2xl text-primary">
          Forgot Your Password?
        </h1>
        <p>Enter your email. We will send you confirmation email</p>
        <InputField
          data={formData.email}
          type="email"
          handleChange={handleChange}
        />
        <Button
          style={"primary"}
          disabled={isDisabled()}
          type="submit"
          styles="my-5 text-2xl font-medium"
        >
          Log in
        </Button>
      </form>
    </Container>
  );
};

export default ForgotPassordForm;
