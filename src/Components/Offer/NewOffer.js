import React from "react";
import discount from "../../assets/discount1.jpeg";
import discount2 from "../../assets/discount2.jpeg";

const NewOffer = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-[#575be8] via-[#160a2c] to-[#38235D] flex items-center justify-center bg-cover bg-center   relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0"></div>

        {/* Content Grids */}
        <div className="relative z-10 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Your Title Here</h1>
          <p className="text-lg mb-8">Your awesome tagline goes here.</p>

          <div className="grid grid-cols-2 gap-8">
            {/* Left Grid */}
            <div>
              <img
                className="w-3/6 h-full   "
                src={discount}
                alt="Background"
              />
            </div>

            {/* Right Grid */}
            <div>
              <img
                className="w-3/6 h-full   "
                src={discount2}
                alt="Background"
              />
            </div>
          </div>
        </div>

        {/* Bottom Curve SVG Animation */}
        <svg
          className="absolute bottom-0 w-full fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
        >
          <path
            fillOpacity="1"
            d="M0,160L48,133.3C96,107,192,53,288,69.3C384,85,480,171,576,202.7C672,235,768,213,864,192C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default NewOffer;
