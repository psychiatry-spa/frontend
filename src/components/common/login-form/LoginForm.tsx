import { useState } from "react";
import { API_ENDPOINTS } from "../../../constants/const";
import useSubmitForm from "../../../hooks/useSubmitForm";
import InputField from "./components/InputField";
import Button from "../buttons/B";
import Socials from "../socials/Socials";
import { useNavigate } from "react-router-dom";

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
      navigate("/admin/home");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="m-20 row-span-2 p-10 rounded-3xl border w-full bg-white">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h1 className="font-semibold font-sans mb-5 text-2xl text-primary">
          Log in to Your Account
        </h1>
        <InputField
          data={formData.email}
          type="email"
          placeholder="Enter your email"
          handleChange={handleChange}
        />
        <InputField
          data={formData.password}
          type="password"
          placeholder="Enter your password"
          handleChange={handleChange}
        />
        <div className="flex justify-between text-secondary py-2">
          <p>Remember me</p>
          <p>Forgot password?</p>
        </div>
        <Button styles="text-white bg-primary my-5 text-2xl font-medium">
          Log in
        </Button>
      </form>
      <Socials text="Or log in with" />

      
    </div>
  );
};

export default LoginForm;
