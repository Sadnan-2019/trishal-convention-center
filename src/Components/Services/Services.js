import React, { useState } from "react";
import tgr from "../../assets/tgr.jpg";
import tgrone from "../../assets/tgrone.png";
import tgrtwo from "../../assets/tgr2.jpg";
import tgrthree from "../../assets/tgr3.png";

import "./Services.css";

const Services = () => {
  // const [isFlipped, setIsFlipped] = useState(false);

  // const toggleCard = () => {
  //   setIsFlipped(!isFlipped);
  // };

  return (
    <div>
      <div className=" ">
        <h2
          className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7]      text-3xl text-center    font-bold poppins-b sm:text-4xl "
          // style={{ color: "#536E9B" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Our Services
        </h2>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-0   lg:px-12 gap-10    items-center justify-items-center bg-gradient-to-r from-[#1F5185] via-[#028AC8] to-[#1A5A94]">
        <section class="  h-screen flex justify-center items-center gap-x-16 text-white">
          <div class="w-[300px]  h-[420px] bg-transparent cursor-pointer group perspective">
            <div class="relative shadow-xl preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div class="absolute backface-hidden border-2 w-full h-full">
                <img src={tgr} />
              </div>
              <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gradient-to-r from-[#1F5185] via-[#028AC8] to-[#1A5A94] overflow-hidden">
                <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                  <div class="  px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                    <div className="flex">
                      <img className="w-32" alt="" src={tgrthree} />
                      <img className="w-32" alt="" src={tgrone} />
                    </div>
                  </div>
                  <div>
                    <img className="" alt="" src={tgrtwo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section
      class="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white"
    >
      <div
        class="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective"
      >
        <div
          class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
        >
          <div class="absolute backface-hidden border-2 w-full h-full">
            <img src={tgr}/>
          </div>
          <div
            class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
          >
            <div
              class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
            >
              <h1 class="text-3xl font-semibold">The King's Man</h1>
              <p class="my-2">9.0 Rating</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
              <button
                class="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
              >
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section> */}
      </div>
    </div>
  );
};

export default Services;
