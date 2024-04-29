import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="m-1 w-16 h-16" src="src\assets\images\monkey.png" />
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex justify-center items-center space-x-4">
              <NavLink className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-coral" : "text-gray-700 hover:bg-gray-200"}`} to="/">Home</NavLink>
              <NavLink className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-coral" : "text-gray-700 hover:bg-gray-200"}`} to="/sessions">Schedule</NavLink>
              <NavLink className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-coral" : "text-gray-700 hover:bg-gray-200"}`} to="/about">Doctor</NavLink>
              <NavLink className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-coral" : "text-gray-700 hover:bg-gray-200"}`} to="/news">News</NavLink>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="ml-4 flex items-center md:ml-6">
              <NavLink className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-white bg-coral hover:bg-coral-dark" : "text-gray-700 hover:bg-gray-200"}`} to="/login">Log in</NavLink>
              <NavLink className={({isActive}) => `ml-3 px-4 py-2 rounded-md text-sm font-medium ${isActive ? "text-white bg-coral hover:bg-coral-dark" : "text-gray-700 hover:bg-gray-200"}`} to="/register">Register</NavLink>
            </div>
          </div>
          <div className="-ml-2 mr-2 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              >
                {isOpen ? <p className="block h-6 w-6" aria-hidden="true">X</p>: <p className="block h-6 w-6" aria-hidden="true">H</p>}
              </button>
            </div>
        </div>
      </div>
      
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="p-3 space-y-1 sm:px-3">
          <NavLink className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-coral text-white hover:bg-coral-dark" : "text-gray-700"}`} to="/">Home</NavLink>
          <NavLink className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-coral text-white hover:bg-coral-dark" : "text-gray-700"}`} to="/sessions">Schedule</NavLink>
          <NavLink className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-coral text-white hover:bg-coral-dark" : "text-gray-700"}`} to="/about">Doctor</NavLink>
          <NavLink className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-coral text-white hover:bg-coral-dark" : "text-gray-700"}`} to="/news">News</NavLink>
          <NavLink className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-coral text-white hover:bg-coral-dark" : "text-gray-700"}`} to="/login">Log in</NavLink>
          <NavLink className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-coral text-white hover:bg-coral-dark" : "text-gray-700"}`} to="/register">Register</NavLink>
        </div>
      </div>
    </nav>

  );
};

export default NavBar;
