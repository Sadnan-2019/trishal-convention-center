// import logo from './logo.svg';

import './App.css';
import Home from './Components/Home/Home';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Navbar from './Components/Navbar/Navbar';
import TopNav from './Components/TopNav/TopNav';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="">
       {/* <Menu></Menu> */}
      <TopNav></TopNav>

      <Navbar/>
      
      <Home/>
      <Footer></Footer>

    </div>
  );
}

export default App;
