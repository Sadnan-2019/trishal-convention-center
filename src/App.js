// import logo from './logo.svg';

import './App.css';
import Home from './Components/Home/Home';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
