import { Transition } from '@headlessui/react';
import React, { useState } from 'react';

const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
      <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">Logo</div>
        <div className="hidden md:flex space-x-4">
          {/* Add other sections here */}
          <a href="#" className="text-white">Section 1</a>
          <a href="#" className="text-white">Section 2</a>
          <a href="#" className="text-white">Section 3</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Responsive Dropdown */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-gray-800 z-50">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white focus:outline-none"
            >
              Close
            </button>
          </div>
          <div className="flex flex-col items-center">
            <a href="#" className="text-white my-2">Section 1</a>
            <a href="#" className="text-white my-2">Section 2</a>
            <a href="#" className="text-white my-2">Section 3</a>
          </div>
        </div>
      </Transition>
    </nav>
    </div>
    );
};

export default Menu;