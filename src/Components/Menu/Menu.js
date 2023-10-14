import React, { useState } from 'react';

const Menu = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
    return (
      <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-white bg-blue-500 px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600"
      >
        Dropdown
      </button>

      {isDropdownOpen && (
        <div className="absolute top-10 right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
          <ul>
            <li className="p-2 hover:bg-gray-100">
              <a href="#">Item 1</a>
            </li>
            <li className="p-2 hover:bg-gray-100">
              <a href="#">Item 2</a>
            </li>
            <li className="p-2 hover:bg-gray-100 relative">
              <a href="#" className="flex items-center">
                Item 3
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-auto transform transition-transform ${
                    isDropdownOpen ? 'rotate-0' : 'rotate-180'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {isDropdownOpen && (
                <ul className="absolute top-0 left-48 mt-0 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                  <li className="p-2 hover:bg-gray-100">
                    <a href="#">Subitem 1</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="#">Subitem 2</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
    );
};

export default Menu;