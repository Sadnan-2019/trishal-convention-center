import React from "react";
import Slider from "react-slick";
const Landing = () => {
  const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,

//     autoplay: true,
//     autoplaySpeed: 5000,
dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div>
     <div className=" ">


     <Slider {...settings}>
     
    
   
      <div>
      <div
         className="hero min-h-screen"
         style={{
           backgroundImage: `url("https://www.kcc.rw/uploads/9/8/2/4/98249186/img-9399_orig.jpg")`,
         }}
       >
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
           <div className="max-w-md">
             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
             <p className="mb-5">
               Provident cupiditate voluptatem et in. Quaerat fugiat ut
               assumenda excepturi exercitationem quasi. In deleniti eaque
               aut repudiandae et a id nisi.
             </p>
             <button className="btn btn-primary">Get Started</button>
           </div>
         </div>
       </div>
   
     
       <div
         className="hero min-h-screen"
         style={{
           backgroundImage: `url("https://images.adsttc.com/media/images/5192/55d3/b3fc/4b8d/f000/005c/large_jpg/MBS_Image_by_BIG_03.jpg?1368544714")`,
         }}
       >
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
           <div className="max-w-md">
             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
             <p className="mb-5">
               Provident cupiditate voluptatem et in. Quaerat fugiat ut
               assumenda excepturi exercitationem quasi. In deleniti eaque
               aut repudiandae et a id nisi.
             </p>
             <button className="btn btn-primary">Get Started</button>
           </div>
         </div>
       </div>
     
     
       <div
         className="hero min-h-screen"
         style={{
           backgroundImage: `url("https://stcharlesconventioncenter.com/assets/images/galleries/full/Szqtm.jpeg")`,
         }}
       >
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
           <div className="max-w-md">
             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
             <p className="mb-5">
               Provident cupiditate voluptatem et in. Quaerat fugiat ut
               assumenda excepturi exercitationem quasi. In deleniti eaque
               aut repudiandae et a id nisi.
             </p>
             <button className="btn btn-primary">Get Started</button>
           </div>
         </div>
       </div>
     
     
       <div
         className="hero min-h-screen"
         style={{
           backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
         }}
       >
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
           <div className="max-w-md">
             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
             <p className="mb-5">
               Provident cupiditate voluptatem et in. Quaerat fugiat ut
               assumenda excepturi exercitationem quasi. In deleniti eaque
               aut repudiandae et a id nisi.
             </p>
             <button className="btn btn-primary">Get Started</button>
           </div>
         </div>
       </div>
      </div>
      
   </Slider>
     </div>
    </div>
  );
};

export default Landing;
