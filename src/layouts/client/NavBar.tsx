import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed h-20 flex justify-between top-0 left-0 bg-white z-50 w-full border-b-2">
      {/* <img className="m-1 w-16 h-16" src="src\assets\images\monkey.png" /> */}
      <div className="flex">
        <Link
          className="flex items-center justify-center px-3 mx-1 hover:bg-gray-200 font-semibold text-coral"
          to="/"
        >
          Home
        </Link>
        <Link
          className="flex items-center justify-center px-3 mx-1 hover:bg-gray-200 font-semibold"
          to="/sessions"
        >
          Schedule
        </Link>
        <Link
          className="flex items-center justify-center px-3 mx-1 hover:bg-gray-200 font-semibold"
          to="/about"
        >
          Doctor
        </Link>
        <Link
          className="flex items-center justify-center px-3 mx-1  hover:bg-gray-200 font-semibold"
          to="/register"
        >
          News
        </Link>
      </div>
      <div className="flex">
        <Link
          className="flex items-center justify-center h-11 px-3 mx-1 my-auto hover:bg-gray-200 rounded-xl font-semibold"
          to="/login"
        >
          Log in
        </Link>
        <Link
          className="flex items-center justify-center h-11 px-3 mx-1 my-auto rounded-xl text-white font-semibold bg-coral"
          to="/register"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
