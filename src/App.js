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

function App() {
  return (
    <div className="">
       {/* <Menu></Menu> */}
      <TopNav></TopNav>

      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        
         
      
      </Routes>




















      
     
      <Footer></Footer>

    </div>
  );
}

export default App;
