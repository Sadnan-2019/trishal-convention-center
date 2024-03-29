import React from "react";
import "./NavContactLanding.css";
import contact from "../../assets/navcontact.png";
const NavContactLanding = () => {
  return (
    <div>
      <div class="bg-cream bg-gradient-to-r from-[#575be8] via-[#160a2c] to-[#38235D]">
        <div class="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
          {/* <!--Left Col--> */}
          <div class="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
            <h1
              data-aos="fade-right"
              data-aos-once="true"
              class="my-4 text-5xl font-bold leading-tight text-white"
            >
              <span class="text-yellow-500">We’re </span> here to help you grow
            </h1>
            <p
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              class="leading-normal text-2xl mb-8 text-white"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="700"
              class="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
            >
              {/* <button class="lg:mx-0 bg-yellow-500 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
						Join for free
					</button> */}
              <div class="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                {/* <button class="bg-white w-14 h-14 rounded-full flex items-center justify-center">
							<svg class="w-5 h-5 ml-2" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE"/>
							</svg>
						</button>
						<span class="cursor-pointer">Watch how it works</span> */}
              </div>
            </div>
          </div>
          {/* <!--Right Col--> */}
          <div class="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              class="w-10/12 mx-auto 2xl:-mb-20"
              src={contact}
            />
            {/* <!-- calendar --> */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              class="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4"
            >
              {/* <img
                class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src="img/calendar.svg"
              /> */}
            </div>
            {/* <!-- red --> */}
         
            {/* <!-- ux class --> */}
           
            {/* <!-- congrats --> */}
            
          </div>
        </div>
        <div class="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
          <svg
            class="xl:h-40 xl:w-full"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              fill="currentColor"
            ></path>
          </svg>
          <div class="bg-white w-full h-20 -mt-px"></div>
        </div>
      </div>
    </div>
  );
};

export default NavContactLanding;
