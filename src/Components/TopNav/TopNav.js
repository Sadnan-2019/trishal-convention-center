import React from "react";
import breakfast from "../../assets/breakfast (2).png";
import lunch from "../../assets/lunch.png";
import evening from "../../assets/burger.png";
import dinner from "../../assets/dinner.png";
import call from "../../assets/call-center.gif";
import email from "../../assets/email.gif";
 
const TopNav = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#575be8] via-[#160a2c] to-[#38235D] text-white ">
        <div className="flex   flex-col md:flex-row  justify-between px-10	 lx:px-12    items-center ">
          {/* <img  src={logo} className="w-24" alt="" /> */}
          <div className="grid grid-cols-2 justify-center  p-1  items-center gap-2  ">
            <div
              className="flex items-center font-bold   gap-2"
              // style={{ color: "#92468E" }}
            >
              <div className="">
                <img className="w-7  " src={breakfast} alt="" />
              </div>
              <div>
                <p className="text-[10px] lg:text-xs   	">
                  Breakfast Time: 7am to 11am
                </p>
              </div>
            </div>
            <div
              className="flex items-center font-bold   gap-2   "
              // style={{ color: "#92468E" }}
            >
              <div>
                <img className="w-7" src={lunch} alt="" />
              </div>
              <div>
                <p className="text-[10px] lg:text-xs   	">
                  Lunch Time: 12pm to 4pm
                </p>
              </div>
            </div>
            <div
              className="flex items-center font-bold   gap-2"
              // style={{ color: "#92468E" }}
            >
              <div className="">
                <img className="w-7  " src={evening} alt="" />
              </div>
              <div>
                <p className="text-[10px] lg:text-xs   	">
                Evening Time: 4pm to 7pm
                </p>
              </div>
            </div>
            <div
              className="flex items-center font-bold   gap-2   "
              // style={{ color: "#92468E" }}
            >
              <div>
                <img className="w-7" src={dinner} alt="" />
              </div>
              <div>
                <p className="text-[10px] lg:text-xs   	">
                Dinner Time: 7pm to 11pm
                </p>
              </div>
            </div>
            
          </div>

          <div className="grid grid-cols-2 justify-items-center items-center gap-12  ">
            <div
              className="flex items-center font-bold    gap-2"
              // style={{ color: "#92468E" }}
            >
              <div>
                {/* <MdOutlinePhonelinkRing className="text-[10px] lg:text-2xl    " /> */}
                <img className="w-7 rounded-full" src={call} alt=""/>
              </div>
              <div>
                <p className="text-[10px] lg:text-xs   	">
                  <a href="tel:+01643-390832 " className="  	">
                    01643-390832
                  </a>
                </p>
                <p className="text-[10px] lg:text-xs  	 	">01643-390832 </p>
              </div>
            </div>
            <div
              className="flex items-center font-bold    gap-2"
              // style={{ color: "#92468E" }}
            >
              <div>
                <img src={email} className="w-7 rounded-full" alt="" />
              </div>
              <div>
                <p className="text-[10px] lg:text-xs     	">Email us</p>
                {/* <p className="text-[10px] lg:text-xs	 	">info@mrs.mrg.com.bd</p> */}
                <a
                  href="mailto:info@mrs.mrg.com.bd"
                  className="text-[10px] lg:text-xs  	"
                >
                  info@tcc.mrg.com.bd
                </a>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
