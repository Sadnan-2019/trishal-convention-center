import React from 'react';
import whyone from "../../assets/why4.jpg"
import whytwo from "../../assets/why7.jpg"
import whythree from "../../assets/why3.jpg"
import whyfour from "../../assets/why6.jpg"
import "./Offer.css"
const Offer = () => {
    return (
        <div>
             <div className=' py-10  '>
             
             <div className='why-back p-11'>
             <div class="  ">
                 <div  class="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20   ">
                     <div class="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16 ">
                         <div class="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12  ">
                             <h1 class="text-4xl text-white font-bold md:text-5xl  ">Book now and benefit up to <span class="text-blue-500">25% off</span></h1>
                             {/* <p class="text-lg">Be part of millions people around the world using tailus in modern User Interfaces.</p> */}
                             <div class="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end  ">
                                 <button type="button" title="Start buying" class="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max">
                                     <a href='/offer' class="block text-white font-semibold">
                                     More about
                                     </a>
                                 </button>
                                 {/* <button type="button" title="more about" class="w-full order-first py-3 px-6 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max">
                                     <span class="block text-gray-600 font-semibold">
                                         More about
                                     </span>
                                 </button> */}
                             </div>
                         </div>
                         <div class="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                             <div class="col-span-2 row-span-4">
                                 <img src={whythree} class="rounded-full" width="640" height="960" alt="shoes" loading="lazy"/>
                             </div>
                             <div class="col-span-2 row-span-4">
                                 <img src={whyone}  class="rounded-full" width="640" height="960" alt="shoes" loading="lazy"/>
                             </div>
                             <div class="col-span-2 row-span-2">
                                 <img src={whytwo} class="w-full h-full object-cover object-top rounded-xl" width="640" height="640" alt="shoe" loading="lazy"/>
                             </div>
                             {/* <div class="col-span-3 row-span-3">
                                 <img src={whyone} class="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="shoes" loading="lazy"/>
                             </div> */}
                             {/* <div class="col-span-3 row-span-3">
                                 <img src={whyone} class="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="shoes" loading="lazy"/>
                             </div> */}
                             <div class="col-span-2 row-span-4">
                                 <img src={whyfour}  class="rounded-full" width="640" height="960" alt="shoes" loading="lazy"/>
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

export default Offer;