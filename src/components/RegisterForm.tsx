import axios from "axios";
import { Form, Link } from "react-router-dom";
const RegisterForm = () => {
  axios.get("http://localhost:3000/api/auth/login");

  return (
    <form className="p-4 w-80 m-auto border b-1px mt-5">
      <h1 className="block text-center text-3xl pb-5 mt-5 font-bold">Register</h1>
      <div className="mx-auto w-64 block">
        <label className="block mb-2">Last name</label>
        <input
          className="border-b p-1 pl-2 w-64 h-8 outline-none"
          type="text"
          placeholder="your surname"
        />
      </div>
      <div className="mx-auto w-64 block">
        <label className="block mt-5 mb-2">Email</label>
        <input
          className="border-b pl-2 p-1 w-64  h-8 outline-none"
          type="email"
          placeholder="your email"
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
        <Link to="/login" className="text-gray-400">Already have an account</Link>
      </button>
    </form>
  );
};

export default RegisterForm;
