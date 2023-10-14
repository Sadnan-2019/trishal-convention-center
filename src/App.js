// import logo from './logo.svg';

import './App.css';
import Home from './Components/Home/Home';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Navbar from './Components/Navbar/Navbar';
import TopNav from './Components/TopNav/TopNav';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Menu/Menu';
import { Route, Routes } from 'react-router-dom';
import Waterlily from './Components/Waterlilyhall/Waterlily';
import Tulip from './Components/Tulip/Tulip';

function App() {
  return (
    <div className="">
       {/* <Menu></Menu> */}
      <TopNav></TopNav>

      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/water-lily-hall" element={<Waterlily />}></Route>
        <Route path="/tgr" element={<Tulip/>}></Route>
        
         
      
      </Routes>




















      
     
      <Footer></Footer>

    </div>
  );
}

export default App;
