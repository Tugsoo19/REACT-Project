import { Rating } from "react-simple-star-rating";

export default function PopularProdsFunc(props) {
  return (
    <div className="popular">
      <div className="border rounded-5">
        <div className="pop-top d-flex justify-content-center">
          <img src={props.image} className="pop-image"></img>
          <img src={props.icon1} className="pop-like"></img>
        </div>

        <div className="pop-bottom d-flex justify-content-between p-3">
          <div>
            <p className="pop-title px-2">{props.title}</p>
            <p className="pop-price px-2">{props.price}</p>
            <Rating initialValue={props.stars} />
          </div>

          <img src={props.icon2} className="pop-cart"></img>
        </div>
      </div>
    </div>
  );
}
