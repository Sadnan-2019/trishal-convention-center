// import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
// import './Slider.css'
import "./Review.css"
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const Review = () => {
    
 
    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 py-12 px-12 justify-items-center items-center md:px-12 lg:px-20 ">
     

      <Swiper
       effect={"coverflow"}
       grabCursor={true}
       centeredSlides={true}
       loop={true}
       slidesPerView={"auto"}
       coverflowEffect={{
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       }}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       pagination={true}
       navigation={true}
       EffectCoverflow={true}
       modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
       className="mySwiper"
     >
       <SwiperSlide>
         <img src="https://i.ibb.co/K5PQjZ7/building.jpg" alt="" />
       </SwiperSlide>
       <SwiperSlide>
         <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
       </SwiperSlide>
       <SwiperSlide>
         <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
       </SwiperSlide>
       <SwiperSlide>
         <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
       </SwiperSlide>
       <SwiperSlide>
         <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
       </SwiperSlide>
       <SwiperSlide>
         <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
       </SwiperSlide>
       <SwiperSlide>
         <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
       </SwiperSlide>
       <SwiperSlide>
         <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
       </SwiperSlide>
       <SwiperSlide>
         <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
       </SwiperSlide>
       <SwiperSlide>
         <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
       </SwiperSlide>
     </Swiper>
 
           
          
         <div className='justify-items-center items-center'>
         <div className="p-5">
           <h1 className="text-5xl font-bold">We Provide Best Manufecture for Clint Satisfection  </h1>
           {/* <p className="py-6 font-bold">
             Milking Machine, Cream Separator, Chaff Cutter, Automated Cow Brush,
             Rubber Mat, Feeder Bottle, Veterinary Items and All kinds of
             Accessories.
           </p> */}
           {/* <button className="btn btn-primary">Get Started</button> */}
         </div>
         </div>
 
      </div>
    );
};

export default Review;