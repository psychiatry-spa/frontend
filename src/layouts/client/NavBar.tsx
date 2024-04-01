import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed py-5 h-20 flex justify-between top-0 left-0 bg-white z-50 w-full border-b-2">
      <img className="w-16 h-16" src="src\assets\images\monkey.png" />
      <ul className="flex">
        <li>
          <Link className="p-5 rounded-xl font-semibold text-coral" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="p-5 rounded-xl font-semibold" to="/sessions">
            Schedule
          </Link>
        </li>
        <li>
          <Link className="p-5 rounded-xl font-semibold" to="/about">
            Doctor
          </Link>
        </li>
        <li>
          <Link className="p-5 rounded-xl font-semibold" to="/register">
            News
          </Link>
        </li>
      </ul>
      <div>
        <Link className="p-4 rounded-xl font-semibold" to="/login">
          Log in
        </Link>
        <Link
          className="p-4 rounded-xl text-white font-semibold bg-coral"
          to="/register"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
