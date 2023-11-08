import React from "react";
import food from "../../assets/tgr3.png";
import food1 from "../../assets/food3.png";
import food2 from "../../assets/tgrone.png";
import food3 from "../../assets/food4.png";
import food4 from "../../assets/food4.png";
import food5 from "../../assets/food5.png";
import food6 from "../../assets/food6.png";
import "./TulipFood.css";
const TulipFood = () => {
  return (
    <div className="bg-gradient-to-r from-[#575be8] via-[#160a2c] to-[#38235D] ">
      <div class=" ">
        <section className="w-[600px] grid sm:grid-cols-1 lg:grid-cols-1 gap-8  mx-auto  ">
          <div class=" even flex lg:justify-between  relative h-[230px]    flex-col  sm:flex-col-reverse	 lg:flex-row      items-center">
            <div class="icon">
              <img src={food} alt="" />
            </div>
            <div class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div class="flex  lg:justify-between  relative h-[230px]      sm:flex-col-reverse	   flex-col lg:flex-row-reverse    items-center odd ">
            <div class="hidden lg:block icon">
              <img src={food1} alt="" />  
            </div>
            <div class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div class=" even flex lg:justify-between  relative h-[230px]    flex-col  sm:flex-col-reverse	 lg:flex-row      items-center">
            <div class="icon">
              <img src={food} alt="" />
            </div>
            <div class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div class="flex  lg:justify-between  relative h-[230px]      sm:flex-col-reverse	   flex-col lg:flex-row-reverse    items-center odd ">
            <div class="hidden lg:block icon">
              <img src={food1} alt="" />  
            </div>
            <div class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div class=" even flex lg:justify-between  relative h-[230px]    flex-col  sm:flex-col-reverse	 lg:flex-row      items-center">
            <div class="icon">
              <img src={food} alt="" />
            </div>
            <div class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div class="flex  lg:justify-between  relative h-[230px]      sm:flex-col-reverse	   flex-col lg:flex-row-reverse    items-center odd ">
            <div class="hidden lg:block icon">
              <img src={food1} alt="" />  
            </div>
            <div class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          {/* <div class="tulip-food even">
            <div class="icon">
              <img src={food2} alt="" />
            </div>
            <div class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div class="tulip-food odd">
            <div class="icon">
              <img src={food5} alt="" />
            </div>
            <div class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div class="tulip-food even">
            <div class="icon">
              <img src={food3} alt="" />
            </div>
            <div class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div class="tulip-food odd">
            <div class="icon">
              <img src={food6} alt="" />
            </div>
            <div class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div> */}
        </section>
      </div>


      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
    <div class="grid grid-cols-1 sm:grid-cols-12 gap-10">

        <div class="sm:col-span-6 lg:col-span-5">
            <a href="#">
                <div class="h-56 bg-cover text-center overflow-hidden"
                    // style="background-image: url('https://tailwindcss.com/img/card-left.jpg')"
                    style={{ backgroundImage: `url(${food2})` }}
                    title="Woman holding a mug">
                </div>
            </a>
            <div
                class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div class="lg:pl-16">
                    <a href="#"
                        class="text-xs text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out">
                        Fashion
                    </a>
                    <a href="#"
                        class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">The
                        perfect summer sweater that you can wear! </a>
                    <p class="text-gray-700 text-xs mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>
        </div>

        <div class="sm:col-span-6 lg:col-span-4">
            <div class="flex items-start mb-3 pb-3">
                <a href="#" class="inline-block mr-3">
                    <div class="w-20 h-20 bg-cover bg-center"
                         style={{ backgroundImage: `url(${food4})` }}>
                    </div>
                </a>
                <div class="text-sm">
                    <p class="text-gray-600 text-xs">Aug 18</p>
                    <a href="#" class="text-gray-900 font-medium hover:text-indigo-600 leading-none">Cristiano Ronaldo
                        of Juventus FC looks dejected during the...</a>
                </div>
            </div>
            <div class="flex items-start mb-3 pb-3">
                <a href="#" class="inline-block mr-3">
                    <div class="w-20 h-20 bg-cover bg-center"
                         style={{ backgroundImage: `url(${food2})` }}>
                    </div>
                </a>
                <div class="text-sm w-2/3">
                    <p class="text-gray-600 text-xs">Jan 18</p>
                    <a href="#" class="text-gray-900 font-medium hover:text-indigo-600 leading-none">Barcelona v Bayern
                        Munich </a>
                </div>
            </div>
            <div class="flex items-start mb-3 pb-3">
                <a href="#" class="inline-block mr-3">
                    <div class="w-20 h-20 bg-cover bg-center"
                        v>
                    </div>
                </a>
                <div class="text-sm">
                    <p class="text-gray-600 text-xs">Aug 18</p>
                    <a href="#" class="text-gray-900 font-medium hover:text-indigo-600 leading-none">Cristiano Ronaldo
                        of Juventus FC looks dejected during the...</a>
                </div>
            </div>
            <div class="flex items-start">
                <a href="#" class="inline-block mr-3">
                    <div class="w-20 h-20 bg-cover bg-center"
                         style={{ backgroundImage: `url(${food2})` }}>
                    </div>
                </a>
                <div class="text-sm w-2/3">
                    <p class="text-gray-600 text-xs">July 23</p>
                    <a href="#" class="text-gray-900 font-medium hover:text-indigo-600 leading-none">Barcelona v Bayern
                        Munich - UEFA Champions League </a>
                </div>
            </div>
        </div>

        <div class="sm:col-span-12 lg:col-span-3">
            <a href="#">
                <div class="h-56 bg-cover text-center overflow-hidden"
                     style={{ backgroundImage: `url(${food2})` }}
                    title="Woman holding a mug">
                </div>
            </a>
            <div
                class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div class="">
                    <a href="#"
                        class="text-xs text-indigo-600 uppercase font-medium flex items-center hover:text-gray-900 transition duration-500 ease-in-out">
                        Fashion
                    </a>
                    <a href="#"
                        class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">The
                        perfect summer sweater that you can wear! </a>
                    <p class="text-gray-700 text-xs mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>

    </div>
</div>
    </div>
  );
};

export default TulipFood;
