import "./App.css";
import MainMenu from "./components/MainMenu";
import Top from "./components/Top";
import AliceCarousel from "react-alice-carousel";
import carouselData from "./data/carousel";
import miniCarousel from "./components/miniCarousel";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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

  const secondCarousel = miniCarousel.map((props) => {
    return (
      <miniCarousel 
        image = {props.image}
        title = {props.title}
      />
    );
  });

  return (
    <div className="App">
      <div className="Header">
        <Top />
      </div>
      <div className="menu-Container">
        <MainMenu />
      </div>

      <AliceCarousel autoPlay autoPlayInterval="3000">
        {images}
      </AliceCarousel>
      <div className="inner-box my-5">
        <AliceCarousel>
          <div className="row mx-auto">{secondCarousel}</div>
          <div className="row mx-auto">{secondCarousel}</div>
          <div className="row mx-auto">{secondCarousel}</div>
          <div className="row mx-auto">{secondCarousel}</div>
          //dfgkjdhgjd//
        </AliceCarousel>
      </div>
    </div>
  );
}

export default App;
