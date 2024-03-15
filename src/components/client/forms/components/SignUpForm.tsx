import { useState } from "react";
import { API_ENDPOINTS } from "../../../../constants/const";
import { Link, useNavigate } from "react-router-dom";
import OrLogInWith from "./OrLogInWith";
import Button from "../../../common/buttons/Button";
import { ChildrenProps } from "../../../types/types";
import useSubmitForm from "../../../../hooks/useSubmitForm";

const SignUpForm = ({ children }: ChildrenProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const submitForm = useSubmitForm(API_ENDPOINTS.signUp);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await submitForm(formData);
    if (result.ok) {
      navigate("/admin/home");
    }
  };

  return (
    <div className="row-span-2 px-8 py-10 rounded-3xl m-10 inline-block border w-[650px]">
      <form className="" onSubmit={handleSubmit}>
        <h1 className="font-semibold font-sans pb-7 text-2xl text-teal">
          Create your new account
        </h1>
        <p>
          Do not have an account? Please provide your data and create a new
          account.
        </p>
        <div className="flex w-full justify-between">
          <div className="inline-block">
            <label className="block mb-1 text-teal font-light text-base">
              Name
            </label>
            <input
              className="border rounded-xl border-teal-50 w-1/2 p-3 pr-2 outline-none"
              type="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div className="inline-block">
            <label className="block mb-1 text-teal font-light text-base">
              Surname
            </label>
            <input
              className="border rounded-xl border-teal-50  w-1/2 p-3 pr-2 outline-none"
              type="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder=""
            />
          </div>
        </div>
        <div className="block">
          <label className="block mb-1 text-teal font-light text-base">
            Email address
          </label>
          <input
            className="border rounded-xl border-teal-50 w-full p-3 pr-2 outline-none"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=""
          />
        </div>
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
        <div className="mt-12 mb-10">
          <Button type="submit">Sign up</Button>
        </div>
      </form>
      {children}
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

export default SignUpForm;
