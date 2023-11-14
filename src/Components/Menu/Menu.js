import { Transition } from '@headlessui/react';
import React, { useState } from 'react';

const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between bg-gray-800 p-4">
        {/* Your Navbar Content */}
        <div>
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white ml-4">About</a>
          {/* Add more links as needed */}
        </div>
      </nav>

      {/* Mobile & Tablet Navbar */}
      <nav className="md:hidden">
        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="  p-2 focus:outline-none text-red-400"
        >
          ☰
        </button>

        {/* Mobile & Tablet Navbar Links */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute top-100 left-1000 w-full h-screen bg-gray-800 p-4">
            <div>
              <a href="#" className="text-white">Home</a>
              <a href="#" className="text-white mt-2">About</a>
              {/* Add more links as needed */}
            </div>
          </div>
        </Transition>
      </nav>
    </div>
    );
};

export default Menu;