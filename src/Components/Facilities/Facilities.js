import React from "react";
import Vehicle1 from "../../assets/Vehicle1.jpg";
import Vehicle2 from "../../assets/Vehicle4.png";
import Vehicle3 from "../../assets/Vehicle5.png";
import calender from "../../assets/facebook.png";
import ux from "../../assets/twitter.png";
import congrat from "../../assets/instagram.png";
import parking from "../../assets/sunfour.jpg";

import "./Facilities.css";

const Facilities = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#575be8] via-[#160a2c] to-[#38235D]">
        <div className=" ">
          <h2
            className="text-transparent   bg-clip-text  text-white    text-3xl text-center    font-bold poppins-b sm:text-4xl  py-7"
            // style={{ color: "#536E9B" }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our Facilities
          </h2>
        </div>

        <div class="">
          <div class="  rounded-2xl bg-blue-500 bg-opacity-5 px-4 text-blue-500 dark:bg-opacity-20 md:h-[400px] lg:h-[500px]  relative border-4 border-blue-500">
            <div class="pointer-events-none absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-white dark:bg-black"></div>
            <p class="mb-8 text-center text-4xl font-bold">
              High-Speed Free Wi-Fi
            </p>
           
            <div className="  ">

            <ul class=" mx-10 px-10   items-center justify-center flex   flex-col md:flex-row     text-sm font-medium text-white dark:text-white sm:text-base ">
              <li class="my-1 flex w-1/2 items-center">
                <svg
                  class="mr-2 flex-shrink-0 text-blue-500"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div class="book h-4/5 lg:h-full   w-screen  md:w-3/4 lg:w-5/6 ">
                  <p>
                    We are living in a digital era. So social media is very
                    important part of our life. There are other necessity for
                    internet too.
                  </p>
                  <div class="cover">
                    <p>Hover Me</p>
                  </div>
                </div>
              </li>
              <li class="my-1 flex w-1/2 items-center">
                <svg
                  class="mr-2 flex-shrink-0 text-blue-500"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="text-3xl ">
                  Our halls are covered with high speed secured wifi for clients
                  so that no one need to worry about data pack or speed. Just
                  connect yourself to the digital world easily.
                </p>
              </li>

              <li></li>
            </ul>


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
            {/* <div class="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
              
            </div> */}
          </div>
        </div>
{/* 
        <div class="py-6 parking">
          <div class="mx-auto  flex   max-w-[90rem] flex-col justify-center rounded-2xl    px-4 text-blue-500 dark:bg-opacity-20 md:h-[400px] lg:h-[500px]  relative border-4 border-blue-500">
            <div class="pointer-events-none absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-white dark:bg-black"></div>
            <span class="mb-8 text-center text-4xl font-bold">
              100+ Vehicle Parking
            </span>
            <ul class="flex flex-wrap text-sm font-medium text-white dark:text-white sm:text-base md:mx-auto md:max-w-screen-sm">
              <li class="my-1 flex w-1/2 items-center">
                <svg
                  class="mr-2 flex-shrink-0 text-blue-500"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="text-3xl">
                  {" "}
                  We understand guests can come from very different locations.
                  So having a parking space is very important in busy places.
                </p>
              </li>
              <li class="my-1 flex w-1/2 items-center">
                <svg
                  class="mr-2 flex-shrink-0 text-blue-500"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="text-3xl ">
                  We have large underground facility with 100+ car parking
                  capability. So you don’t need to worry about your guest’s car
                  parking space at all.
                </p>
              </li>

              <li></li>
            </ul>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              class="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-1  floating-4"
            >
              <img
                class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16 lg:h-24 w-32 lg:-left-[20px]  "
                src={Vehicle1}
                alt=""
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              class="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20   lg:-lef-1 floating"
            >
              <img
                class="bg-white bg-opacity-80 rounded-lg  lg:h-24 w-32 sm:h-28"
                src={Vehicle2}
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
                class="bg-white bg-opacity-80 rounded-lg lg:h-24 lg:w-24 sm:h-16"
                src={Vehicle3}
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="py-6">
          <div class="mx-auto flex h-[500px] max-w-[90rem] flex-col justify-center rounded-2xl bg-blue-500 bg-opacity-5 px-4 text-blue-500 dark:bg-opacity-20 md:h-[400px] lg:h-[500px]  relative border-4 border-blue-500">
            <div class="pointer-events-none absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-white dark:bg-black"></div>
            <span class="mb-8 text-center text-4xl font-bold">
              24/7 CCTV Coverage
            </span>
            <ul class="flex flex-wrap text-sm font-medium text-white dark:text-white sm:text-base md:mx-auto md:max-w-screen-sm">
              <li class="my-1 flex w-1/2 items-center">
                <svg
                  class="mr-2 flex-shrink-0 text-blue-500"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="text-3xl">
                  {" "}
                  We all need security and safety. So having a surveillance
                  system is very important. As we may not know when something
                  unexpected happens.
                </p>
              </li>
              <li class="my-1 flex w-1/2 items-center">
                <svg
                  class="mr-2 flex-shrink-0 text-blue-500"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="text-3xl ">
                  Our halls are equipped with 24/7 CCTV surveillance and every
                  action is being monitored properly. So if anythings unexpected
                  happens, we can help our clients.
                </p>
              </li>

              <li></li>
            </ul>
        

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              class="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating"
            >
               
            </div>

             
          </div>
        </div> */}
      </div>






      <div class="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
  {/* <!-- Themes: blue, purple and teal --> */}
  <div data-theme="teal" class="mx-auto max-w-6xl">
    <h2 class="sr-only">Featured case study</h2>
    <section class="font-sans text-black">
      <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
        <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
          <div class="h-full">
            <article class="h-full">
              <div class="h-full">
                <img class="h-full object-cover" src="https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW" width="733" height="412" alt='""' typeof="foaf:Image" />
              </div>
            </article>
          </div>
        </div>
        <div class="p-6 bg-grey">
          <div class="leading-relaxed">
            <h2 class="leading-tight text-4xl font-bold">CXcon: Experience Transformation</h2>
            <p class="mt-4">Our second CXcon in October was dedicated to experience transformation. The free one-day virtual event&nbsp;brought together 230+ heads of digital, thought leaders, and UX practitioners to discuss all aspects of experience design..</p>
            <p class="mt-4">In a jam-packed day filled with keynote sessions, panels, and virtual networking we explored topics including design leadership, UX ethics, designing for emotion and innovation at scale.</p>
            <p><a class="mt-4 button button--secondary" href="https://inviqa.com/cxcon-experience-transformation">Explore this event</a></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>






















      
    </div>
  );
};

export default Facilities;
