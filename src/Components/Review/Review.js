// import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
// import './Slider.css'
import "./Review.css";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

const Review = () => {
  return (
    <div className="h-scren  mb-10  bg-gradient-to-r from-[#575be8] via-[#160a2c] to-[#38235D] ">
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
        className=" grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  gap-4 py-12 px-12 justify-items-center items-center md:px-12 lg:px-20 "
      >
        <div className=" ">
          <SwiperSlide>
            <div class="container mx-auto p-10  px-4">
              <div class="   inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex  rounded-lg border shadow-lg pb-6 lg:pb-0">
                <div class="w-full lg:w-1/3 lg:p-4">
                  <img
                    src="https://source.unsplash.com/nqEJ548Hqjs/800x600"
                    alt="image"
                    class="h-64 lg:h-full object-cover object-center w-full"
                  />
                </div>

                <div class="w-full lg:w-2/3 p-4">
                  <div class="inline-grid">
                    <p class="work-sans font-semibold text-xl text-white">
                      HCAH MAHMUD
                    </p>
                    <p class="raleway text-sm my-4 text-white  ">
                      TCC has the state of the art facilities and free internet.
                      They have near by Restaurant named Tulip Garden
                      Restaurant. Cozy rooms and attached bathroom and balcony .
                      They have it all. Good luck TCC Residence , Trishal,
                      Mymensingh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="container mx-auto py-12 px-4">
              <div class="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex   rounded-lg border shadow-lg pb-6 lg:pb-0">
                <div class="w-full lg:w-1/3 lg:p-4">
                  <img
                    src="https://source.unsplash.com/nqEJ548Hqjs/800x600"
                    alt="image"
                    class="h-64 lg:h-full object-cover object-center w-full"
                  />
                </div>

                <div class="w-full lg:w-2/3 p-4">
                  <div class="inline-grid">
                    <p class="work-sans font-semibold text-xl text-white">
                      Segoe cute
                    </p>
                    <p class="raleway text-sm my-4 text-white opacity-75">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem fuga odit repellendus vero iure alias
                      accusamus ex sed facilis magni aperiam dicta obcaecati,
                      possimus rerum, consequuntur deserunt aut dolor ipsa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="container mx-auto py-12 px-4">
              <div class="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex  rounded-lg border shadow-lg pb-6 lg:pb-0">
                <div class="w-full lg:w-1/3 lg:p-4">
                  <img
                    src="https://source.unsplash.com/nqEJ548Hqjs/800x600"
                    alt="image"
                    class="h-64 lg:h-full object-cover object-center w-full"
                  />
                </div>

                <div class="w-full lg:w-2/3 p-4">
                  <div class="inline-grid">
                    <p class="work-sans font-semibold text-xl text-white">
                      Segoe cute
                    </p>
                    <p class="raleway text-sm my-4 text-white opacity-75">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem fuga odit repellendus vero iure alias
                      accusamus ex sed facilis magni aperiam dicta obcaecati,
                      possimus rerum, consequuntur deserunt aut dolor ipsa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="container mx-auto py-12 px-4">
              <div class="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex   rounded-lg border shadow-lg pb-6 lg:pb-0">
                <div class="w-full lg:w-1/3 lg:p-4">
                  <img
                    src="https://source.unsplash.com/nqEJ548Hqjs/800x600"
                    alt="image"
                    class="h-64 lg:h-full object-cover object-center w-full"
                  />
                </div>

                <div class="w-full lg:w-2/3 p-4">
                  <div class="inline-grid">
                    <p class="work-sans font-semibold text-xl text-white">
                      Segoe cute
                    </p>
                    <p class="raleway text-sm my-4 text-white opacity-75">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem fuga odit repellendus vero iure alias
                      accusamus ex sed facilis magni aperiam dicta obcaecati,
                      possimus rerum, consequuntur deserunt aut dolor ipsa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="container mx-auto py-12 px-4">
              <div class="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex  rounded-lg border shadow-lg pb-6 lg:pb-0">
                <div class="w-full lg:w-1/3 lg:p-4">
                  <img
                    src="https://source.unsplash.com/nqEJ548Hqjs/800x600"
                    alt="image"
                    class="h-64 lg:h-full object-cover object-center w-full"
                  />
                </div>

                <div class="w-full lg:w-2/3 p-4">
                  <div class="inline-grid">
                    <p class="work-sans font-semibold text-xl text-white">
                      Segoe cute
                    </p>
                    <p class="raleway text-sm my-4 text-white opacity-75">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem fuga odit repellendus vero iure alias
                      accusamus ex sed facilis magni aperiam dicta obcaecati,
                      possimus rerum, consequuntur deserunt aut dolor ipsa.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div class="flex justify-center -mt-8 rounded-b-lg max-w-xs lg:max-w-lg lg:-mt-8 lg:justify-end lg:pr-8 py-1">
              <button
                type="button"
                class="text-white py-3 px-4 rounded-lg bg-blue-500"
              >
                <p class="work-sans font-semibold text-sm tracking-wide">
                  Primary action
                </p>
              </button>
              <button
                type="button"
                class="py-3 px-4 bg-blue-500 rounded-lg ml-3 text-white"
              >
                <p class="work-sans font-semibold text-sm tracking-wide">
                  Secondary action
                </p>
              </button>
            </div> */}
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Review;
