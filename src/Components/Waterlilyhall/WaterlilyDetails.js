import React from "react";
import "./WaterlilyDetails.css";
import waterone from "../../assets/wedding1.jpg";
import watertwo from "../../assets/wedding2.jpg";
import waterthree from "../../assets/wedding3.jpg";
import waterfour from "../../assets/wedding4.jpg";
import waterfive from "../../assets/wedding5.jpg";
import watersix from "../../assets/wedding6.jpg";
const WaterlilyDetails = () => {
  return (
    <div className="bg-gradient-to-r from-[#575be8] via-[#160a2c] to-[#38235D]">
      <div class="   ">
        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-2   items-center justify-items-center py-10">
          <div class="text-white new-details hover:bg-gray-900 hover:text-white transition duration-300 max-w-lg rounded overflow-hidden shadow-lg">
            <div class="py-4 px-8">
              {/* <img src="https://tailwindcss.com/img/jonathan.jpg" class="rounded-full h-12 w-12 mb-4"/> */}
              <a href="#">
                <h4 class="text-lg mb-3 font-semibold">
                  How to be effective at working remotely?
                </h4>
              </a>
              <p class="text-white mb-2 text-sm  ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <img src={waterone} w="500" class="w-100" alt="" />
              <hr class="mt-4" />
              <span class="text-xs">ARTICLE</span>
              &nbsp;<span class="text-xs text-gray-500">PROCESS</span>
            </div>
          </div>
          <div class="text-white new-details hover:bg-gray-900 hover:text-white transition duration-300 max-w-lg rounded overflow-hidden shadow-lg">
            <div class="py-4 px-8">
              {/* <img src="https://tailwindcss.com/img/jonathan.jpg" class="rounded-full h-12 w-12 mb-4"/> */}
              <a href="#">
                <h4 class="text-lg mb-3 font-semibold">
                  How to be effective at working remotely?
                </h4>
              </a>
              <p class="text-white mb-2 text-sm ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <img
                src={watertwo}  alt=""
                class="w-100"
              />
              <hr class="mt-4" />
              <span class="text-xs">ARTICLE</span>
              &nbsp;<span class="text-xs text-gray-500">PROCESS</span>
            </div>
          </div>
          <div class="text-white new-details hover:bg-gray-900 hover:text-white transition duration-300 max-w-lg rounded overflow-hidden shadow-lg">
            <div class="py-4 px-8">
              {/* <img src="https://tailwindcss.com/img/jonathan.jpg" class="rounded-full h-12 w-12 mb-4"/> */}
              <a href="#">
                <h4 class="text-lg mb-3 font-semibold">
                  How to be effective at working remotely?
                </h4>
              </a>
              <p class="text-white mb-2 text-sm  ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <img
                src={waterthree}
                class="w-100" alt=""
              />
              <hr class="mt-4" />
              <span class="text-xs">ARTICLE</span>
              &nbsp;<span class="text-xs text-gray-500">PROCESS</span>
            </div>
          </div>
          <div class="text-white new-details hover:bg-gray-900 hover:text-white transition duration-300 max-w-lg rounded overflow-hidden shadow-lg">
            <div class="py-4 px-8">
              {/* <img src="https://tailwindcss.com/img/jonathan.jpg" class="rounded-full h-12 w-12 mb-4"/> */}
              <a href="#">
                <h4 class="text-lg mb-3 font-semibold">
                  How to be effective at working remotely?
                </h4>
              </a>
              <p class="text-white mb-2 text-sm  ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <img
                src={waterfour}
                class="w-100" alt=""
              />
              <hr class="mt-4" />
              <span class="text-xs">ARTICLE</span>
              &nbsp;<span class="text-xs text-gray-500">PROCESS</span>
            </div>
          </div>
          <div class="text-white new-details hover:bg-gray-900 hover:text-white transition duration-300 max-w-lg rounded overflow-hidden shadow-lg">
            <div class="py-4 px-8">
              {/* <img src="https://tailwindcss.com/img/jonathan.jpg" class="rounded-full h-12 w-12 mb-4"/> */}
              <a href="#">
                <h4 class="text-lg mb-3 font-semibold">
                  How to be effective at working remotely?
                </h4>
              </a>
              <p class="text-white mb-2 text-sm  ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <img
                src={waterfive}
                class="w-100" alt=""
              />
              <hr class="mt-4" />
              <span class="text-xs">ARTICLE</span>
              &nbsp;<span class="text-xs text-gray-500">PROCESS</span>
            </div>
          </div>
          <div class="text-white new-details hover:bg-gray-900 hover:text-white transition duration-300 max-w-lg rounded overflow-hidden shadow-lg">
            <div class="py-4 px-8">
              {/* <img src="https://tailwindcss.com/img/jonathan.jpg" class="rounded-full h-12 w-12 mb-4"/> */}
              <a href="#">
                <h4 class="text-lg mb-3 font-semibold">
                  How to be effective at working remotely?
                </h4>
              </a>
              <p class="text-white mb-2 text-sm  ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <img
                src={watersix}
                class="w-100" alt=""
              />
              <hr class="mt-4" />
              <span class="text-xs">ARTICLE</span>
              &nbsp;<span class="text-xs text-gray-500">PROCESS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterlilyDetails;
