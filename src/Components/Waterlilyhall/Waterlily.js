import React from "react";

const Waterlily = () => {
  return (
    <div>
      <div className="  py-10  lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-2  gap-5 justify-center items-center">
        <div className="slide-content sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0 ">
          <h2
            style={{ lineHeight: "120%" }}
            className="slide-text btn-md lg:p-2 rounded-full  text-lg font-bold  hover-button bg-gradient-to-r from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white"
          >
            {" "}
            Trishal Convention Center (TCC) is a business organization
          </h2>

          <div className="flex  gap-4 mt-10 text-center">
            <a
              href="/"
              className="slide-text btn-md lg:p-2 rounded-full  text-lg font-bold  hover-button bg-gradient-to-r from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white"
            >
              MORE EXPLORE
              {/* <BsArrowRight className="text-lg   lg:ml-2" /> */}
            </a>
          </div>
        </div>

        <div class="  sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0  ">
          <img
            // src={camera}
            alt=""
            className="slide-text  md:text-[43px] font-bold text-[20px] text-left   text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Waterlily;
