import React, { useState } from "react";
import tgr from "../../assets/tgr.jpg";
import tgrone from "../../assets/tgrone.png";
import tgrtwo from "../../assets/tgr2.jpg";
import tgrthree from "../../assets/tgr3.png";
import sunflower from "../../assets/sunflower.jpg"
import suntwo from "../../assets/suntwo.jpg"
import sunthree from "../../assets/sunthree.jpg"
import sunfour from "../../assets/sunfour.jpg"
import orikid from "../../assets/orkidhall.jpg"
import orikidone from "../../assets/orkidfour.jpg"
// import orikidtwo from "../../assets/orkidtwo.jpg"
import orikidthree from "../../assets/orkidthree.jpg"
import orikidfour from "../../assets/orkidone.jpg"
import waterlily from "../../assets/Waterlily.jpeg"

import "./Services.css";

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-[#1F5185] via-[#215083] to-[#1A5A94]">
      <div className=" ">
        <h2
          className="text-transparent   bg-clip-text  text-white    text-3xl text-center    font-bold poppins-b sm:text-4xl  py-7"
          // style={{ color: "#536E9B" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          All Solutions Under One Door

        </h2>
      </div>

      <div className="py-10  grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3   items-center justify-items-center ">
        <section class="rounded-lg     text-white">
          <div class="w-[300px] shadow-xl sha h-[420px] bg-transparent cursor-pointer group perspective">
            <div class="relative  preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div class="absolute backface-hidden border-2 w-full h-full">
                <img src={tgr} />
              </div>
              <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gradient-to-r from-[#1F5185] via-[#028AC8] to-[#1A5A94] overflow-hidden">
                <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                  <div class="  px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-150">
                    <div className="flex">
                      <img className="w-20" alt="" src={tgrthree} />
                      <img className="w-20" alt="" src={tgrone} />
                    </div>
                    <button className="btn btn-sm rounded-lg  mt-[50px]">
                    More Info
                  </button>
                  </div>
                  <div className="w-full h-full">
                    <img className="" alt="" src={tgrtwo} />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="rounded-lg    text-white">
          <div class="w-[300px] shadow-xl h-[420px] bg-transparent cursor-pointer group perspective">
            <div class="relative  preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div class="absolute backface-hidden border-2 w-full h-full">
                <img alt="" src={sunflower} />
              </div>
              <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gradient-to-r from-[#1F5185] via-[#028AC8] to-[#1A5A94] overflow-hidden">
                <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                  <div class="  px-6   font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-150">
                    <div className="flex gap-5  ">
                      <img className="w-20      rounded-full " alt="" src={suntwo} />
                      <img className="w-20    rounded-full" alt="" src={sunfour} />
                       
                    </div>
                    <button className="btn btn-sm rounded-lg   mt-[50px]">
                    More Info
                  </button>
                  </div>
                  <div className="w-full h-full">
                    <img className="" alt="" src={sunthree} />
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
         
        <section class=" rounded-lg    text-white">
          <div class="w-[300px] shadow-xl h-[420px] bg-transparent cursor-pointer group perspective rounded-lg">
            <div class="relative  preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div class="absolute backface-hidden border-2 w-full h-full">
                <img src={waterlily} />
              </div>
              <div class="absolute rounded-lg shadow-xl my-rotate-y-180 backface-hidden w-full h-full bg-gradient-to-r from-[#1F5185] via-[#028AC8] to-[#1A5A94] overflow-hidden">
                <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                  <div class="  px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-150">
                    <div className="flex gap-5">
                      <img className="w-20 rounded-full" alt="" src={orikidthree} />
                      <img className="w-20 rounded-full" alt="" src={orikidfour} />
                    </div>


                    
                   <div className="">
                    
                   <button className="btn btn-sm rounded-lg mt-[50px] ">
                    More Info
                  </button>
                   </div>
                  </div>
                  <div className="w-full h-full">
                    <img className="" alt="" src={orikidone} />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class=" rounded-lg     text-white">
          <div class="w-[300px] shadow-xl h-[420px] bg-transparent cursor-pointer group perspective rounded-lg">
            <div class="relative  preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div class="absolute backface-hidden border-2 w-full h-full">
                <img src={waterlily} />
              </div>
              <div class="absolute rounded-lg shadow-xl my-rotate-y-180 backface-hidden w-full h-full bg-gradient-to-r from-[#1F5185] via-[#028AC8] to-[#1A5A94] overflow-hidden">
                <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                  <div class="  px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-150">
                    <div className="flex gap-5">
                      <img className="w-20 rounded-full" alt="" src={orikidthree} />
                      <img className="w-20 rounded-full" alt="" src={orikidfour} />
                    </div>


                    
                   <div className="">
                    
                   <button className="btn btn-sm rounded-lg mt-[50px] ">
                    More Info
                  </button>
                   </div>
                  </div>
                  <div className="w-full h-full">
                    <img className="" alt="" src={orikidone} />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class=" rounded-lg   text-white">
          <div class="w-[300px] shadow-xl h-[420px] bg-transparent cursor-pointer group perspective rounded-lg">
            <div class="relative  preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div class="absolute backface-hidden border-2 w-full h-full">
                <img src={waterlily} />
              </div>
              <div class="absolute rounded-lg shadow-xl my-rotate-y-180 backface-hidden w-full h-full bg-gradient-to-r from-[#1F5185] via-[#028AC8] to-[#1A5A94] overflow-hidden">
                <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                  <div class="  px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-150">
                    <div className="flex gap-5">
                      <img className="w-20 rounded-full" alt="" src={orikidthree} />
                      <img className="w-20 rounded-full" alt="" src={orikidfour} />
                    </div>


                    
                   <div className="">
                    
                   <button className="btn btn-sm rounded-lg mt-[50px] ">
                    More Info
                  </button>
                   </div>
                  </div>
                  <div className="w-full h-full">
                    <img className="" alt="" src={orikidone} />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class=" rounded-lg    text-white">
          <div class="w-[300px] shadow-xl h-[420px] bg-transparent cursor-pointer group perspective rounded-lg">
            <div class="relative  preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div class="absolute backface-hidden border-2 w-full h-full">
                <img src={waterlily} />
              </div>
              <div class="absolute rounded-lg shadow-xl my-rotate-y-180 backface-hidden w-full h-full bg-gradient-to-r from-[#1F5185] via-[#028AC8] to-[#1A5A94] overflow-hidden">
                <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                  <div class="  px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-150">
                    <div className="flex gap-5">
                      <img className="w-20 rounded-full" alt="" src={orikidthree} />
                      <img className="w-20 rounded-full" alt="" src={orikidfour} />
                    </div>


                    
                   <div className="">
                    
                   <button className="btn btn-sm rounded-lg mt-[50px] ">
                    More Info
                  </button>
                   </div>
                  </div>
                  <div className="w-full h-full">
                    <img className="" alt="" src={orikidone} />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
