import { Link } from "react-router-dom";
import { useState } from "react";
import { API_ENDPOINTS } from "../constants/const";
import useUsers from "../hooks/useUsers";

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

  const handleSubmit = useUsers(API_ENDPOINTS.signUp, formData);

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
          <svg
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>{" "}
          <p className="pl-4 text-xl">Login with google</p>
        </div>
      </Link>
      <button className="block mx-auto mt-5">
        <Link className="text-gray-400" to="/login">
          Already have an account
        </Link>
      </button>
    </form>
  );
};

export default RegisterForm;
