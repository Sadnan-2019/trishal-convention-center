import React from 'react';
import orikidthree from "../../assets/rose5.jpg"
import orikidfour from "../../assets/rose6.jpg"
import waterlily from "../../assets/Waterlily.jpeg"
import orkidhome from "../../assets/orkidhome.jpeg"
import tulip from "../../assets/rbghome.jpeg"
import rbg from "../../assets/rbgnew.jpeg"
import "./Gallery.css"
 
const Gallery = () => {
    return (
        <div>
            <div className=" ">
     
        <div   className=" grid lg:grid-cols-4 gallery-item">
          <img src={orikidthree} alt='' />
          <img src={orikidfour} alt='' />
          <img src={orikidthree} alt='' />
          <img src={orikidfour} alt='' />
          <img src={orikidthree} alt='' />
          <img src={orikidfour} alt='' />
          <img src={orikidthree} alt='' />
          <img src={orikidfour} alt='' />
          
        </div>
      
    </div>
        </div>
    );
};

export default Gallery;