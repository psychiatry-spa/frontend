import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 bg-white z-50 w-full border-b-2">
      <ul className="flex">
        <li className="p-4 pr-32">
          <div className="inline">LOH</div>/<div className="inline">RU</div>/
          <div className="inline">EN</div>
        </li>
        <li className="p-4">
          <Link to="/admin/home">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/client/info">Info</Link>
        </li>
        <li className="p-4">
          <Link to="/client/consulations">Consultations</Link>
        </li>
        <li className="p-4">
          <Link to="/client/posts">Posts</Link>
        </li>
        <li className="p-4">
          <Link to="/client/support">Support</Link>
        </li>
        <li className="p-4">
          <Link to="/client/signin">Sing in</Link>
        </li>
        <li className="p-4">
          <Link to="/client/signup">Sign up</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
