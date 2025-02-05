import React from 'react';
import FaWhatsapp from "../../assets/whatsapp.png";
import messenger from "../../assets/messenger.png";
import "./WhatsApp.css"
const WhatsApp = () => {

    const messengerLink = "https://m.me/250844572294183"; 
    return (
        <div>
           <div>
            <div>
             <div>
        <div>
          <a className="" target="_blank" href="https://wa.me/8801633077777">
            <img
              src={FaWhatsapp}
              // onClick={gotoBtn}
              className=" float-right w-12 top-btn   cursor-pointer"
            />
          </a>
          {/* <a className="" target="_blank" href="https://m.me/100358625178013">
            <img src={FaWhatsapp}
            
              className=" float-right w-12 top-btn   cursor-pointer"
            />
          </a> */}
          <a
            target="_blank"
            className=" float-right w-12 top-btn-messenger   cursor-pointer"
            onClick={() => (window.location.href = messengerLink)}
          >
            <img src={messenger} />
          </a>
        </div>
      </div>
        </div>
        </div> 
        </div>
    );
};

export default WhatsApp;