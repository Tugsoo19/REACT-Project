import "./App.css";
import MainMenu from "./components/MainMenu";
import Top from "./components/Top";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Home from "./components/home/home";
import { useState } from "react";
import SignUp from "./components/SignUp";
import ProductDetails from "./components/productDetails/ProductDetails";
import Reviews from "./components/productDetails/Reviews";
import Description from "./components/productDetails/Description";

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
        <Route
          path="/"
          element={<Home wishlist={wishlist} setWishlist={setWishlist} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/description" element={<Description />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
