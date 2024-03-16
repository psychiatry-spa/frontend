import { useState } from "react";
import { API_ENDPOINTS } from "../../../../constants/const";
import { Link, useNavigate } from "react-router-dom";
import OrLogInWith from "./OrLogInWith";
import Button from "../../../common/buttons/Button";
import useSubmitForm from "../../../../hooks/useSubmitForm";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const SignInForm = ({ children }: Props) => {
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
    <div className="row-span-2 p-10 rounded-3xl border w-full bg-white">
      <form className="" onSubmit={handleSubmit}>
        <h1 className="font-semibold font-sans pb-7 text-2xl text-primary">
          Log in to Your Account
        </h1>
        <input
          className="placeholder-secondary border rounded-xl border-secondary w-full p-3 outline-none"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <div className="block">
          <label className="block mb-1 mt-5 text-teal font-light text-base">
            Password
          </label>
          <input
            className="border rounded-xl border-teal-50 w-full p-3 pr-2 outline-none"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder=""
          />
        </div>
        <div className="mt-2 flex justify-between">{children}</div>
        <div className="mt-12 mb-10">
          <Button type="submit">Log in</Button>
        </div>
      </form>
      <OrLogInWith />
      <div className="flex justify-around">
        <Link to="">
          <Button bgColor="tertiary">Facebook</Button>
        </Link>
        <Link to={API_ENDPOINTS.googleLogin}>
          <Button bgColor="tertiary">Google</Button>
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
