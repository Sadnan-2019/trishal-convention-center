import React from "react";
import pic1 from "../../assets/footerimge.jpg"
import WhatsApp from "../WhatsApp/WhatsApp";
const Footer = () => {
  return (
    <div className="">
      <footer class="bg-gradient-to-r from-[#575be8] via-[#160a2c] to-[#38235D] lg:grid lg:grid-cols-5   ">
        <div class="     lg:col-span-1 lg:h-96">
          {/* <img
            src={pic1}
            alt=""
            class="  inset-0 lg:h-96 object-cover"
          /> */}
        </div>

        <div class="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p>
                <span class="text-xs uppercase tracking-wide text-white">
                  Call us
                </span>

                <a
                  href="#"
                  class="block text-2xl font-medium text-white hover:opacity-75 sm:text-3xl"
                >
                  +880 1633-077777
                </a>
              </p>

              {/* <ul class="mt-8 space-y-1 text-sm text-white">
          <li>Monday to Friday: 10am - 5pm</li>
          <li>Weekend: 10am - 3pm</li>
        </ul> */}

              <ul class="mt-8 flex gap-6">
                <li>
                  <a
                    href="https://www.facebook.com/TCCTrishal/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-white transition hover:opacity-75"
                  >
                    <span class="sr-only text-white">Facebook</span>

                    <svg
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                
              </ul>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* <div>
                <p class="font-medium text-white">Services</p>

                <ul class="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" class="text-white transition hover:opacity-75">
                      1on1 Coaching
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-white transition hover:opacity-75">
                      Company Review
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-white transition hover:opacity-75">
                      Accounts Review
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-white transition hover:opacity-75">
                      HR Consulting
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-white transition hover:opacity-75">
                      SEO Optimisation
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p class="font-medium text-white">Company</p>

                <ul class="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" class="text-white transition hover:opacity-75">
                      About
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-white transition hover:opacity-75">
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-white transition hover:opacity-75">
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>

          <div class="mt-12 border-t border-gray-100 pt-12">
            <div class="sm:flex sm:items-center sm:justify-between">
              <ul class="flex flex-wrap gap-4 text-xs">
                <li>
                  <a href="#" class="text-white transition hover:opacity-75">
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href="#" class="text-white transition hover:opacity-75">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="#" class="text-white transition hover:opacity-75">
                    Cookies
                  </a>
                </li>
              </ul>

              <p class="mt-8 text-xs text-white sm:mt-0">
                &copy; 2022. Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <WhatsApp></WhatsApp>
      </footer>
    </div>
  );
};

export default Footer;
