import { Link } from "react-router-dom";
import { useState } from "react";
import apiClient from "../services/api-client";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login Successful:", data);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error while submitting the form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 w-80 m-auto border b-1px mt-5">
      <h1 className="block text-center text-3xl pb-5 mt-5 font-bold">Login</h1>
      <div className="mx-auto w-64 block">
        <label className="block mb-2">Email</label>
        <input
          className="border-b p-1 pl-2 w-64 h-8 outline-none"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your email"
        />
      </div>
      <div className="mx-auto w-64 block">
        <label className="block mt-5 mb-2">Password </label>
        <input
          className="border-b pl-2 p-1 w-64  h-8 outline-none"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="your password"
        />
      </div>
      <button
        className="my-4 mx-auto w-32 h-8 rounded bg-blue-400 font-bold text-white block"
        type="submit"
      >
        Submit
      </button>
      <div className="text-3xl text-center">or</div>
      <div>*Здесь будет гугл аутенфикация Тимура*</div>
      <button className="block mx-auto mt-5">
        <Link to="/register" className="text-gray-400">
          Don't have an account
        </Link>
      </button>
    </form>
  );
};

export default LoginForm;
