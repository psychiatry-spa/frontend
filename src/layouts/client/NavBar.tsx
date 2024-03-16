import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 bg-white z-50 w-full border-b-2">
      <ul className="flex">
        <li className="p-4 pr-32">
          <div className="inline">LV</div>/<div className="inline">RU</div>/
          <div className="inline">EN</div>
        </li>
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4">
          <Link to="/login">Log in</Link>
        </li>
        <li className="p-4">
          <Link to="/register">Register</Link>
        </li>
        <li className="p-4">
          <Link to="/logout">Log out</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
