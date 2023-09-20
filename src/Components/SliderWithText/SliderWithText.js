import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

const SliderWithText = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      direction: 'horizontal',
      mousewheel: true, // Enable mousewheel control
      // Add other Swiper options as needed
    });

    return () => {
      swiper.destroy(); // Cleanup Swiper instance
    };
  }, []);

  const slideText = [
    'Text 1',
    'Text 2',
    'Text 3',
    // Add more texts for each slide
  ];

  const handleSlideChange = () => {
    const activeSlideIndex = swiperRef.current.swiper.activeIndex;
    const textElement = document.querySelector('.text-transition');

    if (textElement) {
      textElement.style.opacity = 0;

      // Add transition effects for text (you can use CSS for this)
      textElement.addEventListener('transitionend', () => {
        textElement.textContent = slideText[activeSlideIndex];
        textElement.style.opacity = 1;
      });
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="swiper-container" ref={swiperRef} onSlideChange={handleSlideChange}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="image1.jpg" alt="Image 1" />
          </div>
          <div className="swiper-slide">
            <img src="image2.jpg" alt="Image 2" />
          </div>
          <div className="swiper-slide">
            <img src="image3.jpg" alt="Image 3" />
          </div>
          {/* Add more slides as needed */}
        </div>
        <div className="swiper-scrollbar"></div>
      </div>
      <div className="text-transition">
        {slideText[0]} {/* Initial text */}
      </div>
    </div>
  );
};

export default SliderWithText;
