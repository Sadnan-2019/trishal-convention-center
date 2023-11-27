import React from "react";
import Vehicle1 from "../../assets/Vehicle1.jpg";
import Vehicle2 from "../../assets/Vehicle4.png";
import Vehicle3 from "../../assets/sunfour.jpg";
import calender from "../../assets/facebook.png";
import ux from "../../assets/twitter.png";
import congrat from "../../assets/instagram.png";
import wifi from "../../assets/wifi.avif";
import cctv from "../../assets/cctv.avif";

import "./Facilities.css";

const Facilities = () => {
  return (
    <div className="bg-gradient-to-r from-[#575be8] via-[#160a2c] to-[#38235D]">
      <div className="">
        <div className=" ">
          <h2
            className=" py-5 text-transparent   bg-clip-text  text-white    text-3xl text-center    font-bold poppins-b sm:text-4xl   "
            // style={{ color: "#536E9B" }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our Facilities
          </h2>
        </div>

        <div class="container my-12  md:px-6 ">
          <section class=" relative  text-center">
            <div class="  ">
            
                <div
                  class="mb-6 flex mx-auto flex-wrap  justify-center items-center overflow-hidden rounded-lg  px-3 lg:w-2/3   "
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img src={wifi} class="lg:h-1/4 lg:w-2/3 rounded-lg " alt=""/>

                  <div class="w-full shrink-0 grow-0 basis-auto px-3   text-indigo-100">
                <h5 class="py-5 text-2xl font-bold">High-Speed Free Wi-Fi</h5>

                <p class="mb-6">
                  We are living in a digital era. So social media is very
                  important part of our life. There are other necessity for
                  internet too.Our halls are covered with high speed secured
                  wifi for clients so that no one need to worry about data pack
                  or speed. Just connect yourself to the digital world easily.
                </p>
              </div>
                </div>
            
              
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              class="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-1  floating-4"
            >
              <img
                class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16 lg:h-12 w-12 lg:-left-[20px]  "
                src={calender}
                alt=""
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              class="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating"
            >
              <svg
                class="h-16 sm:h-24"
                viewBox="0 0 149 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <rect
                    x="40"
                    y="32"
                    width="69"
                    height="69"
                    rx="14"
                    fill="#F3627C"
                  />
                </g>
                <rect
                  x="51.35"
                  y="44.075"
                  width="47.3"
                  height="44.85"
                  rx="8"
                  fill="white"
                />
                <path
                  d="M74.5 54.425V78.575"
                  stroke="#F25471"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M65.875 58.7375L65.875 78.575"
                  stroke="#F25471"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M83.125 63.9125V78.575"
                  stroke="#F25471"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="149"
                    height="149"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="20" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              class="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20   lg:-lef-1 floating"
            >
              <img
                class="bg-white bg-opacity-80 rounded-lg  lg:h-12 w-12 sm:h-28"
                src={congrat}
                alt=""
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              class="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4"
            >
              <img
                class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src={ux}
                alt=""
              />
            </div>
          </section>
        </div>

        <div class="container my-12 mx-auto md:px-6 ">
          <section class=" relative  text-center">
            <div class=" flex flex-wrap justify-center">
              <div class="  shrink-0 grow-0 basis-auto px-3 md:w-2/3">
                <div
                  class=" mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img src={Vehicle3} class=" " />
                </div>
              </div>

              <div class="w-full shrink-0 grow-0 basis-auto px-3 md:w-8/12 xl:w-6/12 text-indigo-100">
                <h5 class="mb-3 text-2xl font-bold">200+ Vehicle Parking</h5>

                <p class="mb-6">
                  We understand guests can come from very different locations.
                  So having a parking space is very important in busy places. We
                  have large underground facility with 100+ car parking
                  capability. So you don’t need to worry about your guest’s car
                  parking space at all.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              class="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-1  floating-4"
            >
              <img
                class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16 lg:h-12 w-12 lg:-left-[20px]  "
                src={calender}
                alt=""
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              class="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating"
            >
              <svg
                class="h-16 sm:h-24"
                viewBox="0 0 149 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <rect
                    x="40"
                    y="32"
                    width="69"
                    height="69"
                    rx="14"
                    fill="#F3627C"
                  />
                </g>
                <rect
                  x="51.35"
                  y="44.075"
                  width="47.3"
                  height="44.85"
                  rx="8"
                  fill="white"
                />
                <path
                  d="M74.5 54.425V78.575"
                  stroke="#F25471"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M65.875 58.7375L65.875 78.575"
                  stroke="#F25471"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M83.125 63.9125V78.575"
                  stroke="#F25471"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="149"
                    height="149"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="20" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              class="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20   lg:-lef-1 floating"
            >
              <img
                class="bg-white bg-opacity-80 rounded-lg  lg:h-12 w-12 sm:h-28"
                src={congrat}
                alt=""
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              class="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4"
            >
              <img
                class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src={ux}
                alt=""
              />
            </div>
          </section>
        </div>
        <div class="container my-12 mx-auto md:px-6 ">
          <section class=" relative  text-center">
            <div class=" flex flex-wrap justify-center">
              <div class="  shrink-0 grow-0 basis-auto px-3 md:w-2/3">
                <div
                  class=" mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img src={cctv} class="h-1/2 " />
                </div>
              </div>

              <div class="w-full shrink-0 grow-0 basis-auto px-3 md:w-8/12 xl:w-6/12 text-indigo-100">
                <h5 class="mb-3 text-2xl font-bold">24/7 CCTV Coverage</h5>

                <p class="mb-6">
                  We all need security and safety. So having a surveillance
                  system is very important. As we may not know when something
                  unexpected happens. Our halls are equipped with 24/7 CCTV
                  surveillance and every action is being monitored properly. So
                  if anythings unexpected happens, we can help our clients.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              class="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-1  floating-4"
            >
              <img
                class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16 lg:h-12 w-12 lg:-left-[20px]  "
                src={calender}
                alt=""
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              class="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating"
            >
              <svg
                class="h-16 sm:h-24"
                viewBox="0 0 149 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <rect
                    x="40"
                    y="32"
                    width="69"
                    height="69"
                    rx="14"
                    fill="#F3627C"
                  />
                </g>
                <rect
                  x="51.35"
                  y="44.075"
                  width="47.3"
                  height="44.85"
                  rx="8"
                  fill="white"
                />
                <path
                  d="M74.5 54.425V78.575"
                  stroke="#F25471"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M65.875 58.7375L65.875 78.575"
                  stroke="#F25471"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M83.125 63.9125V78.575"
                  stroke="#F25471"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="149"
                    height="149"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="20" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              class="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20   lg:-lef-1 floating"
            >
              <img
                class="bg-white bg-opacity-80 rounded-lg  lg:h-12 w-12 sm:h-28"
                src={congrat}
                alt=""
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              class="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4"
            >
              <img
                class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src={ux}
                alt=""
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
