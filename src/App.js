// import logo from './logo.svg';

import './App.css';
import Home from './Components/Home/Home';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Navbar from './Components/Navbar/Navbar';
import TopNav from './Components/TopNav/TopNav';
import Footer from './Components/Footer/Footer';
// import Menu from './Components/Menu/Menu';
import { Route, Routes } from 'react-router-dom';
import Waterlily from './Components/Waterlilyhall/Waterlily';
import Tulip from './Components/Tulip/Tulip';
// import FoodItem from './Components/Foods/FoodItem';
import Orkid from './Components/Orkidhall/Orkid';
import Sunflower from './Components/Sunflower/Sunflower';
import Rose from './Components/Rose/Rose';
import Facilities from './Components/Facilities/Facilities';
import About from './Components/About/About';
import Camellia from './Components/Camellia/Camellia';
// import HomeContact from './Components/Why/Contact/HomeContact';
// import Offer from './Components/Offer/Offer';
// import NewOffer from './Components/Offer/NewOffer';
import MainOffer from './Components/Offer/MainOffer';
import NavContact from './Components/NavContact/NavContact';
import Menu from './Components/Menu/Menu';
import NewMenu from './Components/Menu/NewMenu';
// import Menu from './Components/Menu/Menu';
// import Foods from './Components/Foods/Foods';

function App() {
  return (
    <div className="">
       {/* <Menu></Menu> */}
      <TopNav></TopNav>

      <Navbar/>

      
      

      {/* <Menu></Menu>  */}
      {/* <NewMenu></NewMenu> */}
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/water-lily-hall" element={<Waterlily />}></Route>
        <Route path="/orcid-hall" element={<Orkid />}></Route>
        <Route path="/sunflower" element={<Sunflower />}></Route>
        <Route path="/camellia" element={<Camellia />}></Route>
        <Route path="/rbg" element={<Rose />}></Route>
        {/* <Route path="/orcid-hall" element={<Orkid />}></Route> */}
        {/* <Route   path="/foods/:title" element={<FoodItem/>}> </Route> */}
        <Route path="/tgr" element={<Tulip/>}></Route>
        <Route path="/facilities" element={<Facilities/>}></Route>
        <Route path="/about-us" element={<About/>}></Route>
        <Route path="/offer" element={<MainOffer/>}></Route>
        <Route path="/contact-us" element={<NavContact/>}></Route>
        
         
      
      </Routes>




















      
     
      <Footer></Footer>

    </div>
  );
}

export default App;
