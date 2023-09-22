import React from "react";
import 'imagehover.css/css/imagehover.css'; 
const Services = () => {
  return (
    <div>
      <div className=" ">
        <h2
          className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7]      text-3xl text-center  py-8 font-bold poppins-b sm:text-4xl "
          // style={{ color: "#536E9B" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Our Services
        </h2>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-0   lg:px-12 gap-10    py-[25px] items-center justify-items-center ">
      <figure class="imghvr-stack-up">
  <img src="#" alt="example-image" />
  <figcaption>
    <h3 class="ih-fade-down ih-delay-sm ">Oscar Wilde</h3>
    <p class="ih-zoom-in ih-delay-md">
      <i>"I have the simplest tastes, I am always satisfied with the best."</i>
    </p>
    <a class="ih-fade-up ih-delay-lg button" href="#">Read More</a>
  </figcaption>
  <a href="#"></a>
  <figure class="imghvr-fade">
  <img src="#"/>
  <figcaption>
    // Hover Content
  </figcaption>
  <a href="http://www.imagehover.io"></a>
</figure>
</figure>




      </div>
    </div>
  );
};

export default Services;
