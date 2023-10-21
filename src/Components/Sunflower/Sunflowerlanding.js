import React from 'react';
 
import "./Sunflower.css";
import { BsArrowRight } from "react-icons/bs";
const Sunflowerlanding = () => {
    return (
        <div>
             <div className="">
        <div class=" sunflower  text-white">
          <div className=" ">
            <section className="landingtwo  blog h-auto       text-white">
              <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-2  gap-5 justify-center items-center">
                <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
                  <h2
                    style={{ lineHeight: "120%" }}
                    className="   md:text-[43px] font-bold text-[20px] text-left   text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 "
                  >
                    {" "}
                    SUNFLOWER RESIDENCE.
                  </h2>

                  <h1
                    className="mb-5 text-lg  lg:text-2xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t "
                    style={{ lineHeight: "120%", color: "white" }}
                  ></h1>

                  {/* <div className="flex items-center mt-2 font-bold">
                  <FaPhoneVolume
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "white" }}
                  />
                  <span
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "white" }}
                  >
                    {" "}
                    Call Now: 01643-390832
                  </span>
                </div> */}

                  <div className="flex  gap-4 mt-10 text-center">
                    <a
                      href="/"
                      className=" btn-sm lg:p-2 rounded-full    hover-button bg-gradient-to-r from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border text-white  "
                    >
                      <span className="text-sm font-medium">
                        {" "}
                        GET STARTED WITH US
                      </span>
                      <BsArrowRight className="text-lg hidden lg:ml-2" />
                    </a>
                  </div>
                </div>

                {/* <div class="  sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0  ">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1 }}
                    style={{ lineHeight: "120%" }}
                    className="animated-text lg:text-[43px] font-bold text-[20px] text-left   text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                  >
                    {sentences[currentIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div> */}
              </div>

              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="white"
                    fill-opacity="50"
                    d="M0,128L120,160C240,192,480,256,720,272C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </section>
          </div>
          {/* <div class="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
			<svg class="xl:h-40 xl:w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				<path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor"></path>
			</svg>
			<div class="bg-white w-full h-20 -mt-px"></div>
		</div> */}
        </div>
      </div>
        </div>
    );
};

export default Sunflowerlanding;