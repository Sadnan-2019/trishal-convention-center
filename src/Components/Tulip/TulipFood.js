import React from 'react';
import "./TulipFood.css"
import food from "../../assets/tgr3.png"
import food1 from "../../assets/food3.png"
import food2 from "../../assets/tgrone.png"
import food3 from "../../assets/food4.png"
import food4 from "../../assets/food4.png"
import food5 from "../../assets/food5.png"
import food6 from "../../assets/food6.png"
const TulipFood = () => {
    return (
        <div className='bg-gradient-to-r from-[#575be8] via-[#160a2c] to-[#38235D] '>
            <div class="grid grid-cols-4 gap-8 p-8 md:p-16 ">

 

<section>
    <div class='container even'>
      <div class='icon'>
        {/* <i class="fa-solid fa-desktop"></i> */}
          <img src={food} alt=''/>
      </div>
      <div class='text'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </div>
    </div>
    <div class='container odd'>
      <div class='icon'>
        <i class="fa-solid fa-calendar-days"></i>
      </div>
      <div class='text'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </div>
    </div>
    <div class='container even'>
      <div class='icon'>
        <i class="fa-solid fa-book"></i>
      </div>
      <div class='text'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.</div>
    </div>
    <div class='container odd'>
      <div class='icon'>
        <i class="fa-solid fa-business-time"></i>
      </div>
      <div class='text'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.</div>
    </div>
    <div class='container even'>
      <div class='icon'>
        <i class="fa-solid fa-layer-group"></i>
      </div>
      <div class='text'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.</div>
    </div>
    <div class='container odd'>
      <div class='icon'>
        <i class="fa-solid fa-landmark"></i>
      </div>
      <div class='text'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.</div>
    </div>
  </section>

</div>
        </div>
    );
};

export default TulipFood;