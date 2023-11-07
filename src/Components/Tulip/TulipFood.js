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
    </div>
  );
};

export default TulipFood;
