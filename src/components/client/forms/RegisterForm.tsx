import { Link } from "react-router-dom";
import { useState } from "react";
import { API_ENDPOINTS } from "../../../constants/const";
import useUsers from "../../../hooks/useUsers";
import Icon from "../../common/icon";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = useUsers(API_ENDPOINTS.signUp, formData, "POST");

  return (
    <form className="p-4 w-80 m-auto border b-1px mt-5" onSubmit={handleSubmit}>
      <h1 className="block text-center text-3xl pb-5 mt-5 font-bold">
        Register
      </h1>
      <div className="mx-auto w-64 block">
        <label className="block mb-2">Email</label>
        <input
          className="border-b p-1 pl-2 w-64 h-8 outline-none"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
        />
      </div>
      <div className="mx-auto w-64 block">
        <label className="block mt-5 mb-2">Username </label>
        <input
          className="border-b pl-2 p-1 w-64  h-8 outline-none"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Your username"
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
          placeholder="Your password"
        />
      </div>
      <button
        className="my-4 mx-auto w-32 h-8 rounded bg-blue-400 font-bold text-white block"
        type="submit"
      >
        Submit
      </button>
      <div className="text-3xl text-center">or</div>
      <Link className="mx-auto block w-64 my-4" to={API_ENDPOINTS.googleLogin}>
        <div className="w-64 border inline-flex items-center p-1">
          <Icon name="google" />
          <p className="pl-4 text-xl">Login with google</p>
        </div>
      </Link>
      <button className="block mx-auto mt-5">
        <Link className="text-gray-400" to="/signin">
          Already have an account
        </Link>
      </button>
    </form>
  );
};

export default RegisterForm;
