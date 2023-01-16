
import AliceCarousel from "react-alice-carousel";
import carouselData from "../../data/carousel";
import MiniCarousel from "./MiniCarousel";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PopularTabs from "./PopularTab";
import { popular } from "../../data/popularProducts";
import PopularProdsFunc from "./PopularProds";
import SaleBanner from "./SaleBanner";
import ThreeProds from "./ThreeProducts";
import WarrantyProfilesBrand from "./WarrantyProfilesBrand";
import LatestProdFunc from "./LatestProducts";



const Home = () => {
    const [wishlist, setWishlist] = useState(0);

  const images = carouselData.map((data) => {
    return (
      <div className="carousel">
        <div className="carousel-left">
          <p className="carousel-title">{data.title}</p>
          <button className="carousel-button1">{data.button1}</button>
          <button className="carousel-button2 border">{data.button2}</button>
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
        stars={el.stars}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
    );
  });

  return(
    <div>
        <div className="FirstCarousel">
        <AliceCarousel autoPlay autoPlayInterval="3000">
          {images}
        </AliceCarousel>
      </div>

      <div className="inner-box">
        <MiniCarousel />
      </div>
      <div className="PopularTab d-flex justify-content-around mx-auto">
        <a className="section-title">Popular products</a>
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
      <div className="d-flex justify-content-between align-items-center my-5">
        <a className="section-title">Latest news</a>
        <a href="#" className="more-link">
          View all
        </a>
      </div>
      <AliceCarousel>
        <div className="d-flex gap-3 ">{LatestProdFunc}</div>
        <div className="d-flex gap-3 ">{LatestProdFunc}</div>
      </AliceCarousel>
    </div>
  )

  
}

export default Home;