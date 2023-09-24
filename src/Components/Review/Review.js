import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { motion, useAnimation } from "framer-motion";

import "./Review.css"

const Review = () => {
    // const [currentSlide, setCurrentSlide] = useState(0);
    // const [currentSlide, setCurrentSlide] = useState(0);
    const imageAnimationControls = useAnimation();
    const textAnimationControls = useAnimation();
    const sliderData = [
        {
          imageSrc: 'https://i.ibb.co/ypxKbC3/photo-1614393617228-b82d535b738b.jpg',
          text: 'Text for Slide 1',
        },
        {
          imageSrc: 'https://i.ibb.co/ypxKbC3/photo-1614393617228-b82d535b738b.jpg',
          text: 'Text for Slide 2',
        },
        // Add more data for additional slides
      ];

      const handleSlideChange = (current) => {
        // Animation for image (Zoom-in)
        imageAnimationControls.start({
          scale: 1.1,
          opacity: 0,
          transition: { duration: 0.5 },
        });
    
        // Animation for text (Faded from top to bottom)
        textAnimationControls.start({
          opacity: 0,
          y: -20,
          transition: { duration: 0.5 },
        });
    
        setTimeout(() => {
          // Change the image and text after the animation completes
          imageAnimationControls.start({ scale: 1, opacity: 9 });
          textAnimationControls.start({ opacity: 1, y: 0 });
        }, 500); // Adjust the timeout duration as needed
      };

    const  settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        // fade: true,
        // afterChange: (index) => {
        //   setCurrentSlide(index);
        // },
        // afternewChange: (index) => {
        //   setCurrentSlideTwo(index);
        // },
        autoplay: "true",
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
        <div className="w-full max-w-xl mx-auto">
      <Slider {...settings} beforeChange={handleSlideChange}>
        {sliderData.map((slide, index) => (
          <div key={index}>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="w-full h-auto"
                initial={{ scale: 1, opacity: 1 }}
                animate={imageAnimationControls}
              >
                <img
                  src={slide.imageSrc}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                className="col-span-1"
                initial={{ opacity: 0, y: -20 }}
                animate={textAnimationControls}
              >
                <h3 className="text-xl font-semibold">{slide.text}</h3>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    );
};

export default Review;