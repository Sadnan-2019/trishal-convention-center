import React from "react";
import tgr from "../../assets/tgr.jpg";
import tgrone from "../../assets/tgrone.png";
import tgrtwo from "../../assets/tgr2.jpg";
import tgrthree from "../../assets/tgr3.png";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <div className=" ">
        <h2
          className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7]      text-3xl text-center  py-8 font-bold poppins-b sm:text-4xl "
          // style={{ color: "#536E9B" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Our Services
        </h2>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-0   lg:px-12 gap-10    py-[25px] items-center justify-items-center ">
        <div class="         text-white     max-w-sm shadow-2xl   bg-gradient-to-r from-[#034ca7] to-[#2622B7]    ">
          <div className="       ">
            <div class="section over-hide ">
              <div class="container  ">
                <div class="row full-height justify-content-center">
                  <div class="col-12 text-center align-self-center py-5">
                    <div class="section text-center py-5 py-md-0">
                      <input
                        class="pricing"
                        type="checkbox"
                        id="pricing"
                        name="pricing"
                      />
                      <label for="pricing">
                        <span class="block-diff">
                          kayaking<span class="float-right">camping</span>
                        </span>
                      </label>
                      <div class="card-3d-wrap mx-auto">
                        <div class="card-3d-wrapper">
                          <div class="card-front">
                            <div class="pricing-wrap">
                            
                              <p class="mb-1">
                                <i class="uil uil-location-pin-alt size-22"></i>
                              </p>
                            
                              <div class="img-wrap img-2">
                                <img
                                  src={tgr}
                                  alt=""
                                  className="h-96"
                                />
                              </div>
                              
                            </div>
                          </div>
                          <div class="card-back">
                            <div class="pricing-wrap">
                              <div class="   ">
                                <img
                                  src={tgrtwo}
                                  alt=""
                                  className="rounded-lg"
                                />
                                <a href="#0" className=" link">
                                  Details
                                </a>
                              </div>
                              <div class=" img-wrap  img-4  ">
                                <img src={tgrone} alt="" className=" " />
                              </div>
                              <div class="img-wrap img-5">
                                <img src={tgrthree} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
