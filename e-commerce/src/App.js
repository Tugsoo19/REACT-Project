import "./App.css";
import MainMenu from "./components/MainMenu";
import Top from "./components/Top";
import AliceCarousel from "react-alice-carousel";
import carouselData from "./data/carousel";
import MiniCarousel from "./components/MiniCarousel";
import MiniCarData from "./data/miniCarData";
import "bootstrap/dist/css/bootstrap.min.css";
import PopularTabs from "./components/PopularTab";
import { popular } from "./data/popularProducts";
import PopularProdsFunc from "./components/PopularProds";
import Carousel from "react-bootstrap/Carousel";
import SaleBanner from "./components/SaleBanner";
import ThreeProds from "./components/ThreeProducts";
import WarrantyProfilesBrand from "./components/WarrantyProfilesBrand";
import { useState } from "react";

function App() {
  const [wishlist, setWishlist] = useState(0)
 
  

  const images = carouselData.map((data) => {
    return (
      <div className="carousel">
        <div className="carousel-left">
          <p className="carousel-title">{data.title}</p>
          <button className="carousel-button1">{data.button1}</button>
          <button className="carousel-button2">{data.button2}</button>
        </div>

        <div className="carousel-image">
          <img src={data.url} className={data.style} />
        </div>
      </div>
    );
  });

  const popularProds = popular.map((el) => {
    return (
      <PopularProdsFunc
        image={el.image}
        title={el.title}
        price={el.price}
        icon1={el.icon1}
        icon2={el.icon2}
        stars={el.stars}
        wishlist = {wishlist}
        setWishlist = {setWishlist}
        
      />
    );
  });

  return (
    <div className="App">
      <div className="Header">
        <Top />
      </div>
      <div className="menu-Container">
        <MainMenu wishlist={wishlist} />
      </div>
      <div className="FirstCarousel">
        <AliceCarousel autoPlay autoPlayInterval="3000">
          {images}
        </AliceCarousel>
      </div>

      <div className="inner-box">
        <MiniCarousel />
      </div>
      <div className="PopularTab d-flex justify-content-around mx-auto">
        <a>Popular products</a>
        <PopularTabs />
      </div>
      <div className="popular-prods">
        <AliceCarousel>
          <div className="pop-items d-flex my-4 justify-content-between">
            {popularProds}
          </div>
          <div className="pop-items d-flex my-4 justify-content-between">
            {popularProds}
          </div>
          <div className="pop-items d-flex my-4 justify-content-between">
            {popularProds}
          </div>
        </AliceCarousel>
      </div>

      <SaleBanner />

      <ThreeProds />
      <WarrantyProfilesBrand/>
    </div>
  );
}

export default App;
