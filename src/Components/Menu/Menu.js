import React, { useState } from 'react';

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
    return (
        <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-semibold">My App</div>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
  
            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg py-2 z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
};

export default Menu;