import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/tcclogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const active =
    "text-white mx-1 font-medium border-b-2 border-white-900 pb-1 bg-[#215083]  transition     hover:bg-opacity-40  shadow-md rounded-md px-2  lg:text-blue-800    ";

  const normal =
    "  mx-1 text-white-600 font-medium font-bold focus:text-white p-0 lg:text-blue-800   ";
  const navItem = (
    <>
      <li className="nav-item p-2 list-none 	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/home"
        >
          HOME
        </NavLink>
      </li>

      <li className="nav-item p-2 list-none	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/services"
        >
          SERVICES
        </NavLink>
      </li>
      <li className="nav-item p-2 	list-none">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal} `)}
          to="/facilities"
        >
          FACILITIES
        </NavLink>
      </li>
      <li className="nav-item p-2 	list-none">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal} `)}
          to="/offer"
        >
          OFFER
        </NavLink>
      </li>

      <li className="nav-item p-2 list-none	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/about"
        >
          ABOUT US
        </NavLink>
      </li>

      <li className="nav-item p-2  	list-none">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/contact"
        >
          CONTACTS
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <nav className="bg-gray-100 shadow-lg border-l-gray-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-semibold text-xl">

<img src={logo} className="w-24 rounded-lg" alt=""/> 

          </div>
          <div className="hidden md:flex space-x-4 d-none">{navItem}</div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-blue p-2 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden ${
            isOpen ? "transform translate-x-0" : "transform -translate-x-full"
          } transition-left duration-300`}
        >
          <div className="flex flex-col items-center mt-2">
             
            {navItem}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
