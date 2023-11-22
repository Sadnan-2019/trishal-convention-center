import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

const NewMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
               <div>
      <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white">Logo</div>

        <div className="hidden md:flex space-x-4">
          {/* Add your other navigation links here */}
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>

          {/* Dropdown Menu */}
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="text-white">Services</Menu.Button>

                <Transition
                  show={open}
                  enter="transition-transform duration-300 ease-out"
                  enterFrom="translate-x-[-100%]"
                  enterTo="translate-x-0"
                  leave="transition-transform duration-300 ease-in"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-[-100%]"
                >
                  <Menu.Items
                    static
                    className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            Service 1
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            Service 2
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>

        <div className="md:hidden">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <Transition
        show={isOpen}
        enter="transition-transform duration-300 ease-out"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-300 ease-in"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="md:hidden bg-gray-800">
          {/* Add your mobile navigation links here */}
          <a href="#" className="block py-2 px-4 text-white">Home</a>
          <a href="#" className="block py-2 px-4 text-white">About</a>

          {/* Mobile Dropdown Menu */}
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="block py-2 px-4 text-white">Services</Menu.Button>

                <Transition
                  show={open}
                  enter="transition-transform duration-300 ease-out"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition-transform duration-300 ease-in"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Menu.Items
                    static
                    className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            Service 1
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            Service 2
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </Transition>
    </nav>
    </div>
        </div>
    );
};

export default NewMenu;