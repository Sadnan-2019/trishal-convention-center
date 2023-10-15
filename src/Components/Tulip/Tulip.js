import React from "react";
import "./Tulip.css";
import food from "../../assets/tgr3.png"
import food1 from "../../assets/food3.png"
import food2 from "../../assets/tgrone.png"
import food3 from "../../assets/food4.png"
import food4 from "../../assets/food4.png"
import food5 from "../../assets/food5.png"
import food6 from "../../assets/food6.png"
const Tulip = () => {
  return (
    <div>
      <section className="  tulip-landing   blog h-auto      shadow-xl  text-white py-[44px]">
        <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-5 justify-center items-center">

        <div class="  sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0  ">
            <div class="partners-intro--thumb aos-init aos-animate   ">
              <div class="partners-intro--partners">
                <div class="partners-intro--partners-item -pos-1">
                  <img
                    class="lazy loaded"
                    data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-1.png"
                    alt=""
                    src={food2}
                    data-was-processed="true"
                  />
                </div>
                <div class="partners-intro--partners-item -pos-2">
                  <img
                    class="lazy loaded"
                    data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-2.png"
                    alt=""
                    src={food3}
                    data-was-processed="true"
                  />
                </div>
                <div class="partners-intro--partners-item -pos-3">
                  <img
                    class="lazy loaded"
                    data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-3.png"
                    alt=""
                    src={food}
                    data-was-processed="true"
                  />
                </div>
                <div class="partners-intro--partners-item -pos-4">
                  <img
                    class="lazy loaded"
                    data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-4.png"
                    alt=""
                    src={food5}
                    data-was-processed="true"
                  />
                </div>
                <div class="partners-intro--partners-item -pos-5">
                  <img
                    class="lazy loaded"
                    data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-5.png"
                    alt=""
                    src={food6}
                    data-was-processed="true"
                  />
                </div>
                <div class="partners-intro--partners-item -pos-6">
                  <img
                    class="lazy loaded"
                    data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-6.png"
                    alt=""
                    src={food}
                    data-was-processed="true"
                  />
                </div>
                <div class="partners-intro--partners-item -pos-7">
                  <img
                    class="lazy loaded"
                    data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-7.png"
                    alt=""
                    src={food}
                    data-was-processed="true"
                  />
                </div>
                <div class="partners-intro--partners-item -pos-8">
                  <img
                    class="lazy loaded"
                    data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-8.png"
                    alt=""
                    src={food}
                    data-was-processed="true"
                  />
                </div>
              </div>
              <div class="partners-intro--logo">
                <img
                  class="lazy loaded"
                  data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/logo-vector.svg"
                  alt=""
                  src={food1}
                  data-was-processed="true"
                />
              </div>
            </div>
          </div>
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

export default Tulip;
