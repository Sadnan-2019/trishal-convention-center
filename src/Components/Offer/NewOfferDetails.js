import React from 'react';
import discount2 from "../../assets/discount2.jpeg";
const NewOfferDetails = () => {
    return (
        <div>
             <div className='py-10'>
            <div className="   min-h-screen flex flex-col bg-gradient-to-r from-[#575be8] via-[#160a2c] to-[#38235D]">
      <div className="flex-1 grid grid-cols-3 gap-0">
        {/* Grid 1 */}
        <div className="p-8 text-white">
          {/* Content for Grid 1 */}
          <img src={discount2} alt='' className='rounded-lg'/>
        </div>

        {/* Grid 2 */}
        <div className=" p-8 text-white">
          {/* Content for Grid 2 */}
          <img src={discount2} alt='' className='rounded-lg'/>
        </div>

        {/* Grid 3 */}
        <div className="  p-8 text-white">
          {/* Content for Grid 3 */}
          <img src={discount2} alt='' className='rounded-lg'/>
        </div>
        <div className="  p-8 text-white">
          {/* Content for Grid 3 */}
          <img src={discount2} alt='' className='rounded-lg'/>
        </div>
        <div className="  p-8 text-white">
          {/* Content for Grid 3 */}
          <img src={discount2} alt='' className='rounded-lg'/>
        </div>
        <div className="  p-8 text-white">
          {/* Content for Grid 3 */}
          <img src={discount2} alt='' className='rounded-lg'/>
        </div>
      </div>

      {/* Bottom Wave SVG Animation */}
      <div className=" ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave-animation"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L120,133.3C240,107,480,53,720,53.3C960,53,1200,107,1320,133.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
        </div>
        </div>
    );
};

export default NewOfferDetails;