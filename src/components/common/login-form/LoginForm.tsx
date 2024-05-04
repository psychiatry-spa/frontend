import { useState } from "react";
import { API_ENDPOINTS } from "../../../constants";
import useSubmitForm from "../../../hooks/api/useSubmitForm";
import InputField from "./components/InputField";
import Button from "../buttons/Button";
import Socials from "../socials/Socials";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../Icon";
import Container from "../Container";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  const isDisabled = () => !formData.email || !formData.password;

  return (
    <Container>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h1 className="font-semibold font-sans mb-5 text-2xl text-primary">
          Log in to Your Account
        </h1>
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
