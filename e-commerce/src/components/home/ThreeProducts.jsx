import { Rating } from "react-simple-star-rating";
import { speakerData, threeProducts } from "../../data/popularProducts";

const items = threeProducts.map((el) => {
  return (
    <div className="d-flex border rounded-5 justify-content-between mb-2 p-3">
      <img src={el.image} className="speaker-right-img ms-3"></img>

      <div className="p-3">
        <p className="pop-title px-2">{el.title}</p>
        <p className="pop-price px-2">{el.price}</p>
        <Rating initialValue={el.stars} />
      </div>
    </div>
  );
});

const speaker = speakerData.map((el) => {
  return (
    <div className="d-flex border rounded-5 justify-content-around align-items-center m-2">
      <img src={el.image} className="speaker"></img>

      <div className="speaker-text p-3 ">
        <p className="pop-title px-2">{el.title}</p>
        <p className="pop-price px-2">{el.price}</p>
        <Rating initialValue={el.stars} />
        <br />
        <br />
        <button>
          <a>Add to card  </a>
          <img src="images/shopcart2.png"></img>
        </button>
      </div>
    </div>
  );
});

export default function ThreeProds() {
  return (
    <div className="d-flex justify-content-space m-2 gap-2">
      <div className="col-md-7 col-sm">{speaker}</div>
      <div className="col-md-5 col-sm align-items-center">{items}</div>
    </div>
  );
}
