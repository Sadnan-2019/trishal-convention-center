import React from 'react';
import Contact from './Contact';

const HomeContact = () => {
    return (
        <div className='   '>
           <div class="relative   flex w-full flex-col items-center  bg-gradient-to-r from-[#575be8] via-[#160a2c] to-[#38235D] ">
   
  <h1
    class="mt-8 max-w-sm bg-gradient-to-br from-gray-100 via-teal-500 to-blue-500 bg-clip-text text-center text-4xl font-extrabold text-transparent sm:max-w-4xl sm:text-6xl">
    Please Contact Us For Booking

  </h1>
  <span class="mt-8 max-w-lg text-center text-xl   bg-gradient-to-br from-gray-100 via-teal-500 to-blue-500 bg-clip-text text-transparent">
  We provide venue, food and catering. Client can also arrange his/her own food/cook.

</span>
  
  <div class="py-12  grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4">
    <a href="/"
      class="flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-10 py-3 bg-teal-500">
      <svg class="h-[30px] text-white" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
        stroke-width="3"  fill="none">
        <path d="M14,39.87,24.59,50.51s33-14,31.23-42.29C55.82,8.22,29.64,4.28,14,39.87Z"></path>
        <path d="M44.69,9.09a12.3,12.3,0,0,0,3.48,6.73,12.31,12.31,0,0,0,7,3.52"></path>
        <circle cx="39.46" cy="24.56" r="6.2"></circle>
        <path d="M14.89,37.82l-5.3.68a.27.27,0,0,1-.28-.37l3.93-9a2.65,2.65,0,0,1,1.88-1.53l6.59-1.38"></path>
        <path d="M26.55,49.4l-.69,5.3a.27.27,0,0,0,.37.28l9-3.92a2.69,2.69,0,0,0,1.53-1.89l1.38-6.59"></path>
        <path d="M22.21,48.13c-2.37,7.41-14.1,7.78-14.1,7.78S8,44.51,15.76,41.67"></path>
      </svg>
      Get the Latest Update
    </a>
    <a href="#demo"
      class="flex flex-row items-center justify-center gap-x-2 rounded-lg border border-teal-500 px-10 py-3 text-teal-500">Learn
      More →
    </a>
  </div>
</div> 

<Contact></Contact>
        </div>
    );
};

export default HomeContact;