import React from 'react';
import "./Tulip.css";
const TulipLanding = () => {
    return (
        <div>
             <section className="  tulip-landing   blog h-screen  mb-10    shadow-xl  text-white py-[44px]">
        <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-5 justify-center items-center">

        
          <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
            <h1
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
              style={{ lineHeight: "120%" }}
              className=" lg:text-[43px] font-bold text-[20px] text-left   text-transparent text-8xl    bg-clip-text bg-gradient-to-r from-gray-100 to-gray-200 "
            >
              {" "}
              On researching big data and implementing it in multiple ways and
              producing it effectively & efficiently.
            </h1>
          </div>
 
         
        </div>
        
      </section>
        </div>
    );
};

export default TulipLanding;