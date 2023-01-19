import "./App.css";
import MainMenu from "./components/MainMenu";
import Top from "./components/Top";
import { Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Home from "./components/home/home";
import { useState } from "react";
import SignUp from "./components/SignUp";

function App() {
  const [wishlist, setWishlist] = useState([]);

  return (
    <div className="App">
      <div className="Header">
        <Top />
      </div>
      <div className="menu-Container">
        <MainMenu wishlist={wishlist} setWishlist={setWishlist} />
      </div>
      <Routes>
        <Route path='/' element={<Home wishlist={wishlist} setWishlist={setWishlist} />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
