import React, { useState } from "react";
import Container from "../Container";
import useSubmitForm from "../../../hooks/api/useSubmitForm";
import { API_ENDPOINTS } from "../../../constants/index";
import { useNavigate } from "react-router-dom";
import Button from "../buttons/Button";
import InputField from "../login-form/components/InputField";

const RessetPasswordForm = () => {
  const [formData, setFormData] = useState({
    password: "",
  });

  const navigate = useNavigate();
  const submitForm = useSubmitForm(API_ENDPOINTS.signIn);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await submitForm(formData);
    if (result.ok) {
      navigate("/login");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isDisabled = () => !formData.password;

  return (
    <Container>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h1 className="font-semibold font-sans mb-5 text-2xl text-primary">
          Create New Password
        </h1>
        <p>Create new password for your account</p>
        <InputField
          data={formData.password}
          type="password"
          handleChange={handleChange}
        />
        <InputField
          data={formData.password}
          type="password"
          handleChange={handleChange}
          placeholder="Confirm your password"
        />
        <Button
          style={"primary"}
          disabled={isDisabled()}
          type="submit"
          styles="my-5 text-2xl font-medium"
        >
          Create password
        </Button>
      </form>
    </Container>
  );
};

export default RessetPasswordForm;
