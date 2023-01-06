import "./App.css";
import MainMenu from "./components/MainMenu";
import Top from "./components/Top";
import AliceCarousel from "react-alice-carousel";
import carouselData from "./data/carousel";

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
    </div>
  );
}

export default App;
