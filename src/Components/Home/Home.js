import React from 'react';
import Landing from '../Landing/Landing';
import About from '../About/About';
// import SliderWithText from '../SliderWithText/SliderWithText';

const Home = () => {
     return (
          <div>
              <Landing/> 
              
               {/* <SliderWithText></SliderWithText> */}

               <About></About>
              
          </div>
     );
};

export default Home;