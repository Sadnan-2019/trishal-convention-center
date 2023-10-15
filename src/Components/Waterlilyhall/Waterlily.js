import React from "react";
import sun from "../../assets/sunfive.jpg";
import "./Waterlily.css";
const Waterlily = () => {
  return (
    <div>
      <section className="  waterlanding   blog h-auto      shadow-xl  text-white">
        <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-5 justify-center items-center">
          <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
            <h1
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
              style={{ lineHeight: "120%" }}
              className=" lg:text-[32px] font-bold text-[20px] text-left   text-transparent text-8xl    bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 "
            >
              {" "}
              Waterlily hall is a fully equipped and modern convention
              hall that you might be thinking about. We have 3 large hall rooms
              in total 11,500 sq ft. Where you can decorate like you are
              dreaming of your program
            </h1>
          </div>

          <div class="  sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0  ">
            {/* <img
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
              src={sun}
              alt=""
              className="rounded-lg  "
            /> */}
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 390"
            xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stop-color="#F78DA7"></stop>
                <stop offset="95%" stop-color="#8ED1FC"></stop>
              </linearGradient>
            </defs>
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 97.29186602870817,207.66507177033492 194.58373205741634,215.33014354066987 292,209 C 389.41626794258366,202.66985645933013 486.956937799043,182.3444976076555 578,172 C 669.043062200957,161.6555023923445 753.5885167464115,161.2918660287081 860,183 C 966.4114832535885,204.7081339712919 1094.688995215311,248.48803827751198 1195,255 C 1295.311004784689,261.511961722488 1367.6555023923445,230.755980861244 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              stroke-width="0"
              fill="white"
              fill-opacity="100"
              class="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Waterlily;
