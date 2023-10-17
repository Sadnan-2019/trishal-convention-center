import React from 'react';
import Landing from '../Landing/Landing';
import About from '../About/About';
import Services from '../Services/Services';
import Review from '../Review/Review';
import Why from '../Why/Why';
import Video from '../Video/Video';
import Contact from '../Why/Contact/Contact';
import Foods from '../Foods/Foods';
import Offer from '../Offer/Offer';
// import SliderWithText from '../SliderWithText/SliderWithText';

const Home = () => {
     return (
          <div>
              <Landing/> 
              
               {/* <SliderWithText></SliderWithText> */}
               <Services></Services>
               <Foods></Foods>
               {/* <About></About> */}
             
               <Offer></Offer>
               <Video></Video>
               <Review></Review>
               <Why></Why>
               <Contact></Contact>
              
          </div>
     );
};

export default Home;