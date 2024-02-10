import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 bg-white z-50 w-full border-b-2">
      <ul className="flex">
        <li className="p-4 pr-32">
          <div className="inline">LV</div>
          <div className="inline">/</div>
          <div className="inline">RU</div>
          <div className="inline">/</div>
          <div className="inline">EN</div>
        </li>
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/info">Info</Link>
        </li>
        <li className="p-4">
          <Link to="/consulations">Consultations</Link>
        </li>
        <li className="p-4">
          <Link to="/posts">Posts</Link>
        </li>
        <li className="p-4">
          <Link to="/support">Support</Link>
        </li>
        <li className="p-4">
          <Link to="/signin">Sing in</Link>
        </li>
        <li className="p-4">
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
