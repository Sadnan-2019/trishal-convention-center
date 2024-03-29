import React from "react";
import food from "../../assets/tulipfood.jpg";
import food1 from "../../assets/tulipfoodone.jpg";
import food2 from "../../assets/tulipfoodtwo.jpg";
import food3 from "../../assets/tulipfoodthree.jpg";
import food4 from "../../assets/tgr3.jpg";
import food5 from "../../assets/food5.png";
import food6 from "../../assets/food6.png";
import "./TulipFood.css";
const TulipFood = () => {
  return (
    <div className="bg-gradient-to-r from-[#575be8] via-[#160a2c] to-[#38235D] ">
      <div class=" ">


      {/* <!-- component -->
<!-- Create By Joker Banny -->
<!-- Create By Joker Banny --> */}
<div class=" ">
  <div class="py-10  grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3   items-center justify-items-center  ">
    <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img class="w-full rounded-lg object-cover object-center"
       src={food} alt="product" />
      <div>
        <div class="my-6 flex items-center justify-between px-4">
          <p class="font-bold text-gray-500">Product Name</p>
          <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">$120</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">First option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">Second option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">7</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">Third option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">1</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">Fourth option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
        </div>
      </div>
    </div>
    <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img class="w-full rounded-lg object-cover object-center" 
      src={food1} alt="product" />
      <div>
        <div class="my-6 flex items-center justify-between px-4">
          <p class="font-bold text-gray-500">Product Name</p>
          <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">$120</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">First option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">Second option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">7</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">Third option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">1</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">Fourth option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
        </div>
      </div>
    </div>
    <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img class="w-full rounded-lg object-cover object-center" 
      src={food2} alt="product" />
      <div>
        <div class="my-6 flex items-center justify-between px-4">
          <p class="font-bold text-gray-500">Product Name</p>
          <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">$120</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">First option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">Second option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">7</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">Third option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">1</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">Fourth option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
        </div>
      </div>
    </div>
    <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img class="w-full rounded-lg object-cover object-center" src={food3} alt="product" />
      <div>
        <div class="my-6 flex items-center justify-between px-4">
          <p class="font-bold text-gray-500">Product Name</p>
          <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">$120</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">First option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">Second option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">7</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">Third option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">1</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">Fourth option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
        </div>
      </div>
    </div>
    <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img class="w-full rounded-lg object-cover object-center" 
      src={food4} alt="product" />
      <div>
        <div class="my-6 flex items-center justify-between px-4">
          <p class="font-bold text-gray-500">Product Name</p>
          <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">$120</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">First option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">Second option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">7</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">Third option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">1</p>
        </div>
        <div class="my-4 flex items-center justify-between px-4">
          <p class="text-sm font-semibold text-gray-500">Fourth option</p>
          <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
        </div>
      </div>
    </div>
  </div>
</div>
        
      </div>
    </div>
  );
};

export default TulipFood;
