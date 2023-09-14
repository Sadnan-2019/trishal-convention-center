// import logo from './logo.svg';

import './App.css';
import Home from './Components/Home/Home';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Navbar from './Components/Navbar/Navbar';
import TopNav from './Components/TopNav/TopNav';

function App() {
  return (
    <div className="">
      <TopNav></TopNav>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
