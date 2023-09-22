import React from 'react';
import Landing from '../Landing/Landing';
import About from '../About/About';
import Services from '../Services/Services';
// import SliderWithText from '../SliderWithText/SliderWithText';

const Home = () => {
     return (
          <div>
              <Landing/> 
              
               {/* <SliderWithText></SliderWithText> */}
               <Services></Services>
               {/* <About></About> */}
              
          </div>
     );
};

export default Home;